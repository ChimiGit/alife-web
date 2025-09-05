import require$$0$1, { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers_D5KtpA0t.mjs';
import require$$0 from 'js-yaml';

var kindOf;
var hasRequiredKindOf;

function requireKindOf () {
	if (hasRequiredKindOf) return kindOf;
	hasRequiredKindOf = 1;
	var toString = Object.prototype.toString;

	kindOf = function kindOf(val) {
	  if (val === void 0) return 'undefined';
	  if (val === null) return 'null';

	  var type = typeof val;
	  if (type === 'boolean') return 'boolean';
	  if (type === 'string') return 'string';
	  if (type === 'number') return 'number';
	  if (type === 'symbol') return 'symbol';
	  if (type === 'function') {
	    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
	  }

	  if (isArray(val)) return 'array';
	  if (isBuffer(val)) return 'buffer';
	  if (isArguments(val)) return 'arguments';
	  if (isDate(val)) return 'date';
	  if (isError(val)) return 'error';
	  if (isRegexp(val)) return 'regexp';

	  switch (ctorName(val)) {
	    case 'Symbol': return 'symbol';
	    case 'Promise': return 'promise';

	    // Set, Map, WeakSet, WeakMap
	    case 'WeakMap': return 'weakmap';
	    case 'WeakSet': return 'weakset';
	    case 'Map': return 'map';
	    case 'Set': return 'set';

	    // 8-bit typed arrays
	    case 'Int8Array': return 'int8array';
	    case 'Uint8Array': return 'uint8array';
	    case 'Uint8ClampedArray': return 'uint8clampedarray';

	    // 16-bit typed arrays
	    case 'Int16Array': return 'int16array';
	    case 'Uint16Array': return 'uint16array';

	    // 32-bit typed arrays
	    case 'Int32Array': return 'int32array';
	    case 'Uint32Array': return 'uint32array';
	    case 'Float32Array': return 'float32array';
	    case 'Float64Array': return 'float64array';
	  }

	  if (isGeneratorObj(val)) {
	    return 'generator';
	  }

	  // Non-plain objects
	  type = toString.call(val);
	  switch (type) {
	    case '[object Object]': return 'object';
	    // iterators
	    case '[object Map Iterator]': return 'mapiterator';
	    case '[object Set Iterator]': return 'setiterator';
	    case '[object String Iterator]': return 'stringiterator';
	    case '[object Array Iterator]': return 'arrayiterator';
	  }

	  // other
	  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
	};

	function ctorName(val) {
	  return typeof val.constructor === 'function' ? val.constructor.name : null;
	}

	function isArray(val) {
	  if (Array.isArray) return Array.isArray(val);
	  return val instanceof Array;
	}

	function isError(val) {
	  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
	}

	function isDate(val) {
	  if (val instanceof Date) return true;
	  return typeof val.toDateString === 'function'
	    && typeof val.getDate === 'function'
	    && typeof val.setDate === 'function';
	}

	function isRegexp(val) {
	  if (val instanceof RegExp) return true;
	  return typeof val.flags === 'string'
	    && typeof val.ignoreCase === 'boolean'
	    && typeof val.multiline === 'boolean'
	    && typeof val.global === 'boolean';
	}

	function isGeneratorFn(name, val) {
	  return ctorName(name) === 'GeneratorFunction';
	}

	function isGeneratorObj(val) {
	  return typeof val.throw === 'function'
	    && typeof val.return === 'function'
	    && typeof val.next === 'function';
	}

	function isArguments(val) {
	  try {
	    if (typeof val.length === 'number' && typeof val.callee === 'function') {
	      return true;
	    }
	  } catch (err) {
	    if (err.message.indexOf('callee') !== -1) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * If you need to support Safari 5-7 (8-10 yr-old browser),
	 * take a look at https://github.com/feross/is-buffer
	 */

	function isBuffer(val) {
	  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
	    return val.constructor.isBuffer(val);
	  }
	  return false;
	}
	return kindOf;
}

/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var isExtendable;
var hasRequiredIsExtendable;

function requireIsExtendable () {
	if (hasRequiredIsExtendable) return isExtendable;
	hasRequiredIsExtendable = 1;

	isExtendable = function isExtendable(val) {
	  return typeof val !== 'undefined' && val !== null
	    && (typeof val === 'object' || typeof val === 'function');
	};
	return isExtendable;
}

var extendShallow;
var hasRequiredExtendShallow;

function requireExtendShallow () {
	if (hasRequiredExtendShallow) return extendShallow;
	hasRequiredExtendShallow = 1;

	var isObject = requireIsExtendable();

	extendShallow = function extend(o/*, objects*/) {
	  if (!isObject(o)) { o = {}; }

	  var len = arguments.length;
	  for (var i = 1; i < len; i++) {
	    var obj = arguments[i];

	    if (isObject(obj)) {
	      assign(o, obj);
	    }
	  }
	  return o;
	};

	function assign(a, b) {
	  for (var key in b) {
	    if (hasOwn(b, key)) {
	      a[key] = b[key];
	    }
	  }
	}

	/**
	 * Returns true if the given `key` is an own property of `obj`.
	 */

	function hasOwn(obj, key) {
	  return Object.prototype.hasOwnProperty.call(obj, key);
	}
	return extendShallow;
}

var sectionMatter;
var hasRequiredSectionMatter;

function requireSectionMatter () {
	if (hasRequiredSectionMatter) return sectionMatter;
	hasRequiredSectionMatter = 1;

	var typeOf = requireKindOf();
	var extend = requireExtendShallow();

	/**
	 * Parse sections in `input` with the given `options`.
	 *
	 * ```js
	 * var sections = require('{%= name %}');
	 * var result = sections(input, options);
	 * // { content: 'Content before sections', sections: [] }
	 * ```
	 * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.
	 * @param {Object} options
	 * @return {Object} Returns an object with a `content` string and an array of `sections` objects.
	 * @api public
	 */

	sectionMatter = function(input, options) {
	  if (typeof options === 'function') {
	    options = { parse: options };
	  }

	  var file = toObject(input);
	  var defaults = {section_delimiter: '---', parse: identity};
	  var opts = extend({}, defaults, options);
	  var delim = opts.section_delimiter;
	  var lines = file.content.split(/\r?\n/);
	  var sections = null;
	  var section = createSection();
	  var content = [];
	  var stack = [];

	  function initSections(val) {
	    file.content = val;
	    sections = [];
	    content = [];
	  }

	  function closeSection(val) {
	    if (stack.length) {
	      section.key = getKey(stack[0], delim);
	      section.content = val;
	      opts.parse(section, sections);
	      sections.push(section);
	      section = createSection();
	      content = [];
	      stack = [];
	    }
	  }

	  for (var i = 0; i < lines.length; i++) {
	    var line = lines[i];
	    var len = stack.length;
	    var ln = line.trim();

	    if (isDelimiter(ln, delim)) {
	      if (ln.length === 3 && i !== 0) {
	        if (len === 0 || len === 2) {
	          content.push(line);
	          continue;
	        }
	        stack.push(ln);
	        section.data = content.join('\n');
	        content = [];
	        continue;
	      }

	      if (sections === null) {
	        initSections(content.join('\n'));
	      }

	      if (len === 2) {
	        closeSection(content.join('\n'));
	      }

	      stack.push(ln);
	      continue;
	    }

	    content.push(line);
	  }

	  if (sections === null) {
	    initSections(content.join('\n'));
	  } else {
	    closeSection(content.join('\n'));
	  }

	  file.sections = sections;
	  return file;
	};

	function isDelimiter(line, delim) {
	  if (line.slice(0, delim.length) !== delim) {
	    return false;
	  }
	  if (line.charAt(delim.length + 1) === delim.slice(-1)) {
	    return false;
	  }
	  return true;
	}

	function toObject(input) {
	  if (typeOf(input) !== 'object') {
	    input = { content: input };
	  }

	  if (typeof input.content !== 'string' && !isBuffer(input.content)) {
	    throw new TypeError('expected a buffer or string');
	  }

	  input.content = input.content.toString();
	  input.sections = [];
	  return input;
	}

	function getKey(val, delim) {
	  return val ? val.slice(delim.length).trim() : '';
	}

	function createSection() {
	  return { key: '', data: '', content: '' };
	}

	function identity(val) {
	  return val;
	}

	function isBuffer(val) {
	  if (val && val.constructor && typeof val.constructor.isBuffer === 'function') {
	    return val.constructor.isBuffer(val);
	  }
	  return false;
	}
	return sectionMatter;
}

var engines = {exports: {}};

var hasRequiredEngines;

function requireEngines () {
	if (hasRequiredEngines) return engines.exports;
	hasRequiredEngines = 1;
	(function (module, exports) {

		const yaml = require$$0;

		/**
		 * Default engines
		 */

		const engines = module.exports;

		/**
		 * YAML
		 */

		engines.yaml = {
		  parse: yaml.safeLoad.bind(yaml),
		  stringify: yaml.safeDump.bind(yaml)
		};

		/**
		 * JSON
		 */

		engines.json = {
		  parse: JSON.parse.bind(JSON),
		  stringify: function(obj, options) {
		    const opts = Object.assign({replacer: null, space: 2}, options);
		    return JSON.stringify(obj, opts.replacer, opts.space);
		  }
		};

		/**
		 * JavaScript
		 */

		engines.javascript = {
		  parse: function parse(str, options, wrap) {
		    /* eslint no-eval: 0 */
		    try {
		      if (wrap !== false) {
		        str = '(function() {\nreturn ' + str.trim() + ';\n}());';
		      }
		      return eval(str) || {};
		    } catch (err) {
		      if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
		        return parse(str, options, false);
		      }
		      throw new SyntaxError(err);
		    }
		  },
		  stringify: function() {
		    throw new Error('stringifying JavaScript is not supported');
		  }
		}; 
	} (engines));
	return engines.exports;
}

var utils = {};

/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var stripBomString;
var hasRequiredStripBomString;

function requireStripBomString () {
	if (hasRequiredStripBomString) return stripBomString;
	hasRequiredStripBomString = 1;

	stripBomString = function(str) {
	  if (typeof str === 'string' && str.charAt(0) === '\ufeff') {
	    return str.slice(1);
	  }
	  return str;
	};
	return stripBomString;
}

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {

		const stripBom = requireStripBomString();
		const typeOf = requireKindOf();

		exports.define = function(obj, key, val) {
		  Reflect.defineProperty(obj, key, {
		    enumerable: false,
		    configurable: true,
		    writable: true,
		    value: val
		  });
		};

		/**
		 * Returns true if `val` is a buffer
		 */

		exports.isBuffer = function(val) {
		  return typeOf(val) === 'buffer';
		};

		/**
		 * Returns true if `val` is an object
		 */

		exports.isObject = function(val) {
		  return typeOf(val) === 'object';
		};

		/**
		 * Cast `input` to a buffer
		 */

		exports.toBuffer = function(input) {
		  return typeof input === 'string' ? Buffer.from(input) : input;
		};

		/**
		 * Cast `val` to a string.
		 */

		exports.toString = function(input) {
		  if (exports.isBuffer(input)) return stripBom(String(input));
		  if (typeof input !== 'string') {
		    throw new TypeError('expected input to be a string or buffer');
		  }
		  return stripBom(input);
		};

		/**
		 * Cast `val` to an array.
		 */

		exports.arrayify = function(val) {
		  return val ? (Array.isArray(val) ? val : [val]) : [];
		};

		/**
		 * Returns true if `str` starts with `substr`.
		 */

		exports.startsWith = function(str, substr, len) {
		  if (typeof len !== 'number') len = substr.length;
		  return str.slice(0, len) === substr;
		}; 
	} (utils));
	return utils;
}

