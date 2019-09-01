export enum FILETYPE {
  /** Android (*.xml) */
  ANDROID = 'android',
  /** empty value or 'auto' — Try to detect file type by extension or MIME type */
  AUTO = 'auto',
  /** Comma Separated Values (*.csv) */
  CSV = 'csv',
  /** Delphi DKLang (*.dklang) */
  DELPHI = 'dklang',
  /** .NET, Windows Phone (*.resx) */
  DOT_NET = 'resx',
  /** empty value or "auto" — Try to detect file type by extension or MIME type */
  EMPTY = 'auto',
  /** Flex (*.properties) */
  FLEX = 'flex',
  /** Generic INI (*.ini) */
  GENERIC_INI = 'ini',
  /** Generic JSON (*.json) */
  GENERIC_JSON = 'json',
  /** Generic XML (*.xml) */
  GENERIC_XML = 'xml',
  /** GNU GetText (*.po, *.pot) */
  GNU = 'gettext',
  /** Google Chrome Extension (*.json) */
  GOOGLE_CHROME = 'chrome',
  /** Haml (*.haml) */
  HAML = 'haml',
  /** HTML (*.html, *.htm, *.xhtml, *.xhtm) */
  HTML = 'html',
  /** Hypertext Preprocessor (*.php) */
  HYPERTEXT = 'php',
  /** Java (*.properties) */
  JAVA = 'properties',
  /** Jekyll HTML (*.html) */
  JEKYLL_HTML = 'fm_html',
  /** Jekyll Markdown (*.md) */
  JEKYLL_MARKDOWN = 'fm_md',
  /** Joomla localizable resources (*.ini) */
  JOOMLA = 'joomla',
  /** Mac OS X / iOS (*.strings) */
  MAC = 'macosx',
  /** MadCap Flare (*.flnsp, .flpgpl .fltoc) */
  MADCAP = 'flsnp',
  /** Markdown (*.md, *.text, *.markdown...) */
  MARKDOWN = 'md',
  /** MediaWiki (*.wiki, *.wikitext, *.mediawiki) */
  MEDIAWIKI = 'mediawiki',
  /** Microsoft Office, OpenOffice.org Documents, Adobe InDesign Adobe FrameMaker(*.docx, *.dotx, *.odt, *.ott, *.xslx, *.xltx, *.pptx, *.potx, *.ods, *.ots, *.odg, *.otg, *.odp, *.otp, *.imdl, *.mif) */
  MICROSOFT = 'docx',
  /** Mozilla DTD (*.dtd) */
  MOZILLA_DTD = 'dtd',
  /** Nokia Qt (*.ts) */
  NOKIA_QT = 'qtts',
  /** NSIS Installer Resources (*.nsh) */
  NSIS = 'nsh',
  /** Plain Text (*.txt) */
  PLAIN = 'txt',
  /** Ruby On Rails (*.yaml) */
  RUBY = 'yaml',
  /** SubRip .srt (*.srt) */
  SUBRIP = 'srt',
  /** Video Subtitling and WebVTT (*.vtt) */
  VIDEO = 'vtt',
  /** Windows Resources (*.rc) */
  WINDOWS_RC = 'rc',
  /** Windows 8 Metro (*.resjson) */
  WINDOWS_RESJSON = 'resjson',
  /** Windows 8 Metro (*.resw) */
  WINDOWS_RESW = 'resw',
  /** WiX Installer (*.wxl) */
  WIX = 'wxl',
  /** XLIFF (*.xliff) */
  XLIFF = 'xliff',
  /** YouTube .sbv (*.sbv) */
  YOUTUBE = 'sbv',
}

export interface AddFileOptions {
  export_patterns?: string[];
  titles?: string[];
  type?: FILETYPE;
}

export interface ClientOptions {
  apiKey: string;
  apiUrl?: string;
}

export type RequestOptions = AddFileOptions;
