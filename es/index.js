function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React from 'react';
import classNames from 'classnames';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
var REFRESH_DISTANCE_SCREEN_Y_OFFSET = 1;
var StaticRenderer = /*#__PURE__*/function (_React$Component) {
  _inherits(StaticRenderer, _React$Component);
  var _super = _createSuper(StaticRenderer);
  function StaticRenderer() {
    _classCallCheck(this, StaticRenderer);
    return _super.apply(this, arguments);
  }
  _createClass(StaticRenderer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.shouldUpdate;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.render());
    }
  }]);
  return StaticRenderer;
}(React.Component);
function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}
var isWebView = typeof navigator !== 'undefined' && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var DOWN = 'down';
var UP = 'up';
var BOTH = 'both';
var INDICATOR = {
  activate: 'release',
  deactivate: 'pull',
  release: 'loading',
  finish: 'finish'
};
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {
  // empty
}
var willPreventDefault = supportsPassive ? {
  passive: false
} : false;
// const willNotPreventDefault = supportsPassive ? { passive: true } : false;
var PullToRefresh = /*#__PURE__*/function (_React$Component2) {
  _inherits(PullToRefresh, _React$Component2);
  var _super2 = _createSuper(PullToRefresh);
  function PullToRefresh() {
    var _this;
    _classCallCheck(this, PullToRefresh);
    _this = _super2.apply(this, arguments);
    // https://github.com/yiminghe/zscroller/blob/2d97973287135745818a0537712235a39a6a62a1/src/Scroller.js#L355
    // currSt: `activate` / `deactivate` / `release` / `finish`
    _this.state = {
      currSt: 'deactivate',
      dragOnEdge: false
    };
    _this._isMounted = false;
    _this.shouldUpdateChildren = false;
    _this.direction = _this.props.direction || DOWN;
    _this.currentMoveDirection = DOWN;
    _this.indicatorHeight = _this.props.indicatorHeight;
    _this.triggerPullToRefresh = function () {
      // 在初始化时、用代码 自动 触发 pullToRefresh
      // 注意：当 direction 为 up 时，当 visible length < content length 时、则看不到效果
      // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
      if (!_this.state.dragOnEdge && _this._isMounted) {
        if (_this.props.refreshing) {
          if (_this.props.direction === UP) {
            _this._lastScreenY = -_this.props.distanceToRefresh - 1;
          }
          if (_this.props.direction === DOWN) {
            _this._lastScreenY = _this.props.distanceToRefresh + 1;
          }
          // change dom need after setState
          _this.setState({
            currSt: 'release'
          }, function () {
            return _this.setContentStyle(_this._lastScreenY);
          });
        } else {
          _this.setState({
            currSt: 'finish'
          }, function () {
            return _this.reset();
          });
        }
      }
    };
    _this.init = function (ele) {
      if (!ele) {
        // like return in destroy fn ???!!
        return;
      }
      _this._to = {
        touchstart: _this.onTouchStart.bind(_assertThisInitialized(_this), ele),
        touchmove: _this.onTouchMove.bind(_assertThisInitialized(_this), ele),
        touchend: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele),
        touchcancel: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele)
      };
      Object.keys(_this._to).forEach(function (key) {
        ele.addEventListener(key, _this._to[key], willPreventDefault);
      });
    };
    _this.destroy = function (ele) {
      if (!_this._to || !ele) {
        // componentWillUnmount fire before componentDidMount, like forceUpdate ???!!
        return;
      }
      Object.keys(_this._to).forEach(function (key) {
        ele.removeEventListener(key, _this._to[key]);
      });
    };
    _this.onTouchStart = function (_ele, e) {
      _this._ScreenY = _this._startScreenY = e.touches[0].screenY;
      _this._startScreenX = e.touches[0].screenX;
      // 一开始 refreshing 为 true 时 this._lastScreenY 有值
      _this._lastScreenY = _this._lastScreenY || 0;
    };
    _this.isEdge = function (ele, direction) {
      var container = _this.props.getScrollContainer();
      // @ts-ignore
      if (container && container === document.body) {
        // In chrome61 `document.body.scrollTop` is invalid
        var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
        if (direction === UP) {
          return scrollNode.scrollHeight - scrollNode.scrollTop <= window.innerHeight;
        }
        if (direction === DOWN) {
          return scrollNode.scrollTop <= 0;
        }
      }
      if (direction === UP) {
        return ele.scrollHeight - ele.scrollTop === ele.clientHeight;
      }
      if (direction === DOWN) {
        return ele.scrollTop <= 0;
      }
    };
    _this.damping = function (dy) {
      if (Math.abs(_this._lastScreenY) > _this.props.damping) {
        return 0;
      }
      var ratio = Math.abs(_this._ScreenY - _this._startScreenY) / window.screen.height;
      dy *= (1 - ratio) * _this.props.scale;
      return dy;
    };
    _this.onTouchMove = function (ele, e) {
      // 使用 pageY 对比有问题
      var _screenY = e.touches[0].screenY;
      var _screenX = e.touches[0].screenX;
      // 横向滑动不处理
      if (Math.abs(_screenX - _this._startScreenX) > 20 * window.devicePixelRatio) {
        return;
      }
      if (_this._startScreenY < _screenY) {
        _this.currentMoveDirection = DOWN;
      } else {
        _this.currentMoveDirection = UP;
      }
      // 拖动方向不符合的不处理
      if ((_this.direction === UP || _this.currentMoveDirection === UP) && _this._startScreenY < _screenY || (_this.direction === DOWN || _this.currentMoveDirection === DOWN) && _this._startScreenY > _screenY) {
        return;
      }
      if (_this.isEdge(ele, _this.currentMoveDirection)) {
        if (!_this.state.dragOnEdge) {
          // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
          // 下面这行代码解决了上面这个问题
          _this._ScreenY = _this._startScreenY = e.touches[0].screenY;
          _this.setState({
            dragOnEdge: true
          });
        }
        e.preventDefault();
        // add stopPropagation with fastclick will trigger content onClick event. why?
        // ref https://github.com/ant-design/ant-design-mobile/issues/2141
        // e.stopPropagation();
        var _diff = Math.round(_screenY - _this._ScreenY);
        _this._ScreenY = _screenY;
        _this._lastScreenY += _this.damping(_diff);
        _this.setContentStyle(_this._lastScreenY);
        if (Math.abs(_this._lastScreenY) < _this.props.distanceToRefresh) {
          if (_this.state.currSt !== 'deactivate') {
            // console.log('back to the distance');
            _this.setState({
              currSt: 'deactivate'
            });
          }
        } else {
          if (_this.state.currSt === 'deactivate') {
            // console.log('reach to the distance');
            _this.setState({
              currSt: 'activate'
            });
          }
        }
        // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
        // iOS UIWebView issue, It seems no problem in WKWebView
        if (isWebView && e.changedTouches[0].clientY < 0) {
          _this.onTouchEnd();
        }
      }
    };
    _this.onTouchEnd = function () {
      if (_this.state.dragOnEdge) {
        _this.setState({
          dragOnEdge: false
        });
      }
      if (_this.state.currSt === 'activate') {
        _this.setState({
          currSt: 'release'
        });
        _this._timer = setTimeout(function () {
          if (!_this.props.refreshing) {
            _this.setState({
              currSt: 'finish'
            }, function () {
              return _this.reset();
            });
          }
          _this._timer = undefined;
        }, 1000);
        if (_this.direction === BOTH && _this.currentMoveDirection == UP) {
          if (_this.props.onFooterRefresh) {
            _this.props.onFooterRefresh();
          }
        } else {
          _this.props.onRefresh();
        }
      } else {
        _this.reset();
      }
    };
    _this.reset = function () {
      _this._lastScreenY = 0;
      _this.setContentStyle(0);
    };
    _this.setContentStyle = function (ty) {
      // todos: Why sometimes do not have `this.contentRef` ?
      if (_this.contentRef) {
        setTransform(_this.contentRef.style, "translate3d(0px,".concat(ty, "px,0)"));
      }
    };
    return _this;
  }
  _createClass(PullToRefresh, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // @ts-ignore
      this.shouldUpdateChildren = this.props.children !== nextProps.children;
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props || prevProps.refreshing === this.props.refreshing) {
        return;
      }
      // triggerPullToRefresh 需要尽可能减少 setState 次数
      this.triggerPullToRefresh();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // `getScrollContainer` most likely return React.Node at the next tick. Need setTimeout
      setTimeout(function () {
        _this2.init(_this2.props.getScrollContainer() || _this2.containerRef);
        _this2.triggerPullToRefresh();
        _this2._isMounted = true;
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Should have no setTimeout here!
      this.destroy(this.props.getScrollContainer() || this.containerRef);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var props = Object.assign({}, this.props);
      delete props.damping;
      var className = props.className,
        prefixCls = props.prefixCls,
        children = props.children,
        getScrollContainer = props.getScrollContainer,
        _props$footerIndicato = props.footerIndicatorHeight,
        footerIndicatorHeight = _props$footerIndicato === void 0 ? 0 : _props$footerIndicato,
        direction = props.direction,
        onRefresh = props.onRefresh,
        refreshing = props.refreshing,
        indicator = props.indicator,
        indicatorHeight = props.indicatorHeight,
        onFooterRefresh = props.onFooterRefresh,
        footerIndicator = props.footerIndicator,
        distanceToRefresh = props.distanceToRefresh,
        restProps = __rest(props, ["className", "prefixCls", "children", "getScrollContainer", "footerIndicatorHeight", "direction", "onRefresh", "refreshing", "indicator", "indicatorHeight", "onFooterRefresh", "footerIndicator", "distanceToRefresh"]);
      var getIndicatorStyle = function getIndicatorStyle() {
        if (direction === UP) {
          return {
            height: "".concat(indicatorHeight, "px"),
            marginBottom: "-".concat(indicatorHeight + REFRESH_DISTANCE_SCREEN_Y_OFFSET, "px")
          };
        }
        if (direction === DOWN) {
          return {
            height: "".concat(indicatorHeight, "px"),
            marginTop: "-".concat(indicatorHeight + REFRESH_DISTANCE_SCREEN_Y_OFFSET, "px")
          };
        }
        if (direction === BOTH) {
          return {
            height: "".concat(footerIndicatorHeight, "px"),
            marginBottom: "-".concat(footerIndicatorHeight + REFRESH_DISTANCE_SCREEN_Y_OFFSET, "px")
          };
        }
      };
      var renderChildren = React.createElement(StaticRenderer, {
        shouldUpdate: this.shouldUpdateChildren,
        render: function render() {
          return children;
        }
      });
      var renderBothRefresh = function renderBothRefresh() {
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "".concat(prefixCls, "-indicator"),
          style: {
            height: "".concat(indicatorHeight, "px"),
            marginTop: "-".concat(indicatorHeight + REFRESH_DISTANCE_SCREEN_Y_OFFSET, "px")
          }
        }, indicator[_this3.state.currSt] || INDICATOR[_this3.state.currSt]), renderChildren);
      };
      var getIndicator = function getIndicator() {
        // 1. direction UP, DOWN -> use indicator
        // 2. direction BOTH -> use footerIndicator
        if (direction !== BOTH) {
          return indicator;
        }
        if (footerIndicator) {
          return footerIndicator;
        } else {
          return indicator;
        }
      };
      var renderRefresh = function renderRefresh(cls) {
        var cla = classNames(cls, !_this3.state.dragOnEdge && "".concat(prefixCls, "-transition"));
        return React.createElement("div", {
          className: "".concat(prefixCls, "-content-wrapper"),
          style: {
            overflow: 'hidden'
          }
        }, React.createElement("div", {
          className: cla,
          ref: function ref(el) {
            return _this3.contentRef = el;
          }
        }, direction === BOTH ? renderBothRefresh() : null, direction === UP ? renderChildren : null, React.createElement("div", {
          className: "".concat(prefixCls, "-indicator"),
          style: getIndicatorStyle()
        }, getIndicator()[_this3.state.currSt] || INDICATOR[_this3.state.currSt]), direction === DOWN ? renderChildren : null));
      };
      if (getScrollContainer()) {
        return renderRefresh("".concat(prefixCls, "-content ").concat(prefixCls, "-").concat(direction));
      }
      return React.createElement("div", Object.assign({
        ref: function ref(el) {
          return _this3.containerRef = el;
        },
        className: classNames(className, prefixCls, "".concat(prefixCls, "-").concat(direction))
      }, restProps), renderRefresh("".concat(prefixCls, "-content")));
    }
  }]);
  return PullToRefresh;
}(React.Component);
PullToRefresh.defaultProps = {
  prefixCls: 'rmc-pull-to-refresh',
  getScrollContainer: function getScrollContainer() {
    return undefined;
  },
  direction: DOWN,
  distanceToRefresh: 25,
  damping: 100,
  indicator: INDICATOR,
  scale: 0.6
};
export { PullToRefresh as default };
