"use strict";

const MSG_LEVELS = ["DEBUG", "INFO", "WARN", "ERROR"];
const DEFAULT_i18n_DATA_ATTR = "data-i18n";
const DEFAULT_i18n_DIR = "assets/vanilla-i18n";
const DEFAULT_LANG_TOGGLER_ID = "vanilla-i18n-toggler";

class vanilla_i18n {
  constructor(languages, opts) {
    this._languages = languages;
    this._path = this._sanitizePath(opts.path || DEFAULT_i18n_DIR);
    this._debug = opts.debug || false;
    this._i18nDataAttr = opts.i18n_attr_name || DEFAULT_i18n_DATA_ATTR;
    this._localStorageKey = this._generateKeyFromHost();
    this._togglerID = opts.toggler_id || DEFAULT_LANG_TOGGLER_ID;
    
    if (!opts.default_language) {
      opts.default_language = this._languages[0];
    }
    
    if (!this._getLanguage() && opts.default_language) {
      this._setSavedLanguage(opts.default_language);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      this._attachOnChangeToi18nToggler(this._togglerID);
    });
  }

  async run() {
    const lang = this._getLanguage();
    
    if (lang && !this._languages.includes(lang)) {
      this._printMsg(
        `unsupported ${lang} language found in local storage, supported languages are ${this._languages}`,
        MSG_LEVELS[3]
      );
      return;
    } else if (!lang) {
      this._printMsg(
        `no set language found, default language will be used`,
        MSG_LEVELS[2]
      );
      return;
    } else {
      const toggler = document.getElementById(this._togglerID);
      if(toggler) this._setTogglerValue(lang, this._togglerID);
    }

    const langTranslations = await this._loadLangFile(lang);
    if (!langTranslations) {
      this._printMsg(
        `failed to load translation file for ${lang}`,
        MSG_LEVELS[3]
      );
      return;
    }

    // Traducimos TODO (Texto normal y Atributos)
    this._translate(langTranslations);

    this._printMsg(
      `translation to ${lang} finished`,
      MSG_LEVELS[0]
    );
  }

  _runOnChange(selectedLang) {
    if (!this._languages.includes(selectedLang)) {
      this._printMsg(
        `${selectedLang} is not supported, supported languages are ${this._languages}`,
        MSG_LEVELS[3]
      );
      return;
    }

    const curLang = this._getLanguage();
    if (selectedLang != curLang) {
      this._printMsg(
        `switching to ${selectedLang} from ${curLang}`,
        MSG_LEVELS[1]
      );
      this._setSavedLanguage(selectedLang);
      this.run();
    } else {
      this._printMsg(
        `selected language is same as current language`,
        MSG_LEVELS[0]
      );
    }
  }

  _attachOnChangeToi18nToggler(toggler_id) {
    const langToggler = document.getElementById(toggler_id);
    if (langToggler) {
      langToggler.addEventListener("change", (event) => {
        this._runOnChange(event.target.value);
      });
    }
  }

  _setTogglerValue(lang, toggler_id) {
    const langToggler = document.getElementById(toggler_id);
    if (langToggler) {
      langToggler.value = lang;
      langToggler.dispatchEvent(new Event("change"));
    }
  }

  // --- FUNCIÓN MEJORADA: Traduce texto y atributos ---
  _translate(translation = undefined) {
    if (!translation) return;

    // 1. Traducir TEXTO (innerHTML) usando data-i18n
    const elements = document.querySelectorAll("[" + this._i18nDataAttr + "]");
    elements.forEach((element) => {
      var keys = element.getAttribute(this._i18nDataAttr).split(".");
      var text = keys.reduce((obj, i) => (obj ? obj[i] : null), translation);
      if (text) {
        element.innerHTML = text;
      }
    });

    // 2. Traducir PLACEHOLDERS (data-i18n-placeholder)
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach((element) => {
      var keys = element.getAttribute("data-i18n-placeholder").split(".");
      var text = keys.reduce((obj, i) => (obj ? obj[i] : null), translation);
      if (text) {
        element.placeholder = text;
      }
    });

    // 3. Traducir IMÁGENES ALT (data-i18n-alt)
    const alts = document.querySelectorAll("[data-i18n-alt]");
    alts.forEach((element) => {
      var keys = element.getAttribute("data-i18n-alt").split(".");
      var text = keys.reduce((obj, i) => (obj ? obj[i] : null), translation);
      if (text) {
        element.alt = text;
      }
    });
    
    // 4. Traducir TITULOS (data-i18n-title) - útil para tooltips
    const titles = document.querySelectorAll("[data-i18n-title]");
    titles.forEach((element) => {
      var keys = element.getAttribute("data-i18n-title").split(".");
      var text = keys.reduce((obj, i) => (obj ? obj[i] : null), translation);
      if (text) {
        element.title = text;
      }
    });
  }

  async _loadLangFile(lang = undefined) {
    if (!lang) return;
    const pathToLangFile = `/${this._path}/${lang}.json`;
    try {
      var res = await fetch(pathToLangFile);
      if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (error) {
       this._printMsg(error.message, MSG_LEVELS[3]);
       return;
    }
  }

  _getLanguage() {
    var lang = this._getSavedLanguage();
    if (!lang) {
      this._printMsg(
        "no saved language found, default language will load",
        MSG_LEVELS[0]
      );
    }
    return lang;
  }

  _getSavedLanguage() {
    return window.localStorage.getItem(this._localStorageKey);
  }

  _setSavedLanguage(lang) {
    if (!lang) return;
    window.localStorage.setItem(this._localStorageKey, lang);
  }

  _generateKeyFromHost() {
    return window.location.host + "-vanilla-i18n";
  }

  _sanitizePath(path) {
    path = path.trim();
    if (path[0] === "/") {
      path = path.slice(1, path.length);
    }
    if (path[path.length - 1] === "/") {
      path = path.slice(0, -1);
    }
    return path;
  }

  _printMsg(msg, level) {
    if (!(level === MSG_LEVELS[0]) || this._debug) {
      console.info("vanilla-i18n | " + level + ":" + msg);
    }
  }
}