var defaults;
var hasRequiredDefaults;

function requireDefaults () {
	if (hasRequiredDefaults) return defaults;
	hasRequiredDefaults = 1;

	const engines = requireEngines();
	const utils = requireUtils();

	defaults = function(options) {
	  const opts = Object.assign({}, options);

	  // ensure that delimiters are an array
	  opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || '---');
	  if (opts.delimiters.length === 1) {
	    opts.delimiters.push(opts.delimiters[0]);
	  }

	  opts.language = (opts.language || opts.lang || 'yaml').toLowerCase();
	  opts.engines = Object.assign({}, engines, opts.parsers, opts.engines);
	  return opts;
	};
	return defaults;
}

var engine;
var hasRequiredEngine;

function requireEngine () {
	if (hasRequiredEngine) return engine;
	hasRequiredEngine = 1;

	engine = function(name, options) {
	  let engine = options.engines[name] || options.engines[aliase(name)];
	  if (typeof engine === 'undefined') {
	    throw new Error('gray-matter engine "' + name + '" is not registered');
	  }
	  if (typeof engine === 'function') {
	    engine = { parse: engine };
	  }
	  return engine;
	};

	function aliase(name) {
	  switch (name.toLowerCase()) {
	    case 'js':
	    case 'javascript':
	      return 'javascript';
	    case 'coffee':
	    case 'coffeescript':
	    case 'cson':
	      return 'coffee';
	    case 'yaml':
	    case 'yml':
	      return 'yaml';
	    default: {
	      return name;
	    }
	  }
	}
	return engine;
}

