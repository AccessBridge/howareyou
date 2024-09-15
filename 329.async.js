(self.webpackChunk = self.webpackChunk || []).push([
  [329],
  {
    27745: function (f, d) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 });
      var o = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
              },
            },
          ],
        },
        name: 'arrow-left',
        theme: 'outlined',
      };
      d.default = o;
    },
    37567: function (f, d) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 });
      var o = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d: 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z',
              },
            },
          ],
        },
        name: 'arrow-right',
        theme: 'outlined',
      };
      d.default = o;
    },
    26287: function (f, d, o) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      const a = y(o(39025));
      function y(b) {
        return b && b.__esModule ? b : { default: b };
      }
      const c = a;
      (d.default = c), (f.exports = c);
    },
    84209: function (f, d, o) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      const a = y(o(58210));
      function y(b) {
        return b && b.__esModule ? b : { default: b };
      }
      const c = a;
      (d.default = c), (f.exports = c);
    },
    95359: function (f, d, o) {
      'use strict';
      'use client';
      var a = o(70391).default,
        y = o(42667).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      var c = a(o(78331)),
        b = a(o(47191)),
        Z = a(o(75335)),
        C = a(o(620)),
        R = y(o(82702)),
        A = a(o(91150)),
        m = o(73921),
        O = a(o(88010)),
        k = a(o(57665)),
        ue = o(34306),
        Ze = o(90830),
        ye = [
          'className',
          'icon',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'twoToneColor',
        ];
      (0, ue.setTwoToneColor)(m.blue.primary);
      var ve = R.forwardRef(function (me, Le) {
        var q = me.className,
          Y = me.icon,
          x = me.spin,
          U = me.rotate,
          ee = me.tabIndex,
          J = me.onClick,
          ge = me.twoToneColor,
          Ee = (0, C.default)(me, ye),
          Ce = R.useContext(O.default),
          xe = Ce.prefixCls,
          je = xe === void 0 ? 'anticon' : xe,
          Xe = Ce.rootClassName,
          Ke = (0, A.default)(
            Xe,
            je,
            (0, Z.default)(
              (0, Z.default)({}, ''.concat(je, '-').concat(Y.name), !!Y.name),
              ''.concat(je, '-spin'),
              !!x || Y.name === 'loading',
            ),
            q,
          ),
          Ae = ee;
        Ae === void 0 && J && (Ae = -1);
        var et = U
            ? {
                msTransform: 'rotate('.concat(U, 'deg)'),
                transform: 'rotate('.concat(U, 'deg)'),
              }
            : void 0,
          he = (0, Ze.normalizeTwoToneColors)(ge),
          Ve = (0, b.default)(he, 2),
          Qe = Ve[0],
          D = Ve[1];
        return R.createElement(
          'span',
          (0, c.default)({ role: 'img', 'aria-label': Y.name }, Ee, {
            ref: Le,
            tabIndex: Ae,
            onClick: J,
            className: Ke,
          }),
          R.createElement(k.default, {
            icon: Y,
            primaryColor: Qe,
            secondaryColor: D,
            style: et,
          }),
        );
      });
      (ve.displayName = 'AntdIcon'),
        (ve.getTwoToneColor = ue.getTwoToneColor),
        (ve.setTwoToneColor = ue.setTwoToneColor);
      var He = (d.default = ve);
    },
    88010: function (f, d, o) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      var a = o(82702),
        y = (0, a.createContext)({}),
        c = (d.default = y);
    },
    57665: function (f, d, o) {
      'use strict';
      var a = o(70391).default,
        y = o(42667).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      var c = a(o(620)),
        b = a(o(45874)),
        Z = y(o(82702)),
        C = o(90830),
        R = [
          'icon',
          'className',
          'onClick',
          'style',
          'primaryColor',
          'secondaryColor',
        ],
        A = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
      function m(Ze) {
        var ye = Ze.primaryColor,
          ve = Ze.secondaryColor;
        (A.primaryColor = ye),
          (A.secondaryColor = ve || (0, C.getSecondaryColor)(ye)),
          (A.calculated = !!ve);
      }
      function O() {
        return (0, b.default)({}, A);
      }
      var k = function (ye) {
        var ve = ye.icon,
          He = ye.className,
          me = ye.onClick,
          Le = ye.style,
          q = ye.primaryColor,
          Y = ye.secondaryColor,
          x = (0, c.default)(ye, R),
          U = Z.useRef(),
          ee = A;
        if (
          (q &&
            (ee = {
              primaryColor: q,
              secondaryColor: Y || (0, C.getSecondaryColor)(q),
            }),
          (0, C.useInsertStyles)(U),
          (0, C.warning)(
            (0, C.isIconDefinition)(ve),
            'icon should be icon definiton, but got '.concat(ve),
          ),
          !(0, C.isIconDefinition)(ve))
        )
          return null;
        var J = ve;
        return (
          J &&
            typeof J.icon == 'function' &&
            (J = (0, b.default)(
              (0, b.default)({}, J),
              {},
              { icon: J.icon(ee.primaryColor, ee.secondaryColor) },
            )),
          (0, C.generate)(
            J.icon,
            'svg-'.concat(J.name),
            (0, b.default)(
              (0, b.default)(
                {
                  className: He,
                  onClick: me,
                  style: Le,
                  'data-icon': J.name,
                  width: '1em',
                  height: '1em',
                  fill: 'currentColor',
                  'aria-hidden': 'true',
                },
                x,
              ),
              {},
              { ref: U },
            ),
          )
        );
      };
      (k.displayName = 'IconReact'),
        (k.getTwoToneColors = O),
        (k.setTwoToneColors = m);
      var ue = (d.default = k);
    },
    34306: function (f, d, o) {
      'use strict';
      var a = o(70391).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.getTwoToneColor = C),
        (d.setTwoToneColor = Z);
      var y = a(o(47191)),
        c = a(o(57665)),
        b = o(90830);
      function Z(R) {
        var A = (0, b.normalizeTwoToneColors)(R),
          m = (0, y.default)(A, 2),
          O = m[0],
          k = m[1];
        return c.default.setTwoToneColors({
          primaryColor: O,
          secondaryColor: k,
        });
      }
      function C() {
        var R = c.default.getTwoToneColors();
        return R.calculated
          ? [R.primaryColor, R.secondaryColor]
          : R.primaryColor;
      }
    },
    39025: function (f, d, o) {
      'use strict';
      var a = o(42667).default,
        y = o(70391).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      var c = y(o(78331)),
        b = a(o(82702)),
        Z = y(o(27745)),
        C = y(o(95359)),
        R = function (k, ue) {
          return b.createElement(
            C.default,
            (0, c.default)({}, k, { ref: ue, icon: Z.default }),
          );
        },
        A = b.forwardRef(R),
        m = (d.default = A);
    },
    58210: function (f, d, o) {
      'use strict';
      var a = o(42667).default,
        y = o(70391).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0);
      var c = y(o(78331)),
        b = a(o(82702)),
        Z = y(o(37567)),
        C = y(o(95359)),
        R = function (k, ue) {
          return b.createElement(
            C.default,
            (0, c.default)({}, k, { ref: ue, icon: Z.default }),
          );
        },
        A = b.forwardRef(R),
        m = (d.default = A);
    },
    90830: function (f, d, o) {
      'use strict';
      var a = o(42667).default,
        y = o(70391).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.generate = ve),
        (d.getSecondaryColor = He),
        (d.iconStyles = void 0),
        (d.isIconDefinition = Ze),
        (d.normalizeAttrs = ye),
        (d.normalizeTwoToneColors = me),
        (d.useInsertStyles = d.svgBaseProps = void 0),
        (d.warning = ue);
      var c = y(o(45874)),
        b = y(o(18458)),
        Z = o(73921),
        C = o(26024),
        R = o(11762),
        A = y(o(54424)),
        m = a(o(82702)),
        O = y(o(88010));
      function k(x) {
        return x.replace(/-(.)/g, function (U, ee) {
          return ee.toUpperCase();
        });
      }
      function ue(x, U) {
        (0, A.default)(x, '[@ant-design/icons] '.concat(U));
      }
      function Ze(x) {
        return (
          (0, b.default)(x) === 'object' &&
          typeof x.name == 'string' &&
          typeof x.theme == 'string' &&
          ((0, b.default)(x.icon) === 'object' || typeof x.icon == 'function')
        );
      }
      function ye() {
        var x =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.keys(x).reduce(function (U, ee) {
          var J = x[ee];
          switch (ee) {
            case 'class':
              (U.className = J), delete U.class;
              break;
            default:
              delete U[ee], (U[k(ee)] = J);
          }
          return U;
        }, {});
      }
      function ve(x, U, ee) {
        return ee
          ? m.default.createElement(
              x.tag,
              (0, c.default)((0, c.default)({ key: U }, ye(x.attrs)), ee),
              (x.children || []).map(function (J, ge) {
                return ve(J, ''.concat(U, '-').concat(x.tag, '-').concat(ge));
              }),
            )
          : m.default.createElement(
              x.tag,
              (0, c.default)({ key: U }, ye(x.attrs)),
              (x.children || []).map(function (J, ge) {
                return ve(J, ''.concat(U, '-').concat(x.tag, '-').concat(ge));
              }),
            );
      }
      function He(x) {
        return (0, Z.generate)(x)[0];
      }
      function me(x) {
        return x ? (Array.isArray(x) ? x : [x]) : [];
      }
      var Le = (d.svgBaseProps = {
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false',
        }),
        q = (d.iconStyles = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`),
        Y = (d.useInsertStyles = function (U) {
          var ee = (0, m.useContext)(O.default),
            J = ee.csp,
            ge = ee.prefixCls,
            Ee = q;
          ge && (Ee = Ee.replace(/anticon/g, ge)),
            (0, m.useEffect)(function () {
              var Ce = U.current,
                xe = (0, R.getShadowRoot)(Ce);
              (0,
              C.updateCSS)(Ee, '@ant-design-icons', { prepend: !0, csp: J, attachTo: xe });
            }, []);
        });
    },
    69294: function (f, d, o) {
      'use strict';
      o.d(d, {
        S: function () {
          return q;
        },
      });
      var a = o(83525),
        y = o(73990),
        c = o(22361),
        b = o(41670),
        Z = o(76894),
        C = o(57285),
        R = o(91150),
        A = o.n(R),
        m = o(91105),
        O = o(82702),
        k = o(41654),
        ue = o(77153),
        Ze = o(93112),
        ye = function (x) {
          return (0, y.Z)({}, x.componentCls, {
            position: 'fixed',
            insetInlineEnd: 0,
            bottom: 0,
            zIndex: 99,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            paddingInline: 24,
            paddingBlock: 0,
            boxSizing: 'border-box',
            lineHeight: '64px',
            backgroundColor: (0, Ze.uK)(x.colorBgElevated, 0.6),
            borderBlockStart: '1px solid '.concat(x.colorSplit),
            '-webkit-backdrop-filter': 'blur(8px)',
            backdropFilter: 'blur(8px)',
            color: x.colorText,
            transition: 'all 0.2s ease 0s',
            '&-left': { flex: 1, color: x.colorText },
            '&-right': {
              color: x.colorText,
              '> *': {
                marginInlineEnd: 8,
                '&:last-child': { marginBlock: 0, marginInline: 0 },
              },
            },
          });
        };
      function ve(Y) {
        return (0, Ze.Xj)('ProLayoutFooterToolbar', function (x) {
          var U = (0, a.Z)(
            (0, a.Z)({}, x),
            {},
            { componentCls: '.'.concat(Y) },
          );
          return [ye(U)];
        });
      }
      function He(Y, x) {
        var U = x.stylish;
        return (0, Ze.Xj)('ProLayoutFooterToolbarStylish', function (ee) {
          var J = (0, a.Z)(
            (0, a.Z)({}, ee),
            {},
            { componentCls: '.'.concat(Y) },
          );
          return U
            ? [
                (0, y.Z)(
                  {},
                  ''.concat(J.componentCls),
                  U == null ? void 0 : U(J),
                ),
              ]
            : [];
        });
      }
      var me = o(97616),
        Le = [
          'children',
          'className',
          'extra',
          'portalDom',
          'style',
          'renderContent',
        ],
        q = function (x) {
          var U = x.children,
            ee = x.className,
            J = x.extra,
            ge = x.portalDom,
            Ee = ge === void 0 ? !0 : ge,
            Ce = x.style,
            xe = x.renderContent,
            je = (0, b.Z)(x, Le),
            Xe = (0, O.useContext)(C.ZP.ConfigContext),
            Ke = Xe.getPrefixCls,
            Ae = Xe.getTargetContainer,
            et = x.prefixCls || Ke('pro'),
            he = ''.concat(et, '-footer-bar'),
            Ve = ve(he),
            Qe = Ve.wrapSSR,
            D = Ve.hashId,
            Re = (0, O.useContext)(ue.X),
            Ue = (0, O.useMemo)(
              function () {
                var Ge = Re.hasSiderMenu,
                  ze = Re.isMobile,
                  st = Re.siderWidth;
                if (Ge)
                  return st
                    ? ze
                      ? '100%'
                      : 'calc(100% - '.concat(st, 'px)')
                    : '100%';
              },
              [Re.collapsed, Re.hasSiderMenu, Re.isMobile, Re.siderWidth],
            ),
            ot = (0, O.useMemo)(function () {
              return (typeof window == 'undefined'
                ? 'undefined'
                : (0, c.Z)(window)) === void 0 ||
                (typeof document == 'undefined'
                  ? 'undefined'
                  : (0, c.Z)(document)) === void 0
                ? null
                : (Ae == null ? void 0 : Ae()) || document.body;
            }, []),
            it = He(''.concat(he, '.').concat(he, '-stylish'), {
              stylish: x.stylish,
            }),
            lt = (0, me.jsxs)(me.Fragment, {
              children: [
                (0, me.jsx)('div', {
                  className: ''.concat(he, '-left ').concat(D).trim(),
                  children: J,
                }),
                (0, me.jsx)('div', {
                  className: ''.concat(he, '-right ').concat(D).trim(),
                  children: U,
                }),
              ],
            });
          (0, O.useEffect)(function () {
            return !Re || !(Re != null && Re.setHasFooterToolbar)
              ? function () {}
              : (Re == null || Re.setHasFooterToolbar(!0),
                function () {
                  var Ge;
                  Re == null ||
                    (Ge = Re.setHasFooterToolbar) === null ||
                    Ge === void 0 ||
                    Ge.call(Re, !1);
                });
          }, []);
          var tt = (0, me.jsx)(
              'div',
              (0, a.Z)(
                (0, a.Z)(
                  {
                    className: A()(
                      ee,
                      D,
                      he,
                      (0, y.Z)({}, ''.concat(he, '-stylish'), !!x.stylish),
                    ),
                    style: (0, a.Z)({ width: Ue }, Ce),
                  },
                  (0, m.Z)(je, ['prefixCls']),
                ),
                {},
                {
                  children: xe
                    ? xe(
                        (0, a.Z)(
                          (0, a.Z)((0, a.Z)({}, x), Re),
                          {},
                          { leftWidth: Ue },
                        ),
                        lt,
                      )
                    : lt,
                },
              ),
            ),
            ct =
              !(0, Z.j)() || !Ee || !ot ? tt : (0, k.createPortal)(tt, ot, he);
          return it.wrapSSR(Qe((0, me.jsx)(O.Fragment, { children: ct }, he)));
        };
    },
    2329: function (f, d, o) {
      'use strict';
      o.d(d, {
        _z: function () {
          return g;
        },
      });
      var a = o(73990),
        y = o(41670),
        c = o(83525),
        b = o(22361),
        Z = o(91496),
        C = o(5960),
        R = o(68200),
        A = o(57285),
        m = o(82702),
        O = o(91150),
        k = o.n(O),
        ue = o(31774),
        Ze = o(53172),
        ye = o(80104),
        ve = o(23766);
      function He(r) {
        let e;
        const i = (s) => () => {
            (e = null), r.apply(void 0, (0, ye.Z)(s));
          },
          l = function () {
            if (e == null) {
              for (
                var s = arguments.length, h = new Array(s), p = 0;
                p < s;
                p++
              )
                h[p] = arguments[p];
              e = (0, ve.Z)(i(h));
            }
          };
        return (
          (l.cancel = () => {
            ve.Z.cancel(e), (e = null);
          }),
          l
        );
      }
      var me = He,
        Le = o(64775),
        q = o(86029);
      const Y = (r) => {
          const { componentCls: e } = r;
          return { [e]: { position: 'fixed', zIndex: r.zIndexPopup } };
        },
        x = (r) => ({ zIndexPopup: r.zIndexBase + 10 });
      var U = (0, q.I$)('Affix', Y, x);
      function ee(r) {
        return r !== window
          ? r.getBoundingClientRect()
          : { top: 0, bottom: window.innerHeight };
      }
      function J(r, e, i) {
        if (i !== void 0 && Math.round(e.top) > Math.round(r.top) - i)
          return i + e.top;
      }
      function ge(r, e, i) {
        if (i !== void 0 && Math.round(e.bottom) < Math.round(r.bottom) + i) {
          const l = window.innerHeight - e.bottom;
          return i + l;
        }
      }
      const Ee = [
        'resize',
        'scroll',
        'touchstart',
        'touchmove',
        'touchend',
        'pageshow',
        'load',
      ];
      function Ce() {
        return typeof window != 'undefined' ? window : null;
      }
      const xe = 0,
        je = 1;
      var Ke = m.forwardRef((r, e) => {
          var i;
          const {
              style: l,
              offsetTop: s,
              offsetBottom: h,
              prefixCls: p,
              className: w,
              rootClassName: F,
              children: T,
              target: B,
              onChange: S,
            } = r,
            { getPrefixCls: $, getTargetContainer: M } = m.useContext(Le.E_),
            L = $('affix', p),
            [E, X] = m.useState(!1),
            [I, W] = m.useState(),
            [H, G] = m.useState(),
            K = m.useRef(xe),
            N = m.useRef(null),
            j = m.useRef(),
            V = m.useRef(null),
            re = m.useRef(null),
            oe = m.useRef(null),
            z = (i = B != null ? B : M) !== null && i !== void 0 ? i : Ce,
            be = h === void 0 && s === void 0 ? 0 : s,
            pe = () => {
              if (K.current !== je || !re.current || !V.current || !z) return;
              const se = z();
              if (se) {
                const de = { status: xe },
                  ae = ee(V.current);
                if (
                  ae.top === 0 &&
                  ae.left === 0 &&
                  ae.width === 0 &&
                  ae.height === 0
                )
                  return;
                const ne = ee(se),
                  Te = J(ae, ne, be),
                  Be = ge(ae, ne, h);
                Te !== void 0
                  ? ((de.affixStyle = {
                      position: 'fixed',
                      top: Te,
                      width: ae.width,
                      height: ae.height,
                    }),
                    (de.placeholderStyle = {
                      width: ae.width,
                      height: ae.height,
                    }))
                  : Be !== void 0 &&
                    ((de.affixStyle = {
                      position: 'fixed',
                      bottom: Be,
                      width: ae.width,
                      height: ae.height,
                    }),
                    (de.placeholderStyle = {
                      width: ae.width,
                      height: ae.height,
                    })),
                  (de.lastAffix = !!de.affixStyle),
                  E !== de.lastAffix && (S == null || S(de.lastAffix)),
                  (K.current = de.status),
                  W(de.affixStyle),
                  G(de.placeholderStyle),
                  X(de.lastAffix);
              }
            },
            ce = () => {
              var se;
              (K.current = je), pe();
            },
            fe = me(() => {
              ce();
            }),
            Se = me(() => {
              if (z && I) {
                const se = z();
                if (se && V.current) {
                  const de = ee(se),
                    ae = ee(V.current),
                    ne = J(ae, de, be),
                    Te = ge(ae, de, h);
                  if (
                    (ne !== void 0 && I.top === ne) ||
                    (Te !== void 0 && I.bottom === Te)
                  )
                    return;
                }
              }
              ce();
            }),
            _ = () => {
              const se = z == null ? void 0 : z();
              se &&
                (Ee.forEach((de) => {
                  var ae;
                  j.current &&
                    ((ae = N.current) === null ||
                      ae === void 0 ||
                      ae.removeEventListener(de, j.current)),
                    se == null || se.addEventListener(de, Se);
                }),
                (N.current = se),
                (j.current = Se));
            },
            Q = () => {
              oe.current && (clearTimeout(oe.current), (oe.current = null));
              const se = z == null ? void 0 : z();
              Ee.forEach((de) => {
                var ae;
                se == null || se.removeEventListener(de, Se),
                  j.current &&
                    ((ae = N.current) === null ||
                      ae === void 0 ||
                      ae.removeEventListener(de, j.current));
              }),
                fe.cancel(),
                Se.cancel();
            };
          m.useImperativeHandle(e, () => ({ updatePosition: fe })),
            m.useEffect(() => ((oe.current = setTimeout(_)), () => Q()), []),
            m.useEffect(() => {
              _();
            }, [B, I]),
            m.useEffect(() => {
              fe();
            }, [B, s, h]);
          const [ie, Pe, $e] = U(L),
            Oe = k()(F, Pe, L, $e),
            we = k()({ [Oe]: I });
          let We = (0, Ze.Z)(r, [
            'prefixCls',
            'offsetTop',
            'offsetBottom',
            'target',
            'onChange',
            'rootClassName',
          ]);
          return ie(
            m.createElement(
              ue.Z,
              { onResize: fe },
              m.createElement(
                'div',
                Object.assign({ style: l, className: w, ref: V }, We),
                I &&
                  m.createElement('div', { style: H, 'aria-hidden': 'true' }),
                m.createElement(
                  'div',
                  { className: we, ref: re, style: I },
                  m.createElement(ue.Z, { onResize: fe }, T),
                ),
              ),
            ),
          );
        }),
        Ae = o(77153),
        et = o(69294),
        he = o(93112),
        Ve = function (e) {
          return (0, a.Z)({}, e.componentCls, {
            width: '100%',
            '&-wide': { maxWidth: 1152, margin: '0 auto' },
          });
        };
      function Qe(r) {
        return (0, he.Xj)('ProLayoutGridContent', function (e) {
          var i = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [Ve(i)];
        });
      }
      var D = o(97616),
        Re = function (e) {
          var i = (0, m.useContext)(Ae.X),
            l = e.children,
            s = e.contentWidth,
            h = e.className,
            p = e.style,
            w = (0, m.useContext)(A.ZP.ConfigContext),
            F = w.getPrefixCls,
            T = e.prefixCls || F('pro'),
            B = s || i.contentWidth,
            S = ''.concat(T, '-grid-content'),
            $ = Qe(S),
            M = $.wrapSSR,
            L = $.hashId,
            E = B === 'Fixed' && i.layout === 'top';
          return M(
            (0, D.jsx)('div', {
              className: k()(S, L, h, (0, a.Z)({}, ''.concat(S, '-wide'), E)),
              style: p,
              children: (0, D.jsx)('div', {
                className: ''
                  .concat(T, '-grid-content-children ')
                  .concat(L)
                  .trim(),
                children: l,
              }),
            }),
          );
        },
        Ue = o(72561),
        ot = o(26287),
        it = o.n(ot),
        lt = o(84209),
        tt = o.n(lt),
        ct = o(96865),
        Ge = o(87569),
        ze = o(90182),
        st = o(72356),
        Ht = o(9249);
      const xt = (r) => {
        let { children: e } = r;
        const { getPrefixCls: i } = m.useContext(Le.E_),
          l = i('breadcrumb');
        return m.createElement(
          'li',
          { className: `${l}-separator`, 'aria-hidden': 'true' },
          e === '' ? e : e || '/',
        );
      };
      xt.__ANT_BREADCRUMB_SEPARATOR = !0;
      var mt = xt,
        Dt = function (r, e) {
          var i = {};
          for (var l in r)
            Object.prototype.hasOwnProperty.call(r, l) &&
              e.indexOf(l) < 0 &&
              (i[l] = r[l]);
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var s = 0, l = Object.getOwnPropertySymbols(r);
              s < l.length;
              s++
            )
              e.indexOf(l[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r, l[s]) &&
                (i[l[s]] = r[l[s]]);
          return i;
        };
      function Je(r, e) {
        if (r.title === void 0 || r.title === null) return null;
        const i = Object.keys(e).join('|');
        return typeof r.title == 'object'
          ? r.title
          : String(r.title).replace(
              new RegExp(`:(${i})`, 'g'),
              (l, s) => e[s] || l,
            );
      }
      function nt(r, e, i, l) {
        if (i == null) return null;
        const { className: s, onClick: h } = e,
          p = Dt(e, ['className', 'onClick']),
          w = Object.assign(
            Object.assign({}, (0, Ge.Z)(p, { data: !0, aria: !0 })),
            { onClick: h },
          );
        return l !== void 0
          ? m.createElement(
              'a',
              Object.assign({}, w, { className: k()(`${r}-link`, s), href: l }),
              i,
            )
          : m.createElement(
              'span',
              Object.assign({}, w, { className: k()(`${r}-link`, s) }),
              i,
            );
      }
      function Wt(r, e) {
        return (l, s, h, p, w) => {
          if (e) return e(l, s, h, p);
          const F = Je(l, s);
          return nt(r, l, F, w);
        };
      }
      var dt = function (r, e) {
        var i = {};
        for (var l in r)
          Object.prototype.hasOwnProperty.call(r, l) &&
            e.indexOf(l) < 0 &&
            (i[l] = r[l]);
        if (r != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var s = 0, l = Object.getOwnPropertySymbols(r);
            s < l.length;
            s++
          )
            e.indexOf(l[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(r, l[s]) &&
              (i[l[s]] = r[l[s]]);
        return i;
      };
      const St = (r) => {
          const {
              prefixCls: e,
              separator: i = '/',
              children: l,
              menu: s,
              overlay: h,
              dropdownProps: p,
              href: w,
            } = r,
            T = ((B) => {
              if (s || h) {
                const S = Object.assign({}, p);
                if (s) {
                  const $ = s || {},
                    { items: M } = $,
                    L = dt($, ['items']);
                  S.menu = Object.assign(Object.assign({}, L), {
                    items:
                      M == null
                        ? void 0
                        : M.map((E, X) => {
                            var { key: I, title: W, label: H, path: G } = E,
                              K = dt(E, ['key', 'title', 'label', 'path']);
                            let N = H != null ? H : W;
                            return (
                              G &&
                                (N = m.createElement(
                                  'a',
                                  { href: `${w}${G}` },
                                  N,
                                )),
                              Object.assign(Object.assign({}, K), {
                                key: I != null ? I : X,
                                label: N,
                              })
                            );
                          }),
                  });
                } else h && (S.overlay = h);
                return m.createElement(
                  Ht.Z,
                  Object.assign({ placement: 'bottom' }, S),
                  m.createElement(
                    'span',
                    { className: `${e}-overlay-link` },
                    B,
                    m.createElement(st.Z, null),
                  ),
                );
              }
              return B;
            })(l);
          return T != null
            ? m.createElement(
                m.Fragment,
                null,
                m.createElement('li', null, T),
                i && m.createElement(mt, null, i),
              )
            : null;
        },
        gt = (r) => {
          const { prefixCls: e, children: i, href: l } = r,
            s = dt(r, ['prefixCls', 'children', 'href']),
            { getPrefixCls: h } = m.useContext(Le.E_),
            p = h('breadcrumb', e);
          return m.createElement(
            St,
            Object.assign({}, s, { prefixCls: p }),
            nt(p, s, i, l),
          );
        };
      gt.__ANT_BREADCRUMB_ITEM = !0;
      var Ft = gt,
        Pt = o(78456),
        $t = o(96867),
        Xt = o(77179);
      const Gt = (r) => {
          const { componentCls: e, iconCls: i, calc: l } = r;
          return {
            [e]: Object.assign(Object.assign({}, (0, $t.Wf)(r)), {
              color: r.itemColor,
              fontSize: r.fontSize,
              [i]: { fontSize: r.iconFontSize },
              ol: {
                display: 'flex',
                flexWrap: 'wrap',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              },
              a: Object.assign(
                {
                  color: r.linkColor,
                  transition: `color ${r.motionDurationMid}`,
                  padding: `0 ${(0, Pt.bf)(r.paddingXXS)}`,
                  borderRadius: r.borderRadiusSM,
                  height: r.fontHeight,
                  display: 'inline-block',
                  marginInline: l(r.marginXXS).mul(-1).equal(),
                  '&:hover': {
                    color: r.linkHoverColor,
                    backgroundColor: r.colorBgTextHover,
                  },
                },
                (0, $t.Qy)(r),
              ),
              'li:last-child': { color: r.lastItemColor },
              [`${e}-separator`]: {
                marginInline: r.separatorMargin,
                color: r.separatorColor,
              },
              [`${e}-link`]: {
                [`
          > ${i} + span,
          > ${i} + a
        `]: { marginInlineStart: r.marginXXS },
              },
              [`${e}-overlay-link`]: {
                borderRadius: r.borderRadiusSM,
                height: r.fontHeight,
                display: 'inline-block',
                padding: `0 ${(0, Pt.bf)(r.paddingXXS)}`,
                marginInline: l(r.marginXXS).mul(-1).equal(),
                [`> ${i}`]: {
                  marginInlineStart: r.marginXXS,
                  fontSize: r.fontSizeIcon,
                },
                '&:hover': {
                  color: r.linkHoverColor,
                  backgroundColor: r.colorBgTextHover,
                  a: { color: r.linkHoverColor },
                },
                a: { '&:hover': { backgroundColor: 'transparent' } },
              },
              [`&${r.componentCls}-rtl`]: { direction: 'rtl' },
            }),
          };
        },
        Kt = (r) => ({
          itemColor: r.colorTextDescription,
          lastItemColor: r.colorText,
          iconFontSize: r.fontSize,
          linkColor: r.colorTextDescription,
          linkHoverColor: r.colorText,
          separatorColor: r.colorTextDescription,
          separatorMargin: r.marginXS,
        });
      var Vt = (0, q.I$)(
          'Breadcrumb',
          (r) => {
            const e = (0, Xt.IX)(r, {});
            return Gt(e);
          },
          Kt,
        ),
        Tt = function (r, e) {
          var i = {};
          for (var l in r)
            Object.prototype.hasOwnProperty.call(r, l) &&
              e.indexOf(l) < 0 &&
              (i[l] = r[l]);
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var s = 0, l = Object.getOwnPropertySymbols(r);
              s < l.length;
              s++
            )
              e.indexOf(l[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r, l[s]) &&
                (i[l[s]] = r[l[s]]);
          return i;
        };
      function Rn(r) {
        const { breadcrumbName: e, children: i } = r,
          l = Tt(r, ['breadcrumbName', 'children']),
          s = Object.assign({ title: e }, l);
        return (
          i &&
            (s.menu = {
              items: i.map((h) => {
                var { breadcrumbName: p } = h,
                  w = Tt(h, ['breadcrumbName']);
                return Object.assign(Object.assign({}, w), { title: p });
              }),
            }),
          s
        );
      }
      function Ut(r, e) {
        return (0, m.useMemo)(() => r || (e ? e.map(Rn) : null), [r, e]);
      }
      var kt = function (r, e) {
        var i = {};
        for (var l in r)
          Object.prototype.hasOwnProperty.call(r, l) &&
            e.indexOf(l) < 0 &&
            (i[l] = r[l]);
        if (r != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var s = 0, l = Object.getOwnPropertySymbols(r);
            s < l.length;
            s++
          )
            e.indexOf(l[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(r, l[s]) &&
              (i[l[s]] = r[l[s]]);
        return i;
      };
      const Rt = (r, e) => {
          if (e === void 0) return e;
          let i = (e || '').replace(/^\//, '');
          return (
            Object.keys(r).forEach((l) => {
              i = i.replace(`:${l}`, r[l]);
            }),
            i
          );
        },
        bt = (r) => {
          const {
              prefixCls: e,
              separator: i = '/',
              style: l,
              className: s,
              rootClassName: h,
              routes: p,
              items: w,
              children: F,
              itemRender: T,
              params: B = {},
            } = r,
            S = kt(r, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'rootClassName',
              'routes',
              'items',
              'children',
              'itemRender',
              'params',
            ]),
            {
              getPrefixCls: $,
              direction: M,
              breadcrumb: L,
            } = m.useContext(Le.E_);
          let E;
          const X = $('breadcrumb', e),
            [I, W, H] = Vt(X),
            G = Ut(w, p),
            K = Wt(X, T);
          if (G && G.length > 0) {
            const V = [],
              re = w || p;
            E = G.map((oe, z) => {
              const {
                  path: be,
                  key: pe,
                  type: ce,
                  menu: fe,
                  overlay: Se,
                  onClick: _,
                  className: Q,
                  separator: ie,
                  dropdownProps: Pe,
                } = oe,
                $e = Rt(B, be);
              $e !== void 0 && V.push($e);
              const Oe = pe != null ? pe : z;
              if (ce === 'separator')
                return m.createElement(mt, { key: Oe }, ie);
              const we = {},
                We = z === G.length - 1;
              fe ? (we.menu = fe) : Se && (we.overlay = Se);
              let { href: se } = oe;
              return (
                V.length && $e !== void 0 && (se = `#/${V.join('/')}`),
                m.createElement(
                  St,
                  Object.assign(
                    { key: Oe },
                    we,
                    (0, Ge.Z)(oe, { data: !0, aria: !0 }),
                    {
                      className: Q,
                      dropdownProps: Pe,
                      href: se,
                      separator: We ? '' : i,
                      onClick: _,
                      prefixCls: X,
                    },
                  ),
                  K(oe, B, re, V, se),
                )
              );
            });
          } else if (F) {
            const V = (0, ct.Z)(F).length;
            E = (0, ct.Z)(F).map((re, oe) => {
              if (!re) return re;
              const z = oe === V - 1;
              return (0, ze.Tm)(re, { separator: z ? '' : i, key: oe });
            });
          }
          const N = k()(
              X,
              L == null ? void 0 : L.className,
              { [`${X}-rtl`]: M === 'rtl' },
              s,
              h,
              W,
              H,
            ),
            j = Object.assign(
              Object.assign({}, L == null ? void 0 : L.style),
              l,
            );
          return I(
            m.createElement(
              'nav',
              Object.assign({ className: N, style: j }, S),
              m.createElement('ol', null, E),
            ),
          );
        };
      (bt.Item = Ft), (bt.Separator = mt);
      var Yt = bt,
        Qt = Yt,
        Jt = o(72447),
        _t = o(73042),
        It = o(89071),
        Zt = function () {
          return {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          };
        },
        qt = function (e) {
          var i;
          return (0, a.Z)(
            {},
            e.componentCls,
            (0, c.Z)(
              (0, c.Z)(
                {},
                he.Wf === null || he.Wf === void 0 ? void 0 : (0, he.Wf)(e),
              ),
              {},
              (0, a.Z)(
                (0, a.Z)(
                  (0, a.Z)(
                    (0, a.Z)(
                      (0, a.Z)(
                        (0, a.Z)(
                          (0, a.Z)(
                            (0, a.Z)(
                              {
                                position: 'relative',
                                backgroundColor: e.colorWhite,
                                paddingBlock: e.pageHeaderPaddingVertical + 2,
                                paddingInline: e.pageHeaderPadding,
                                '&&-ghost': {
                                  backgroundColor: e.pageHeaderBgGhost,
                                },
                                '&-no-children': {
                                  height:
                                    (i = e.layout) === null ||
                                    i === void 0 ||
                                    (i = i.pageContainer) === null ||
                                    i === void 0
                                      ? void 0
                                      : i.paddingBlockPageContainerContent,
                                },
                                '&&-has-breadcrumb': {
                                  paddingBlockStart:
                                    e.pageHeaderPaddingBreadCrumb,
                                },
                                '&&-has-footer': { paddingBlockEnd: 0 },
                                '& &-back': (0, a.Z)(
                                  {
                                    marginInlineEnd: e.margin,
                                    fontSize: 16,
                                    lineHeight: 1,
                                    '&-button': (0, c.Z)(
                                      (0, c.Z)(
                                        { fontSize: 16 },
                                        he.Nd === null || he.Nd === void 0
                                          ? void 0
                                          : (0, he.Nd)(e),
                                      ),
                                      {},
                                      {
                                        color: e.pageHeaderColorBack,
                                        cursor: 'pointer',
                                      },
                                    ),
                                  },
                                  ''.concat(e.componentCls, '-rlt &'),
                                  {
                                    float: 'right',
                                    marginInlineEnd: 0,
                                    marginInlineStart: 0,
                                  },
                                ),
                              },
                              '& '.concat('ant', '-divider-vertical'),
                              {
                                height: 14,
                                marginBlock: 0,
                                marginInline: e.marginSM,
                                verticalAlign: 'middle',
                              },
                            ),
                            '& &-breadcrumb + &-heading',
                            { marginBlockStart: e.marginXS },
                          ),
                          '& &-heading',
                          {
                            display: 'flex',
                            justifyContent: 'space-between',
                            '&-left': {
                              display: 'flex',
                              alignItems: 'center',
                              marginBlock: e.marginXS / 2,
                              marginInlineEnd: 0,
                              marginInlineStart: 0,
                              overflow: 'hidden',
                            },
                            '&-title': (0, c.Z)(
                              (0, c.Z)(
                                {
                                  marginInlineEnd: e.marginSM,
                                  marginBlockEnd: 0,
                                  color: e.colorTextHeading,
                                  fontWeight: 600,
                                  fontSize: e.pageHeaderFontSizeHeaderTitle,
                                  lineHeight: e.controlHeight + 'px',
                                },
                                Zt(),
                              ),
                              {},
                              (0, a.Z)(
                                {},
                                ''.concat(e.componentCls, '-rlt &'),
                                {
                                  marginInlineEnd: 0,
                                  marginInlineStart: e.marginSM,
                                },
                              ),
                            ),
                            '&-avatar': (0, a.Z)(
                              { marginInlineEnd: e.marginSM },
                              ''.concat(e.componentCls, '-rlt &'),
                              {
                                float: 'right',
                                marginInlineEnd: 0,
                                marginInlineStart: e.marginSM,
                              },
                            ),
                            '&-tags': (0, a.Z)(
                              {},
                              ''.concat(e.componentCls, '-rlt &'),
                              { float: 'right' },
                            ),
                            '&-sub-title': (0, c.Z)(
                              (0, c.Z)(
                                {
                                  marginInlineEnd: e.marginSM,
                                  color: e.colorTextSecondary,
                                  fontSize: e.pageHeaderFontSizeHeaderSubTitle,
                                  lineHeight: e.lineHeight,
                                },
                                Zt(),
                              ),
                              {},
                              (0, a.Z)(
                                {},
                                ''.concat(e.componentCls, '-rlt &'),
                                {
                                  float: 'right',
                                  marginInlineEnd: 0,
                                  marginInlineStart: 12,
                                },
                              ),
                            ),
                            '&-extra': (0, a.Z)(
                              (0, a.Z)(
                                {
                                  marginBlock: e.marginXS / 2,
                                  marginInlineEnd: 0,
                                  marginInlineStart: 0,
                                  whiteSpace: 'nowrap',
                                  '> *': (0, a.Z)(
                                    { 'white-space': 'unset' },
                                    ''.concat(e.componentCls, '-rlt &'),
                                    {
                                      marginInlineEnd: e.marginSM,
                                      marginInlineStart: 0,
                                    },
                                  ),
                                },
                                ''.concat(e.componentCls, '-rlt &'),
                                { float: 'left' },
                              ),
                              '*:first-child',
                              (0, a.Z)(
                                {},
                                ''.concat(e.componentCls, '-rlt &'),
                                { marginInlineEnd: 0 },
                              ),
                            ),
                          },
                        ),
                        '&-content',
                        {
                          paddingBlockStart: e.pageHeaderPaddingContentPadding,
                        },
                      ),
                      '&-footer',
                      { marginBlockStart: e.margin },
                    ),
                    '&-compact &-heading',
                    { flexWrap: 'wrap' },
                  ),
                  '&-wide',
                  { maxWidth: 1152, margin: '0 auto' },
                ),
                '&-rtl',
                { direction: 'rtl' },
              ),
            ),
          );
        };
      function en(r) {
        return (0, he.Xj)('ProLayoutPageHeader', function (e) {
          var i = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            {
              componentCls: '.'.concat(r),
              pageHeaderBgGhost: 'transparent',
              pageHeaderPadding: 16,
              pageHeaderPaddingVertical: 4,
              pageHeaderPaddingBreadCrumb: e.paddingSM,
              pageHeaderColorBack: e.colorTextHeading,
              pageHeaderFontSizeHeaderTitle: e.fontSizeHeading4,
              pageHeaderFontSizeHeaderSubTitle: 14,
              pageHeaderPaddingContentPadding: e.paddingSM,
            },
          );
          return [qt(i)];
        });
      }
      var tn = function (e, i, l, s) {
          return !l || !s
            ? null
            : (0, D.jsx)('div', {
                className: ''.concat(e, '-back ').concat(i).trim(),
                children: (0, D.jsx)('div', {
                  role: 'button',
                  onClick: function (p) {
                    s == null || s(p);
                  },
                  className: ''.concat(e, '-back-button ').concat(i).trim(),
                  'aria-label': 'back',
                  children: l,
                }),
              });
        },
        nn = function (e, i) {
          var l;
          return (l = e.items) !== null && l !== void 0 && l.length
            ? (0, D.jsx)(
                Qt,
                (0, c.Z)(
                  (0, c.Z)({}, e),
                  {},
                  { className: k()(''.concat(i, '-breadcrumb'), e.className) },
                ),
              )
            : null;
        },
        an = function (e) {
          var i =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 'ltr';
          return e.backIcon !== void 0
            ? e.backIcon
            : i === 'rtl'
            ? (0, D.jsx)(tt(), {})
            : (0, D.jsx)(it(), {});
        },
        rn = function (e, i) {
          var l =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : 'ltr',
            s = arguments.length > 3 ? arguments[3] : void 0,
            h = i.title,
            p = i.avatar,
            w = i.subTitle,
            F = i.tags,
            T = i.extra,
            B = i.onBack,
            S = ''.concat(e, '-heading'),
            $ = h || w || F || T;
          if (!$) return null;
          var M = an(i, l),
            L = tn(e, s, M, B),
            E = L || p || $;
          return (0, D.jsxs)('div', {
            className: S + ' ' + s,
            children: [
              E &&
                (0, D.jsxs)('div', {
                  className: ''.concat(S, '-left ').concat(s).trim(),
                  children: [
                    L,
                    p &&
                      (0, D.jsx)(
                        Jt.C,
                        (0, c.Z)(
                          {
                            className: k()(
                              ''.concat(S, '-avatar'),
                              s,
                              p.className,
                            ),
                          },
                          p,
                        ),
                      ),
                    h &&
                      (0, D.jsx)('span', {
                        className: ''.concat(S, '-title ').concat(s).trim(),
                        title: typeof h == 'string' ? h : void 0,
                        children: h,
                      }),
                    w &&
                      (0, D.jsx)('span', {
                        className: ''.concat(S, '-sub-title ').concat(s).trim(),
                        title: typeof w == 'string' ? w : void 0,
                        children: w,
                      }),
                    F &&
                      (0, D.jsx)('span', {
                        className: ''.concat(S, '-tags ').concat(s).trim(),
                        children: F,
                      }),
                  ],
                }),
              T &&
                (0, D.jsx)('span', {
                  className: ''.concat(S, '-extra ').concat(s).trim(),
                  children: (0, D.jsx)(_t.Z, { children: T }),
                }),
            ],
          });
        },
        te = function (e, i, l) {
          return i
            ? (0, D.jsx)('div', {
                className: ''.concat(e, '-footer ').concat(l).trim(),
                children: i,
              })
            : null;
        },
        at = function (e, i, l) {
          return (0, D.jsx)('div', {
            className: ''.concat(e, '-content ').concat(l).trim(),
            children: i,
          });
        },
        on = function r(e) {
          return e == null
            ? void 0
            : e.map(function (i) {
                var l;
                return (
                  (0, It.ET)(
                    !!i.breadcrumbName,
                    'Route.breadcrumbName is deprecated, please use Route.title instead.',
                  ),
                  (0, c.Z)(
                    (0, c.Z)({}, i),
                    {},
                    {
                      breadcrumbName: void 0,
                      children: void 0,
                      title: i.title || i.breadcrumbName,
                    },
                    (l = i.children) !== null && l !== void 0 && l.length
                      ? { menu: { items: r(i.children) } }
                      : {},
                  )
                );
              });
        },
        ln = function (e) {
          var i,
            l = m.useState(!1),
            s = (0, Ue.Z)(l, 2),
            h = s[0],
            p = s[1],
            w = function (Pe) {
              var $e = Pe.width;
              return p($e < 768);
            },
            F = m.useContext(A.ZP.ConfigContext),
            T = F.getPrefixCls,
            B = F.direction,
            S = e.prefixCls,
            $ = e.style,
            M = e.footer,
            L = e.children,
            E = e.breadcrumb,
            X = e.breadcrumbRender,
            I = e.className,
            W = e.contentWidth,
            H = e.layout,
            G = e.ghost,
            K = G === void 0 ? !0 : G,
            N = T('page-header', S),
            j = en(N),
            V = j.wrapSSR,
            re = j.hashId,
            oe = function () {
              return (
                E &&
                  !(E != null && E.items) &&
                  E !== null &&
                  E !== void 0 &&
                  E.routes &&
                  ((0, It.ET)(
                    !1,
                    'The routes of Breadcrumb is deprecated, please use items instead.',
                  ),
                  (E.items = on(E.routes))),
                E != null && E.items ? nn(E, N) : null
              );
            },
            z = oe(),
            be = E && 'props' in E,
            pe =
              (i =
                X == null
                  ? void 0
                  : X((0, c.Z)((0, c.Z)({}, e), {}, { prefixCls: N }), z)) !==
                null && i !== void 0
                ? i
                : z,
            ce = be ? E : pe,
            fe = k()(
              N,
              re,
              I,
              (0, a.Z)(
                (0, a.Z)(
                  (0, a.Z)(
                    (0, a.Z)(
                      (0, a.Z)(
                        (0, a.Z)({}, ''.concat(N, '-has-breadcrumb'), !!ce),
                        ''.concat(N, '-has-footer'),
                        !!M,
                      ),
                      ''.concat(N, '-rtl'),
                      B === 'rtl',
                    ),
                    ''.concat(N, '-compact'),
                    h,
                  ),
                  ''.concat(N, '-wide'),
                  W === 'Fixed' && H == 'top',
                ),
                ''.concat(N, '-ghost'),
                K,
              ),
            ),
            Se = rn(N, e, B, re),
            _ = L && at(N, L, re),
            Q = te(N, M, re);
          return !ce && !Se && !Q && !_
            ? (0, D.jsx)('div', {
                className: k()(re, [''.concat(N, '-no-children')]),
              })
            : V(
                (0, D.jsx)(ue.Z, {
                  onResize: w,
                  children: (0, D.jsxs)('div', {
                    className: fe,
                    style: $,
                    children: [ce, Se, _, Q],
                  }),
                }),
              );
        },
        wt = o(11986),
        In = function (e) {
          if (!e) return 1;
          var i =
            e.backingStorePixelRatio ||
            e.webkitBackingStorePixelRatio ||
            e.mozBackingStorePixelRatio ||
            e.msBackingStorePixelRatio ||
            e.oBackingStorePixelRatio ||
            1;
          return (window.devicePixelRatio || 1) / i;
        },
        cn = function (e) {
          var i = (0, he.dQ)(),
            l = i.token,
            s = e.children,
            h = e.style,
            p = e.className,
            w = e.markStyle,
            F = e.markClassName,
            T = e.zIndex,
            B = T === void 0 ? 9 : T,
            S = e.gapX,
            $ = S === void 0 ? 212 : S,
            M = e.gapY,
            L = M === void 0 ? 222 : M,
            E = e.width,
            X = E === void 0 ? 120 : E,
            I = e.height,
            W = I === void 0 ? 64 : I,
            H = e.rotate,
            G = H === void 0 ? -22 : H,
            K = e.image,
            N = e.offsetLeft,
            j = e.offsetTop,
            V = e.fontStyle,
            re = V === void 0 ? 'normal' : V,
            oe = e.fontWeight,
            z = oe === void 0 ? 'normal' : oe,
            be = e.fontColor,
            pe = be === void 0 ? l.colorFill : be,
            ce = e.fontSize,
            fe = ce === void 0 ? 16 : ce,
            Se = e.fontFamily,
            _ = Se === void 0 ? 'sans-serif' : Se,
            Q = e.prefixCls,
            ie = (0, m.useContext)(A.ZP.ConfigContext),
            Pe = ie.getPrefixCls,
            $e = Pe('pro-layout-watermark', Q),
            Oe = k()(''.concat($e, '-wrapper'), p),
            we = k()($e, F),
            We = (0, m.useState)(''),
            se = (0, Ue.Z)(We, 2),
            de = se[0],
            ae = se[1];
          return (
            (0, m.useEffect)(
              function () {
                var ne = document.createElement('canvas'),
                  Te = ne.getContext('2d'),
                  Be = In(Te),
                  jt = ''.concat(($ + X) * Be, 'px'),
                  pn = ''.concat((L + W) * Be, 'px'),
                  yn = N || $ / 2,
                  ft = j || L / 2;
                if (
                  (ne.setAttribute('width', jt),
                  ne.setAttribute('height', pn),
                  !Te)
                ) {
                  console.error(
                    '\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas',
                  );
                  return;
                }
                Te.translate(yn * Be, ft * Be),
                  Te.rotate((Math.PI / 180) * Number(G));
                var ht = X * Be,
                  _e = W * Be,
                  vt = function (Me) {
                    var pt =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      Fe = Number(fe) * Be;
                    (Te.font = ''
                      .concat(re, ' normal ')
                      .concat(z, ' ')
                      .concat(Fe, 'px/')
                      .concat(_e, 'px ')
                      .concat(_)),
                      (Te.fillStyle = pe),
                      Array.isArray(Me)
                        ? Me == null ||
                          Me.forEach(function (Ye, yt) {
                            return Te.fillText(Ye, 0, yt * Fe + pt);
                          })
                        : Te.fillText(Me, 0, pt ? pt + Fe : 0),
                      ae(ne.toDataURL());
                  };
                if (K) {
                  var ke = new Image();
                  (ke.crossOrigin = 'anonymous'),
                    (ke.referrerPolicy = 'no-referrer'),
                    (ke.src = K),
                    (ke.onload = function () {
                      if (
                        (Te.drawImage(ke, 0, 0, ht, _e),
                        ae(ne.toDataURL()),
                        e.content)
                      ) {
                        vt(e.content, ke.height + 8);
                        return;
                      }
                    });
                  return;
                }
                if (e.content) {
                  vt(e.content);
                  return;
                }
              },
              [$, L, N, j, G, re, z, X, W, _, pe, K, e.content, fe],
            ),
            (0, D.jsxs)('div', {
              style: (0, c.Z)({ position: 'relative' }, h),
              className: Oe,
              children: [
                s,
                (0, D.jsx)('div', {
                  className: we,
                  style: (0, c.Z)(
                    (0, c.Z)(
                      {
                        zIndex: B,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        backgroundSize: ''.concat($ + X, 'px'),
                        pointerEvents: 'none',
                        backgroundRepeat: 'repeat',
                      },
                      de ? { backgroundImage: "url('".concat(de, "')") } : {},
                    ),
                    w,
                  ),
                }),
              ],
            })
          );
        },
        sn = [576, 768, 992, 1200].map(function (r) {
          return '@media (max-width: '.concat(r, 'px)');
        }),
        ut = (0, Ue.Z)(sn, 4),
        Et = ut[0],
        Nt = ut[1],
        dn = ut[2],
        un = ut[3],
        fn = function (e) {
          var i, l, s, h, p, w, F, T, B, S, $, M, L, E, X, I, W, H;
          return (0, a.Z)(
            {},
            e.componentCls,
            (0, a.Z)(
              (0, a.Z)(
                (0, a.Z)(
                  (0, a.Z)(
                    (0, a.Z)(
                      (0, a.Z)(
                        {
                          position: 'relative',
                          '&-children-container': {
                            paddingBlockStart: 0,
                            paddingBlockEnd:
                              (i = e.layout) === null ||
                              i === void 0 ||
                              (i = i.pageContainer) === null ||
                              i === void 0
                                ? void 0
                                : i.paddingBlockPageContainerContent,
                            paddingInline:
                              (l = e.layout) === null ||
                              l === void 0 ||
                              (l = l.pageContainer) === null ||
                              l === void 0
                                ? void 0
                                : l.paddingInlinePageContainerContent,
                          },
                          '&-children-container-no-header': {
                            paddingBlockStart:
                              (s = e.layout) === null ||
                              s === void 0 ||
                              (s = s.pageContainer) === null ||
                              s === void 0
                                ? void 0
                                : s.paddingBlockPageContainerContent,
                          },
                          '&-affix': (0, a.Z)(
                            {},
                            ''.concat(e.antCls, '-affix'),
                            (0, a.Z)({}, ''.concat(e.componentCls, '-warp'), {
                              backgroundColor:
                                (h = e.layout) === null ||
                                h === void 0 ||
                                (h = h.pageContainer) === null ||
                                h === void 0
                                  ? void 0
                                  : h.colorBgPageContainerFixed,
                              transition: 'background-color 0.3s',
                              boxShadow: '0 2px 8px #f0f1f2',
                            }),
                          ),
                        },
                        '& &-warp-page-header',
                        (0, a.Z)(
                          (0, a.Z)(
                            (0, a.Z)(
                              (0, a.Z)(
                                {
                                  paddingBlockStart:
                                    ((p =
                                      (w = e.layout) === null ||
                                      w === void 0 ||
                                      (w = w.pageContainer) === null ||
                                      w === void 0
                                        ? void 0
                                        : w.paddingBlockPageContainerContent) !==
                                      null && p !== void 0
                                      ? p
                                      : 40) / 4,
                                  paddingBlockEnd:
                                    ((F =
                                      (T = e.layout) === null ||
                                      T === void 0 ||
                                      (T = T.pageContainer) === null ||
                                      T === void 0
                                        ? void 0
                                        : T.paddingBlockPageContainerContent) !==
                                      null && F !== void 0
                                      ? F
                                      : 40) / 2,
                                  paddingInlineStart:
                                    (B = e.layout) === null ||
                                    B === void 0 ||
                                    (B = B.pageContainer) === null ||
                                    B === void 0
                                      ? void 0
                                      : B.paddingInlinePageContainerContent,
                                  paddingInlineEnd:
                                    (S = e.layout) === null ||
                                    S === void 0 ||
                                    (S = S.pageContainer) === null ||
                                    S === void 0
                                      ? void 0
                                      : S.paddingInlinePageContainerContent,
                                },
                                '& ~ '.concat(
                                  e.proComponentsCls,
                                  '-grid-content',
                                ),
                                (0, a.Z)(
                                  {},
                                  ''.concat(
                                    e.proComponentsCls,
                                    '-page-container-children-content',
                                  ),
                                  {
                                    paddingBlock:
                                      (($ =
                                        (M = e.layout) === null ||
                                        M === void 0 ||
                                        (M = M.pageContainer) === null ||
                                        M === void 0
                                          ? void 0
                                          : M.paddingBlockPageContainerContent) !==
                                        null && $ !== void 0
                                        ? $
                                        : 24) / 3,
                                  },
                                ),
                              ),
                              ''.concat(e.antCls, '-page-header-breadcrumb'),
                              {
                                paddingBlockStart:
                                  ((L =
                                    (E = e.layout) === null ||
                                    E === void 0 ||
                                    (E = E.pageContainer) === null ||
                                    E === void 0
                                      ? void 0
                                      : E.paddingBlockPageContainerContent) !==
                                    null && L !== void 0
                                    ? L
                                    : 40) /
                                    4 +
                                  10,
                              },
                            ),
                            ''.concat(e.antCls, '-page-header-heading'),
                            {
                              paddingBlockStart:
                                ((X =
                                  (I = e.layout) === null ||
                                  I === void 0 ||
                                  (I = I.pageContainer) === null ||
                                  I === void 0
                                    ? void 0
                                    : I.paddingBlockPageContainerContent) !==
                                  null && X !== void 0
                                  ? X
                                  : 40) / 4,
                            },
                          ),
                          ''.concat(e.antCls, '-page-header-footer'),
                          {
                            marginBlockStart:
                              ((W =
                                (H = e.layout) === null ||
                                H === void 0 ||
                                (H = H.pageContainer) === null ||
                                H === void 0
                                  ? void 0
                                  : H.paddingBlockPageContainerContent) !==
                                null && W !== void 0
                                ? W
                                : 40) / 4,
                          },
                        ),
                      ),
                      '&-detail',
                      (0, a.Z)({ display: 'flex' }, Et, { display: 'block' }),
                    ),
                    '&-main',
                    { width: '100%' },
                  ),
                  '&-row',
                  (0, a.Z)({ display: 'flex', width: '100%' }, Nt, {
                    display: 'block',
                  }),
                ),
                '&-content',
                { flex: 'auto', width: '100%' },
              ),
              '&-extraContent',
              (0, a.Z)(
                (0, a.Z)(
                  (0, a.Z)(
                    (0, a.Z)(
                      {
                        flex: '0 1 auto',
                        minWidth: '242px',
                        marginInlineStart: 88,
                        textAlign: 'end',
                      },
                      un,
                      { marginInlineStart: 44 },
                    ),
                    dn,
                    { marginInlineStart: 20 },
                  ),
                  Nt,
                  { marginInlineStart: 0, textAlign: 'start' },
                ),
                Et,
                { marginInlineStart: 0 },
              ),
            ),
          );
        };
      function vn(r, e) {
        return (0, he.Xj)('ProLayoutPageContainer', function (i) {
          var l,
            s = (0, c.Z)(
              (0, c.Z)({}, i),
              {},
              {
                componentCls: '.'.concat(r),
                layout: (0, c.Z)(
                  (0, c.Z)({}, i == null ? void 0 : i.layout),
                  {},
                  {
                    pageContainer: (0, c.Z)(
                      (0, c.Z)(
                        {},
                        i == null || (l = i.layout) === null || l === void 0
                          ? void 0
                          : l.pageContainer,
                      ),
                      e,
                    ),
                  },
                ),
              },
            );
          return [fn(s)];
        });
      }
      function mn(r, e) {
        var i = e.stylish;
        return (0, he.Xj)('ProLayoutPageContainerStylish', function (l) {
          var s = (0, c.Z)(
            (0, c.Z)({}, l),
            {},
            { componentCls: '.'.concat(r) },
          );
          return i
            ? [
                (0, a.Z)(
                  {},
                  'div'.concat(s.componentCls),
                  i == null ? void 0 : i(s),
                ),
              ]
            : [];
        });
      }
      var Zn = o(28847),
        gn = [
          'title',
          'content',
          'pageHeaderRender',
          'header',
          'prefixedClassName',
          'extraContent',
          'childrenContentStyle',
          'style',
          'prefixCls',
          'hashId',
          'value',
          'breadcrumbRender',
        ],
        bn = [
          'children',
          'loading',
          'className',
          'style',
          'footer',
          'affixProps',
          'token',
          'fixedHeader',
          'breadcrumbRender',
          'footerToolBarProps',
          'childrenContentStyle',
        ];
      function Ot(r) {
        return (0, b.Z)(r) === 'object' ? r : { spinning: r };
      }
      var hn = function (e) {
          var i = e.tabList,
            l = e.tabActiveKey,
            s = e.onTabChange,
            h = e.hashId,
            p = e.tabBarExtraContent,
            w = e.tabProps,
            F = e.prefixedClassName;
          return Array.isArray(i) || p
            ? (0, D.jsx)(
                C.Z,
                (0, c.Z)(
                  (0, c.Z)(
                    {
                      className: ''.concat(F, '-tabs ').concat(h).trim(),
                      activeKey: l,
                      onChange: function (B) {
                        s && s(B);
                      },
                      tabBarExtraContent: p,
                      items:
                        i == null
                          ? void 0
                          : i.map(function (T, B) {
                              var S;
                              return (0,
                              c.Z)((0, c.Z)({ label: T.tab }, T), {}, { key: ((S = T.key) === null || S === void 0 ? void 0 : S.toString()) || (B == null ? void 0 : B.toString()) });
                            }),
                    },
                    w,
                  ),
                  {},
                  {
                    children:
                      (0, Zn.n)(R.Z, '4.23.0') < 0
                        ? i == null
                          ? void 0
                          : i.map(function (T, B) {
                              return (0,
                              D.jsx)(C.Z.TabPane, (0, c.Z)({ tab: T.tab }, T), T.key || B);
                            })
                        : null,
                  },
                ),
              )
            : null;
        },
        t = function (e, i, l, s) {
          return !e && !i
            ? null
            : (0, D.jsx)('div', {
                className: ''.concat(l, '-detail ').concat(s).trim(),
                children: (0, D.jsx)('div', {
                  className: ''.concat(l, '-main ').concat(s).trim(),
                  children: (0, D.jsxs)('div', {
                    className: ''.concat(l, '-row ').concat(s).trim(),
                    children: [
                      e &&
                        (0, D.jsx)('div', {
                          className: ''.concat(l, '-content ').concat(s).trim(),
                          children: e,
                        }),
                      i &&
                        (0, D.jsx)('div', {
                          className: ''
                            .concat(l, '-extraContent ')
                            .concat(s)
                            .trim(),
                          children: i,
                        }),
                    ],
                  }),
                }),
              });
        },
        n = function (e) {
          var i = useContext(RouteContext);
          return _jsx('div', {
            style: { height: '100%', display: 'flex', alignItems: 'center' },
            children: _jsx(
              Breadcrumb,
              _objectSpread(
                _objectSpread(
                  _objectSpread({}, i == null ? void 0 : i.breadcrumb),
                  i == null ? void 0 : i.breadcrumbProps,
                ),
                e,
              ),
            ),
          });
        },
        u = function (e) {
          var i,
            l = e.title,
            s = e.content,
            h = e.pageHeaderRender,
            p = e.header,
            w = e.prefixedClassName,
            F = e.extraContent,
            T = e.childrenContentStyle,
            B = e.style,
            S = e.prefixCls,
            $ = e.hashId,
            M = e.value,
            L = e.breadcrumbRender,
            E = (0, y.Z)(e, gn),
            X = function () {
              if (L) return L;
            };
          if (h === !1) return null;
          if (h)
            return (0, D.jsxs)(D.Fragment, {
              children: [' ', h((0, c.Z)((0, c.Z)({}, e), M))],
            });
          var I = l;
          !l && l !== !1 && (I = M.title);
          var W = (0, c.Z)(
              (0, c.Z)((0, c.Z)({}, M), {}, { title: I }, E),
              {},
              {
                footer: hn(
                  (0, c.Z)(
                    (0, c.Z)({}, E),
                    {},
                    { hashId: $, breadcrumbRender: L, prefixedClassName: w },
                  ),
                ),
              },
              p,
            ),
            H = W,
            G = H.breadcrumb,
            K =
              (!G ||
                (!(G != null && G.itemRender) &&
                  !(
                    G != null &&
                    (i = G.items) !== null &&
                    i !== void 0 &&
                    i.length
                  ))) &&
              !L;
          return [
            'title',
            'subTitle',
            'extra',
            'tags',
            'footer',
            'avatar',
            'backIcon',
          ].every(function (N) {
            return !W[N];
          }) &&
            K &&
            !s &&
            !F
            ? null
            : (0, D.jsx)(
                ln,
                (0, c.Z)(
                  (0, c.Z)({}, W),
                  {},
                  {
                    className: ''
                      .concat(w, '-warp-page-header ')
                      .concat($)
                      .trim(),
                    breadcrumb:
                      L === !1
                        ? void 0
                        : (0, c.Z)(
                            (0, c.Z)({}, W.breadcrumb),
                            M.breadcrumbProps,
                          ),
                    breadcrumbRender: X(),
                    prefixCls: S,
                    children:
                      (p == null ? void 0 : p.children) || t(s, F, w, $),
                  },
                ),
              );
        },
        v = function (e) {
          var i,
            l,
            s = e.children,
            h = e.loading,
            p = h === void 0 ? !1 : h,
            w = e.className,
            F = e.style,
            T = e.footer,
            B = e.affixProps,
            S = e.token,
            $ = e.fixedHeader,
            M = e.breadcrumbRender,
            L = e.footerToolBarProps,
            E = e.childrenContentStyle,
            X = (0, y.Z)(e, bn),
            I = (0, m.useContext)(Ae.X);
          (0, m.useEffect)(function () {
            var Q;
            return !I || !(I != null && I.setHasPageContainer)
              ? function () {}
              : (I == null ||
                  (Q = I.setHasPageContainer) === null ||
                  Q === void 0 ||
                  Q.call(I, function (ie) {
                    return ie + 1;
                  }),
                function () {
                  var ie;
                  I == null ||
                    (ie = I.setHasPageContainer) === null ||
                    ie === void 0 ||
                    ie.call(I, function (Pe) {
                      return Pe - 1;
                    });
                });
          }, []);
          var W = (0, m.useContext)(Z.L_),
            H = W.token,
            G = (0, m.useContext)(A.ZP.ConfigContext),
            K = G.getPrefixCls,
            N = e.prefixCls || K('pro'),
            j = ''.concat(N, '-page-container'),
            V = vn(j, S),
            re = V.wrapSSR,
            oe = V.hashId,
            z = mn(''.concat(j, '.').concat(j, '-stylish'), {
              stylish: e.stylish,
            }),
            be = (0, m.useMemo)(
              function () {
                var Q;
                return M == !1
                  ? !1
                  : M ||
                      (X == null || (Q = X.header) === null || Q === void 0
                        ? void 0
                        : Q.breadcrumbRender);
              },
              [
                M,
                X == null || (i = X.header) === null || i === void 0
                  ? void 0
                  : i.breadcrumbRender,
              ],
            ),
            pe = u(
              (0, c.Z)(
                (0, c.Z)({}, X),
                {},
                {
                  breadcrumbRender: be,
                  ghost: !0,
                  hashId: oe,
                  prefixCls: void 0,
                  prefixedClassName: j,
                  value: I,
                },
              ),
            ),
            ce = (0, m.useMemo)(
              function () {
                if (m.isValidElement(p)) return p;
                if (typeof p == 'boolean' && !p) return null;
                var Q = Ot(p);
                return Q.spinning ? (0, D.jsx)(wt.S, (0, c.Z)({}, Q)) : null;
              },
              [p],
            ),
            fe = (0, m.useMemo)(
              function () {
                return s
                  ? (0, D.jsx)(D.Fragment, {
                      children: (0, D.jsx)('div', {
                        className: k()(
                          oe,
                          ''.concat(j, '-children-container'),
                          (0, a.Z)(
                            {},
                            ''.concat(j, '-children-container-no-header'),
                            !pe,
                          ),
                        ),
                        style: E,
                        children: s,
                      }),
                    })
                  : null;
              },
              [s, j, E, oe],
            ),
            Se = (0, m.useMemo)(
              function () {
                var Q = ce || fe;
                if (e.waterMarkProps || I.waterMarkProps) {
                  var ie = (0, c.Z)(
                    (0, c.Z)({}, I.waterMarkProps),
                    e.waterMarkProps,
                  );
                  return (0, D.jsx)(
                    cn,
                    (0, c.Z)((0, c.Z)({}, ie), {}, { children: Q }),
                  );
                }
                return Q;
              },
              [e.waterMarkProps, I.waterMarkProps, ce, fe],
            ),
            _ = k()(
              j,
              oe,
              w,
              (0, a.Z)(
                (0, a.Z)(
                  (0, a.Z)({}, ''.concat(j, '-with-footer'), T),
                  ''.concat(j, '-with-affix'),
                  $ && pe,
                ),
                ''.concat(j, '-stylish'),
                !!X.stylish,
              ),
            );
          return re(
            z.wrapSSR(
              (0, D.jsxs)(D.Fragment, {
                children: [
                  (0, D.jsxs)('div', {
                    style: F,
                    className: _,
                    children: [
                      $ && pe
                        ? (0, D.jsx)(
                            Ke,
                            (0, c.Z)(
                              (0, c.Z)(
                                {
                                  offsetTop:
                                    I.hasHeader && I.fixedHeader
                                      ? (l = H.layout) === null ||
                                        l === void 0 ||
                                        (l = l.header) === null ||
                                        l === void 0
                                        ? void 0
                                        : l.heightLayoutHeader
                                      : 1,
                                },
                                B,
                              ),
                              {},
                              {
                                className: ''
                                  .concat(j, '-affix ')
                                  .concat(oe)
                                  .trim(),
                                children: (0, D.jsx)('div', {
                                  className: ''
                                    .concat(j, '-warp ')
                                    .concat(oe)
                                    .trim(),
                                  children: pe,
                                }),
                              },
                            ),
                          )
                        : pe,
                      Se && (0, D.jsx)(Re, { children: Se }),
                    ],
                  }),
                  T &&
                    (0, D.jsx)(
                      et.S,
                      (0, c.Z)(
                        (0, c.Z)({ stylish: X.footerStylish, prefixCls: N }, L),
                        {},
                        { children: T },
                      ),
                    ),
                ],
              }),
            ),
          );
        },
        g = function (e) {
          return (0, D.jsx)(Z._Y, {
            needDeps: !0,
            children: (0, D.jsx)(v, (0, c.Z)({}, e)),
          });
        },
        P = function (e) {
          var i = useContext(RouteContext);
          return u(
            _objectSpread(_objectSpread({}, e), {}, { hashId: '', value: i }),
          );
        };
    },
    5960: function (f, d, o) {
      'use strict';
      o.d(d, {
        Z: function () {
          return hn;
        },
      });
      var a = o(82702),
        y = o(22466),
        c = o(8675),
        b = o(36439),
        Z = o(91150),
        C = o.n(Z),
        R = o(8429),
        A = o(73990),
        m = o(83525),
        O = o(72561),
        k = o(22361),
        ue = o(41670),
        Ze = o(69164),
        ye = o(94538),
        ve = (0, a.createContext)(null),
        He = o(80104),
        me = o(31774),
        Le = o(33052),
        q = o(64785),
        Y = o(23766),
        x = function (n) {
          var u = n.activeTabOffset,
            v = n.horizontal,
            g = n.rtl,
            P = n.indicator,
            r = P === void 0 ? {} : P,
            e = r.size,
            i = r.align,
            l = i === void 0 ? 'center' : i,
            s = (0, a.useState)(),
            h = (0, O.Z)(s, 2),
            p = h[0],
            w = h[1],
            F = (0, a.useRef)(),
            T = a.useCallback(
              function (S) {
                return typeof e == 'function'
                  ? e(S)
                  : typeof e == 'number'
                  ? e
                  : S;
              },
              [e],
            );
          function B() {
            Y.Z.cancel(F.current);
          }
          return (
            (0, a.useEffect)(
              function () {
                var S = {};
                if (u)
                  if (v) {
                    S.width = T(u.width);
                    var $ = g ? 'right' : 'left';
                    l === 'start' && (S[$] = u[$]),
                      l === 'center' &&
                        ((S[$] = u[$] + u.width / 2),
                        (S.transform = g
                          ? 'translateX(50%)'
                          : 'translateX(-50%)')),
                      l === 'end' &&
                        ((S[$] = u[$] + u.width),
                        (S.transform = 'translateX(-100%)'));
                  } else
                    (S.height = T(u.height)),
                      l === 'start' && (S.top = u.top),
                      l === 'center' &&
                        ((S.top = u.top + u.height / 2),
                        (S.transform = 'translateY(-50%)')),
                      l === 'end' &&
                        ((S.top = u.top + u.height),
                        (S.transform = 'translateY(-100%)'));
                return (
                  B(),
                  (F.current = (0, Y.Z)(function () {
                    w(S);
                  })),
                  B
                );
              },
              [u, v, g, l, T],
            ),
            { style: p }
          );
        },
        U = x,
        ee = { width: 0, height: 0, left: 0, top: 0 };
      function J(t, n, u) {
        return (0, a.useMemo)(
          function () {
            for (
              var v,
                g = new Map(),
                P =
                  n.get((v = t[0]) === null || v === void 0 ? void 0 : v.key) ||
                  ee,
                r = P.left + P.width,
                e = 0;
              e < t.length;
              e += 1
            ) {
              var i = t[e].key,
                l = n.get(i);
              if (!l) {
                var s;
                l =
                  n.get(
                    (s = t[e - 1]) === null || s === void 0 ? void 0 : s.key,
                  ) || ee;
              }
              var h = g.get(i) || (0, m.Z)({}, l);
              (h.right = r - h.left - h.width), g.set(i, h);
            }
            return g;
          },
          [
            t
              .map(function (v) {
                return v.key;
              })
              .join('_'),
            n,
            u,
          ],
        );
      }
      function ge(t, n) {
        var u = a.useRef(t),
          v = a.useState({}),
          g = (0, O.Z)(v, 2),
          P = g[1];
        function r(e) {
          var i = typeof e == 'function' ? e(u.current) : e;
          i !== u.current && n(i, u.current), (u.current = i), P({});
        }
        return [u.current, r];
      }
      var Ee = 0.1,
        Ce = 0.01,
        xe = 20,
        je = Math.pow(0.995, xe);
      function Xe(t, n) {
        var u = (0, a.useState)(),
          v = (0, O.Z)(u, 2),
          g = v[0],
          P = v[1],
          r = (0, a.useState)(0),
          e = (0, O.Z)(r, 2),
          i = e[0],
          l = e[1],
          s = (0, a.useState)(0),
          h = (0, O.Z)(s, 2),
          p = h[0],
          w = h[1],
          F = (0, a.useState)(),
          T = (0, O.Z)(F, 2),
          B = T[0],
          S = T[1],
          $ = (0, a.useRef)();
        function M(H) {
          var G = H.touches[0],
            K = G.screenX,
            N = G.screenY;
          P({ x: K, y: N }), window.clearInterval($.current);
        }
        function L(H) {
          if (g) {
            H.preventDefault();
            var G = H.touches[0],
              K = G.screenX,
              N = G.screenY;
            P({ x: K, y: N });
            var j = K - g.x,
              V = N - g.y;
            n(j, V);
            var re = Date.now();
            l(re), w(re - i), S({ x: j, y: V });
          }
        }
        function E() {
          if (g && (P(null), S(null), B)) {
            var H = B.x / p,
              G = B.y / p,
              K = Math.abs(H),
              N = Math.abs(G);
            if (Math.max(K, N) < Ee) return;
            var j = H,
              V = G;
            $.current = window.setInterval(function () {
              if (Math.abs(j) < Ce && Math.abs(V) < Ce) {
                window.clearInterval($.current);
                return;
              }
              (j *= je), (V *= je), n(j * xe, V * xe);
            }, xe);
          }
        }
        var X = (0, a.useRef)();
        function I(H) {
          var G = H.deltaX,
            K = H.deltaY,
            N = 0,
            j = Math.abs(G),
            V = Math.abs(K);
          j === V
            ? (N = X.current === 'x' ? G : K)
            : j > V
            ? ((N = G), (X.current = 'x'))
            : ((N = K), (X.current = 'y')),
            n(-N, -N) && H.preventDefault();
        }
        var W = (0, a.useRef)(null);
        (W.current = {
          onTouchStart: M,
          onTouchMove: L,
          onTouchEnd: E,
          onWheel: I,
        }),
          a.useEffect(function () {
            function H(j) {
              W.current.onTouchStart(j);
            }
            function G(j) {
              W.current.onTouchMove(j);
            }
            function K(j) {
              W.current.onTouchEnd(j);
            }
            function N(j) {
              W.current.onWheel(j);
            }
            return (
              document.addEventListener('touchmove', G, { passive: !1 }),
              document.addEventListener('touchend', K, { passive: !0 }),
              t.current.addEventListener('touchstart', H, { passive: !0 }),
              t.current.addEventListener('wheel', N, { passive: !1 }),
              function () {
                document.removeEventListener('touchmove', G),
                  document.removeEventListener('touchend', K);
              }
            );
          }, []);
      }
      var Ke = o(82105);
      function Ae(t) {
        var n = (0, a.useState)(0),
          u = (0, O.Z)(n, 2),
          v = u[0],
          g = u[1],
          P = (0, a.useRef)(0),
          r = (0, a.useRef)();
        return (
          (r.current = t),
          (0, Ke.o)(
            function () {
              var e;
              (e = r.current) === null || e === void 0 || e.call(r);
            },
            [v],
          ),
          function () {
            P.current === v && ((P.current += 1), g(P.current));
          }
        );
      }
      function et(t) {
        var n = (0, a.useRef)([]),
          u = (0, a.useState)({}),
          v = (0, O.Z)(u, 2),
          g = v[1],
          P = (0, a.useRef)(typeof t == 'function' ? t() : t),
          r = Ae(function () {
            var i = P.current;
            n.current.forEach(function (l) {
              i = l(i);
            }),
              (n.current = []),
              (P.current = i),
              g({});
          });
        function e(i) {
          n.current.push(i), r();
        }
        return [P.current, e];
      }
      var he = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function Ve(t, n, u, v, g, P, r) {
        var e = r.tabs,
          i = r.tabPosition,
          l = r.rtl,
          s,
          h,
          p;
        return (
          ['top', 'bottom'].includes(i)
            ? ((s = 'width'), (h = l ? 'right' : 'left'), (p = Math.abs(u)))
            : ((s = 'height'), (h = 'top'), (p = -u)),
          (0, a.useMemo)(
            function () {
              if (!e.length) return [0, 0];
              for (var w = e.length, F = w, T = 0; T < w; T += 1) {
                var B = t.get(e[T].key) || he;
                if (B[h] + B[s] > p + n) {
                  F = T - 1;
                  break;
                }
              }
              for (var S = 0, $ = w - 1; $ >= 0; $ -= 1) {
                var M = t.get(e[$].key) || he;
                if (M[h] < p) {
                  S = $ + 1;
                  break;
                }
              }
              return S >= F ? [0, 0] : [S, F];
            },
            [
              t,
              n,
              v,
              g,
              P,
              p,
              i,
              e
                .map(function (w) {
                  return w.key;
                })
                .join('_'),
              l,
            ],
          )
        );
      }
      function Qe(t) {
        var n;
        return (
          t instanceof Map
            ? ((n = {}),
              t.forEach(function (u, v) {
                n[v] = u;
              }))
            : (n = t),
          JSON.stringify(n)
        );
      }
      var D = 'TABS_DQ';
      function Re(t) {
        return String(t).replace(/"/g, D);
      }
      function Ue(t, n, u, v) {
        return !(
          !u ||
          v ||
          t === !1 ||
          (t === void 0 && (n === !1 || n === null))
        );
      }
      var ot = a.forwardRef(function (t, n) {
          var u = t.prefixCls,
            v = t.editable,
            g = t.locale,
            P = t.style;
          return !v || v.showAdd === !1
            ? null
            : a.createElement(
                'button',
                {
                  ref: n,
                  type: 'button',
                  className: ''.concat(u, '-nav-add'),
                  style: P,
                  'aria-label':
                    (g == null ? void 0 : g.addAriaLabel) || 'Add tab',
                  onClick: function (e) {
                    v.onEdit('add', { event: e });
                  },
                },
                v.addIcon || '+',
              );
        }),
        it = ot,
        lt = a.forwardRef(function (t, n) {
          var u = t.position,
            v = t.prefixCls,
            g = t.extra;
          if (!g) return null;
          var P,
            r = {};
          return (
            (0, k.Z)(g) === 'object' && !a.isValidElement(g)
              ? (r = g)
              : (r.right = g),
            u === 'right' && (P = r.right),
            u === 'left' && (P = r.left),
            P
              ? a.createElement(
                  'div',
                  { className: ''.concat(v, '-extra-content'), ref: n },
                  P,
                )
              : null
          );
        }),
        tt = lt,
        ct = o(29271),
        Ge = o(56513),
        ze = o(94478),
        st = a.forwardRef(function (t, n) {
          var u = t.prefixCls,
            v = t.id,
            g = t.tabs,
            P = t.locale,
            r = t.mobile,
            e = t.more,
            i = e === void 0 ? {} : e,
            l = t.style,
            s = t.className,
            h = t.editable,
            p = t.tabBarGutter,
            w = t.rtl,
            F = t.removeAriaLabel,
            T = t.onTabClick,
            B = t.getPopupContainer,
            S = t.popupClassName,
            $ = (0, a.useState)(!1),
            M = (0, O.Z)($, 2),
            L = M[0],
            E = M[1],
            X = (0, a.useState)(null),
            I = (0, O.Z)(X, 2),
            W = I[0],
            H = I[1],
            G = i.icon,
            K = G === void 0 ? 'More' : G,
            N = ''.concat(v, '-more-popup'),
            j = ''.concat(u, '-dropdown'),
            V = W !== null ? ''.concat(N, '-').concat(W) : null,
            re = P == null ? void 0 : P.dropdownAriaLabel;
          function oe(_, Q) {
            _.preventDefault(),
              _.stopPropagation(),
              h.onEdit('remove', { key: Q, event: _ });
          }
          var z = a.createElement(
            Ge.ZP,
            {
              onClick: function (Q) {
                var ie = Q.key,
                  Pe = Q.domEvent;
                T(ie, Pe), E(!1);
              },
              prefixCls: ''.concat(j, '-menu'),
              id: N,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': V,
              selectedKeys: [W],
              'aria-label': re !== void 0 ? re : 'expanded dropdown',
            },
            g.map(function (_) {
              var Q = _.closable,
                ie = _.disabled,
                Pe = _.closeIcon,
                $e = _.key,
                Oe = _.label,
                we = Ue(Q, Pe, h, ie);
              return a.createElement(
                Ge.sN,
                {
                  key: $e,
                  id: ''.concat(N, '-').concat($e),
                  role: 'option',
                  'aria-controls': v && ''.concat(v, '-panel-').concat($e),
                  disabled: ie,
                },
                a.createElement('span', null, Oe),
                we &&
                  a.createElement(
                    'button',
                    {
                      type: 'button',
                      'aria-label': F || 'remove',
                      tabIndex: 0,
                      className: ''.concat(j, '-menu-item-remove'),
                      onClick: function (se) {
                        se.stopPropagation(), oe(se, $e);
                      },
                    },
                    Pe || h.removeIcon || '\xD7',
                  ),
              );
            }),
          );
          function be(_) {
            for (
              var Q = g.filter(function (we) {
                  return !we.disabled;
                }),
                ie =
                  Q.findIndex(function (we) {
                    return we.key === W;
                  }) || 0,
                Pe = Q.length,
                $e = 0;
              $e < Pe;
              $e += 1
            ) {
              ie = (ie + _ + Pe) % Pe;
              var Oe = Q[ie];
              if (!Oe.disabled) {
                H(Oe.key);
                return;
              }
            }
          }
          function pe(_) {
            var Q = _.which;
            if (!L) {
              [ze.Z.DOWN, ze.Z.SPACE, ze.Z.ENTER].includes(Q) &&
                (E(!0), _.preventDefault());
              return;
            }
            switch (Q) {
              case ze.Z.UP:
                be(-1), _.preventDefault();
                break;
              case ze.Z.DOWN:
                be(1), _.preventDefault();
                break;
              case ze.Z.ESC:
                E(!1);
                break;
              case ze.Z.SPACE:
              case ze.Z.ENTER:
                W !== null && T(W, _);
                break;
            }
          }
          (0, a.useEffect)(
            function () {
              var _ = document.getElementById(V);
              _ && _.scrollIntoView && _.scrollIntoView(!1);
            },
            [W],
          ),
            (0, a.useEffect)(
              function () {
                L || H(null);
              },
              [L],
            );
          var ce = (0, A.Z)({}, w ? 'marginRight' : 'marginLeft', p);
          g.length || ((ce.visibility = 'hidden'), (ce.order = 1));
          var fe = C()((0, A.Z)({}, ''.concat(j, '-rtl'), w)),
            Se = r
              ? null
              : a.createElement(
                  ct.Z,
                  (0, R.Z)(
                    {
                      prefixCls: j,
                      overlay: z,
                      visible: g.length ? L : !1,
                      onVisibleChange: E,
                      overlayClassName: C()(fe, S),
                      mouseEnterDelay: 0.1,
                      mouseLeaveDelay: 0.1,
                      getPopupContainer: B,
                    },
                    i,
                  ),
                  a.createElement(
                    'button',
                    {
                      type: 'button',
                      className: ''.concat(u, '-nav-more'),
                      style: ce,
                      tabIndex: -1,
                      'aria-hidden': 'true',
                      'aria-haspopup': 'listbox',
                      'aria-controls': N,
                      id: ''.concat(v, '-more'),
                      'aria-expanded': L,
                      onKeyDown: pe,
                    },
                    K,
                  ),
                );
          return a.createElement(
            'div',
            {
              className: C()(''.concat(u, '-nav-operations'), s),
              style: l,
              ref: n,
            },
            Se,
            a.createElement(it, { prefixCls: u, locale: P, editable: h }),
          );
        }),
        Ht = a.memo(st, function (t, n) {
          return n.tabMoving;
        }),
        xt = function (n) {
          var u = n.prefixCls,
            v = n.id,
            g = n.active,
            P = n.tab,
            r = P.key,
            e = P.label,
            i = P.disabled,
            l = P.closeIcon,
            s = P.icon,
            h = n.closable,
            p = n.renderWrapper,
            w = n.removeAriaLabel,
            F = n.editable,
            T = n.onClick,
            B = n.onFocus,
            S = n.style,
            $ = ''.concat(u, '-tab'),
            M = Ue(h, l, F, i);
          function L(W) {
            i || T(W);
          }
          function E(W) {
            W.preventDefault(),
              W.stopPropagation(),
              F.onEdit('remove', { key: r, event: W });
          }
          var X = a.useMemo(
              function () {
                return s && typeof e == 'string'
                  ? a.createElement('span', null, e)
                  : e;
              },
              [e, s],
            ),
            I = a.createElement(
              'div',
              {
                key: r,
                'data-node-key': Re(r),
                className: C()(
                  $,
                  (0, A.Z)(
                    (0, A.Z)(
                      (0, A.Z)({}, ''.concat($, '-with-remove'), M),
                      ''.concat($, '-active'),
                      g,
                    ),
                    ''.concat($, '-disabled'),
                    i,
                  ),
                ),
                style: S,
                onClick: L,
              },
              a.createElement(
                'div',
                {
                  role: 'tab',
                  'aria-selected': g,
                  id: v && ''.concat(v, '-tab-').concat(r),
                  className: ''.concat($, '-btn'),
                  'aria-controls': v && ''.concat(v, '-panel-').concat(r),
                  'aria-disabled': i,
                  tabIndex: i ? null : 0,
                  onClick: function (H) {
                    H.stopPropagation(), L(H);
                  },
                  onKeyDown: function (H) {
                    [ze.Z.SPACE, ze.Z.ENTER].includes(H.which) &&
                      (H.preventDefault(), L(H));
                  },
                  onFocus: B,
                },
                s &&
                  a.createElement(
                    'span',
                    { className: ''.concat($, '-icon') },
                    s,
                  ),
                e && X,
              ),
              M &&
                a.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': w || 'remove',
                    tabIndex: 0,
                    className: ''.concat($, '-remove'),
                    onClick: function (H) {
                      H.stopPropagation(), E(H);
                    },
                  },
                  l || F.removeIcon || '\xD7',
                ),
            );
          return p ? p(I) : I;
        },
        mt = xt,
        Dt = function (n, u) {
          var v = n.offsetWidth,
            g = n.offsetHeight,
            P = n.offsetTop,
            r = n.offsetLeft,
            e = n.getBoundingClientRect(),
            i = e.width,
            l = e.height,
            s = e.x,
            h = e.y;
          return Math.abs(i - v) < 1 ? [i, l, s - u.x, h - u.y] : [v, g, r, P];
        },
        Je = function (n) {
          var u = n.current || {},
            v = u.offsetWidth,
            g = v === void 0 ? 0 : v,
            P = u.offsetHeight,
            r = P === void 0 ? 0 : P;
          if (n.current) {
            var e = n.current.getBoundingClientRect(),
              i = e.width,
              l = e.height;
            if (Math.abs(i - g) < 1) return [i, l];
          }
          return [g, r];
        },
        nt = function (n, u) {
          return n[u ? 0 : 1];
        },
        Wt = a.forwardRef(function (t, n) {
          var u = t.className,
            v = t.style,
            g = t.id,
            P = t.animated,
            r = t.activeKey,
            e = t.rtl,
            i = t.extra,
            l = t.editable,
            s = t.locale,
            h = t.tabPosition,
            p = t.tabBarGutter,
            w = t.children,
            F = t.onTabClick,
            T = t.onTabScroll,
            B = t.indicator,
            S = a.useContext(ve),
            $ = S.prefixCls,
            M = S.tabs,
            L = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            X = (0, a.useRef)(null),
            I = (0, a.useRef)(null),
            W = (0, a.useRef)(null),
            H = (0, a.useRef)(null),
            G = (0, a.useRef)(null),
            K = h === 'top' || h === 'bottom',
            N = ge(0, function (Ie, le) {
              K && T && T({ direction: Ie > le ? 'left' : 'right' });
            }),
            j = (0, O.Z)(N, 2),
            V = j[0],
            re = j[1],
            oe = ge(0, function (Ie, le) {
              !K && T && T({ direction: Ie > le ? 'top' : 'bottom' });
            }),
            z = (0, O.Z)(oe, 2),
            be = z[0],
            pe = z[1],
            ce = (0, a.useState)([0, 0]),
            fe = (0, O.Z)(ce, 2),
            Se = fe[0],
            _ = fe[1],
            Q = (0, a.useState)([0, 0]),
            ie = (0, O.Z)(Q, 2),
            Pe = ie[0],
            $e = ie[1],
            Oe = (0, a.useState)([0, 0]),
            we = (0, O.Z)(Oe, 2),
            We = we[0],
            se = we[1],
            de = (0, a.useState)([0, 0]),
            ae = (0, O.Z)(de, 2),
            ne = ae[0],
            Te = ae[1],
            Be = et(new Map()),
            jt = (0, O.Z)(Be, 2),
            pn = jt[0],
            yn = jt[1],
            ft = J(M, pn, Pe[0]),
            ht = nt(Se, K),
            _e = nt(Pe, K),
            vt = nt(We, K),
            ke = nt(ne, K),
            Cn = ht < _e + vt,
            Me = Cn ? ht - ke : ht - vt,
            pt = ''.concat($, '-nav-operations-hidden'),
            Fe = 0,
            Ye = 0;
          K && e
            ? ((Fe = 0), (Ye = Math.max(0, _e - Me)))
            : ((Fe = Math.min(0, Me - _e)), (Ye = 0));
          function yt(Ie) {
            return Ie < Fe ? Fe : Ie > Ye ? Ye : Ie;
          }
          var xn = (0, a.useRef)(null),
            Wn = (0, a.useState)(),
            wn = (0, O.Z)(Wn, 2),
            Bt = wn[0],
            En = wn[1];
          function Sn() {
            En(Date.now());
          }
          function Pn() {
            xn.current && clearTimeout(xn.current);
          }
          Xe(I, function (Ie, le) {
            function Ne(De, rt) {
              De(function (qe) {
                var At = yt(qe + rt);
                return At;
              });
            }
            return Cn ? (K ? Ne(re, Ie) : Ne(pe, le), Pn(), Sn(), !0) : !1;
          }),
            (0, a.useEffect)(
              function () {
                return (
                  Pn(),
                  Bt &&
                    (xn.current = setTimeout(function () {
                      En(0);
                    }, 100)),
                  Pn
                );
              },
              [Bt],
            );
          var Fn = Ve(
              ft,
              Me,
              K ? V : be,
              _e,
              vt,
              ke,
              (0, m.Z)((0, m.Z)({}, t), {}, { tabs: M }),
            ),
            Nn = (0, O.Z)(Fn, 2),
            Xn = Nn[0],
            Gn = Nn[1],
            On = (0, Le.Z)(function () {
              var Ie =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : r,
                le = ft.get(Ie) || {
                  width: 0,
                  height: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                };
              if (K) {
                var Ne = V;
                e
                  ? le.right < V
                    ? (Ne = le.right)
                    : le.right + le.width > V + Me &&
                      (Ne = le.right + le.width - Me)
                  : le.left < -V
                  ? (Ne = -le.left)
                  : le.left + le.width > -V + Me &&
                    (Ne = -(le.left + le.width - Me)),
                  pe(0),
                  re(yt(Ne));
              } else {
                var De = be;
                le.top < -be
                  ? (De = -le.top)
                  : le.top + le.height > -be + Me &&
                    (De = -(le.top + le.height - Me)),
                  re(0),
                  pe(yt(De));
              }
            }),
            Mt = {};
          h === 'top' || h === 'bottom'
            ? (Mt[e ? 'marginRight' : 'marginLeft'] = p)
            : (Mt.marginTop = p);
          var jn = M.map(function (Ie, le) {
              var Ne = Ie.key;
              return a.createElement(mt, {
                id: g,
                prefixCls: $,
                key: Ne,
                tab: Ie,
                style: le === 0 ? void 0 : Mt,
                closable: Ie.closable,
                editable: l,
                active: Ne === r,
                renderWrapper: w,
                removeAriaLabel: s == null ? void 0 : s.removeAriaLabel,
                onClick: function (rt) {
                  F(Ne, rt);
                },
                onFocus: function () {
                  On(Ne),
                    Sn(),
                    I.current &&
                      (e || (I.current.scrollLeft = 0),
                      (I.current.scrollTop = 0));
                },
              });
            }),
            Bn = function () {
              return yn(function () {
                var le,
                  Ne = new Map(),
                  De =
                    (le = W.current) === null || le === void 0
                      ? void 0
                      : le.getBoundingClientRect();
                return (
                  M.forEach(function (rt) {
                    var qe,
                      At = rt.key,
                      Dn =
                        (qe = W.current) === null || qe === void 0
                          ? void 0
                          : qe.querySelector(
                              '[data-node-key="'.concat(Re(At), '"]'),
                            );
                    if (Dn) {
                      var Yn = Dt(Dn, De),
                        zt = (0, O.Z)(Yn, 4),
                        Qn = zt[0],
                        Jn = zt[1],
                        _n = zt[2],
                        qn = zt[3];
                      Ne.set(At, { width: Qn, height: Jn, left: _n, top: qn });
                    }
                  }),
                  Ne
                );
              });
            };
          (0, a.useEffect)(
            function () {
              Bn();
            },
            [
              M.map(function (Ie) {
                return Ie.key;
              }).join('_'),
            ],
          );
          var Lt = Ae(function () {
              var Ie = Je(L),
                le = Je(E),
                Ne = Je(X);
              _([Ie[0] - le[0] - Ne[0], Ie[1] - le[1] - Ne[1]]);
              var De = Je(G);
              se(De);
              var rt = Je(H);
              Te(rt);
              var qe = Je(W);
              $e([qe[0] - De[0], qe[1] - De[1]]), Bn();
            }),
            Kn = M.slice(0, Xn),
            Vn = M.slice(Gn + 1),
            Mn = [].concat((0, He.Z)(Kn), (0, He.Z)(Vn)),
            Ln = ft.get(r),
            Un = U({
              activeTabOffset: Ln,
              horizontal: K,
              indicator: B,
              rtl: e,
            }),
            kn = Un.style;
          (0, a.useEffect)(
            function () {
              On();
            },
            [r, Fe, Ye, Qe(Ln), Qe(ft), K],
          ),
            (0, a.useEffect)(
              function () {
                Lt();
              },
              [e],
            );
          var An = !!Mn.length,
            Ct = ''.concat($, '-nav-wrap'),
            $n,
            Tn,
            zn,
            Hn;
          return (
            K
              ? e
                ? ((Tn = V > 0), ($n = V !== Ye))
                : (($n = V < 0), (Tn = V !== Fe))
              : ((zn = be < 0), (Hn = be !== Fe)),
            a.createElement(
              me.Z,
              { onResize: Lt },
              a.createElement(
                'div',
                {
                  ref: (0, q.x1)(n, L),
                  role: 'tablist',
                  className: C()(''.concat($, '-nav'), u),
                  style: v,
                  onKeyDown: function () {
                    Sn();
                  },
                },
                a.createElement(tt, {
                  ref: E,
                  position: 'left',
                  extra: i,
                  prefixCls: $,
                }),
                a.createElement(
                  me.Z,
                  { onResize: Lt },
                  a.createElement(
                    'div',
                    {
                      className: C()(
                        Ct,
                        (0, A.Z)(
                          (0, A.Z)(
                            (0, A.Z)(
                              (0, A.Z)({}, ''.concat(Ct, '-ping-left'), $n),
                              ''.concat(Ct, '-ping-right'),
                              Tn,
                            ),
                            ''.concat(Ct, '-ping-top'),
                            zn,
                          ),
                          ''.concat(Ct, '-ping-bottom'),
                          Hn,
                        ),
                      ),
                      ref: I,
                    },
                    a.createElement(
                      me.Z,
                      { onResize: Lt },
                      a.createElement(
                        'div',
                        {
                          ref: W,
                          className: ''.concat($, '-nav-list'),
                          style: {
                            transform: 'translate('
                              .concat(V, 'px, ')
                              .concat(be, 'px)'),
                            transition: Bt ? 'none' : void 0,
                          },
                        },
                        jn,
                        a.createElement(it, {
                          ref: G,
                          prefixCls: $,
                          locale: s,
                          editable: l,
                          style: (0, m.Z)(
                            (0, m.Z)({}, jn.length === 0 ? void 0 : Mt),
                            {},
                            { visibility: An ? 'hidden' : null },
                          ),
                        }),
                        a.createElement('div', {
                          className: C()(
                            ''.concat($, '-ink-bar'),
                            (0, A.Z)(
                              {},
                              ''.concat($, '-ink-bar-animated'),
                              P.inkBar,
                            ),
                          ),
                          style: kn,
                        }),
                      ),
                    ),
                  ),
                ),
                a.createElement(
                  Ht,
                  (0, R.Z)({}, t, {
                    removeAriaLabel: s == null ? void 0 : s.removeAriaLabel,
                    ref: H,
                    prefixCls: $,
                    tabs: Mn,
                    className: !An && pt,
                    tabMoving: !!Bt,
                  }),
                ),
                a.createElement(tt, {
                  ref: X,
                  position: 'right',
                  extra: i,
                  prefixCls: $,
                }),
              ),
            )
          );
        }),
        dt = Wt,
        St = a.forwardRef(function (t, n) {
          var u = t.prefixCls,
            v = t.className,
            g = t.style,
            P = t.id,
            r = t.active,
            e = t.tabKey,
            i = t.children;
          return a.createElement(
            'div',
            {
              id: P && ''.concat(P, '-panel-').concat(e),
              role: 'tabpanel',
              tabIndex: r ? 0 : -1,
              'aria-labelledby': P && ''.concat(P, '-tab-').concat(e),
              'aria-hidden': !r,
              style: g,
              className: C()(u, r && ''.concat(u, '-active'), v),
              ref: n,
            },
            i,
          );
        }),
        gt = St,
        Ft = ['renderTabBar'],
        Pt = ['label', 'key'],
        $t = function (n) {
          var u = n.renderTabBar,
            v = (0, ue.Z)(n, Ft),
            g = a.useContext(ve),
            P = g.tabs;
          if (u) {
            var r = (0, m.Z)(
              (0, m.Z)({}, v),
              {},
              {
                panes: P.map(function (e) {
                  var i = e.label,
                    l = e.key,
                    s = (0, ue.Z)(e, Pt);
                  return a.createElement(
                    gt,
                    (0, R.Z)({ tab: i, key: l, tabKey: l }, s),
                  );
                }),
              },
            );
            return u(r, dt);
          }
          return a.createElement(dt, v);
        },
        Xt = $t,
        Gt = o(84888),
        Kt = [
          'key',
          'forceRender',
          'style',
          'className',
          'destroyInactiveTabPane',
        ],
        Vt = function (n) {
          var u = n.id,
            v = n.activeKey,
            g = n.animated,
            P = n.tabPosition,
            r = n.destroyInactiveTabPane,
            e = a.useContext(ve),
            i = e.prefixCls,
            l = e.tabs,
            s = g.tabPane,
            h = ''.concat(i, '-tabpane');
          return a.createElement(
            'div',
            { className: C()(''.concat(i, '-content-holder')) },
            a.createElement(
              'div',
              {
                className: C()(
                  ''.concat(i, '-content'),
                  ''.concat(i, '-content-').concat(P),
                  (0, A.Z)({}, ''.concat(i, '-content-animated'), s),
                ),
              },
              l.map(function (p) {
                var w = p.key,
                  F = p.forceRender,
                  T = p.style,
                  B = p.className,
                  S = p.destroyInactiveTabPane,
                  $ = (0, ue.Z)(p, Kt),
                  M = w === v;
                return a.createElement(
                  Gt.ZP,
                  (0, R.Z)(
                    {
                      key: w,
                      visible: M,
                      forceRender: F,
                      removeOnLeave: !!(r || S),
                      leavedClassName: ''.concat(h, '-hidden'),
                    },
                    g.tabPaneMotion,
                  ),
                  function (L, E) {
                    var X = L.style,
                      I = L.className;
                    return a.createElement(
                      gt,
                      (0, R.Z)({}, $, {
                        prefixCls: h,
                        id: u,
                        tabKey: w,
                        animated: s,
                        active: M,
                        style: (0, m.Z)((0, m.Z)({}, T), X),
                        className: C()(B, I),
                        ref: E,
                      }),
                    );
                  },
                );
              }),
            ),
          );
        },
        Tt = Vt,
        Rn = o(89071);
      function Ut() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : { inkBar: !0, tabPane: !1 },
          n;
        return (
          t === !1
            ? (n = { inkBar: !1, tabPane: !1 })
            : t === !0
            ? (n = { inkBar: !0, tabPane: !1 })
            : (n = (0, m.Z)({ inkBar: !0 }, (0, k.Z)(t) === 'object' ? t : {})),
          n.tabPaneMotion && n.tabPane === void 0 && (n.tabPane = !0),
          !n.tabPaneMotion && n.tabPane && (n.tabPane = !1),
          n
        );
      }
      var kt = [
          'id',
          'prefixCls',
          'className',
          'items',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'more',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
          'indicator',
        ],
        Rt = 0,
        bt = a.forwardRef(function (t, n) {
          var u = t.id,
            v = t.prefixCls,
            g = v === void 0 ? 'rc-tabs' : v,
            P = t.className,
            r = t.items,
            e = t.direction,
            i = t.activeKey,
            l = t.defaultActiveKey,
            s = t.editable,
            h = t.animated,
            p = t.tabPosition,
            w = p === void 0 ? 'top' : p,
            F = t.tabBarGutter,
            T = t.tabBarStyle,
            B = t.tabBarExtraContent,
            S = t.locale,
            $ = t.more,
            M = t.destroyInactiveTabPane,
            L = t.renderTabBar,
            E = t.onChange,
            X = t.onTabClick,
            I = t.onTabScroll,
            W = t.getPopupContainer,
            H = t.popupClassName,
            G = t.indicator,
            K = (0, ue.Z)(t, kt),
            N = a.useMemo(
              function () {
                return (r || []).filter(function (ne) {
                  return ne && (0, k.Z)(ne) === 'object' && 'key' in ne;
                });
              },
              [r],
            ),
            j = e === 'rtl',
            V = Ut(h),
            re = (0, a.useState)(!1),
            oe = (0, O.Z)(re, 2),
            z = oe[0],
            be = oe[1];
          (0, a.useEffect)(function () {
            be((0, ye.Z)());
          }, []);
          var pe = (0, Ze.Z)(
              function () {
                var ne;
                return (ne = N[0]) === null || ne === void 0 ? void 0 : ne.key;
              },
              { value: i, defaultValue: l },
            ),
            ce = (0, O.Z)(pe, 2),
            fe = ce[0],
            Se = ce[1],
            _ = (0, a.useState)(function () {
              return N.findIndex(function (ne) {
                return ne.key === fe;
              });
            }),
            Q = (0, O.Z)(_, 2),
            ie = Q[0],
            Pe = Q[1];
          (0, a.useEffect)(
            function () {
              var ne = N.findIndex(function (Be) {
                return Be.key === fe;
              });
              if (ne === -1) {
                var Te;
                (ne = Math.max(0, Math.min(ie, N.length - 1))),
                  Se((Te = N[ne]) === null || Te === void 0 ? void 0 : Te.key);
              }
              Pe(ne);
            },
            [
              N.map(function (ne) {
                return ne.key;
              }).join('_'),
              fe,
              ie,
            ],
          );
          var $e = (0, Ze.Z)(null, { value: u }),
            Oe = (0, O.Z)($e, 2),
            we = Oe[0],
            We = Oe[1];
          (0, a.useEffect)(function () {
            u || (We('rc-tabs-'.concat(Rt)), (Rt += 1));
          }, []);
          function se(ne, Te) {
            X == null || X(ne, Te);
            var Be = ne !== fe;
            Se(ne), Be && (E == null || E(ne));
          }
          var de = {
              id: we,
              activeKey: fe,
              animated: V,
              tabPosition: w,
              rtl: j,
              mobile: z,
            },
            ae = (0, m.Z)(
              (0, m.Z)({}, de),
              {},
              {
                editable: s,
                locale: S,
                more: $,
                tabBarGutter: F,
                onTabClick: se,
                onTabScroll: I,
                extra: B,
                style: T,
                panes: null,
                getPopupContainer: W,
                popupClassName: H,
                indicator: G,
              },
            );
          return a.createElement(
            ve.Provider,
            { value: { tabs: N, prefixCls: g } },
            a.createElement(
              'div',
              (0, R.Z)(
                {
                  ref: n,
                  id: u,
                  className: C()(
                    g,
                    ''.concat(g, '-').concat(w),
                    (0, A.Z)(
                      (0, A.Z)(
                        (0, A.Z)({}, ''.concat(g, '-mobile'), z),
                        ''.concat(g, '-editable'),
                        s,
                      ),
                      ''.concat(g, '-rtl'),
                      j,
                    ),
                    P,
                  ),
                },
                K,
              ),
              a.createElement(Xt, (0, R.Z)({}, ae, { renderTabBar: L })),
              a.createElement(
                Tt,
                (0, R.Z)({ destroyInactiveTabPane: M }, de, { animated: V }),
              ),
            ),
          );
        }),
        Yt = bt,
        Qt = Yt,
        Jt = o(64775),
        _t = o(72578),
        It = o(34256),
        Zt = o(39010);
      const qt = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
      function en(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { inkBar: !0, tabPane: !1 },
          u;
        return (
          n === !1
            ? (u = { inkBar: !1, tabPane: !1 })
            : n === !0
            ? (u = { inkBar: !0, tabPane: !0 })
            : (u = Object.assign(
                { inkBar: !0 },
                typeof n == 'object' ? n : {},
              )),
          u.tabPane &&
            (u.tabPaneMotion = Object.assign(Object.assign({}, qt), {
              motionName: (0, Zt.m)(t, 'switch'),
            })),
          u
        );
      }
      var tn = o(96865),
        nn = function (t, n) {
          var u = {};
          for (var v in t)
            Object.prototype.hasOwnProperty.call(t, v) &&
              n.indexOf(v) < 0 &&
              (u[v] = t[v]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var g = 0, v = Object.getOwnPropertySymbols(t);
              g < v.length;
              g++
            )
              n.indexOf(v[g]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, v[g]) &&
                (u[v[g]] = t[v[g]]);
          return u;
        };
      function an(t) {
        return t.filter((n) => n);
      }
      function rn(t, n) {
        if (t) return t;
        const u = (0, tn.Z)(n).map((v) => {
          if (a.isValidElement(v)) {
            const { key: g, props: P } = v,
              r = P || {},
              { tab: e } = r,
              i = nn(r, ['tab']);
            return Object.assign(Object.assign({ key: String(g) }, i), {
              label: e,
            });
          }
          return null;
        });
        return an(u);
      }
      var te = o(78456),
        at = o(96867),
        on = o(86029),
        ln = o(77179),
        wt = o(51650),
        cn = (t) => {
          const { componentCls: n, motionDurationSlow: u } = t;
          return [
            {
              [n]: {
                [`${n}-switch`]: {
                  '&-appear, &-enter': {
                    transition: 'none',
                    '&-start': { opacity: 0 },
                    '&-active': { opacity: 1, transition: `opacity ${u}` },
                  },
                  '&-leave': {
                    position: 'absolute',
                    transition: 'none',
                    inset: 0,
                    '&-start': { opacity: 1 },
                    '&-active': { opacity: 0, transition: `opacity ${u}` },
                  },
                },
              },
            },
            [(0, wt.oN)(t, 'slide-up'), (0, wt.oN)(t, 'slide-down')],
          ];
        };
      const sn = (t) => {
          const {
            componentCls: n,
            tabsCardPadding: u,
            cardBg: v,
            cardGutter: g,
            colorBorderSecondary: P,
            itemSelectedColor: r,
          } = t;
          return {
            [`${n}-card`]: {
              [`> ${n}-nav, > div > ${n}-nav`]: {
                [`${n}-tab`]: {
                  margin: 0,
                  padding: u,
                  background: v,
                  border: `${(0, te.bf)(t.lineWidth)} ${t.lineType} ${P}`,
                  transition: `all ${t.motionDurationSlow} ${t.motionEaseInOut}`,
                },
                [`${n}-tab-active`]: {
                  color: r,
                  background: t.colorBgContainer,
                },
                [`${n}-ink-bar`]: { visibility: 'hidden' },
              },
              [`&${n}-top, &${n}-bottom`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab + ${n}-tab`]: {
                    marginLeft: { _skip_check_: !0, value: (0, te.bf)(g) },
                  },
                },
              },
              [`&${n}-top`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab`]: {
                    borderRadius: `${(0, te.bf)(t.borderRadiusLG)} ${(0, te.bf)(
                      t.borderRadiusLG,
                    )} 0 0`,
                  },
                  [`${n}-tab-active`]: {
                    borderBottomColor: t.colorBgContainer,
                  },
                },
              },
              [`&${n}-bottom`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab`]: {
                    borderRadius: `0 0 ${(0, te.bf)(t.borderRadiusLG)} ${(0,
                    te.bf)(t.borderRadiusLG)}`,
                  },
                  [`${n}-tab-active`]: { borderTopColor: t.colorBgContainer },
                },
              },
              [`&${n}-left, &${n}-right`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab + ${n}-tab`]: { marginTop: (0, te.bf)(g) },
                },
              },
              [`&${n}-left`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, te.bf)(t.borderRadiusLG)} 0 0 ${(0, te.bf)(
                        t.borderRadiusLG,
                      )}`,
                    },
                  },
                  [`${n}-tab-active`]: {
                    borderRightColor: {
                      _skip_check_: !0,
                      value: t.colorBgContainer,
                    },
                  },
                },
              },
              [`&${n}-right`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, te.bf)(t.borderRadiusLG)} ${(0, te.bf)(
                        t.borderRadiusLG,
                      )} 0`,
                    },
                  },
                  [`${n}-tab-active`]: {
                    borderLeftColor: {
                      _skip_check_: !0,
                      value: t.colorBgContainer,
                    },
                  },
                },
              },
            },
          };
        },
        ut = (t) => {
          const {
            componentCls: n,
            itemHoverColor: u,
            dropdownEdgeChildVerticalPadding: v,
          } = t;
          return {
            [`${n}-dropdown`]: Object.assign(Object.assign({}, (0, at.Wf)(t)), {
              position: 'absolute',
              top: -9999,
              left: { _skip_check_: !0, value: -9999 },
              zIndex: t.zIndexPopup,
              display: 'block',
              '&-hidden': { display: 'none' },
              [`${n}-dropdown-menu`]: {
                maxHeight: t.tabsDropdownHeight,
                margin: 0,
                padding: `${(0, te.bf)(v)} 0`,
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: { _skip_check_: !0, value: 'left' },
                listStyleType: 'none',
                backgroundColor: t.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: t.borderRadiusLG,
                outline: 'none',
                boxShadow: t.boxShadowSecondary,
                '&-item': Object.assign(Object.assign({}, at.vS), {
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: t.tabsDropdownWidth,
                  margin: 0,
                  padding: `${(0, te.bf)(t.paddingXXS)} ${(0, te.bf)(
                    t.paddingSM,
                  )}`,
                  color: t.colorText,
                  fontWeight: 'normal',
                  fontSize: t.fontSize,
                  lineHeight: t.lineHeight,
                  cursor: 'pointer',
                  transition: `all ${t.motionDurationSlow}`,
                  '> span': { flex: 1, whiteSpace: 'nowrap' },
                  '&-remove': {
                    flex: 'none',
                    marginLeft: { _skip_check_: !0, value: t.marginSM },
                    color: t.colorTextDescription,
                    fontSize: t.fontSizeSM,
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    '&:hover': { color: u },
                  },
                  '&:hover': { background: t.controlItemBgHover },
                  '&-disabled': {
                    '&, &:hover': {
                      color: t.colorTextDisabled,
                      background: 'transparent',
                      cursor: 'not-allowed',
                    },
                  },
                }),
              },
            }),
          };
        },
        Et = (t) => {
          const {
            componentCls: n,
            margin: u,
            colorBorderSecondary: v,
            horizontalMargin: g,
            verticalItemPadding: P,
            verticalItemMargin: r,
            calc: e,
          } = t;
          return {
            [`${n}-top, ${n}-bottom`]: {
              flexDirection: 'column',
              [`> ${n}-nav, > div > ${n}-nav`]: {
                margin: g,
                '&::before': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  left: { _skip_check_: !0, value: 0 },
                  borderBottom: `${(0, te.bf)(t.lineWidth)} ${t.lineType} ${v}`,
                  content: "''",
                },
                [`${n}-ink-bar`]: {
                  height: t.lineWidthBold,
                  '&-animated': {
                    transition: `width ${t.motionDurationSlow}, left ${t.motionDurationSlow},
            right ${t.motionDurationSlow}`,
                  },
                },
                [`${n}-nav-wrap`]: {
                  '&::before, &::after': {
                    top: 0,
                    bottom: 0,
                    width: t.controlHeight,
                  },
                  '&::before': {
                    left: { _skip_check_: !0, value: 0 },
                    boxShadow: t.boxShadowTabsOverflowLeft,
                  },
                  '&::after': {
                    right: { _skip_check_: !0, value: 0 },
                    boxShadow: t.boxShadowTabsOverflowRight,
                  },
                  [`&${n}-nav-wrap-ping-left::before`]: { opacity: 1 },
                  [`&${n}-nav-wrap-ping-right::after`]: { opacity: 1 },
                },
              },
            },
            [`${n}-top`]: {
              [`> ${n}-nav,
        > div > ${n}-nav`]: {
                '&::before': { bottom: 0 },
                [`${n}-ink-bar`]: { bottom: 0 },
              },
            },
            [`${n}-bottom`]: {
              [`> ${n}-nav, > div > ${n}-nav`]: {
                order: 1,
                marginTop: u,
                marginBottom: 0,
                '&::before': { top: 0 },
                [`${n}-ink-bar`]: { top: 0 },
              },
              [`> ${n}-content-holder, > div > ${n}-content-holder`]: {
                order: 0,
              },
            },
            [`${n}-left, ${n}-right`]: {
              [`> ${n}-nav, > div > ${n}-nav`]: {
                flexDirection: 'column',
                minWidth: e(t.controlHeight).mul(1.25).equal(),
                [`${n}-tab`]: { padding: P, textAlign: 'center' },
                [`${n}-tab + ${n}-tab`]: { margin: r },
                [`${n}-nav-wrap`]: {
                  flexDirection: 'column',
                  '&::before, &::after': {
                    right: { _skip_check_: !0, value: 0 },
                    left: { _skip_check_: !0, value: 0 },
                    height: t.controlHeight,
                  },
                  '&::before': {
                    top: 0,
                    boxShadow: t.boxShadowTabsOverflowTop,
                  },
                  '&::after': {
                    bottom: 0,
                    boxShadow: t.boxShadowTabsOverflowBottom,
                  },
                  [`&${n}-nav-wrap-ping-top::before`]: { opacity: 1 },
                  [`&${n}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
                },
                [`${n}-ink-bar`]: {
                  width: t.lineWidthBold,
                  '&-animated': {
                    transition: `height ${t.motionDurationSlow}, top ${t.motionDurationSlow}`,
                  },
                },
                [`${n}-nav-list, ${n}-nav-operations`]: {
                  flex: '1 0 auto',
                  flexDirection: 'column',
                },
              },
            },
            [`${n}-left`]: {
              [`> ${n}-nav, > div > ${n}-nav`]: {
                [`${n}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
              },
              [`> ${n}-content-holder, > div > ${n}-content-holder`]: {
                marginLeft: {
                  _skip_check_: !0,
                  value: (0, te.bf)(e(t.lineWidth).mul(-1).equal()),
                },
                borderLeft: {
                  _skip_check_: !0,
                  value: `${(0, te.bf)(t.lineWidth)} ${t.lineType} ${
                    t.colorBorder
                  }`,
                },
                [`> ${n}-content > ${n}-tabpane`]: {
                  paddingLeft: { _skip_check_: !0, value: t.paddingLG },
                },
              },
            },
            [`${n}-right`]: {
              [`> ${n}-nav, > div > ${n}-nav`]: {
                order: 1,
                [`${n}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
              },
              [`> ${n}-content-holder, > div > ${n}-content-holder`]: {
                order: 0,
                marginRight: {
                  _skip_check_: !0,
                  value: e(t.lineWidth).mul(-1).equal(),
                },
                borderRight: {
                  _skip_check_: !0,
                  value: `${(0, te.bf)(t.lineWidth)} ${t.lineType} ${
                    t.colorBorder
                  }`,
                },
                [`> ${n}-content > ${n}-tabpane`]: {
                  paddingRight: { _skip_check_: !0, value: t.paddingLG },
                },
              },
            },
          };
        },
        Nt = (t) => {
          const {
            componentCls: n,
            cardPaddingSM: u,
            cardPaddingLG: v,
            horizontalItemPaddingSM: g,
            horizontalItemPaddingLG: P,
          } = t;
          return {
            [n]: {
              '&-small': {
                [`> ${n}-nav`]: {
                  [`${n}-tab`]: { padding: g, fontSize: t.titleFontSizeSM },
                },
              },
              '&-large': {
                [`> ${n}-nav`]: {
                  [`${n}-tab`]: { padding: P, fontSize: t.titleFontSizeLG },
                },
              },
            },
            [`${n}-card`]: {
              [`&${n}-small`]: {
                [`> ${n}-nav`]: { [`${n}-tab`]: { padding: u } },
                [`&${n}-bottom`]: {
                  [`> ${n}-nav ${n}-tab`]: {
                    borderRadius: `0 0 ${(0, te.bf)(t.borderRadius)} ${(0,
                    te.bf)(t.borderRadius)}`,
                  },
                },
                [`&${n}-top`]: {
                  [`> ${n}-nav ${n}-tab`]: {
                    borderRadius: `${(0, te.bf)(t.borderRadius)} ${(0, te.bf)(
                      t.borderRadius,
                    )} 0 0`,
                  },
                },
                [`&${n}-right`]: {
                  [`> ${n}-nav ${n}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, te.bf)(t.borderRadius)} ${(0, te.bf)(
                        t.borderRadius,
                      )} 0`,
                    },
                  },
                },
                [`&${n}-left`]: {
                  [`> ${n}-nav ${n}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, te.bf)(t.borderRadius)} 0 0 ${(0, te.bf)(
                        t.borderRadius,
                      )}`,
                    },
                  },
                },
              },
              [`&${n}-large`]: {
                [`> ${n}-nav`]: { [`${n}-tab`]: { padding: v } },
              },
            },
          };
        },
        dn = (t) => {
          const {
              componentCls: n,
              itemActiveColor: u,
              itemHoverColor: v,
              iconCls: g,
              tabsHorizontalItemMargin: P,
              horizontalItemPadding: r,
              itemSelectedColor: e,
              itemColor: i,
            } = t,
            l = `${n}-tab`;
          return {
            [l]: {
              position: 'relative',
              WebkitTouchCallout: 'none',
              WebkitTapHighlightColor: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              padding: r,
              fontSize: t.titleFontSize,
              background: 'transparent',
              border: 0,
              outline: 'none',
              cursor: 'pointer',
              color: i,
              '&-btn, &-remove': Object.assign(
                { '&:focus:not(:focus-visible), &:active': { color: u } },
                (0, at.Qy)(t),
              ),
              '&-btn': {
                outline: 'none',
                transition: `all ${t.motionDurationSlow}`,
                [`${l}-icon:not(:last-child)`]: { marginInlineEnd: t.marginSM },
              },
              '&-remove': {
                flex: 'none',
                marginRight: {
                  _skip_check_: !0,
                  value: t.calc(t.marginXXS).mul(-1).equal(),
                },
                marginLeft: { _skip_check_: !0, value: t.marginXS },
                color: t.colorTextDescription,
                fontSize: t.fontSizeSM,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: `all ${t.motionDurationSlow}`,
                '&:hover': { color: t.colorTextHeading },
              },
              '&:hover': { color: v },
              [`&${l}-active ${l}-btn`]: {
                color: e,
                textShadow: t.tabsActiveTextShadow,
              },
              [`&${l}-disabled`]: {
                color: t.colorTextDisabled,
                cursor: 'not-allowed',
              },
              [`&${l}-disabled ${l}-btn, &${l}-disabled ${n}-remove`]: {
                '&:focus, &:active': { color: t.colorTextDisabled },
              },
              [`& ${l}-remove ${g}`]: { margin: 0 },
              [`${g}:not(:last-child)`]: {
                marginRight: { _skip_check_: !0, value: t.marginSM },
              },
            },
            [`${l} + ${l}`]: { margin: { _skip_check_: !0, value: P } },
          };
        },
        un = (t) => {
          const {
            componentCls: n,
            tabsHorizontalItemMarginRTL: u,
            iconCls: v,
            cardGutter: g,
            calc: P,
          } = t;
          return {
            [`${n}-rtl`]: {
              direction: 'rtl',
              [`${n}-nav`]: {
                [`${n}-tab`]: {
                  margin: { _skip_check_: !0, value: u },
                  [`${n}-tab:last-of-type`]: {
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                  [v]: {
                    marginRight: { _skip_check_: !0, value: 0 },
                    marginLeft: {
                      _skip_check_: !0,
                      value: (0, te.bf)(t.marginSM),
                    },
                  },
                  [`${n}-tab-remove`]: {
                    marginRight: {
                      _skip_check_: !0,
                      value: (0, te.bf)(t.marginXS),
                    },
                    marginLeft: {
                      _skip_check_: !0,
                      value: (0, te.bf)(P(t.marginXXS).mul(-1).equal()),
                    },
                    [v]: { margin: 0 },
                  },
                },
              },
              [`&${n}-left`]: {
                [`> ${n}-nav`]: { order: 1 },
                [`> ${n}-content-holder`]: { order: 0 },
              },
              [`&${n}-right`]: {
                [`> ${n}-nav`]: { order: 0 },
                [`> ${n}-content-holder`]: { order: 1 },
              },
              [`&${n}-card${n}-top, &${n}-card${n}-bottom`]: {
                [`> ${n}-nav, > div > ${n}-nav`]: {
                  [`${n}-tab + ${n}-tab`]: {
                    marginRight: { _skip_check_: !0, value: g },
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                },
              },
            },
            [`${n}-dropdown-rtl`]: { direction: 'rtl' },
            [`${n}-menu-item`]: {
              [`${n}-dropdown-rtl`]: {
                textAlign: { _skip_check_: !0, value: 'right' },
              },
            },
          };
        },
        fn = (t) => {
          const {
            componentCls: n,
            tabsCardPadding: u,
            cardHeight: v,
            cardGutter: g,
            itemHoverColor: P,
            itemActiveColor: r,
            colorBorderSecondary: e,
          } = t;
          return {
            [n]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, at.Wf)(t)), {
                  display: 'flex',
                  [`> ${n}-nav, > div > ${n}-nav`]: {
                    position: 'relative',
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    [`${n}-nav-wrap`]: {
                      position: 'relative',
                      display: 'flex',
                      flex: 'auto',
                      alignSelf: 'stretch',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      transform: 'translate(0)',
                      '&::before, &::after': {
                        position: 'absolute',
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${t.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: 'none',
                      },
                    },
                    [`${n}-nav-list`]: {
                      position: 'relative',
                      display: 'flex',
                      transition: `opacity ${t.motionDurationSlow}`,
                    },
                    [`${n}-nav-operations`]: {
                      display: 'flex',
                      alignSelf: 'stretch',
                    },
                    [`${n}-nav-operations-hidden`]: {
                      position: 'absolute',
                      visibility: 'hidden',
                      pointerEvents: 'none',
                    },
                    [`${n}-nav-more`]: {
                      position: 'relative',
                      padding: u,
                      background: 'transparent',
                      border: 0,
                      color: t.colorText,
                      '&::after': {
                        position: 'absolute',
                        right: { _skip_check_: !0, value: 0 },
                        bottom: 0,
                        left: { _skip_check_: !0, value: 0 },
                        height: t.calc(t.controlHeightLG).div(8).equal(),
                        transform: 'translateY(100%)',
                        content: "''",
                      },
                    },
                    [`${n}-nav-add`]: Object.assign(
                      {
                        minWidth: v,
                        minHeight: v,
                        marginLeft: { _skip_check_: !0, value: g },
                        padding: `0 ${(0, te.bf)(t.paddingXS)}`,
                        background: 'transparent',
                        border: `${(0, te.bf)(t.lineWidth)} ${t.lineType} ${e}`,
                        borderRadius: `${(0, te.bf)(t.borderRadiusLG)} ${(0,
                        te.bf)(t.borderRadiusLG)} 0 0`,
                        outline: 'none',
                        cursor: 'pointer',
                        color: t.colorText,
                        transition: `all ${t.motionDurationSlow} ${t.motionEaseInOut}`,
                        '&:hover': { color: P },
                        '&:active, &:focus:not(:focus-visible)': { color: r },
                      },
                      (0, at.Qy)(t),
                    ),
                  },
                  [`${n}-extra-content`]: { flex: 'none' },
                  [`${n}-ink-bar`]: {
                    position: 'absolute',
                    background: t.inkBarColor,
                    pointerEvents: 'none',
                  },
                }),
                dn(t),
              ),
              {
                [`${n}-content`]: { position: 'relative', width: '100%' },
                [`${n}-content-holder`]: {
                  flex: 'auto',
                  minWidth: 0,
                  minHeight: 0,
                },
                [`${n}-tabpane`]: {
                  outline: 'none',
                  '&-hidden': { display: 'none' },
                },
              },
            ),
            [`${n}-centered`]: {
              [`> ${n}-nav, > div > ${n}-nav`]: {
                [`${n}-nav-wrap`]: {
                  [`&:not([class*='${n}-nav-wrap-ping'])`]: {
                    justifyContent: 'center',
                  },
                },
              },
            },
          };
        },
        vn = (t) => {
          const n = t.controlHeightLG;
          return {
            zIndexPopup: t.zIndexPopupBase + 50,
            cardBg: t.colorFillAlter,
            cardHeight: n,
            cardPadding: `${
              (n - Math.round(t.fontSize * t.lineHeight)) / 2 - t.lineWidth
            }px ${t.padding}px`,
            cardPaddingSM: `${t.paddingXXS * 1.5}px ${t.padding}px`,
            cardPaddingLG: `${t.paddingXS}px ${t.padding}px ${
              t.paddingXXS * 1.5
            }px`,
            titleFontSize: t.fontSize,
            titleFontSizeLG: t.fontSizeLG,
            titleFontSizeSM: t.fontSize,
            inkBarColor: t.colorPrimary,
            horizontalMargin: `0 0 ${t.margin}px 0`,
            horizontalItemGutter: 32,
            horizontalItemMargin: '',
            horizontalItemMarginRTL: '',
            horizontalItemPadding: `${t.paddingSM}px 0`,
            horizontalItemPaddingSM: `${t.paddingXS}px 0`,
            horizontalItemPaddingLG: `${t.padding}px 0`,
            verticalItemPadding: `${t.paddingXS}px ${t.paddingLG}px`,
            verticalItemMargin: `${t.margin}px 0 0 0`,
            itemColor: t.colorText,
            itemSelectedColor: t.colorPrimary,
            itemHoverColor: t.colorPrimaryHover,
            itemActiveColor: t.colorPrimaryActive,
            cardGutter: t.marginXXS / 2,
          };
        };
      var mn = (0, on.I$)(
          'Tabs',
          (t) => {
            const n = (0, ln.IX)(t, {
              tabsCardPadding: t.cardPadding,
              dropdownEdgeChildVerticalPadding: t.paddingXXS,
              tabsActiveTextShadow: '0 0 0.25px currentcolor',
              tabsDropdownHeight: 200,
              tabsDropdownWidth: 120,
              tabsHorizontalItemMargin: `0 0 0 ${(0, te.bf)(
                t.horizontalItemGutter,
              )}`,
              tabsHorizontalItemMarginRTL: `0 0 0 ${(0, te.bf)(
                t.horizontalItemGutter,
              )}`,
            });
            return [Nt(n), un(n), Et(n), ut(n), sn(n), fn(n), cn(n)];
          },
          vn,
        ),
        gn = () => null,
        bn = function (t, n) {
          var u = {};
          for (var v in t)
            Object.prototype.hasOwnProperty.call(t, v) &&
              n.indexOf(v) < 0 &&
              (u[v] = t[v]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var g = 0, v = Object.getOwnPropertySymbols(t);
              g < v.length;
              g++
            )
              n.indexOf(v[g]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, v[g]) &&
                (u[v[g]] = t[v[g]]);
          return u;
        };
      const Ot = (t) => {
        var n, u, v, g, P, r, e, i, l, s, h;
        const {
            type: p,
            className: w,
            rootClassName: F,
            size: T,
            onEdit: B,
            hideAdd: S,
            centered: $,
            addIcon: M,
            removeIcon: L,
            moreIcon: E,
            more: X,
            popupClassName: I,
            children: W,
            items: H,
            animated: G,
            style: K,
            indicatorSize: N,
            indicator: j,
          } = t,
          V = bn(t, [
            'type',
            'className',
            'rootClassName',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
            'removeIcon',
            'moreIcon',
            'more',
            'popupClassName',
            'children',
            'items',
            'animated',
            'style',
            'indicatorSize',
            'indicator',
          ]),
          { prefixCls: re } = V,
          {
            direction: oe,
            tabs: z,
            getPrefixCls: be,
            getPopupContainer: pe,
          } = a.useContext(Jt.E_),
          ce = be('tabs', re),
          fe = (0, _t.Z)(ce),
          [Se, _, Q] = mn(ce, fe);
        let ie;
        p === 'editable-card' &&
          (ie = {
            onEdit: (de, ae) => {
              let { key: ne, event: Te } = ae;
              B == null || B(de === 'add' ? Te : ne, de);
            },
            removeIcon:
              (n = L != null ? L : z == null ? void 0 : z.removeIcon) !==
                null && n !== void 0
                ? n
                : a.createElement(y.Z, null),
            addIcon:
              (M != null ? M : z == null ? void 0 : z.addIcon) ||
              a.createElement(b.Z, null),
            showAdd: S !== !0,
          });
        const Pe = be(),
          $e = (0, It.Z)(T),
          Oe = rn(H, W),
          we = en(ce, G),
          We = Object.assign(
            Object.assign({}, z == null ? void 0 : z.style),
            K,
          ),
          se = {
            align:
              (u = j == null ? void 0 : j.align) !== null && u !== void 0
                ? u
                : (v = z == null ? void 0 : z.indicator) === null ||
                  v === void 0
                ? void 0
                : v.align,
            size:
              (e =
                (P =
                  (g = j == null ? void 0 : j.size) !== null && g !== void 0
                    ? g
                    : N) !== null && P !== void 0
                  ? P
                  : (r = z == null ? void 0 : z.indicator) === null ||
                    r === void 0
                  ? void 0
                  : r.size) !== null && e !== void 0
                ? e
                : z == null
                ? void 0
                : z.indicatorSize,
          };
        return Se(
          a.createElement(
            Qt,
            Object.assign({ direction: oe, getPopupContainer: pe }, V, {
              items: Oe,
              className: C()(
                {
                  [`${ce}-${$e}`]: $e,
                  [`${ce}-card`]: ['card', 'editable-card'].includes(p),
                  [`${ce}-editable-card`]: p === 'editable-card',
                  [`${ce}-centered`]: $,
                },
                z == null ? void 0 : z.className,
                w,
                F,
                _,
                Q,
                fe,
              ),
              popupClassName: C()(I, _, Q, fe),
              style: We,
              editable: ie,
              more: Object.assign(
                {
                  icon:
                    (h =
                      (s =
                        (l =
                          (i = z == null ? void 0 : z.more) === null ||
                          i === void 0
                            ? void 0
                            : i.icon) !== null && l !== void 0
                          ? l
                          : z == null
                          ? void 0
                          : z.moreIcon) !== null && s !== void 0
                        ? s
                        : E) !== null && h !== void 0
                      ? h
                      : a.createElement(c.Z, null),
                  transitionName: `${Pe}-slide-up`,
                },
                X,
              ),
              prefixCls: ce,
              animated: we,
              indicator: se,
            }),
          ),
        );
      };
      Ot.TabPane = gn;
      var hn = Ot;
    },
    14812: function (f, d) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }), (d.default = o);
      function o() {
        return !!(
          typeof window != 'undefined' &&
          window.document &&
          window.document.createElement
        );
      }
    },
    52761: function (f, d) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }), (d.default = o);
      function o(a, y) {
        if (!a) return !1;
        if (a.contains) return a.contains(y);
        for (var c = y; c; ) {
          if (c === a) return !0;
          c = c.parentNode;
        }
        return !1;
      }
    },
    26024: function (f, d, o) {
      'use strict';
      var a = o(70391).default;
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.clearContainerCache = me),
        (d.injectCSS = Ze),
        (d.removeCSS = ve),
        (d.updateCSS = Le);
      var y = a(o(45874)),
        c = a(o(14812)),
        b = a(o(52761)),
        Z = 'data-rc-order',
        C = 'data-rc-priority',
        R = 'rc-util-key',
        A = new Map();
      function m() {
        var q =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          Y = q.mark;
        return Y ? (Y.startsWith('data-') ? Y : 'data-'.concat(Y)) : R;
      }
      function O(q) {
        if (q.attachTo) return q.attachTo;
        var Y = document.querySelector('head');
        return Y || document.body;
      }
      function k(q) {
        return q === 'queue' ? 'prependQueue' : q ? 'prepend' : 'append';
      }
      function ue(q) {
        return Array.from((A.get(q) || q).children).filter(function (Y) {
          return Y.tagName === 'STYLE';
        });
      }
      function Ze(q) {
        var Y =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(0, c.default)()) return null;
        var x = Y.csp,
          U = Y.prepend,
          ee = Y.priority,
          J = ee === void 0 ? 0 : ee,
          ge = k(U),
          Ee = ge === 'prependQueue',
          Ce = document.createElement('style');
        Ce.setAttribute(Z, ge),
          Ee && J && Ce.setAttribute(C, ''.concat(J)),
          x != null && x.nonce && (Ce.nonce = x == null ? void 0 : x.nonce),
          (Ce.innerHTML = q);
        var xe = O(Y),
          je = xe.firstChild;
        if (U) {
          if (Ee) {
            var Xe = (Y.styles || ue(xe)).filter(function (Ke) {
              if (!['prepend', 'prependQueue'].includes(Ke.getAttribute(Z)))
                return !1;
              var Ae = Number(Ke.getAttribute(C) || 0);
              return J >= Ae;
            });
            if (Xe.length)
              return xe.insertBefore(Ce, Xe[Xe.length - 1].nextSibling), Ce;
          }
          xe.insertBefore(Ce, je);
        } else xe.appendChild(Ce);
        return Ce;
      }
      function ye(q) {
        var Y =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          x = O(Y);
        return (Y.styles || ue(x)).find(function (U) {
          return U.getAttribute(m(Y)) === q;
        });
      }
      function ve(q) {
        var Y =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          x = ye(q, Y);
        if (x) {
          var U = O(Y);
          U.removeChild(x);
        }
      }
      function He(q, Y) {
        var x = A.get(q);
        if (!x || !(0, b.default)(document, x)) {
          var U = Ze('', Y),
            ee = U.parentNode;
          A.set(q, ee), q.removeChild(U);
        }
      }
      function me() {
        A.clear();
      }
      function Le(q, Y) {
        var x =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          U = O(x),
          ee = ue(U),
          J = (0, y.default)((0, y.default)({}, x), {}, { styles: ee });
        He(U, J);
        var ge = ye(Y, J);
        if (ge) {
          var Ee, Ce;
          if (
            (Ee = J.csp) !== null &&
            Ee !== void 0 &&
            Ee.nonce &&
            ge.nonce !==
              ((Ce = J.csp) === null || Ce === void 0 ? void 0 : Ce.nonce)
          ) {
            var xe;
            ge.nonce =
              (xe = J.csp) === null || xe === void 0 ? void 0 : xe.nonce;
          }
          return ge.innerHTML !== q && (ge.innerHTML = q), ge;
        }
        var je = Ze(q, J);
        return je.setAttribute(m(J), Y), je;
      }
    },
    11762: function (f, d) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.getShadowRoot = y),
        (d.inShadow = a);
      function o(c) {
        var b;
        return c == null || (b = c.getRootNode) === null || b === void 0
          ? void 0
          : b.call(c);
      }
      function a(c) {
        return o(c) instanceof ShadowRoot;
      }
      function y(c) {
        return a(c) ? o(c) : null;
      }
    },
    54424: function (f, d) {
      'use strict';
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.call = C),
        (d.default = void 0),
        (d.note = b),
        (d.noteOnce = A),
        (d.preMessage = void 0),
        (d.resetWarned = Z),
        (d.warning = c),
        (d.warningOnce = R);
      var o = {},
        a = [],
        y = (d.preMessage = function (k) {
          a.push(k);
        });
      function c(O, k) {
        if (0) var ue;
      }
      function b(O, k) {
        if (0) var ue;
      }
      function Z() {
        o = {};
      }
      function C(O, k, ue) {
        !k && !o[ue] && (O(!1, ue), (o[ue] = !0));
      }
      function R(O, k) {
        C(c, O, k);
      }
      function A(O, k) {
        C(b, O, k);
      }
      (R.preMessage = y), (R.resetWarned = Z), (R.noteOnce = A);
      var m = (d.default = R);
    },
    73192: function (f) {
      function d(o, a) {
        (a == null || a > o.length) && (a = o.length);
        for (var y = 0, c = Array(a); y < a; y++) c[y] = o[y];
        return c;
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    19057: function (f) {
      function d(o) {
        if (Array.isArray(o)) return o;
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    75335: function (f, d, o) {
      var a = o(57640);
      function y(c, b, Z) {
        return (
          (b = a(b)) in c
            ? Object.defineProperty(c, b, {
                value: Z,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (c[b] = Z),
          c
        );
      }
      (f.exports = y),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    78331: function (f) {
      function d() {
        return (
          (f.exports = d =
            Object.assign
              ? Object.assign.bind()
              : function (o) {
                  for (var a = 1; a < arguments.length; a++) {
                    var y = arguments[a];
                    for (var c in y)
                      ({}).hasOwnProperty.call(y, c) && (o[c] = y[c]);
                  }
                  return o;
                }),
          (f.exports.__esModule = !0),
          (f.exports.default = f.exports),
          d.apply(null, arguments)
        );
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    70391: function (f) {
      function d(o) {
        return o && o.__esModule ? o : { default: o };
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    42667: function (f, d, o) {
      var a = o(18458).default;
      function y(b) {
        if (typeof WeakMap != 'function') return null;
        var Z = new WeakMap(),
          C = new WeakMap();
        return (y = function (A) {
          return A ? C : Z;
        })(b);
      }
      function c(b, Z) {
        if (!Z && b && b.__esModule) return b;
        if (b === null || (a(b) != 'object' && typeof b != 'function'))
          return { default: b };
        var C = y(Z);
        if (C && C.has(b)) return C.get(b);
        var R = { __proto__: null },
          A = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var m in b)
          if (m !== 'default' && {}.hasOwnProperty.call(b, m)) {
            var O = A ? Object.getOwnPropertyDescriptor(b, m) : null;
            O && (O.get || O.set)
              ? Object.defineProperty(R, m, O)
              : (R[m] = b[m]);
          }
        return (R.default = b), C && C.set(b, R), R;
      }
      (f.exports = c),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    77527: function (f) {
      function d(o, a) {
        var y =
          o == null
            ? null
            : (typeof Symbol != 'undefined' && o[Symbol.iterator]) ||
              o['@@iterator'];
        if (y != null) {
          var c,
            b,
            Z,
            C,
            R = [],
            A = !0,
            m = !1;
          try {
            if (((Z = (y = y.call(o)).next), a === 0)) {
              if (Object(y) !== y) return;
              A = !1;
            } else
              for (
                ;
                !(A = (c = Z.call(y)).done) &&
                (R.push(c.value), R.length !== a);
                A = !0
              );
          } catch (O) {
            (m = !0), (b = O);
          } finally {
            try {
              if (!A && y.return != null && ((C = y.return()), Object(C) !== C))
                return;
            } finally {
              if (m) throw b;
            }
          }
          return R;
        }
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    43973: function (f) {
      function d() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    45874: function (f, d, o) {
      var a = o(75335);
      function y(b, Z) {
        var C = Object.keys(b);
        if (Object.getOwnPropertySymbols) {
          var R = Object.getOwnPropertySymbols(b);
          Z &&
            (R = R.filter(function (A) {
              return Object.getOwnPropertyDescriptor(b, A).enumerable;
            })),
            C.push.apply(C, R);
        }
        return C;
      }
      function c(b) {
        for (var Z = 1; Z < arguments.length; Z++) {
          var C = arguments[Z] != null ? arguments[Z] : {};
          Z % 2
            ? y(Object(C), !0).forEach(function (R) {
                a(b, R, C[R]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(C))
            : y(Object(C)).forEach(function (R) {
                Object.defineProperty(
                  b,
                  R,
                  Object.getOwnPropertyDescriptor(C, R),
                );
              });
        }
        return b;
      }
      (f.exports = c),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    620: function (f, d, o) {
      var a = o(71093);
      function y(c, b) {
        if (c == null) return {};
        var Z,
          C,
          R = a(c, b);
        if (Object.getOwnPropertySymbols) {
          var A = Object.getOwnPropertySymbols(c);
          for (C = 0; C < A.length; C++)
            (Z = A[C]),
              b.includes(Z) ||
                ({}.propertyIsEnumerable.call(c, Z) && (R[Z] = c[Z]));
        }
        return R;
      }
      (f.exports = y),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    71093: function (f) {
      function d(o, a) {
        if (o == null) return {};
        var y = {};
        for (var c in o)
          if ({}.hasOwnProperty.call(o, c)) {
            if (a.includes(c)) continue;
            y[c] = o[c];
          }
        return y;
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    47191: function (f, d, o) {
      var a = o(19057),
        y = o(77527),
        c = o(46609),
        b = o(43973);
      function Z(C, R) {
        return a(C) || y(C, R) || c(C, R) || b();
      }
      (f.exports = Z),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    96251: function (f, d, o) {
      var a = o(18458).default;
      function y(c, b) {
        if (a(c) != 'object' || !c) return c;
        var Z = c[Symbol.toPrimitive];
        if (Z !== void 0) {
          var C = Z.call(c, b || 'default');
          if (a(C) != 'object') return C;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (b === 'string' ? String : Number)(c);
      }
      (f.exports = y),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    57640: function (f, d, o) {
      var a = o(18458).default,
        y = o(96251);
      function c(b) {
        var Z = y(b, 'string');
        return a(Z) == 'symbol' ? Z : Z + '';
      }
      (f.exports = c),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    18458: function (f) {
      function d(o) {
        '@babel/helpers - typeof';
        return (
          (f.exports = d =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    typeof Symbol == 'function' &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? 'symbol'
                    : typeof a;
                }),
          (f.exports.__esModule = !0),
          (f.exports.default = f.exports),
          d(o)
        );
      }
      (f.exports = d),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
    46609: function (f, d, o) {
      var a = o(73192);
      function y(c, b) {
        if (c) {
          if (typeof c == 'string') return a(c, b);
          var Z = {}.toString.call(c).slice(8, -1);
          return (
            Z === 'Object' && c.constructor && (Z = c.constructor.name),
            Z === 'Map' || Z === 'Set'
              ? Array.from(c)
              : Z === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z)
              ? a(c, b)
              : void 0
          );
        }
      }
      (f.exports = y),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
    },
  },
]);
