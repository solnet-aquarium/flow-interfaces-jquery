/* jshint ignore: start */
declare class _jQueryCallbacks_ {
  attributeCallback(index: number, attr: string): string | number;
}

declare class _jQuery_ {
  scrollTop(): number;
  width(): number;
  attr(attributeName: string): string;
  attr(attributeName: string, value: string | number): _jQuery_;
  attr(attributes: Object): _jQuery_;
  attr(attributeName: string, attributeCallback: _jQueryCallbacks_.attributeCallback): _jQuery_;
}

var $ = function(Element) {
  return new _jQuery_;
}