var stringify;
var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify;
	hasRequiredStringify = 1;

	const typeOf = requireKindOf();
	const getEngine = requireEngine();
	const defaults = requireDefaults();

	stringify = function(file, data, options) {
	  if (data == null && options == null) {
	    switch (typeOf(file)) {
	      case 'object':
	        data = file.data;
	        options = {};
	        break;
	      case 'string':
	        return file;
	      default: {
	        throw new TypeError('expected file to be a string or object');
	      }
	    }
	  }

	  const str = file.content;
	  const opts = defaults(options);
	  if (data == null) {
	    if (!opts.data) return file;
	    data = opts.data;
	  }

	  const language = file.language || opts.language;
	  const engine = getEngine(language, opts);
	  if (typeof engine.stringify !== 'function') {
	    throw new TypeError('expected "' + language + '.stringify" to be a function');
	  }

	  data = Object.assign({}, file.data, data);
	  const open = opts.delimiters[0];
	  const close = opts.delimiters[1];
	  const matter = engine.stringify(data, options).trim();
	  let buf = '';

	  if (matter !== '{}') {
	    buf = newline(open) + newline(matter) + newline(close);
	  }

	  if (typeof file.excerpt === 'string' && file.excerpt !== '') {
	    if (str.indexOf(file.excerpt.trim()) === -1) {
	      buf += newline(file.excerpt) + newline(close);
	    }
	  }

	  return buf + newline(str);
	};

	function newline(str) {
	  return str.slice(-1) !== '\n' ? str + '\n' : str;
	}
	return stringify;
}

