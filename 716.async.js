'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [716],
  {
    8675: function (Et, he, o) {
      o.d(he, {
        Z: function () {
          return J;
        },
      });
      var a = o(8429),
        I = o(82702),
        D = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'ellipsis',
          theme: 'outlined',
        },
        ve = D,
        L = o(12242),
        j = function (N, ce) {
          return I.createElement(L.Z, (0, a.Z)({}, N, { ref: ce, icon: ve }));
        },
        ie = I.forwardRef(j),
        J = ie;
    },
    11986: function (Et, he, o) {
      o.d(he, {
        S: function () {
          return ie;
        },
      });
      var a = o(83525),
        I = o(41670),
        D = o(92894),
        ve = o(82702),
        L = o(97616),
        j = ['isLoading', 'pastDelay', 'timedOut', 'error', 'retry'],
        ie = function (E) {
          var N = E.isLoading,
            ce = E.pastDelay,
            _e = E.timedOut,
            n = E.error,
            et = E.retry,
            ct = (0, I.Z)(E, j);
          return (0, L.jsx)('div', {
            style: { paddingBlockStart: 100, textAlign: 'center' },
            children: (0, L.jsx)(D.Z, (0, a.Z)({ size: 'large' }, ct)),
          });
        };
    },
    77153: function (Et, he, o) {
      o.d(he, {
        X: function () {
          return I;
        },
      });
      var a = o(82702),
        I = (0, a.createContext)({});
    },
    76894: function (Et, he, o) {
      o.d(he, {
        j: function () {
          return D;
        },
      });
      var a = o(84425),
        I =
          typeof a != 'undefined' &&
          a.versions != null &&
          a.versions.node != null,
        D = function () {
          return (
            typeof window != 'undefined' &&
            typeof window.document != 'undefined' &&
            typeof window.matchMedia != 'undefined' &&
            !I
          );
        };
    },
    9249: function (Et, he, o) {
      o.d(he, {
        Z: function () {
          return Be;
        },
      });
      var a = o(82702),
        I = o(22290),
        D = o(91150),
        ve = o.n(D),
        L = o(29271),
        j = o(81523),
        ie = o(69164),
        J = o(53172),
        E = o(58993),
        N = o(38116),
        ce = o(26951),
        _e = o(90182),
        n = o(75757),
        et = o(78321),
        ct = o(64775),
        wt = o(72578),
        We = o(17011),
        tt = o(40850),
        Pt = o(30026),
        de = o(78456),
        dt = o(96867),
        Ze = o(51650),
        K = o(49116),
        H = o(77149),
        p = o(78869),
        Ce = o(29385),
        A = o(86029),
        ne = o(77179),
        $e = (g) => {
          const {
              componentCls: S,
              menuCls: x,
              colorError: Q,
              colorTextLightSolid: Re,
            } = g,
            fe = `${x}-item`;
          return {
            [`${S}, ${S}-menu-submenu`]: {
              [`${x} ${fe}`]: {
                [`&${fe}-danger:not(${fe}-disabled)`]: {
                  color: Q,
                  '&:hover': { color: Re, backgroundColor: Q },
                },
              },
            },
          };
        };
      const Ne = (g) => {
          const {
            componentCls: S,
            menuCls: x,
            zIndexPopup: Q,
            dropdownArrowDistance: Re,
            sizePopupArrow: fe,
            antCls: $,
            iconCls: Oe,
            motionDurationMid: ye,
            paddingBlock: ze,
            fontSize: Fe,
            dropdownEdgeChildPadding: ht,
            colorTextDisabled: ke,
            fontSizeIcon: P,
            controlPaddingHorizontal: B,
            colorBgElevated: ae,
          } = g;
          return [
            {
              [S]: {
                position: 'absolute',
                top: -9999,
                left: { _skip_check_: !0, value: -9999 },
                zIndex: Q,
                display: 'block',
                '&::before': {
                  position: 'absolute',
                  insetBlock: g.calc(fe).div(2).sub(Re).equal(),
                  zIndex: -9999,
                  opacity: 1e-4,
                  content: '""',
                },
                [`&-trigger${$}-btn`]: {
                  [`& > ${Oe}-down, & > ${$}-btn-icon > ${Oe}-down`]: {
                    fontSize: P,
                  },
                },
                [`${S}-wrap`]: {
                  position: 'relative',
                  [`${$}-btn > ${Oe}-down`]: { fontSize: P },
                  [`${Oe}-down::before`]: { transition: `transform ${ye}` },
                },
                [`${S}-wrap-open`]: {
                  [`${Oe}-down::before`]: { transform: 'rotate(180deg)' },
                },
                '\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ':
                  { display: 'none' },
                [`&${$}-slide-down-enter${$}-slide-down-enter-active${S}-placement-bottomLeft,
          &${$}-slide-down-appear${$}-slide-down-appear-active${S}-placement-bottomLeft,
          &${$}-slide-down-enter${$}-slide-down-enter-active${S}-placement-bottom,
          &${$}-slide-down-appear${$}-slide-down-appear-active${S}-placement-bottom,
          &${$}-slide-down-enter${$}-slide-down-enter-active${S}-placement-bottomRight,
          &${$}-slide-down-appear${$}-slide-down-appear-active${S}-placement-bottomRight`]:
                  { animationName: Ze.fJ },
                [`&${$}-slide-up-enter${$}-slide-up-enter-active${S}-placement-topLeft,
          &${$}-slide-up-appear${$}-slide-up-appear-active${S}-placement-topLeft,
          &${$}-slide-up-enter${$}-slide-up-enter-active${S}-placement-top,
          &${$}-slide-up-appear${$}-slide-up-appear-active${S}-placement-top,
          &${$}-slide-up-enter${$}-slide-up-enter-active${S}-placement-topRight,
          &${$}-slide-up-appear${$}-slide-up-appear-active${S}-placement-topRight`]:
                  { animationName: Ze.Qt },
                [`&${$}-slide-down-leave${$}-slide-down-leave-active${S}-placement-bottomLeft,
          &${$}-slide-down-leave${$}-slide-down-leave-active${S}-placement-bottom,
          &${$}-slide-down-leave${$}-slide-down-leave-active${S}-placement-bottomRight`]:
                  { animationName: Ze.Uw },
                [`&${$}-slide-up-leave${$}-slide-up-leave-active${S}-placement-topLeft,
          &${$}-slide-up-leave${$}-slide-up-leave-active${S}-placement-top,
          &${$}-slide-up-leave${$}-slide-up-leave-active${S}-placement-topRight`]:
                  { animationName: Ze.ly },
              },
            },
            (0, p.ZP)(g, ae, { arrowPlacement: { top: !0, bottom: !0 } }),
            {
              [`${S} ${x}`]: { position: 'relative', margin: 0 },
              [`${x}-submenu-popup`]: {
                position: 'absolute',
                zIndex: Q,
                background: 'transparent',
                boxShadow: 'none',
                transformOrigin: '0 0',
                'ul, li': { listStyle: 'none', margin: 0 },
              },
              [`${S}, ${S}-menu-submenu`]: Object.assign(
                Object.assign({}, (0, dt.Wf)(g)),
                {
                  [x]: Object.assign(
                    Object.assign(
                      {
                        padding: ht,
                        listStyleType: 'none',
                        backgroundColor: ae,
                        backgroundClip: 'padding-box',
                        borderRadius: g.borderRadiusLG,
                        outline: 'none',
                        boxShadow: g.boxShadowSecondary,
                      },
                      (0, dt.Qy)(g),
                    ),
                    {
                      '&:empty': { padding: 0, boxShadow: 'none' },
                      [`${x}-item-group-title`]: {
                        padding: `${(0, de.bf)(ze)} ${(0, de.bf)(B)}`,
                        color: g.colorTextDescription,
                        transition: `all ${ye}`,
                      },
                      [`${x}-item`]: {
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                      },
                      [`${x}-item-icon`]: {
                        minWidth: Fe,
                        marginInlineEnd: g.marginXS,
                        fontSize: g.fontSizeSM,
                      },
                      [`${x}-title-content`]: {
                        flex: 'auto',
                        '> a': {
                          color: 'inherit',
                          transition: `all ${ye}`,
                          '&:hover': { color: 'inherit' },
                          '&::after': {
                            position: 'absolute',
                            inset: 0,
                            content: '""',
                          },
                        },
                      },
                      [`${x}-item, ${x}-submenu-title`]: Object.assign(
                        Object.assign(
                          {
                            display: 'flex',
                            margin: 0,
                            padding: `${(0, de.bf)(ze)} ${(0, de.bf)(B)}`,
                            color: g.colorText,
                            fontWeight: 'normal',
                            fontSize: Fe,
                            lineHeight: g.lineHeight,
                            cursor: 'pointer',
                            transition: `all ${ye}`,
                            borderRadius: g.borderRadiusSM,
                            '&:hover, &-active': {
                              backgroundColor: g.controlItemBgHover,
                            },
                          },
                          (0, dt.Qy)(g),
                        ),
                        {
                          '&-selected': {
                            color: g.colorPrimary,
                            backgroundColor: g.controlItemBgActive,
                            '&:hover, &-active': {
                              backgroundColor: g.controlItemBgActiveHover,
                            },
                          },
                          '&-disabled': {
                            color: ke,
                            cursor: 'not-allowed',
                            '&:hover': {
                              color: ke,
                              backgroundColor: ae,
                              cursor: 'not-allowed',
                            },
                            a: { pointerEvents: 'none' },
                          },
                          '&-divider': {
                            height: 1,
                            margin: `${(0, de.bf)(g.marginXXS)} 0`,
                            overflow: 'hidden',
                            lineHeight: 0,
                            backgroundColor: g.colorSplit,
                          },
                          [`${S}-menu-submenu-expand-icon`]: {
                            position: 'absolute',
                            insetInlineEnd: g.paddingXS,
                            [`${S}-menu-submenu-arrow-icon`]: {
                              marginInlineEnd: '0 !important',
                              color: g.colorTextDescription,
                              fontSize: P,
                              fontStyle: 'normal',
                            },
                          },
                        },
                      ),
                      [`${x}-item-group-list`]: {
                        margin: `0 ${(0, de.bf)(g.marginXS)}`,
                        padding: 0,
                        listStyle: 'none',
                      },
                      [`${x}-submenu-title`]: {
                        paddingInlineEnd: g.calc(B).add(g.fontSizeSM).equal(),
                      },
                      [`${x}-submenu-vertical`]: { position: 'relative' },
                      [`${x}-submenu${x}-submenu-disabled ${S}-menu-submenu-title`]:
                        {
                          [`&, ${S}-menu-submenu-arrow-icon`]: {
                            color: ke,
                            backgroundColor: ae,
                            cursor: 'not-allowed',
                          },
                        },
                      [`${x}-submenu-selected ${S}-menu-submenu-title`]: {
                        color: g.colorPrimary,
                      },
                    },
                  ),
                },
              ),
            },
            [
              (0, Ze.oN)(g, 'slide-up'),
              (0, Ze.oN)(g, 'slide-down'),
              (0, K.Fm)(g, 'move-up'),
              (0, K.Fm)(g, 'move-down'),
              (0, H._y)(g, 'zoom-big'),
            ],
          ];
        },
        De = (g) =>
          Object.assign(
            Object.assign(
              {
                zIndexPopup: g.zIndexPopupBase + 50,
                paddingBlock: (g.controlHeight - g.fontSize * g.lineHeight) / 2,
              },
              (0, p.wZ)({
                contentRadius: g.borderRadiusLG,
                limitVerticalRadius: !0,
              }),
            ),
            (0, Ce.w)(g),
          );
      var it = (0, A.I$)(
        'Dropdown',
        (g) => {
          const {
              marginXXS: S,
              sizePopupArrow: x,
              paddingXXS: Q,
              componentCls: Re,
            } = g,
            fe = (0, ne.IX)(g, {
              menuCls: `${Re}-menu`,
              dropdownArrowDistance: g.calc(x).div(2).add(S).equal(),
              dropdownEdgeChildPadding: Q,
            });
          return [Ne(fe), $e(fe)];
        },
        De,
        { resetStyle: !1 },
      );
      const Ve = null,
        Ye = (g) => {
          var S;
          const {
              menu: x,
              arrow: Q,
              prefixCls: Re,
              children: fe,
              trigger: $,
              disabled: Oe,
              dropdownRender: ye,
              getPopupContainer: ze,
              overlayClassName: Fe,
              rootClassName: ht,
              overlayStyle: ke,
              open: P,
              onOpenChange: B,
              visible: ae,
              onVisibleChange: u,
              mouseEnterDelay: i = 0.15,
              mouseLeaveDelay: t = 0.1,
              autoAdjustOverflow: v = !0,
              placement: c = '',
              overlay: b,
              transitionName: M,
            } = g,
            {
              getPopupContainer: y,
              getPrefixCls: C,
              direction: W,
              dropdown: F,
            } = a.useContext(ct.E_),
            k = (0, n.ln)('Dropdown'),
            q = a.useMemo(() => {
              const pe = C();
              return M !== void 0
                ? M
                : c.includes('top')
                ? `${pe}-slide-down`
                : `${pe}-slide-up`;
            }, [C, c, M]),
            T = a.useMemo(
              () =>
                c
                  ? c.includes('Center')
                    ? c.slice(0, c.indexOf('Center'))
                    : c
                  : W === 'rtl'
                  ? 'bottomRight'
                  : 'bottomLeft',
              [c, W],
            ),
            R = C('dropdown', Re),
            _ = (0, wt.Z)(R),
            [ge, le, Le] = it(R, _),
            [, je] = (0, Pt.ZP)(),
            Je = a.Children.only(fe),
            Xe = (0, _e.Tm)(Je, {
              className: ve()(
                `${R}-trigger`,
                { [`${R}-rtl`]: W === 'rtl' },
                Je.props.className,
              ),
              disabled:
                (S = Je.props.disabled) !== null && S !== void 0 ? S : Oe,
            }),
            Ue = Oe ? [] : $,
            vt = !!(Ue != null && Ue.includes('contextMenu')),
            [ft, se] = (0, ie.Z)(!1, { value: P != null ? P : ae }),
            at = (0, j.zX)((pe) => {
              B == null || B(pe, { source: 'trigger' }),
                u == null || u(pe),
                se(pe);
            }),
            Ct = ve()(Fe, ht, le, Le, _, F == null ? void 0 : F.className, {
              [`${R}-rtl`]: W === 'rtl',
            }),
            Ke = (0, N.Z)({
              arrowPointAtCenter: typeof Q == 'object' && Q.pointAtCenter,
              autoAdjustOverflow: v,
              offset: je.marginXXS,
              arrowWidth: Q ? je.sizePopupArrow : 0,
              borderRadius: je.borderRadius,
            }),
            Ot = a.useCallback(() => {
              (x != null && x.selectable && x != null && x.multiple) ||
                (B == null || B(!1, { source: 'menu' }), se(!1));
            }, [
              x == null ? void 0 : x.selectable,
              x == null ? void 0 : x.multiple,
            ]),
            xe = () => {
              let pe;
              return (
                x != null && x.items
                  ? (pe = a.createElement(We.Z, Object.assign({}, x)))
                  : typeof b == 'function'
                  ? (pe = b())
                  : (pe = b),
                ye && (pe = ye(pe)),
                (pe = a.Children.only(
                  typeof pe == 'string'
                    ? a.createElement('span', null, pe)
                    : pe,
                )),
                a.createElement(
                  tt.J,
                  {
                    prefixCls: `${R}-menu`,
                    rootClassName: ve()(Le, _),
                    expandIcon: a.createElement(
                      'span',
                      { className: `${R}-menu-submenu-arrow` },
                      a.createElement(I.Z, {
                        className: `${R}-menu-submenu-arrow-icon`,
                      }),
                    ),
                    mode: 'vertical',
                    selectable: !1,
                    onClick: Ot,
                    validator: (en) => {
                      let { mode: we } = en;
                    },
                  },
                  pe,
                )
              );
            },
            [$t, Dt] = (0, E.Cn)('Dropdown', ke == null ? void 0 : ke.zIndex);
          let Zt = a.createElement(
            L.Z,
            Object.assign({ alignPoint: vt }, (0, J.Z)(g, ['rootClassName']), {
              mouseEnterDelay: i,
              mouseLeaveDelay: t,
              visible: ft,
              builtinPlacements: Ke,
              arrow: !!Q,
              overlayClassName: Ct,
              prefixCls: R,
              getPopupContainer: ze || y,
              transitionName: q,
              trigger: Ue,
              overlay: xe,
              placement: T,
              onVisibleChange: at,
              overlayStyle: Object.assign(
                Object.assign(
                  Object.assign({}, F == null ? void 0 : F.style),
                  ke,
                ),
                { zIndex: $t },
              ),
            }),
            Xe,
          );
          return (
            $t && (Zt = a.createElement(et.Z.Provider, { value: Dt }, Zt)),
            ge(Zt)
          );
        };
      function Pe(g) {
        return Object.assign(Object.assign({}, g), {
          align: { overflow: { adjustX: !1, adjustY: !1 } },
        });
      }
      const Ae = (0, ce.Z)(Ye, 'dropdown', (g) => g, Pe),
        mt = (g) =>
          a.createElement(
            Ae,
            Object.assign({}, g),
            a.createElement('span', null),
          );
      Ye._InternalPanelDoNotUseOrYouWillBeFired = mt;
      var Be = Ye;
    },
    50535: function (Et, he, o) {
      o.d(he, {
        D: function () {
          return de;
        },
        Z: function () {
          return K;
        },
      });
      var a = o(82702),
        I = o(8429),
        D = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'bars',
          theme: 'outlined',
        },
        ve = D,
        L = o(12242),
        j = function (p, Ce) {
          return a.createElement(L.Z, (0, I.Z)({}, p, { ref: Ce, icon: ve }));
        },
        ie = a.forwardRef(j),
        J = ie,
        E = o(20927),
        N = o(22290),
        ce = o(91150),
        _e = o.n(ce),
        n = o(53172),
        ct = (H) => !isNaN(parseFloat(H)) && isFinite(H),
        wt = o(64775),
        We = o(34191),
        tt = function (H, p) {
          var Ce = {};
          for (var A in H)
            Object.prototype.hasOwnProperty.call(H, A) &&
              p.indexOf(A) < 0 &&
              (Ce[A] = H[A]);
          if (H != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var ne = 0, A = Object.getOwnPropertySymbols(H);
              ne < A.length;
              ne++
            )
              p.indexOf(A[ne]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(H, A[ne]) &&
                (Ce[A[ne]] = H[A[ne]]);
          return Ce;
        };
      const Pt = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        de = a.createContext({}),
        dt = (() => {
          let H = 0;
          return function () {
            let p =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : '';
            return (H += 1), `${p}${H}`;
          };
        })();
      var K = a.forwardRef((H, p) => {
        const {
            prefixCls: Ce,
            className: A,
            trigger: ne,
            children: rt,
            defaultCollapsed: $e = !1,
            theme: Ne = 'dark',
            style: De = {},
            collapsible: it = !1,
            reverseArrow: Ve = !1,
            width: Ye = 200,
            collapsedWidth: Pe = 80,
            zeroWidthTriggerStyle: Ae,
            breakpoint: mt,
            onCollapse: Be,
            onBreakpoint: g,
          } = H,
          S = tt(H, [
            'prefixCls',
            'className',
            'trigger',
            'children',
            'defaultCollapsed',
            'theme',
            'style',
            'collapsible',
            'reverseArrow',
            'width',
            'collapsedWidth',
            'zeroWidthTriggerStyle',
            'breakpoint',
            'onCollapse',
            'onBreakpoint',
          ]),
          { siderHook: x } = (0, a.useContext)(We.V),
          [Q, Re] = (0, a.useState)('collapsed' in H ? H.collapsed : $e),
          [fe, $] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          'collapsed' in H && Re(H.collapsed);
        }, [H.collapsed]);
        const Oe = (P, B) => {
            'collapsed' in H || Re(P), Be == null || Be(P, B);
          },
          ye = (0, a.useRef)();
        (ye.current = (P) => {
          $(P.matches),
            g == null || g(P.matches),
            Q !== P.matches && Oe(P.matches, 'responsive');
        }),
          (0, a.useEffect)(() => {
            function P(ae) {
              return ye.current(ae);
            }
            let B;
            if (typeof window != 'undefined') {
              const { matchMedia: ae } = window;
              if (ae && mt && mt in Pt) {
                B = ae(`screen and (max-width: ${Pt[mt]})`);
                try {
                  B.addEventListener('change', P);
                } catch (u) {
                  B.addListener(P);
                }
                P(B);
              }
            }
            return () => {
              try {
                B == null || B.removeEventListener('change', P);
              } catch (ae) {
                B == null || B.removeListener(P);
              }
            };
          }, [mt]),
          (0, a.useEffect)(() => {
            const P = dt('ant-sider-');
            return x.addSider(P), () => x.removeSider(P);
          }, []);
        const ze = () => {
            Oe(!Q, 'clickTrigger');
          },
          { getPrefixCls: Fe } = (0, a.useContext)(wt.E_),
          ht = () => {
            const P = Fe('layout-sider', Ce),
              B = (0, n.Z)(S, ['collapsed']),
              ae = Q ? Pe : Ye,
              u = ct(ae) ? `${ae}px` : String(ae),
              i =
                parseFloat(String(Pe || 0)) === 0
                  ? a.createElement(
                      'span',
                      {
                        onClick: ze,
                        className: _e()(
                          `${P}-zero-width-trigger`,
                          `${P}-zero-width-trigger-${Ve ? 'right' : 'left'}`,
                        ),
                        style: Ae,
                      },
                      ne || a.createElement(J, null),
                    )
                  : null,
              c = {
                expanded: Ve
                  ? a.createElement(N.Z, null)
                  : a.createElement(E.Z, null),
                collapsed: Ve
                  ? a.createElement(E.Z, null)
                  : a.createElement(N.Z, null),
              }[Q ? 'collapsed' : 'expanded'],
              b =
                ne !== null
                  ? i ||
                    a.createElement(
                      'div',
                      {
                        className: `${P}-trigger`,
                        onClick: ze,
                        style: { width: u },
                      },
                      ne || c,
                    )
                  : null,
              M = Object.assign(Object.assign({}, De), {
                flex: `0 0 ${u}`,
                maxWidth: u,
                minWidth: u,
                width: u,
              }),
              y = _e()(
                P,
                `${P}-${Ne}`,
                {
                  [`${P}-collapsed`]: !!Q,
                  [`${P}-has-trigger`]: it && ne !== null && !i,
                  [`${P}-below`]: !!fe,
                  [`${P}-zero-width`]: parseFloat(u) === 0,
                },
                A,
              );
            return a.createElement(
              'aside',
              Object.assign({ className: y }, B, { style: M, ref: p }),
              a.createElement('div', { className: `${P}-children` }, rt),
              it || (fe && i) ? b : null,
            );
          },
          ke = a.useMemo(() => ({ siderCollapsed: Q }), [Q]);
        return a.createElement(de.Provider, { value: ke }, ht());
      });
    },
    34191: function (Et, he, o) {
      o.d(he, {
        V: function () {
          return I;
        },
      });
      var a = o(82702);
      const I = a.createContext({
        siderHook: { addSider: () => null, removeSider: () => null },
      });
    },
    40850: function (Et, he, o) {
      o.d(he, {
        J: function () {
          return j;
        },
      });
      var a = o(82702),
        I = o(81523),
        D = o(98491),
        ve = function (ie, J) {
          var E = {};
          for (var N in ie)
            Object.prototype.hasOwnProperty.call(ie, N) &&
              J.indexOf(N) < 0 &&
              (E[N] = ie[N]);
          if (ie != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var ce = 0, N = Object.getOwnPropertySymbols(ie);
              ce < N.length;
              ce++
            )
              J.indexOf(N[ce]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(ie, N[ce]) &&
                (E[N[ce]] = ie[N[ce]]);
          return E;
        };
      const L = a.createContext(null),
        j = a.forwardRef((ie, J) => {
          const { children: E } = ie,
            N = ve(ie, ['children']),
            ce = a.useContext(L),
            _e = a.useMemo(
              () => Object.assign(Object.assign({}, ce), N),
              [ce, N.prefixCls, N.mode, N.selectable, N.rootClassName],
            ),
            n = (0, I.t4)(E),
            et = (0, I.x1)(J, n ? E.ref : null);
          return a.createElement(
            L.Provider,
            { value: _e },
            a.createElement(
              D.Z,
              { space: !0 },
              n ? a.cloneElement(E, { ref: et }) : E,
            ),
          );
        });
      he.Z = L;
    },
    17011: function (Et, he, o) {
      o.d(he, {
        Z: function () {
          return ae;
        },
      });
      var a = o(82702),
        I = o(56513),
        D = o(50535),
        ve = o(8675),
        L = o(91150),
        j = o.n(L),
        ie = o(81523),
        J = o(53172),
        E = o(39010),
        N = o(90182),
        ce = o(64775),
        _e = o(72578),
        et = (0, a.createContext)({
          prefixCls: '',
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        ct = function (u, i) {
          var t = {};
          for (var v in u)
            Object.prototype.hasOwnProperty.call(u, v) &&
              i.indexOf(v) < 0 &&
              (t[v] = u[v]);
          if (u != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var c = 0, v = Object.getOwnPropertySymbols(u);
              c < v.length;
              c++
            )
              i.indexOf(v[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(u, v[c]) &&
                (t[v[c]] = u[v[c]]);
          return t;
        },
        We = (u) => {
          const { prefixCls: i, className: t, dashed: v } = u,
            c = ct(u, ['prefixCls', 'className', 'dashed']),
            { getPrefixCls: b } = a.useContext(ce.E_),
            M = b('menu', i),
            y = j()({ [`${M}-item-divider-dashed`]: !!v }, t);
          return a.createElement(I.iz, Object.assign({ className: y }, c));
        },
        tt = o(96865),
        Pt = o(10536),
        dt = (u) => {
          var i;
          const { className: t, children: v, icon: c, title: b, danger: M } = u,
            {
              prefixCls: y,
              firstLevel: C,
              direction: W,
              disableMenuItemTitleTooltip: F,
              inlineCollapsed: k,
            } = a.useContext(et),
            q = (Le) => {
              const je = a.createElement(
                'span',
                { className: `${y}-title-content` },
                v,
              );
              return (!c || (a.isValidElement(v) && v.type === 'span')) &&
                v &&
                Le &&
                C &&
                typeof v == 'string'
                ? a.createElement(
                    'div',
                    { className: `${y}-inline-collapsed-noicon` },
                    v.charAt(0),
                  )
                : je;
            },
            { siderCollapsed: T } = a.useContext(D.D);
          let R = b;
          typeof b == 'undefined' ? (R = C ? v : '') : b === !1 && (R = '');
          const _ = { title: R };
          !T && !k && ((_.title = null), (_.open = !1));
          const ge = (0, tt.Z)(v).length;
          let le = a.createElement(
            I.ck,
            Object.assign({}, (0, J.Z)(u, ['title', 'icon', 'danger']), {
              className: j()(
                {
                  [`${y}-item-danger`]: M,
                  [`${y}-item-only-child`]: (c ? ge + 1 : ge) === 1,
                },
                t,
              ),
              title: typeof b == 'string' ? b : void 0,
            }),
            (0, N.Tm)(c, {
              className: j()(
                a.isValidElement(c)
                  ? (i = c.props) === null || i === void 0
                    ? void 0
                    : i.className
                  : '',
                `${y}-item-icon`,
              ),
            }),
            q(k),
          );
          return (
            F ||
              (le = a.createElement(
                Pt.Z,
                Object.assign({}, _, {
                  placement: W === 'rtl' ? 'left' : 'right',
                  overlayClassName: `${y}-inline-collapsed-tooltip`,
                }),
                le,
              )),
            le
          );
        },
        Ze = o(40850),
        K = o(78456),
        H = o(1359),
        p = o(96867),
        Ce = o(77615),
        A = o(51650),
        ne = o(77149),
        rt = o(86029),
        $e = o(77179),
        De = (u) => {
          const {
            componentCls: i,
            motionDurationSlow: t,
            horizontalLineHeight: v,
            colorSplit: c,
            lineWidth: b,
            lineType: M,
            itemPaddingInline: y,
          } = u;
          return {
            [`${i}-horizontal`]: {
              lineHeight: v,
              border: 0,
              borderBottom: `${(0, K.bf)(b)} ${M} ${c}`,
              boxShadow: 'none',
              '&::after': {
                display: 'block',
                clear: 'both',
                height: 0,
                content: '"\\20"',
              },
              [`${i}-item, ${i}-submenu`]: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'bottom',
                paddingInline: y,
              },
              [`> ${i}-item:hover,
        > ${i}-item-active,
        > ${i}-submenu ${i}-submenu-title:hover`]: {
                backgroundColor: 'transparent',
              },
              [`${i}-item, ${i}-submenu-title`]: {
                transition: [`border-color ${t}`, `background ${t}`].join(','),
              },
              [`${i}-submenu-arrow`]: { display: 'none' },
            },
          };
        },
        Ve = (u) => {
          let { componentCls: i, menuArrowOffset: t, calc: v } = u;
          return {
            [`${i}-rtl`]: { direction: 'rtl' },
            [`${i}-submenu-rtl`]: { transformOrigin: '100% 0' },
            [`${i}-rtl${i}-vertical,
    ${i}-submenu-rtl ${i}-vertical`]: {
              [`${i}-submenu-arrow`]: {
                '&::before': {
                  transform: `rotate(-45deg) translateY(${(0, K.bf)(
                    v(t).mul(-1).equal(),
                  )})`,
                },
                '&::after': {
                  transform: `rotate(45deg) translateY(${(0, K.bf)(t)})`,
                },
              },
            },
          };
        };
      const Ye = (u) => Object.assign({}, (0, p.oN)(u));
      var Ae = (u, i) => {
        const {
          componentCls: t,
          itemColor: v,
          itemSelectedColor: c,
          groupTitleColor: b,
          itemBg: M,
          subMenuItemBg: y,
          itemSelectedBg: C,
          activeBarHeight: W,
          activeBarWidth: F,
          activeBarBorderWidth: k,
          motionDurationSlow: q,
          motionEaseInOut: T,
          motionEaseOut: R,
          itemPaddingInline: _,
          motionDurationMid: ge,
          itemHoverColor: le,
          lineType: Le,
          colorSplit: je,
          itemDisabledColor: Je,
          dangerItemColor: Xe,
          dangerItemHoverColor: Ue,
          dangerItemSelectedColor: vt,
          dangerItemActiveBg: ft,
          dangerItemSelectedBg: se,
          popupBg: at,
          itemHoverBg: Ct,
          itemActiveBg: Ke,
          menuSubMenuBg: Ot,
          horizontalItemSelectedColor: xe,
          horizontalItemSelectedBg: $t,
          horizontalItemBorderRadius: Dt,
          horizontalItemHoverBg: Zt,
        } = u;
        return {
          [`${t}-${i}, ${t}-${i} > ${t}`]: {
            color: v,
            background: M,
            [`&${t}-root:focus-visible`]: Object.assign({}, Ye(u)),
            [`${t}-item-group-title`]: { color: b },
            [`${t}-submenu-selected`]: {
              [`> ${t}-submenu-title`]: { color: c },
            },
            [`${t}-item, ${t}-submenu-title`]: {
              color: v,
              [`&:not(${t}-item-disabled):focus-visible`]: Object.assign(
                {},
                Ye(u),
              ),
            },
            [`${t}-item-disabled, ${t}-submenu-disabled`]: {
              color: `${Je} !important`,
            },
            [`${t}-item:not(${t}-item-selected):not(${t}-submenu-selected)`]: {
              [`&:hover, > ${t}-submenu-title:hover`]: { color: le },
            },
            [`&:not(${t}-horizontal)`]: {
              [`${t}-item:not(${t}-item-selected)`]: {
                '&:hover': { backgroundColor: Ct },
                '&:active': { backgroundColor: Ke },
              },
              [`${t}-submenu-title`]: {
                '&:hover': { backgroundColor: Ct },
                '&:active': { backgroundColor: Ke },
              },
            },
            [`${t}-item-danger`]: {
              color: Xe,
              [`&${t}-item:hover`]: {
                [`&:not(${t}-item-selected):not(${t}-submenu-selected)`]: {
                  color: Ue,
                },
              },
              [`&${t}-item:active`]: { background: ft },
            },
            [`${t}-item a`]: { '&, &:hover': { color: 'inherit' } },
            [`${t}-item-selected`]: {
              color: c,
              [`&${t}-item-danger`]: { color: vt },
              'a, a:hover': { color: 'inherit' },
            },
            [`& ${t}-item-selected`]: {
              backgroundColor: C,
              [`&${t}-item-danger`]: { backgroundColor: se },
            },
            [`&${t}-submenu > ${t}`]: { backgroundColor: Ot },
            [`&${t}-popup > ${t}`]: { backgroundColor: at },
            [`&${t}-submenu-popup > ${t}`]: { backgroundColor: at },
            [`&${t}-horizontal`]: Object.assign(
              Object.assign({}, i === 'dark' ? { borderBottom: 0 } : {}),
              {
                [`> ${t}-item, > ${t}-submenu`]: {
                  top: k,
                  marginTop: u.calc(k).mul(-1).equal(),
                  marginBottom: 0,
                  borderRadius: Dt,
                  '&::after': {
                    position: 'absolute',
                    insetInline: _,
                    bottom: 0,
                    borderBottom: `${(0, K.bf)(W)} solid transparent`,
                    transition: `border-color ${q} ${T}`,
                    content: '""',
                  },
                  '&:hover, &-active, &-open': {
                    background: Zt,
                    '&::after': { borderBottomWidth: W, borderBottomColor: xe },
                  },
                  '&-selected': {
                    color: xe,
                    backgroundColor: $t,
                    '&:hover': { backgroundColor: $t },
                    '&::after': { borderBottomWidth: W, borderBottomColor: xe },
                  },
                },
              },
            ),
            [`&${t}-root`]: {
              [`&${t}-inline, &${t}-vertical`]: {
                borderInlineEnd: `${(0, K.bf)(k)} ${Le} ${je}`,
              },
            },
            [`&${t}-inline`]: {
              [`${t}-sub${t}-inline`]: { background: y },
              [`${t}-item`]: {
                position: 'relative',
                '&::after': {
                  position: 'absolute',
                  insetBlock: 0,
                  insetInlineEnd: 0,
                  borderInlineEnd: `${(0, K.bf)(F)} solid ${c}`,
                  transform: 'scaleY(0.0001)',
                  opacity: 0,
                  transition: [
                    `transform ${ge} ${R}`,
                    `opacity ${ge} ${R}`,
                  ].join(','),
                  content: '""',
                },
                [`&${t}-item-danger`]: {
                  '&::after': { borderInlineEndColor: vt },
                },
              },
              [`${t}-selected, ${t}-item-selected`]: {
                '&::after': {
                  transform: 'scaleY(1)',
                  opacity: 1,
                  transition: [
                    `transform ${ge} ${T}`,
                    `opacity ${ge} ${T}`,
                  ].join(','),
                },
              },
            },
          },
        };
      };
      const mt = (u) => {
        const {
            componentCls: i,
            itemHeight: t,
            itemMarginInline: v,
            padding: c,
            menuArrowSize: b,
            marginXS: M,
            itemMarginBlock: y,
            itemWidth: C,
            itemPaddingInline: W,
          } = u,
          F = u.calc(b).add(c).add(M).equal();
        return {
          [`${i}-item`]: { position: 'relative', overflow: 'hidden' },
          [`${i}-item, ${i}-submenu-title`]: {
            height: t,
            lineHeight: (0, K.bf)(t),
            paddingInline: W,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginInline: v,
            marginBlock: y,
            width: C,
          },
          [`> ${i}-item,
            > ${i}-submenu > ${i}-submenu-title`]: {
            height: t,
            lineHeight: (0, K.bf)(t),
          },
          [`${i}-item-group-list ${i}-submenu-title,
            ${i}-submenu-title`]: { paddingInlineEnd: F },
        };
      };
      var g = (u) => {
        const {
            componentCls: i,
            iconCls: t,
            itemHeight: v,
            colorTextLightSolid: c,
            dropdownWidth: b,
            controlHeightLG: M,
            motionEaseOut: y,
            paddingXL: C,
            itemMarginInline: W,
            fontSizeLG: F,
            motionDurationFast: k,
            motionDurationSlow: q,
            paddingXS: T,
            boxShadowSecondary: R,
            collapsedWidth: _,
            collapsedIconSize: ge,
          } = u,
          le = {
            height: v,
            lineHeight: (0, K.bf)(v),
            listStylePosition: 'inside',
            listStyleType: 'disc',
          };
        return [
          {
            [i]: {
              '&-inline, &-vertical': Object.assign(
                { [`&${i}-root`]: { boxShadow: 'none' } },
                mt(u),
              ),
            },
            [`${i}-submenu-popup`]: {
              [`${i}-vertical`]: Object.assign(Object.assign({}, mt(u)), {
                boxShadow: R,
              }),
            },
          },
          {
            [`${i}-submenu-popup ${i}-vertical${i}-sub`]: {
              minWidth: b,
              maxHeight: `calc(100vh - ${(0, K.bf)(
                u.calc(M).mul(2.5).equal(),
              )})`,
              padding: '0',
              overflow: 'hidden',
              borderInlineEnd: 0,
              "&:not([class*='-active'])": {
                overflowX: 'hidden',
                overflowY: 'auto',
              },
            },
          },
          {
            [`${i}-inline`]: {
              width: '100%',
              [`&${i}-root`]: {
                [`${i}-item, ${i}-submenu-title`]: {
                  display: 'flex',
                  alignItems: 'center',
                  transition: [
                    `border-color ${q}`,
                    `background ${q}`,
                    `padding ${k} ${y}`,
                  ].join(','),
                  [`> ${i}-title-content`]: {
                    flex: 'auto',
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                  '> *': { flex: 'none' },
                },
              },
              [`${i}-sub${i}-inline`]: {
                padding: 0,
                border: 0,
                borderRadius: 0,
                boxShadow: 'none',
                [`& > ${i}-submenu > ${i}-submenu-title`]: le,
                [`& ${i}-item-group-title`]: { paddingInlineStart: C },
              },
              [`${i}-item`]: le,
            },
          },
          {
            [`${i}-inline-collapsed`]: {
              width: _,
              [`&${i}-root`]: {
                [`${i}-item, ${i}-submenu ${i}-submenu-title`]: {
                  [`> ${i}-inline-collapsed-noicon`]: {
                    fontSize: F,
                    textAlign: 'center',
                  },
                },
              },
              [`> ${i}-item,
          > ${i}-item-group > ${i}-item-group-list > ${i}-item,
          > ${i}-item-group > ${i}-item-group-list > ${i}-submenu > ${i}-submenu-title,
          > ${i}-submenu > ${i}-submenu-title`]: {
                insetInlineStart: 0,
                paddingInline: `calc(50% - ${(0, K.bf)(
                  u.calc(F).div(2).equal(),
                )} - ${(0, K.bf)(W)})`,
                textOverflow: 'clip',
                [`
            ${i}-submenu-arrow,
            ${i}-submenu-expand-icon
          `]: { opacity: 0 },
                [`${i}-item-icon, ${t}`]: {
                  margin: 0,
                  fontSize: ge,
                  lineHeight: (0, K.bf)(v),
                  '+ span': { display: 'inline-block', opacity: 0 },
                },
              },
              [`${i}-item-icon, ${t}`]: { display: 'inline-block' },
              '&-tooltip': {
                pointerEvents: 'none',
                [`${i}-item-icon, ${t}`]: { display: 'none' },
                'a, a:hover': { color: c },
              },
              [`${i}-item-group-title`]: Object.assign(
                Object.assign({}, p.vS),
                { paddingInline: T },
              ),
            },
          },
        ];
      };
      const S = (u) => {
          const {
            componentCls: i,
            motionDurationSlow: t,
            motionDurationMid: v,
            motionEaseInOut: c,
            motionEaseOut: b,
            iconCls: M,
            iconSize: y,
            iconMarginInlineEnd: C,
          } = u;
          return {
            [`${i}-item, ${i}-submenu-title`]: {
              position: 'relative',
              display: 'block',
              margin: 0,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: [
                `border-color ${t}`,
                `background ${t}`,
                `padding calc(${t} + 0.1s) ${c}`,
              ].join(','),
              [`${i}-item-icon, ${M}`]: {
                minWidth: y,
                fontSize: y,
                transition: [
                  `font-size ${v} ${b}`,
                  `margin ${t} ${c}`,
                  `color ${t}`,
                ].join(','),
                '+ span': {
                  marginInlineStart: C,
                  opacity: 1,
                  transition: [
                    `opacity ${t} ${c}`,
                    `margin ${t}`,
                    `color ${t}`,
                  ].join(','),
                },
              },
              [`${i}-item-icon`]: Object.assign({}, (0, p.Ro)()),
              [`&${i}-item-only-child`]: {
                [`> ${M}, > ${i}-item-icon`]: { marginInlineEnd: 0 },
              },
            },
            [`${i}-item-disabled, ${i}-submenu-disabled`]: {
              background: 'none !important',
              cursor: 'not-allowed',
              '&::after': { borderColor: 'transparent !important' },
              a: { color: 'inherit !important' },
              [`> ${i}-submenu-title`]: {
                color: 'inherit !important',
                cursor: 'not-allowed',
              },
            },
          };
        },
        x = (u) => {
          const {
            componentCls: i,
            motionDurationSlow: t,
            motionEaseInOut: v,
            borderRadius: c,
            menuArrowSize: b,
            menuArrowOffset: M,
          } = u;
          return {
            [`${i}-submenu`]: {
              '&-expand-icon, &-arrow': {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: u.margin,
                width: b,
                color: 'currentcolor',
                transform: 'translateY(-50%)',
                transition: `transform ${t} ${v}, opacity ${t}`,
              },
              '&-arrow': {
                '&::before, &::after': {
                  position: 'absolute',
                  width: u.calc(b).mul(0.6).equal(),
                  height: u.calc(b).mul(0.15).equal(),
                  backgroundColor: 'currentcolor',
                  borderRadius: c,
                  transition: [
                    `background ${t} ${v}`,
                    `transform ${t} ${v}`,
                    `top ${t} ${v}`,
                    `color ${t} ${v}`,
                  ].join(','),
                  content: '""',
                },
                '&::before': {
                  transform: `rotate(45deg) translateY(${(0, K.bf)(
                    u.calc(M).mul(-1).equal(),
                  )})`,
                },
                '&::after': {
                  transform: `rotate(-45deg) translateY(${(0, K.bf)(M)})`,
                },
              },
            },
          };
        },
        Q = (u) => {
          const {
            antCls: i,
            componentCls: t,
            fontSize: v,
            motionDurationSlow: c,
            motionDurationMid: b,
            motionEaseInOut: M,
            paddingXS: y,
            padding: C,
            colorSplit: W,
            lineWidth: F,
            zIndexPopup: k,
            borderRadiusLG: q,
            subMenuItemBorderRadius: T,
            menuArrowSize: R,
            menuArrowOffset: _,
            lineType: ge,
            groupTitleLineHeight: le,
            groupTitleFontSize: Le,
          } = u;
          return [
            {
              '': {
                [t]: Object.assign(Object.assign({}, (0, p.dF)()), {
                  '&-hidden': { display: 'none' },
                }),
              },
              [`${t}-submenu-hidden`]: { display: 'none' },
            },
            {
              [t]: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign({}, (0, p.Wf)(u)),
                          (0, p.dF)(),
                        ),
                        {
                          marginBottom: 0,
                          paddingInlineStart: 0,
                          fontSize: v,
                          lineHeight: 0,
                          listStyle: 'none',
                          outline: 'none',
                          transition: `width ${c} cubic-bezier(0.2, 0, 0, 1) 0s`,
                          'ul, ol': {
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                          },
                          '&-overflow': {
                            display: 'flex',
                            [`${t}-item`]: { flex: 'none' },
                          },
                          [`${t}-item, ${t}-submenu, ${t}-submenu-title`]: {
                            borderRadius: u.itemBorderRadius,
                          },
                          [`${t}-item-group-title`]: {
                            padding: `${(0, K.bf)(y)} ${(0, K.bf)(C)}`,
                            fontSize: Le,
                            lineHeight: le,
                            transition: `all ${c}`,
                          },
                          [`&-horizontal ${t}-submenu`]: {
                            transition: [
                              `border-color ${c} ${M}`,
                              `background ${c} ${M}`,
                            ].join(','),
                          },
                          [`${t}-submenu, ${t}-submenu-inline`]: {
                            transition: [
                              `border-color ${c} ${M}`,
                              `background ${c} ${M}`,
                              `padding ${b} ${M}`,
                            ].join(','),
                          },
                          [`${t}-submenu ${t}-sub`]: {
                            cursor: 'initial',
                            transition: [
                              `background ${c} ${M}`,
                              `padding ${c} ${M}`,
                            ].join(','),
                          },
                          [`${t}-title-content`]: {
                            transition: `color ${c}`,
                            [`> ${i}-typography-ellipsis-single-line`]: {
                              display: 'inline',
                              verticalAlign: 'unset',
                            },
                          },
                          [`${t}-item a`]: {
                            '&::before': {
                              position: 'absolute',
                              inset: 0,
                              backgroundColor: 'transparent',
                              content: '""',
                            },
                          },
                          [`${t}-item-divider`]: {
                            overflow: 'hidden',
                            lineHeight: 0,
                            borderColor: W,
                            borderStyle: ge,
                            borderWidth: 0,
                            borderTopWidth: F,
                            marginBlock: F,
                            padding: 0,
                            '&-dashed': { borderStyle: 'dashed' },
                          },
                        },
                      ),
                      S(u),
                    ),
                    {
                      [`${t}-item-group`]: {
                        [`${t}-item-group-list`]: {
                          margin: 0,
                          padding: 0,
                          [`${t}-item, ${t}-submenu-title`]: {
                            paddingInline: `${(0, K.bf)(
                              u.calc(v).mul(2).equal(),
                            )} ${(0, K.bf)(C)}`,
                          },
                        },
                      },
                      '&-submenu': {
                        '&-popup': {
                          position: 'absolute',
                          zIndex: k,
                          borderRadius: q,
                          boxShadow: 'none',
                          transformOrigin: '0 0',
                          [`&${t}-submenu`]: { background: 'transparent' },
                          '&::before': {
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            content: '""',
                          },
                          [`> ${t}`]: Object.assign(
                            Object.assign(
                              Object.assign({ borderRadius: q }, S(u)),
                              x(u),
                            ),
                            {
                              [`${t}-item, ${t}-submenu > ${t}-submenu-title`]:
                                { borderRadius: T },
                              [`${t}-submenu-title::after`]: {
                                transition: `transform ${c} ${M}`,
                              },
                            },
                          ),
                        },
                        '\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ':
                          { transformOrigin: '100% 0' },
                        '\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ':
                          { transformOrigin: '100% 100%' },
                        '\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ':
                          { transformOrigin: '0 100%' },
                        '\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ':
                          { transformOrigin: '0 0' },
                        '\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ':
                          { paddingInlineEnd: u.paddingXS },
                        '\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ':
                          { paddingInlineStart: u.paddingXS },
                        '\n          &-placement-topRight,\n          &-placement-topLeft\n          ':
                          { paddingBottom: u.paddingXS },
                        '\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ':
                          { paddingTop: u.paddingXS },
                      },
                    },
                  ),
                  x(u),
                ),
                {
                  [`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]: {
                    '&::before': {
                      transform: `rotate(-45deg) translateX(${(0, K.bf)(_)})`,
                    },
                    '&::after': {
                      transform: `rotate(45deg) translateX(${(0, K.bf)(
                        u.calc(_).mul(-1).equal(),
                      )})`,
                    },
                  },
                  [`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:
                    {
                      transform: `translateY(${(0, K.bf)(
                        u.calc(R).mul(0.2).mul(-1).equal(),
                      )})`,
                      '&::after': {
                        transform: `rotate(-45deg) translateX(${(0, K.bf)(
                          u.calc(_).mul(-1).equal(),
                        )})`,
                      },
                      '&::before': {
                        transform: `rotate(45deg) translateX(${(0, K.bf)(_)})`,
                      },
                    },
                },
              ),
            },
            { [`${i}-layout-header`]: { [t]: { lineHeight: 'inherit' } } },
          ];
        },
        Re = (u) => {
          var i, t, v;
          const {
              colorPrimary: c,
              colorError: b,
              colorTextDisabled: M,
              colorErrorBg: y,
              colorText: C,
              colorTextDescription: W,
              colorBgContainer: F,
              colorFillAlter: k,
              colorFillContent: q,
              lineWidth: T,
              lineWidthBold: R,
              controlItemBgActive: _,
              colorBgTextHover: ge,
              controlHeightLG: le,
              lineHeight: Le,
              colorBgElevated: je,
              marginXXS: Je,
              padding: Xe,
              fontSize: Ue,
              controlHeightSM: vt,
              fontSizeLG: ft,
              colorTextLightSolid: se,
              colorErrorHover: at,
            } = u,
            Ct = (i = u.activeBarWidth) !== null && i !== void 0 ? i : 0,
            Ke = (t = u.activeBarBorderWidth) !== null && t !== void 0 ? t : T,
            Ot =
              (v = u.itemMarginInline) !== null && v !== void 0
                ? v
                : u.marginXXS,
            xe = new H.C(se).setAlpha(0.65).toRgbString();
          return {
            dropdownWidth: 160,
            zIndexPopup: u.zIndexPopupBase + 50,
            radiusItem: u.borderRadiusLG,
            itemBorderRadius: u.borderRadiusLG,
            radiusSubMenuItem: u.borderRadiusSM,
            subMenuItemBorderRadius: u.borderRadiusSM,
            colorItemText: C,
            itemColor: C,
            colorItemTextHover: C,
            itemHoverColor: C,
            colorItemTextHoverHorizontal: c,
            horizontalItemHoverColor: c,
            colorGroupTitle: W,
            groupTitleColor: W,
            colorItemTextSelected: c,
            itemSelectedColor: c,
            colorItemTextSelectedHorizontal: c,
            horizontalItemSelectedColor: c,
            colorItemBg: F,
            itemBg: F,
            colorItemBgHover: ge,
            itemHoverBg: ge,
            colorItemBgActive: q,
            itemActiveBg: _,
            colorSubItemBg: k,
            subMenuItemBg: k,
            colorItemBgSelected: _,
            itemSelectedBg: _,
            colorItemBgSelectedHorizontal: 'transparent',
            horizontalItemSelectedBg: 'transparent',
            colorActiveBarWidth: 0,
            activeBarWidth: Ct,
            colorActiveBarHeight: R,
            activeBarHeight: R,
            colorActiveBarBorderSize: T,
            activeBarBorderWidth: Ke,
            colorItemTextDisabled: M,
            itemDisabledColor: M,
            colorDangerItemText: b,
            dangerItemColor: b,
            colorDangerItemTextHover: b,
            dangerItemHoverColor: b,
            colorDangerItemTextSelected: b,
            dangerItemSelectedColor: b,
            colorDangerItemBgActive: y,
            dangerItemActiveBg: y,
            colorDangerItemBgSelected: y,
            dangerItemSelectedBg: y,
            itemMarginInline: Ot,
            horizontalItemBorderRadius: 0,
            horizontalItemHoverBg: 'transparent',
            itemHeight: le,
            groupTitleLineHeight: Le,
            collapsedWidth: le * 2,
            popupBg: je,
            itemMarginBlock: Je,
            itemPaddingInline: Xe,
            horizontalLineHeight: `${le * 1.15}px`,
            iconSize: Ue,
            iconMarginInlineEnd: vt - Ue,
            collapsedIconSize: ft,
            groupTitleFontSize: Ue,
            darkItemDisabledColor: new H.C(se).setAlpha(0.25).toRgbString(),
            darkItemColor: xe,
            darkDangerItemColor: b,
            darkItemBg: '#001529',
            darkPopupBg: '#001529',
            darkSubMenuItemBg: '#000c17',
            darkItemSelectedColor: se,
            darkItemSelectedBg: c,
            darkDangerItemSelectedBg: b,
            darkItemHoverBg: 'transparent',
            darkGroupTitleColor: xe,
            darkItemHoverColor: se,
            darkDangerItemHoverColor: at,
            darkDangerItemSelectedColor: se,
            darkDangerItemActiveBg: b,
            itemWidth: Ct ? `calc(100% + ${Ke}px)` : `calc(100% - ${Ot * 2}px)`,
          };
        };
      var fe = function (u) {
          let i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : u,
            t =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0;
          return (0, rt.I$)(
            'Menu',
            (c) => {
              const {
                  colorBgElevated: b,
                  controlHeightLG: M,
                  fontSize: y,
                  darkItemColor: C,
                  darkDangerItemColor: W,
                  darkItemBg: F,
                  darkSubMenuItemBg: k,
                  darkItemSelectedColor: q,
                  darkItemSelectedBg: T,
                  darkDangerItemSelectedBg: R,
                  darkItemHoverBg: _,
                  darkGroupTitleColor: ge,
                  darkItemHoverColor: le,
                  darkItemDisabledColor: Le,
                  darkDangerItemHoverColor: je,
                  darkDangerItemSelectedColor: Je,
                  darkDangerItemActiveBg: Xe,
                  popupBg: Ue,
                  darkPopupBg: vt,
                } = c,
                ft = c.calc(y).div(7).mul(5).equal(),
                se = (0, $e.IX)(c, {
                  menuArrowSize: ft,
                  menuHorizontalHeight: c.calc(M).mul(1.15).equal(),
                  menuArrowOffset: c.calc(ft).mul(0.25).equal(),
                  menuSubMenuBg: b,
                  calc: c.calc,
                  popupBg: Ue,
                }),
                at = (0, $e.IX)(se, {
                  itemColor: C,
                  itemHoverColor: le,
                  groupTitleColor: ge,
                  itemSelectedColor: q,
                  itemBg: F,
                  popupBg: vt,
                  subMenuItemBg: k,
                  itemActiveBg: 'transparent',
                  itemSelectedBg: T,
                  activeBarHeight: 0,
                  activeBarBorderWidth: 0,
                  itemHoverBg: _,
                  itemDisabledColor: Le,
                  dangerItemColor: W,
                  dangerItemHoverColor: je,
                  dangerItemSelectedColor: Je,
                  dangerItemActiveBg: Xe,
                  dangerItemSelectedBg: R,
                  menuSubMenuBg: k,
                  horizontalItemSelectedColor: q,
                  horizontalItemSelectedBg: T,
                });
              return [
                Q(se),
                De(se),
                g(se),
                Ae(se, 'light'),
                Ae(at, 'dark'),
                Ve(se),
                (0, Ce.Z)(se),
                (0, A.oN)(se, 'slide-up'),
                (0, A.oN)(se, 'slide-down'),
                (0, ne._y)(se, 'zoom-big'),
              ];
            },
            Re,
            {
              deprecatedTokens: [
                ['colorGroupTitle', 'groupTitleColor'],
                ['radiusItem', 'itemBorderRadius'],
                ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
                ['colorItemText', 'itemColor'],
                ['colorItemTextHover', 'itemHoverColor'],
                ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
                ['colorItemTextSelected', 'itemSelectedColor'],
                [
                  'colorItemTextSelectedHorizontal',
                  'horizontalItemSelectedColor',
                ],
                ['colorItemTextDisabled', 'itemDisabledColor'],
                ['colorDangerItemText', 'dangerItemColor'],
                ['colorDangerItemTextHover', 'dangerItemHoverColor'],
                ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
                ['colorDangerItemBgActive', 'dangerItemActiveBg'],
                ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
                ['colorItemBg', 'itemBg'],
                ['colorItemBgHover', 'itemHoverBg'],
                ['colorSubItemBg', 'subMenuItemBg'],
                ['colorItemBgActive', 'itemActiveBg'],
                ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
                ['colorActiveBarWidth', 'activeBarWidth'],
                ['colorActiveBarHeight', 'activeBarHeight'],
                ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
                ['colorItemBgSelected', 'itemSelectedBg'],
              ],
              injectStyle: t,
              unitless: { groupTitleLineHeight: !0 },
            },
          )(u, i);
        },
        $ = o(58993),
        ye = (u) => {
          var i;
          const { popupClassName: t, icon: v, title: c, theme: b } = u,
            M = a.useContext(et),
            { prefixCls: y, inlineCollapsed: C, theme: W } = M,
            F = (0, I.Xl)();
          let k;
          if (!v)
            k =
              C && !F.length && c && typeof c == 'string'
                ? a.createElement(
                    'div',
                    { className: `${y}-inline-collapsed-noicon` },
                    c.charAt(0),
                  )
                : a.createElement(
                    'span',
                    { className: `${y}-title-content` },
                    c,
                  );
          else {
            const R = a.isValidElement(c) && c.type === 'span';
            k = a.createElement(
              a.Fragment,
              null,
              (0, N.Tm)(v, {
                className: j()(
                  a.isValidElement(v)
                    ? (i = v.props) === null || i === void 0
                      ? void 0
                      : i.className
                    : '',
                  `${y}-item-icon`,
                ),
              }),
              R
                ? c
                : a.createElement(
                    'span',
                    { className: `${y}-title-content` },
                    c,
                  ),
            );
          }
          const q = a.useMemo(
              () => Object.assign(Object.assign({}, M), { firstLevel: !1 }),
              [M],
            ),
            [T] = (0, $.Cn)('Menu');
          return a.createElement(
            et.Provider,
            { value: q },
            a.createElement(
              I.Wd,
              Object.assign({}, (0, J.Z)(u, ['icon']), {
                title: k,
                popupClassName: j()(y, t, `${y}-${b || W}`),
                popupStyle: { zIndex: T },
              }),
            ),
          );
        },
        ze = function (u, i) {
          var t = {};
          for (var v in u)
            Object.prototype.hasOwnProperty.call(u, v) &&
              i.indexOf(v) < 0 &&
              (t[v] = u[v]);
          if (u != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var c = 0, v = Object.getOwnPropertySymbols(u);
              c < v.length;
              c++
            )
              i.indexOf(v[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(u, v[c]) &&
                (t[v[c]] = u[v[c]]);
          return t;
        };
      function Fe(u) {
        return u === null || u === !1;
      }
      const ht = { item: dt, submenu: ye, divider: We };
      var P = (0, a.forwardRef)((u, i) => {
        var t;
        const v = a.useContext(Ze.Z),
          c = v || {},
          {
            getPrefixCls: b,
            getPopupContainer: M,
            direction: y,
            menu: C,
          } = a.useContext(ce.E_),
          W = b(),
          {
            prefixCls: F,
            className: k,
            style: q,
            theme: T = 'light',
            expandIcon: R,
            _internalDisableMenuItemTitleTooltip: _,
            inlineCollapsed: ge,
            siderCollapsed: le,
            rootClassName: Le,
            mode: je,
            selectable: Je,
            onClick: Xe,
            overflowedIndicatorPopupClassName: Ue,
          } = u,
          vt = ze(u, [
            'prefixCls',
            'className',
            'style',
            'theme',
            'expandIcon',
            '_internalDisableMenuItemTitleTooltip',
            'inlineCollapsed',
            'siderCollapsed',
            'rootClassName',
            'mode',
            'selectable',
            'onClick',
            'overflowedIndicatorPopupClassName',
          ]),
          ft = (0, J.Z)(vt, ['collapsedWidth']);
        (t = c.validator) === null || t === void 0 || t.call(c, { mode: je });
        const se = (0, ie.zX)(function () {
            var Nt;
            Xe == null || Xe.apply(void 0, arguments),
              (Nt = c.onClick) === null || Nt === void 0 || Nt.call(c);
          }),
          at = c.mode || je,
          Ct = Je != null ? Je : c.selectable,
          Ke = a.useMemo(() => (le !== void 0 ? le : ge), [ge, le]),
          Ot = {
            horizontal: { motionName: `${W}-slide-up` },
            inline: (0, E.Z)(W),
            other: { motionName: `${W}-zoom-big` },
          },
          xe = b('menu', F || c.prefixCls),
          $t = (0, _e.Z)(xe),
          [Dt, Zt, pe] = fe(xe, $t, !v),
          en = j()(`${xe}-${T}`, C == null ? void 0 : C.className, k),
          we = a.useMemo(() => {
            var Nt, cn;
            if (typeof R == 'function' || Fe(R)) return R || null;
            if (typeof c.expandIcon == 'function' || Fe(c.expandIcon))
              return c.expandIcon || null;
            if (
              typeof (C == null ? void 0 : C.expandIcon) == 'function' ||
              Fe(C == null ? void 0 : C.expandIcon)
            )
              return (C == null ? void 0 : C.expandIcon) || null;
            const Qt =
              (Nt = R != null ? R : c == null ? void 0 : c.expandIcon) !==
                null && Nt !== void 0
                ? Nt
                : C == null
                ? void 0
                : C.expandIcon;
            return (0, N.Tm)(Qt, {
              className: j()(
                `${xe}-submenu-expand-icon`,
                a.isValidElement(Qt)
                  ? (cn = Qt.props) === null || cn === void 0
                    ? void 0
                    : cn.className
                  : void 0,
              ),
            });
          }, [
            R,
            c == null ? void 0 : c.expandIcon,
            C == null ? void 0 : C.expandIcon,
            xe,
          ]),
          $n = a.useMemo(
            () => ({
              prefixCls: xe,
              inlineCollapsed: Ke || !1,
              direction: y,
              firstLevel: !0,
              theme: T,
              mode: at,
              disableMenuItemTitleTooltip: _,
            }),
            [xe, Ke, y, _, T],
          );
        return Dt(
          a.createElement(
            Ze.Z.Provider,
            { value: null },
            a.createElement(
              et.Provider,
              { value: $n },
              a.createElement(
                I.ZP,
                Object.assign(
                  {
                    getPopupContainer: M,
                    overflowedIndicator: a.createElement(ve.Z, null),
                    overflowedIndicatorPopupClassName: j()(
                      xe,
                      `${xe}-${T}`,
                      Ue,
                    ),
                    mode: at,
                    selectable: Ct,
                    onClick: se,
                  },
                  ft,
                  {
                    inlineCollapsed: Ke,
                    style: Object.assign(
                      Object.assign({}, C == null ? void 0 : C.style),
                      q,
                    ),
                    className: en,
                    prefixCls: xe,
                    direction: y,
                    defaultMotions: Ot,
                    expandIcon: we,
                    ref: i,
                    rootClassName: j()(Le, Zt, c.rootClassName, pe, $t),
                    _internalComponents: ht,
                  },
                ),
              ),
            ),
          ),
        );
      });
      const B = (0, a.forwardRef)((u, i) => {
        const t = (0, a.useRef)(null),
          v = a.useContext(D.D);
        return (
          (0, a.useImperativeHandle)(i, () => ({
            menu: t.current,
            focus: (c) => {
              var b;
              (b = t.current) === null || b === void 0 || b.focus(c);
            },
          })),
          a.createElement(P, Object.assign({ ref: t }, u, v))
        );
      });
      (B.Item = dt), (B.SubMenu = ye), (B.Divider = We), (B.ItemGroup = I.BW);
      var ae = B;
    },
    29271: function (Et, he, o) {
      o.d(he, {
        Z: function () {
          return H;
        },
      });
      var a = o(8429),
        I = o(73990),
        D = o(72561),
        ve = o(41670),
        L = o(54370),
        j = o(91150),
        ie = o.n(j),
        J = o(64785),
        E = o(82702),
        N = o(94478),
        ce = o(23766),
        _e = N.Z.ESC,
        n = N.Z.TAB;
      function et(p) {
        var Ce = p.visible,
          A = p.triggerRef,
          ne = p.onVisibleChange,
          rt = p.autoFocus,
          $e = p.overlayRef,
          Ne = E.useRef(!1),
          De = function () {
            if (Ce) {
              var Pe, Ae;
              (Pe = A.current) === null ||
                Pe === void 0 ||
                (Ae = Pe.focus) === null ||
                Ae === void 0 ||
                Ae.call(Pe),
                ne == null || ne(!1);
            }
          },
          it = function () {
            var Pe;
            return (Pe = $e.current) !== null && Pe !== void 0 && Pe.focus
              ? ($e.current.focus(), (Ne.current = !0), !0)
              : !1;
          },
          Ve = function (Pe) {
            switch (Pe.keyCode) {
              case _e:
                De();
                break;
              case n: {
                var Ae = !1;
                Ne.current || (Ae = it()), Ae ? Pe.preventDefault() : De();
                break;
              }
            }
          };
        E.useEffect(
          function () {
            return Ce
              ? (window.addEventListener('keydown', Ve),
                rt && (0, ce.Z)(it, 3),
                function () {
                  window.removeEventListener('keydown', Ve), (Ne.current = !1);
                })
              : function () {
                  Ne.current = !1;
                };
          },
          [Ce],
        );
      }
      var ct = (0, E.forwardRef)(function (p, Ce) {
          var A = p.overlay,
            ne = p.arrow,
            rt = p.prefixCls,
            $e = (0, E.useMemo)(
              function () {
                var De;
                return typeof A == 'function' ? (De = A()) : (De = A), De;
              },
              [A],
            ),
            Ne = (0, J.sQ)(Ce, $e == null ? void 0 : $e.ref);
          return E.createElement(
            E.Fragment,
            null,
            ne &&
              E.createElement('div', { className: ''.concat(rt, '-arrow') }),
            E.cloneElement($e, { ref: (0, J.Yr)($e) ? Ne : void 0 }),
          );
        }),
        wt = ct,
        We = { adjustX: 1, adjustY: 1 },
        tt = [0, 0],
        Pt = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: We,
            offset: [0, -4],
            targetOffset: tt,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: We,
            offset: [0, -4],
            targetOffset: tt,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: We,
            offset: [0, -4],
            targetOffset: tt,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: We,
            offset: [0, 4],
            targetOffset: tt,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: We,
            offset: [0, 4],
            targetOffset: tt,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: We,
            offset: [0, 4],
            targetOffset: tt,
          },
        },
        de = Pt,
        dt = [
          'arrow',
          'prefixCls',
          'transitionName',
          'animation',
          'align',
          'placement',
          'placements',
          'getPopupContainer',
          'showAction',
          'hideAction',
          'overlayClassName',
          'overlayStyle',
          'visible',
          'trigger',
          'autoFocus',
          'overlay',
          'children',
          'onVisibleChange',
        ];
      function Ze(p, Ce) {
        var A,
          ne = p.arrow,
          rt = ne === void 0 ? !1 : ne,
          $e = p.prefixCls,
          Ne = $e === void 0 ? 'rc-dropdown' : $e,
          De = p.transitionName,
          it = p.animation,
          Ve = p.align,
          Ye = p.placement,
          Pe = Ye === void 0 ? 'bottomLeft' : Ye,
          Ae = p.placements,
          mt = Ae === void 0 ? de : Ae,
          Be = p.getPopupContainer,
          g = p.showAction,
          S = p.hideAction,
          x = p.overlayClassName,
          Q = p.overlayStyle,
          Re = p.visible,
          fe = p.trigger,
          $ = fe === void 0 ? ['hover'] : fe,
          Oe = p.autoFocus,
          ye = p.overlay,
          ze = p.children,
          Fe = p.onVisibleChange,
          ht = (0, ve.Z)(p, dt),
          ke = E.useState(),
          P = (0, D.Z)(ke, 2),
          B = P[0],
          ae = P[1],
          u = 'visible' in p ? Re : B,
          i = E.useRef(null),
          t = E.useRef(null),
          v = E.useRef(null);
        E.useImperativeHandle(Ce, function () {
          return i.current;
        });
        var c = function (T) {
          ae(T), Fe == null || Fe(T);
        };
        et({
          visible: u,
          triggerRef: v,
          onVisibleChange: c,
          autoFocus: Oe,
          overlayRef: t,
        });
        var b = function (T) {
            var R = p.onOverlayClick;
            ae(!1), R && R(T);
          },
          M = function () {
            return E.createElement(wt, {
              ref: t,
              overlay: ye,
              prefixCls: Ne,
              arrow: rt,
            });
          },
          y = function () {
            return typeof ye == 'function' ? M : M();
          },
          C = function () {
            var T = p.minOverlayWidthMatchTrigger,
              R = p.alignPoint;
            return 'minOverlayWidthMatchTrigger' in p ? T : !R;
          },
          W = function () {
            var T = p.openClassName;
            return T !== void 0 ? T : ''.concat(Ne, '-open');
          },
          F = E.cloneElement(ze, {
            className: ie()(
              (A = ze.props) === null || A === void 0 ? void 0 : A.className,
              u && W(),
            ),
            ref: (0, J.Yr)(ze) ? (0, J.sQ)(v, ze.ref) : void 0,
          }),
          k = S;
        return (
          !k && $.indexOf('contextMenu') !== -1 && (k = ['click']),
          E.createElement(
            L.Z,
            (0, a.Z)({ builtinPlacements: mt }, ht, {
              prefixCls: Ne,
              ref: i,
              popupClassName: ie()(
                x,
                (0, I.Z)({}, ''.concat(Ne, '-show-arrow'), rt),
              ),
              popupStyle: Q,
              action: $,
              showAction: g,
              hideAction: k,
              popupPlacement: Pe,
              popupAlign: Ve,
              popupTransitionName: De,
              popupAnimation: it,
              popupVisible: u,
              stretch: C() ? 'minWidth' : '',
              popup: y(),
              onPopupVisibleChange: c,
              onPopupClick: b,
              getPopupContainer: Be,
            }),
            F,
          )
        );
      }
      var K = E.forwardRef(Ze),
        H = K;
    },
    56513: function (Et, he, o) {
      o.d(he, {
        iz: function () {
          return yn;
        },
        ck: function () {
          return Ke;
        },
        BW: function () {
          return In;
        },
        sN: function () {
          return Ke;
        },
        Wd: function () {
          return dn;
        },
        ZP: function () {
          return ho;
        },
        Xl: function () {
          return A;
        },
      });
      var a = o(8429),
        I = o(73990),
        D = o(83525),
        ve = o(80104),
        L = o(72561),
        j = o(41670),
        ie = o(91150),
        J = o.n(ie),
        E = o(13038),
        N = o(69164),
        ce = o(23636),
        _e = o(89071),
        n = o(82702),
        et = o(41654),
        ct = n.createContext(null);
      function wt(e, l) {
        return e === void 0 ? null : ''.concat(e, '-').concat(l);
      }
      function We(e) {
        var l = n.useContext(ct);
        return wt(l, e);
      }
      var tt = o(54768),
        Pt = ['children', 'locked'],
        de = n.createContext(null);
      function dt(e, l) {
        var s = (0, D.Z)({}, e);
        return (
          Object.keys(l).forEach(function (m) {
            var r = l[m];
            r !== void 0 && (s[m] = r);
          }),
          s
        );
      }
      function Ze(e) {
        var l = e.children,
          s = e.locked,
          m = (0, j.Z)(e, Pt),
          r = n.useContext(de),
          f = (0, tt.Z)(
            function () {
              return dt(r, m);
            },
            [r, m],
            function (d, h) {
              return !s && (d[0] !== h[0] || !(0, ce.Z)(d[1], h[1], !0));
            },
          );
        return n.createElement(de.Provider, { value: f }, l);
      }
      var K = [],
        H = n.createContext(null);
      function p() {
        return n.useContext(H);
      }
      var Ce = n.createContext(K);
      function A(e) {
        var l = n.useContext(Ce);
        return n.useMemo(
          function () {
            return e !== void 0 ? [].concat((0, ve.Z)(l), [e]) : l;
          },
          [l, e],
        );
      }
      var ne = n.createContext(null),
        rt = n.createContext({}),
        $e = rt,
        Ne = o(77622);
      function De(e) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if ((0, Ne.Z)(e)) {
          var s = e.nodeName.toLowerCase(),
            m =
              ['input', 'select', 'textarea', 'button'].includes(s) ||
              e.isContentEditable ||
              (s === 'a' && !!e.getAttribute('href')),
            r = e.getAttribute('tabindex'),
            f = Number(r),
            d = null;
          return (
            r && !Number.isNaN(f) ? (d = f) : m && d === null && (d = 0),
            m && e.disabled && (d = null),
            d !== null && (d >= 0 || (l && d < 0))
          );
        }
        return !1;
      }
      function it(e) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          s = (0, ve.Z)(e.querySelectorAll('*')).filter(function (m) {
            return De(m, l);
          });
        return De(e, l) && s.unshift(e), s;
      }
      var Ve = null;
      function Ye() {
        Ve = document.activeElement;
      }
      function Pe() {
        Ve = null;
      }
      function Ae() {
        if (Ve)
          try {
            Ve.focus();
          } catch (e) {}
      }
      function mt(e, l) {
        if (l.keyCode === 9) {
          var s = it(e),
            m = s[l.shiftKey ? 0 : s.length - 1],
            r = m === document.activeElement || e === document.activeElement;
          if (r) {
            var f = s[l.shiftKey ? s.length - 1 : 0];
            f.focus(), l.preventDefault();
          }
        }
      }
      var Be = o(94478),
        g = o(23766),
        S = Be.Z.LEFT,
        x = Be.Z.RIGHT,
        Q = Be.Z.UP,
        Re = Be.Z.DOWN,
        fe = Be.Z.ENTER,
        $ = Be.Z.ESC,
        Oe = Be.Z.HOME,
        ye = Be.Z.END,
        ze = [Q, Re, S, x];
      function Fe(e, l, s, m) {
        var r,
          f,
          d,
          h,
          w = 'prev',
          O = 'next',
          X = 'children',
          Z = 'parent';
        if (e === 'inline' && m === fe) return { inlineTrigger: !0 };
        var U = ((r = {}), (0, I.Z)(r, Q, w), (0, I.Z)(r, Re, O), r),
          G =
            ((f = {}),
            (0, I.Z)(f, S, s ? O : w),
            (0, I.Z)(f, x, s ? w : O),
            (0, I.Z)(f, Re, X),
            (0, I.Z)(f, fe, X),
            f),
          z =
            ((d = {}),
            (0, I.Z)(d, Q, w),
            (0, I.Z)(d, Re, O),
            (0, I.Z)(d, fe, X),
            (0, I.Z)(d, $, Z),
            (0, I.Z)(d, S, s ? X : Z),
            (0, I.Z)(d, x, s ? Z : X),
            d),
          Me = {
            inline: U,
            horizontal: G,
            vertical: z,
            inlineSub: U,
            horizontalSub: z,
            verticalSub: z,
          },
          Ie =
            (h = Me[''.concat(e).concat(l ? '' : 'Sub')]) === null ||
            h === void 0
              ? void 0
              : h[m];
        switch (Ie) {
          case w:
            return { offset: -1, sibling: !0 };
          case O:
            return { offset: 1, sibling: !0 };
          case Z:
            return { offset: -1, sibling: !1 };
          case X:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function ht(e) {
        for (var l = e; l; ) {
          if (l.getAttribute('data-menu-list')) return l;
          l = l.parentElement;
        }
        return null;
      }
      function ke(e, l) {
        for (var s = e || document.activeElement; s; ) {
          if (l.has(s)) return s;
          s = s.parentElement;
        }
        return null;
      }
      function P(e, l) {
        var s = it(e, !0);
        return s.filter(function (m) {
          return l.has(m);
        });
      }
      function B(e, l, s) {
        var m =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        if (!e) return null;
        var r = P(e, l),
          f = r.length,
          d = r.findIndex(function (h) {
            return s === h;
          });
        return (
          m < 0 ? (d === -1 ? (d = f - 1) : (d -= 1)) : m > 0 && (d += 1),
          (d = (d + f) % f),
          r[d]
        );
      }
      var ae = function (l, s) {
        var m = new Set(),
          r = new Map(),
          f = new Map();
        return (
          l.forEach(function (d) {
            var h = document.querySelector(
              "[data-menu-id='".concat(wt(s, d), "']"),
            );
            h && (m.add(h), f.set(h, d), r.set(d, h));
          }),
          { elements: m, key2element: r, element2key: f }
        );
      };
      function u(e, l, s, m, r, f, d, h, w, O) {
        var X = n.useRef(),
          Z = n.useRef();
        Z.current = l;
        var U = function () {
          g.Z.cancel(X.current);
        };
        return (
          n.useEffect(function () {
            return function () {
              U();
            };
          }, []),
          function (G) {
            var z = G.which;
            if ([].concat(ze, [fe, $, Oe, ye]).includes(z)) {
              var Me = f(),
                Ie = ae(Me, m),
                Ee = Ie,
                ee = Ee.elements,
                Y = Ee.key2element,
                V = Ee.element2key,
                re = Y.get(l),
                oe = ke(re, ee),
                He = V.get(oe),
                ue = Fe(e, d(He, !0).length === 1, s, z);
              if (!ue && z !== Oe && z !== ye) return;
              (ze.includes(z) || [Oe, ye].includes(z)) && G.preventDefault();
              var yt = function (nt) {
                if (nt) {
                  var It = nt,
                    St = nt.querySelector('a');
                  St != null && St.getAttribute('href') && (It = St);
                  var xt = V.get(nt);
                  h(xt),
                    U(),
                    (X.current = (0, g.Z)(function () {
                      Z.current === xt && It.focus();
                    }));
                }
              };
              if ([Oe, ye].includes(z) || ue.sibling || !oe) {
                var be;
                !oe || e === 'inline' ? (be = r.current) : (be = ht(oe));
                var lt,
                  Ge = P(be, ee);
                z === Oe
                  ? (lt = Ge[0])
                  : z === ye
                  ? (lt = Ge[Ge.length - 1])
                  : (lt = B(be, ee, oe, ue.offset)),
                  yt(lt);
              } else if (ue.inlineTrigger) w(He);
              else if (ue.offset > 0)
                w(He, !0),
                  U(),
                  (X.current = (0, g.Z)(function () {
                    Ie = ae(Me, m);
                    var Bt = oe.getAttribute('aria-controls'),
                      nt = document.getElementById(Bt),
                      It = B(nt, Ie.elements);
                    yt(It);
                  }, 5));
              else if (ue.offset < 0) {
                var Qe = d(He, !0),
                  gt = Qe[Qe.length - 2],
                  pt = Y.get(gt);
                w(gt, !1), yt(pt);
              }
            }
            O == null || O(G);
          }
        );
      }
      function i(e) {
        Promise.resolve().then(e);
      }
      var t = '__RC_UTIL_PATH_SPLIT__',
        v = function (l) {
          return l.join(t);
        },
        c = function (l) {
          return l.split(t);
        },
        b = 'rc-menu-more';
      function M() {
        var e = n.useState({}),
          l = (0, L.Z)(e, 2),
          s = l[1],
          m = (0, n.useRef)(new Map()),
          r = (0, n.useRef)(new Map()),
          f = n.useState([]),
          d = (0, L.Z)(f, 2),
          h = d[0],
          w = d[1],
          O = (0, n.useRef)(0),
          X = (0, n.useRef)(!1),
          Z = function () {
            X.current || s({});
          },
          U = (0, n.useCallback)(function (Y, V) {
            var re = v(V);
            r.current.set(re, Y), m.current.set(Y, re), (O.current += 1);
            var oe = O.current;
            i(function () {
              oe === O.current && Z();
            });
          }, []),
          G = (0, n.useCallback)(function (Y, V) {
            var re = v(V);
            r.current.delete(re), m.current.delete(Y);
          }, []),
          z = (0, n.useCallback)(function (Y) {
            w(Y);
          }, []),
          Me = (0, n.useCallback)(
            function (Y, V) {
              var re = m.current.get(Y) || '',
                oe = c(re);
              return V && h.includes(oe[0]) && oe.unshift(b), oe;
            },
            [h],
          ),
          Ie = (0, n.useCallback)(
            function (Y, V) {
              return Y.filter(function (re) {
                return re !== void 0;
              }).some(function (re) {
                var oe = Me(re, !0);
                return oe.includes(V);
              });
            },
            [Me],
          ),
          Ee = function () {
            var V = (0, ve.Z)(m.current.keys());
            return h.length && V.push(b), V;
          },
          ee = (0, n.useCallback)(function (Y) {
            var V = ''.concat(m.current.get(Y)).concat(t),
              re = new Set();
            return (
              (0, ve.Z)(r.current.keys()).forEach(function (oe) {
                oe.startsWith(V) && re.add(r.current.get(oe));
              }),
              re
            );
          }, []);
        return (
          n.useEffect(function () {
            return function () {
              X.current = !0;
            };
          }, []),
          {
            registerPath: U,
            unregisterPath: G,
            refreshOverflowKeys: z,
            isSubPathKey: Ie,
            getKeyPath: Me,
            getKeys: Ee,
            getSubPathKeys: ee,
          }
        );
      }
      function y(e) {
        var l = n.useRef(e);
        l.current = e;
        var s = n.useCallback(function () {
          for (var m, r = arguments.length, f = new Array(r), d = 0; d < r; d++)
            f[d] = arguments[d];
          return (m = l.current) === null || m === void 0
            ? void 0
            : m.call.apply(m, [l].concat(f));
        }, []);
        return e ? s : void 0;
      }
      var C = Math.random().toFixed(5).toString().slice(2),
        W = 0;
      function F(e) {
        var l = (0, N.Z)(e, { value: e }),
          s = (0, L.Z)(l, 2),
          m = s[0],
          r = s[1];
        return (
          n.useEffect(function () {
            W += 1;
            var f = ''.concat(C, '-').concat(W);
            r('rc-menu-uuid-'.concat(f));
          }, []),
          m
        );
      }
      var k = o(51222),
        q = o(29749),
        T = o(20110),
        R = o(77783),
        _ = o(53172),
        ge = o(64785);
      function le(e, l, s, m) {
        var r = n.useContext(de),
          f = r.activeKey,
          d = r.onActive,
          h = r.onInactive,
          w = { active: f === e };
        return (
          l ||
            ((w.onMouseEnter = function (O) {
              s == null || s({ key: e, domEvent: O }), d(e);
            }),
            (w.onMouseLeave = function (O) {
              m == null || m({ key: e, domEvent: O }), h(e);
            })),
          w
        );
      }
      function Le(e) {
        var l = n.useContext(de),
          s = l.mode,
          m = l.rtl,
          r = l.inlineIndent;
        if (s !== 'inline') return null;
        var f = e;
        return m ? { paddingRight: f * r } : { paddingLeft: f * r };
      }
      function je(e) {
        var l = e.icon,
          s = e.props,
          m = e.children,
          r;
        return l === null || l === !1
          ? null
          : (typeof l == 'function'
              ? (r = n.createElement(l, (0, D.Z)({}, s)))
              : typeof l != 'boolean' && (r = l),
            r || m || null);
      }
      var Je = ['item'];
      function Xe(e) {
        var l = e.item,
          s = (0, j.Z)(e, Je);
        return (
          Object.defineProperty(s, 'item', {
            get: function () {
              return (
                (0, _e.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                l
              );
            },
          }),
          s
        );
      }
      var Ue = ['title', 'attribute', 'elementRef'],
        vt = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        ft = ['active'],
        se = (function (e) {
          (0, T.Z)(s, e);
          var l = (0, R.Z)(s);
          function s() {
            return (0, k.Z)(this, s), l.apply(this, arguments);
          }
          return (
            (0, q.Z)(s, [
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    f = r.title,
                    d = r.attribute,
                    h = r.elementRef,
                    w = (0, j.Z)(r, Ue),
                    O = (0, _.Z)(w, [
                      'eventKey',
                      'popupClassName',
                      'popupOffset',
                      'onTitleClick',
                    ]);
                  return (
                    (0, _e.ZP)(
                      !d,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    n.createElement(
                      E.Z.Item,
                      (0, a.Z)(
                        {},
                        d,
                        { title: typeof f == 'string' ? f : void 0 },
                        O,
                        { ref: h },
                      ),
                    )
                  );
                },
              },
            ]),
            s
          );
        })(n.Component),
        at = n.forwardRef(function (e, l) {
          var s,
            m = e.style,
            r = e.className,
            f = e.eventKey,
            d = e.warnKey,
            h = e.disabled,
            w = e.itemIcon,
            O = e.children,
            X = e.role,
            Z = e.onMouseEnter,
            U = e.onMouseLeave,
            G = e.onClick,
            z = e.onKeyDown,
            Me = e.onFocus,
            Ie = (0, j.Z)(e, vt),
            Ee = We(f),
            ee = n.useContext(de),
            Y = ee.prefixCls,
            V = ee.onItemClick,
            re = ee.disabled,
            oe = ee.overflowDisabled,
            He = ee.itemIcon,
            ue = ee.selectedKeys,
            yt = ee.onActive,
            be = n.useContext($e),
            lt = be._internalRenderMenuItem,
            Ge = ''.concat(Y, '-item'),
            Qe = n.useRef(),
            gt = n.useRef(),
            pt = re || h,
            Bt = (0, ge.x1)(l, gt),
            nt = A(f),
            It = function (qe) {
              return {
                key: f,
                keyPath: (0, ve.Z)(nt).reverse(),
                item: Qe.current,
                domEvent: qe,
              };
            },
            St = w || He,
            xt = le(f, pt, Z, U),
            Ht = xt.active,
            Wt = (0, j.Z)(xt, ft),
            At = ue.includes(f),
            Vt = Le(nt.length),
            Ft = function (qe) {
              if (!pt) {
                var Rt = It(qe);
                G == null || G(Xe(Rt)), V(Rt);
              }
            },
            ot = function (qe) {
              if ((z == null || z(qe), qe.which === Be.Z.ENTER)) {
                var Rt = It(qe);
                G == null || G(Xe(Rt)), V(Rt);
              }
            },
            bt = function (qe) {
              yt(f), Me == null || Me(qe);
            },
            qt = {};
          e.role === 'option' && (qt['aria-selected'] = At);
          var Xt = n.createElement(
            se,
            (0, a.Z)(
              {
                ref: Qe,
                elementRef: Bt,
                role: X === null ? 'none' : X || 'menuitem',
                tabIndex: h ? null : -1,
                'data-menu-id': oe && Ee ? null : Ee,
              },
              Ie,
              Wt,
              qt,
              {
                component: 'li',
                'aria-disabled': h,
                style: (0, D.Z)((0, D.Z)({}, Vt), m),
                className: J()(
                  Ge,
                  ((s = {}),
                  (0, I.Z)(s, ''.concat(Ge, '-active'), Ht),
                  (0, I.Z)(s, ''.concat(Ge, '-selected'), At),
                  (0, I.Z)(s, ''.concat(Ge, '-disabled'), pt),
                  s),
                  r,
                ),
                onClick: Ft,
                onKeyDown: ot,
                onFocus: bt,
              },
            ),
            O,
            n.createElement(je, {
              props: (0, D.Z)((0, D.Z)({}, e), {}, { isSelected: At }),
              icon: St,
            }),
          );
          return lt && (Xt = lt(Xt, e, { selected: At })), Xt;
        });
      function Ct(e, l) {
        var s = e.eventKey,
          m = p(),
          r = A(s);
        return (
          n.useEffect(
            function () {
              if (m)
                return (
                  m.registerPath(s, r),
                  function () {
                    m.unregisterPath(s, r);
                  }
                );
            },
            [r],
          ),
          m ? null : n.createElement(at, (0, a.Z)({}, e, { ref: l }))
        );
      }
      var Ke = n.forwardRef(Ct),
        Ot = ['className', 'children'],
        xe = function (l, s) {
          var m = l.className,
            r = l.children,
            f = (0, j.Z)(l, Ot),
            d = n.useContext(de),
            h = d.prefixCls,
            w = d.mode,
            O = d.rtl;
          return n.createElement(
            'ul',
            (0, a.Z)(
              {
                className: J()(
                  h,
                  O && ''.concat(h, '-rtl'),
                  ''.concat(h, '-sub'),
                  ''
                    .concat(h, '-')
                    .concat(w === 'inline' ? 'inline' : 'vertical'),
                  m,
                ),
                role: 'menu',
              },
              f,
              { 'data-menu-list': !0, ref: s },
            ),
            r,
          );
        },
        $t = n.forwardRef(xe);
      $t.displayName = 'SubMenuList';
      var Dt = $t,
        Zt = o(96865);
      function pe(e, l) {
        return (0, Zt.Z)(e).map(function (s, m) {
          if (n.isValidElement(s)) {
            var r,
              f,
              d = s.key,
              h =
                (r =
                  (f = s.props) === null || f === void 0
                    ? void 0
                    : f.eventKey) !== null && r !== void 0
                  ? r
                  : d,
              w = h == null;
            w &&
              (h = 'tmp_key-'.concat([].concat((0, ve.Z)(l), [m]).join('-')));
            var O = { key: h, eventKey: h };
            return n.cloneElement(s, O);
          }
          return s;
        });
      }
      var en = o(54370),
        we = { adjustX: 1, adjustY: 1 },
        $n = {
          topLeft: { points: ['bl', 'tl'], overflow: we },
          topRight: { points: ['br', 'tr'], overflow: we },
          bottomLeft: { points: ['tl', 'bl'], overflow: we },
          bottomRight: { points: ['tr', 'br'], overflow: we },
          leftTop: { points: ['tr', 'tl'], overflow: we },
          leftBottom: { points: ['br', 'bl'], overflow: we },
          rightTop: { points: ['tl', 'tr'], overflow: we },
          rightBottom: { points: ['bl', 'br'], overflow: we },
        },
        Nt = {
          topLeft: { points: ['bl', 'tl'], overflow: we },
          topRight: { points: ['br', 'tr'], overflow: we },
          bottomLeft: { points: ['tl', 'bl'], overflow: we },
          bottomRight: { points: ['tr', 'br'], overflow: we },
          rightTop: { points: ['tr', 'tl'], overflow: we },
          rightBottom: { points: ['br', 'bl'], overflow: we },
          leftTop: { points: ['tl', 'tr'], overflow: we },
          leftBottom: { points: ['bl', 'br'], overflow: we },
        },
        cn = null;
      function Qt(e, l, s) {
        if (l) return l;
        if (s) return s[e] || s.other;
      }
      var to = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function no(e) {
        var l = e.prefixCls,
          s = e.visible,
          m = e.children,
          r = e.popup,
          f = e.popupStyle,
          d = e.popupClassName,
          h = e.popupOffset,
          w = e.disabled,
          O = e.mode,
          X = e.onVisibleChange,
          Z = n.useContext(de),
          U = Z.getPopupContainer,
          G = Z.rtl,
          z = Z.subMenuOpenDelay,
          Me = Z.subMenuCloseDelay,
          Ie = Z.builtinPlacements,
          Ee = Z.triggerSubMenuAction,
          ee = Z.forceSubMenuRender,
          Y = Z.rootClassName,
          V = Z.motion,
          re = Z.defaultMotions,
          oe = n.useState(!1),
          He = (0, L.Z)(oe, 2),
          ue = He[0],
          yt = He[1],
          be = G
            ? (0, D.Z)((0, D.Z)({}, Nt), Ie)
            : (0, D.Z)((0, D.Z)({}, $n), Ie),
          lt = to[O],
          Ge = Qt(O, V, re),
          Qe = n.useRef(Ge);
        O !== 'inline' && (Qe.current = Ge);
        var gt = (0, D.Z)(
            (0, D.Z)({}, Qe.current),
            {},
            {
              leavedClassName: ''.concat(l, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          pt = n.useRef();
        return (
          n.useEffect(
            function () {
              return (
                (pt.current = (0, g.Z)(function () {
                  yt(s);
                })),
                function () {
                  g.Z.cancel(pt.current);
                }
              );
            },
            [s],
          ),
          n.createElement(
            en.Z,
            {
              prefixCls: l,
              popupClassName: J()(
                ''.concat(l, '-popup'),
                (0, I.Z)({}, ''.concat(l, '-rtl'), G),
                d,
                Y,
              ),
              stretch: O === 'horizontal' ? 'minWidth' : null,
              getPopupContainer: U,
              builtinPlacements: be,
              popupPlacement: lt,
              popupVisible: ue,
              popup: r,
              popupStyle: f,
              popupAlign: h && { offset: h },
              action: w ? [] : [Ee],
              mouseEnterDelay: z,
              mouseLeaveDelay: Me,
              onPopupVisibleChange: X,
              forceRender: ee,
              popupMotion: gt,
              fresh: !0,
            },
            m,
          )
        );
      }
      var oo = o(84888);
      function ro(e) {
        var l = e.id,
          s = e.open,
          m = e.keyPath,
          r = e.children,
          f = 'inline',
          d = n.useContext(de),
          h = d.prefixCls,
          w = d.forceSubMenuRender,
          O = d.motion,
          X = d.defaultMotions,
          Z = d.mode,
          U = n.useRef(!1);
        U.current = Z === f;
        var G = n.useState(!U.current),
          z = (0, L.Z)(G, 2),
          Me = z[0],
          Ie = z[1],
          Ee = U.current ? s : !1;
        n.useEffect(
          function () {
            U.current && Ie(!1);
          },
          [Z],
        );
        var ee = (0, D.Z)({}, Qt(f, O, X));
        m.length > 1 && (ee.motionAppear = !1);
        var Y = ee.onVisibleChanged;
        return (
          (ee.onVisibleChanged = function (V) {
            return !U.current && !V && Ie(!0), Y == null ? void 0 : Y(V);
          }),
          Me
            ? null
            : n.createElement(
                Ze,
                { mode: f, locked: !U.current },
                n.createElement(
                  oo.ZP,
                  (0, a.Z)({ visible: Ee }, ee, {
                    forceRender: w,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(h, '-hidden'),
                  }),
                  function (V) {
                    var re = V.className,
                      oe = V.style;
                    return n.createElement(
                      Dt,
                      { id: l, className: re, style: oe },
                      r,
                    );
                  },
                ),
              )
        );
      }
      var io = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'popupStyle',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        ao = ['active'],
        lo = n.forwardRef(function (e, l) {
          var s,
            m = e.style,
            r = e.className,
            f = e.title,
            d = e.eventKey,
            h = e.warnKey,
            w = e.disabled,
            O = e.internalPopupClose,
            X = e.children,
            Z = e.itemIcon,
            U = e.expandIcon,
            G = e.popupClassName,
            z = e.popupOffset,
            Me = e.popupStyle,
            Ie = e.onClick,
            Ee = e.onMouseEnter,
            ee = e.onMouseLeave,
            Y = e.onTitleClick,
            V = e.onTitleMouseEnter,
            re = e.onTitleMouseLeave,
            oe = (0, j.Z)(e, io),
            He = We(d),
            ue = n.useContext(de),
            yt = ue.prefixCls,
            be = ue.mode,
            lt = ue.openKeys,
            Ge = ue.disabled,
            Qe = ue.overflowDisabled,
            gt = ue.activeKey,
            pt = ue.selectedKeys,
            Bt = ue.itemIcon,
            nt = ue.expandIcon,
            It = ue.onItemClick,
            St = ue.onOpenChange,
            xt = ue.onActive,
            Ht = n.useContext($e),
            Wt = Ht._internalRenderSubMenuItem,
            At = n.useContext(ne),
            Vt = At.isSubPathKey,
            Ft = A(),
            ot = ''.concat(yt, '-submenu'),
            bt = Ge || w,
            qt = n.useRef(),
            Xt = n.useRef(),
            Ut = Z != null ? Z : Bt,
            qe = U != null ? U : nt,
            Rt = lt.includes(d),
            zt = !Qe && Rt,
            mn = Vt(pt, d),
            _t = le(d, bt, V, re),
            Gt = _t.active,
            xn = (0, j.Z)(_t, ao),
            Ln = n.useState(!1),
            Mn = (0, L.Z)(Ln, 2),
            nn = Mn[0],
            vn = Mn[1],
            on = function (Te) {
              bt || vn(Te);
            },
            En = function (Te) {
              on(!0), Ee == null || Ee({ key: d, domEvent: Te });
            },
            Pn = function (Te) {
              on(!1), ee == null || ee({ key: d, domEvent: Te });
            },
            rn = n.useMemo(
              function () {
                return Gt || (be !== 'inline' ? nn || Vt([gt], d) : !1);
              },
              [be, Gt, gt, nn, d, Vt],
            ),
            Tt = Le(Ft.length),
            On = function (Te) {
              bt ||
                (Y == null || Y({ key: d, domEvent: Te }),
                be === 'inline' && St(d, !Rt));
            },
            Rn = y(function (Mt) {
              Ie == null || Ie(Xe(Mt)), It(Mt);
            }),
            fn = function (Te) {
              be !== 'inline' && St(d, Te);
            },
            gn = function () {
              xt(d);
            },
            an = He && ''.concat(He, '-popup'),
            Lt = n.createElement(
              'div',
              (0, a.Z)(
                {
                  role: 'menuitem',
                  style: Tt,
                  className: ''.concat(ot, '-title'),
                  tabIndex: bt ? null : -1,
                  ref: qt,
                  title: typeof f == 'string' ? f : null,
                  'data-menu-id': Qe && He ? null : He,
                  'aria-expanded': zt,
                  'aria-haspopup': !0,
                  'aria-controls': an,
                  'aria-disabled': bt,
                  onClick: On,
                  onFocus: gn,
                },
                xn,
              ),
              f,
              n.createElement(
                je,
                {
                  icon: be !== 'horizontal' ? qe : void 0,
                  props: (0, D.Z)(
                    (0, D.Z)({}, e),
                    {},
                    { isOpen: zt, isSubMenu: !0 },
                  ),
                },
                n.createElement('i', { className: ''.concat(ot, '-arrow') }),
              ),
            ),
            Yt = n.useRef(be);
          if (
            (be !== 'inline' && Ft.length > 1
              ? (Yt.current = 'vertical')
              : (Yt.current = be),
            !Qe)
          ) {
            var kt = Yt.current;
            Lt = n.createElement(
              no,
              {
                mode: kt,
                prefixCls: ot,
                visible: !O && zt && be !== 'inline',
                popupClassName: G,
                popupOffset: z,
                popupStyle: Me,
                popup: n.createElement(
                  Ze,
                  { mode: kt === 'horizontal' ? 'vertical' : kt },
                  n.createElement(Dt, { id: an, ref: Xt }, X),
                ),
                disabled: bt,
                onVisibleChange: fn,
              },
              Lt,
            );
          }
          var ln = n.createElement(
            E.Z.Item,
            (0, a.Z)({ ref: l, role: 'none' }, oe, {
              component: 'li',
              style: m,
              className: J()(
                ot,
                ''.concat(ot, '-').concat(be),
                r,
                ((s = {}),
                (0, I.Z)(s, ''.concat(ot, '-open'), zt),
                (0, I.Z)(s, ''.concat(ot, '-active'), rn),
                (0, I.Z)(s, ''.concat(ot, '-selected'), mn),
                (0, I.Z)(s, ''.concat(ot, '-disabled'), bt),
                s),
              ),
              onMouseEnter: En,
              onMouseLeave: Pn,
            }),
            Lt,
            !Qe && n.createElement(ro, { id: an, open: zt, keyPath: Ft }, X),
          );
          return (
            Wt &&
              (ln = Wt(ln, e, {
                selected: mn,
                active: rn,
                open: zt,
                disabled: bt,
              })),
            n.createElement(
              Ze,
              {
                onItemClick: Rn,
                mode: be === 'horizontal' ? 'vertical' : be,
                itemIcon: Ut,
                expandIcon: qe,
              },
              ln,
            )
          );
        }),
        so = n.forwardRef(function (e, l) {
          var s = e.eventKey,
            m = e.children,
            r = A(s),
            f = pe(m, r),
            d = p();
          n.useEffect(
            function () {
              if (d)
                return (
                  d.registerPath(s, r),
                  function () {
                    d.unregisterPath(s, r);
                  }
                );
            },
            [r],
          );
          var h;
          return (
            d ? (h = f) : (h = n.createElement(lo, (0, a.Z)({ ref: l }, e), f)),
            n.createElement(Ce.Provider, { value: r }, h)
          );
        }),
        dn = so,
        uo = o(22361);
      function yn(e) {
        var l = e.className,
          s = e.style,
          m = n.useContext(de),
          r = m.prefixCls,
          f = p();
        return f
          ? null
          : n.createElement('li', {
              role: 'separator',
              className: J()(''.concat(r, '-item-divider'), l),
              style: s,
            });
      }
      var co = ['className', 'title', 'eventKey', 'children'],
        mo = n.forwardRef(function (e, l) {
          var s = e.className,
            m = e.title,
            r = e.eventKey,
            f = e.children,
            d = (0, j.Z)(e, co),
            h = n.useContext(de),
            w = h.prefixCls,
            O = ''.concat(w, '-item-group');
          return n.createElement(
            'li',
            (0, a.Z)({ ref: l, role: 'presentation' }, d, {
              onClick: function (Z) {
                return Z.stopPropagation();
              },
              className: J()(O, s),
            }),
            n.createElement(
              'div',
              {
                role: 'presentation',
                className: ''.concat(O, '-title'),
                title: typeof m == 'string' ? m : void 0,
              },
              m,
            ),
            n.createElement(
              'ul',
              { role: 'group', className: ''.concat(O, '-list') },
              f,
            ),
          );
        }),
        vo = n.forwardRef(function (e, l) {
          var s = e.eventKey,
            m = e.children,
            r = A(s),
            f = pe(m, r),
            d = p();
          return d
            ? f
            : n.createElement(
                mo,
                (0, a.Z)({ ref: l }, (0, _.Z)(e, ['warnKey'])),
                f,
              );
        }),
        In = vo,
        fo = ['label', 'children', 'key', 'type'];
      function Sn(e, l) {
        var s = l.item,
          m = l.group,
          r = l.submenu,
          f = l.divider;
        return (e || [])
          .map(function (d, h) {
            if (d && (0, uo.Z)(d) === 'object') {
              var w = d,
                O = w.label,
                X = w.children,
                Z = w.key,
                U = w.type,
                G = (0, j.Z)(w, fo),
                z = Z != null ? Z : 'tmp-'.concat(h);
              return X || U === 'group'
                ? U === 'group'
                  ? n.createElement(
                      m,
                      (0, a.Z)({ key: z }, G, { title: O }),
                      Sn(X, l),
                    )
                  : n.createElement(
                      r,
                      (0, a.Z)({ key: z }, G, { title: O }),
                      Sn(X, l),
                    )
                : U === 'divider'
                ? n.createElement(f, (0, a.Z)({ key: z }, G))
                : n.createElement(s, (0, a.Z)({ key: z }, G), O);
            }
            return null;
          })
          .filter(function (d) {
            return d;
          });
      }
      function zn(e, l, s, m) {
        var r = e,
          f = (0, D.Z)({ divider: yn, item: Ke, group: In, submenu: dn }, m);
        return l && (r = Sn(l, f)), pe(r, s);
      }
      var go = [
          'prefixCls',
          'rootClassName',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
          '_internalComponents',
        ],
        Kt = [],
        po = n.forwardRef(function (e, l) {
          var s,
            m,
            r = e,
            f = r.prefixCls,
            d = f === void 0 ? 'rc-menu' : f,
            h = r.rootClassName,
            w = r.style,
            O = r.className,
            X = r.tabIndex,
            Z = X === void 0 ? 0 : X,
            U = r.items,
            G = r.children,
            z = r.direction,
            Me = r.id,
            Ie = r.mode,
            Ee = Ie === void 0 ? 'vertical' : Ie,
            ee = r.inlineCollapsed,
            Y = r.disabled,
            V = r.disabledOverflow,
            re = r.subMenuOpenDelay,
            oe = re === void 0 ? 0.1 : re,
            He = r.subMenuCloseDelay,
            ue = He === void 0 ? 0.1 : He,
            yt = r.forceSubMenuRender,
            be = r.defaultOpenKeys,
            lt = r.openKeys,
            Ge = r.activeKey,
            Qe = r.defaultActiveFirst,
            gt = r.selectable,
            pt = gt === void 0 ? !0 : gt,
            Bt = r.multiple,
            nt = Bt === void 0 ? !1 : Bt,
            It = r.defaultSelectedKeys,
            St = r.selectedKeys,
            xt = r.onSelect,
            Ht = r.onDeselect,
            Wt = r.inlineIndent,
            At = Wt === void 0 ? 24 : Wt,
            Vt = r.motion,
            Ft = r.defaultMotions,
            ot = r.triggerSubMenuAction,
            bt = ot === void 0 ? 'hover' : ot,
            qt = r.builtinPlacements,
            Xt = r.itemIcon,
            Ut = r.expandIcon,
            qe = r.overflowedIndicator,
            Rt = qe === void 0 ? '...' : qe,
            zt = r.overflowedIndicatorPopupClassName,
            mn = r.getPopupContainer,
            _t = r.onClick,
            Gt = r.onOpenChange,
            xn = r.onKeyDown,
            Ln = r.openAnimation,
            Mn = r.openTransitionName,
            nn = r._internalRenderMenuItem,
            vn = r._internalRenderSubMenuItem,
            on = r._internalComponents,
            En = (0, j.Z)(r, go),
            Pn = n.useMemo(
              function () {
                return [zn(G, U, Kt, on), zn(G, U, Kt, {})];
              },
              [G, U, on],
            ),
            rn = (0, L.Z)(Pn, 2),
            Tt = rn[0],
            On = rn[1],
            Rn = n.useState(!1),
            fn = (0, L.Z)(Rn, 2),
            gn = fn[0],
            an = fn[1],
            Lt = n.useRef(),
            Yt = F(Me),
            kt = z === 'rtl',
            ln = (0, N.Z)(be, {
              value: lt,
              postState: function (te) {
                return te || Kt;
              },
            }),
            Mt = (0, L.Z)(ln, 2),
            Te = Mt[0],
            jn = Mt[1],
            wn = function (te) {
              var me =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1;
              function st() {
                jn(te), Gt == null || Gt(te);
              }
              me ? (0, et.flushSync)(st) : st();
            },
            Co = n.useState(Te),
            Kn = (0, L.Z)(Co, 2),
            $o = Kn[0],
            yo = Kn[1],
            Zn = n.useRef(!1),
            Io = n.useMemo(
              function () {
                return (Ee === 'inline' || Ee === 'vertical') && ee
                  ? ['vertical', ee]
                  : [Ee, !1];
              },
              [Ee, ee],
            ),
            Hn = (0, L.Z)(Io, 2),
            pn = Hn[0],
            Nn = Hn[1],
            Wn = pn === 'inline',
            So = n.useState(pn),
            Vn = (0, L.Z)(So, 2),
            jt = Vn[0],
            xo = Vn[1],
            Mo = n.useState(Nn),
            Fn = (0, L.Z)(Mo, 2),
            Eo = Fn[0],
            Po = Fn[1];
          n.useEffect(
            function () {
              xo(pn), Po(Nn), Zn.current && (Wn ? jn($o) : wn(Kt));
            },
            [pn, Nn],
          );
          var Oo = n.useState(0),
            Xn = (0, L.Z)(Oo, 2),
            bn = Xn[0],
            Ro = Xn[1],
            Bn = bn >= Tt.length - 1 || jt !== 'horizontal' || V;
          n.useEffect(
            function () {
              Wn && yo(Te);
            },
            [Te],
          ),
            n.useEffect(function () {
              return (
                (Zn.current = !0),
                function () {
                  Zn.current = !1;
                }
              );
            }, []);
          var Jt = M(),
            Un = Jt.registerPath,
            Gn = Jt.unregisterPath,
            wo = Jt.refreshOverflowKeys,
            Yn = Jt.isSubPathKey,
            Zo = Jt.getKeyPath,
            kn = Jt.getKeys,
            No = Jt.getSubPathKeys,
            Bo = n.useMemo(
              function () {
                return { registerPath: Un, unregisterPath: Gn };
              },
              [Un, Gn],
            ),
            To = n.useMemo(
              function () {
                return { isSubPathKey: Yn };
              },
              [Yn],
            );
          n.useEffect(
            function () {
              wo(
                Bn
                  ? Kt
                  : Tt.slice(bn + 1).map(function (Se) {
                      return Se.key;
                    }),
              );
            },
            [bn, Bn],
          );
          var Do = (0, N.Z)(
              Ge ||
                (Qe && ((s = Tt[0]) === null || s === void 0 ? void 0 : s.key)),
              { value: Ge },
            ),
            Jn = (0, L.Z)(Do, 2),
            sn = Jn[0],
            Tn = Jn[1],
            Ao = y(function (Se) {
              Tn(Se);
            }),
            zo = y(function () {
              Tn(void 0);
            });
          (0, n.useImperativeHandle)(l, function () {
            return {
              list: Lt.current,
              focus: function (te) {
                var me,
                  st = kn(),
                  ut = ae(st, Yt),
                  Cn = ut.elements,
                  Dn = ut.key2element,
                  Go = ut.element2key,
                  _n = P(Lt.current, Cn),
                  eo =
                    sn != null
                      ? sn
                      : _n[0]
                      ? Go.get(_n[0])
                      : (me = Tt.find(function (Yo) {
                          return !Yo.props.disabled;
                        })) === null || me === void 0
                      ? void 0
                      : me.key,
                  un = Dn.get(eo);
                if (eo && un) {
                  var An;
                  un == null ||
                    (An = un.focus) === null ||
                    An === void 0 ||
                    An.call(un, te);
                }
              },
            };
          });
          var Lo = (0, N.Z)(It || [], {
              value: St,
              postState: function (te) {
                return Array.isArray(te) ? te : te == null ? Kt : [te];
              },
            }),
            Qn = (0, L.Z)(Lo, 2),
            hn = Qn[0],
            jo = Qn[1],
            Ko = function (te) {
              if (pt) {
                var me = te.key,
                  st = hn.includes(me),
                  ut;
                nt
                  ? st
                    ? (ut = hn.filter(function (Dn) {
                        return Dn !== me;
                      }))
                    : (ut = [].concat((0, ve.Z)(hn), [me]))
                  : (ut = [me]),
                  jo(ut);
                var Cn = (0, D.Z)((0, D.Z)({}, te), {}, { selectedKeys: ut });
                st ? Ht == null || Ht(Cn) : xt == null || xt(Cn);
              }
              !nt && Te.length && jt !== 'inline' && wn(Kt);
            },
            Ho = y(function (Se) {
              _t == null || _t(Xe(Se)), Ko(Se);
            }),
            qn = y(function (Se, te) {
              var me = Te.filter(function (ut) {
                return ut !== Se;
              });
              if (te) me.push(Se);
              else if (jt !== 'inline') {
                var st = No(Se);
                me = me.filter(function (ut) {
                  return !st.has(ut);
                });
              }
              (0, ce.Z)(Te, me, !0) || wn(me, !0);
            }),
            Wo = function (te, me) {
              var st = me != null ? me : !Te.includes(te);
              qn(te, st);
            },
            Vo = u(jt, sn, kt, Yt, Lt, kn, Zo, Tn, Wo, xn);
          n.useEffect(function () {
            an(!0);
          }, []);
          var Fo = n.useMemo(
              function () {
                return {
                  _internalRenderMenuItem: nn,
                  _internalRenderSubMenuItem: vn,
                };
              },
              [nn, vn],
            ),
            Xo =
              jt !== 'horizontal' || V
                ? Tt
                : Tt.map(function (Se, te) {
                    return n.createElement(
                      Ze,
                      { key: Se.key, overflowDisabled: te > bn },
                      Se,
                    );
                  }),
            Uo = n.createElement(
              E.Z,
              (0, a.Z)(
                {
                  id: Me,
                  ref: Lt,
                  prefixCls: ''.concat(d, '-overflow'),
                  component: 'ul',
                  itemComponent: Ke,
                  className: J()(
                    d,
                    ''.concat(d, '-root'),
                    ''.concat(d, '-').concat(jt),
                    O,
                    ((m = {}),
                    (0, I.Z)(m, ''.concat(d, '-inline-collapsed'), Eo),
                    (0, I.Z)(m, ''.concat(d, '-rtl'), kt),
                    m),
                    h,
                  ),
                  dir: z,
                  style: w,
                  role: 'menu',
                  tabIndex: Z,
                  data: Xo,
                  renderRawItem: function (te) {
                    return te;
                  },
                  renderRawRest: function (te) {
                    var me = te.length,
                      st = me ? Tt.slice(-me) : null;
                    return n.createElement(
                      dn,
                      {
                        eventKey: b,
                        title: Rt,
                        disabled: Bn,
                        internalPopupClose: me === 0,
                        popupClassName: zt,
                      },
                      st,
                    );
                  },
                  maxCount:
                    jt !== 'horizontal' || V ? E.Z.INVALIDATE : E.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (te) {
                    Ro(te);
                  },
                  onKeyDown: Vo,
                },
                En,
              ),
            );
          return n.createElement(
            $e.Provider,
            { value: Fo },
            n.createElement(
              ct.Provider,
              { value: Yt },
              n.createElement(
                Ze,
                {
                  prefixCls: d,
                  rootClassName: h,
                  mode: jt,
                  openKeys: Te,
                  rtl: kt,
                  disabled: Y,
                  motion: gn ? Vt : null,
                  defaultMotions: gn ? Ft : null,
                  activeKey: sn,
                  onActive: Ao,
                  onInactive: zo,
                  selectedKeys: hn,
                  inlineIndent: At,
                  subMenuOpenDelay: oe,
                  subMenuCloseDelay: ue,
                  forceSubMenuRender: yt,
                  builtinPlacements: qt,
                  triggerSubMenuAction: bt,
                  getPopupContainer: mn,
                  itemIcon: Xt,
                  expandIcon: Ut,
                  onItemClick: Ho,
                  onOpenChange: qn,
                },
                n.createElement(ne.Provider, { value: To }, Uo),
                n.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  n.createElement(H.Provider, { value: Bo }, On),
                ),
              ),
            ),
          );
        }),
        bo = po,
        tn = bo;
      (tn.Item = Ke), (tn.SubMenu = dn), (tn.ItemGroup = In), (tn.Divider = yn);
      var ho = tn;
    },
  },
]);
