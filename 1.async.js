(self.webpackChunk = self.webpackChunk || []).push([
  [1],
  {
    17039: function (R, H, u) {
      'use strict';
      u.d(H, {
        Z: function () {
          return dn;
        },
      });
      var o = u(83525),
        C = u(82702),
        M = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z',
                },
              },
            ],
          },
          name: 'logout',
          theme: 'outlined',
        },
        I = M,
        p = u(72561),
        s = u(73990),
        w = u(41670),
        $ = u(91150),
        v = u.n($),
        te = (0, C.createContext)({}),
        oe = te,
        Ce = u(22361),
        X = u(4877),
        ne = u(14506),
        h = 2,
        B = 0.16,
        T = 0.05,
        D = 0.05,
        se = 0.15,
        U = 5,
        z = 4,
        V = [
          { index: 7, opacity: 0.15 },
          { index: 6, opacity: 0.25 },
          { index: 5, opacity: 0.3 },
          { index: 5, opacity: 0.45 },
          { index: 5, opacity: 0.65 },
          { index: 5, opacity: 0.85 },
          { index: 4, opacity: 0.9 },
          { index: 3, opacity: 0.95 },
          { index: 2, opacity: 0.97 },
          { index: 1, opacity: 0.98 },
        ];
      function ie(x) {
        var K = x.r,
          ae = x.g,
          q = x.b,
          Se = (0, X.py)(K, ae, q);
        return { h: Se.h * 360, s: Se.s, v: Se.v };
      }
      function le(x) {
        var K = x.r,
          ae = x.g,
          q = x.b;
        return '#'.concat((0, X.vq)(K, ae, q, !1));
      }
      function ee(x, K, ae) {
        var q = ae / 100,
          Se = {
            r: (K.r - x.r) * q + x.r,
            g: (K.g - x.g) * q + x.g,
            b: (K.b - x.b) * q + x.b,
          };
        return Se;
      }
      function re(x, K, ae) {
        var q;
        return (
          Math.round(x.h) >= 60 && Math.round(x.h) <= 240
            ? (q = ae ? Math.round(x.h) - h * K : Math.round(x.h) + h * K)
            : (q = ae ? Math.round(x.h) + h * K : Math.round(x.h) - h * K),
          q < 0 ? (q += 360) : q >= 360 && (q -= 360),
          q
        );
      }
      function he(x, K, ae) {
        if (x.h === 0 && x.s === 0) return x.s;
        var q;
        return (
          ae ? (q = x.s - B * K) : K === z ? (q = x.s + B) : (q = x.s + T * K),
          q > 1 && (q = 1),
          ae && K === U && q > 0.1 && (q = 0.1),
          q < 0.06 && (q = 0.06),
          Number(q.toFixed(2))
        );
      }
      function ge(x, K, ae) {
        var q;
        return (
          ae ? (q = x.v + D * K) : (q = x.v - se * K),
          q > 1 && (q = 1),
          Number(q.toFixed(2))
        );
      }
      function Y(x) {
        for (
          var K =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            ae = [],
            q = (0, ne.uA)(x),
            Se = U;
          Se > 0;
          Se -= 1
        ) {
          var $e = ie(q),
            Qe = le(
              (0, ne.uA)({
                h: re($e, Se, !0),
                s: he($e, Se, !0),
                v: ge($e, Se, !0),
              }),
            );
          ae.push(Qe);
        }
        ae.push(le(q));
        for (var Te = 1; Te <= z; Te += 1) {
          var _e = ie(q),
            qe = le(
              (0, ne.uA)({ h: re(_e, Te), s: he(_e, Te), v: ge(_e, Te) }),
            );
          ae.push(qe);
        }
        return K.theme === 'dark'
          ? V.map(function (je) {
              var mt = je.index,
                lt = je.opacity,
                It = le(
                  ee(
                    (0, ne.uA)(K.backgroundColor || '#141414'),
                    (0, ne.uA)(ae[mt]),
                    lt * 100,
                  ),
                );
              return It;
            })
          : ae;
      }
      var de = {
          red: '#F5222D',
          volcano: '#FA541C',
          orange: '#FA8C16',
          gold: '#FAAD14',
          yellow: '#FADB14',
          lime: '#A0D911',
          green: '#52C41A',
          cyan: '#13C2C2',
          blue: '#1890FF',
          geekblue: '#2F54EB',
          purple: '#722ED1',
          magenta: '#EB2F96',
          grey: '#666666',
        },
        j = {},
        be = {};
      Object.keys(de).forEach(function (x) {
        (j[x] = Y(de[x])),
          (j[x].primary = j[x][5]),
          (be[x] = Y(de[x], { theme: 'dark', backgroundColor: '#141414' })),
          (be[x].primary = be[x][5]);
      });
      var Ee = j.red,
        We = j.volcano,
        Be = j.gold,
        ke = j.orange,
        De = j.yellow,
        Ue = j.lime,
        Xe = j.green,
        at = j.cyan,
        At = j.blue,
        st = j.geekblue,
        Nn = j.purple,
        Ln = j.magenta,
        En = j.grey,
        rn = u(89071),
        an = u(21596),
        on = u(52085),
        ln = u.n(on);
      function Ht(x, K) {
        (0, rn.ZP)(x, '[@ant-design/icons] '.concat(K));
      }
      function Ot(x) {
        return (
          (0, Ce.Z)(x) === 'object' &&
          typeof x.name == 'string' &&
          typeof x.theme == 'string' &&
          ((0, Ce.Z)(x.icon) === 'object' || typeof x.icon == 'function')
        );
      }
      function Dt() {
        var x =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.keys(x).reduce(function (K, ae) {
          var q = x[ae];
          switch (ae) {
            case 'class':
              (K.className = q), delete K.class;
              break;
            default:
              delete K[ae], (K[ln()(ae)] = q);
          }
          return K;
        }, {});
      }
      function Zt(x, K, ae) {
        return ae
          ? C.createElement(
              x.tag,
              (0, o.Z)((0, o.Z)({ key: K }, Dt(x.attrs)), ae),
              (x.children || []).map(function (q, Se) {
                return Zt(q, ''.concat(K, '-').concat(x.tag, '-').concat(Se));
              }),
            )
          : C.createElement(
              x.tag,
              (0, o.Z)({ key: K }, Dt(x.attrs)),
              (x.children || []).map(function (q, Se) {
                return Zt(q, ''.concat(K, '-').concat(x.tag, '-').concat(Se));
              }),
            );
      }
      function $t(x) {
        return Y(x)[0];
      }
      function zt(x) {
        return x ? (Array.isArray(x) ? x : [x]) : [];
      }
      var Ft = {
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false',
        },
        dt = `
.anticon {
  display: inline-flex;
  alignItems: center;
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
`,
        Wt = function () {
          var K =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : dt,
            ae = (0, C.useContext)(oe),
            q = ae.csp;
          (0, C.useEffect)(function () {
            (0, an.hq)(K, '@ant-design-icons', { prepend: !0, csp: q });
          }, []);
        },
        un = [
          'icon',
          'className',
          'onClick',
          'style',
          'primaryColor',
          'secondaryColor',
        ],
        Ke = {
          primaryColor: '#333',
          secondaryColor: '#E6E6E6',
          calculated: !1,
        };
      function ot(x) {
        var K = x.primaryColor,
          ae = x.secondaryColor;
        (Ke.primaryColor = K),
          (Ke.secondaryColor = ae || $t(K)),
          (Ke.calculated = !!ae);
      }
      function kt() {
        return (0, o.Z)({}, Ke);
      }
      var ft = function (K) {
        var ae = K.icon,
          q = K.className,
          Se = K.onClick,
          $e = K.style,
          Qe = K.primaryColor,
          Te = K.secondaryColor,
          _e = (0, w.Z)(K, un),
          qe = Ke;
        if (
          (Qe && (qe = { primaryColor: Qe, secondaryColor: Te || $t(Qe) }),
          Wt(),
          Ht(Ot(ae), 'icon should be icon definiton, but got '.concat(ae)),
          !Ot(ae))
        )
          return null;
        var je = ae;
        return (
          je &&
            typeof je.icon == 'function' &&
            (je = (0, o.Z)(
              (0, o.Z)({}, je),
              {},
              { icon: je.icon(qe.primaryColor, qe.secondaryColor) },
            )),
          Zt(
            je.icon,
            'svg-'.concat(je.name),
            (0, o.Z)(
              {
                className: q,
                onClick: Se,
                style: $e,
                'data-icon': je.name,
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                'aria-hidden': 'true',
              },
              _e,
            ),
          )
        );
      };
      (ft.displayName = 'IconReact'),
        (ft.getTwoToneColors = kt),
        (ft.setTwoToneColors = ot);
      var it = ft;
      function Ut(x) {
        var K = zt(x),
          ae = (0, p.Z)(K, 2),
          q = ae[0],
          Se = ae[1];
        return it.setTwoToneColors({ primaryColor: q, secondaryColor: Se });
      }
      function cn() {
        var x = it.getTwoToneColors();
        return x.calculated
          ? [x.primaryColor, x.secondaryColor]
          : x.primaryColor;
      }
      var Mt = [
        'className',
        'icon',
        'spin',
        'rotate',
        'tabIndex',
        'onClick',
        'twoToneColor',
      ];
      Ut('#1890ff');
      var vt = C.forwardRef(function (x, K) {
        var ae = x.className,
          q = x.icon,
          Se = x.spin,
          $e = x.rotate,
          Qe = x.tabIndex,
          Te = x.onClick,
          _e = x.twoToneColor,
          qe = (0, w.Z)(x, Mt),
          je = C.useContext(oe),
          mt = je.prefixCls,
          lt = mt === void 0 ? 'anticon' : mt,
          It = je.rootClassName,
          fn = v()(
            It,
            lt,
            (0, s.Z)(
              (0, s.Z)({}, ''.concat(lt, '-').concat(q.name), !!q.name),
              ''.concat(lt, '-spin'),
              !!Se || q.name === 'loading',
            ),
            ae,
          ),
          gt = Qe;
        gt === void 0 && Te && (gt = -1);
        var ut = $e
            ? {
                msTransform: 'rotate('.concat($e, 'deg)'),
                transform: 'rotate('.concat($e, 'deg)'),
              }
            : void 0,
          vn = zt(_e),
          _t = (0, p.Z)(vn, 2),
          mn = _t[0],
          gn = _t[1];
        return C.createElement(
          'span',
          (0, o.Z)(
            (0, o.Z)({ role: 'img', 'aria-label': q.name }, qe),
            {},
            { ref: K, tabIndex: gt, onClick: Te, className: fn },
          ),
          C.createElement(it, {
            icon: q,
            primaryColor: mn,
            secondaryColor: gn,
            style: ut,
          }),
        );
      });
      (vt.displayName = 'AntdIcon'),
        (vt.getTwoToneColor = cn),
        (vt.setTwoToneColor = Ut);
      var sn = vt,
        Kt = function (K, ae) {
          return C.createElement(
            sn,
            (0, o.Z)((0, o.Z)({}, K), {}, { ref: ae, icon: I }),
          );
        },
        Me = C.forwardRef(Kt),
        dn = Me;
    },
    49835: function (R, H, u) {
      'use strict';
      u.d(H, {
        Z: function () {
          return $;
        },
      });
      var o = u(8429),
        C = u(82702),
        M = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
                },
              },
            ],
          },
          name: 'check-circle',
          theme: 'filled',
        },
        I = M,
        p = u(12242),
        s = function (te, oe) {
          return C.createElement(p.Z, (0, o.Z)({}, te, { ref: oe, icon: I }));
        },
        w = C.forwardRef(s),
        $ = w;
    },
    36520: function (R, H, u) {
      'use strict';
      u.d(H, {
        Z: function () {
          return $;
        },
      });
      var o = u(8429),
        C = u(82702),
        M = {
          icon: {
            tag: 'svg',
            attrs: {
              'fill-rule': 'evenodd',
              viewBox: '64 64 896 896',
              focusable: 'false',
            },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z',
                },
              },
            ],
          },
          name: 'close-circle',
          theme: 'filled',
        },
        I = M,
        p = u(12242),
        s = function (te, oe) {
          return C.createElement(p.Z, (0, o.Z)({}, te, { ref: oe, icon: I }));
        },
        w = C.forwardRef(s),
        $ = w;
    },
    5222: function (R, H, u) {
      'use strict';
      u.d(H, {
        Z: function () {
          return $;
        },
      });
      var o = u(8429),
        C = u(82702),
        M = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
                },
              },
            ],
          },
          name: 'exclamation-circle',
          theme: 'filled',
        },
        I = M,
        p = u(12242),
        s = function (te, oe) {
          return C.createElement(p.Z, (0, o.Z)({}, te, { ref: oe, icon: I }));
        },
        w = C.forwardRef(s),
        $ = w;
    },
    71798: function (R, H, u) {
      'use strict';
      u.d(H, {
        f: function () {
          return Xo;
        },
      });
      var o = u(73990),
        C = u(62812),
        M = u(47768),
        I = u(41670),
        p = u(72561),
        s = u(83525),
        w = u(91496),
        $ = u(69164),
        v = u(82702);
      function te(r) {
        var e = typeof window == 'undefined',
          t = (0, v.useState)(function () {
            return e ? !1 : window.matchMedia(r).matches;
          }),
          n = (0, p.Z)(t, 2),
          a = n[0],
          l = n[1];
        return (
          (0, v.useLayoutEffect)(
            function () {
              if (!e) {
                var i = window.matchMedia(r),
                  d = function (m) {
                    return l(m.matches);
                  };
                return (
                  i.addListener(d),
                  function () {
                    return i.removeListener(d);
                  }
                );
              }
            },
            [r],
          ),
          a
        );
      }
      var oe = {
          xs: { maxWidth: 575, matchMedia: '(max-width: 575px)' },
          sm: {
            minWidth: 576,
            maxWidth: 767,
            matchMedia: '(min-width: 576px) and (max-width: 767px)',
          },
          md: {
            minWidth: 768,
            maxWidth: 991,
            matchMedia: '(min-width: 768px) and (max-width: 991px)',
          },
          lg: {
            minWidth: 992,
            maxWidth: 1199,
            matchMedia: '(min-width: 992px) and (max-width: 1199px)',
          },
          xl: {
            minWidth: 1200,
            maxWidth: 1599,
            matchMedia: '(min-width: 1200px) and (max-width: 1599px)',
          },
          xxl: { minWidth: 1600, matchMedia: '(min-width: 1600px)' },
        },
        Ce = function () {
          var e = void 0;
          if (typeof window == 'undefined') return e;
          var t = Object.keys(oe).find(function (n) {
            var a = oe[n].matchMedia;
            return !!window.matchMedia(a).matches;
          });
          return (e = t), e;
        },
        X = function () {
          var e = te(oe.md.matchMedia),
            t = te(oe.lg.matchMedia),
            n = te(oe.xxl.matchMedia),
            a = te(oe.xl.matchMedia),
            l = te(oe.sm.matchMedia),
            i = te(oe.xs.matchMedia),
            d = (0, v.useState)(Ce()),
            f = (0, p.Z)(d, 2),
            m = f[0],
            g = f[1];
          return (
            (0, v.useEffect)(
              function () {
                if (n) {
                  g('xxl');
                  return;
                }
                if (a) {
                  g('xl');
                  return;
                }
                if (t) {
                  g('lg');
                  return;
                }
                if (e) {
                  g('md');
                  return;
                }
                if (l) {
                  g('sm');
                  return;
                }
                if (i) {
                  g('xs');
                  return;
                }
                g('md');
              },
              [e, t, n, a, l, i],
            ),
            m
          );
        },
        ne = u(76894);
      function h(r, e) {
        var t = typeof r.pageName == 'string' ? r.title : e;
        (0, v.useEffect)(
          function () {
            (0, ne.j)() && t && (document.title = t);
          },
          [r.title, t],
        );
      }
      var B = u(28847),
        T = u(7666);
      function D(r) {
        if ((0, B.n)((0, T.b)(), '5.6.0') < 0) return r;
        var e = {
            colorGroupTitle: 'groupTitleColor',
            radiusItem: 'itemBorderRadius',
            radiusSubMenuItem: 'subMenuItemBorderRadius',
            colorItemText: 'itemColor',
            colorItemTextHover: 'itemHoverColor',
            colorItemTextHoverHorizontal: 'horizontalItemHoverColor',
            colorItemTextSelected: 'itemSelectedColor',
            colorItemTextSelectedHorizontal: 'horizontalItemSelectedColor',
            colorItemTextDisabled: 'itemDisabledColor',
            colorDangerItemText: 'dangerItemColor',
            colorDangerItemTextHover: 'dangerItemHoverColor',
            colorDangerItemTextSelected: 'dangerItemSelectedColor',
            colorDangerItemBgActive: 'dangerItemActiveBg',
            colorDangerItemBgSelected: 'dangerItemSelectedBg',
            colorItemBg: 'itemBg',
            colorItemBgHover: 'itemHoverBg',
            colorSubItemBg: 'subMenuItemBg',
            colorItemBgActive: 'itemActiveBg',
            colorItemBgSelected: 'itemSelectedBg',
            colorItemBgSelectedHorizontal: 'horizontalItemSelectedBg',
            colorActiveBarWidth: 'activeBarWidth',
            colorActiveBarHeight: 'activeBarHeight',
            colorActiveBarBorderSize: 'activeBarBorderWidth',
          },
          t = (0, s.Z)({}, r);
        return (
          Object.keys(e).forEach(function (n) {
            t[n] !== void 0 && ((t[e[n]] = t[n]), delete t[n]);
          }),
          t
        );
      }
      var se = u(94835);
      function U(r, e) {
        return (e >>> r) | (e << (32 - r));
      }
      function z(r, e, t) {
        return (r & e) ^ (~r & t);
      }
      function V(r, e, t) {
        return (r & e) ^ (r & t) ^ (e & t);
      }
      function ie(r) {
        return U(2, r) ^ U(13, r) ^ U(22, r);
      }
      function le(r) {
        return U(6, r) ^ U(11, r) ^ U(25, r);
      }
      function ee(r) {
        return U(7, r) ^ U(18, r) ^ (r >>> 3);
      }
      function re(r) {
        return U(17, r) ^ U(19, r) ^ (r >>> 10);
      }
      function he(r, e) {
        return (r[e & 15] +=
          re(r[(e + 14) & 15]) + r[(e + 9) & 15] + ee(r[(e + 1) & 15]));
      }
      var ge = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        Y,
        de,
        j,
        be = '0123456789abcdef';
      function Ee(r, e) {
        var t = (r & 65535) + (e & 65535),
          n = (r >> 16) + (e >> 16) + (t >> 16);
        return (n << 16) | (t & 65535);
      }
      function We() {
        (Y = new Array(8)),
          (de = new Array(2)),
          (j = new Array(64)),
          (de[0] = de[1] = 0),
          (Y[0] = 1779033703),
          (Y[1] = 3144134277),
          (Y[2] = 1013904242),
          (Y[3] = 2773480762),
          (Y[4] = 1359893119),
          (Y[5] = 2600822924),
          (Y[6] = 528734635),
          (Y[7] = 1541459225);
      }
      function Be() {
        var r,
          e,
          t,
          n,
          a,
          l,
          i,
          d,
          f,
          m,
          g = new Array(16);
        (r = Y[0]),
          (e = Y[1]),
          (t = Y[2]),
          (n = Y[3]),
          (a = Y[4]),
          (l = Y[5]),
          (i = Y[6]),
          (d = Y[7]);
        for (var b = 0; b < 16; b++)
          g[b] =
            j[(b << 2) + 3] |
            (j[(b << 2) + 2] << 8) |
            (j[(b << 2) + 1] << 16) |
            (j[b << 2] << 24);
        for (var y = 0; y < 64; y++)
          (f = d + le(a) + z(a, l, i) + ge[y]),
            y < 16 ? (f += g[y]) : (f += he(g, y)),
            (m = ie(r) + V(r, e, t)),
            (d = i),
            (i = l),
            (l = a),
            (a = Ee(n, f)),
            (n = t),
            (t = e),
            (e = r),
            (r = Ee(f, m));
        (Y[0] += r),
          (Y[1] += e),
          (Y[2] += t),
          (Y[3] += n),
          (Y[4] += a),
          (Y[5] += l),
          (Y[6] += i),
          (Y[7] += d);
      }
      function ke(r, e) {
        var t,
          n,
          a = 0;
        n = (de[0] >> 3) & 63;
        var l = e & 63;
        for (
          (de[0] += e << 3) < e << 3 && de[1]++, de[1] += e >> 29, t = 0;
          t + 63 < e;
          t += 64
        ) {
          for (var i = n; i < 64; i++) j[i] = r.charCodeAt(a++);
          Be(), (n = 0);
        }
        for (var d = 0; d < l; d++) j[d] = r.charCodeAt(a++);
      }
      function De() {
        var r = (de[0] >> 3) & 63;
        if (((j[r++] = 128), r <= 56)) for (var e = r; e < 56; e++) j[e] = 0;
        else {
          for (var t = r; t < 64; t++) j[t] = 0;
          Be();
          for (var n = 0; n < 56; n++) j[n] = 0;
        }
        (j[56] = (de[1] >>> 24) & 255),
          (j[57] = (de[1] >>> 16) & 255),
          (j[58] = (de[1] >>> 8) & 255),
          (j[59] = de[1] & 255),
          (j[60] = (de[0] >>> 24) & 255),
          (j[61] = (de[0] >>> 16) & 255),
          (j[62] = (de[0] >>> 8) & 255),
          (j[63] = de[0] & 255),
          Be();
      }
      function Ue() {
        for (var r = 0, e = new Array(32), t = 0; t < 8; t++)
          (e[r++] = (Y[t] >>> 24) & 255),
            (e[r++] = (Y[t] >>> 16) & 255),
            (e[r++] = (Y[t] >>> 8) & 255),
            (e[r++] = Y[t] & 255);
        return e;
      }
      function Xe() {
        for (var r = new String(), e = 0; e < 8; e++)
          for (var t = 28; t >= 0; t -= 4) r += be.charAt((Y[e] >>> t) & 15);
        return r;
      }
      function at(r) {
        return We(), ke(r, r.length), De(), Xe();
      }
      var At = at;
      function st(r) {
        '@babel/helpers - typeof';
        return (
          (st =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == 'function' &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          st(r)
        );
      }
      var Nn = [
        'pro_layout_parentKeys',
        'children',
        'icon',
        'flatMenu',
        'indexRoute',
        'routes',
      ];
      function Ln(r, e) {
        return an(r) || rn(r, e) || it(r, e) || En();
      }
      function En() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function rn(r, e) {
        var t =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
              r['@@iterator'];
        if (t != null) {
          var n = [],
            a = !0,
            l = !1,
            i,
            d;
          try {
            for (
              t = t.call(r);
              !(a = (i = t.next()).done) &&
              (n.push(i.value), !(e && n.length === e));
              a = !0
            );
          } catch (f) {
            (l = !0), (d = f);
          } finally {
            try {
              !a && t.return != null && t.return();
            } finally {
              if (l) throw d;
            }
          }
          return n;
        }
      }
      function an(r) {
        if (Array.isArray(r)) return r;
      }
      function on(r, e) {
        var t =
          (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
          r['@@iterator'];
        if (!t) {
          if (
            Array.isArray(r) ||
            (t = it(r)) ||
            (e && r && typeof r.length == 'number')
          ) {
            t && (r = t);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= r.length
                  ? { done: !0 }
                  : { done: !1, value: r[n++] };
              },
              e: function (m) {
                throw m;
              },
              f: a,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var l = !0,
          i = !1,
          d;
        return {
          s: function () {
            t = t.call(r);
          },
          n: function () {
            var m = t.next();
            return (l = m.done), m;
          },
          e: function (m) {
            (i = !0), (d = m);
          },
          f: function () {
            try {
              !l && t.return != null && t.return();
            } finally {
              if (i) throw d;
            }
          },
        };
      }
      function ln(r, e) {
        if (!(r instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function Ht(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(r, n.key, n);
        }
      }
      function Ot(r, e, t) {
        return (
          e && Ht(r.prototype, e),
          t && Ht(r, t),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          r
        );
      }
      function Dt(r, e) {
        if (typeof e != 'function' && e !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (r.prototype = Object.create(e && e.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          e && Ke(r, e);
      }
      function Zt(r) {
        var e = Wt();
        return function () {
          var n = ot(r),
            a;
          if (e) {
            var l = ot(this).constructor;
            a = Reflect.construct(n, arguments, l);
          } else a = n.apply(this, arguments);
          return $t(this, a);
        };
      }
      function $t(r, e) {
        if (e && (st(e) === 'object' || typeof e == 'function')) return e;
        if (e !== void 0)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return zt(r);
      }
      function zt(r) {
        if (r === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return r;
      }
      function Ft(r) {
        var e = typeof Map == 'function' ? new Map() : void 0;
        return (
          (Ft = function (n) {
            if (n === null || !un(n)) return n;
            if (typeof n != 'function')
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            if (typeof e != 'undefined') {
              if (e.has(n)) return e.get(n);
              e.set(n, a);
            }
            function a() {
              return dt(n, arguments, ot(this).constructor);
            }
            return (
              (a.prototype = Object.create(n.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Ke(a, n)
            );
          }),
          Ft(r)
        );
      }
      function dt(r, e, t) {
        return (
          Wt()
            ? (dt = Reflect.construct.bind())
            : (dt = function (a, l, i) {
                var d = [null];
                d.push.apply(d, l);
                var f = Function.bind.apply(a, d),
                  m = new f();
                return i && Ke(m, i.prototype), m;
              }),
          dt.apply(null, arguments)
        );
      }
      function Wt() {
        if (
          typeof Reflect == 'undefined' ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (r) {
          return !1;
        }
      }
      function un(r) {
        return Function.toString.call(r).indexOf('[native code]') !== -1;
      }
      function Ke(r, e) {
        return (
          (Ke = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, a) {
                return (n.__proto__ = a), n;
              }),
          Ke(r, e)
        );
      }
      function ot(r) {
        return (
          (ot = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ot(r)
        );
      }
      function kt(r) {
        return cn(r) || Ut(r) || it(r) || ft();
      }
      function ft() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function it(r, e) {
        if (r) {
          if (typeof r == 'string') return Mt(r, e);
          var t = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (t === 'Object' && r.constructor && (t = r.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(r);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return Mt(r, e);
        }
      }
      function Ut(r) {
        if (
          (typeof Symbol != 'undefined' && r[Symbol.iterator] != null) ||
          r['@@iterator'] != null
        )
          return Array.from(r);
      }
      function cn(r) {
        if (Array.isArray(r)) return Mt(r);
      }
      function Mt(r, e) {
        (e == null || e > r.length) && (e = r.length);
        for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function vt(r, e) {
        if (r == null) return {};
        var t = sn(r, e),
          n,
          a;
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(r);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(r, n) &&
                (t[n] = r[n]);
        }
        return t;
      }
      function sn(r, e) {
        if (r == null) return {};
        var t = {},
          n = Object.keys(r),
          a,
          l;
        for (l = 0; l < n.length; l++)
          (a = n[l]), !(e.indexOf(a) >= 0) && (t[a] = r[a]);
        return t;
      }
      function Kt(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(r, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Me(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? Kt(Object(t), !0).forEach(function (n) {
                dn(r, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : Kt(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  r,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return r;
      }
      function dn(r, e, t) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = t),
          r
        );
      }
      var x = 'routes';
      function K(r) {
        return r.split('?')[0].split('#')[0];
      }
      var ae = function (e) {
          if (!e.startsWith('http')) return !1;
          try {
            var t = new URL(e);
            return !!t;
          } catch (n) {
            return !1;
          }
        },
        q = function (e) {
          var t = e.path;
          if (!t || t === '/')
            try {
              return '/'.concat(At(JSON.stringify(e)));
            } catch (n) {}
          return t && K(t);
        },
        Se = function (e, t) {
          var n = e.name,
            a = e.locale;
          return ('locale' in e && a === !1) || !n
            ? !1
            : e.locale || ''.concat(t, '.').concat(n);
        },
        $e = function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : '',
            t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : '/';
          return e.endsWith('/*')
            ? e.replace('/*', '/')
            : (e || t).startsWith('/') || ae(e)
            ? e
            : '/'
                .concat(t, '/')
                .concat(e)
                .replace(/\/\//g, '/')
                .replace(/\/\//g, '/');
        },
        Qe = function (e, t) {
          var n = e.menu,
            a = n === void 0 ? {} : n,
            l = e.indexRoute,
            i = e.path,
            d = i === void 0 ? '' : i,
            f = e.children || [],
            m = a.name,
            g = m === void 0 ? e.name : m,
            b = a.icon,
            y = b === void 0 ? e.icon : b,
            P = a.hideChildren,
            F = P === void 0 ? e.hideChildren : P,
            L = a.flatMenu,
            N = L === void 0 ? e.flatMenu : L,
            _ =
              l && Object.keys(l).join(',') !== 'redirect'
                ? [Me({ path: d, menu: a }, l)].concat(f || [])
                : f,
            W = Me({}, e);
          if ((g && (W.name = g), y && (W.icon = y), _ && _.length)) {
            if (F) return delete W.children, W;
            var Q = _e(Me(Me({}, t), {}, { data: _ }), e);
            if (N) return Q;
            delete W[x];
          }
          return W;
        },
        Te = function (e) {
          return Array.isArray(e) && e.length > 0;
        };
      function _e(r) {
        var e =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { path: '/' },
          t = r.data,
          n = r.formatMessage,
          a = r.parentName,
          l = r.locale;
        return !t || !Array.isArray(t)
          ? []
          : t
              .filter(function (i) {
                return i
                  ? Te(i.children) || i.path || i.originPath || i.layout
                    ? !0
                    : (i.redirect || i.unaccessible, !1)
                  : !1;
              })
              .filter(function (i) {
                var d, f;
                return (!(i == null || (d = i.menu) === null || d === void 0) &&
                  d.name) ||
                  (i != null && i.flatMenu) ||
                  (!(i == null || (f = i.menu) === null || f === void 0) &&
                    f.flatMenu)
                  ? !0
                  : i.menu !== !1;
              })
              .map(function (i) {
                var d = Me(Me({}, i), {}, { path: i.path || i.originPath });
                return (
                  !d.children && d[x] && ((d.children = d[x]), delete d[x]),
                  d.unaccessible && delete d.name,
                  d.path === '*' && (d.path = '.'),
                  d.path === '/*' && (d.path = '.'),
                  !d.path && d.originPath && (d.path = d.originPath),
                  d
                );
              })
              .map(function () {
                var i =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : { path: '/' },
                  d = i.children || i[x] || [],
                  f = $e(i.path, e ? e.path : '/'),
                  m = i.name,
                  g = Se(i, a || 'menu'),
                  b =
                    g !== !1 && l !== !1 && n && g
                      ? n({ id: g, defaultMessage: m })
                      : m,
                  y = e.pro_layout_parentKeys,
                  P = y === void 0 ? [] : y,
                  F = e.children,
                  L = e.icon,
                  N = e.flatMenu,
                  _ = e.indexRoute,
                  W = e.routes,
                  Q = vt(e, Nn),
                  O = new Set([].concat(kt(P), kt(i.parentKeys || [])));
                e.key && O.add(e.key);
                var G = Me(
                  Me(Me({}, Q), {}, { menu: void 0 }, i),
                  {},
                  {
                    path: f,
                    locale: g,
                    key: i.key || q(Me(Me({}, i), {}, { path: f })),
                    pro_layout_parentKeys: Array.from(O).filter(function (E) {
                      return E && E !== '/';
                    }),
                  },
                );
                if (
                  (b ? (G.name = b) : delete G.name,
                  G.menu === void 0 && delete G.menu,
                  Te(d))
                ) {
                  var S = _e(
                    Me(Me({}, r), {}, { data: d, parentName: g || '' }),
                    G,
                  );
                  Te(S) && (G.children = S);
                }
                return Qe(G, r);
              })
              .flat(1);
      }
      var qe = function r() {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return e
            .filter(function (t) {
              return (
                t && (t.name || Te(t.children)) && !t.hideInMenu && !t.redirect
              );
            })
            .map(function (t) {
              var n = Me({}, t),
                a = n.children || t[x] || [];
              if (
                (delete n[x],
                Te(a) &&
                  !n.hideChildrenInMenu &&
                  a.some(function (i) {
                    return i && !!i.name;
                  }))
              ) {
                var l = r(a);
                if (l.length) return Me(Me({}, n), {}, { children: l });
              }
              return Me({}, t);
            })
            .filter(function (t) {
              return t;
            });
        },
        je = (function (r) {
          Dt(t, r);
          var e = Zt(t);
          function t() {
            return ln(this, t), e.apply(this, arguments);
          }
          return (
            Ot(t, [
              {
                key: 'get',
                value: function (a) {
                  var l;
                  try {
                    var i = on(this.entries()),
                      d;
                    try {
                      for (i.s(); !(d = i.n()).done; ) {
                        var f = Ln(d.value, 2),
                          m = f[0],
                          g = f[1],
                          b = K(m);
                        if (!ae(m) && (0, se.Bo)(b, []).test(a)) {
                          l = g;
                          break;
                        }
                      }
                    } catch (y) {
                      i.e(y);
                    } finally {
                      i.f();
                    }
                  } catch (y) {
                    l = void 0;
                  }
                  return l;
                },
              },
            ]),
            t
          );
        })(Ft(Map)),
        mt = function (e) {
          var t = new je(),
            n = function a(l, i) {
              l.forEach(function (d) {
                var f = d.children || d[x] || [];
                Te(f) && a(f, d);
                var m = $e(d.path, i ? i.path : '/');
                t.set(K(m), d);
              });
            };
          return n(e), t;
        },
        lt = function r() {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return e
            .map(function (t) {
              var n = t.children || t[x];
              if (Te(n)) {
                var a = r(n);
                if (a.length) return Me({}, t);
              }
              var l = Me({}, t);
              return delete l[x], delete l.children, l;
            })
            .filter(function (t) {
              return t;
            });
        },
        It = function (e, t, n, a) {
          var l = _e({ data: e, formatMessage: n, locale: t }),
            i = a ? lt(l) : qe(l),
            d = mt(l);
          return { breadcrumb: d, menuData: i };
        },
        fn = It;
      function gt(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(r, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function ut(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? gt(Object(t), !0).forEach(function (n) {
                vn(r, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : gt(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  r,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return r;
      }
      function vn(r, e, t) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = t),
          r
        );
      }
      var _t = function r() {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            t = {};
          return (
            e.forEach(function (n) {
              var a = ut({}, n);
              if (!(!a || !a.key)) {
                !a.children && a[x] && ((a.children = a[x]), delete a[x]);
                var l = a.children || [];
                (t[K(a.path || a.key || '/')] = ut({}, a)),
                  (t[a.key || a.path || '/'] = ut({}, a)),
                  l && (t = ut(ut({}, t), r(l)));
              }
            }),
            t
          );
        },
        mn = _t,
        gn = function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return e
            .filter(function (a) {
              if (a === '/' && t === '/') return !0;
              if (a !== '/' && a !== '/*' && a && !ae(a)) {
                var l = K(a);
                try {
                  if (
                    (n && (0, se.Bo)(''.concat(l)).test(t)) ||
                    (0, se.Bo)(''.concat(l), []).test(t) ||
                    (0, se.Bo)(''.concat(l, '/(.*)')).test(t)
                  )
                    return !0;
                } catch (i) {}
              }
              return !1;
            })
            .sort(function (a, l) {
              return a === t
                ? 10
                : l === t
                ? -10
                : a.substr(1).split('/').length - l.substr(1).split('/').length;
            });
        },
        Ir = function (e, t, n, a) {
          var l = mn(t),
            i = Object.keys(l),
            d = gn(i, e || '/', a);
          return !d || d.length < 1
            ? []
            : (n || (d = [d[d.length - 1]]),
              d
                .map(function (f) {
                  var m = l[f] || { pro_layout_parentKeys: '', key: '' },
                    g = new Map(),
                    b = (m.pro_layout_parentKeys || [])
                      .map(function (y) {
                        return g.has(y) ? null : (g.set(y, !0), l[y]);
                      })
                      .filter(function (y) {
                        return y;
                      });
                  return m.key && b.push(m), b;
                })
                .flat(1));
        },
        Tr = Ir,
        Ge = u(57285),
        Tt = u(80104),
        Rr = u(91150),
        fe = u.n(Rr),
        wr = u(53172),
        pn = u(64775),
        Br = u(34191),
        jr = u(96865),
        hn = u(50535);
      function Pr(r, e, t) {
        return typeof t == 'boolean'
          ? t
          : r.length
          ? !0
          : (0, jr.Z)(e).some((a) => a.type === hn.Z);
      }
      var yn = u(78456),
        Nr = u(86029),
        Lr = (r) => {
          const {
            componentCls: e,
            bodyBg: t,
            lightSiderBg: n,
            lightTriggerBg: a,
            lightTriggerColor: l,
          } = r;
          return {
            [`${e}-sider-light`]: {
              background: n,
              [`${e}-sider-trigger`]: { color: l, background: a },
              [`${e}-sider-zero-width-trigger`]: {
                color: l,
                background: a,
                border: `1px solid ${t}`,
                borderInlineStart: 0,
              },
            },
          };
        };
      const Er = (r) => {
          const {
            antCls: e,
            componentCls: t,
            colorText: n,
            triggerColor: a,
            footerBg: l,
            triggerBg: i,
            headerHeight: d,
            headerPadding: f,
            headerColor: m,
            footerPadding: g,
            triggerHeight: b,
            zeroTriggerHeight: y,
            zeroTriggerWidth: P,
            motionDurationMid: F,
            motionDurationSlow: L,
            fontSize: N,
            borderRadius: _,
            bodyBg: W,
            headerBg: Q,
            siderBg: O,
          } = r;
          return {
            [t]: Object.assign(
              Object.assign(
                {
                  display: 'flex',
                  flex: 'auto',
                  flexDirection: 'column',
                  minHeight: 0,
                  background: W,
                  '&, *': { boxSizing: 'border-box' },
                  [`&${t}-has-sider`]: {
                    flexDirection: 'row',
                    [`> ${t}, > ${t}-content`]: { width: 0 },
                  },
                  [`${t}-header, &${t}-footer`]: { flex: '0 0 auto' },
                  [`${t}-sider`]: {
                    position: 'relative',
                    minWidth: 0,
                    background: O,
                    transition: `all ${F}, background 0s`,
                    '&-children': {
                      height: '100%',
                      marginTop: -0.1,
                      paddingTop: 0.1,
                      [`${e}-menu${e}-menu-inline-collapsed`]: {
                        width: 'auto',
                      },
                    },
                    '&-has-trigger': { paddingBottom: b },
                    '&-right': { order: 1 },
                    '&-trigger': {
                      position: 'fixed',
                      bottom: 0,
                      zIndex: 1,
                      height: b,
                      color: a,
                      lineHeight: (0, yn.bf)(b),
                      textAlign: 'center',
                      background: i,
                      cursor: 'pointer',
                      transition: `all ${F}`,
                    },
                    '&-zero-width': {
                      '> *': { overflow: 'hidden' },
                      '&-trigger': {
                        position: 'absolute',
                        top: d,
                        insetInlineEnd: r.calc(P).mul(-1).equal(),
                        zIndex: 1,
                        width: P,
                        height: y,
                        color: a,
                        fontSize: r.fontSizeXL,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: O,
                        borderStartStartRadius: 0,
                        borderStartEndRadius: _,
                        borderEndEndRadius: _,
                        borderEndStartRadius: 0,
                        cursor: 'pointer',
                        transition: `background ${L} ease`,
                        '&::after': {
                          position: 'absolute',
                          inset: 0,
                          background: 'transparent',
                          transition: `all ${L}`,
                          content: '""',
                        },
                        '&:hover::after': {
                          background: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&-right': {
                          insetInlineStart: r.calc(P).mul(-1).equal(),
                          borderStartStartRadius: _,
                          borderStartEndRadius: 0,
                          borderEndEndRadius: 0,
                          borderEndStartRadius: _,
                        },
                      },
                    },
                  },
                },
                Lr(r),
              ),
              { '&-rtl': { direction: 'rtl' } },
            ),
            [`${t}-header`]: {
              height: d,
              padding: f,
              color: m,
              lineHeight: (0, yn.bf)(d),
              background: Q,
              [`${e}-menu`]: { lineHeight: 'inherit' },
            },
            [`${t}-footer`]: {
              padding: g,
              color: n,
              fontSize: N,
              background: l,
            },
            [`${t}-content`]: { flex: 'auto', color: n, minHeight: 0 },
          };
        },
        Ar = (r) => {
          const {
              colorBgLayout: e,
              controlHeight: t,
              controlHeightLG: n,
              colorText: a,
              controlHeightSM: l,
              marginXXS: i,
              colorTextLightSolid: d,
              colorBgContainer: f,
            } = r,
            m = n * 1.25;
          return {
            colorBgHeader: '#001529',
            colorBgBody: e,
            colorBgTrigger: '#002140',
            bodyBg: e,
            headerBg: '#001529',
            headerHeight: t * 2,
            headerPadding: `0 ${m}px`,
            headerColor: a,
            footerPadding: `${l}px ${m}px`,
            footerBg: e,
            siderBg: '#001529',
            triggerHeight: n + i * 2,
            triggerBg: '#002140',
            triggerColor: d,
            zeroTriggerWidth: n,
            zeroTriggerHeight: n,
            lightSiderBg: f,
            lightTriggerBg: f,
            lightTriggerColor: a,
          };
        };
      var An = (0, Nr.I$)('Layout', (r) => [Er(r)], Ar, {
          deprecatedTokens: [
            ['colorBgBody', 'bodyBg'],
            ['colorBgHeader', 'headerBg'],
            ['colorBgTrigger', 'triggerBg'],
          ],
        }),
        Hn = function (r, e) {
          var t = {};
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) &&
              e.indexOf(n) < 0 &&
              (t[n] = r[n]);
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var a = 0, n = Object.getOwnPropertySymbols(r);
              a < n.length;
              a++
            )
              e.indexOf(n[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r, n[a]) &&
                (t[n[a]] = r[n[a]]);
          return t;
        };
      function Gt(r) {
        let { suffixCls: e, tagName: t, displayName: n } = r;
        return (a) =>
          v.forwardRef((i, d) =>
            v.createElement(
              a,
              Object.assign({ ref: d, suffixCls: e, tagName: t }, i),
            ),
          );
      }
      const xn = v.forwardRef((r, e) => {
          const { prefixCls: t, suffixCls: n, className: a, tagName: l } = r,
            i = Hn(r, ['prefixCls', 'suffixCls', 'className', 'tagName']),
            { getPrefixCls: d } = v.useContext(pn.E_),
            f = d('layout', t),
            [m, g, b] = An(f),
            y = n ? `${f}-${n}` : f;
          return m(
            v.createElement(
              l,
              Object.assign({ className: fe()(t || y, a, g, b), ref: e }, i),
            ),
          );
        }),
        Hr = v.forwardRef((r, e) => {
          const { direction: t } = v.useContext(pn.E_),
            [n, a] = v.useState([]),
            {
              prefixCls: l,
              className: i,
              rootClassName: d,
              children: f,
              hasSider: m,
              tagName: g,
              style: b,
            } = r,
            y = Hn(r, [
              'prefixCls',
              'className',
              'rootClassName',
              'children',
              'hasSider',
              'tagName',
              'style',
            ]),
            P = (0, wr.Z)(y, ['suffixCls']),
            { getPrefixCls: F, layout: L } = v.useContext(pn.E_),
            N = F('layout', l),
            _ = Pr(n, f, m),
            [W, Q, O] = An(N),
            G = fe()(
              N,
              { [`${N}-has-sider`]: _, [`${N}-rtl`]: t === 'rtl' },
              L == null ? void 0 : L.className,
              i,
              d,
              Q,
              O,
            ),
            S = v.useMemo(
              () => ({
                siderHook: {
                  addSider: (E) => {
                    a((ue) => [].concat((0, Tt.Z)(ue), [E]));
                  },
                  removeSider: (E) => {
                    a((ue) => ue.filter((J) => J !== E));
                  },
                },
              }),
              [],
            );
          return W(
            v.createElement(
              Br.V.Provider,
              { value: S },
              v.createElement(
                g,
                Object.assign(
                  {
                    ref: e,
                    className: G,
                    style: Object.assign(
                      Object.assign({}, L == null ? void 0 : L.style),
                      b,
                    ),
                  },
                  P,
                ),
                f,
              ),
            ),
          );
        }),
        Or = Gt({ tagName: 'div', displayName: 'Layout' })(Hr),
        Dr = Gt({
          suffixCls: 'header',
          tagName: 'header',
          displayName: 'Header',
        })(xn),
        $r = Gt({
          suffixCls: 'footer',
          tagName: 'footer',
          displayName: 'Footer',
        })(xn),
        zr = Gt({
          suffixCls: 'content',
          tagName: 'main',
          displayName: 'Content',
        })(xn);
      var Fr = Or;
      const pt = Fr;
      (pt.Header = Dr),
        (pt.Footer = $r),
        (pt.Content = zr),
        (pt.Sider = hn.Z),
        (pt._InternalSiderContext = hn.D);
      var ct = pt,
        On = u(91105),
        Wr = u(89071),
        Dn = u(65100),
        kr = u(69124),
        c = u(97616),
        Ur = function (e) {
          var t = (0, v.useContext)(w.L_),
            n = t.hashId,
            a = e.style,
            l = e.prefixCls,
            i = e.children,
            d = e.hasPageContainer,
            f = d === void 0 ? 0 : d,
            m = fe()(
              ''.concat(l, '-content'),
              n,
              (0, o.Z)(
                (0, o.Z)({}, ''.concat(l, '-has-header'), e.hasHeader),
                ''.concat(l, '-content-has-page-container'),
                f > 0,
              ),
            ),
            g = e.ErrorBoundary || kr.S;
          return e.ErrorBoundary === !1
            ? (0, c.jsx)(ct.Content, { className: m, style: a, children: i })
            : (0, c.jsx)(g, {
                children: (0, c.jsx)(ct.Content, {
                  className: m,
                  style: a,
                  children: i,
                }),
              });
        },
        Kr = function () {
          return (0, c.jsxs)('svg', {
            width: '1em',
            height: '1em',
            viewBox: '0 0 200 200',
            children: [
              (0, c.jsxs)('defs', {
                children: [
                  (0, c.jsxs)('linearGradient', {
                    x1: '62.1023273%',
                    y1: '0%',
                    x2: '108.19718%',
                    y2: '37.8635764%',
                    id: 'linearGradient-1',
                    children: [
                      (0, c.jsx)('stop', {
                        stopColor: '#4285EB',
                        offset: '0%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#2EC7FF',
                        offset: '100%',
                      }),
                    ],
                  }),
                  (0, c.jsxs)('linearGradient', {
                    x1: '69.644116%',
                    y1: '0%',
                    x2: '54.0428975%',
                    y2: '108.456714%',
                    id: 'linearGradient-2',
                    children: [
                      (0, c.jsx)('stop', {
                        stopColor: '#29CDFF',
                        offset: '0%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#148EFF',
                        offset: '37.8600687%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#0A60FF',
                        offset: '100%',
                      }),
                    ],
                  }),
                  (0, c.jsxs)('linearGradient', {
                    x1: '69.6908165%',
                    y1: '-12.9743587%',
                    x2: '16.7228981%',
                    y2: '117.391248%',
                    id: 'linearGradient-3',
                    children: [
                      (0, c.jsx)('stop', {
                        stopColor: '#FA816E',
                        offset: '0%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#F74A5C',
                        offset: '41.472606%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#F51D2C',
                        offset: '100%',
                      }),
                    ],
                  }),
                  (0, c.jsxs)('linearGradient', {
                    x1: '68.1279872%',
                    y1: '-35.6905737%',
                    x2: '30.4400914%',
                    y2: '114.942679%',
                    id: 'linearGradient-4',
                    children: [
                      (0, c.jsx)('stop', {
                        stopColor: '#FA8E7D',
                        offset: '0%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#F74A5C',
                        offset: '51.2635191%',
                      }),
                      (0, c.jsx)('stop', {
                        stopColor: '#F51D2C',
                        offset: '100%',
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)('g', {
                stroke: 'none',
                strokeWidth: 1,
                fill: 'none',
                fillRule: 'evenodd',
                children: (0, c.jsx)('g', {
                  transform: 'translate(-20.000000, -20.000000)',
                  children: (0, c.jsx)('g', {
                    transform: 'translate(20.000000, 20.000000)',
                    children: (0, c.jsxs)('g', {
                      children: [
                        (0, c.jsxs)('g', {
                          fillRule: 'nonzero',
                          children: [
                            (0, c.jsxs)('g', {
                              children: [
                                (0, c.jsx)('path', {
                                  d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                                  fill: 'url(#linearGradient-1)',
                                }),
                                (0, c.jsx)('path', {
                                  d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                                  fill: 'url(#linearGradient-2)',
                                }),
                              ],
                            }),
                            (0, c.jsx)('path', {
                              d: 'M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z',
                              fill: 'url(#linearGradient-3)',
                            }),
                          ],
                        }),
                        (0, c.jsx)('ellipse', {
                          fill: 'url(#linearGradient-4)',
                          cx: '100.519339',
                          cy: '100.436681',
                          rx: '23.6001926',
                          ry: '23.580786',
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        Rt = u(8429),
        _r = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z',
                },
              },
            ],
          },
          name: 'copyright',
          theme: 'outlined',
        },
        Gr = _r,
        $n = u(12242),
        Vr = function (e, t) {
          return v.createElement($n.Z, (0, Rt.Z)({}, e, { ref: t, icon: Gr }));
        },
        Xr = v.forwardRef(Vr),
        Jr = Xr,
        Ae = u(93112),
        Yr = function (e) {
          return (0, o.Z)({}, e.componentCls, {
            marginBlock: 0,
            marginBlockStart: 48,
            marginBlockEnd: 24,
            marginInline: 0,
            paddingBlock: 0,
            paddingInline: 16,
            textAlign: 'center',
            '&-list': {
              marginBlockEnd: 8,
              color: e.colorTextSecondary,
              '&-link': {
                color: e.colorTextSecondary,
                textDecoration: e.linkDecoration,
              },
              '*:not(:last-child)': { marginInlineEnd: 8 },
              '&:hover': { color: e.colorPrimary },
            },
            '&-copyright': { fontSize: '14px', color: e.colorText },
          });
        };
      function Qr(r) {
        return (0, Ae.Xj)('ProLayoutFooter', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [Yr(t)];
        });
      }
      var qr = function (e) {
          var t = e.className,
            n = e.prefixCls,
            a = e.links,
            l = e.copyright,
            i = e.style,
            d = (0, v.useContext)(Ge.ZP.ConfigContext),
            f = d.getPrefixCls(n || 'pro-global-footer'),
            m = Qr(f),
            g = m.wrapSSR,
            b = m.hashId;
          return (a == null ||
            a === !1 ||
            (Array.isArray(a) && a.length === 0)) &&
            (l == null || l === !1)
            ? null
            : g(
                (0, c.jsxs)('div', {
                  className: fe()(f, b, t),
                  style: i,
                  children: [
                    a &&
                      (0, c.jsx)('div', {
                        className: ''.concat(f, '-list ').concat(b).trim(),
                        children: a.map(function (y) {
                          return (0,
                          c.jsx)('a', { className: ''.concat(f, '-list-link ').concat(b).trim(), title: y.key, target: y.blankTarget ? '_blank' : '_self', href: y.href, rel: 'noreferrer', children: y.title }, y.key);
                        }),
                      }),
                    l &&
                      (0, c.jsx)('div', {
                        className: ''.concat(f, '-copyright ').concat(b).trim(),
                        children: l,
                      }),
                  ],
                }),
              );
        },
        ea = ct.Footer,
        ta = function (e) {
          var t = e.links,
            n = e.copyright,
            a = e.style,
            l = e.className,
            i = e.prefixCls;
          return (0, c.jsx)(ea, {
            className: l,
            style: (0, s.Z)({ padding: 0 }, a),
            children: (0, c.jsx)(qr, {
              links: t,
              prefixCls: i,
              copyright:
                n === !1
                  ? null
                  : (0, c.jsxs)(v.Fragment, {
                      children: [(0, c.jsx)(Jr, {}), ' ', n],
                    }),
            }),
          });
        },
        zn = function r(e) {
          return (e || []).reduce(function (t, n) {
            if ((n.key && t.push(n.key), n.children || n.routes)) {
              var a = t.concat(r(n.children || n.routes) || []);
              return a;
            }
            return t;
          }, []);
        },
        Fn = {
          techBlue: '#1677FF',
          daybreak: '#1890ff',
          dust: '#F5222D',
          volcano: '#FA541C',
          sunset: '#FAAD14',
          cyan: '#13C2C2',
          green: '#52C41A',
          geekblue: '#2F54EB',
          purple: '#722ED1',
        };
      function vi(r) {
        return r && Fn[r] ? Fn[r] : r || '';
      }
      function Vt(r) {
        return r
          .map(function (e) {
            var t = e.children || [],
              n = (0, s.Z)({}, e);
            if (
              (!n.children && n.routes && (n.children = n.routes),
              !n.name || n.hideInMenu)
            )
              return null;
            if (n && n !== null && n !== void 0 && n.children) {
              if (
                !n.hideChildrenInMenu &&
                t.some(function (a) {
                  return a && a.name && !a.hideInMenu;
                })
              )
                return (0, s.Z)((0, s.Z)({}, e), {}, { children: Vt(t) });
              delete n.children;
            }
            return delete n.routes, n;
          })
          .filter(function (e) {
            return e;
          });
      }
      var na = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'menu',
          theme: 'outlined',
        },
        ra = na,
        aa = function (e, t) {
          return v.createElement($n.Z, (0, Rt.Z)({}, e, { ref: t, icon: ra }));
        },
        oa = v.forwardRef(aa),
        ia = oa,
        la = u(46750),
        ua = function () {
          return (0, c.jsx)('svg', {
            width: '1em',
            height: '1em',
            viewBox: '0 0 12 12',
            fill: 'currentColor',
            'aria-hidden': 'true',
            children: (0, c.jsx)('path', {
              d: 'M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z',
            }),
          });
        },
        ca = function r(e) {
          var t = e.appList,
            n = e.baseClassName,
            a = e.hashId,
            l = e.itemClick;
          return (0, c.jsx)('div', {
            className: ''.concat(n, '-content ').concat(a).trim(),
            children: (0, c.jsx)('ul', {
              className: ''.concat(n, '-content-list ').concat(a).trim(),
              children:
                t == null
                  ? void 0
                  : t.map(function (i, d) {
                      var f;
                      return i != null &&
                        (f = i.children) !== null &&
                        f !== void 0 &&
                        f.length
                        ? (0, c.jsxs)(
                            'div',
                            {
                              className: ''
                                .concat(n, '-content-list-item-group ')
                                .concat(a)
                                .trim(),
                              children: [
                                (0, c.jsx)('div', {
                                  className: ''
                                    .concat(
                                      n,
                                      '-content-list-item-group-title ',
                                    )
                                    .concat(a)
                                    .trim(),
                                  children: i.title,
                                }),
                                (0, c.jsx)(r, {
                                  hashId: a,
                                  itemClick: l,
                                  appList: i == null ? void 0 : i.children,
                                  baseClassName: n,
                                }),
                              ],
                            },
                            d,
                          )
                        : (0, c.jsx)(
                            'li',
                            {
                              className: ''
                                .concat(n, '-content-list-item ')
                                .concat(a)
                                .trim(),
                              onClick: function (g) {
                                g.stopPropagation(), l == null || l(i);
                              },
                              children: (0, c.jsxs)('a', {
                                href: l ? void 0 : i.url,
                                target: i.target,
                                rel: 'noreferrer',
                                children: [
                                  bn(i.icon),
                                  (0, c.jsxs)('div', {
                                    children: [
                                      (0, c.jsx)('div', { children: i.title }),
                                      i.desc
                                        ? (0, c.jsx)('span', {
                                            children: i.desc,
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                            },
                            d,
                          );
                    }),
            }),
          });
        },
        Cn = function (e) {
          if (!e || !e.startsWith('http')) return !1;
          try {
            var t = new URL(e);
            return !!t;
          } catch (n) {
            return !1;
          }
        },
        sa = function (e, t) {
          if (e && typeof e == 'string' && Cn(e))
            return (0, c.jsx)('img', { src: e, alt: 'logo' });
          if (typeof e == 'function') return e();
          if (e && typeof e == 'string')
            return (0, c.jsx)('div', { id: 'avatarLogo', children: e });
          if (!e && t && typeof t == 'string') {
            var n = t.substring(0, 1);
            return (0, c.jsx)('div', { id: 'avatarLogo', children: n });
          }
          return e;
        },
        da = function r(e) {
          var t = e.appList,
            n = e.baseClassName,
            a = e.hashId,
            l = e.itemClick;
          return (0, c.jsx)('div', {
            className: ''.concat(n, '-content ').concat(a).trim(),
            children: (0, c.jsx)('ul', {
              className: ''.concat(n, '-content-list ').concat(a).trim(),
              children:
                t == null
                  ? void 0
                  : t.map(function (i, d) {
                      var f;
                      return i != null &&
                        (f = i.children) !== null &&
                        f !== void 0 &&
                        f.length
                        ? (0, c.jsxs)(
                            'div',
                            {
                              className: ''
                                .concat(n, '-content-list-item-group ')
                                .concat(a)
                                .trim(),
                              children: [
                                (0, c.jsx)('div', {
                                  className: ''
                                    .concat(
                                      n,
                                      '-content-list-item-group-title ',
                                    )
                                    .concat(a)
                                    .trim(),
                                  children: i.title,
                                }),
                                (0, c.jsx)(r, {
                                  hashId: a,
                                  itemClick: l,
                                  appList: i == null ? void 0 : i.children,
                                  baseClassName: n,
                                }),
                              ],
                            },
                            d,
                          )
                        : (0, c.jsx)(
                            'li',
                            {
                              className: ''
                                .concat(n, '-content-list-item ')
                                .concat(a)
                                .trim(),
                              onClick: function (g) {
                                g.stopPropagation(), l == null || l(i);
                              },
                              children: (0, c.jsxs)('a', {
                                href: l ? 'javascript:;' : i.url,
                                target: i.target,
                                rel: 'noreferrer',
                                children: [
                                  sa(i.icon, i.title),
                                  (0, c.jsx)('div', {
                                    children: (0, c.jsx)('div', {
                                      children: i.title,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            d,
                          );
                    }),
            }),
          });
        },
        fa = function (e) {
          return {
            '&-content': {
              maxHeight: 'calc(100vh - 48px)',
              overflow: 'auto',
              '&-list': {
                boxSizing: 'content-box',
                maxWidth: 656,
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                listStyle: 'none',
                '&-item': {
                  position: 'relative',
                  display: 'inline-block',
                  width: 328,
                  height: 72,
                  paddingInline: 16,
                  paddingBlock: 16,
                  verticalAlign: 'top',
                  listStyleType: 'none',
                  transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
                  borderRadius: e.borderRadius,
                  '&-group': {
                    marginBottom: 16,
                    '&-title': {
                      margin: '16px 0 8px 12px',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.88)',
                      fontSize: 16,
                      opacity: 0.85,
                      lineHeight: 1.5,
                      '&:first-child': { marginTop: 12 },
                    },
                  },
                  '&:hover': { backgroundColor: e.colorBgTextHover },
                  '* div':
                    Ae.Wf === null || Ae.Wf === void 0 ? void 0 : (0, Ae.Wf)(e),
                  a: {
                    display: 'flex',
                    height: '100%',
                    fontSize: 12,
                    textDecoration: 'none',
                    '& > img': { width: 40, height: 40 },
                    '& > div': {
                      marginInlineStart: 14,
                      color: e.colorTextHeading,
                      fontSize: 14,
                      lineHeight: '22px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    },
                    '& > div > span': {
                      color: e.colorTextSecondary,
                      fontSize: 12,
                      lineHeight: '20px',
                    },
                  },
                },
              },
            },
          };
        },
        va = function (e) {
          return {
            '&-content': {
              maxHeight: 'calc(100vh - 48px)',
              overflow: 'auto',
              '&-list': {
                boxSizing: 'border-box',
                maxWidth: 376,
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                listStyle: 'none',
                '&-item': {
                  position: 'relative',
                  display: 'inline-block',
                  width: 104,
                  height: 104,
                  marginBlock: 8,
                  marginInline: 8,
                  paddingInline: 24,
                  paddingBlock: 24,
                  verticalAlign: 'top',
                  listStyleType: 'none',
                  transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
                  borderRadius: e.borderRadius,
                  '&-group': {
                    marginBottom: 16,
                    '&-title': {
                      margin: '16px 0 8px 12px',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.88)',
                      fontSize: 16,
                      opacity: 0.85,
                      lineHeight: 1.5,
                      '&:first-child': { marginTop: 12 },
                    },
                  },
                  '&:hover': { backgroundColor: e.colorBgTextHover },
                  a: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 12,
                    textDecoration: 'none',
                    '& > #avatarLogo': {
                      width: 40,
                      height: 40,
                      margin: '0 auto',
                      color: e.colorPrimary,
                      fontSize: 22,
                      lineHeight: '40px',
                      textAlign: 'center',
                      backgroundImage:
                        'linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)',
                      borderRadius: e.borderRadius,
                    },
                    '& > img': { width: 40, height: 40 },
                    '& > div': {
                      marginBlockStart: 5,
                      marginInlineStart: 0,
                      color: e.colorTextHeading,
                      fontSize: 14,
                      lineHeight: '22px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    },
                    '& > div > span': {
                      color: e.colorTextSecondary,
                      fontSize: 12,
                      lineHeight: '20px',
                    },
                  },
                },
              },
            },
          };
        },
        ma = function (e) {
          var t, n, a, l, i;
          return (0, o.Z)({}, e.componentCls, {
            '&-icon': {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingInline: 4,
              paddingBlock: 0,
              fontSize: 14,
              lineHeight: '14px',
              height: 28,
              width: 28,
              cursor: 'pointer',
              color:
                (t = e.layout) === null || t === void 0
                  ? void 0
                  : t.colorTextAppListIcon,
              borderRadius: e.borderRadius,
              '&:hover': {
                color:
                  (n = e.layout) === null || n === void 0
                    ? void 0
                    : n.colorTextAppListIconHover,
                backgroundColor:
                  (a = e.layout) === null || a === void 0
                    ? void 0
                    : a.colorBgAppListIconHover,
              },
              '&-active': {
                color:
                  (l = e.layout) === null || l === void 0
                    ? void 0
                    : l.colorTextAppListIconHover,
                backgroundColor:
                  (i = e.layout) === null || i === void 0
                    ? void 0
                    : i.colorBgAppListIconHover,
              },
            },
            '&-item-title': {
              marginInlineStart: '16px',
              marginInlineEnd: '8px',
              marginBlockStart: 0,
              marginBlockEnd: '12px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.88)',
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              '&:first-child': { marginBlockStart: 12 },
            },
            '&-popover': (0, o.Z)({}, ''.concat(e.antCls, '-popover-arrow'), {
              display: 'none',
            }),
            '&-simple': va(e),
            '&-default': fa(e),
          });
        };
      function ga(r) {
        return (0, Ae.Xj)('AppsLogoComponents', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [ma(t)];
        });
      }
      var bn = function (e) {
          return typeof e == 'string'
            ? (0, c.jsx)('img', {
                width: 'auto',
                height: 22,
                src: e,
                alt: 'logo',
              })
            : typeof e == 'function'
            ? e()
            : e;
        },
        Sn = function (e) {
          var t,
            n = e.appList,
            a = e.appListRender,
            l = e.prefixCls,
            i = l === void 0 ? 'ant-pro' : l,
            d = e.onItemClick,
            f = v.useRef(null),
            m = v.useRef(null),
            g = ''.concat(i, '-layout-apps'),
            b = ga(g),
            y = b.wrapSSR,
            P = b.hashId,
            F = (0, v.useState)(!1),
            L = (0, p.Z)(F, 2),
            N = L[0],
            _ = L[1],
            W = function (E) {
              d == null || d(E, m);
            },
            Q = (0, v.useMemo)(
              function () {
                var S =
                  n == null
                    ? void 0
                    : n.some(function (E) {
                        return !(E != null && E.desc);
                      });
                return S
                  ? (0, c.jsx)(da, {
                      hashId: P,
                      appList: n,
                      itemClick: d ? W : void 0,
                      baseClassName: ''.concat(g, '-simple'),
                    })
                  : (0, c.jsx)(ca, {
                      hashId: P,
                      appList: n,
                      itemClick: d ? W : void 0,
                      baseClassName: ''.concat(g, '-default'),
                    });
              },
              [n, g, P],
            );
          if (
            !(e != null && (t = e.appList) !== null && t !== void 0 && t.length)
          )
            return null;
          var O = a ? a(e == null ? void 0 : e.appList, Q) : Q,
            G = (0, T.X)(void 0, function (S) {
              return _(S);
            });
          return y(
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)('div', {
                  ref: f,
                  onClick: function (E) {
                    E.stopPropagation(), E.preventDefault();
                  },
                }),
                (0, c.jsx)(
                  la.Z,
                  (0, s.Z)(
                    (0, s.Z)(
                      {
                        placement: 'bottomRight',
                        trigger: ['click'],
                        zIndex: 9999,
                        arrow: !1,
                      },
                      G,
                    ),
                    {},
                    {
                      overlayClassName: ''
                        .concat(g, '-popover ')
                        .concat(P)
                        .trim(),
                      content: O,
                      getPopupContainer: function () {
                        return f.current || document.body;
                      },
                      children: (0, c.jsx)('span', {
                        ref: m,
                        onClick: function (E) {
                          E.stopPropagation();
                        },
                        className: fe()(
                          ''.concat(g, '-icon'),
                          P,
                          (0, o.Z)({}, ''.concat(g, '-icon-active'), N),
                        ),
                        children: (0, c.jsx)(ua, {}),
                      }),
                    },
                  ),
                ),
              ],
            }),
          );
        },
        Wn = u(72447),
        pa = u(73042),
        kn = u(17011);
      function ha() {
        return (0, c.jsx)('svg', {
          width: '1em',
          height: '1em',
          viewBox: '0 0 12 12',
          fill: 'currentColor',
          'aria-hidden': 'true',
          children: (0, c.jsx)('path', {
            d: 'M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z',
          }),
        });
      }
      var ya = function (e) {
        var t, n, a;
        return (0, o.Z)({}, e.componentCls, {
          position: 'absolute',
          insetBlockStart: '18px',
          zIndex: '101',
          width: '24px',
          height: '24px',
          fontSize: ['14px', '16px'],
          textAlign: 'center',
          borderRadius: '40px',
          insetInlineEnd: '-13px',
          transition: 'transform 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color:
            (t = e.layout) === null ||
            t === void 0 ||
            (t = t.sider) === null ||
            t === void 0
              ? void 0
              : t.colorTextCollapsedButton,
          backgroundColor:
            (n = e.layout) === null ||
            n === void 0 ||
            (n = n.sider) === null ||
            n === void 0
              ? void 0
              : n.colorBgCollapsedButton,
          boxShadow:
            '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
          '&:hover': {
            color:
              (a = e.layout) === null ||
              a === void 0 ||
              (a = a.sider) === null ||
              a === void 0
                ? void 0
                : a.colorTextCollapsedButtonHover,
            boxShadow:
              '0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)',
          },
          '.anticon': { fontSize: '14px' },
          '& > svg': {
            transition: 'transform  0.3s',
            transform: 'rotate(90deg)',
          },
          '&-collapsed': { '& > svg': { transform: 'rotate(-90deg)' } },
        });
      };
      function xa(r) {
        return (0, Ae.Xj)('SiderMenuCollapsedIcon', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [ya(t)];
        });
      }
      var Ca = ['isMobile', 'collapsed'],
        ba = function (e) {
          var t = e.isMobile,
            n = e.collapsed,
            a = (0, I.Z)(e, Ca),
            l = xa(e.className),
            i = l.wrapSSR,
            d = l.hashId;
          return t && n
            ? null
            : i(
                (0, c.jsx)(
                  'div',
                  (0, s.Z)(
                    (0, s.Z)({}, a),
                    {},
                    {
                      className: fe()(
                        e.className,
                        d,
                        (0, o.Z)(
                          (0, o.Z)({}, ''.concat(e.className, '-collapsed'), n),
                          ''.concat(e.className, '-is-mobile'),
                          t,
                        ),
                      ),
                      children: (0, c.jsx)(ha, {}),
                    },
                  ),
                ),
              );
        },
        Sa = u(29749),
        Za = u(51222),
        Ma = u(64785),
        Ia = u(51693),
        Xt = u(27752),
        Ta = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        Un = v.forwardRef(function (r, e) {
          var t = r.className,
            n = r.component,
            a = r.viewBox,
            l = r.spin,
            i = r.rotate,
            d = r.tabIndex,
            f = r.onClick,
            m = r.children,
            g = (0, I.Z)(r, Ta),
            b = v.useRef(),
            y = (0, Ma.x1)(b, e);
          (0, Xt.Kp)(!!(n || m), 'Should have `component` prop or `children`.'),
            (0, Xt.C3)(b);
          var P = v.useContext(Ia.Z),
            F = P.prefixCls,
            L = F === void 0 ? 'anticon' : F,
            N = P.rootClassName,
            _ = fe()(N, L, (0, o.Z)({}, ''.concat(L, '-spin'), !!l && !!n), t),
            W = fe()((0, o.Z)({}, ''.concat(L, '-spin'), !!l)),
            Q = i
              ? {
                  msTransform: 'rotate('.concat(i, 'deg)'),
                  transform: 'rotate('.concat(i, 'deg)'),
                }
              : void 0,
            O = (0, s.Z)(
              (0, s.Z)({}, Xt.vD),
              {},
              { className: W, style: Q, viewBox: a },
            );
          a || delete O.viewBox;
          var G = function () {
              return n
                ? v.createElement(n, O, m)
                : m
                ? ((0, Xt.Kp)(
                    !!a ||
                      (v.Children.count(m) === 1 &&
                        v.isValidElement(m) &&
                        v.Children.only(m).type === 'use'),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  v.createElement('svg', (0, Rt.Z)({}, O, { viewBox: a }), m))
                : null;
            },
            S = d;
          return (
            S === void 0 && f && (S = -1),
            v.createElement(
              'span',
              (0, Rt.Z)({ role: 'img' }, g, {
                ref: y,
                tabIndex: S,
                onClick: f,
                className: _,
              }),
              G(),
            )
          );
        });
      Un.displayName = 'AntdIcon';
      var Ra = Un,
        wa = ['type', 'children'],
        Kn = new Set();
      function Ba(r) {
        return !!(typeof r == 'string' && r.length && !Kn.has(r));
      }
      function Jt(r) {
        var e =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          t = r[e];
        if (Ba(t)) {
          var n = document.createElement('script');
          n.setAttribute('src', t),
            n.setAttribute('data-namespace', t),
            r.length > e + 1 &&
              ((n.onload = function () {
                Jt(r, e + 1);
              }),
              (n.onerror = function () {
                Jt(r, e + 1);
              })),
            Kn.add(t),
            document.body.appendChild(n);
        }
      }
      function _n() {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          e = r.scriptUrl,
          t = r.extraCommonProps,
          n = t === void 0 ? {} : t;
        e &&
          typeof document != 'undefined' &&
          typeof window != 'undefined' &&
          typeof document.createElement == 'function' &&
          (Array.isArray(e) ? Jt(e.reverse()) : Jt([e]));
        var a = v.forwardRef(function (l, i) {
          var d = l.type,
            f = l.children,
            m = (0, I.Z)(l, wa),
            g = null;
          return (
            l.type &&
              (g = v.createElement('use', { xlinkHref: '#'.concat(d) })),
            f && (g = f),
            v.createElement(Ra, (0, Rt.Z)({}, n, m, { ref: i }), g)
          );
        });
        return (a.displayName = 'Iconfont'), a;
      }
      function ja(r) {
        return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(r);
      }
      var Pa = u(10536),
        Na = u(83035),
        Gn = {
          navTheme: 'light',
          layout: 'side',
          contentWidth: 'Fluid',
          fixedHeader: !1,
          fixSiderbar: !0,
          iconfontUrl: '',
          colorPrimary: '#1677FF',
          splitMenus: !1,
        },
        La = function (e, t) {
          var n,
            a,
            l = t.includes('horizontal')
              ? (n = e.layout) === null || n === void 0
                ? void 0
                : n.header
              : (a = e.layout) === null || a === void 0
              ? void 0
              : a.sider;
          return (0, s.Z)(
            (0, s.Z)(
              (0, o.Z)(
                {},
                ''.concat(e.componentCls),
                (0, o.Z)(
                  (0, o.Z)(
                    (0, o.Z)(
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  {
                                    background: 'transparent',
                                    color: l == null ? void 0 : l.colorTextMenu,
                                    border: 'none',
                                  },
                                  ''.concat(e.componentCls, '-menu-item'),
                                  { transition: 'none !important' },
                                ),
                                ''.concat(e.componentCls, '-submenu-has-icon'),
                                (0, o.Z)(
                                  {},
                                  '> '.concat(e.antCls, '-menu-sub'),
                                  { paddingInlineStart: 10 },
                                ),
                              ),
                              ''.concat(e.antCls, '-menu-title-content'),
                              {
                                width: '100%',
                                height: '100%',
                                display: 'inline-flex',
                              },
                            ),
                            ''.concat(e.antCls, '-menu-title-content'),
                            { '&:first-child': { width: '100%' } },
                          ),
                          ''.concat(e.componentCls, '-item-icon'),
                          { display: 'flex', alignItems: 'center' },
                        ),
                        '&&-collapsed',
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              {},
                              ''
                                .concat(
                                  e.antCls,
                                  `-menu-item, 
        `,
                                )
                                .concat(e.antCls, '-menu-item-group > ')
                                .concat(e.antCls, '-menu-item-group-list > ')
                                .concat(
                                  e.antCls,
                                  `-menu-item, 
        `,
                                )
                                .concat(e.antCls, '-menu-item-group > ')
                                .concat(e.antCls, '-menu-item-group-list > ')
                                .concat(e.antCls, '-menu-submenu > ')
                                .concat(
                                  e.antCls,
                                  `-menu-submenu-title, 
        `,
                                )
                                .concat(e.antCls, '-menu-submenu > ')
                                .concat(e.antCls, '-menu-submenu-title'),
                              {
                                paddingInline: '0 !important',
                                marginBlock: '4px !important',
                              },
                            ),
                            ''
                              .concat(e.antCls, '-menu-item-group > ')
                              .concat(e.antCls, '-menu-item-group-list > ')
                              .concat(e.antCls, '-menu-submenu-selected > ')
                              .concat(
                                e.antCls,
                                `-menu-submenu-title, 
        `,
                              )
                              .concat(e.antCls, '-menu-submenu-selected > ')
                              .concat(e.antCls, '-menu-submenu-title'),
                            {
                              backgroundColor:
                                l == null ? void 0 : l.colorBgMenuItemSelected,
                              borderRadius: e.borderRadiusLG,
                            },
                          ),
                          ''.concat(e.componentCls, '-group'),
                          (0, o.Z)(
                            {},
                            ''.concat(e.antCls, '-menu-item-group-title'),
                            { paddingInline: 0 },
                          ),
                        ),
                      ),
                      '&-item-title',
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                {
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: e.marginXS,
                                },
                                ''.concat(e.componentCls, '-item-text'),
                                {
                                  maxWidth: '100%',
                                  textOverflow: 'ellipsis',
                                  overflow: 'hidden',
                                  wordBreak: 'break-all',
                                  whiteSpace: 'nowrap',
                                },
                              ),
                              '&-collapsed',
                              (0, o.Z)(
                                (0, o.Z)(
                                  { minWidth: 40, height: 40 },
                                  ''.concat(e.componentCls, '-item-icon'),
                                  {
                                    height: '16px',
                                    width: '16px',
                                    lineHeight: '16px !important',
                                    '.anticon': {
                                      lineHeight: '16px !important',
                                      height: '16px',
                                    },
                                  },
                                ),
                                ''.concat(
                                  e.componentCls,
                                  '-item-text-has-icon',
                                ),
                                { display: 'none !important' },
                              ),
                            ),
                            '&-collapsed-level-0',
                            {
                              flexDirection: 'column',
                              justifyContent: 'center',
                            },
                          ),
                          '&'.concat(e.componentCls, '-group-item-title'),
                          { gap: e.marginXS, height: 18, overflow: 'hidden' },
                        ),
                        '&'.concat(
                          e.componentCls,
                          '-item-collapsed-show-title',
                        ),
                        (0, o.Z)(
                          { lineHeight: '16px', gap: 0 },
                          '&'.concat(e.componentCls, '-item-title-collapsed'),
                          (0, o.Z)(
                            (0, o.Z)(
                              { display: 'flex' },
                              ''.concat(e.componentCls, '-item-icon'),
                              {
                                height: '16px',
                                width: '16px',
                                lineHeight: '16px !important',
                                '.anticon': {
                                  lineHeight: '16px!important',
                                  height: '16px',
                                },
                              },
                            ),
                            ''.concat(e.componentCls, '-item-text'),
                            {
                              opacity: '1 !important',
                              display: 'inline !important',
                              textAlign: 'center',
                              fontSize: 12,
                              height: 12,
                              lineHeight: '12px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              width: '100%',
                              margin: 0,
                              padding: 0,
                              marginBlockStart: 4,
                            },
                          ),
                        ),
                      ),
                    ),
                    '&-group',
                    (0, o.Z)(
                      {},
                      ''.concat(e.antCls, '-menu-item-group-title'),
                      {
                        fontSize: 12,
                        color: e.colorTextLabel,
                        '.anticon': { marginInlineEnd: 8 },
                      },
                    ),
                  ),
                  '&-group-divider',
                  { color: e.colorTextSecondary, fontSize: 12, lineHeight: 20 },
                ),
              ),
              t.includes('horizontal')
                ? {}
                : (0, o.Z)(
                    {},
                    ''
                      .concat(e.antCls, '-menu-submenu')
                      .concat(e.antCls, '-menu-submenu-popup'),
                    (0, o.Z)({}, ''.concat(e.componentCls, '-item-title'), {
                      alignItems: 'flex-start',
                    }),
                  ),
            ),
            {},
            (0, o.Z)({}, ''.concat(e.antCls, '-menu-submenu-popup'), {
              backgroundColor: 'rgba(255, 255, 255, 0.42)',
              '-webkit-backdrop-filter': 'blur(8px)',
              backdropFilter: 'blur(8px)',
            }),
          );
        };
      function Ea(r, e) {
        return (0, Ae.Xj)('ProLayoutBaseMenu' + e, function (t) {
          var n = (0, s.Z)(
            (0, s.Z)({}, t),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [La(n, e || 'inline')];
        });
      }
      var Vn = function (e) {
          var t = (0, v.useState)(e.collapsed),
            n = (0, p.Z)(t, 2),
            a = n[0],
            l = n[1],
            i = (0, v.useState)(!1),
            d = (0, p.Z)(i, 2),
            f = d[0],
            m = d[1];
          return (
            (0, v.useEffect)(
              function () {
                m(!1),
                  setTimeout(function () {
                    l(e.collapsed);
                  }, 400);
              },
              [e.collapsed],
            ),
            e.disable
              ? e.children
              : (0, c.jsx)(Pa.Z, {
                  title: e.title,
                  open: a && e.collapsed ? f : !1,
                  placement: 'right',
                  onOpenChange: m,
                  children: e.children,
                })
          );
        },
        Xn = _n({ scriptUrl: Gn.iconfontUrl }),
        Jn = function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 'icon-',
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (typeof e == 'string' && e !== '') {
            if (Cn(e) || ja(e))
              return (0, c.jsx)(
                'img',
                { width: 16, src: e, alt: 'icon', className: n },
                e,
              );
            if (e.startsWith(t)) return (0, c.jsx)(Xn, { type: e });
          }
          return e;
        },
        Yn = function (e) {
          if (e && typeof e == 'string') {
            var t = e.substring(0, 1).toUpperCase();
            return t;
          }
          return null;
        },
        Aa = (0, Sa.Z)(function r(e) {
          var t = this;
          (0, Za.Z)(this, r),
            (0, o.Z)(this, 'props', void 0),
            (0, o.Z)(this, 'getNavMenuItems', function () {
              var n =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
                a = arguments.length > 1 ? arguments[1] : void 0,
                l = arguments.length > 2 ? arguments[2] : void 0;
              return n
                .map(function (i) {
                  return t.getSubMenuOrItem(i, a, l);
                })
                .filter(function (i) {
                  return i;
                })
                .flat(1);
            }),
            (0, o.Z)(this, 'getSubMenuOrItem', function (n, a, l) {
              var i = t.props,
                d = i.subMenuItemRender,
                f = i.baseClassName,
                m = i.prefixCls,
                g = i.collapsed,
                b = i.menu,
                y = i.iconPrefixes,
                P = i.layout,
                F = (b == null ? void 0 : b.type) === 'group' && P !== 'top',
                L = t.props.token,
                N = t.getIntlName(n),
                _ =
                  (n == null ? void 0 : n.children) ||
                  (n == null ? void 0 : n.routes),
                W = F && a === 0 ? 'group' : void 0;
              if (Array.isArray(_) && _.length > 0) {
                var Q,
                  O,
                  G,
                  S,
                  E,
                  ue = a === 0 || (F && a === 1),
                  J = Jn(
                    n.icon,
                    y,
                    ''
                      .concat(f, '-icon ')
                      .concat(
                        (Q = t.props) === null || Q === void 0
                          ? void 0
                          : Q.hashId,
                      ),
                  ),
                  k = g && ue ? Yn(N) : null,
                  me = (0, c.jsxs)('div', {
                    className: fe()(
                      ''.concat(f, '-item-title'),
                      (O = t.props) === null || O === void 0
                        ? void 0
                        : O.hashId,
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              {},
                              ''.concat(f, '-item-title-collapsed'),
                              g,
                            ),
                            ''
                              .concat(f, '-item-title-collapsed-level-')
                              .concat(l),
                            g,
                          ),
                          ''.concat(f, '-group-item-title'),
                          W === 'group',
                        ),
                        ''.concat(f, '-item-collapsed-show-title'),
                        (b == null ? void 0 : b.collapsedShowTitle) && g,
                      ),
                    ),
                    children: [
                      W === 'group' && g
                        ? null
                        : ue && J
                        ? (0, c.jsx)('span', {
                            className: ''
                              .concat(f, '-item-icon ')
                              .concat(
                                (G = t.props) === null || G === void 0
                                  ? void 0
                                  : G.hashId,
                              )
                              .trim(),
                            children: J,
                          })
                        : k,
                      (0, c.jsx)('span', {
                        className: fe()(
                          ''.concat(f, '-item-text'),
                          (S = t.props) === null || S === void 0
                            ? void 0
                            : S.hashId,
                          (0, o.Z)(
                            {},
                            ''.concat(f, '-item-text-has-icon'),
                            W !== 'group' && ue && (J || k),
                          ),
                        ),
                        children: N,
                      }),
                    ],
                  }),
                  xe = d
                    ? d(
                        (0, s.Z)((0, s.Z)({}, n), {}, { isUrl: !1 }),
                        me,
                        t.props,
                      )
                    : me;
                if (
                  F &&
                  a === 0 &&
                  t.props.collapsed &&
                  !b.collapsedShowGroupTitle
                )
                  return t.getNavMenuItems(_, a + 1, a);
                var Z = t.getNavMenuItems(
                  _,
                  a + 1,
                  F && a === 0 && t.props.collapsed ? a : a + 1,
                );
                return [
                  {
                    type: W,
                    key: n.key || n.path,
                    label: xe,
                    onClick: F ? void 0 : n.onTitleClick,
                    children: Z,
                    className: fe()(
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)({}, ''.concat(f, '-group'), W === 'group'),
                          ''.concat(f, '-submenu'),
                          W !== 'group',
                        ),
                        ''.concat(f, '-submenu-has-icon'),
                        W !== 'group' && ue && J,
                      ),
                    ),
                  },
                  F && a === 0
                    ? {
                        type: 'divider',
                        prefixCls: m,
                        className: ''.concat(f, '-divider'),
                        key: (n.key || n.path) + '-group-divider',
                        style: {
                          padding: 0,
                          borderBlockEnd: 0,
                          margin: t.props.collapsed ? '4px' : '6px 16px',
                          marginBlockStart: t.props.collapsed ? 4 : 8,
                          borderColor:
                            L == null ||
                            (E = L.layout) === null ||
                            E === void 0 ||
                            (E = E.sider) === null ||
                            E === void 0
                              ? void 0
                              : E.colorMenuItemDivider,
                        },
                      }
                    : void 0,
                ].filter(Boolean);
              }
              return {
                className: ''.concat(f, '-menu-item'),
                disabled: n.disabled,
                key: n.key || n.path,
                onClick: n.onTitleClick,
                label: t.getMenuItemPath(n, a, l),
              };
            }),
            (0, o.Z)(this, 'getIntlName', function (n) {
              var a = n.name,
                l = n.locale,
                i = t.props,
                d = i.menu,
                f = i.formatMessage,
                m = a;
              return (
                l &&
                  (d == null ? void 0 : d.locale) !== !1 &&
                  (m = f == null ? void 0 : f({ id: l, defaultMessage: a })),
                t.props.menuTextRender
                  ? t.props.menuTextRender(n, m, t.props)
                  : m
              );
            }),
            (0, o.Z)(this, 'getMenuItemPath', function (n, a, l) {
              var i,
                d,
                f,
                m,
                g = t.conversionPath(n.path || '/'),
                b = t.props,
                y = b.location,
                P = y === void 0 ? { pathname: '/' } : y,
                F = b.isMobile,
                L = b.onCollapse,
                N = b.menuItemRender,
                _ = b.iconPrefixes,
                W = t.getIntlName(n),
                Q = t.props,
                O = Q.baseClassName,
                G = Q.menu,
                S = Q.collapsed,
                E = (G == null ? void 0 : G.type) === 'group',
                ue = a === 0 || (E && a === 1),
                J = ue
                  ? Jn(
                      n.icon,
                      _,
                      ''
                        .concat(O, '-icon ')
                        .concat(
                          (i = t.props) === null || i === void 0
                            ? void 0
                            : i.hashId,
                        ),
                    )
                  : null,
                k = S && ue ? Yn(W) : null,
                me = (0, c.jsxs)(
                  'div',
                  {
                    className: fe()(
                      ''.concat(O, '-item-title'),
                      (d = t.props) === null || d === void 0
                        ? void 0
                        : d.hashId,
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            {},
                            ''.concat(O, '-item-title-collapsed'),
                            S,
                          ),
                          ''
                            .concat(O, '-item-title-collapsed-level-')
                            .concat(l),
                          S,
                        ),
                        ''.concat(O, '-item-collapsed-show-title'),
                        (G == null ? void 0 : G.collapsedShowTitle) && S,
                      ),
                    ),
                    children: [
                      (0, c.jsx)('span', {
                        className: ''
                          .concat(O, '-item-icon ')
                          .concat(
                            (f = t.props) === null || f === void 0
                              ? void 0
                              : f.hashId,
                          )
                          .trim(),
                        style: { display: k === null && !J ? 'none' : '' },
                        children:
                          J ||
                          (0, c.jsx)('span', {
                            className: 'anticon',
                            children: k,
                          }),
                      }),
                      (0, c.jsx)('span', {
                        className: fe()(
                          ''.concat(O, '-item-text'),
                          (m = t.props) === null || m === void 0
                            ? void 0
                            : m.hashId,
                          (0, o.Z)(
                            {},
                            ''.concat(O, '-item-text-has-icon'),
                            ue && (J || k),
                          ),
                        ),
                        children: W,
                      }),
                    ],
                  },
                  g,
                ),
                xe = Cn(g);
              if (xe) {
                var Z, Ze, A;
                me = (0, c.jsxs)(
                  'span',
                  {
                    onClick: function () {
                      var Ie, ye;
                      (Ie = window) === null ||
                        Ie === void 0 ||
                        (ye = Ie.open) === null ||
                        ye === void 0 ||
                        ye.call(Ie, g, '_blank');
                    },
                    className: fe()(
                      ''.concat(O, '-item-title'),
                      (Z = t.props) === null || Z === void 0
                        ? void 0
                        : Z.hashId,
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              {},
                              ''.concat(O, '-item-title-collapsed'),
                              S,
                            ),
                            ''
                              .concat(O, '-item-title-collapsed-level-')
                              .concat(l),
                            S,
                          ),
                          ''.concat(O, '-item-link'),
                          !0,
                        ),
                        ''.concat(O, '-item-collapsed-show-title'),
                        (G == null ? void 0 : G.collapsedShowTitle) && S,
                      ),
                    ),
                    children: [
                      (0, c.jsx)('span', {
                        className: ''
                          .concat(O, '-item-icon ')
                          .concat(
                            (Ze = t.props) === null || Ze === void 0
                              ? void 0
                              : Ze.hashId,
                          )
                          .trim(),
                        style: { display: k === null && !J ? 'none' : '' },
                        children:
                          J ||
                          (0, c.jsx)('span', {
                            className: 'anticon',
                            children: k,
                          }),
                      }),
                      (0, c.jsx)('span', {
                        className: fe()(
                          ''.concat(O, '-item-text'),
                          (A = t.props) === null || A === void 0
                            ? void 0
                            : A.hashId,
                          (0, o.Z)(
                            {},
                            ''.concat(O, '-item-text-has-icon'),
                            ue && (J || k),
                          ),
                        ),
                        children: W,
                      }),
                    ],
                  },
                  g,
                );
              }
              if (N) {
                var ve = (0, s.Z)(
                  (0, s.Z)({}, n),
                  {},
                  {
                    isUrl: xe,
                    itemPath: g,
                    isMobile: F,
                    replace: g === P.pathname,
                    onClick: function () {
                      return L && L(!0);
                    },
                    children: void 0,
                  },
                );
                return a === 0
                  ? (0, c.jsx)(Vn, {
                      collapsed: S,
                      title: W,
                      disable: n.disabledTooltip,
                      children: N(ve, me, t.props),
                    })
                  : N(ve, me, t.props);
              }
              return a === 0
                ? (0, c.jsx)(Vn, {
                    collapsed: S,
                    title: W,
                    disable: n.disabledTooltip,
                    children: me,
                  })
                : me;
            }),
            (0, o.Z)(this, 'conversionPath', function (n) {
              return n && n.indexOf('http') === 0
                ? n
                : '/'.concat(n || '').replace(/\/+/g, '/');
            }),
            (this.props = e);
        }),
        Ha = function (e, t) {
          var n = t.layout,
            a = t.collapsed,
            l = {};
          return (
            e &&
              !a &&
              ['side', 'mix'].includes(n || 'mix') &&
              (l = { openKeys: e }),
            l
          );
        },
        Qn = function (e) {
          var t = e.mode,
            n = e.className,
            a = e.handleOpenChange,
            l = e.style,
            i = e.menuData,
            d = e.prefixCls,
            f = e.menu,
            m = e.matchMenuKeys,
            g = e.iconfontUrl,
            b = e.selectedKeys,
            y = e.onSelect,
            P = e.menuRenderType,
            F = e.openKeys,
            L = (0, v.useContext)(w.L_),
            N = L.dark,
            _ = L.token,
            W = ''.concat(d, '-base-menu-').concat(t),
            Q = (0, v.useRef)([]),
            O = (0, $.Z)(f == null ? void 0 : f.defaultOpenAll),
            G = (0, p.Z)(O, 2),
            S = G[0],
            E = G[1],
            ue = (0, $.Z)(
              function () {
                return f != null && f.defaultOpenAll
                  ? zn(i) || []
                  : F === !1
                  ? !1
                  : [];
              },
              { value: F === !1 ? void 0 : F, onChange: a },
            ),
            J = (0, p.Z)(ue, 2),
            k = J[0],
            me = J[1],
            xe = (0, $.Z)([], {
              value: b,
              onChange: y
                ? function (we) {
                    y && we && y(we);
                  }
                : void 0,
            }),
            Z = (0, p.Z)(xe, 2),
            Ze = Z[0],
            A = Z[1];
          (0, v.useEffect)(
            function () {
              (f != null && f.defaultOpenAll) ||
                F === !1 ||
                (m && (me(m), A(m)));
            },
            [m.join('-')],
          ),
            (0, v.useEffect)(
              function () {
                g && (Xn = _n({ scriptUrl: g }));
              },
              [g],
            ),
            (0, v.useEffect)(
              function () {
                if (
                  (m.join('-') !== (Ze || []).join('-') && A(m),
                  !S && F !== !1 && m.join('-') !== (k || []).join('-'))
                ) {
                  var we = m;
                  (f == null ? void 0 : f.autoClose) === !1 &&
                    (we = Array.from(
                      new Set([].concat((0, Tt.Z)(m), (0, Tt.Z)(k || []))),
                    )),
                    me(we);
                } else f != null && f.ignoreFlatMenu && S ? me(zn(i)) : E(!1);
              },
              [m.join('-')],
            );
          var ve = (0, v.useMemo)(
              function () {
                return Ha(k, e);
              },
              [k && k.join(','), e.layout, e.collapsed],
            ),
            pe = Ea(W, t),
            Ie = pe.wrapSSR,
            ye = pe.hashId,
            Pe = (0, v.useMemo)(
              function () {
                return new Aa(
                  (0, s.Z)(
                    (0, s.Z)({}, e),
                    {},
                    {
                      token: _,
                      menuRenderType: P,
                      baseClassName: W,
                      hashId: ye,
                    },
                  ),
                );
              },
              [e, _, P, W, ye],
            );
          if (f != null && f.loading)
            return (0, c.jsx)('div', {
              style:
                t != null && t.includes('inline')
                  ? { padding: 24 }
                  : { marginBlockStart: 16 },
              children: (0, c.jsx)(Na.Z, {
                active: !0,
                title: !1,
                paragraph: { rows: t != null && t.includes('inline') ? 6 : 1 },
              }),
            });
          e.openKeys === !1 && !e.handleOpenChange && (Q.current = m);
          var Re = e.postMenuData ? e.postMenuData(i) : i;
          return Re && (Re == null ? void 0 : Re.length) < 1
            ? null
            : Ie(
                (0, v.createElement)(
                  kn.Z,
                  (0, s.Z)(
                    (0, s.Z)({}, ve),
                    {},
                    {
                      _internalDisableMenuItemTitleTooltip: !0,
                      key: 'Menu',
                      mode: t,
                      inlineIndent: 16,
                      defaultOpenKeys: Q.current,
                      theme: N ? 'dark' : 'light',
                      selectedKeys: Ze,
                      style: (0, s.Z)(
                        { backgroundColor: 'transparent', border: 'none' },
                        l,
                      ),
                      className: fe()(
                        n,
                        ye,
                        W,
                        (0, o.Z)(
                          (0, o.Z)(
                            {},
                            ''.concat(W, '-horizontal'),
                            t === 'horizontal',
                          ),
                          ''.concat(W, '-collapsed'),
                          e.collapsed,
                        ),
                      ),
                      items: Pe.getNavMenuItems(Re, 0, 0),
                      onOpenChange: function (ze) {
                        e.collapsed || me(ze);
                      },
                    },
                    e.menuProps,
                  ),
                ),
              );
        };
      function Oa(r, e) {
        var t = e.stylish,
          n = e.proLayoutCollapsedWidth;
        return (0, Ae.Xj)('ProLayoutSiderMenuStylish', function (a) {
          var l = (0, s.Z)(
            (0, s.Z)({}, a),
            {},
            { componentCls: '.'.concat(r), proLayoutCollapsedWidth: n },
          );
          return t
            ? [
                (0, o.Z)(
                  {},
                  'div'.concat(a.proComponentsCls, '-layout'),
                  (0, o.Z)(
                    {},
                    ''.concat(l.componentCls),
                    t == null ? void 0 : t(l),
                  ),
                ),
              ]
            : [];
        });
      }
      var Da = ['title', 'render'],
        $a = v.memo(function (r) {
          return (0, c.jsx)(c.Fragment, { children: r.children });
        }),
        za = ct.Sider,
        qn = ct._InternalSiderContext,
        Fa = qn === void 0 ? { Provider: $a } : qn,
        Zn = function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 'menuHeaderRender',
            n = e.logo,
            a = e.title,
            l = e.layout,
            i = e[t];
          if (i === !1) return null;
          var d = bn(n),
            f = (0, c.jsx)('h1', {
              children: a != null ? a : 'Ant Design Pro',
            });
          return i
            ? i(d, e.collapsed ? null : f, e)
            : e.isMobile
            ? null
            : l === 'mix' && t === 'menuHeaderRender'
            ? !1
            : e.collapsed
            ? (0, c.jsx)('a', { children: d }, 'title')
            : (0, c.jsxs)('a', { children: [d, f] }, 'title');
        },
        er = function (e) {
          var t,
            n = e.collapsed,
            a = e.originCollapsed,
            l = e.fixSiderbar,
            i = e.menuFooterRender,
            d = e.onCollapse,
            f = e.theme,
            m = e.siderWidth,
            g = e.isMobile,
            b = e.onMenuHeaderClick,
            y = e.breakpoint,
            P = y === void 0 ? 'lg' : y,
            F = e.style,
            L = e.layout,
            N = e.menuExtraRender,
            _ = N === void 0 ? !1 : N,
            W = e.links,
            Q = e.menuContentRender,
            O = e.collapsedButtonRender,
            G = e.prefixCls,
            S = e.avatarProps,
            E = e.rightContentRender,
            ue = e.actionsRender,
            J = e.onOpenChange,
            k = e.stylish,
            me = e.logoStyle,
            xe = (0, v.useContext)(w.L_),
            Z = xe.hashId,
            Ze = (0, v.useMemo)(
              function () {
                return !(g || L === 'mix');
              },
              [g, L],
            ),
            A = ''.concat(G, '-sider'),
            ve = 64,
            pe = Oa(''.concat(A, '.').concat(A, '-stylish'), {
              stylish: k,
              proLayoutCollapsedWidth: ve,
            }),
            Ie = fe()(
              ''.concat(A),
              Z,
              (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)(
                    (0, o.Z)(
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)({}, ''.concat(A, '-fixed'), l),
                          ''.concat(A, '-fixed-mix'),
                          L === 'mix' && !g && l,
                        ),
                        ''.concat(A, '-collapsed'),
                        e.collapsed,
                      ),
                      ''.concat(A, '-layout-').concat(L),
                      L && !g,
                    ),
                    ''.concat(A, '-light'),
                    f !== 'dark',
                  ),
                  ''.concat(A, '-mix'),
                  L === 'mix' && !g,
                ),
                ''.concat(A, '-stylish'),
                !!k,
              ),
            ),
            ye = Zn(e),
            Pe = _ && _(e),
            Re = (0, v.useMemo)(
              function () {
                return (
                  Q !== !1 &&
                  (0, v.createElement)(
                    Qn,
                    (0, s.Z)(
                      (0, s.Z)({}, e),
                      {},
                      {
                        key: 'base-menu',
                        mode: n && !g ? 'vertical' : 'inline',
                        handleOpenChange: J,
                        style: { width: '100%' },
                        className: ''.concat(A, '-menu ').concat(Z).trim(),
                      },
                    ),
                  )
                );
              },
              [A, Z, Q, J, e],
            ),
            we = (W || []).map(function (Ne, Ve) {
              return { className: ''.concat(A, '-link'), label: Ne, key: Ve };
            }),
            ze = (0, v.useMemo)(
              function () {
                return Q ? Q(e, Re) : Re;
              },
              [Q, Re, e],
            ),
            He = (0, v.useMemo)(
              function () {
                if (!S) return null;
                var Ne = S.title,
                  Ve = S.render,
                  Fe = (0, I.Z)(S, Da),
                  qt = (0, c.jsxs)('div', {
                    className: ''.concat(A, '-actions-avatar'),
                    children: [
                      (Fe != null && Fe.src) ||
                      (Fe != null && Fe.srcSet) ||
                      Fe.icon ||
                      Fe.children
                        ? (0, c.jsx)(Wn.C, (0, s.Z)({ size: 28 }, Fe))
                        : null,
                      S.title && !n && (0, c.jsx)('span', { children: Ne }),
                    ],
                  });
                return Ve ? Ve(S, qt, e) : qt;
              },
              [S, A, n],
            ),
            Oe = (0, v.useMemo)(
              function () {
                return ue
                  ? (0, c.jsx)(pa.Z, {
                      align: 'center',
                      size: 4,
                      direction: n ? 'vertical' : 'horizontal',
                      className: fe()([
                        ''.concat(A, '-actions-list'),
                        n && ''.concat(A, '-actions-list-collapsed'),
                        Z,
                      ]),
                      children: [ue == null ? void 0 : ue(e)]
                        .flat(1)
                        .map(function (Ne, Ve) {
                          return (0,
                          c.jsx)('div', { className: ''.concat(A, '-actions-list-item ').concat(Z).trim(), children: Ne }, Ve);
                        }),
                    })
                  : null;
              },
              [ue, A, n],
            ),
            Je = (0, v.useMemo)(
              function () {
                return (0, c.jsx)(Sn, {
                  onItemClick: e.itemClick,
                  appList: e.appList,
                  prefixCls: e.prefixCls,
                });
              },
              [e.appList, e.prefixCls],
            ),
            et = (0, v.useMemo)(
              function () {
                if (O === !1) return null;
                var Ne = (0, c.jsx)(ba, {
                  isMobile: g,
                  collapsed: a,
                  className: ''.concat(A, '-collapsed-button'),
                  onClick: function () {
                    d == null || d(!a);
                  },
                });
                return O ? O(n, Ne) : Ne;
              },
              [O, g, a, A, n, d],
            ),
            tt = (0, v.useMemo)(
              function () {
                return !He && !Oe
                  ? null
                  : (0, c.jsxs)('div', {
                      className: fe()(
                        ''.concat(A, '-actions'),
                        Z,
                        n && ''.concat(A, '-actions-collapsed'),
                      ),
                      children: [He, Oe],
                    });
              },
              [Oe, He, A, n, Z],
            ),
            nt = (0, v.useMemo)(
              function () {
                var Ne;
                return e != null &&
                  (Ne = e.menu) !== null &&
                  Ne !== void 0 &&
                  Ne.hideMenuWhenCollapsed &&
                  n
                  ? ''.concat(A, '-hide-menu-collapsed')
                  : null;
              },
              [
                A,
                n,
                e == null || (t = e.menu) === null || t === void 0
                  ? void 0
                  : t.hideMenuWhenCollapsed,
              ],
            ),
            wt = i && (i == null ? void 0 : i(e)),
            Qt = (0, c.jsxs)(c.Fragment, {
              children: [
                ye &&
                  (0, c.jsxs)('div', {
                    className: fe()([
                      fe()(
                        ''.concat(A, '-logo'),
                        Z,
                        (0, o.Z)({}, ''.concat(A, '-logo-collapsed'), n),
                      ),
                    ]),
                    onClick: Ze ? b : void 0,
                    id: 'logo',
                    style: me,
                    children: [ye, Je],
                  }),
                Pe &&
                  (0, c.jsx)('div', {
                    className: fe()([
                      ''.concat(A, '-extra'),
                      !ye && ''.concat(A, '-extra-no-logo'),
                      Z,
                    ]),
                    children: Pe,
                  }),
                (0, c.jsx)('div', {
                  style: { flex: 1, overflowY: 'auto', overflowX: 'hidden' },
                  children: ze,
                }),
                (0, c.jsxs)(Fa.Provider, {
                  value: {},
                  children: [
                    W
                      ? (0, c.jsx)('div', {
                          className: ''.concat(A, '-links ').concat(Z).trim(),
                          children: (0, c.jsx)(kn.Z, {
                            inlineIndent: 16,
                            className: ''
                              .concat(A, '-link-menu ')
                              .concat(Z)
                              .trim(),
                            selectedKeys: [],
                            openKeys: [],
                            theme: f,
                            mode: 'inline',
                            items: we,
                          }),
                        })
                      : null,
                    Ze &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          tt,
                          !Oe && E
                            ? (0, c.jsx)('div', {
                                className: fe()(
                                  ''.concat(A, '-actions'),
                                  Z,
                                  (0, o.Z)(
                                    {},
                                    ''.concat(A, '-actions-collapsed'),
                                    n,
                                  ),
                                ),
                                children: E == null ? void 0 : E(e),
                              })
                            : null,
                        ],
                      }),
                    wt &&
                      (0, c.jsx)('div', {
                        className: fe()([
                          ''.concat(A, '-footer'),
                          Z,
                          (0, o.Z)({}, ''.concat(A, '-footer-collapsed'), n),
                        ]),
                        children: wt,
                      }),
                  ],
                }),
              ],
            });
          return pe.wrapSSR(
            (0, c.jsxs)(c.Fragment, {
              children: [
                l &&
                  !g &&
                  !nt &&
                  (0, c.jsx)('div', {
                    style: (0, s.Z)(
                      {
                        width: n ? ve : m,
                        overflow: 'hidden',
                        flex: '0 0 '.concat(n ? ve : m, 'px'),
                        maxWidth: n ? ve : m,
                        minWidth: n ? ve : m,
                        transition: 'all 0.2s ease 0s',
                      },
                      F,
                    ),
                  }),
                (0, c.jsxs)(za, {
                  collapsible: !0,
                  trigger: null,
                  collapsed: n,
                  breakpoint: P === !1 ? void 0 : P,
                  onCollapse: function (Ve) {
                    g || d == null || d(Ve);
                  },
                  collapsedWidth: ve,
                  style: F,
                  theme: f,
                  width: m,
                  className: fe()(Ie, Z, nt),
                  children: [
                    nt
                      ? (0, c.jsx)('div', {
                          className: ''
                            .concat(A, '-hide-when-collapsed ')
                            .concat(Z)
                            .trim(),
                          style: {
                            height: '100%',
                            width: '100%',
                            opacity: nt ? 0 : 1,
                          },
                          children: Qt,
                        })
                      : Qt,
                    et,
                  ],
                }),
              ],
            }),
          );
        },
        Wa = u(97384),
        ka = u(31774),
        Ua = function (e) {
          var t, n, a, l, i;
          return (0, o.Z)({}, e.componentCls, {
            '&-header-actions': {
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              '&-item': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBlock: 0,
                paddingInline: 2,
                color:
                  (t = e.layout) === null ||
                  t === void 0 ||
                  (t = t.header) === null ||
                  t === void 0
                    ? void 0
                    : t.colorTextRightActionsItem,
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: e.borderRadius,
                '> *': {
                  paddingInline: 6,
                  paddingBlock: 6,
                  borderRadius: e.borderRadius,
                  '&:hover': {
                    backgroundColor:
                      (n = e.layout) === null ||
                      n === void 0 ||
                      (n = n.header) === null ||
                      n === void 0
                        ? void 0
                        : n.colorBgRightActionsItemHover,
                  },
                },
              },
              '&-avatar': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInlineStart: e.padding,
                paddingInlineEnd: e.padding,
                cursor: 'pointer',
                color:
                  (a = e.layout) === null ||
                  a === void 0 ||
                  (a = a.header) === null ||
                  a === void 0
                    ? void 0
                    : a.colorTextRightActionsItem,
                '> div': {
                  height: '44px',
                  color:
                    (l = e.layout) === null ||
                    l === void 0 ||
                    (l = l.header) === null ||
                    l === void 0
                      ? void 0
                      : l.colorTextRightActionsItem,
                  paddingInline: 8,
                  paddingBlock: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: '44px',
                  borderRadius: e.borderRadius,
                  '&:hover': {
                    backgroundColor:
                      (i = e.layout) === null ||
                      i === void 0 ||
                      (i = i.header) === null ||
                      i === void 0
                        ? void 0
                        : i.colorBgRightActionsItemHover,
                  },
                },
              },
            },
          });
        };
      function Ka(r) {
        return (0, Ae.Xj)('ProLayoutRightContent', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [Ua(t)];
        });
      }
      var _a = [
          'rightContentRender',
          'avatarProps',
          'actionsRender',
          'headerContentRender',
        ],
        Ga = ['title', 'render'],
        tr = function (e) {
          var t = e.rightContentRender,
            n = e.avatarProps,
            a = e.actionsRender,
            l = e.headerContentRender,
            i = (0, I.Z)(e, _a),
            d = (0, v.useContext)(Ge.ZP.ConfigContext),
            f = d.getPrefixCls,
            m = ''.concat(f(), '-pro-global-header'),
            g = Ka(m),
            b = g.wrapSSR,
            y = g.hashId,
            P = (0, v.useState)('auto'),
            F = (0, p.Z)(P, 2),
            L = F[0],
            N = F[1],
            _ = (0, v.useMemo)(
              function () {
                if (!n) return null;
                var G = n.title,
                  S = n.render,
                  E = (0, I.Z)(n, Ga),
                  ue = [
                    (E != null && E.src) ||
                    (E != null && E.srcSet) ||
                    E.icon ||
                    E.children
                      ? (0, v.createElement)(
                          Wn.C,
                          (0, s.Z)(
                            (0, s.Z)({}, E),
                            {},
                            { size: 28, key: 'avatar' },
                          ),
                        )
                      : null,
                    G
                      ? (0, c.jsx)(
                          'span',
                          { style: { marginInlineStart: 8 }, children: G },
                          'name',
                        )
                      : void 0,
                  ];
                return S
                  ? S(n, (0, c.jsx)('div', { children: ue }), i)
                  : (0, c.jsx)('div', { children: ue });
              },
              [n],
            ),
            W =
              a || _
                ? function (G) {
                    var S = a && (a == null ? void 0 : a(G));
                    return !S && !_
                      ? null
                      : Array.isArray(S)
                      ? b(
                          (0, c.jsxs)('div', {
                            className: ''
                              .concat(m, '-header-actions ')
                              .concat(y)
                              .trim(),
                            children: [
                              S.filter(Boolean).map(function (E, ue) {
                                var J = !1;
                                if (v.isValidElement(E)) {
                                  var k;
                                  J = !!(
                                    E != null &&
                                    (k = E.props) !== null &&
                                    k !== void 0 &&
                                    k['aria-hidden']
                                  );
                                }
                                return (0,
                                c.jsx)('div', { className: fe()(''.concat(m, '-header-actions-item ').concat(y), (0, o.Z)({}, ''.concat(m, '-header-actions-hover'), !J)), children: E }, ue);
                              }),
                              _ &&
                                (0, c.jsx)('span', {
                                  className: ''
                                    .concat(m, '-header-actions-avatar ')
                                    .concat(y)
                                    .trim(),
                                  children: _,
                                }),
                            ],
                          }),
                        )
                      : b(
                          (0, c.jsxs)('div', {
                            className: ''
                              .concat(m, '-header-actions ')
                              .concat(y)
                              .trim(),
                            children: [
                              S,
                              _ &&
                                (0, c.jsx)('span', {
                                  className: ''
                                    .concat(m, '-header-actions-avatar ')
                                    .concat(y)
                                    .trim(),
                                  children: _,
                                }),
                            ],
                          }),
                        );
                  }
                : void 0,
            Q = (0, Wa.D)(
              (function () {
                var G = (0, M.Z)(
                  (0, C.Z)().mark(function S(E) {
                    return (0, C.Z)().wrap(function (J) {
                      for (;;)
                        switch ((J.prev = J.next)) {
                          case 0:
                            N(E);
                          case 1:
                          case 'end':
                            return J.stop();
                        }
                    }, S);
                  }),
                );
                return function (S) {
                  return G.apply(this, arguments);
                };
              })(),
              160,
            ),
            O = W || t;
          return (0, c.jsx)('div', {
            className: ''.concat(m, '-right-content ').concat(y).trim(),
            style: { minWidth: L, height: '100%' },
            children: (0, c.jsx)('div', {
              style: { height: '100%' },
              children: (0, c.jsx)(ka.Z, {
                onResize: function (S) {
                  var E = S.width;
                  Q.run(E);
                },
                children: O
                  ? (0, c.jsx)('div', {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'flex-end',
                      },
                      children: O(
                        (0, s.Z)((0, s.Z)({}, i), {}, { rightContentSize: L }),
                      ),
                    })
                  : null,
              }),
            }),
          });
        },
        Va = function (e) {
          var t, n;
          return (0, o.Z)({}, e.componentCls, {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            '.anticon': { color: 'inherit' },
            '&-main': {
              display: 'flex',
              height: '100%',
              paddingInlineStart: '16px',
              '&-left': (0, o.Z)(
                { display: 'flex', alignItems: 'center' },
                ''.concat(e.proComponentsCls, '-layout-apps-icon'),
                { marginInlineEnd: 16, marginInlineStart: -8 },
              ),
            },
            '&-wide': { maxWidth: 1152, margin: '0 auto' },
            '&-logo': {
              position: 'relative',
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              overflow: 'hidden',
              '> *:first-child': {
                display: 'flex',
                alignItems: 'center',
                minHeight: '22px',
                fontSize: '22px',
              },
              '> *:first-child > img': {
                display: 'inline-block',
                height: '32px',
                verticalAlign: 'middle',
              },
              '> *:first-child > h1': {
                display: 'inline-block',
                marginBlock: 0,
                marginInline: 0,
                lineHeight: '24px',
                marginInlineStart: 6,
                fontWeight: '600',
                fontSize: '16px',
                color:
                  (t = e.layout) === null ||
                  t === void 0 ||
                  (t = t.header) === null ||
                  t === void 0
                    ? void 0
                    : t.colorHeaderTitle,
                verticalAlign: 'top',
              },
            },
            '&-menu': {
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              paddingInline: 6,
              paddingBlock: 6,
              lineHeight: ''.concat(
                Math.max(
                  (((n = e.layout) === null ||
                  n === void 0 ||
                  (n = n.header) === null ||
                  n === void 0
                    ? void 0
                    : n.heightLayoutHeader) || 56) - 12,
                  40,
                ),
                'px',
              ),
            },
          });
        };
      function Xa(r) {
        return (0, Ae.Xj)('ProLayoutTopNavHeader', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [Va(t)];
        });
      }
      var nr = function (e) {
          var t,
            n,
            a,
            l,
            i,
            d,
            f,
            m = (0, v.useRef)(null),
            g = e.onMenuHeaderClick,
            b = e.contentWidth,
            y = e.rightContentRender,
            P = e.className,
            F = e.style,
            L = e.headerContentRender,
            N = e.layout,
            _ = e.actionsRender,
            W = (0, v.useContext)(Ge.ZP.ConfigContext),
            Q = W.getPrefixCls,
            O = (0, v.useContext)(w.L_),
            G = O.dark,
            S = ''.concat(e.prefixCls || Q('pro'), '-top-nav-header'),
            E = Xa(S),
            ue = E.wrapSSR,
            J = E.hashId,
            k = void 0;
          e.menuHeaderRender !== void 0
            ? (k = 'menuHeaderRender')
            : (N === 'mix' || N === 'top') && (k = 'headerTitleRender');
          var me = Zn((0, s.Z)((0, s.Z)({}, e), {}, { collapsed: !1 }), k),
            xe = (0, v.useContext)(w.L_),
            Z = xe.token,
            Ze = (0, v.useMemo)(
              function () {
                var A,
                  ve,
                  pe,
                  Ie,
                  ye,
                  Pe,
                  Re,
                  we,
                  ze,
                  He,
                  Oe,
                  Je,
                  et,
                  tt = (0, c.jsx)(Ge.ZP, {
                    theme: {
                      hashed: (0, w.nu)(),
                      components: {
                        Layout: {
                          headerBg: 'transparent',
                          bodyBg: 'transparent',
                        },
                        Menu: (0, s.Z)(
                          {},
                          D({
                            colorItemBg:
                              ((A = Z.layout) === null ||
                              A === void 0 ||
                              (A = A.header) === null ||
                              A === void 0
                                ? void 0
                                : A.colorBgHeader) || 'transparent',
                            colorSubItemBg:
                              ((ve = Z.layout) === null ||
                              ve === void 0 ||
                              (ve = ve.header) === null ||
                              ve === void 0
                                ? void 0
                                : ve.colorBgHeader) || 'transparent',
                            radiusItem: Z.borderRadius,
                            colorItemBgSelected:
                              ((pe = Z.layout) === null ||
                              pe === void 0 ||
                              (pe = pe.header) === null ||
                              pe === void 0
                                ? void 0
                                : pe.colorBgMenuItemSelected) ||
                              (Z == null ? void 0 : Z.colorBgTextHover),
                            itemHoverBg:
                              ((Ie = Z.layout) === null ||
                              Ie === void 0 ||
                              (Ie = Ie.header) === null ||
                              Ie === void 0
                                ? void 0
                                : Ie.colorBgMenuItemHover) ||
                              (Z == null ? void 0 : Z.colorBgTextHover),
                            colorItemBgSelectedHorizontal:
                              ((ye = Z.layout) === null ||
                              ye === void 0 ||
                              (ye = ye.header) === null ||
                              ye === void 0
                                ? void 0
                                : ye.colorBgMenuItemSelected) ||
                              (Z == null ? void 0 : Z.colorBgTextHover),
                            colorActiveBarWidth: 0,
                            colorActiveBarHeight: 0,
                            colorActiveBarBorderSize: 0,
                            colorItemText:
                              ((Pe = Z.layout) === null ||
                              Pe === void 0 ||
                              (Pe = Pe.header) === null ||
                              Pe === void 0
                                ? void 0
                                : Pe.colorTextMenu) ||
                              (Z == null ? void 0 : Z.colorTextSecondary),
                            colorItemTextHoverHorizontal:
                              ((Re = Z.layout) === null ||
                              Re === void 0 ||
                              (Re = Re.header) === null ||
                              Re === void 0
                                ? void 0
                                : Re.colorTextMenuActive) ||
                              (Z == null ? void 0 : Z.colorText),
                            colorItemTextSelectedHorizontal:
                              ((we = Z.layout) === null ||
                              we === void 0 ||
                              (we = we.header) === null ||
                              we === void 0
                                ? void 0
                                : we.colorTextMenuSelected) ||
                              (Z == null ? void 0 : Z.colorTextBase),
                            horizontalItemBorderRadius: 4,
                            colorItemTextHover:
                              ((ze = Z.layout) === null ||
                              ze === void 0 ||
                              (ze = ze.header) === null ||
                              ze === void 0
                                ? void 0
                                : ze.colorTextMenuActive) ||
                              'rgba(0, 0, 0, 0.85)',
                            horizontalItemHoverBg:
                              ((He = Z.layout) === null ||
                              He === void 0 ||
                              (He = He.header) === null ||
                              He === void 0
                                ? void 0
                                : He.colorBgMenuItemHover) ||
                              'rgba(0, 0, 0, 0.04)',
                            colorItemTextSelected:
                              ((Oe = Z.layout) === null ||
                              Oe === void 0 ||
                              (Oe = Oe.header) === null ||
                              Oe === void 0
                                ? void 0
                                : Oe.colorTextMenuSelected) ||
                              'rgba(0, 0, 0, 1)',
                            popupBg: Z == null ? void 0 : Z.colorBgElevated,
                            subMenuItemBg:
                              Z == null ? void 0 : Z.colorBgElevated,
                            darkSubMenuItemBg: 'transparent',
                            darkPopupBg: Z == null ? void 0 : Z.colorBgElevated,
                          }),
                        ),
                      },
                      token: {
                        colorBgElevated:
                          ((Je = Z.layout) === null ||
                          Je === void 0 ||
                          (Je = Je.header) === null ||
                          Je === void 0
                            ? void 0
                            : Je.colorBgHeader) || 'transparent',
                      },
                    },
                    children: (0, c.jsx)(
                      Qn,
                      (0, s.Z)(
                        (0, s.Z)(
                          (0, s.Z)({ theme: G ? 'dark' : 'light' }, e),
                          {},
                          {
                            className: ''
                              .concat(S, '-base-menu ')
                              .concat(J)
                              .trim(),
                          },
                          e.menuProps,
                        ),
                        {},
                        {
                          style: (0, s.Z)(
                            { width: '100%' },
                            (et = e.menuProps) === null || et === void 0
                              ? void 0
                              : et.style,
                          ),
                          collapsed: !1,
                          menuRenderType: 'header',
                          mode: 'horizontal',
                        },
                      ),
                    ),
                  });
                return L ? L(e, tt) : tt;
              },
              [
                (t = Z.layout) === null ||
                t === void 0 ||
                (t = t.header) === null ||
                t === void 0
                  ? void 0
                  : t.colorBgHeader,
                (n = Z.layout) === null ||
                n === void 0 ||
                (n = n.header) === null ||
                n === void 0
                  ? void 0
                  : n.colorBgMenuItemSelected,
                (a = Z.layout) === null ||
                a === void 0 ||
                (a = a.header) === null ||
                a === void 0
                  ? void 0
                  : a.colorBgMenuItemHover,
                (l = Z.layout) === null ||
                l === void 0 ||
                (l = l.header) === null ||
                l === void 0
                  ? void 0
                  : l.colorTextMenu,
                (i = Z.layout) === null ||
                i === void 0 ||
                (i = i.header) === null ||
                i === void 0
                  ? void 0
                  : i.colorTextMenuActive,
                (d = Z.layout) === null ||
                d === void 0 ||
                (d = d.header) === null ||
                d === void 0
                  ? void 0
                  : d.colorTextMenuSelected,
                (f = Z.layout) === null ||
                f === void 0 ||
                (f = f.header) === null ||
                f === void 0
                  ? void 0
                  : f.colorBgMenuElevated,
                Z.borderRadius,
                Z == null ? void 0 : Z.colorBgTextHover,
                Z == null ? void 0 : Z.colorTextSecondary,
                Z == null ? void 0 : Z.colorText,
                Z == null ? void 0 : Z.colorTextBase,
                Z.colorBgElevated,
                G,
                e,
                S,
                J,
                L,
              ],
            );
          return ue(
            (0, c.jsx)('div', {
              className: fe()(
                S,
                J,
                P,
                (0, o.Z)({}, ''.concat(S, '-light'), !0),
              ),
              style: F,
              children: (0, c.jsxs)('div', {
                ref: m,
                className: fe()(
                  ''.concat(S, '-main'),
                  J,
                  (0, o.Z)(
                    {},
                    ''.concat(S, '-wide'),
                    b === 'Fixed' && N === 'top',
                  ),
                ),
                children: [
                  me &&
                    (0, c.jsxs)('div', {
                      className: fe()(''.concat(S, '-main-left ').concat(J)),
                      onClick: g,
                      children: [
                        (0, c.jsx)(Sn, (0, s.Z)({}, e)),
                        (0, c.jsx)(
                          'div',
                          {
                            className: ''.concat(S, '-logo ').concat(J).trim(),
                            id: 'logo',
                            children: me,
                          },
                          'logo',
                        ),
                      ],
                    }),
                  (0, c.jsx)('div', {
                    style: { flex: 1 },
                    className: ''.concat(S, '-menu ').concat(J).trim(),
                    children: Ze,
                  }),
                  (y || _ || e.avatarProps) &&
                    (0, c.jsx)(
                      tr,
                      (0, s.Z)(
                        (0, s.Z)({ rightContentRender: y }, e),
                        {},
                        { prefixCls: S },
                      ),
                    ),
                ],
              }),
            }),
          );
        },
        Ja = function (e) {
          var t, n, a;
          return (0, o.Z)(
            {},
            e.componentCls,
            (0, o.Z)(
              (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)(
                    {
                      position: 'relative',
                      background: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      marginBlock: 0,
                      marginInline: 16,
                      height:
                        ((t = e.layout) === null ||
                        t === void 0 ||
                        (t = t.header) === null ||
                        t === void 0
                          ? void 0
                          : t.heightLayoutHeader) || 56,
                      boxSizing: 'border-box',
                      '> a': { height: '100%' },
                    },
                    ''.concat(e.proComponentsCls, '-layout-apps-icon'),
                    { marginInlineEnd: 16 },
                  ),
                  '&-collapsed-button',
                  {
                    minHeight: '22px',
                    color:
                      (n = e.layout) === null ||
                      n === void 0 ||
                      (n = n.header) === null ||
                      n === void 0
                        ? void 0
                        : n.colorHeaderTitle,
                    fontSize: '18px',
                    marginInlineEnd: '16px',
                  },
                ),
                '&-logo',
                {
                  position: 'relative',
                  marginInlineEnd: '16px',
                  a: {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    minHeight: '22px',
                    fontSize: '20px',
                  },
                  img: { height: '28px' },
                  h1: {
                    height: '32px',
                    marginBlock: 0,
                    marginInline: 0,
                    marginInlineStart: 8,
                    fontWeight: '600',
                    color:
                      ((a = e.layout) === null ||
                      a === void 0 ||
                      (a = a.header) === null ||
                      a === void 0
                        ? void 0
                        : a.colorHeaderTitle) || e.colorTextHeading,
                    fontSize: '18px',
                    lineHeight: '32px',
                  },
                  '&-mix': { display: 'flex', alignItems: 'center' },
                },
              ),
              '&-logo-mobile',
              { minWidth: '24px', marginInlineEnd: 0 },
            ),
          );
        };
      function Ya(r) {
        return (0, Ae.Xj)('ProLayoutGlobalHeader', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [Ja(t)];
        });
      }
      var Qa = function (e, t) {
          return e === !1 ? null : e ? e(t, null) : t;
        },
        qa = function (e) {
          var t = e.isMobile,
            n = e.logo,
            a = e.collapsed,
            l = e.onCollapse,
            i = e.rightContentRender,
            d = e.menuHeaderRender,
            f = e.onMenuHeaderClick,
            m = e.className,
            g = e.style,
            b = e.layout,
            y = e.children,
            P = e.splitMenus,
            F = e.menuData,
            L = e.prefixCls,
            N = (0, v.useContext)(Ge.ZP.ConfigContext),
            _ = N.getPrefixCls,
            W = N.direction,
            Q = ''.concat(L || _('pro'), '-global-header'),
            O = Ya(Q),
            G = O.wrapSSR,
            S = O.hashId,
            E = fe()(m, Q, S);
          if (b === 'mix' && !t && P) {
            var ue = (F || []).map(function (xe) {
                return (0,
                s.Z)((0, s.Z)({}, xe), {}, { children: void 0, routes: void 0 });
              }),
              J = Vt(ue);
            return (0, c.jsx)(
              nr,
              (0, s.Z)(
                (0, s.Z)({ mode: 'horizontal' }, e),
                {},
                { splitMenus: !1, menuData: J },
              ),
            );
          }
          var k = fe()(
              ''.concat(Q, '-logo'),
              S,
              (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)({}, ''.concat(Q, '-logo-rtl'), W === 'rtl'),
                  ''.concat(Q, '-logo-mix'),
                  b === 'mix',
                ),
                ''.concat(Q, '-logo-mobile'),
                t,
              ),
            ),
            me = (0, c.jsx)(
              'span',
              { className: k, children: (0, c.jsx)('a', { children: bn(n) }) },
              'logo',
            );
          return G(
            (0, c.jsxs)('div', {
              className: E,
              style: (0, s.Z)({}, g),
              children: [
                t &&
                  (0, c.jsx)('span', {
                    className: ''
                      .concat(Q, '-collapsed-button ')
                      .concat(S)
                      .trim(),
                    onClick: function () {
                      l == null || l(!a);
                    },
                    children: (0, c.jsx)(ia, {}),
                  }),
                t && Qa(d, me),
                b === 'mix' &&
                  !t &&
                  (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsx)(Sn, (0, s.Z)({}, e)),
                      (0, c.jsx)('div', {
                        className: k,
                        onClick: f,
                        children: Zn(
                          (0, s.Z)((0, s.Z)({}, e), {}, { collapsed: !1 }),
                          'headerTitleRender',
                        ),
                      }),
                    ],
                  }),
                (0, c.jsx)('div', { style: { flex: 1 }, children: y }),
                (i || e.actionsRender || e.avatarProps) &&
                  (0, c.jsx)(tr, (0, s.Z)({ rightContentRender: i }, e)),
              ],
            }),
          );
        },
        eo = function (e) {
          var t, n, a, l;
          return (0, o.Z)(
            {},
            ''.concat(e.proComponentsCls, '-layout'),
            (0, o.Z)(
              {},
              ''.concat(e.antCls, '-layout-header').concat(e.componentCls),
              {
                height:
                  ((t = e.layout) === null ||
                  t === void 0 ||
                  (t = t.header) === null ||
                  t === void 0
                    ? void 0
                    : t.heightLayoutHeader) || 56,
                lineHeight: ''.concat(
                  ((n = e.layout) === null ||
                  n === void 0 ||
                  (n = n.header) === null ||
                  n === void 0
                    ? void 0
                    : n.heightLayoutHeader) || 56,
                  'px',
                ),
                zIndex: 19,
                width: '100%',
                paddingBlock: 0,
                paddingInline: 0,
                borderBlockEnd: '1px solid '.concat(e.colorSplit),
                backgroundColor:
                  ((a = e.layout) === null ||
                  a === void 0 ||
                  (a = a.header) === null ||
                  a === void 0
                    ? void 0
                    : a.colorBgHeader) || 'rgba(255, 255, 255, 0.4)',
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                transition:
                  'background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                '&-fixed-header': {
                  position: 'fixed',
                  insetBlockStart: 0,
                  width: '100%',
                  zIndex: 100,
                  insetInlineEnd: 0,
                },
                '&-fixed-header-scroll': {
                  backgroundColor:
                    ((l = e.layout) === null ||
                    l === void 0 ||
                    (l = l.header) === null ||
                    l === void 0
                      ? void 0
                      : l.colorBgScrollHeader) || 'rgba(255, 255, 255, 0.8)',
                },
                '&-header-actions': {
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16',
                  cursor: 'pointer',
                  '& &-item': {
                    paddingBlock: 0,
                    paddingInline: 8,
                    '&:hover': { color: e.colorText },
                  },
                },
                '&-header-realDark': {
                  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)',
                },
                '&-header-actions-header-action': {
                  transition: 'width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                },
              },
            ),
          );
        };
      function to(r) {
        return (0, Ae.Xj)('ProLayoutHeader', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [eo(t)];
        });
      }
      function no(r, e) {
        var t = e.stylish,
          n = e.proLayoutCollapsedWidth;
        return (0, Ae.Xj)('ProLayoutHeaderStylish', function (a) {
          var l = (0, s.Z)(
            (0, s.Z)({}, a),
            {},
            { componentCls: '.'.concat(r), proLayoutCollapsedWidth: n },
          );
          return t
            ? [
                (0, o.Z)(
                  {},
                  'div'.concat(a.proComponentsCls, '-layout'),
                  (0, o.Z)(
                    {},
                    ''.concat(l.componentCls),
                    t == null ? void 0 : t(l),
                  ),
                ),
              ]
            : [];
        });
      }
      var rr = ct.Header,
        ro = function (e) {
          var t,
            n,
            a,
            l = e.isMobile,
            i = e.fixedHeader,
            d = e.className,
            f = e.style,
            m = e.collapsed,
            g = e.prefixCls,
            b = e.onCollapse,
            y = e.layout,
            P = e.headerRender,
            F = e.headerContentRender,
            L = (0, v.useContext)(w.L_),
            N = L.token,
            _ = (0, v.useContext)(Ge.ZP.ConfigContext),
            W = (0, v.useState)(!1),
            Q = (0, p.Z)(W, 2),
            O = Q[0],
            G = Q[1],
            S = i || y === 'mix',
            E = (0, v.useCallback)(
              function () {
                var A = y === 'top',
                  ve = Vt(e.menuData || []),
                  pe = (0, c.jsx)(
                    qa,
                    (0, s.Z)(
                      (0, s.Z)({ onCollapse: b }, e),
                      {},
                      { menuData: ve, children: F && F(e, null) },
                    ),
                  );
                return (
                  A &&
                    !l &&
                    (pe = (0, c.jsx)(
                      nr,
                      (0, s.Z)(
                        (0, s.Z)({ mode: 'horizontal', onCollapse: b }, e),
                        {},
                        { menuData: ve },
                      ),
                    )),
                  P && typeof P == 'function' ? P(e, pe) : pe
                );
              },
              [F, P, l, y, b, e],
            );
          (0, v.useEffect)(
            function () {
              var A,
                ve =
                  (_ == null ||
                  (A = _.getTargetContainer) === null ||
                  A === void 0
                    ? void 0
                    : A.call(_)) || document.body,
                pe = function () {
                  var ye,
                    Pe = ve.scrollTop;
                  return Pe >
                    (((ye = N.layout) === null ||
                    ye === void 0 ||
                    (ye = ye.header) === null ||
                    ye === void 0
                      ? void 0
                      : ye.heightLayoutHeader) || 56) && !O
                    ? (G(!0), !0)
                    : (O && G(!1), !1);
                };
              if (S && typeof window != 'undefined')
                return (
                  ve.addEventListener('scroll', pe, { passive: !0 }),
                  function () {
                    ve.removeEventListener('scroll', pe);
                  }
                );
            },
            [
              (t = N.layout) === null ||
              t === void 0 ||
              (t = t.header) === null ||
              t === void 0
                ? void 0
                : t.heightLayoutHeader,
              S,
              O,
            ],
          );
          var ue = y === 'top',
            J = ''.concat(g, '-layout-header'),
            k = to(J),
            me = k.wrapSSR,
            xe = k.hashId,
            Z = no(''.concat(J, '.').concat(J, '-stylish'), {
              proLayoutCollapsedWidth: 64,
              stylish: e.stylish,
            }),
            Ze = fe()(
              d,
              xe,
              J,
              (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)(
                    (0, o.Z)(
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)({}, ''.concat(J, '-fixed-header'), S),
                          ''.concat(J, '-fixed-header-scroll'),
                          O,
                        ),
                        ''.concat(J, '-mix'),
                        y === 'mix',
                      ),
                      ''.concat(J, '-fixed-header-action'),
                      !m,
                    ),
                    ''.concat(J, '-top-menu'),
                    ue,
                  ),
                  ''.concat(J, '-header'),
                  !0,
                ),
                ''.concat(J, '-stylish'),
                !!e.stylish,
              ),
            );
          return y === 'side' && !l
            ? null
            : Z.wrapSSR(
                me(
                  (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)(Ge.ZP, {
                      theme: {
                        hashed: (0, w.nu)(),
                        components: {
                          Layout: {
                            headerBg: 'transparent',
                            bodyBg: 'transparent',
                          },
                        },
                      },
                      children: [
                        S &&
                          (0, c.jsx)(rr, {
                            style: (0, s.Z)(
                              {
                                height:
                                  ((n = N.layout) === null ||
                                  n === void 0 ||
                                  (n = n.header) === null ||
                                  n === void 0
                                    ? void 0
                                    : n.heightLayoutHeader) || 56,
                                lineHeight: ''.concat(
                                  ((a = N.layout) === null ||
                                  a === void 0 ||
                                  (a = a.header) === null ||
                                  a === void 0
                                    ? void 0
                                    : a.heightLayoutHeader) || 56,
                                  'px',
                                ),
                                backgroundColor: 'transparent',
                                zIndex: 19,
                              },
                              f,
                            ),
                          }),
                        (0, c.jsx)(rr, {
                          className: Ze,
                          style: f,
                          children: E(),
                        }),
                      ],
                    }),
                  }),
                ),
              );
        },
        ao = u(11986),
        oo = u(41003),
        ar = new yn.E4('antBadgeLoadingCircle', {
          '0%': { display: 'none', opacity: 0, overflow: 'hidden' },
          '80%': { overflow: 'hidden' },
          '100%': { display: 'unset', opacity: 1 },
        }),
        io = function (e) {
          var t, n, a, l, i, d, f, m, g, b, y, P;
          return (0, o.Z)(
            {},
            ''.concat(e.proComponentsCls, '-layout'),
            (0, o.Z)(
              (0, o.Z)(
                (0, o.Z)(
                  {},
                  ''.concat(e.antCls, '-layout-sider').concat(e.componentCls),
                  {
                    background:
                      ((t = e.layout) === null ||
                      t === void 0 ||
                      (t = t.sider) === null ||
                      t === void 0
                        ? void 0
                        : t.colorMenuBackground) || 'transparent',
                  },
                ),
                e.componentCls,
                (0, o.Z)(
                  (0, o.Z)(
                    (0, o.Z)(
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  {
                                    position: 'relative',
                                    boxSizing: 'border-box',
                                    '&-menu': {
                                      position: 'relative',
                                      zIndex: 10,
                                      minHeight: '100%',
                                    },
                                  },
                                  '& '.concat(
                                    e.antCls,
                                    '-layout-sider-children',
                                  ),
                                  {
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    paddingInline:
                                      (n = e.layout) === null ||
                                      n === void 0 ||
                                      (n = n.sider) === null ||
                                      n === void 0
                                        ? void 0
                                        : n.paddingInlineLayoutMenu,
                                    paddingBlock:
                                      (a = e.layout) === null ||
                                      a === void 0 ||
                                      (a = a.sider) === null ||
                                      a === void 0
                                        ? void 0
                                        : a.paddingBlockLayoutMenu,
                                    borderInlineEnd: '1px solid '.concat(
                                      e.colorSplit,
                                    ),
                                    marginInlineEnd: -1,
                                  },
                                ),
                                ''.concat(e.antCls, '-menu'),
                                (0, o.Z)(
                                  (0, o.Z)(
                                    {},
                                    ''.concat(
                                      e.antCls,
                                      '-menu-item-group-title',
                                    ),
                                    {
                                      fontSize: e.fontSizeSM,
                                      paddingBottom: 4,
                                    },
                                  ),
                                  ''
                                    .concat(e.antCls, '-menu-item:not(')
                                    .concat(
                                      e.antCls,
                                      '-menu-item-selected):hover',
                                    ),
                                  {
                                    color:
                                      (l = e.layout) === null ||
                                      l === void 0 ||
                                      (l = l.sider) === null ||
                                      l === void 0
                                        ? void 0
                                        : l.colorTextMenuItemHover,
                                  },
                                ),
                              ),
                              '&-logo',
                              {
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingInline: 12,
                                paddingBlock: 16,
                                color:
                                  (i = e.layout) === null ||
                                  i === void 0 ||
                                  (i = i.sider) === null ||
                                  i === void 0
                                    ? void 0
                                    : i.colorTextMenu,
                                cursor: 'pointer',
                                borderBlockEnd: '1px solid '.concat(
                                  (d = e.layout) === null ||
                                    d === void 0 ||
                                    (d = d.sider) === null ||
                                    d === void 0
                                    ? void 0
                                    : d.colorMenuItemDivider,
                                ),
                                '> a': {
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  minHeight: 22,
                                  fontSize: 22,
                                  '> img': {
                                    display: 'inline-block',
                                    height: 22,
                                    verticalAlign: 'middle',
                                  },
                                  '> h1': {
                                    display: 'inline-block',
                                    height: 22,
                                    marginBlock: 0,
                                    marginInlineEnd: 0,
                                    marginInlineStart: 6,
                                    color:
                                      (f = e.layout) === null ||
                                      f === void 0 ||
                                      (f = f.sider) === null ||
                                      f === void 0
                                        ? void 0
                                        : f.colorTextMenuTitle,
                                    animationName: ar,
                                    animationDuration: '.4s',
                                    animationTimingFunction: 'ease',
                                    fontWeight: 600,
                                    fontSize: 16,
                                    lineHeight: '22px',
                                    verticalAlign: 'middle',
                                  },
                                },
                                '&-collapsed': (0, o.Z)(
                                  {
                                    flexDirection: 'column-reverse',
                                    margin: 0,
                                    padding: 12,
                                  },
                                  ''.concat(
                                    e.proComponentsCls,
                                    '-layout-apps-icon',
                                  ),
                                  {
                                    marginBlockEnd: 8,
                                    fontSize: 16,
                                    transition:
                                      'font-size 0.2s ease-in-out,color 0.2s ease-in-out',
                                  },
                                ),
                              },
                            ),
                            '&-actions',
                            {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBlock: 4,
                              marginInline: 0,
                              color:
                                (m = e.layout) === null ||
                                m === void 0 ||
                                (m = m.sider) === null ||
                                m === void 0
                                  ? void 0
                                  : m.colorTextMenu,
                              '&-collapsed': {
                                flexDirection: 'column-reverse',
                                paddingBlock: 0,
                                paddingInline: 8,
                                fontSize: 16,
                                transition: 'font-size 0.3s ease-in-out',
                              },
                              '&-list': {
                                color:
                                  (g = e.layout) === null ||
                                  g === void 0 ||
                                  (g = g.sider) === null ||
                                  g === void 0
                                    ? void 0
                                    : g.colorTextMenuSecondary,
                                '&-collapsed': {
                                  marginBlockEnd: 8,
                                  animationName: 'none',
                                },
                                '&-item': {
                                  paddingInline: 6,
                                  paddingBlock: 6,
                                  lineHeight: '16px',
                                  fontSize: 16,
                                  cursor: 'pointer',
                                  borderRadius: e.borderRadius,
                                  '&:hover': { background: e.colorBgTextHover },
                                },
                              },
                              '&-avatar': {
                                fontSize: 14,
                                paddingInline: 8,
                                paddingBlock: 8,
                                display: 'flex',
                                alignItems: 'center',
                                gap: e.marginXS,
                                borderRadius: e.borderRadius,
                                '& *': { cursor: 'pointer' },
                                '&:hover': { background: e.colorBgTextHover },
                              },
                            },
                          ),
                          '&-hide-menu-collapsed',
                          {
                            insetInlineStart: '-'.concat(
                              e.proLayoutCollapsedWidth - 12,
                              'px',
                            ),
                            position: 'absolute',
                          },
                        ),
                        '&-extra',
                        {
                          marginBlockEnd: 16,
                          marginBlock: 0,
                          marginInline: 16,
                          '&-no-logo': { marginBlockStart: 16 },
                        },
                      ),
                      '&-links',
                      { width: '100%', ul: { height: 'auto' } },
                    ),
                    '&-link-menu',
                    {
                      border: 'none',
                      boxShadow: 'none',
                      background: 'transparent',
                    },
                  ),
                  '&-footer',
                  {
                    color:
                      (b = e.layout) === null ||
                      b === void 0 ||
                      (b = b.sider) === null ||
                      b === void 0
                        ? void 0
                        : b.colorTextMenuSecondary,
                    paddingBlockEnd: 16,
                    fontSize: e.fontSize,
                    animationName: ar,
                    animationDuration: '.4s',
                    animationTimingFunction: 'ease',
                  },
                ),
              ),
              ''.concat(e.componentCls).concat(e.componentCls, '-fixed'),
              {
                position: 'fixed',
                insetBlockStart: 0,
                insetInlineStart: 0,
                zIndex: '100',
                height: '100%',
                '&-mix': {
                  height: 'calc(100% - '.concat(
                    ((y = e.layout) === null ||
                    y === void 0 ||
                    (y = y.header) === null ||
                    y === void 0
                      ? void 0
                      : y.heightLayoutHeader) || 56,
                    'px)',
                  ),
                  insetBlockStart: ''.concat(
                    ((P = e.layout) === null ||
                    P === void 0 ||
                    (P = P.header) === null ||
                    P === void 0
                      ? void 0
                      : P.heightLayoutHeader) || 56,
                    'px',
                  ),
                },
              },
            ),
          );
        };
      function lo(r, e) {
        var t = e.proLayoutCollapsedWidth;
        return (0, Ae.Xj)('ProLayoutSiderMenu', function (n) {
          var a = (0, s.Z)(
            (0, s.Z)({}, n),
            {},
            { componentCls: '.'.concat(r), proLayoutCollapsedWidth: t },
          );
          return [io(a)];
        });
      }
      var or = function (e) {
          var t,
            n = e.isMobile,
            a = e.siderWidth,
            l = e.collapsed,
            i = e.onCollapse,
            d = e.style,
            f = e.className,
            m = e.hide,
            g = e.prefixCls,
            b = e.getContainer,
            y = (0, v.useContext)(w.L_),
            P = y.token;
          (0, v.useEffect)(
            function () {
              n === !0 && (i == null || i(!0));
            },
            [n],
          );
          var F = (0, On.Z)(e, ['className', 'style']),
            L = v.useContext(Ge.ZP.ConfigContext),
            N = L.direction,
            _ = lo(''.concat(g, '-sider'), { proLayoutCollapsedWidth: 64 }),
            W = _.wrapSSR,
            Q = _.hashId,
            O = fe()(''.concat(g, '-sider'), f, Q);
          if (m) return null;
          var G = (0, T.X)(!l, function () {
            return i == null ? void 0 : i(!0);
          });
          return W(
            n
              ? (0, c.jsx)(
                  oo.Z,
                  (0, s.Z)(
                    (0, s.Z)(
                      {
                        placement: N === 'rtl' ? 'right' : 'left',
                        className: fe()(''.concat(g, '-drawer-sider'), f),
                      },
                      G,
                    ),
                    {},
                    {
                      style: (0, s.Z)({ padding: 0, height: '100vh' }, d),
                      onClose: function () {
                        i == null || i(!0);
                      },
                      maskClosable: !0,
                      closable: !1,
                      getContainer: b || !1,
                      width: a,
                      styles: {
                        body: {
                          height: '100vh',
                          padding: 0,
                          display: 'flex',
                          flexDirection: 'row',
                          backgroundColor:
                            (t = P.layout) === null ||
                            t === void 0 ||
                            (t = t.sider) === null ||
                            t === void 0
                              ? void 0
                              : t.colorMenuBackground,
                        },
                      },
                      children: (0, c.jsx)(
                        er,
                        (0, s.Z)(
                          (0, s.Z)({}, F),
                          {},
                          {
                            isMobile: !0,
                            className: O,
                            collapsed: n ? !1 : l,
                            splitMenus: !1,
                            originCollapsed: l,
                          },
                        ),
                      ),
                    },
                  ),
                )
              : (0, c.jsx)(
                  er,
                  (0, s.Z)(
                    (0, s.Z)({ className: O, originCollapsed: l }, F),
                    {},
                    { style: d },
                  ),
                ),
          );
        },
        ir = u(77153),
        uo = u(9240),
        Mn = u.n(uo),
        co = function (e, t, n) {
          if (n) {
            var a = (0, Tt.Z)(n.keys()).find(function (i) {
              return Mn()(i).test(e);
            });
            if (a) return n.get(a);
          }
          if (t) {
            var l = Object.keys(t).find(function (i) {
              return Mn()(i).test(e);
            });
            if (l) return t[l];
          }
          return { path: '' };
        },
        In = function (e, t) {
          var n = e.pathname,
            a = n === void 0 ? '/' : n,
            l = e.breadcrumb,
            i = e.breadcrumbMap,
            d = e.formatMessage,
            f = e.title,
            m = e.menu,
            g = m === void 0 ? { locale: !1 } : m,
            b = t ? '' : f || '',
            y = co(a, l, i);
          if (!y) return { title: b, id: '', pageName: b };
          var P = y.name;
          return (
            g.locale !== !1 &&
              y.locale &&
              d &&
              (P = d({ id: y.locale || '', defaultMessage: y.name })),
            P
              ? t || !f
                ? { title: P, id: y.locale || '', pageName: P }
                : {
                    title: ''.concat(P, ' - ').concat(f),
                    id: y.locale || '',
                    pageName: P,
                  }
              : { title: b, id: y.locale || '', pageName: b }
          );
        },
        mi = function (e, t) {
          return In(e, t).title;
        },
        so = {
          'app.setting.pagestyle': 'Page style setting',
          'app.setting.pagestyle.dark': 'Dark Menu style',
          'app.setting.pagestyle.light': 'Light Menu style',
          'app.setting.pagestyle.realdark': 'Dark style (Beta)',
          'app.setting.content-width': 'Content Width',
          'app.setting.content-width.fixed': 'Fixed',
          'app.setting.content-width.fluid': 'Fluid',
          'app.setting.themecolor': 'Theme Color',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.techBlue': 'Tech Blue (default)',
          'app.setting.themecolor.daybreak': 'Daybreak Blue',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.sidermenutype': 'SideMenu Type',
          'app.setting.sidermenutype-sub': 'Classic',
          'app.setting.sidermenutype-group': 'Grouping',
          'app.setting.navigationmode': 'Navigation Mode',
          'app.setting.regionalsettings': 'Regional Settings',
          'app.setting.regionalsettings.header': 'Header',
          'app.setting.regionalsettings.menu': 'Menu',
          'app.setting.regionalsettings.footer': 'Footer',
          'app.setting.regionalsettings.menuHeader': 'Menu Header',
          'app.setting.sidemenu': 'Side Menu Layout',
          'app.setting.topmenu': 'Top Menu Layout',
          'app.setting.mixmenu': 'Mix Menu Layout',
          'app.setting.splitMenus': 'Split Menus',
          'app.setting.fixedheader': 'Fixed Header',
          'app.setting.fixedsidebar': 'Fixed Sidebar',
          'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
          'app.setting.hideheader': 'Hidden Header when scrolling',
          'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
          'app.setting.othersettings': 'Other Settings',
          'app.setting.weakmode': 'Weak Mode',
          'app.setting.copy': 'Copy Setting',
          'app.setting.loading': 'Loading theme',
          'app.setting.copyinfo':
            'copy success\uFF0Cplease replace defaultSettings in src/models/setting.js',
          'app.setting.production.hint':
            'Setting panel shows in development environment only, please manually modify',
        },
        fo = (0, s.Z)({}, so),
        vo = {
          'app.setting.pagestyle': 'Impostazioni di stile',
          'app.setting.pagestyle.dark': 'Tema scuro',
          'app.setting.pagestyle.light': 'Tema chiaro',
          'app.setting.content-width': 'Largezza contenuto',
          'app.setting.content-width.fixed': 'Fissa',
          'app.setting.content-width.fluid': 'Fluida',
          'app.setting.themecolor': 'Colore del tema',
          'app.setting.themecolor.dust': 'Rosso polvere',
          'app.setting.themecolor.volcano': 'Vulcano',
          'app.setting.themecolor.sunset': 'Arancione tramonto',
          'app.setting.themecolor.cyan': 'Ciano',
          'app.setting.themecolor.green': 'Verde polare',
          'app.setting.themecolor.techBlue': 'Tech Blu (default)',
          'app.setting.themecolor.daybreak': 'Blu cielo mattutino',
          'app.setting.themecolor.geekblue': 'Blu geek',
          'app.setting.themecolor.purple': 'Viola dorato',
          'app.setting.navigationmode': 'Modalit\xE0 di navigazione',
          'app.setting.sidemenu': 'Menu laterale',
          'app.setting.topmenu': 'Menu in testata',
          'app.setting.mixmenu': 'Menu misto',
          'app.setting.splitMenus': 'Menu divisi',
          'app.setting.fixedheader': 'Testata fissa',
          'app.setting.fixedsidebar': 'Menu laterale fisso',
          'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
          'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
          'app.setting.hideheader.hint':
            'Solo se abilitato Nascondi testata durante lo scorrimento',
          'app.setting.othersettings': 'Altre impostazioni',
          'app.setting.weakmode': 'Inverti colori',
          'app.setting.copy': 'Copia impostazioni',
          'app.setting.loading': 'Carico tema...',
          'app.setting.copyinfo':
            'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
          'app.setting.production.hint':
            'Questo pannello \xE8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente',
        },
        mo = (0, s.Z)({}, vo),
        go = {
          'app.setting.pagestyle': '\uC2A4\uD0C0\uC77C \uC124\uC815',
          'app.setting.pagestyle.dark': '\uB2E4\uD06C \uBAA8\uB4DC',
          'app.setting.pagestyle.light': '\uB77C\uC774\uD2B8 \uBAA8\uB4DC',
          'app.setting.content-width': '\uCEE8\uD150\uCE20 \uB108\uBE44',
          'app.setting.content-width.fixed': '\uACE0\uC815',
          'app.setting.content-width.fluid': '\uD750\uB984',
          'app.setting.themecolor': '\uD14C\uB9C8 \uC0C9\uC0C1',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.techBlue': 'Tech Blu (default)',
          'app.setting.themecolor.daybreak': 'Daybreak Blue',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.navigationmode':
            '\uB124\uBE44\uAC8C\uC774\uC158 \uBAA8\uB4DC',
          'app.setting.regionalsettings': '\uC601\uC5ED\uBCC4 \uC124\uC815',
          'app.setting.regionalsettings.header': '\uD5E4\uB354',
          'app.setting.regionalsettings.menu': '\uBA54\uB274',
          'app.setting.regionalsettings.footer': '\uBC14\uB2E5\uAE00',
          'app.setting.regionalsettings.menuHeader':
            '\uBA54\uB274 \uD5E4\uB354',
          'app.setting.sidemenu':
            '\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58',
          'app.setting.topmenu': '\uBA54\uB274 \uC0C1\uB2E8 \uBC30\uCE58',
          'app.setting.mixmenu': '\uD63C\uD569\uD615 \uBC30\uCE58',
          'app.setting.splitMenus': '\uBA54\uB274 \uBD84\uB9AC',
          'app.setting.fixedheader': '\uD5E4\uB354 \uACE0\uC815',
          'app.setting.fixedsidebar': '\uC0AC\uC774\uB4DC\uBC14 \uACE0\uC815',
          'app.setting.fixedsidebar.hint':
            "'\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58'\uB97C \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
          'app.setting.hideheader':
            '\uC2A4\uD06C\uB864 \uC911 \uD5E4\uB354 \uAC10\uCD94\uAE30',
          'app.setting.hideheader.hint':
            "'\uD5E4\uB354 \uAC10\uCD94\uAE30 \uC635\uC158'\uC744 \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
          'app.setting.othersettings': '\uB2E4\uB978 \uC124\uC815',
          'app.setting.weakmode': '\uACE0\uB300\uBE44 \uBAA8\uB4DC',
          'app.setting.copy': '\uC124\uC815\uAC12 \uBCF5\uC0AC',
          'app.setting.loading': '\uD14C\uB9C8 \uB85C\uB529 \uC911',
          'app.setting.copyinfo':
            '\uBCF5\uC0AC \uC131\uACF5. src/models/settings.js\uC5D0 \uC788\uB294 defaultSettings\uB97C \uAD50\uCCB4\uD574 \uC8FC\uC138\uC694.',
          'app.setting.production.hint':
            '\uC124\uC815 \uD310\uB12C\uC740 \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C\uB9CC \uBCF4\uC5EC\uC9D1\uB2C8\uB2E4. \uC9C1\uC811 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uBC14\uB78D\uB2C8\uB2E4.',
        },
        po = (0, s.Z)({}, go),
        ho = {
          'app.setting.pagestyle': '\u6574\u4F53\u98CE\u683C\u8BBE\u7F6E',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u5355\u98CE\u683C',
          'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u5355\u98CE\u683C',
          'app.setting.pagestyle.realdark':
            '\u6697\u8272\u98CE\u683C(\u5B9E\u9A8C\u529F\u80FD)',
          'app.setting.content-width': '\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6',
          'app.setting.content-width.fixed': '\u5B9A\u5BBD',
          'app.setting.content-width.fluid': '\u6D41\u5F0F',
          'app.setting.themecolor': '\u4E3B\u9898\u8272',
          'app.setting.themecolor.dust': '\u8584\u66AE',
          'app.setting.themecolor.volcano': '\u706B\u5C71',
          'app.setting.themecolor.sunset': '\u65E5\u66AE',
          'app.setting.themecolor.cyan': '\u660E\u9752',
          'app.setting.themecolor.green': '\u6781\u5149\u7EFF',
          'app.setting.themecolor.techBlue':
            '\u79D1\u6280\u84DD\uFF08\u9ED8\u8BA4\uFF09',
          'app.setting.themecolor.daybreak': '\u62C2\u6653',
          'app.setting.themecolor.geekblue': '\u6781\u5BA2\u84DD',
          'app.setting.themecolor.purple': '\u9171\u7D2B',
          'app.setting.navigationmode': '\u5BFC\u822A\u6A21\u5F0F',
          'app.setting.sidermenutype': '\u4FA7\u8FB9\u83DC\u5355\u7C7B\u578B',
          'app.setting.sidermenutype-sub': '\u7ECF\u5178\u6A21\u5F0F',
          'app.setting.sidermenutype-group': '\u5206\u7EC4\u6A21\u5F0F',
          'app.setting.regionalsettings': '\u5185\u5BB9\u533A\u57DF',
          'app.setting.regionalsettings.header': '\u9876\u680F',
          'app.setting.regionalsettings.menu': '\u83DC\u5355',
          'app.setting.regionalsettings.footer': '\u9875\u811A',
          'app.setting.regionalsettings.menuHeader': '\u83DC\u5355\u5934',
          'app.setting.sidemenu': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40',
          'app.setting.topmenu': '\u9876\u90E8\u83DC\u5355\u5E03\u5C40',
          'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u5355\u5E03\u5C40',
          'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
          'app.setting.fixedheader': '\u56FA\u5B9A Header',
          'app.setting.fixedsidebar': '\u56FA\u5B9A\u4FA7\u8FB9\u83DC\u5355',
          'app.setting.fixedsidebar.hint':
            '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40\u65F6\u53EF\u914D\u7F6E',
          'app.setting.hideheader': '\u4E0B\u6ED1\u65F6\u9690\u85CF Header',
          'app.setting.hideheader.hint':
            '\u56FA\u5B9A Header \u65F6\u53EF\u914D\u7F6E',
          'app.setting.othersettings': '\u5176\u4ED6\u8BBE\u7F6E',
          'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
          'app.setting.copy': '\u62F7\u8D1D\u8BBE\u7F6E',
          'app.setting.loading': '\u6B63\u5728\u52A0\u8F7D\u4E3B\u9898',
          'app.setting.copyinfo':
            '\u62F7\u8D1D\u6210\u529F\uFF0C\u8BF7\u5230 src/defaultSettings.js \u4E2D\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E',
          'app.setting.production.hint':
            '\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6',
        },
        yo = (0, s.Z)({}, ho),
        xo = {
          'app.setting.pagestyle': '\u6574\u9AD4\u98A8\u683C\u8A2D\u7F6E',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u55AE\u98A8\u683C',
          'app.setting.pagestyle.realdark':
            '\u6697\u8272\u98A8\u683C(\u5B9E\u9A8C\u529F\u80FD)',
          'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u55AE\u98A8\u683C',
          'app.setting.content-width': '\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6',
          'app.setting.content-width.fixed': '\u5B9A\u5BEC',
          'app.setting.content-width.fluid': '\u6D41\u5F0F',
          'app.setting.themecolor': '\u4E3B\u984C\u8272',
          'app.setting.themecolor.dust': '\u8584\u66AE',
          'app.setting.themecolor.volcano': '\u706B\u5C71',
          'app.setting.themecolor.sunset': '\u65E5\u66AE',
          'app.setting.themecolor.cyan': '\u660E\u9752',
          'app.setting.themecolor.green': '\u6975\u5149\u7DA0',
          'app.setting.themecolor.techBlue':
            '\u79D1\u6280\u84DD\uFF08\u9ED8\u8A8D\uFF09',
          'app.setting.themecolor.daybreak': '\u62C2\u66C9\u85CD',
          'app.setting.themecolor.geekblue': '\u6975\u5BA2\u85CD',
          'app.setting.themecolor.purple': '\u91AC\u7D2B',
          'app.setting.navigationmode': '\u5C0E\u822A\u6A21\u5F0F',
          'app.setting.sidemenu': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40',
          'app.setting.topmenu': '\u9802\u90E8\u83DC\u55AE\u5E03\u5C40',
          'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u55AE\u5E03\u5C40',
          'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
          'app.setting.fixedheader': '\u56FA\u5B9A Header',
          'app.setting.fixedsidebar': '\u56FA\u5B9A\u5074\u908A\u83DC\u55AE',
          'app.setting.fixedsidebar.hint':
            '\u5074\u908A\u83DC\u55AE\u5E03\u5C40\u6642\u53EF\u914D\u7F6E',
          'app.setting.hideheader': '\u4E0B\u6ED1\u6642\u96B1\u85CF Header',
          'app.setting.hideheader.hint':
            '\u56FA\u5B9A Header \u6642\u53EF\u914D\u7F6E',
          'app.setting.othersettings': '\u5176\u4ED6\u8A2D\u7F6E',
          'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
          'app.setting.copy': '\u62F7\u8C9D\u8A2D\u7F6E',
          'app.setting.loading': '\u6B63\u5728\u52A0\u8F09\u4E3B\u984C',
          'app.setting.copyinfo':
            '\u62F7\u8C9D\u6210\u529F\uFF0C\u8ACB\u5230 src/defaultSettings.js \u4E2D\u66FF\u63DB\u9ED8\u8A8D\u914D\u7F6E',
          'app.setting.production.hint':
            '\u914D\u7F6E\u6B04\u53EA\u5728\u958B\u767C\u74B0\u5883\u7528\u65BC\u9810\u89BD\uFF0C\u751F\u7522\u74B0\u5883\u4E0D\u6703\u5C55\u73FE\uFF0C\u8ACB\u62F7\u8C9D\u5F8C\u624B\u52D5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6',
        },
        Co = (0, s.Z)({}, xo),
        lr = {
          'zh-CN': yo,
          'zh-TW': Co,
          'en-US': fo,
          'it-IT': mo,
          'ko-KR': po,
        },
        bo = function () {
          if (!(0, ne.j)()) return 'zh-CN';
          var e = window.localStorage.getItem('umi_locale');
          return e || window.g_locale || navigator.language;
        },
        So = function () {
          var e = bo();
          return lr[e] || lr['zh-CN'];
        },
        Yt = u(68200),
        ht = u(84425),
        Zo = function () {
          var e;
          return typeof ht == 'undefined'
            ? Yt.Z
            : ((e = ht) === null ||
              ht === void 0 ||
              (ht = { NODE_ENV: 'production', PUBLIC_PATH: '/howareyou/' }) ===
                null ||
              ht === void 0
                ? void 0
                : ht.ANTD_VERSION) || Yt.Z;
        },
        Mo = function (e) {
          var t,
            n,
            a,
            l,
            i,
            d,
            f,
            m,
            g,
            b,
            y,
            P,
            F,
            L,
            N,
            _,
            W,
            Q,
            O,
            G,
            S,
            E,
            ue,
            J,
            k,
            me,
            xe,
            Z,
            Ze,
            A,
            ve,
            pe;
          return (t = Zo()) !== null && t !== void 0 && t.startsWith('5')
            ? {}
            : (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)(
                    {},
                    e.componentCls,
                    (0, o.Z)(
                      (0, o.Z)(
                        { width: '100%', height: '100%' },
                        ''.concat(e.proComponentsCls, '-base-menu'),
                        ((S = {
                          color:
                            (n = e.layout) === null ||
                            n === void 0 ||
                            (n = n.sider) === null ||
                            n === void 0
                              ? void 0
                              : n.colorTextMenu,
                        }),
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  (0, o.Z)(
                                    (0, o.Z)(
                                      (0, o.Z)(
                                        (0, o.Z)(
                                          (0, o.Z)(
                                            S,
                                            ''.concat(e.antCls, '-menu-sub'),
                                            {
                                              backgroundColor:
                                                'transparent!important',
                                              color:
                                                (a = e.layout) === null ||
                                                a === void 0 ||
                                                (a = a.sider) === null ||
                                                a === void 0
                                                  ? void 0
                                                  : a.colorTextMenu,
                                            },
                                          ),
                                          '& '.concat(e.antCls, '-layout'),
                                          {
                                            backgroundColor: 'transparent',
                                            width: '100%',
                                          },
                                        ),
                                        ''
                                          .concat(
                                            e.antCls,
                                            '-menu-submenu-expand-icon, ',
                                          )
                                          .concat(
                                            e.antCls,
                                            '-menu-submenu-arrow',
                                          ),
                                        { color: 'inherit' },
                                      ),
                                      '&'.concat(e.antCls, '-menu'),
                                      (0, o.Z)(
                                        (0, o.Z)(
                                          {
                                            color:
                                              (l = e.layout) === null ||
                                              l === void 0 ||
                                              (l = l.sider) === null ||
                                              l === void 0
                                                ? void 0
                                                : l.colorTextMenu,
                                          },
                                          ''.concat(e.antCls, '-menu-item'),
                                          {
                                            '*': {
                                              transition: 'none !important',
                                            },
                                          },
                                        ),
                                        ''.concat(e.antCls, '-menu-item a'),
                                        { color: 'inherit' },
                                      ),
                                    ),
                                    '&'.concat(e.antCls, '-menu-inline'),
                                    (0, o.Z)(
                                      {},
                                      ''
                                        .concat(
                                          e.antCls,
                                          '-menu-selected::after,',
                                        )
                                        .concat(
                                          e.antCls,
                                          '-menu-item-selected::after',
                                        ),
                                      { display: 'none' },
                                    ),
                                  ),
                                  ''
                                    .concat(e.antCls, '-menu-sub ')
                                    .concat(e.antCls, '-menu-inline'),
                                  { backgroundColor: 'transparent!important' },
                                ),
                                ''
                                  .concat(
                                    e.antCls,
                                    `-menu-item:active, 
        `,
                                  )
                                  .concat(
                                    e.antCls,
                                    '-menu-submenu-title:active',
                                  ),
                                { backgroundColor: 'transparent!important' },
                              ),
                              '&'.concat(e.antCls, '-menu-light'),
                              (0, o.Z)(
                                {},
                                ''
                                  .concat(
                                    e.antCls,
                                    `-menu-item:hover, 
            `,
                                  )
                                  .concat(
                                    e.antCls,
                                    `-menu-item-active,
            `,
                                  )
                                  .concat(
                                    e.antCls,
                                    `-menu-submenu-active, 
            `,
                                  )
                                  .concat(
                                    e.antCls,
                                    '-menu-submenu-title:hover',
                                  ),
                                (0, o.Z)(
                                  {
                                    color:
                                      (i = e.layout) === null ||
                                      i === void 0 ||
                                      (i = i.sider) === null ||
                                      i === void 0
                                        ? void 0
                                        : i.colorTextMenuActive,
                                    borderRadius: e.borderRadius,
                                  },
                                  ''.concat(e.antCls, '-menu-submenu-arrow'),
                                  {
                                    color:
                                      (d = e.layout) === null ||
                                      d === void 0 ||
                                      (d = d.sider) === null ||
                                      d === void 0
                                        ? void 0
                                        : d.colorTextMenuActive,
                                  },
                                ),
                              ),
                            ),
                            '&'
                              .concat(e.antCls, '-menu:not(')
                              .concat(e.antCls, '-menu-horizontal)'),
                            (0, o.Z)(
                              (0, o.Z)(
                                {},
                                ''.concat(e.antCls, '-menu-item-selected'),
                                {
                                  backgroundColor:
                                    (f = e.layout) === null ||
                                    f === void 0 ||
                                    (f = f.sider) === null ||
                                    f === void 0
                                      ? void 0
                                      : f.colorBgMenuItemSelected,
                                  borderRadius: e.borderRadius,
                                },
                              ),
                              ''
                                .concat(
                                  e.antCls,
                                  `-menu-item:hover, 
            `,
                                )
                                .concat(
                                  e.antCls,
                                  `-menu-item-active,
            `,
                                )
                                .concat(e.antCls, '-menu-submenu-title:hover'),
                              (0, o.Z)(
                                {
                                  color:
                                    (m = e.layout) === null ||
                                    m === void 0 ||
                                    (m = m.sider) === null ||
                                    m === void 0
                                      ? void 0
                                      : m.colorTextMenuActive,
                                  borderRadius: e.borderRadius,
                                  backgroundColor: ''.concat(
                                    (g = e.layout) === null ||
                                      g === void 0 ||
                                      (g = g.header) === null ||
                                      g === void 0
                                      ? void 0
                                      : g.colorBgMenuItemHover,
                                    ' !important',
                                  ),
                                },
                                ''.concat(e.antCls, '-menu-submenu-arrow'),
                                {
                                  color:
                                    (b = e.layout) === null ||
                                    b === void 0 ||
                                    (b = b.sider) === null ||
                                    b === void 0
                                      ? void 0
                                      : b.colorTextMenuActive,
                                },
                              ),
                            ),
                          ),
                          ''.concat(e.antCls, '-menu-item-selected'),
                          {
                            color:
                              (y = e.layout) === null ||
                              y === void 0 ||
                              (y = y.sider) === null ||
                              y === void 0
                                ? void 0
                                : y.colorTextMenuSelected,
                          },
                        ),
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  S,
                                  ''.concat(e.antCls, '-menu-submenu-selected'),
                                  {
                                    color:
                                      (P = e.layout) === null ||
                                      P === void 0 ||
                                      (P = P.sider) === null ||
                                      P === void 0
                                        ? void 0
                                        : P.colorTextMenuSelected,
                                  },
                                ),
                                '&'
                                  .concat(e.antCls, '-menu:not(')
                                  .concat(e.antCls, '-menu-inline) ')
                                  .concat(e.antCls, '-menu-submenu-open'),
                                {
                                  color:
                                    (F = e.layout) === null ||
                                    F === void 0 ||
                                    (F = F.sider) === null ||
                                    F === void 0
                                      ? void 0
                                      : F.colorTextMenuSelected,
                                },
                              ),
                              '&'.concat(e.antCls, '-menu-vertical'),
                              (0, o.Z)(
                                {},
                                ''.concat(e.antCls, '-menu-submenu-selected'),
                                {
                                  borderRadius: e.borderRadius,
                                  color:
                                    (L = e.layout) === null ||
                                    L === void 0 ||
                                    (L = L.sider) === null ||
                                    L === void 0
                                      ? void 0
                                      : L.colorTextMenuSelected,
                                },
                              ),
                            ),
                            ''
                              .concat(e.antCls, '-menu-submenu:hover > ')
                              .concat(e.antCls, '-menu-submenu-title > ')
                              .concat(e.antCls, '-menu-submenu-arrow'),
                            {
                              color:
                                (N = e.layout) === null ||
                                N === void 0 ||
                                (N = N.sider) === null ||
                                N === void 0
                                  ? void 0
                                  : N.colorTextMenuActive,
                            },
                          ),
                          '&'.concat(e.antCls, '-menu-horizontal'),
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  {},
                                  ''
                                    .concat(
                                      e.antCls,
                                      `-menu-item:hover,
          `,
                                    )
                                    .concat(
                                      e.antCls,
                                      `-menu-submenu:hover,
          `,
                                    )
                                    .concat(
                                      e.antCls,
                                      `-menu-item-active,
          `,
                                    )
                                    .concat(e.antCls, '-menu-submenu-active'),
                                  {
                                    borderRadius: 4,
                                    transition: 'none',
                                    color:
                                      (_ = e.layout) === null ||
                                      _ === void 0 ||
                                      (_ = _.header) === null ||
                                      _ === void 0
                                        ? void 0
                                        : _.colorTextMenuActive,
                                    backgroundColor: ''.concat(
                                      (W = e.layout) === null ||
                                        W === void 0 ||
                                        (W = W.header) === null ||
                                        W === void 0
                                        ? void 0
                                        : W.colorBgMenuItemHover,
                                      ' !important',
                                    ),
                                  },
                                ),
                                ''
                                  .concat(
                                    e.antCls,
                                    `-menu-item-open,
          `,
                                  )
                                  .concat(
                                    e.antCls,
                                    `-menu-submenu-open,
          `,
                                  )
                                  .concat(
                                    e.antCls,
                                    `-menu-item-selected,
          `,
                                  )
                                  .concat(e.antCls, '-menu-submenu-selected'),
                                (0, o.Z)(
                                  {
                                    backgroundColor:
                                      (Q = e.layout) === null ||
                                      Q === void 0 ||
                                      (Q = Q.header) === null ||
                                      Q === void 0
                                        ? void 0
                                        : Q.colorBgMenuItemSelected,
                                    borderRadius: e.borderRadius,
                                    transition: 'none',
                                    color: ''.concat(
                                      (O = e.layout) === null ||
                                        O === void 0 ||
                                        (O = O.header) === null ||
                                        O === void 0
                                        ? void 0
                                        : O.colorTextMenuSelected,
                                      ' !important',
                                    ),
                                  },
                                  ''.concat(e.antCls, '-menu-submenu-arrow'),
                                  {
                                    color: ''.concat(
                                      (G = e.layout) === null ||
                                        G === void 0 ||
                                        (G = G.header) === null ||
                                        G === void 0
                                        ? void 0
                                        : G.colorTextMenuSelected,
                                      ' !important',
                                    ),
                                  },
                                ),
                              ),
                              '> '
                                .concat(e.antCls, '-menu-item, > ')
                                .concat(e.antCls, '-menu-submenu'),
                              { paddingInline: 16, marginInline: 4 },
                            ),
                            '> '
                              .concat(e.antCls, '-menu-item::after, > ')
                              .concat(e.antCls, '-menu-submenu::after'),
                            { display: 'none' },
                          ),
                        )),
                      ),
                      ''.concat(
                        e.proComponentsCls,
                        '-top-nav-header-base-menu',
                      ),
                      (0, o.Z)(
                        (0, o.Z)(
                          {},
                          '&'.concat(e.antCls, '-menu'),
                          (0, o.Z)(
                            {
                              color:
                                (E = e.layout) === null ||
                                E === void 0 ||
                                (E = E.header) === null ||
                                E === void 0
                                  ? void 0
                                  : E.colorTextMenu,
                            },
                            ''.concat(e.antCls, '-menu-item a'),
                            { color: 'inherit' },
                          ),
                        ),
                        '&'.concat(e.antCls, '-menu-light'),
                        (0, o.Z)(
                          (0, o.Z)(
                            {},
                            ''
                              .concat(
                                e.antCls,
                                `-menu-item:hover, 
            `,
                              )
                              .concat(
                                e.antCls,
                                `-menu-item-active,
            `,
                              )
                              .concat(
                                e.antCls,
                                `-menu-submenu-active, 
            `,
                              )
                              .concat(e.antCls, '-menu-submenu-title:hover'),
                            (0, o.Z)(
                              {
                                color:
                                  (ue = e.layout) === null ||
                                  ue === void 0 ||
                                  (ue = ue.header) === null ||
                                  ue === void 0
                                    ? void 0
                                    : ue.colorTextMenuActive,
                                borderRadius: e.borderRadius,
                                transition: 'none',
                                backgroundColor:
                                  (J = e.layout) === null ||
                                  J === void 0 ||
                                  (J = J.header) === null ||
                                  J === void 0
                                    ? void 0
                                    : J.colorBgMenuItemSelected,
                              },
                              ''.concat(e.antCls, '-menu-submenu-arrow'),
                              {
                                color:
                                  (k = e.layout) === null ||
                                  k === void 0 ||
                                  (k = k.header) === null ||
                                  k === void 0
                                    ? void 0
                                    : k.colorTextMenuActive,
                              },
                            ),
                          ),
                          ''.concat(e.antCls, '-menu-item-selected'),
                          {
                            color:
                              (me = e.layout) === null ||
                              me === void 0 ||
                              (me = me.header) === null ||
                              me === void 0
                                ? void 0
                                : me.colorTextMenuSelected,
                            borderRadius: e.borderRadius,
                            backgroundColor:
                              (xe = e.layout) === null ||
                              xe === void 0 ||
                              (xe = xe.header) === null ||
                              xe === void 0
                                ? void 0
                                : xe.colorBgMenuItemSelected,
                          },
                        ),
                      ),
                    ),
                  ),
                  ''
                    .concat(e.antCls, '-menu-sub')
                    .concat(e.antCls, '-menu-inline'),
                  { backgroundColor: 'transparent!important' },
                ),
                ''.concat(e.antCls, '-menu-submenu-popup'),
                (0, o.Z)(
                  (0, o.Z)(
                    (0, o.Z)(
                      (0, o.Z)(
                        {
                          backgroundColor: 'rgba(255, 255, 255, 0.42)',
                          '-webkit-backdrop-filter': 'blur(8px)',
                          backdropFilter: 'blur(8px)',
                        },
                        ''.concat(e.antCls, '-menu'),
                        (0, o.Z)(
                          {
                            background: 'transparent !important',
                            backgroundColor: 'transparent !important',
                          },
                          ''
                            .concat(
                              e.antCls,
                              `-menu-item:active, 
        `,
                            )
                            .concat(e.antCls, '-menu-submenu-title:active'),
                          { backgroundColor: 'transparent!important' },
                        ),
                      ),
                      ''.concat(e.antCls, '-menu-item-selected'),
                      {
                        color:
                          (Z = e.layout) === null ||
                          Z === void 0 ||
                          (Z = Z.sider) === null ||
                          Z === void 0
                            ? void 0
                            : Z.colorTextMenuSelected,
                      },
                    ),
                    ''.concat(e.antCls, '-menu-submenu-selected'),
                    {
                      color:
                        (Ze = e.layout) === null ||
                        Ze === void 0 ||
                        (Ze = Ze.sider) === null ||
                        Ze === void 0
                          ? void 0
                          : Ze.colorTextMenuSelected,
                    },
                  ),
                  ''
                    .concat(e.antCls, '-menu:not(')
                    .concat(e.antCls, '-menu-horizontal)'),
                  (0, o.Z)(
                    (0, o.Z)({}, ''.concat(e.antCls, '-menu-item-selected'), {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      borderRadius: e.borderRadius,
                      color:
                        (A = e.layout) === null ||
                        A === void 0 ||
                        (A = A.sider) === null ||
                        A === void 0
                          ? void 0
                          : A.colorTextMenuSelected,
                    }),
                    ''
                      .concat(
                        e.antCls,
                        `-menu-item:hover, 
          `,
                      )
                      .concat(
                        e.antCls,
                        `-menu-item-active,
          `,
                      )
                      .concat(e.antCls, '-menu-submenu-title:hover'),
                    (0, o.Z)(
                      {
                        color:
                          (ve = e.layout) === null ||
                          ve === void 0 ||
                          (ve = ve.sider) === null ||
                          ve === void 0
                            ? void 0
                            : ve.colorTextMenuActive,
                        borderRadius: e.borderRadius,
                      },
                      ''.concat(e.antCls, '-menu-submenu-arrow'),
                      {
                        color:
                          (pe = e.layout) === null ||
                          pe === void 0 ||
                          (pe = pe.sider) === null ||
                          pe === void 0
                            ? void 0
                            : pe.colorTextMenuActive,
                      },
                    ),
                  ),
                ),
              );
        },
        Io = function (e) {
          var t, n, a, l;
          return (0, o.Z)(
            (0, o.Z)({}, ''.concat(e.antCls, '-layout'), {
              backgroundColor: 'transparent !important',
            }),
            e.componentCls,
            (0, o.Z)(
              (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)({}, '& '.concat(e.antCls, '-layout'), {
                    display: 'flex',
                    backgroundColor: 'transparent',
                    width: '100%',
                  }),
                  ''.concat(e.componentCls, '-content'),
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor:
                      ((t = e.layout) === null ||
                      t === void 0 ||
                      (t = t.pageContainer) === null ||
                      t === void 0
                        ? void 0
                        : t.colorBgPageContainer) || 'transparent',
                    position: 'relative',
                    paddingBlock:
                      (n = e.layout) === null ||
                      n === void 0 ||
                      (n = n.pageContainer) === null ||
                      n === void 0
                        ? void 0
                        : n.paddingBlockPageContainerContent,
                    paddingInline:
                      (a = e.layout) === null ||
                      a === void 0 ||
                      (a = a.pageContainer) === null ||
                      a === void 0
                        ? void 0
                        : a.paddingInlinePageContainerContent,
                    '&-has-page-container': { padding: 0 },
                  },
                ),
                ''.concat(e.componentCls, '-container'),
                {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0,
                  minHeight: 0,
                  backgroundColor: 'transparent',
                },
              ),
              ''.concat(e.componentCls, '-bg-list'),
              {
                pointerEvents: 'none',
                position: 'fixed',
                overflow: 'hidden',
                insetBlockStart: 0,
                insetInlineStart: 0,
                zIndex: 0,
                height: '100%',
                width: '100%',
                background:
                  (l = e.layout) === null || l === void 0 ? void 0 : l.bgLayout,
              },
            ),
          );
        };
      function To(r) {
        return (0, Ae.Xj)('ProLayout', function (e) {
          var t = (0, s.Z)(
            (0, s.Z)({}, e),
            {},
            { componentCls: '.'.concat(r) },
          );
          return [Io(t), Mo(t)];
        });
      }
      function Ro(r) {
        if (!r || r === '/') return ['/'];
        var e = r.split('/').filter(function (t) {
          return t;
        });
        return e.map(function (t, n) {
          return '/'.concat(e.slice(0, n + 1).join('/'));
        });
      }
      var yt = u(84425),
        wo = function () {
          var e;
          return typeof yt == 'undefined'
            ? Yt.Z
            : ((e = yt) === null ||
              yt === void 0 ||
              (yt = { NODE_ENV: 'production', PUBLIC_PATH: '/howareyou/' }) ===
                null ||
              yt === void 0
                ? void 0
                : yt.ANTD_VERSION) || Yt.Z;
        },
        Bo = function (e, t, n) {
          var a = e,
            l = a.breadcrumbName,
            i = a.title,
            d = a.path,
            f =
              n.findIndex(function (m) {
                return m.linkPath === e.path;
              }) ===
              n.length - 1;
          return f
            ? (0, c.jsx)('span', { children: i || l })
            : (0, c.jsx)('span', {
                onClick: d
                  ? function () {
                      return (location.href = d);
                    }
                  : void 0,
                children: i || l,
              });
        },
        jo = function (e, t) {
          var n = t.formatMessage,
            a = t.menu;
          return e.locale && n && (a == null ? void 0 : a.locale) !== !1
            ? n({ id: e.locale, defaultMessage: e.name })
            : e.name;
        },
        Po = function (e, t) {
          var n = e.get(t);
          if (!n) {
            var a = Array.from(e.keys()) || [],
              l = a.find(function (i) {
                return Mn()(i.replace('?', '')).test(t);
              });
            l && (n = e.get(l));
          }
          return n || { path: '' };
        },
        No = function (e) {
          var t = e.location,
            n = e.breadcrumbMap;
          return { location: t, breadcrumbMap: n };
        },
        Lo = function (e, t, n) {
          var a = Ro(e == null ? void 0 : e.pathname),
            l = a
              .map(function (i) {
                var d = Po(t, i),
                  f = jo(d, n),
                  m = d.hideInBreadcrumb;
                return f && !m
                  ? {
                      linkPath: i,
                      breadcrumbName: f,
                      title: f,
                      component: d.component,
                    }
                  : { linkPath: '', breadcrumbName: '', title: '' };
              })
              .filter(function (i) {
                return i && i.linkPath;
              });
          return l;
        },
        Eo = function (e) {
          var t = No(e),
            n = t.location,
            a = t.breadcrumbMap;
          return n && n.pathname && a ? Lo(n, a, e) : [];
        },
        Ao = function (e, t) {
          var n = e.breadcrumbRender,
            a = e.itemRender,
            l = t.breadcrumbProps || {},
            i = l.minLength,
            d = i === void 0 ? 2 : i,
            f = Eo(e),
            m = function (y) {
              for (
                var P = a || Bo,
                  F = arguments.length,
                  L = new Array(F > 1 ? F - 1 : 0),
                  N = 1;
                N < F;
                N++
              )
                L[N - 1] = arguments[N];
              return P == null
                ? void 0
                : P.apply(
                    void 0,
                    [
                      (0, s.Z)(
                        (0, s.Z)({}, y),
                        {},
                        { path: y.linkPath || y.path },
                      ),
                    ].concat(L),
                  );
            },
            g = f;
          return (
            n && (g = n(g || []) || void 0),
            ((g && g.length < d) || n === !1) && (g = void 0),
            (0, B.n)(wo(), '5.3.0') > -1
              ? { items: g, itemRender: m }
              : { routes: g, itemRender: m }
          );
        };
      function Ho(r) {
        return (0, Tt.Z)(r).reduce(function (e, t) {
          var n = (0, p.Z)(t, 2),
            a = n[0],
            l = n[1];
          return (e[a] = l), e;
        }, {});
      }
      var Oo = function r(e, t, n, a) {
          var l = fn(e, (t == null ? void 0 : t.locale) || !1, n, !0),
            i = l.menuData,
            d = l.breadcrumb;
          return a
            ? r(a(i), t, n, void 0)
            : { breadcrumb: Ho(d), breadcrumbMap: d, menuData: i };
        },
        Do = u(22361),
        $o = u(28520),
        zo = function (e) {
          var t = (0, v.useState)({}),
            n = (0, p.Z)(t, 2),
            a = n[0],
            l = n[1];
          return (
            (0, v.useEffect)(
              function () {
                l(
                  (0, $o.Y)({
                    layout:
                      (0, Do.Z)(e.layout) !== 'object' ? e.layout : void 0,
                    navTheme: e.navTheme,
                    menuRender: e.menuRender,
                    footerRender: e.footerRender,
                    menuHeaderRender: e.menuHeaderRender,
                    headerRender: e.headerRender,
                    fixSiderbar: e.fixSiderbar,
                  }),
                );
              },
              [
                e.layout,
                e.navTheme,
                e.menuRender,
                e.footerRender,
                e.menuHeaderRender,
                e.headerRender,
                e.fixSiderbar,
              ],
            ),
            a
          );
        },
        Fo = ['id', 'defaultMessage'],
        Wo = ['fixSiderbar', 'navTheme', 'layout'],
        ur = 0,
        ko = function (e, t) {
          var n;
          return e.headerRender === !1 || e.pure
            ? null
            : (0, c.jsx)(
                ro,
                (0, s.Z)(
                  (0, s.Z)({ matchMenuKeys: t }, e),
                  {},
                  {
                    stylish:
                      (n = e.stylish) === null || n === void 0
                        ? void 0
                        : n.header,
                  },
                ),
              );
        },
        Uo = function (e) {
          return e.footerRender === !1 || e.pure
            ? null
            : e.footerRender
            ? e.footerRender((0, s.Z)({}, e), (0, c.jsx)(ta, {}))
            : null;
        },
        Ko = function (e, t) {
          var n,
            a = e.layout,
            l = e.isMobile,
            i = e.selectedKeys,
            d = e.openKeys,
            f = e.splitMenus,
            m = e.suppressSiderWhenMenuEmpty,
            g = e.menuRender;
          if (e.menuRender === !1 || e.pure) return null;
          var b = e.menuData;
          if (f && (d !== !1 || a === 'mix') && !l) {
            var y = i || t,
              P = (0, p.Z)(y, 1),
              F = P[0];
            if (F) {
              var L;
              b =
                ((L = e.menuData) === null ||
                L === void 0 ||
                (L = L.find(function (Q) {
                  return Q.key === F;
                })) === null ||
                L === void 0
                  ? void 0
                  : L.children) || [];
            } else b = [];
          }
          var N = Vt(b || []);
          if (N && (N == null ? void 0 : N.length) < 1 && (f || m)) return null;
          if (a === 'top' && !l) {
            var _;
            return (0, c.jsx)(
              or,
              (0, s.Z)(
                (0, s.Z)({ matchMenuKeys: t }, e),
                {},
                {
                  hide: !0,
                  stylish:
                    (_ = e.stylish) === null || _ === void 0 ? void 0 : _.sider,
                },
              ),
            );
          }
          var W = (0, c.jsx)(
            or,
            (0, s.Z)(
              (0, s.Z)({ matchMenuKeys: t }, e),
              {},
              {
                menuData: N,
                stylish:
                  (n = e.stylish) === null || n === void 0 ? void 0 : n.sider,
              },
            ),
          );
          return g ? g(e, W) : W;
        },
        _o = function (e, t) {
          var n = t.pageTitleRender,
            a = In(e);
          if (n === !1) return { title: t.title || '', id: '', pageName: '' };
          if (n) {
            var l = n(e, a.title, a);
            if (typeof l == 'string')
              return In((0, s.Z)((0, s.Z)({}, a), {}, { title: l }));
            (0, Wr.ZP)(
              typeof l == 'string',
              'pro-layout: renderPageTitle return value should be a string',
            );
          }
          return a;
        },
        Go = function (e, t, n) {
          return e ? (t ? 64 : n) : 0;
        },
        Vo = function (e) {
          var t,
            n,
            a,
            l,
            i,
            d,
            f,
            m,
            g,
            b,
            y,
            P,
            F,
            L,
            N = e || {},
            _ = N.children,
            W = N.onCollapse,
            Q = N.location,
            O = Q === void 0 ? { pathname: '/' } : Q,
            G = N.contentStyle,
            S = N.route,
            E = N.defaultCollapsed,
            ue = N.style,
            J = N.siderWidth,
            k = N.menu,
            me = N.siderMenuType,
            xe = N.isChildrenLayout,
            Z = N.menuDataRender,
            Ze = N.actionRef,
            A = N.bgLayoutImgList,
            ve = N.formatMessage,
            pe = N.loading,
            Ie = (0, v.useMemo)(
              function () {
                return J || (e.layout === 'mix' ? 215 : 256);
              },
              [e.layout, J],
            ),
            ye = (0, v.useContext)(Ge.ZP.ConfigContext),
            Pe =
              (t = e.prefixCls) !== null && t !== void 0
                ? t
                : ye.getPrefixCls('pro'),
            Re = (0, $.Z)(!1, {
              value: k == null ? void 0 : k.loading,
              onChange: k == null ? void 0 : k.onLoadingChange,
            }),
            we = (0, p.Z)(Re, 2),
            ze = we[0],
            He = we[1],
            Oe = (0, v.useState)(function () {
              return (ur += 1), 'pro-layout-'.concat(ur);
            }),
            Je = (0, p.Z)(Oe, 1),
            et = Je[0],
            tt = (0, v.useCallback)(
              function (Le) {
                var rt = Le.id,
                  nn = Le.defaultMessage,
                  Lt = (0, I.Z)(Le, Fo);
                if (ve) return ve((0, s.Z)({ id: rt, defaultMessage: nn }, Lt));
                var Et = So();
                return Et[rt] ? Et[rt] : nn;
              },
              [ve],
            ),
            nt = (0, Dn.ZP)(
              [et, k == null ? void 0 : k.params],
              (function () {
                var Le = (0, M.Z)(
                  (0, C.Z)().mark(function rt(nn) {
                    var Lt, Et, Zr, Mr;
                    return (0, C.Z)().wrap(function (St) {
                      for (;;)
                        switch ((St.prev = St.next)) {
                          case 0:
                            return (
                              (Et = (0, p.Z)(nn, 2)),
                              (Zr = Et[1]),
                              He(!0),
                              (St.next = 4),
                              k == null ||
                              (Lt = k.request) === null ||
                              Lt === void 0
                                ? void 0
                                : Lt.call(
                                    k,
                                    Zr || {},
                                    (S == null ? void 0 : S.children) ||
                                      (S == null ? void 0 : S.routes) ||
                                      [],
                                  )
                            );
                          case 4:
                            return (
                              (Mr = St.sent), He(!1), St.abrupt('return', Mr)
                            );
                          case 7:
                          case 'end':
                            return St.stop();
                        }
                    }, rt);
                  }),
                );
                return function (rt) {
                  return Le.apply(this, arguments);
                };
              })(),
              {
                revalidateOnFocus: !1,
                shouldRetryOnError: !1,
                revalidateOnReconnect: !1,
              },
            ),
            wt = nt.data,
            Qt = nt.mutate,
            Ne = nt.isLoading;
          (0, v.useEffect)(
            function () {
              He(Ne);
            },
            [Ne],
          );
          var Ve = (0, Dn.kY)(),
            Fe = Ve.cache;
          (0, v.useEffect)(function () {
            return function () {
              Fe instanceof Map && Fe.delete(et);
            };
          }, []);
          var qt = (0, v.useMemo)(
              function () {
                return Oo(
                  wt ||
                    (S == null ? void 0 : S.children) ||
                    (S == null ? void 0 : S.routes) ||
                    [],
                  k,
                  tt,
                  Z,
                );
              },
              [
                tt,
                k,
                Z,
                wt,
                S == null ? void 0 : S.children,
                S == null ? void 0 : S.routes,
              ],
            ),
            Tn = qt || {},
            Jo = Tn.breadcrumb,
            cr = Tn.breadcrumbMap,
            sr = Tn.menuData,
            Bt = sr === void 0 ? [] : sr;
          Ze &&
            k !== null &&
            k !== void 0 &&
            k.request &&
            (Ze.current = {
              reload: function () {
                Qt();
              },
            });
          var jt = (0, v.useMemo)(
              function () {
                return Tr(O.pathname || '/', Bt || [], !0);
              },
              [O.pathname, Bt],
            ),
            Rn = (0, v.useMemo)(
              function () {
                return Array.from(
                  new Set(
                    jt.map(function (Le) {
                      return Le.key || Le.path || '';
                    }),
                  ),
                );
              },
              [jt],
            ),
            dr = jt[jt.length - 1] || {},
            fr = zo(dr),
            en = (0, s.Z)((0, s.Z)({}, e), fr),
            Yo = en.fixSiderbar,
            gi = en.navTheme,
            Pt = en.layout,
            Qo = (0, I.Z)(en, Wo),
            xt = X(),
            Ct = (0, v.useMemo)(
              function () {
                return (xt === 'sm' || xt === 'xs') && !e.disableMobile;
              },
              [xt, e.disableMobile],
            ),
            qo = Pt !== 'top' && !Ct,
            ei = (0, $.Z)(
              function () {
                return E !== void 0 ? E : !!(Ct || xt === 'md');
              },
              { value: e.collapsed, onChange: W },
            ),
            vr = (0, p.Z)(ei, 2),
            Nt = vr[0],
            mr = vr[1],
            bt = (0, On.Z)(
              (0, s.Z)(
                (0, s.Z)(
                  (0, s.Z)({ prefixCls: Pe }, e),
                  {},
                  { siderWidth: Ie },
                  fr,
                ),
                {},
                {
                  formatMessage: tt,
                  breadcrumb: Jo,
                  menu: (0, s.Z)(
                    (0, s.Z)({}, k),
                    {},
                    { type: me || (k == null ? void 0 : k.type), loading: ze },
                  ),
                  layout: Pt,
                },
              ),
              ['className', 'style', 'breadcrumbRender'],
            ),
            wn = _o(
              (0, s.Z)(
                (0, s.Z)({ pathname: O.pathname }, bt),
                {},
                { breadcrumbMap: cr },
              ),
              e,
            ),
            ti = Ao(
              (0, s.Z)(
                (0, s.Z)({}, bt),
                {},
                { breadcrumbRender: e.breadcrumbRender, breadcrumbMap: cr },
              ),
              e,
            ),
            tn = Ko(
              (0, s.Z)(
                (0, s.Z)({}, bt),
                {},
                { menuData: Bt, onCollapse: mr, isMobile: Ct, collapsed: Nt },
              ),
              Rn,
            ),
            Bn = ko(
              (0, s.Z)(
                (0, s.Z)({}, bt),
                {},
                {
                  children: null,
                  hasSiderMenu: !!tn,
                  menuData: Bt,
                  isMobile: Ct,
                  collapsed: Nt,
                  onCollapse: mr,
                },
              ),
              Rn,
            ),
            gr = Uo((0, s.Z)({ isMobile: Ct, collapsed: Nt }, bt)),
            ni = (0, v.useContext)(ir.X),
            ri = ni.isChildrenLayout,
            jn = xe !== void 0 ? xe : ri,
            Ye = ''.concat(Pe, '-layout'),
            pr = To(Ye),
            ai = pr.wrapSSR,
            Pn = pr.hashId,
            oi = fe()(
              e.className,
              Pn,
              'ant-design-pro',
              Ye,
              (0, o.Z)(
                (0, o.Z)(
                  (0, o.Z)(
                    (0, o.Z)(
                      (0, o.Z)({}, 'screen-'.concat(xt), xt),
                      ''.concat(Ye, '-top-menu'),
                      Pt === 'top',
                    ),
                    ''.concat(Ye, '-is-children'),
                    jn,
                  ),
                  ''.concat(Ye, '-fix-siderbar'),
                  Yo,
                ),
                ''.concat(Ye, '-').concat(Pt),
                Pt,
              ),
            ),
            ii = Go(!!qo, Nt, Ie),
            hr = { position: 'relative' };
          (jn || (G && G.minHeight)) && (hr.minHeight = 0),
            (0, v.useEffect)(
              function () {
                var Le;
                (Le = e.onPageChange) === null ||
                  Le === void 0 ||
                  Le.call(e, e.location);
              },
              [
                O.pathname,
                (n = O.pathname) === null || n === void 0 ? void 0 : n.search,
              ],
            );
          var li = (0, v.useState)(!1),
            yr = (0, p.Z)(li, 2),
            xr = yr[0],
            ui = yr[1],
            ci = (0, v.useState)(0),
            Cr = (0, p.Z)(ci, 2),
            br = Cr[0],
            si = Cr[1];
          h(wn, e.title || !1);
          var di = (0, v.useContext)(w.L_),
            ce = di.token,
            Sr = (0, v.useMemo)(
              function () {
                return A && A.length > 0
                  ? A == null
                    ? void 0
                    : A.map(function (Le, rt) {
                        return (0,
                        c.jsx)('img', { src: Le.src, style: (0, s.Z)({ position: 'absolute' }, Le) }, rt);
                      })
                  : null;
              },
              [A],
            );
          return ai(
            (0, c.jsx)(ir.X.Provider, {
              value: (0, s.Z)(
                (0, s.Z)({}, bt),
                {},
                {
                  breadcrumb: ti,
                  menuData: Bt,
                  isMobile: Ct,
                  collapsed: Nt,
                  hasPageContainer: br,
                  setHasPageContainer: si,
                  isChildrenLayout: !0,
                  title: wn.pageName,
                  hasSiderMenu: !!tn,
                  hasHeader: !!Bn,
                  siderWidth: ii,
                  hasFooter: !!gr,
                  hasFooterToolbar: xr,
                  setHasFooterToolbar: ui,
                  pageTitleInfo: wn,
                  matchMenus: jt,
                  matchMenuKeys: Rn,
                  currentMenu: dr,
                },
              ),
              children: e.pure
                ? (0, c.jsx)(c.Fragment, { children: _ })
                : (0, c.jsxs)('div', {
                    className: oi,
                    children: [
                      Sr ||
                      ((a = ce.layout) !== null && a !== void 0 && a.bgLayout)
                        ? (0, c.jsx)('div', {
                            className: fe()(''.concat(Ye, '-bg-list'), Pn),
                            children: Sr,
                          })
                        : null,
                      (0, c.jsxs)(ct, {
                        style: (0, s.Z)(
                          {
                            minHeight: '100%',
                            flexDirection: tn ? 'row' : void 0,
                          },
                          ue,
                        ),
                        children: [
                          (0, c.jsx)(Ge.ZP, {
                            theme: {
                              hashed: (0, w.nu)(),
                              token: {
                                controlHeightLG:
                                  ((l = ce.layout) === null ||
                                  l === void 0 ||
                                  (l = l.sider) === null ||
                                  l === void 0
                                    ? void 0
                                    : l.menuHeight) ||
                                  (ce == null ? void 0 : ce.controlHeightLG),
                              },
                              components: {
                                Menu: D({
                                  colorItemBg:
                                    ((i = ce.layout) === null ||
                                    i === void 0 ||
                                    (i = i.sider) === null ||
                                    i === void 0
                                      ? void 0
                                      : i.colorMenuBackground) || 'transparent',
                                  colorSubItemBg:
                                    ((d = ce.layout) === null ||
                                    d === void 0 ||
                                    (d = d.sider) === null ||
                                    d === void 0
                                      ? void 0
                                      : d.colorMenuBackground) || 'transparent',
                                  radiusItem: ce.borderRadius,
                                  colorItemBgSelected:
                                    ((f = ce.layout) === null ||
                                    f === void 0 ||
                                    (f = f.sider) === null ||
                                    f === void 0
                                      ? void 0
                                      : f.colorBgMenuItemSelected) ||
                                    (ce == null ? void 0 : ce.colorBgTextHover),
                                  colorItemBgHover:
                                    ((m = ce.layout) === null ||
                                    m === void 0 ||
                                    (m = m.sider) === null ||
                                    m === void 0
                                      ? void 0
                                      : m.colorBgMenuItemHover) ||
                                    (ce == null ? void 0 : ce.colorBgTextHover),
                                  colorItemBgActive:
                                    ((g = ce.layout) === null ||
                                    g === void 0 ||
                                    (g = g.sider) === null ||
                                    g === void 0
                                      ? void 0
                                      : g.colorBgMenuItemActive) ||
                                    (ce == null
                                      ? void 0
                                      : ce.colorBgTextActive),
                                  colorItemBgSelectedHorizontal:
                                    ((b = ce.layout) === null ||
                                    b === void 0 ||
                                    (b = b.sider) === null ||
                                    b === void 0
                                      ? void 0
                                      : b.colorBgMenuItemSelected) ||
                                    (ce == null ? void 0 : ce.colorBgTextHover),
                                  colorActiveBarWidth: 0,
                                  colorActiveBarHeight: 0,
                                  colorActiveBarBorderSize: 0,
                                  colorItemText:
                                    ((y = ce.layout) === null ||
                                    y === void 0 ||
                                    (y = y.sider) === null ||
                                    y === void 0
                                      ? void 0
                                      : y.colorTextMenu) ||
                                    (ce == null
                                      ? void 0
                                      : ce.colorTextSecondary),
                                  colorItemTextHover:
                                    ((P = ce.layout) === null ||
                                    P === void 0 ||
                                    (P = P.sider) === null ||
                                    P === void 0
                                      ? void 0
                                      : P.colorTextMenuItemHover) ||
                                    'rgba(0, 0, 0, 0.85)',
                                  colorItemTextSelected:
                                    ((F = ce.layout) === null ||
                                    F === void 0 ||
                                    (F = F.sider) === null ||
                                    F === void 0
                                      ? void 0
                                      : F.colorTextMenuSelected) ||
                                    'rgba(0, 0, 0, 1)',
                                  popupBg:
                                    ce == null ? void 0 : ce.colorBgElevated,
                                  subMenuItemBg:
                                    ce == null ? void 0 : ce.colorBgElevated,
                                  darkSubMenuItemBg: 'transparent',
                                  darkPopupBg:
                                    ce == null ? void 0 : ce.colorBgElevated,
                                }),
                              },
                            },
                            children: tn,
                          }),
                          (0, c.jsxs)('div', {
                            style: hr,
                            className: ''
                              .concat(Ye, '-container ')
                              .concat(Pn)
                              .trim(),
                            children: [
                              Bn,
                              (0, c.jsx)(
                                Ur,
                                (0, s.Z)(
                                  (0, s.Z)(
                                    {
                                      hasPageContainer: br,
                                      isChildrenLayout: jn,
                                    },
                                    Qo,
                                  ),
                                  {},
                                  {
                                    hasHeader: !!Bn,
                                    prefixCls: Ye,
                                    style: G,
                                    children: pe ? (0, c.jsx)(ao.S, {}) : _,
                                  },
                                ),
                              ),
                              gr,
                              xr &&
                                (0, c.jsx)('div', {
                                  className: ''.concat(Ye, '-has-footer'),
                                  style: {
                                    height: 64,
                                    marginBlockStart:
                                      (L = ce.layout) === null ||
                                      L === void 0 ||
                                      (L = L.pageContainer) === null ||
                                      L === void 0
                                        ? void 0
                                        : L.paddingBlockPageContainerContent,
                                  },
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          );
        },
        Xo = function (e) {
          var t = e.colorPrimary,
            n =
              e.navTheme !== void 0 ? { dark: e.navTheme === 'realDark' } : {};
          return (0, c.jsx)(Ge.ZP, {
            theme: t ? { token: { colorPrimary: t } } : void 0,
            children: (0, c.jsx)(
              w._Y,
              (0, s.Z)(
                (0, s.Z)({ autoClearCache: !0 }, n),
                {},
                {
                  token: e.token,
                  prefixCls: e.prefixCls,
                  children: (0, c.jsx)(
                    Vo,
                    (0, s.Z)(
                      (0, s.Z)({ logo: (0, c.jsx)(Kr, {}) }, Gn),
                      {},
                      { location: (0, ne.j)() ? window.location : void 0 },
                      e,
                    ),
                  ),
                },
              ),
            ),
          });
        };
    },
    7666: function (R, H, u) {
      'use strict';
      u.d(H, {
        X: function () {
          return s;
        },
        b: function () {
          return p;
        },
      });
      var o = u(68200),
        C = u(28520),
        M = u(28847),
        I = u(84425),
        p = function () {
          var $;
          return typeof I == 'undefined'
            ? o.Z
            : (($ = I) === null ||
              I === void 0 ||
              (I = { NODE_ENV: 'production', PUBLIC_PATH: '/howareyou/' }) ===
                null ||
              I === void 0
                ? void 0
                : I.ANTD_VERSION) || o.Z;
        },
        s = function ($, v) {
          var te =
            (0, M.n)(p(), '4.23.0') > -1
              ? { open: $, onOpenChange: v }
              : { visible: $, onVisibleChange: v };
          return (0, C.Y)(te);
        };
    },
    97384: function (R, H, u) {
      'use strict';
      u.d(H, {
        D: function () {
          return p;
        },
      });
      var o = u(62812),
        C = u(47768),
        M = u(82702),
        I = u(47174);
      function p(s, w) {
        var $ = (0, I.J)(s),
          v = (0, M.useRef)(),
          te = (0, M.useCallback)(function () {
            v.current && (clearTimeout(v.current), (v.current = null));
          }, []),
          oe = (0, M.useCallback)(
            (0, C.Z)(
              (0, o.Z)().mark(function Ce() {
                var X,
                  ne,
                  h,
                  B = arguments;
                return (0, o.Z)().wrap(function (D) {
                  for (;;)
                    switch ((D.prev = D.next)) {
                      case 0:
                        for (X = B.length, ne = new Array(X), h = 0; h < X; h++)
                          ne[h] = B[h];
                        if (!(w === 0 || w === void 0)) {
                          D.next = 3;
                          break;
                        }
                        return D.abrupt('return', $.apply(void 0, ne));
                      case 3:
                        return (
                          te(),
                          D.abrupt(
                            'return',
                            new Promise(function (se) {
                              v.current = setTimeout(
                                (0, C.Z)(
                                  (0, o.Z)().mark(function U() {
                                    return (0, o.Z)().wrap(function (V) {
                                      for (;;)
                                        switch ((V.prev = V.next)) {
                                          case 0:
                                            return (
                                              (V.t0 = se),
                                              (V.next = 3),
                                              $.apply(void 0, ne)
                                            );
                                          case 3:
                                            return (
                                              (V.t1 = V.sent),
                                              (0, V.t0)(V.t1),
                                              V.abrupt('return')
                                            );
                                          case 6:
                                          case 'end':
                                            return V.stop();
                                        }
                                    }, U);
                                  }),
                                ),
                                w,
                              );
                            }),
                          )
                        );
                      case 5:
                      case 'end':
                        return D.stop();
                    }
                }, Ce);
              }),
            ),
            [$, te, w],
          );
        return (
          (0, M.useEffect)(
            function () {
              return te;
            },
            [te],
          ),
          { run: oe, cancel: te }
        );
      }
    },
    47174: function (R, H, u) {
      'use strict';
      u.d(H, {
        J: function () {
          return M;
        },
      });
      var o = u(80104),
        C = u(82702),
        M = function (p) {
          var s = (0, C.useRef)(null);
          return (
            (s.current = p),
            (0, C.useCallback)(function () {
              for (
                var w, $ = arguments.length, v = new Array($), te = 0;
                te < $;
                te++
              )
                v[te] = arguments[te];
              return (w = s.current) === null || w === void 0
                ? void 0
                : w.call.apply(w, [s].concat((0, o.Z)(v)));
            }, [])
          );
        };
    },
    28520: function (R, H, u) {
      'use strict';
      u.d(H, {
        Y: function () {
          return o;
        },
      });
      var o = function (M) {
        var I = {};
        if (
          (Object.keys(M || {}).forEach(function (p) {
            M[p] !== void 0 && (I[p] = M[p]);
          }),
          !(Object.keys(I).length < 1))
        )
          return I;
      };
    },
    94835: function (R, H) {
      var u;
      function o(h) {
        '@babel/helpers - typeof';
        return (
          (o =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (B) {
                  return typeof B;
                }
              : function (B) {
                  return B &&
                    typeof Symbol == 'function' &&
                    B.constructor === Symbol &&
                    B !== Symbol.prototype
                    ? 'symbol'
                    : typeof B;
                }),
          o(h)
        );
      }
      (u = { value: !0 }), (H.Bo = u = u = u = u = u = u = void 0);
      function C(h) {
        for (var B = [], T = 0; T < h.length; ) {
          var D = h[T];
          if (D === '*' || D === '+' || D === '?') {
            B.push({ type: 'MODIFIER', index: T, value: h[T++] });
            continue;
          }
          if (D === '\\') {
            B.push({ type: 'ESCAPED_CHAR', index: T++, value: h[T++] });
            continue;
          }
          if (D === '{') {
            B.push({ type: 'OPEN', index: T, value: h[T++] });
            continue;
          }
          if (D === '}') {
            B.push({ type: 'CLOSE', index: T, value: h[T++] });
            continue;
          }
          if (D === ':') {
            for (var se = '', U = T + 1; U < h.length; ) {
              var z = h.charCodeAt(U);
              if (
                (z >= 48 && z <= 57) ||
                (z >= 65 && z <= 90) ||
                (z >= 97 && z <= 122) ||
                z === 95
              ) {
                se += h[U++];
                continue;
              }
              break;
            }
            if (!se) throw new TypeError('Missing parameter name at ' + T);
            B.push({ type: 'NAME', index: T, value: se }), (T = U);
            continue;
          }
          if (D === '(') {
            var V = 1,
              ie = '',
              U = T + 1;
            if (h[U] === '?')
              throw new TypeError('Pattern cannot start with "?" at ' + U);
            for (; U < h.length; ) {
              if (h[U] === '\\') {
                ie += h[U++] + h[U++];
                continue;
              }
              if (h[U] === ')') {
                if ((V--, V === 0)) {
                  U++;
                  break;
                }
              } else if (h[U] === '(' && (V++, h[U + 1] !== '?'))
                throw new TypeError('Capturing groups are not allowed at ' + U);
              ie += h[U++];
            }
            if (V) throw new TypeError('Unbalanced pattern at ' + T);
            if (!ie) throw new TypeError('Missing pattern at ' + T);
            B.push({ type: 'PATTERN', index: T, value: ie }), (T = U);
            continue;
          }
          B.push({ type: 'CHAR', index: T, value: h[T++] });
        }
        return B.push({ type: 'END', index: T, value: '' }), B;
      }
      function M(h, B) {
        B === void 0 && (B = {});
        for (
          var T = C(h),
            D = B.prefixes,
            se = D === void 0 ? './' : D,
            U = '[^' + $(B.delimiter || '/#?') + ']+?',
            z = [],
            V = 0,
            ie = 0,
            le = '',
            ee = function (Ue) {
              if (ie < T.length && T[ie].type === Ue) return T[ie++].value;
            },
            re = function (Ue) {
              var Xe = ee(Ue);
              if (Xe !== void 0) return Xe;
              var at = T[ie],
                At = at.type,
                st = at.index;
              throw new TypeError(
                'Unexpected ' + At + ' at ' + st + ', expected ' + Ue,
              );
            },
            he = function () {
              for (var Ue = '', Xe; (Xe = ee('CHAR') || ee('ESCAPED_CHAR')); )
                Ue += Xe;
              return Ue;
            };
          ie < T.length;

        ) {
          var ge = ee('CHAR'),
            Y = ee('NAME'),
            de = ee('PATTERN');
          if (Y || de) {
            var j = ge || '';
            se.indexOf(j) === -1 && ((le += j), (j = '')),
              le && (z.push(le), (le = '')),
              z.push({
                name: Y || V++,
                prefix: j,
                suffix: '',
                pattern: de || U,
                modifier: ee('MODIFIER') || '',
              });
            continue;
          }
          var be = ge || ee('ESCAPED_CHAR');
          if (be) {
            le += be;
            continue;
          }
          le && (z.push(le), (le = ''));
          var Ee = ee('OPEN');
          if (Ee) {
            var j = he(),
              We = ee('NAME') || '',
              Be = ee('PATTERN') || '',
              ke = he();
            re('CLOSE'),
              z.push({
                name: We || (Be ? V++ : ''),
                pattern: We && !Be ? U : Be,
                prefix: j,
                suffix: ke,
                modifier: ee('MODIFIER') || '',
              });
            continue;
          }
          re('END');
        }
        return z;
      }
      u = M;
      function I(h, B) {
        return p(M(h, B), B);
      }
      u = I;
      function p(h, B) {
        B === void 0 && (B = {});
        var T = v(B),
          D = B.encode,
          se =
            D === void 0
              ? function (ie) {
                  return ie;
                }
              : D,
          U = B.validate,
          z = U === void 0 ? !0 : U,
          V = h.map(function (ie) {
            if (o(ie) === 'object')
              return new RegExp('^(?:' + ie.pattern + ')$', T);
          });
        return function (ie) {
          for (var le = '', ee = 0; ee < h.length; ee++) {
            var re = h[ee];
            if (typeof re == 'string') {
              le += re;
              continue;
            }
            var he = ie ? ie[re.name] : void 0,
              ge = re.modifier === '?' || re.modifier === '*',
              Y = re.modifier === '*' || re.modifier === '+';
            if (Array.isArray(he)) {
              if (!Y)
                throw new TypeError(
                  'Expected "' + re.name + '" to not repeat, but got an array',
                );
              if (he.length === 0) {
                if (ge) continue;
                throw new TypeError(
                  'Expected "' + re.name + '" to not be empty',
                );
              }
              for (var de = 0; de < he.length; de++) {
                var j = se(he[de], re);
                if (z && !V[ee].test(j))
                  throw new TypeError(
                    'Expected all "' +
                      re.name +
                      '" to match "' +
                      re.pattern +
                      '", but got "' +
                      j +
                      '"',
                  );
                le += re.prefix + j + re.suffix;
              }
              continue;
            }
            if (typeof he == 'string' || typeof he == 'number') {
              var j = se(String(he), re);
              if (z && !V[ee].test(j))
                throw new TypeError(
                  'Expected "' +
                    re.name +
                    '" to match "' +
                    re.pattern +
                    '", but got "' +
                    j +
                    '"',
                );
              le += re.prefix + j + re.suffix;
              continue;
            }
            if (!ge) {
              var be = Y ? 'an array' : 'a string';
              throw new TypeError('Expected "' + re.name + '" to be ' + be);
            }
          }
          return le;
        };
      }
      u = p;
      function s(h, B) {
        var T = [],
          D = ne(h, T, B);
        return w(D, T, B);
      }
      u = s;
      function w(h, B, T) {
        T === void 0 && (T = {});
        var D = T.decode,
          se =
            D === void 0
              ? function (U) {
                  return U;
                }
              : D;
        return function (U) {
          var z = h.exec(U);
          if (!z) return !1;
          for (
            var V = z[0],
              ie = z.index,
              le = Object.create(null),
              ee = function (ge) {
                if (z[ge] === void 0) return 'continue';
                var Y = B[ge - 1];
                Y.modifier === '*' || Y.modifier === '+'
                  ? (le[Y.name] = z[ge]
                      .split(Y.prefix + Y.suffix)
                      .map(function (de) {
                        return se(de, Y);
                      }))
                  : (le[Y.name] = se(z[ge], Y));
              },
              re = 1;
            re < z.length;
            re++
          )
            ee(re);
          return { path: V, index: ie, params: le };
        };
      }
      u = w;
      function $(h) {
        return h.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function v(h) {
        return h && h.sensitive ? '' : 'i';
      }
      function te(h, B) {
        if (!B) return h;
        var T = h.source.match(/\((?!\?)/g);
        if (T)
          for (var D = 0; D < T.length; D++)
            B.push({
              name: D,
              prefix: '',
              suffix: '',
              modifier: '',
              pattern: '',
            });
        return h;
      }
      function oe(h, B, T) {
        var D = h.map(function (se) {
          return ne(se, B, T).source;
        });
        return new RegExp('(?:' + D.join('|') + ')', v(T));
      }
      function Ce(h, B, T) {
        return X(M(h, T), B, T);
      }
      function X(h, B, T) {
        T === void 0 && (T = {});
        for (
          var D = T.strict,
            se = D === void 0 ? !1 : D,
            U = T.start,
            z = U === void 0 ? !0 : U,
            V = T.end,
            ie = V === void 0 ? !0 : V,
            le = T.encode,
            ee =
              le === void 0
                ? function (De) {
                    return De;
                  }
                : le,
            re = '[' + $(T.endsWith || '') + ']|$',
            he = '[' + $(T.delimiter || '/#?') + ']',
            ge = z ? '^' : '',
            Y = 0,
            de = h;
          Y < de.length;
          Y++
        ) {
          var j = de[Y];
          if (typeof j == 'string') ge += $(ee(j));
          else {
            var be = $(ee(j.prefix)),
              Ee = $(ee(j.suffix));
            if (j.pattern)
              if ((B && B.push(j), be || Ee))
                if (j.modifier === '+' || j.modifier === '*') {
                  var We = j.modifier === '*' ? '?' : '';
                  ge +=
                    '(?:' +
                    be +
                    '((?:' +
                    j.pattern +
                    ')(?:' +
                    Ee +
                    be +
                    '(?:' +
                    j.pattern +
                    '))*)' +
                    Ee +
                    ')' +
                    We;
                } else
                  ge +=
                    '(?:' + be + '(' + j.pattern + ')' + Ee + ')' + j.modifier;
              else ge += '(' + j.pattern + ')' + j.modifier;
            else ge += '(?:' + be + Ee + ')' + j.modifier;
          }
        }
        if (ie)
          se || (ge += he + '?'), (ge += T.endsWith ? '(?=' + re + ')' : '$');
        else {
          var Be = h[h.length - 1],
            ke =
              typeof Be == 'string'
                ? he.indexOf(Be[Be.length - 1]) > -1
                : Be === void 0;
          se || (ge += '(?:' + he + '(?=' + re + '))?'),
            ke || (ge += '(?=' + he + '|' + re + ')');
        }
        return new RegExp(ge, v(T));
      }
      u = X;
      function ne(h, B, T) {
        return h instanceof RegExp
          ? te(h, B)
          : Array.isArray(h)
          ? oe(h, B, T)
          : Ce(h, B, T);
      }
      H.Bo = ne;
    },
    46062: function (R, H, u) {
      var o = u(9126),
        C = o.Symbol;
      R.exports = C;
    },
    25089: function (R) {
      function H(u, o) {
        for (var C = -1, M = u == null ? 0 : u.length, I = Array(M); ++C < M; )
          I[C] = o(u[C], C, u);
        return I;
      }
      R.exports = H;
    },
    23679: function (R) {
      function H(u, o, C, M) {
        var I = -1,
          p = u == null ? 0 : u.length;
        for (M && p && (C = u[++I]); ++I < p; ) C = o(C, u[I], I, u);
        return C;
      }
      R.exports = H;
    },
    74100: function (R) {
      function H(u) {
        return u.split('');
      }
      R.exports = H;
    },
    70070: function (R) {
      var H = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function u(o) {
        return o.match(H) || [];
      }
      R.exports = u;
    },
    24402: function (R, H, u) {
      var o = u(46062),
        C = u(27736),
        M = u(42608),
        I = '[object Null]',
        p = '[object Undefined]',
        s = o ? o.toStringTag : void 0;
      function w($) {
        return $ == null
          ? $ === void 0
            ? p
            : I
          : s && s in Object($)
          ? C($)
          : M($);
      }
      R.exports = w;
    },
    18428: function (R) {
      function H(u) {
        return function (o) {
          return u == null ? void 0 : u[o];
        };
      }
      R.exports = H;
    },
    20024: function (R) {
      function H(u, o, C) {
        var M = -1,
          I = u.length;
        o < 0 && (o = -o > I ? 0 : I + o),
          (C = C > I ? I : C),
          C < 0 && (C += I),
          (I = o > C ? 0 : (C - o) >>> 0),
          (o >>>= 0);
        for (var p = Array(I); ++M < I; ) p[M] = u[M + o];
        return p;
      }
      R.exports = H;
    },
    37689: function (R, H, u) {
      var o = u(46062),
        C = u(25089),
        M = u(14637),
        I = u(11580),
        p = 1 / 0,
        s = o ? o.prototype : void 0,
        w = s ? s.toString : void 0;
      function $(v) {
        if (typeof v == 'string') return v;
        if (M(v)) return C(v, $) + '';
        if (I(v)) return w ? w.call(v) : '';
        var te = v + '';
        return te == '0' && 1 / v == -p ? '-0' : te;
      }
      R.exports = $;
    },
    98531: function (R, H, u) {
      var o = u(20024);
      function C(M, I, p) {
        var s = M.length;
        return (p = p === void 0 ? s : p), !I && p >= s ? M : o(M, I, p);
      }
      R.exports = C;
    },
    31433: function (R, H, u) {
      var o = u(98531),
        C = u(48328),
        M = u(99710),
        I = u(4735);
      function p(s) {
        return function (w) {
          w = I(w);
          var $ = C(w) ? M(w) : void 0,
            v = $ ? $[0] : w.charAt(0),
            te = $ ? o($, 1).join('') : w.slice(1);
          return v[s]() + te;
        };
      }
      R.exports = p;
    },
    17602: function (R, H, u) {
      var o = u(23679),
        C = u(4834),
        M = u(64322),
        I = "['\u2019]",
        p = RegExp(I, 'g');
      function s(w) {
        return function ($) {
          return o(M(C($).replace(p, '')), w, '');
        };
      }
      R.exports = s;
    },
    92105: function (R, H, u) {
      var o = u(18428),
        C = {
          À: 'A',
          Á: 'A',
          Â: 'A',
          Ã: 'A',
          Ä: 'A',
          Å: 'A',
          à: 'a',
          á: 'a',
          â: 'a',
          ã: 'a',
          ä: 'a',
          å: 'a',
          Ç: 'C',
          ç: 'c',
          Ð: 'D',
          ð: 'd',
          È: 'E',
          É: 'E',
          Ê: 'E',
          Ë: 'E',
          è: 'e',
          é: 'e',
          ê: 'e',
          ë: 'e',
          Ì: 'I',
          Í: 'I',
          Î: 'I',
          Ï: 'I',
          ì: 'i',
          í: 'i',
          î: 'i',
          ï: 'i',
          Ñ: 'N',
          ñ: 'n',
          Ò: 'O',
          Ó: 'O',
          Ô: 'O',
          Õ: 'O',
          Ö: 'O',
          Ø: 'O',
          ò: 'o',
          ó: 'o',
          ô: 'o',
          õ: 'o',
          ö: 'o',
          ø: 'o',
          Ù: 'U',
          Ú: 'U',
          Û: 'U',
          Ü: 'U',
          ù: 'u',
          ú: 'u',
          û: 'u',
          ü: 'u',
          Ý: 'Y',
          ý: 'y',
          ÿ: 'y',
          Æ: 'Ae',
          æ: 'ae',
          Þ: 'Th',
          þ: 'th',
          ß: 'ss',
          Ā: 'A',
          Ă: 'A',
          Ą: 'A',
          ā: 'a',
          ă: 'a',
          ą: 'a',
          Ć: 'C',
          Ĉ: 'C',
          Ċ: 'C',
          Č: 'C',
          ć: 'c',
          ĉ: 'c',
          ċ: 'c',
          č: 'c',
          Ď: 'D',
          Đ: 'D',
          ď: 'd',
          đ: 'd',
          Ē: 'E',
          Ĕ: 'E',
          Ė: 'E',
          Ę: 'E',
          Ě: 'E',
          ē: 'e',
          ĕ: 'e',
          ė: 'e',
          ę: 'e',
          ě: 'e',
          Ĝ: 'G',
          Ğ: 'G',
          Ġ: 'G',
          Ģ: 'G',
          ĝ: 'g',
          ğ: 'g',
          ġ: 'g',
          ģ: 'g',
          Ĥ: 'H',
          Ħ: 'H',
          ĥ: 'h',
          ħ: 'h',
          Ĩ: 'I',
          Ī: 'I',
          Ĭ: 'I',
          Į: 'I',
          İ: 'I',
          ĩ: 'i',
          ī: 'i',
          ĭ: 'i',
          į: 'i',
          ı: 'i',
          Ĵ: 'J',
          ĵ: 'j',
          Ķ: 'K',
          ķ: 'k',
          ĸ: 'k',
          Ĺ: 'L',
          Ļ: 'L',
          Ľ: 'L',
          Ŀ: 'L',
          Ł: 'L',
          ĺ: 'l',
          ļ: 'l',
          ľ: 'l',
          ŀ: 'l',
          ł: 'l',
          Ń: 'N',
          Ņ: 'N',
          Ň: 'N',
          Ŋ: 'N',
          ń: 'n',
          ņ: 'n',
          ň: 'n',
          ŋ: 'n',
          Ō: 'O',
          Ŏ: 'O',
          Ő: 'O',
          ō: 'o',
          ŏ: 'o',
          ő: 'o',
          Ŕ: 'R',
          Ŗ: 'R',
          Ř: 'R',
          ŕ: 'r',
          ŗ: 'r',
          ř: 'r',
          Ś: 'S',
          Ŝ: 'S',
          Ş: 'S',
          Š: 'S',
          ś: 's',
          ŝ: 's',
          ş: 's',
          š: 's',
          Ţ: 'T',
          Ť: 'T',
          Ŧ: 'T',
          ţ: 't',
          ť: 't',
          ŧ: 't',
          Ũ: 'U',
          Ū: 'U',
          Ŭ: 'U',
          Ů: 'U',
          Ű: 'U',
          Ų: 'U',
          ũ: 'u',
          ū: 'u',
          ŭ: 'u',
          ů: 'u',
          ű: 'u',
          ų: 'u',
          Ŵ: 'W',
          ŵ: 'w',
          Ŷ: 'Y',
          ŷ: 'y',
          Ÿ: 'Y',
          Ź: 'Z',
          Ż: 'Z',
          Ž: 'Z',
          ź: 'z',
          ż: 'z',
          ž: 'z',
          Ĳ: 'IJ',
          ĳ: 'ij',
          Œ: 'Oe',
          œ: 'oe',
          ŉ: "'n",
          ſ: 's',
        },
        M = o(C);
      R.exports = M;
    },
    17038: function (R, H, u) {
      var o = typeof u.g == 'object' && u.g && u.g.Object === Object && u.g;
      R.exports = o;
    },
    27736: function (R, H, u) {
      var o = u(46062),
        C = Object.prototype,
        M = C.hasOwnProperty,
        I = C.toString,
        p = o ? o.toStringTag : void 0;
      function s(w) {
        var $ = M.call(w, p),
          v = w[p];
        try {
          w[p] = void 0;
          var te = !0;
        } catch (Ce) {}
        var oe = I.call(w);
        return te && ($ ? (w[p] = v) : delete w[p]), oe;
      }
      R.exports = s;
    },
    48328: function (R) {
      var H = '\\ud800-\\udfff',
        u = '\\u0300-\\u036f',
        o = '\\ufe20-\\ufe2f',
        C = '\\u20d0-\\u20ff',
        M = u + o + C,
        I = '\\ufe0e\\ufe0f',
        p = '\\u200d',
        s = RegExp('[' + p + H + M + I + ']');
      function w($) {
        return s.test($);
      }
      R.exports = w;
    },
    28224: function (R) {
      var H =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function u(o) {
        return H.test(o);
      }
      R.exports = u;
    },
    42608: function (R) {
      var H = Object.prototype,
        u = H.toString;
      function o(C) {
        return u.call(C);
      }
      R.exports = o;
    },
    9126: function (R, H, u) {
      var o = u(17038),
        C = typeof self == 'object' && self && self.Object === Object && self,
        M = o || C || Function('return this')();
      R.exports = M;
    },
    99710: function (R, H, u) {
      var o = u(74100),
        C = u(48328),
        M = u(68917);
      function I(p) {
        return C(p) ? M(p) : o(p);
      }
      R.exports = I;
    },
    68917: function (R) {
      var H = '\\ud800-\\udfff',
        u = '\\u0300-\\u036f',
        o = '\\ufe20-\\ufe2f',
        C = '\\u20d0-\\u20ff',
        M = u + o + C,
        I = '\\ufe0e\\ufe0f',
        p = '[' + H + ']',
        s = '[' + M + ']',
        w = '\\ud83c[\\udffb-\\udfff]',
        $ = '(?:' + s + '|' + w + ')',
        v = '[^' + H + ']',
        te = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        oe = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        Ce = '\\u200d',
        X = $ + '?',
        ne = '[' + I + ']?',
        h = '(?:' + Ce + '(?:' + [v, te, oe].join('|') + ')' + ne + X + ')*',
        B = ne + X + h,
        T = '(?:' + [v + s + '?', s, te, oe, p].join('|') + ')',
        D = RegExp(w + '(?=' + w + ')|' + T + B, 'g');
      function se(U) {
        return U.match(D) || [];
      }
      R.exports = se;
    },
    7410: function (R) {
      var H = '\\ud800-\\udfff',
        u = '\\u0300-\\u036f',
        o = '\\ufe20-\\ufe2f',
        C = '\\u20d0-\\u20ff',
        M = u + o + C,
        I = '\\u2700-\\u27bf',
        p = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        s = '\\xac\\xb1\\xd7\\xf7',
        w = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
        $ = '\\u2000-\\u206f',
        v =
          ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        te = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        oe = '\\ufe0e\\ufe0f',
        Ce = s + w + $ + v,
        X = "['\u2019]",
        ne = '[' + Ce + ']',
        h = '[' + M + ']',
        B = '\\d+',
        T = '[' + I + ']',
        D = '[' + p + ']',
        se = '[^' + H + Ce + B + I + p + te + ']',
        U = '\\ud83c[\\udffb-\\udfff]',
        z = '(?:' + h + '|' + U + ')',
        V = '[^' + H + ']',
        ie = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        le = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        ee = '[' + te + ']',
        re = '\\u200d',
        he = '(?:' + D + '|' + se + ')',
        ge = '(?:' + ee + '|' + se + ')',
        Y = '(?:' + X + '(?:d|ll|m|re|s|t|ve))?',
        de = '(?:' + X + '(?:D|LL|M|RE|S|T|VE))?',
        j = z + '?',
        be = '[' + oe + ']?',
        Ee = '(?:' + re + '(?:' + [V, ie, le].join('|') + ')' + be + j + ')*',
        We = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        Be = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        ke = be + j + Ee,
        De = '(?:' + [T, ie, le].join('|') + ')' + ke,
        Ue = RegExp(
          [
            ee + '?' + D + '+' + Y + '(?=' + [ne, ee, '$'].join('|') + ')',
            ge + '+' + de + '(?=' + [ne, ee + he, '$'].join('|') + ')',
            ee + '?' + he + '+' + Y,
            ee + '+' + de,
            Be,
            We,
            B,
            De,
          ].join('|'),
          'g',
        );
      function Xe(at) {
        return at.match(Ue) || [];
      }
      R.exports = Xe;
    },
    52085: function (R, H, u) {
      var o = u(29143),
        C = u(17602),
        M = C(function (I, p, s) {
          return (p = p.toLowerCase()), I + (s ? o(p) : p);
        });
      R.exports = M;
    },
    29143: function (R, H, u) {
      var o = u(4735),
        C = u(75418);
      function M(I) {
        return C(o(I).toLowerCase());
      }
      R.exports = M;
    },
    4834: function (R, H, u) {
      var o = u(92105),
        C = u(4735),
        M = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        I = '\\u0300-\\u036f',
        p = '\\ufe20-\\ufe2f',
        s = '\\u20d0-\\u20ff',
        w = I + p + s,
        $ = '[' + w + ']',
        v = RegExp($, 'g');
      function te(oe) {
        return (oe = C(oe)), oe && oe.replace(M, o).replace(v, '');
      }
      R.exports = te;
    },
    14637: function (R) {
      var H = Array.isArray;
      R.exports = H;
    },
    93544: function (R) {
      function H(u) {
        return u != null && typeof u == 'object';
      }
      R.exports = H;
    },
    11580: function (R, H, u) {
      var o = u(24402),
        C = u(93544),
        M = '[object Symbol]';
      function I(p) {
        return typeof p == 'symbol' || (C(p) && o(p) == M);
      }
      R.exports = I;
    },
    4735: function (R, H, u) {
      var o = u(37689);
      function C(M) {
        return M == null ? '' : o(M);
      }
      R.exports = C;
    },
    75418: function (R, H, u) {
      var o = u(31433),
        C = o('toUpperCase');
      R.exports = C;
    },
    64322: function (R, H, u) {
      var o = u(70070),
        C = u(28224),
        M = u(4735),
        I = u(7410);
      function p(s, w, $) {
        return (
          (s = M(s)),
          (w = $ ? void 0 : w),
          w === void 0 ? (C(s) ? I(s) : o(s)) : s.match(w) || []
        );
      }
      R.exports = p;
    },
    9240: function (R) {
      (R.exports = Ce),
        (R.exports.parse = C),
        (R.exports.compile = M),
        (R.exports.tokensToFunction = I),
        (R.exports.tokensToRegExp = oe);
      var H = '/',
        u = './',
        o = new RegExp(
          [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
          ].join('|'),
          'g',
        );
      function C(X, ne) {
        for (
          var h = [],
            B = 0,
            T = 0,
            D = '',
            se = (ne && ne.delimiter) || H,
            U = (ne && ne.delimiters) || u,
            z = !1,
            V;
          (V = o.exec(X)) !== null;

        ) {
          var ie = V[0],
            le = V[1],
            ee = V.index;
          if (((D += X.slice(T, ee)), (T = ee + ie.length), le)) {
            (D += le[1]), (z = !0);
            continue;
          }
          var re = '',
            he = X[T],
            ge = V[2],
            Y = V[3],
            de = V[4],
            j = V[5];
          if (!z && D.length) {
            var be = D.length - 1;
            U.indexOf(D[be]) > -1 && ((re = D[be]), (D = D.slice(0, be)));
          }
          D && (h.push(D), (D = ''), (z = !1));
          var Ee = re !== '' && he !== void 0 && he !== re,
            We = j === '+' || j === '*',
            Be = j === '?' || j === '*',
            ke = re || se,
            De = Y || de;
          h.push({
            name: ge || B++,
            prefix: re,
            delimiter: ke,
            optional: Be,
            repeat: We,
            partial: Ee,
            pattern: De ? s(De) : '[^' + p(ke) + ']+?',
          });
        }
        return (D || T < X.length) && h.push(D + X.substr(T)), h;
      }
      function M(X, ne) {
        return I(C(X, ne));
      }
      function I(X) {
        for (var ne = new Array(X.length), h = 0; h < X.length; h++)
          typeof X[h] == 'object' &&
            (ne[h] = new RegExp('^(?:' + X[h].pattern + ')$'));
        return function (B, T) {
          for (
            var D = '', se = (T && T.encode) || encodeURIComponent, U = 0;
            U < X.length;
            U++
          ) {
            var z = X[U];
            if (typeof z == 'string') {
              D += z;
              continue;
            }
            var V = B ? B[z.name] : void 0,
              ie;
            if (Array.isArray(V)) {
              if (!z.repeat)
                throw new TypeError(
                  'Expected "' + z.name + '" to not repeat, but got array',
                );
              if (V.length === 0) {
                if (z.optional) continue;
                throw new TypeError(
                  'Expected "' + z.name + '" to not be empty',
                );
              }
              for (var le = 0; le < V.length; le++) {
                if (((ie = se(V[le], z)), !ne[U].test(ie)))
                  throw new TypeError(
                    'Expected all "' +
                      z.name +
                      '" to match "' +
                      z.pattern +
                      '"',
                  );
                D += (le === 0 ? z.prefix : z.delimiter) + ie;
              }
              continue;
            }
            if (
              typeof V == 'string' ||
              typeof V == 'number' ||
              typeof V == 'boolean'
            ) {
              if (((ie = se(String(V), z)), !ne[U].test(ie)))
                throw new TypeError(
                  'Expected "' +
                    z.name +
                    '" to match "' +
                    z.pattern +
                    '", but got "' +
                    ie +
                    '"',
                );
              D += z.prefix + ie;
              continue;
            }
            if (z.optional) {
              z.partial && (D += z.prefix);
              continue;
            }
            throw new TypeError(
              'Expected "' +
                z.name +
                '" to be ' +
                (z.repeat ? 'an array' : 'a string'),
            );
          }
          return D;
        };
      }
      function p(X) {
        return X.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function s(X) {
        return X.replace(/([=!:$/()])/g, '\\$1');
      }
      function w(X) {
        return X && X.sensitive ? '' : 'i';
      }
      function $(X, ne) {
        if (!ne) return X;
        var h = X.source.match(/\((?!\?)/g);
        if (h)
          for (var B = 0; B < h.length; B++)
            ne.push({
              name: B,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              pattern: null,
            });
        return X;
      }
      function v(X, ne, h) {
        for (var B = [], T = 0; T < X.length; T++)
          B.push(Ce(X[T], ne, h).source);
        return new RegExp('(?:' + B.join('|') + ')', w(h));
      }
      function te(X, ne, h) {
        return oe(C(X, h), ne, h);
      }
      function oe(X, ne, h) {
        h = h || {};
        for (
          var B = h.strict,
            T = h.start !== !1,
            D = h.end !== !1,
            se = p(h.delimiter || H),
            U = h.delimiters || u,
            z = []
              .concat(h.endsWith || [])
              .map(p)
              .concat('$')
              .join('|'),
            V = T ? '^' : '',
            ie = X.length === 0,
            le = 0;
          le < X.length;
          le++
        ) {
          var ee = X[le];
          if (typeof ee == 'string')
            (V += p(ee)),
              (ie = le === X.length - 1 && U.indexOf(ee[ee.length - 1]) > -1);
          else {
            var re = ee.repeat
              ? '(?:' +
                ee.pattern +
                ')(?:' +
                p(ee.delimiter) +
                '(?:' +
                ee.pattern +
                '))*'
              : ee.pattern;
            ne && ne.push(ee),
              ee.optional
                ? ee.partial
                  ? (V += p(ee.prefix) + '(' + re + ')?')
                  : (V += '(?:' + p(ee.prefix) + '(' + re + '))?')
                : (V += p(ee.prefix) + '(' + re + ')');
          }
        }
        return (
          D
            ? (B || (V += '(?:' + se + ')?'),
              (V += z === '$' ? '$' : '(?=' + z + ')'))
            : (B || (V += '(?:' + se + '(?=' + z + '))?'),
              ie || (V += '(?=' + se + '|' + z + ')')),
          new RegExp(V, w(h))
        );
      }
      function Ce(X, ne, h) {
        return X instanceof RegExp
          ? $(X, ne)
          : Array.isArray(X)
          ? v(X, ne, h)
          : te(X, ne, h);
      }
    },
    17384: function (R, H, u) {
      var o = u(81752);
      function C(M, I) {
        var p =
          (typeof Symbol != 'undefined' && M[Symbol.iterator]) ||
          M['@@iterator'];
        if (!p) {
          if (
            Array.isArray(M) ||
            (p = o(M)) ||
            (I && M && typeof M.length == 'number')
          ) {
            p && (M = p);
            var s = 0,
              w = function () {};
            return {
              s: w,
              n: function () {
                return s >= M.length
                  ? { done: !0 }
                  : { done: !1, value: M[s++] };
              },
              e: function (Ce) {
                throw Ce;
              },
              f: w,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var $ = !0,
          v = !1,
          te;
        return {
          s: function () {
            p = p.call(M);
          },
          n: function () {
            var Ce = p.next();
            return ($ = Ce.done), Ce;
          },
          e: function (Ce) {
            (v = !0), (te = Ce);
          },
          f: function () {
            try {
              !$ && p.return != null && p.return();
            } finally {
              if (v) throw te;
            }
          },
        };
      }
      (R.exports = C),
        (R.exports.__esModule = !0),
        (R.exports.default = R.exports);
    },
  },
]);