var excerpt;
var hasRequiredExcerpt;

function requireExcerpt () {
	if (hasRequiredExcerpt) return excerpt;
	hasRequiredExcerpt = 1;

	const defaults = requireDefaults();

	excerpt = function(file, options) {
	  const opts = defaults(options);

	  if (file.data == null) {
	    file.data = {};
	  }

	  if (typeof opts.excerpt === 'function') {
	    return opts.excerpt(file, opts);
	  }

	  const sep = file.data.excerpt_separator || opts.excerpt_separator;
	  if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
	    return file;
	  }

	  const delimiter = typeof opts.excerpt === 'string'
	    ? opts.excerpt
	    : (sep || opts.delimiters[0]);

	  // if enabled, get the excerpt defined after front-matter
	  const idx = file.content.indexOf(delimiter);
	  if (idx !== -1) {
	    file.excerpt = file.content.slice(0, idx);
	  }

	  return file;
	};
	return excerpt;
}

var toFile;
var hasRequiredToFile;

function requireToFile () {
	if (hasRequiredToFile) return toFile;
	hasRequiredToFile = 1;

	const typeOf = requireKindOf();
	const stringify = requireStringify();
	const utils = requireUtils();

	/**
	 * Normalize the given value to ensure an object is returned
	 * with the expected properties.
	 */

	toFile = function(file) {
	  if (typeOf(file) !== 'object') {
	    file = { content: file };
	  }

	  if (typeOf(file.data) !== 'object') {
	    file.data = {};
	  }

	  // if file was passed as an object, ensure that
	  // "file.content" is set
	  if (file.contents && file.content == null) {
	    file.content = file.contents;
	  }

	  // set non-enumerable properties on the file object
	  utils.define(file, 'orig', utils.toBuffer(file.content));
	  utils.define(file, 'language', file.language || '');
	  utils.define(file, 'matter', file.matter || '');
	  utils.define(file, 'stringify', function(data, options) {
	    if (options && options.language) {
	      file.language = options.language;
	    }
	    return stringify(file, data, options);
	  });

	  // strip BOM and ensure that "file.content" is a string
	  file.content = utils.toString(file.content);
	  file.isEmpty = false;
	  file.excerpt = '';
	  return file;
	};
	return toFile;
}

var parse;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse;
	hasRequiredParse = 1;

	const getEngine = requireEngine();
	const defaults = requireDefaults();

	parse = function(language, str, options) {
	  const opts = defaults(options);
	  const engine = getEngine(language, opts);
	  if (typeof engine.parse !== 'function') {
	    throw new TypeError('expected "' + language + '.parse" to be a function');
	  }
	  return engine.parse(str, opts);
	};
	return parse;
}

var grayMatter;
var hasRequiredGrayMatter;

function requireGrayMatter () {
	if (hasRequiredGrayMatter) return grayMatter;
	hasRequiredGrayMatter = 1;

	const fs = require$$0$1;
	const sections = requireSectionMatter();
	const defaults = requireDefaults();
	const stringify = requireStringify();
	const excerpt = requireExcerpt();
	const engines = requireEngines();
	const toFile = requireToFile();
	const parse = requireParse();
	const utils = requireUtils();

	/**
	 * Takes a string or object with `content` property, extracts
	 * and parses front-matter from the string, then returns an object
	 * with `data`, `content` and other [useful properties](#returned-object).
	 *
	 * ```js
	 * const matter = require('gray-matter');
	 * console.log(matter('---\ntitle: Home\n---\nOther stuff'));
	 * //=> { data: { title: 'Home'}, content: 'Other stuff' }
	 * ```
	 * @param {Object|String} `input` String, or object with `content` string
	 * @param {Object} `options`
	 * @return {Object}
	 * @api public
	 */

	function matter(input, options) {
	  if (input === '') {
	    return { data: {}, content: input, excerpt: '', orig: input };
	  }

	  let file = toFile(input);
	  const cached = matter.cache[file.content];

	  if (!options) {
	    if (cached) {
	      file = Object.assign({}, cached);
	      file.orig = cached.orig;
	      return file;
	    }

	    // only cache if there are no options passed. if we cache when options
	    // are passed, we would need to also cache options values, which would
	    // negate any performance benefits of caching
	    matter.cache[file.content] = file;
	  }

	  return parseMatter(file, options);
	}

	/**
	 * Parse front matter
	 */

	function parseMatter(file, options) {
	  const opts = defaults(options);
	  const open = opts.delimiters[0];
	  const close = '\n' + opts.delimiters[1];
	  let str = file.content;

	  if (opts.language) {
	    file.language = opts.language;
	  }

	  // get the length of the opening delimiter
	  const openLen = open.length;
	  if (!utils.startsWith(str, open, openLen)) {
	    excerpt(file, opts);
	    return file;
	  }

	  // if the next character after the opening delimiter is
	  // a character from the delimiter, then it's not a front-
	  // matter delimiter
	  if (str.charAt(openLen) === open.slice(-1)) {
	    return file;
	  }

	  // strip the opening delimiter
	  str = str.slice(openLen);
	  const len = str.length;

	  // use the language defined after first delimiter, if it exists
	  const language = matter.language(str, opts);
	  if (language.name) {
	    file.language = language.name;
	    str = str.slice(language.raw.length);
	  }

	  // get the index of the closing delimiter
	  let closeIndex = str.indexOf(close);
	  if (closeIndex === -1) {
	    closeIndex = len;
	  }

	  // get the raw front-matter block
	  file.matter = str.slice(0, closeIndex);

	  const block = file.matter.replace(/^\s*#[^\n]+/gm, '').trim();
	  if (block === '') {
	    file.isEmpty = true;
	    file.empty = file.content;
	    file.data = {};
	  } else {

	    // create file.data by parsing the raw file.matter block
	    file.data = parse(file.language, file.matter, opts);
	  }

	  // update file.content
	  if (closeIndex === len) {
	    file.content = '';
	  } else {
	    file.content = str.slice(closeIndex + close.length);
	    if (file.content[0] === '\r') {
	      file.content = file.content.slice(1);
	    }
	    if (file.content[0] === '\n') {
	      file.content = file.content.slice(1);
	    }
	  }

	  excerpt(file, opts);

	  if (opts.sections === true || typeof opts.section === 'function') {
	    sections(file, opts.section);
	  }
	  return file;
	}

	/**
	 * Expose engines
	 */

	matter.engines = engines;

	/**
	 * Stringify an object to YAML or the specified language, and
	 * append it to the given string. By default, only YAML and JSON
	 * can be stringified. See the [engines](#engines) section to learn
	 * how to stringify other languages.
	 *
	 * ```js
	 * console.log(matter.stringify('foo bar baz', {title: 'Home'}));
	 * // results in:
	 * // ---
	 * // title: Home
	 * // ---
	 * // foo bar baz
	 * ```
	 * @param {String|Object} `file` The content string to append to stringified front-matter, or a file object with `file.content` string.
	 * @param {Object} `data` Front matter to stringify.
	 * @param {Object} `options` [Options](#options) to pass to gray-matter and [js-yaml].
	 * @return {String} Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.
	 * @api public
	 */

	matter.stringify = function(file, data, options) {
	  if (typeof file === 'string') file = matter(file, options);
	  return stringify(file, data, options);
	};

	/**
	 * Synchronously read a file from the file system and parse
	 * front matter. Returns the same object as the [main function](#matter).
	 *
	 * ```js
	 * const file = matter.read('./content/blog-post.md');
	 * ```
	 * @param {String} `filepath` file path of the file to read.
	 * @param {Object} `options` [Options](#options) to pass to gray-matter.
	 * @return {Object} Returns [an object](#returned-object) with `data` and `content`
	 * @api public
	 */

	matter.read = function(filepath, options) {
	  const str = fs.readFileSync(filepath, 'utf8');
	  const file = matter(str, options);
	  file.path = filepath;
	  return file;
	};

	/**
	 * Returns true if the given `string` has front matter.
	 * @param  {String} `string`
	 * @param  {Object} `options`
	 * @return {Boolean} True if front matter exists.
	 * @api public
	 */

	matter.test = function(str, options) {
	  return utils.startsWith(str, defaults(options).delimiters[0]);
	};

	/**
	 * Detect the language to use, if one is defined after the
	 * first front-matter delimiter.
	 * @param  {String} `string`
	 * @param  {Object} `options`
	 * @return {Object} Object with `raw` (actual language string), and `name`, the language with whitespace trimmed
	 */

	matter.language = function(str, options) {
	  const opts = defaults(options);
	  const open = opts.delimiters[0];

	  if (matter.test(str)) {
	    str = str.slice(open.length);
	  }

	  const language = str.slice(0, str.search(/\r?\n/));
	  return {
	    raw: language,
	    name: language ? language.trim() : ''
	  };
	};

	/**
	 * Expose `matter`
	 */

	matter.cache = {};
	matter.clearCache = function() {
	  matter.cache = {};
	};
	grayMatter = matter;
	return grayMatter;
}

var grayMatterExports = requireGrayMatter();
const matter = /*@__PURE__*/getDefaultExportFromCjs(grayMatterExports);

function getAllBlogs() {
  const blogsDirectory = join(process.cwd(), "src/content/blog");
  const blogFiles = readdirSync(blogsDirectory, { withFileTypes: true }).filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md")).map((dirent) => dirent.name);
  const blogs = blogFiles.map((filename) => {
    const filePath = join(blogsDirectory, filename);
    const fileContents = readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.md$/, "");
    return {
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      author: data.author,
      content,
      slug,
      category: data.category || "General",
      tags: data.tags || [],
      featuredImage: data.featuredImage || "/assets/images/Blog Loading.png"
    };
  });
  return blogs.sort(
    (a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()
  );
}
function getBlogBySlug(slug) {
  try {
    const filePath = join(process.cwd(), "src/content/blog", `${slug}.md`);
    const fileContents = readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      author: data.author,
      content,
      slug,
      category: data.category || "General",
      tags: data.tags || [],
      featuredImage: data.featuredImage || "/assets/images/Blog Loading.png"
    };
  } catch (error) {
    return null;
  }
}
function getBlogsByCategory(category) {
  const allBlogs = getAllBlogs();
  return allBlogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
}

export { getAllBlogs as a, getBlogsByCategory as b, getBlogBySlug as g };
