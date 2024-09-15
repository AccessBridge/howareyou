'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [487],
  {
    45058: function (ur, pn, m) {
      m.d(pn, {
        vY: function () {
          return re;
        },
      });
      var Ee = m(80104),
        oe = m(62812),
        it = m(47768),
        de = m(41670),
        S = m(83525),
        He = m(22466),
        u = m(18140),
        Ie = m(47076),
        Ct = m(10244),
        Bt = m(1177),
        $e = m(82702),
        Ge = m(83035),
        Et = m(55454),
        ke = m(30086),
        fe = m(36704),
        ve = m(73042),
        J = m(97616),
        l = function (w) {
          var B = w.padding;
          return (0, J.jsx)('div', {
            style: { padding: B || '0 24px' },
            children: (0, J.jsx)(fe.Z, { style: { margin: 0 } }),
          });
        },
        Gt = { xs: 2, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 },
        Rn = function (w) {
          var B = w.size,
            A = w.active,
            G = (0, $e.useMemo)(function () {
              return { lg: !0, md: !0, sm: !1, xl: !1, xs: !1, xxl: !1 };
            }, []),
            be = (0, ke.Z)() || G,
            ce =
              Object.keys(be).filter(function (Ke) {
                return be[Ke] === !0;
              })[0] || 'md',
            Be = B === void 0 ? Gt[ce] || 6 : B,
            at = function (ze) {
              return ze === 0 ? 0 : Be > 2 ? 42 : 16;
            };
          return (0, J.jsx)(Et.Z, {
            bordered: !1,
            style: { marginBlockEnd: 16 },
            children: (0, J.jsx)('div', {
              style: {
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
              },
              children: new Array(Be).fill(null).map(function (Ke, ze) {
                return (0,
                J.jsxs)('div', { style: { borderInlineStart: Be > 2 && ze === 1 ? '1px solid rgba(0,0,0,0.06)' : void 0, paddingInlineStart: at(ze), flex: 1, marginInlineEnd: ze === 0 ? 16 : 0 }, children: [(0, J.jsx)(Ge.Z, { active: A, paragraph: !1, title: { width: 100, style: { marginBlockStart: 0 } } }), (0, J.jsx)(Ge.Z.Button, { active: A, style: { height: 48 } })] }, ze);
              }),
            }),
          });
        },
        zn = function (w) {
          var B = w.active;
          return (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsx)(Et.Z, {
                bordered: !1,
                style: { borderRadius: 0 },
                styles: { body: { padding: 24 } },
                children: (0, J.jsxs)('div', {
                  style: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  children: [
                    (0, J.jsx)('div', {
                      style: { maxWidth: '100%', flex: 1 },
                      children: (0, J.jsx)(Ge.Z, {
                        active: B,
                        title: { width: 100, style: { marginBlockStart: 0 } },
                        paragraph: { rows: 1, style: { margin: 0 } },
                      }),
                    }),
                    (0, J.jsx)(Ge.Z.Button, {
                      active: B,
                      size: 'small',
                      style: { width: 165, marginBlockStart: 12 },
                    }),
                  ],
                }),
              }),
              (0, J.jsx)(l, {}),
            ],
          });
        },
        x = function (w) {
          var B = w.size,
            A = w.active,
            G = A === void 0 ? !0 : A,
            be = w.actionButton;
          return (0, J.jsxs)(Et.Z, {
            bordered: !1,
            styles: { body: { padding: 0 } },
            children: [
              new Array(B).fill(null).map(function (ce, Be) {
                return (0, J.jsx)(zn, { active: !!G }, Be);
              }),
              be !== !1 &&
                (0, J.jsx)(Et.Z, {
                  bordered: !1,
                  style: { borderStartEndRadius: 0, borderTopLeftRadius: 0 },
                  styles: {
                    body: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  },
                  children: (0, J.jsx)(Ge.Z.Button, {
                    style: { width: 102 },
                    active: G,
                    size: 'small',
                  }),
                }),
            ],
          });
        },
        ht = function (w) {
          var B = w.active;
          return (0, J.jsxs)('div', {
            style: { marginBlockEnd: 16 },
            children: [
              (0, J.jsx)(Ge.Z, { paragraph: !1, title: { width: 185 } }),
              (0, J.jsx)(Ge.Z.Button, { active: B, size: 'small' }),
            ],
          });
        },
        cn = function (w) {
          var B = w.active;
          return (0, J.jsx)(Et.Z, {
            bordered: !1,
            style: { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
            styles: { body: { paddingBlockEnd: 8 } },
            children: (0, J.jsxs)(ve.Z, {
              style: { width: '100%', justifyContent: 'space-between' },
              children: [
                (0, J.jsx)(Ge.Z.Button, {
                  active: B,
                  style: { width: 200 },
                  size: 'small',
                }),
                (0, J.jsxs)(ve.Z, {
                  children: [
                    (0, J.jsx)(Ge.Z.Button, {
                      active: B,
                      size: 'small',
                      style: { width: 120 },
                    }),
                    (0, J.jsx)(Ge.Z.Button, {
                      active: B,
                      size: 'small',
                      style: { width: 80 },
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        fn = function (w) {
          var B = w.active,
            A = B === void 0 ? !0 : B,
            G = w.statistic,
            be = w.actionButton,
            ce = w.toolbar,
            Be = w.pageHeader,
            at = w.list,
            Ke = at === void 0 ? 5 : at;
          return (0, J.jsxs)('div', {
            style: { width: '100%' },
            children: [
              Be !== !1 && (0, J.jsx)(ht, { active: A }),
              G !== !1 && (0, J.jsx)(Rn, { size: G, active: A }),
              (ce !== !1 || Ke !== !1) &&
                (0, J.jsxs)(Et.Z, {
                  bordered: !1,
                  styles: { body: { padding: 0 } },
                  children: [
                    ce !== !1 && (0, J.jsx)(cn, { active: A }),
                    Ke !== !1 &&
                      (0, J.jsx)(x, { size: Ke, active: A, actionButton: be }),
                  ],
                }),
            ],
          });
        },
        Vt = fn,
        Me = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 },
        en = function (w) {
          var B = w.active;
          return (0, J.jsxs)('div', {
            style: { marginBlockStart: 32 },
            children: [
              (0, J.jsx)(Ge.Z.Button, {
                active: B,
                size: 'small',
                style: { width: 100, marginBlockEnd: 16 },
              }),
              (0, J.jsxs)('div', {
                style: {
                  width: '100%',
                  justifyContent: 'space-between',
                  display: 'flex',
                },
                children: [
                  (0, J.jsxs)('div', {
                    style: { flex: 1, marginInlineEnd: 24, maxWidth: 300 },
                    children: [
                      (0, J.jsx)(Ge.Z, {
                        active: B,
                        paragraph: !1,
                        title: { style: { marginBlockStart: 0 } },
                      }),
                      (0, J.jsx)(Ge.Z, {
                        active: B,
                        paragraph: !1,
                        title: { style: { marginBlockStart: 8 } },
                      }),
                      (0, J.jsx)(Ge.Z, {
                        active: B,
                        paragraph: !1,
                        title: { style: { marginBlockStart: 8 } },
                      }),
                    ],
                  }),
                  (0, J.jsx)('div', {
                    style: {
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, J.jsxs)('div', {
                      style: { maxWidth: 300, margin: 'auto' },
                      children: [
                        (0, J.jsx)(Ge.Z, {
                          active: B,
                          paragraph: !1,
                          title: { style: { marginBlockStart: 0 } },
                        }),
                        (0, J.jsx)(Ge.Z, {
                          active: B,
                          paragraph: !1,
                          title: { style: { marginBlockStart: 8 } },
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        qn = function (w) {
          var B = w.size,
            A = w.active,
            G = (0, $e.useMemo)(function () {
              return { lg: !0, md: !0, sm: !1, xl: !1, xs: !1, xxl: !1 };
            }, []),
            be = (0, ke.Z)() || G,
            ce =
              Object.keys(be).filter(function (at) {
                return be[at] === !0;
              })[0] || 'md',
            Be = B === void 0 ? Me[ce] || 3 : B;
          return (0, J.jsx)('div', {
            style: {
              width: '100%',
              justifyContent: 'space-between',
              display: 'flex',
            },
            children: new Array(Be).fill(null).map(function (at, Ke) {
              return (0,
              J.jsxs)('div', { style: { flex: 1, paddingInlineStart: Ke === 0 ? 0 : 24, paddingInlineEnd: Ke === Be - 1 ? 0 : 24 }, children: [(0, J.jsx)(Ge.Z, { active: A, paragraph: !1, title: { style: { marginBlockStart: 0 } } }), (0, J.jsx)(Ge.Z, { active: A, paragraph: !1, title: { style: { marginBlockStart: 8 } } }), (0, J.jsx)(Ge.Z, { active: A, paragraph: !1, title: { style: { marginBlockStart: 8 } } })] }, Ke);
            }),
          });
        },
        Nn = function (w) {
          var B = w.active,
            A = w.header,
            G = A === void 0 ? !1 : A,
            be = (0, $e.useMemo)(function () {
              return { lg: !0, md: !0, sm: !1, xl: !1, xs: !1, xxl: !1 };
            }, []),
            ce = (0, ke.Z)() || be,
            Be =
              Object.keys(ce).filter(function (Ke) {
                return ce[Ke] === !0;
              })[0] || 'md',
            at = Me[Be] || 3;
          return (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsxs)('div', {
                style: {
                  display: 'flex',
                  background: G ? 'rgba(0,0,0,0.02)' : 'none',
                  padding: '24px 8px',
                },
                children: [
                  new Array(at).fill(null).map(function (Ke, ze) {
                    return (0,
                    J.jsx)('div', { style: { flex: 1, paddingInlineStart: G && ze === 0 ? 0 : 20, paddingInlineEnd: 32 }, children: (0, J.jsx)(Ge.Z, { active: B, paragraph: !1, title: { style: { margin: 0, height: 24, width: G ? '75px' : '100%' } } }) }, ze);
                  }),
                  (0, J.jsx)('div', {
                    style: { flex: 3, paddingInlineStart: 32 },
                    children: (0, J.jsx)(Ge.Z, {
                      active: B,
                      paragraph: !1,
                      title: {
                        style: {
                          margin: 0,
                          height: 24,
                          width: G ? '75px' : '100%',
                        },
                      },
                    }),
                  }),
                ],
              }),
              (0, J.jsx)(l, { padding: '0px 0px' }),
            ],
          });
        },
        Kn = function (w) {
          var B = w.active,
            A = w.size,
            G = A === void 0 ? 4 : A;
          return (0, J.jsxs)(Et.Z, {
            bordered: !1,
            children: [
              (0, J.jsx)(Ge.Z.Button, {
                active: B,
                size: 'small',
                style: { width: 100, marginBlockEnd: 16 },
              }),
              (0, J.jsx)(Nn, { header: !0, active: B }),
              new Array(G).fill(null).map(function (be, ce) {
                return (0, J.jsx)(Nn, { active: B }, ce);
              }),
              (0, J.jsx)('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingBlockStart: 16,
                },
                children: (0, J.jsx)(Ge.Z, {
                  active: B,
                  paragraph: !1,
                  title: {
                    style: {
                      margin: 0,
                      height: 32,
                      float: 'right',
                      maxWidth: '630px',
                    },
                  },
                }),
              }),
            ],
          });
        },
        On = function (w) {
          var B = w.active;
          return (0, J.jsxs)(Et.Z, {
            bordered: !1,
            style: { borderStartEndRadius: 0, borderTopLeftRadius: 0 },
            children: [
              (0, J.jsx)(Ge.Z.Button, {
                active: B,
                size: 'small',
                style: { width: 100, marginBlockEnd: 16 },
              }),
              (0, J.jsx)(qn, { active: B }),
              (0, J.jsx)(en, { active: B }),
            ],
          });
        },
        sr = function (w) {
          var B = w.active,
            A = B === void 0 ? !0 : B,
            G = w.pageHeader,
            be = w.list;
          return (0, J.jsxs)('div', {
            style: { width: '100%' },
            children: [
              G !== !1 && (0, J.jsx)(ht, { active: A }),
              (0, J.jsx)(On, { active: A }),
              be !== !1 && (0, J.jsx)(l, {}),
              be !== !1 && (0, J.jsx)(Kn, { active: A, size: be }),
            ],
          });
        },
        cr = sr,
        er = function (w) {
          var B = w.active,
            A = B === void 0 ? !0 : B,
            G = w.pageHeader;
          return (0, J.jsxs)('div', {
            style: { width: '100%' },
            children: [
              G !== !1 && (0, J.jsx)(ht, { active: A }),
              (0, J.jsx)(Et.Z, {
                children: (0, J.jsxs)('div', {
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 128,
                  },
                  children: [
                    (0, J.jsx)(Ge.Z.Avatar, {
                      size: 64,
                      style: { marginBlockEnd: 32 },
                    }),
                    (0, J.jsx)(Ge.Z.Button, {
                      active: A,
                      style: { width: 214, marginBlockEnd: 8 },
                    }),
                    (0, J.jsx)(Ge.Z.Button, {
                      active: A,
                      style: { width: 328 },
                      size: 'small',
                    }),
                    (0, J.jsxs)(ve.Z, {
                      style: { marginBlockStart: 24 },
                      children: [
                        (0, J.jsx)(Ge.Z.Button, {
                          active: A,
                          style: { width: 116 },
                        }),
                        (0, J.jsx)(Ge.Z.Button, {
                          active: A,
                          style: { width: 116 },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Zt = er,
        pr = ['type'],
        Or = function (w) {
          var B = w.type,
            A = B === void 0 ? 'list' : B,
            G = (0, de.Z)(w, pr);
          return A === 'result'
            ? (0, J.jsx)(Zt, (0, S.Z)({}, G))
            : A === 'descriptions'
            ? (0, J.jsx)(cr, (0, S.Z)({}, G))
            : (0, J.jsx)(Vt, (0, S.Z)({}, G));
        },
        fr = Or,
        gr = m(67994),
        Sr = m(2300),
        hr = m(28847),
        tr = m(41816),
        xr = m(33888),
        $n = m(88387),
        yr = m(72561),
        Fr = m(91496),
        Xr = m(28941),
        Gr = m(81523),
        Mr = m(69164),
        En = m(63546),
        ea = function (w) {
          return (Xr.ZP.warn || Xr.ZP.warning)(w);
        };
      function Yr(P) {
        var w = P.data,
          B = P.row;
        return (0, S.Z)((0, S.Z)({}, w), B);
      }
      function ta(P) {
        var w = (0, $e.useRef)(null),
          B = P.type || 'single',
          A = (0, Fr.YB)(),
          G = (0, Mr.Z)([], {
            value: P.editableKeys,
            onChange: P.onChange
              ? function (st) {
                  var nt;
                  P == null ||
                    (nt = P.onChange) === null ||
                    nt === void 0 ||
                    nt.call(P, st, P.dataSource);
                }
              : void 0,
          }),
          be = (0, yr.Z)(G, 2),
          ce = be[0],
          Be = be[1],
          at = (0, $e.useMemo)(
            function () {
              var st =
                B === 'single' ? (ce == null ? void 0 : ce.slice(0, 1)) : ce;
              return new Set(st);
            },
            [(ce || []).join(','), B],
          ),
          Ke = (0, $e.useCallback)(
            function (st) {
              return !!(ce != null && ce.includes((0, En.sN)(st)));
            },
            [(ce || []).join(',')],
          ),
          ze = function (nt, qe) {
            var Ve;
            return at.size > 0 && B === 'single'
              ? (ea(
                  P.onlyOneLineEditorAlertMessage ||
                    A.getMessage(
                      'editableTable.onlyOneLineEditor',
                      '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                    ),
                ),
                !1)
              : ((w.current =
                  (Ve =
                    qe != null
                      ? qe
                      : (0, Gr.U2)(
                          P.dataSource,
                          Array.isArray(nt) ? nt : [nt],
                        )) !== null && Ve !== void 0
                    ? Ve
                    : null),
                at.add((0, En.sN)(nt)),
                Be(Array.from(at)),
                !0);
          },
          lt = function (nt) {
            return at.delete((0, En.sN)(nt)), Be(Array.from(at)), !0;
          },
          wt = (function () {
            var st = (0, it.Z)(
              (0, oe.Z)().mark(function nt(qe, Ve, St, an) {
                var vt, pt;
                return (0, oe.Z)().wrap(function (Ft) {
                  for (;;)
                    switch ((Ft.prev = Ft.next)) {
                      case 0:
                        return (
                          (Ft.next = 2),
                          P == null ||
                          (vt = P.onCancel) === null ||
                          vt === void 0
                            ? void 0
                            : vt.call(P, qe, Ve, St, an)
                        );
                      case 2:
                        if (((pt = Ft.sent), pt !== !1)) {
                          Ft.next = 5;
                          break;
                        }
                        return Ft.abrupt('return', !1);
                      case 5:
                        return Ft.abrupt('return', !0);
                      case 6:
                      case 'end':
                        return Ft.stop();
                    }
                }, nt);
              }),
            );
            return function (qe, Ve, St, an) {
              return st.apply(this, arguments);
            };
          })(),
          Nt = (function () {
            var st = (0, it.Z)(
              (0, oe.Z)().mark(function nt(qe, Ve, St) {
                var an, vt, pt;
                return (0, oe.Z)().wrap(function (Ft) {
                  for (;;)
                    switch ((Ft.prev = Ft.next)) {
                      case 0:
                        return (
                          (Ft.next = 2),
                          P == null || (an = P.onSave) === null || an === void 0
                            ? void 0
                            : an.call(P, qe, Ve, St)
                        );
                      case 2:
                        if (((vt = Ft.sent), vt !== !1)) {
                          Ft.next = 5;
                          break;
                        }
                        return Ft.abrupt('return', !1);
                      case 5:
                        return (Ft.next = 7), lt(qe);
                      case 7:
                        return (
                          (pt = {
                            data: P.dataSource,
                            row: Ve,
                            key: qe,
                            childrenColumnName:
                              P.childrenColumnName || 'children',
                          }),
                          P.setDataSource(Yr(pt)),
                          Ft.abrupt('return', !0)
                        );
                      case 10:
                      case 'end':
                        return Ft.stop();
                    }
                }, nt);
              }),
            );
            return function (qe, Ve, St) {
              return st.apply(this, arguments);
            };
          })(),
          Jt = A.getMessage('editableTable.action.save', '\u4FDD\u5B58'),
          ot = A.getMessage('editableTable.action.delete', '\u5220\u9664'),
          Lt = A.getMessage('editableTable.action.cancel', '\u53D6\u6D88'),
          ln = (0, $e.useCallback)(
            function (st, nt) {
              var qe = (0, S.Z)(
                  {
                    recordKey: st,
                    cancelEditable: lt,
                    onCancel: wt,
                    onSave: Nt,
                    editableKeys: ce,
                    setEditableRowKeys: Be,
                    saveText: Jt,
                    cancelText: Lt,
                    preEditRowRef: w,
                    deleteText: ot,
                    deletePopconfirmMessage: ''.concat(
                      A.getMessage(
                        'deleteThisLine',
                        '\u5220\u9664\u6B64\u9879',
                      ),
                      '?',
                    ),
                    editorType: 'Map',
                  },
                  nt,
                ),
                Ve = (0, En.aX)(P.dataSource, qe);
              return P.actionRender
                ? P.actionRender(P.dataSource, qe, {
                    save: Ve.save,
                    delete: Ve.delete,
                    cancel: Ve.cancel,
                  })
                : [Ve.save, Ve.delete, Ve.cancel];
            },
            [ce && ce.join(','), P.dataSource],
          );
        return {
          editableKeys: ce,
          setEditableRowKeys: Be,
          isEditable: Ke,
          actionRender: ln,
          startEditable: ze,
          cancelEditable: lt,
        };
      }
      var Pr = m(69124),
        Fn = m(68200),
        _n = m(91150),
        Cr = m.n(_n),
        Br = m(65104),
        Lr = m(64775),
        Dr = m(34256),
        k = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
        tt = $e.createContext({}),
        Je = m(96865),
        Rt = function (P, w) {
          var B = {};
          for (var A in P)
            Object.prototype.hasOwnProperty.call(P, A) &&
              w.indexOf(A) < 0 &&
              (B[A] = P[A]);
          if (P != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var G = 0, A = Object.getOwnPropertySymbols(P);
              G < A.length;
              G++
            )
              w.indexOf(A[G]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(P, A[G]) &&
                (B[A[G]] = P[A[G]]);
          return B;
        };
      const It = (P) =>
        (0, Je.Z)(P).map((w) =>
          Object.assign(Object.assign({}, w == null ? void 0 : w.props), {
            key: w.key,
          }),
        );
      function kt(P, w, B) {
        const A = $e.useMemo(() => w || It(B), [w, B]);
        return $e.useMemo(
          () =>
            A.map((be) => {
              var { span: ce } = be,
                Be = Rt(be, ['span']);
              return Object.assign(Object.assign({}, Be), {
                span: typeof ce == 'number' ? ce : (0, Br.m9)(P, ce),
              });
            }),
          [A, P],
        );
      }
      function Dt(P, w, B) {
        let A = P,
          G = !1;
        return (
          (B === void 0 || B > w) &&
            ((A = Object.assign(Object.assign({}, P), { span: w })),
            (G = B !== void 0)),
          [A, G]
        );
      }
      function rn(P, w) {
        const B = [];
        let A = [],
          G = w,
          be = !1;
        return (
          P.filter((ce) => ce).forEach((ce, Be) => {
            const at = ce == null ? void 0 : ce.span,
              Ke = at || 1;
            if (Be === P.length - 1) {
              const [ze, lt] = Dt(ce, G, at);
              (be = be || lt), A.push(ze), B.push(A);
              return;
            }
            if (Ke < G) (G -= Ke), A.push(ce);
            else {
              const [ze, lt] = Dt(ce, G, Ke);
              (be = be || lt), A.push(ze), B.push(A), (G = w), (A = []);
            }
          }),
          [B, be]
        );
      }
      var zt = (P, w) => {
          const [B, A] = (0, $e.useMemo)(() => rn(w, P), [w, P]);
          return B;
        },
        Pt = (P) => {
          let { children: w } = P;
          return w;
        };
      function Qe(P) {
        return P != null;
      }
      var Ut = (P) => {
        const {
            itemPrefixCls: w,
            component: B,
            span: A,
            className: G,
            style: be,
            labelStyle: ce,
            contentStyle: Be,
            bordered: at,
            label: Ke,
            content: ze,
            colon: lt,
            type: wt,
          } = P,
          Nt = B;
        return at
          ? $e.createElement(
              Nt,
              {
                className: Cr()(
                  {
                    [`${w}-item-label`]: wt === 'label',
                    [`${w}-item-content`]: wt === 'content',
                  },
                  G,
                ),
                style: be,
                colSpan: A,
              },
              Qe(Ke) && $e.createElement('span', { style: ce }, Ke),
              Qe(ze) && $e.createElement('span', { style: Be }, ze),
            )
          : $e.createElement(
              Nt,
              { className: Cr()(`${w}-item`, G), style: be, colSpan: A },
              $e.createElement(
                'div',
                { className: `${w}-item-container` },
                (Ke || Ke === 0) &&
                  $e.createElement(
                    'span',
                    {
                      className: Cr()(`${w}-item-label`, {
                        [`${w}-item-no-colon`]: !lt,
                      }),
                      style: ce,
                    },
                    Ke,
                  ),
                (ze || ze === 0) &&
                  $e.createElement(
                    'span',
                    { className: Cr()(`${w}-item-content`), style: Be },
                    ze,
                  ),
              ),
            );
      };
      function ut(P, w, B) {
        let { colon: A, prefixCls: G, bordered: be } = w,
          {
            component: ce,
            type: Be,
            showLabel: at,
            showContent: Ke,
            labelStyle: ze,
            contentStyle: lt,
          } = B;
        return P.map((wt, Nt) => {
          let {
            label: Jt,
            children: ot,
            prefixCls: Lt = G,
            className: ln,
            style: st,
            labelStyle: nt,
            contentStyle: qe,
            span: Ve = 1,
            key: St,
          } = wt;
          return typeof ce == 'string'
            ? $e.createElement(Ut, {
                key: `${Be}-${St || Nt}`,
                className: ln,
                style: st,
                labelStyle: Object.assign(Object.assign({}, ze), nt),
                contentStyle: Object.assign(Object.assign({}, lt), qe),
                span: Ve,
                colon: A,
                component: ce,
                itemPrefixCls: Lt,
                bordered: be,
                label: at ? Jt : null,
                content: Ke ? ot : null,
                type: Be,
              })
            : [
                $e.createElement(Ut, {
                  key: `label-${St || Nt}`,
                  className: ln,
                  style: Object.assign(
                    Object.assign(Object.assign({}, ze), st),
                    nt,
                  ),
                  span: 1,
                  colon: A,
                  component: ce[0],
                  itemPrefixCls: Lt,
                  bordered: be,
                  label: Jt,
                  type: 'label',
                }),
                $e.createElement(Ut, {
                  key: `content-${St || Nt}`,
                  className: ln,
                  style: Object.assign(
                    Object.assign(Object.assign({}, lt), st),
                    qe,
                  ),
                  span: Ve * 2 - 1,
                  component: ce[1],
                  itemPrefixCls: Lt,
                  bordered: be,
                  content: ot,
                  type: 'content',
                }),
              ];
        });
      }
      var $t = (P) => {
          const w = $e.useContext(tt),
            { prefixCls: B, vertical: A, row: G, index: be, bordered: ce } = P;
          return A
            ? $e.createElement(
                $e.Fragment,
                null,
                $e.createElement(
                  'tr',
                  { key: `label-${be}`, className: `${B}-row` },
                  ut(
                    G,
                    P,
                    Object.assign(
                      { component: 'th', type: 'label', showLabel: !0 },
                      w,
                    ),
                  ),
                ),
                $e.createElement(
                  'tr',
                  { key: `content-${be}`, className: `${B}-row` },
                  ut(
                    G,
                    P,
                    Object.assign(
                      { component: 'td', type: 'content', showContent: !0 },
                      w,
                    ),
                  ),
                ),
              )
            : $e.createElement(
                'tr',
                { key: be, className: `${B}-row` },
                ut(
                  G,
                  P,
                  Object.assign(
                    {
                      component: ce ? ['th', 'td'] : 'td',
                      type: 'item',
                      showLabel: !0,
                      showContent: !0,
                    },
                    w,
                  ),
                ),
              );
        },
        Ye = m(78456),
        We = m(96867),
        Tn = m(86029),
        dn = m(77179);
      const An = (P) => {
          const { componentCls: w, labelBg: B } = P;
          return {
            [`&${w}-bordered`]: {
              [`> ${w}-view`]: {
                overflow: 'hidden',
                border: `${(0, Ye.bf)(P.lineWidth)} ${P.lineType} ${
                  P.colorSplit
                }`,
                '> table': { tableLayout: 'auto' },
                [`${w}-row`]: {
                  borderBottom: `${(0, Ye.bf)(P.lineWidth)} ${P.lineType} ${
                    P.colorSplit
                  }`,
                  '&:last-child': { borderBottom: 'none' },
                  [`> ${w}-item-label, > ${w}-item-content`]: {
                    padding: `${(0, Ye.bf)(P.padding)} ${(0, Ye.bf)(
                      P.paddingLG,
                    )}`,
                    borderInlineEnd: `${(0, Ye.bf)(P.lineWidth)} ${
                      P.lineType
                    } ${P.colorSplit}`,
                    '&:last-child': { borderInlineEnd: 'none' },
                  },
                  [`> ${w}-item-label`]: {
                    color: P.colorTextSecondary,
                    backgroundColor: B,
                    '&::after': { display: 'none' },
                  },
                },
              },
              [`&${w}-middle`]: {
                [`${w}-row`]: {
                  [`> ${w}-item-label, > ${w}-item-content`]: {
                    padding: `${(0, Ye.bf)(P.paddingSM)} ${(0, Ye.bf)(
                      P.paddingLG,
                    )}`,
                  },
                },
              },
              [`&${w}-small`]: {
                [`${w}-row`]: {
                  [`> ${w}-item-label, > ${w}-item-content`]: {
                    padding: `${(0, Ye.bf)(P.paddingXS)} ${(0, Ye.bf)(
                      P.padding,
                    )}`,
                  },
                },
              },
            },
          };
        },
        xn = (P) => {
          const {
            componentCls: w,
            extraColor: B,
            itemPaddingBottom: A,
            itemPaddingEnd: G,
            colonMarginRight: be,
            colonMarginLeft: ce,
            titleMarginBottom: Be,
          } = P;
          return {
            [w]: Object.assign(
              Object.assign(Object.assign({}, (0, We.Wf)(P)), An(P)),
              {
                '&-rtl': { direction: 'rtl' },
                [`${w}-header`]: {
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: Be,
                },
                [`${w}-title`]: Object.assign(Object.assign({}, We.vS), {
                  flex: 'auto',
                  color: P.titleColor,
                  fontWeight: P.fontWeightStrong,
                  fontSize: P.fontSizeLG,
                  lineHeight: P.lineHeightLG,
                }),
                [`${w}-extra`]: {
                  marginInlineStart: 'auto',
                  color: B,
                  fontSize: P.fontSize,
                },
                [`${w}-view`]: {
                  width: '100%',
                  borderRadius: P.borderRadiusLG,
                  table: {
                    width: '100%',
                    tableLayout: 'fixed',
                    borderCollapse: 'collapse',
                  },
                },
                [`${w}-row`]: {
                  '> th, > td': { paddingBottom: A, paddingInlineEnd: G },
                  '> th:last-child, > td:last-child': { paddingInlineEnd: 0 },
                  '&:last-child': {
                    borderBottom: 'none',
                    '> th, > td': { paddingBottom: 0 },
                  },
                },
                [`${w}-item-label`]: {
                  color: P.colorTextTertiary,
                  fontWeight: 'normal',
                  fontSize: P.fontSize,
                  lineHeight: P.lineHeight,
                  textAlign: 'start',
                  '&::after': {
                    content: '":"',
                    position: 'relative',
                    top: -0.5,
                    marginInline: `${(0, Ye.bf)(ce)} ${(0, Ye.bf)(be)}`,
                  },
                  [`&${w}-item-no-colon::after`]: { content: '""' },
                },
                [`${w}-item-no-label`]: {
                  '&::after': { margin: 0, content: '""' },
                },
                [`${w}-item-content`]: {
                  display: 'table-cell',
                  flex: 1,
                  color: P.contentColor,
                  fontSize: P.fontSize,
                  lineHeight: P.lineHeight,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                },
                [`${w}-item`]: {
                  paddingBottom: 0,
                  verticalAlign: 'top',
                  '&-container': {
                    display: 'flex',
                    [`${w}-item-label`]: {
                      display: 'inline-flex',
                      alignItems: 'baseline',
                    },
                    [`${w}-item-content`]: {
                      display: 'inline-flex',
                      alignItems: 'baseline',
                      minWidth: 0,
                    },
                  },
                },
                '&-middle': {
                  [`${w}-row`]: {
                    '> th, > td': { paddingBottom: P.paddingSM },
                  },
                },
                '&-small': {
                  [`${w}-row`]: {
                    '> th, > td': { paddingBottom: P.paddingXS },
                  },
                },
              },
            ),
          };
        },
        At = (P) => ({
          labelBg: P.colorFillAlter,
          titleColor: P.colorText,
          titleMarginBottom: P.fontSizeSM * P.lineHeightSM,
          itemPaddingBottom: P.padding,
          itemPaddingEnd: P.padding,
          colonMarginRight: P.marginXS,
          colonMarginLeft: P.marginXXS / 2,
          contentColor: P.colorText,
          extraColor: P.colorText,
        });
      var hn = (0, Tn.I$)(
          'Descriptions',
          (P) => {
            const w = (0, dn.IX)(P, {});
            return xn(w);
          },
          At,
        ),
        Cn = function (P, w) {
          var B = {};
          for (var A in P)
            Object.prototype.hasOwnProperty.call(P, A) &&
              w.indexOf(A) < 0 &&
              (B[A] = P[A]);
          if (P != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var G = 0, A = Object.getOwnPropertySymbols(P);
              G < A.length;
              G++
            )
              w.indexOf(A[G]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(P, A[G]) &&
                (B[A[G]] = P[A[G]]);
          return B;
        };
      const nr = (P) => {
        const {
            prefixCls: w,
            title: B,
            extra: A,
            column: G,
            colon: be = !0,
            bordered: ce,
            layout: Be,
            children: at,
            className: Ke,
            rootClassName: ze,
            style: lt,
            size: wt,
            labelStyle: Nt,
            contentStyle: Jt,
            items: ot,
          } = P,
          Lt = Cn(P, [
            'prefixCls',
            'title',
            'extra',
            'column',
            'colon',
            'bordered',
            'layout',
            'children',
            'className',
            'rootClassName',
            'style',
            'size',
            'labelStyle',
            'contentStyle',
            'items',
          ]),
          {
            getPrefixCls: ln,
            direction: st,
            descriptions: nt,
          } = $e.useContext(Lr.E_),
          qe = ln('descriptions', w),
          Ve = (0, ke.Z)(),
          St = $e.useMemo(() => {
            var yt;
            return typeof G == 'number'
              ? G
              : (yt = (0, Br.m9)(
                  Ve,
                  Object.assign(Object.assign({}, k), G),
                )) !== null && yt !== void 0
              ? yt
              : 3;
          }, [Ve, G]),
          an = kt(Ve, ot, at),
          vt = (0, Dr.Z)(wt),
          pt = zt(St, an),
          [gt, Ft, Yn] = hn(qe),
          Hn = $e.useMemo(
            () => ({ labelStyle: Nt, contentStyle: Jt }),
            [Nt, Jt],
          );
        return gt(
          $e.createElement(
            tt.Provider,
            { value: Hn },
            $e.createElement(
              'div',
              Object.assign(
                {
                  className: Cr()(
                    qe,
                    nt == null ? void 0 : nt.className,
                    {
                      [`${qe}-${vt}`]: vt && vt !== 'default',
                      [`${qe}-bordered`]: !!ce,
                      [`${qe}-rtl`]: st === 'rtl',
                    },
                    Ke,
                    ze,
                    Ft,
                    Yn,
                  ),
                  style: Object.assign(
                    Object.assign({}, nt == null ? void 0 : nt.style),
                    lt,
                  ),
                },
                Lt,
              ),
              (B || A) &&
                $e.createElement(
                  'div',
                  { className: `${qe}-header` },
                  B && $e.createElement('div', { className: `${qe}-title` }, B),
                  A && $e.createElement('div', { className: `${qe}-extra` }, A),
                ),
              $e.createElement(
                'div',
                { className: `${qe}-view` },
                $e.createElement(
                  'table',
                  null,
                  $e.createElement(
                    'tbody',
                    null,
                    pt.map((yt, jt) =>
                      $e.createElement($t, {
                        key: jt,
                        index: jt,
                        colon: be,
                        prefixCls: qe,
                        vertical: Be === 'vertical',
                        bordered: ce,
                        row: yt,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      };
      nr.Item = Pt;
      var Zr = nr,
        rr = m(57285),
        Jr = m(82063),
        wr = function (w, B) {
          var A = B || {},
            G = A.onRequestError,
            be = A.effects,
            ce = A.manual,
            Be = A.dataSource,
            at = A.defaultDataSource,
            Ke = A.onDataSourceChange,
            ze = (0, Mr.Z)(at, { value: Be, onChange: Ke }),
            lt = (0, yr.Z)(ze, 2),
            wt = lt[0],
            Nt = lt[1],
            Jt = (0, Mr.Z)(B == null ? void 0 : B.loading, {
              value: B == null ? void 0 : B.loading,
              onChange: B == null ? void 0 : B.onLoadingChange,
            }),
            ot = (0, yr.Z)(Jt, 2),
            Lt = ot[0],
            ln = ot[1],
            st = function (Ve) {
              Nt(Ve), ln(!1);
            },
            nt = (function () {
              var qe = (0, it.Z)(
                (0, oe.Z)().mark(function Ve() {
                  var St, an, vt;
                  return (0, oe.Z)().wrap(
                    function (gt) {
                      for (;;)
                        switch ((gt.prev = gt.next)) {
                          case 0:
                            if (!Lt) {
                              gt.next = 2;
                              break;
                            }
                            return gt.abrupt('return');
                          case 2:
                            return ln(!0), (gt.prev = 3), (gt.next = 6), w();
                          case 6:
                            if (((gt.t0 = gt.sent), gt.t0)) {
                              gt.next = 9;
                              break;
                            }
                            gt.t0 = {};
                          case 9:
                            (St = gt.t0),
                              (an = St.data),
                              (vt = St.success),
                              vt !== !1 && st(an),
                              (gt.next = 23);
                            break;
                          case 15:
                            if (
                              ((gt.prev = 15),
                              (gt.t1 = gt.catch(3)),
                              G !== void 0)
                            ) {
                              gt.next = 21;
                              break;
                            }
                            throw new Error(gt.t1);
                          case 21:
                            G(gt.t1);
                          case 22:
                            ln(!1);
                          case 23:
                            return (gt.prev = 23), ln(!1), gt.finish(23);
                          case 26:
                          case 'end':
                            return gt.stop();
                        }
                    },
                    Ve,
                    null,
                    [[3, 15, 23, 26]],
                  );
                }),
              );
              return function () {
                return qe.apply(this, arguments);
              };
            })();
          return (
            (0, $e.useEffect)(function () {
              ce || nt();
            }, [].concat((0, Ee.Z)(be || []), [ce])),
            {
              dataSource: wt,
              setDataSource: Nt,
              loading: Lt,
              reload: function () {
                return nt();
              },
            }
          );
        },
        f = wr,
        I = m(93112),
        U = [
          'valueEnum',
          'render',
          'renderText',
          'mode',
          'plain',
          'dataIndex',
          'request',
          'params',
          'editable',
        ],
        te = [
          'request',
          'columns',
          'params',
          'dataSource',
          'onDataSourceChange',
          'formProps',
          'editable',
          'loading',
          'onLoadingChange',
          'actionRef',
          'onRequestError',
          'emptyText',
          'contentStyle',
        ],
        De = function (w, B) {
          var A = w.dataIndex;
          if (A) {
            var G = Array.isArray(A) ? (0, Jr.Z)(B, A) : B[A];
            if (G !== void 0 || G !== null) return G;
          }
          return w.children;
        },
        et = function (w) {
          var B,
            A = w.valueEnum,
            G = w.action,
            be = w.index,
            ce = w.text,
            Be = w.entity,
            at = w.mode,
            Ke = w.render,
            ze = w.editableUtils,
            lt = w.valueType,
            wt = w.plain,
            Nt = w.dataIndex,
            Jt = w.request,
            ot = w.renderFormItem,
            Lt = w.params,
            ln = w.emptyText,
            st = Ct.ZP.useFormInstance(),
            nt =
              (B = I.Ow.useToken) === null || B === void 0
                ? void 0
                : B.call(I.Ow),
            qe = nt.token,
            Ve = {
              text: ce,
              valueEnum: A,
              mode: at || 'read',
              proFieldProps: {
                emptyText: ln,
                render: Ke
                  ? function (vt) {
                      return Ke == null
                        ? void 0
                        : Ke(
                            vt,
                            Be,
                            be,
                            G,
                            (0, S.Z)(
                              (0, S.Z)({}, w),
                              {},
                              { type: 'descriptions' },
                            ),
                          );
                    }
                  : void 0,
              },
              ignoreFormItem: !0,
              valueType: lt,
              request: Jt,
              params: Lt,
              plain: wt,
            };
          if (at === 'read' || !at || lt === 'option') {
            var St = (0, gr.w)(
              w.fieldProps,
              void 0,
              (0, S.Z)((0, S.Z)({}, w), {}, { rowKey: Nt, isEditable: !1 }),
            );
            return (0, J.jsx)(
              Bt.Z,
              (0, S.Z)((0, S.Z)({ name: Nt }, Ve), {}, { fieldProps: St }),
            );
          }
          var an = function () {
            var pt,
              gt = (0, gr.w)(
                w.formItemProps,
                st,
                (0, S.Z)((0, S.Z)({}, w), {}, { rowKey: Nt, isEditable: !0 }),
              ),
              Ft = (0, gr.w)(
                w.fieldProps,
                st,
                (0, S.Z)((0, S.Z)({}, w), {}, { rowKey: Nt, isEditable: !0 }),
              );
            return (0, J.jsxs)('div', {
              style: {
                display: 'flex',
                gap: qe.marginXS,
                alignItems: 'baseline',
              },
              children: [
                (0, J.jsx)(
                  Sr.U,
                  (0, S.Z)(
                    (0, S.Z)({ name: Nt }, gt),
                    {},
                    {
                      style: (0, S.Z)(
                        { margin: 0 },
                        (gt == null ? void 0 : gt.style) || {},
                      ),
                      initialValue:
                        ce || (gt == null ? void 0 : gt.initialValue),
                      children: (0, J.jsx)(
                        Bt.Z,
                        (0, S.Z)(
                          (0, S.Z)({}, Ve),
                          {},
                          {
                            proFieldProps: (0, S.Z)({}, Ve.proFieldProps),
                            renderFormItem: ot
                              ? function () {
                                  return ot == null
                                    ? void 0
                                    : ot(
                                        (0, S.Z)(
                                          (0, S.Z)({}, w),
                                          {},
                                          { type: 'descriptions' },
                                        ),
                                        {
                                          isEditable: !0,
                                          recordKey: Nt,
                                          record: st.getFieldValue(
                                            [Nt].flat(1),
                                          ),
                                          defaultRender: function () {
                                            return (0, J.jsx)(
                                              Bt.Z,
                                              (0, S.Z)(
                                                (0, S.Z)({}, Ve),
                                                {},
                                                { fieldProps: Ft },
                                              ),
                                            );
                                          },
                                          type: 'descriptions',
                                        },
                                        st,
                                      );
                                }
                              : void 0,
                            fieldProps: Ft,
                          },
                        ),
                      ),
                    },
                  ),
                ),
                (0, J.jsx)('div', {
                  style: {
                    display: 'flex',
                    maxHeight: qe.controlHeight,
                    alignItems: 'center',
                    gap: qe.marginXS,
                  },
                  children:
                    ze == null ||
                    (pt = ze.actionRender) === null ||
                    pt === void 0
                      ? void 0
                      : pt.call(ze, Nt || be, {
                          cancelText: (0, J.jsx)(He.Z, {}),
                          saveText: (0, J.jsx)(u.Z, {}),
                          deleteText: !1,
                        }),
                }),
              ],
            });
          };
          return (0, J.jsx)('div', {
            style: {
              marginTop: -5,
              marginBottom: -5,
              marginLeft: 0,
              marginRight: 0,
            },
            children: an(),
          });
        },
        Te = function (w, B, A, G, be) {
          var ce,
            Be = [],
            at = (0, hr.n)(Fn.Z, '5.8.0') >= 0,
            Ke =
              w == null || (ce = w.map) === null || ce === void 0
                ? void 0
                : ce
                    .call(w, function (ze, lt) {
                      var wt, Nt, Jt;
                      if ($e.isValidElement(ze))
                        return at ? { children: ze } : ze;
                      var ot = ze,
                        Lt = ot.valueEnum,
                        ln = ot.render,
                        st = ot.renderText,
                        nt = ot.mode,
                        qe = ot.plain,
                        Ve = ot.dataIndex,
                        St = ot.request,
                        an = ot.params,
                        vt = ot.editable,
                        pt = (0, de.Z)(ot, U),
                        gt =
                          (wt = De(ze, B)) !== null && wt !== void 0
                            ? wt
                            : pt.children,
                        Ft = st ? st(gt, B, lt, A) : gt,
                        Yn =
                          typeof pt.title == 'function'
                            ? pt.title(ze, 'descriptions', null)
                            : pt.title,
                        Hn =
                          typeof pt.valueType == 'function'
                            ? pt.valueType(B || {}, 'descriptions')
                            : pt.valueType,
                        yt = G == null ? void 0 : G.isEditable(Ve || lt),
                        jt = nt || yt ? 'edit' : 'read',
                        Un =
                          G &&
                          jt === 'read' &&
                          vt !== !1 &&
                          (vt == null ? void 0 : vt(Ft, B, lt)) !== !1,
                        Zn = Un ? ve.Z : $e.Fragment,
                        Wn = jt === 'edit' ? Ft : (0, tr.X)(Ft, ze, Ft),
                        vr =
                          at && Hn !== 'option'
                            ? (0, S.Z)(
                                (0, S.Z)({}, pt),
                                {},
                                {
                                  key:
                                    pt.key ||
                                    ((Nt = pt.label) === null || Nt === void 0
                                      ? void 0
                                      : Nt.toString()) ||
                                    lt,
                                  label:
                                    (Yn || pt.label || pt.tooltip) &&
                                    (0, J.jsx)(xr.G, {
                                      label: Yn || pt.label,
                                      tooltip: pt.tooltip,
                                      ellipsis: ze.ellipsis,
                                    }),
                                  children: (0, J.jsxs)(Zn, {
                                    children: [
                                      (0, $e.createElement)(
                                        et,
                                        (0, S.Z)(
                                          (0, S.Z)({}, ze),
                                          {},
                                          {
                                            key: ze == null ? void 0 : ze.key,
                                            dataIndex: ze.dataIndex || lt,
                                            mode: jt,
                                            text: Wn,
                                            valueType: Hn,
                                            entity: B,
                                            index: lt,
                                            emptyText: be,
                                            action: A,
                                            editableUtils: G,
                                          },
                                        ),
                                      ),
                                      Un &&
                                        (0, J.jsx)(Ie.Z, {
                                          onClick: function () {
                                            G == null ||
                                              G.startEditable(Ve || lt);
                                          },
                                        }),
                                    ],
                                  }),
                                },
                              )
                            : (0, $e.createElement)(
                                Zr.Item,
                                (0, S.Z)(
                                  (0, S.Z)({}, pt),
                                  {},
                                  {
                                    key:
                                      pt.key ||
                                      ((Jt = pt.label) === null || Jt === void 0
                                        ? void 0
                                        : Jt.toString()) ||
                                      lt,
                                    label:
                                      (Yn || pt.label || pt.tooltip) &&
                                      (0, J.jsx)(xr.G, {
                                        label: Yn || pt.label,
                                        tooltip: pt.tooltip,
                                        ellipsis: ze.ellipsis,
                                      }),
                                  },
                                ),
                                (0, J.jsxs)(Zn, {
                                  children: [
                                    (0, J.jsx)(
                                      et,
                                      (0, S.Z)(
                                        (0, S.Z)({}, ze),
                                        {},
                                        {
                                          dataIndex: ze.dataIndex || lt,
                                          mode: jt,
                                          text: Wn,
                                          valueType: Hn,
                                          entity: B,
                                          index: lt,
                                          action: A,
                                          editableUtils: G,
                                        },
                                      ),
                                    ),
                                    Un &&
                                      Hn !== 'option' &&
                                      (0, J.jsx)(Ie.Z, {
                                        onClick: function () {
                                          G == null ||
                                            G.startEditable(Ve || lt);
                                        },
                                      }),
                                  ],
                                }),
                              );
                      return Hn === 'option' ? (Be.push(vr), null) : vr;
                    })
                    .filter(function (ze) {
                      return ze;
                    });
          return { options: Be != null && Be.length ? Be : null, children: Ke };
        },
        me = function (w) {
          return (0, J.jsx)(
            Zr.Item,
            (0, S.Z)((0, S.Z)({}, w), {}, { children: w.children }),
          );
        };
      me.displayName = 'ProDescriptionsItem';
      var he = function (w) {
          return w.children;
        },
        re = function (w) {
          var B,
            A = w.request,
            G = w.columns,
            be = w.params,
            ce = w.dataSource,
            Be = w.onDataSourceChange,
            at = w.formProps,
            Ke = w.editable,
            ze = w.loading,
            lt = w.onLoadingChange,
            wt = w.actionRef,
            Nt = w.onRequestError,
            Jt = w.emptyText,
            ot = w.contentStyle,
            Lt = (0, de.Z)(w, te),
            ln = (0, $e.useContext)(rr.ZP.ConfigContext),
            st = f(
              (0, it.Z)(
                (0, oe.Z)().mark(function Yn() {
                  var Hn;
                  return (0, oe.Z)().wrap(function (jt) {
                    for (;;)
                      switch ((jt.prev = jt.next)) {
                        case 0:
                          if (!A) {
                            jt.next = 6;
                            break;
                          }
                          return (jt.next = 3), A(be || {});
                        case 3:
                          (jt.t0 = jt.sent), (jt.next = 7);
                          break;
                        case 6:
                          jt.t0 = { data: {} };
                        case 7:
                          return (Hn = jt.t0), jt.abrupt('return', Hn);
                        case 9:
                        case 'end':
                          return jt.stop();
                      }
                  }, Yn);
                }),
              ),
              {
                onRequestError: Nt,
                effects: [(0, $n.ZP)(be)],
                manual: !A,
                dataSource: ce,
                loading: ze,
                onLoadingChange: lt,
                onDataSourceChange: Be,
              },
            ),
            nt = ta(
              (0, S.Z)(
                (0, S.Z)({}, w.editable),
                {},
                {
                  childrenColumnName: void 0,
                  dataSource: st.dataSource,
                  setDataSource: st.setDataSource,
                },
              ),
            );
          if (
            ((0, $e.useEffect)(
              function () {
                wt && (wt.current = (0, S.Z)({ reload: st.reload }, nt));
              },
              [st, wt, nt],
            ),
            st.loading || (st.loading === void 0 && A))
          )
            return (0, J.jsx)(fr, {
              type: 'descriptions',
              list: !1,
              pageHeader: !1,
            });
          var qe = function () {
              var Hn = (0, Je.Z)(w.children)
                .filter(Boolean)
                .map(function (yt) {
                  if (!$e.isValidElement(yt)) return yt;
                  var jt = yt == null ? void 0 : yt.props,
                    Un = jt.valueEnum,
                    Zn = jt.valueType,
                    Wn = jt.dataIndex,
                    vr = jt.ellipsis,
                    $r = jt.copyable,
                    ua = jt.request;
                  return !Zn &&
                    !Un &&
                    !Wn &&
                    !ua &&
                    !vr &&
                    !$r &&
                    yt.type.displayName !== 'ProDescriptionsItem'
                    ? yt
                    : (0, S.Z)(
                        (0, S.Z)({}, yt == null ? void 0 : yt.props),
                        {},
                        { entity: ce },
                      );
                });
              return []
                .concat((0, Ee.Z)(G || []), (0, Ee.Z)(Hn))
                .filter(function (yt) {
                  return !yt ||
                    (yt != null &&
                      yt.valueType &&
                      ['index', 'indexBorder'].includes(
                        yt == null ? void 0 : yt.valueType,
                      ))
                    ? !1
                    : !(yt != null && yt.hideInDescriptions);
                })
                .sort(function (yt, jt) {
                  return jt.order || yt.order
                    ? (jt.order || 0) - (yt.order || 0)
                    : (jt.index || 0) - (yt.index || 0);
                });
            },
            Ve = Te(
              qe(),
              st.dataSource || {},
              (wt == null ? void 0 : wt.current) || st,
              Ke ? nt : void 0,
              w.emptyText,
            ),
            St = Ve.options,
            an = Ve.children,
            vt = Ke ? Ct.ZP : he,
            pt = null;
          (Lt.title || Lt.tooltip || Lt.tip) &&
            (pt = (0, J.jsx)(xr.G, {
              label: Lt.title,
              tooltip: Lt.tooltip || Lt.tip,
            }));
          var gt = ln.getPrefixCls('pro-descriptions'),
            Ft = (0, hr.n)(Fn.Z, '5.8.0') >= 0;
          return (0, J.jsx)(Pr.S, {
            children: (0, J.jsx)(
              vt,
              (0, S.Z)(
                (0, S.Z)(
                  {
                    form:
                      (B = w.editable) === null || B === void 0
                        ? void 0
                        : B.form,
                    component: !1,
                    submitter: !1,
                  },
                  at,
                ),
                {},
                {
                  onFinish: void 0,
                  children: (0, J.jsx)(
                    Zr,
                    (0, S.Z)(
                      (0, S.Z)({ className: gt }, Lt),
                      {},
                      {
                        contentStyle: (0, S.Z)({ minWidth: 0 }, ot || {}),
                        extra: Lt.extra
                          ? (0, J.jsxs)(ve.Z, { children: [St, Lt.extra] })
                          : St,
                        title: pt,
                        items: Ft ? an : void 0,
                        children: Ft ? null : an,
                      },
                    ),
                  ),
                },
              ),
              'form',
            ),
          });
        };
      re.Item = me;
      var Se = null;
    },
    64576: function (ur, pn, m) {
      var Ee = m(83525),
        oe = m(41670),
        it = m(82702),
        de = m(11451),
        S = m(1177),
        He = m(97616),
        u = ['fieldProps', 'proFieldProps'],
        Ie = 'dateTime',
        Ct = it.forwardRef(function (Bt, $e) {
          var Ge = Bt.fieldProps,
            Et = Bt.proFieldProps,
            ke = (0, oe.Z)(Bt, u),
            fe = (0, it.useContext)(de.Z);
          return (0,
          He.jsx)(S.Z, (0, Ee.Z)({ ref: $e, fieldProps: (0, Ee.Z)({ getPopupContainer: fe.getPopupContainer }, Ge), valueType: Ie, proFieldProps: Et, filedConfig: { valueType: Ie, customLightMode: !0 } }, ke));
        });
      pn.Z = Ct;
    },
    81898: function (ur, pn, m) {
      var Ee = m(83525),
        oe = m(41670),
        it = m(3138),
        de = m(70063),
        S = m(82702),
        He = m(81705),
        u = m(1177),
        Ie = m(97616),
        Ct = [
          'fieldProps',
          'options',
          'radioType',
          'layout',
          'proFieldProps',
          'valueEnum',
        ],
        Bt = S.forwardRef(function (ke, fe) {
          var ve = ke.fieldProps,
            J = ke.options,
            l = ke.radioType,
            Gt = ke.layout,
            Rn = ke.proFieldProps,
            zn = ke.valueEnum,
            x = (0, oe.Z)(ke, Ct);
          return (0,
          Ie.jsx)(u.Z, (0, Ee.Z)((0, Ee.Z)({ valueType: l === 'button' ? 'radioButton' : 'radio', ref: fe, valueEnum: (0, it.h)(zn, void 0) }, x), {}, { fieldProps: (0, Ee.Z)({ options: J, layout: Gt }, ve), proFieldProps: Rn, filedConfig: { customLightMode: !0 } }));
        }),
        $e = S.forwardRef(function (ke, fe) {
          var ve = ke.fieldProps,
            J = ke.children;
          return (0,
          Ie.jsx)(de.ZP, (0, Ee.Z)((0, Ee.Z)({}, ve), {}, { ref: fe, children: J }));
        }),
        Ge = (0, He.G)($e, { valuePropName: 'checked', ignoreWidth: !0 }),
        Et = Ge;
      (Et.Group = Bt),
        (Et.Button = de.ZP.Button),
        (Et.displayName = 'ProFormComponent'),
        (pn.Z = Et);
    },
    70372: function (ur, pn, m) {
      var Ee = m(83525),
        oe = m(41670),
        it = m(3138),
        de = m(82702),
        S = m(11451),
        He = m(1177),
        u = m(97616),
        Ie = [
          'fieldProps',
          'children',
          'params',
          'proFieldProps',
          'mode',
          'valueEnum',
          'request',
          'showSearch',
          'options',
        ],
        Ct = [
          'fieldProps',
          'children',
          'params',
          'proFieldProps',
          'mode',
          'valueEnum',
          'request',
          'options',
        ],
        Bt = function (ve, J) {
          var l = ve.fieldProps,
            Gt = ve.children,
            Rn = ve.params,
            zn = ve.proFieldProps,
            x = ve.mode,
            ht = ve.valueEnum,
            cn = ve.request,
            fn = ve.showSearch,
            Vt = ve.options,
            Me = (0, oe.Z)(ve, Ie),
            en = (0, de.useContext)(S.Z);
          return (0, u.jsx)(
            He.Z,
            (0, Ee.Z)(
              (0, Ee.Z)(
                {
                  valueEnum: (0, it.h)(ht),
                  request: cn,
                  params: Rn,
                  valueType: 'select',
                  filedConfig: { customLightMode: !0 },
                  fieldProps: (0, Ee.Z)(
                    {
                      options: Vt,
                      mode: x,
                      showSearch: fn,
                      getPopupContainer: en.getPopupContainer,
                    },
                    l,
                  ),
                  ref: J,
                  proFieldProps: zn,
                },
                Me,
              ),
              {},
              { children: Gt },
            ),
          );
        },
        $e = de.forwardRef(function (fe, ve) {
          var J = fe.fieldProps,
            l = fe.children,
            Gt = fe.params,
            Rn = fe.proFieldProps,
            zn = fe.mode,
            x = fe.valueEnum,
            ht = fe.request,
            cn = fe.options,
            fn = (0, oe.Z)(fe, Ct),
            Vt = (0, Ee.Z)(
              {
                options: cn,
                mode: zn || 'multiple',
                labelInValue: !0,
                showSearch: !0,
                suffixIcon: null,
                autoClearSearchValue: !0,
                optionLabelProp: 'label',
              },
              J,
            ),
            Me = (0, de.useContext)(S.Z);
          return (0,
          u.jsx)(He.Z, (0, Ee.Z)((0, Ee.Z)({ valueEnum: (0, it.h)(x), request: ht, params: Gt, valueType: 'select', filedConfig: { customLightMode: !0 }, fieldProps: (0, Ee.Z)({ getPopupContainer: Me.getPopupContainer }, Vt), ref: ve, proFieldProps: Rn }, fn), {}, { children: l }));
        }),
        Ge = de.forwardRef(Bt),
        Et = $e,
        ke = Ge;
      (ke.SearchSelect = Et),
        (ke.displayName = 'ProFormComponent'),
        (pn.Z = ke);
    },
    97024: function (ur, pn, m) {
      var Ee = m(83525),
        oe = m(41670),
        it = m(82702),
        de = m(1177),
        S = m(97616),
        He = ['fieldProps', 'proFieldProps'],
        u = function (Ct, Bt) {
          var $e = Ct.fieldProps,
            Ge = Ct.proFieldProps,
            Et = (0, oe.Z)(Ct, He);
          return (0, S.jsx)(
            de.Z,
            (0, Ee.Z)(
              {
                ref: Bt,
                valueType: 'textarea',
                fieldProps: $e,
                proFieldProps: Ge,
              },
              Et,
            ),
          );
        };
      pn.Z = it.forwardRef(u);
    },
    10244: function (ur, pn, m) {
      var Ee = m(18563);
      pn.ZP = Ee.A;
    },
    94883: function (ur, pn, m) {
      m.d(pn, {
        U9: function () {
          return rr;
        },
        L0: function () {
          return wr;
        },
        bg: function () {
          return nr;
        },
      });
      var Ee = m(73990),
        oe = m(83525),
        it = m(62812),
        de = m(47768),
        S = m(80104),
        He = m(72561),
        u = m(41670),
        Ie = m(91496),
        Ct = m(69631),
        Bt = m(28847),
        $e = m(47174),
        Ge = m(56511),
        Et = m(33404),
        ke = m(57285),
        fe = m(68200),
        ve = m(82702),
        J = m(18140),
        l = m(22466),
        Gt = m(91150),
        Rn = m.n(Gt),
        zn = m(8429),
        x = m(94478),
        ht = [
          'className',
          'prefixCls',
          'style',
          'active',
          'status',
          'iconPrefix',
          'icon',
          'wrapperStyle',
          'stepNumber',
          'disabled',
          'description',
          'title',
          'subTitle',
          'progressDot',
          'stepIcon',
          'tailContent',
          'icons',
          'stepIndex',
          'onStepClick',
          'onClick',
          'render',
        ];
      function cn(f) {
        return typeof f == 'string';
      }
      function fn(f) {
        var I,
          U = f.className,
          te = f.prefixCls,
          De = f.style,
          et = f.active,
          Te = f.status,
          me = f.iconPrefix,
          he = f.icon,
          re = f.wrapperStyle,
          Se = f.stepNumber,
          P = f.disabled,
          w = f.description,
          B = f.title,
          A = f.subTitle,
          G = f.progressDot,
          be = f.stepIcon,
          ce = f.tailContent,
          Be = f.icons,
          at = f.stepIndex,
          Ke = f.onStepClick,
          ze = f.onClick,
          lt = f.render,
          wt = (0, u.Z)(f, ht),
          Nt = !!Ke && !P,
          Jt = {};
        Nt &&
          ((Jt.role = 'button'),
          (Jt.tabIndex = 0),
          (Jt.onClick = function (qe) {
            ze == null || ze(qe), Ke(at);
          }),
          (Jt.onKeyDown = function (qe) {
            var Ve = qe.which;
            (Ve === x.Z.ENTER || Ve === x.Z.SPACE) && Ke(at);
          }));
        var ot = function () {
            var Ve,
              St,
              an = Rn()(
                ''.concat(te, '-icon'),
                ''.concat(me, 'icon'),
                ((Ve = {}),
                (0, Ee.Z)(Ve, ''.concat(me, 'icon-').concat(he), he && cn(he)),
                (0, Ee.Z)(
                  Ve,
                  ''.concat(me, 'icon-check'),
                  !he && Te === 'finish' && ((Be && !Be.finish) || !Be),
                ),
                (0, Ee.Z)(
                  Ve,
                  ''.concat(me, 'icon-cross'),
                  !he && Te === 'error' && ((Be && !Be.error) || !Be),
                ),
                Ve),
              ),
              vt = ve.createElement('span', {
                className: ''.concat(te, '-icon-dot'),
              });
            return (
              G
                ? typeof G == 'function'
                  ? (St = ve.createElement(
                      'span',
                      { className: ''.concat(te, '-icon') },
                      G(vt, {
                        index: Se - 1,
                        status: Te,
                        title: B,
                        description: w,
                      }),
                    ))
                  : (St = ve.createElement(
                      'span',
                      { className: ''.concat(te, '-icon') },
                      vt,
                    ))
                : he && !cn(he)
                ? (St = ve.createElement(
                    'span',
                    { className: ''.concat(te, '-icon') },
                    he,
                  ))
                : Be && Be.finish && Te === 'finish'
                ? (St = ve.createElement(
                    'span',
                    { className: ''.concat(te, '-icon') },
                    Be.finish,
                  ))
                : Be && Be.error && Te === 'error'
                ? (St = ve.createElement(
                    'span',
                    { className: ''.concat(te, '-icon') },
                    Be.error,
                  ))
                : he || Te === 'finish' || Te === 'error'
                ? (St = ve.createElement('span', { className: an }))
                : (St = ve.createElement(
                    'span',
                    { className: ''.concat(te, '-icon') },
                    Se,
                  )),
              be &&
                (St = be({
                  index: Se - 1,
                  status: Te,
                  title: B,
                  description: w,
                  node: St,
                })),
              St
            );
          },
          Lt = Te || 'wait',
          ln = Rn()(
            ''.concat(te, '-item'),
            ''.concat(te, '-item-').concat(Lt),
            U,
            ((I = {}),
            (0, Ee.Z)(I, ''.concat(te, '-item-custom'), he),
            (0, Ee.Z)(I, ''.concat(te, '-item-active'), et),
            (0, Ee.Z)(I, ''.concat(te, '-item-disabled'), P === !0),
            I),
          ),
          st = (0, oe.Z)({}, De),
          nt = ve.createElement(
            'div',
            (0, zn.Z)({}, wt, { className: ln, style: st }),
            ve.createElement(
              'div',
              (0, zn.Z)({ onClick: ze }, Jt, {
                className: ''.concat(te, '-item-container'),
              }),
              ve.createElement(
                'div',
                { className: ''.concat(te, '-item-tail') },
                ce,
              ),
              ve.createElement(
                'div',
                { className: ''.concat(te, '-item-icon') },
                ot(),
              ),
              ve.createElement(
                'div',
                { className: ''.concat(te, '-item-content') },
                ve.createElement(
                  'div',
                  { className: ''.concat(te, '-item-title') },
                  B,
                  A &&
                    ve.createElement(
                      'div',
                      {
                        title: typeof A == 'string' ? A : void 0,
                        className: ''.concat(te, '-item-subtitle'),
                      },
                      A,
                    ),
                ),
                w &&
                  ve.createElement(
                    'div',
                    { className: ''.concat(te, '-item-description') },
                    w,
                  ),
              ),
            ),
          );
        return lt && (nt = lt(nt) || null), nt;
      }
      var Vt = fn,
        Me = [
          'prefixCls',
          'style',
          'className',
          'children',
          'direction',
          'type',
          'labelPlacement',
          'iconPrefix',
          'status',
          'size',
          'current',
          'progressDot',
          'stepIcon',
          'initial',
          'icons',
          'onChange',
          'itemRender',
          'items',
        ];
      function en(f) {
        var I,
          U = f.prefixCls,
          te = U === void 0 ? 'rc-steps' : U,
          De = f.style,
          et = De === void 0 ? {} : De,
          Te = f.className,
          me = f.children,
          he = f.direction,
          re = he === void 0 ? 'horizontal' : he,
          Se = f.type,
          P = Se === void 0 ? 'default' : Se,
          w = f.labelPlacement,
          B = w === void 0 ? 'horizontal' : w,
          A = f.iconPrefix,
          G = A === void 0 ? 'rc' : A,
          be = f.status,
          ce = be === void 0 ? 'process' : be,
          Be = f.size,
          at = f.current,
          Ke = at === void 0 ? 0 : at,
          ze = f.progressDot,
          lt = ze === void 0 ? !1 : ze,
          wt = f.stepIcon,
          Nt = f.initial,
          Jt = Nt === void 0 ? 0 : Nt,
          ot = f.icons,
          Lt = f.onChange,
          ln = f.itemRender,
          st = f.items,
          nt = st === void 0 ? [] : st,
          qe = (0, u.Z)(f, Me),
          Ve = P === 'navigation',
          St = P === 'inline',
          an = St || lt,
          vt = St ? 'horizontal' : re,
          pt = St ? void 0 : Be,
          gt = an ? 'vertical' : B,
          Ft = Rn()(
            te,
            ''.concat(te, '-').concat(vt),
            Te,
            ((I = {}),
            (0, Ee.Z)(I, ''.concat(te, '-').concat(pt), pt),
            (0, Ee.Z)(
              I,
              ''.concat(te, '-label-').concat(gt),
              vt === 'horizontal',
            ),
            (0, Ee.Z)(I, ''.concat(te, '-dot'), !!an),
            (0, Ee.Z)(I, ''.concat(te, '-navigation'), Ve),
            (0, Ee.Z)(I, ''.concat(te, '-inline'), St),
            I),
          ),
          Yn = function (jt) {
            Lt && Ke !== jt && Lt(jt);
          },
          Hn = function (jt, Un) {
            var Zn = (0, oe.Z)({}, jt),
              Wn = Jt + Un;
            return (
              ce === 'error' &&
                Un === Ke - 1 &&
                (Zn.className = ''.concat(te, '-next-error')),
              Zn.status ||
                (Wn === Ke
                  ? (Zn.status = ce)
                  : Wn < Ke
                  ? (Zn.status = 'finish')
                  : (Zn.status = 'wait')),
              St && ((Zn.icon = void 0), (Zn.subTitle = void 0)),
              !Zn.render &&
                ln &&
                (Zn.render = function (vr) {
                  return ln(Zn, vr);
                }),
              ve.createElement(
                Vt,
                (0, zn.Z)({}, Zn, {
                  active: Wn === Ke,
                  stepNumber: Wn + 1,
                  stepIndex: Wn,
                  key: Wn,
                  prefixCls: te,
                  iconPrefix: G,
                  wrapperStyle: et,
                  progressDot: an,
                  stepIcon: wt,
                  icons: ot,
                  onStepClick: Lt && Yn,
                }),
              )
            );
          };
        return ve.createElement(
          'div',
          (0, zn.Z)({ className: Ft, style: et }, qe),
          nt
            .filter(function (yt) {
              return yt;
            })
            .map(Hn),
        );
      }
      en.Step = Vt;
      var qn = en,
        Nn = qn,
        Kn = m(64775),
        On = m(34256),
        sr = m(30086),
        cr = m(27041),
        er = m(10536),
        Zt = m(78456),
        pr = m(96867),
        Or = m(86029),
        fr = m(77179),
        Sr = (f) => {
          const {
            componentCls: I,
            customIconTop: U,
            customIconSize: te,
            customIconFontSize: De,
          } = f;
          return {
            [`${I}-item-custom`]: {
              [`> ${I}-item-container > ${I}-item-icon`]: {
                height: 'auto',
                background: 'none',
                border: 0,
                [`> ${I}-icon`]: {
                  top: U,
                  width: te,
                  height: te,
                  fontSize: De,
                  lineHeight: (0, Zt.bf)(te),
                },
              },
            },
            [`&:not(${I}-vertical)`]: {
              [`${I}-item-custom`]: {
                [`${I}-item-icon`]: { width: 'auto', background: 'none' },
              },
            },
          };
        },
        tr = (f) => {
          const { componentCls: I } = f,
            U = `${I}-item`;
          return {
            [`${I}-horizontal`]: {
              [`${U}-tail`]: { transform: 'translateY(-50%)' },
            },
          };
        },
        $n = (f) => {
          const {
              componentCls: I,
              inlineDotSize: U,
              inlineTitleColor: te,
              inlineTailColor: De,
            } = f,
            et = f.calc(f.paddingXS).add(f.lineWidth).equal(),
            Te = {
              [`${I}-item-container ${I}-item-content ${I}-item-title`]: {
                color: te,
              },
            };
          return {
            [`&${I}-inline`]: {
              width: 'auto',
              display: 'inline-flex',
              [`${I}-item`]: {
                flex: 'none',
                '&-container': {
                  padding: `${(0, Zt.bf)(et)} ${(0, Zt.bf)(f.paddingXXS)} 0`,
                  margin: `0 ${(0, Zt.bf)(f.calc(f.marginXXS).div(2).equal())}`,
                  borderRadius: f.borderRadiusSM,
                  cursor: 'pointer',
                  transition: `background-color ${f.motionDurationMid}`,
                  '&:hover': { background: f.controlItemBgHover },
                  "&[role='button']:hover": { opacity: 1 },
                },
                '&-icon': {
                  width: U,
                  height: U,
                  marginInlineStart: `calc(50% - ${(0, Zt.bf)(
                    f.calc(U).div(2).equal(),
                  )})`,
                  [`> ${I}-icon`]: { top: 0 },
                  [`${I}-icon-dot`]: {
                    borderRadius: f.calc(f.fontSizeSM).div(4).equal(),
                    '&::after': { display: 'none' },
                  },
                },
                '&-content': {
                  width: 'auto',
                  marginTop: f.calc(f.marginXS).sub(f.lineWidth).equal(),
                },
                '&-title': {
                  color: te,
                  fontSize: f.fontSizeSM,
                  lineHeight: f.lineHeightSM,
                  fontWeight: 'normal',
                  marginBottom: f.calc(f.marginXXS).div(2).equal(),
                },
                '&-description': { display: 'none' },
                '&-tail': {
                  marginInlineStart: 0,
                  top: f.calc(U).div(2).add(et).equal(),
                  transform: 'translateY(-50%)',
                  '&:after': {
                    width: '100%',
                    height: f.lineWidth,
                    borderRadius: 0,
                    marginInlineStart: 0,
                    background: De,
                  },
                },
                [`&:first-child ${I}-item-tail`]: {
                  width: '50%',
                  marginInlineStart: '50%',
                },
                [`&:last-child ${I}-item-tail`]: {
                  display: 'block',
                  width: '50%',
                },
                '&-wait': Object.assign(
                  {
                    [`${I}-item-icon ${I}-icon ${I}-icon-dot`]: {
                      backgroundColor: f.colorBorderBg,
                      border: `${(0, Zt.bf)(f.lineWidth)} ${f.lineType} ${De}`,
                    },
                  },
                  Te,
                ),
                '&-finish': Object.assign(
                  {
                    [`${I}-item-tail::after`]: { backgroundColor: De },
                    [`${I}-item-icon ${I}-icon ${I}-icon-dot`]: {
                      backgroundColor: De,
                      border: `${(0, Zt.bf)(f.lineWidth)} ${f.lineType} ${De}`,
                    },
                  },
                  Te,
                ),
                '&-error': Te,
                '&-active, &-process': Object.assign(
                  {
                    [`${I}-item-icon`]: {
                      width: U,
                      height: U,
                      marginInlineStart: `calc(50% - ${(0, Zt.bf)(
                        f.calc(U).div(2).equal(),
                      )})`,
                      top: 0,
                    },
                  },
                  Te,
                ),
                [`&:not(${I}-item-active) > ${I}-item-container[role='button']:hover`]:
                  { [`${I}-item-title`]: { color: te } },
              },
            },
          };
        },
        Fr = (f) => {
          const {
            componentCls: I,
            iconSize: U,
            lineHeight: te,
            iconSizeSM: De,
          } = f;
          return {
            [`&${I}-label-vertical`]: {
              [`${I}-item`]: {
                overflow: 'visible',
                '&-tail': {
                  marginInlineStart: f
                    .calc(U)
                    .div(2)
                    .add(f.controlHeightLG)
                    .equal(),
                  padding: `0 ${(0, Zt.bf)(f.paddingLG)}`,
                },
                '&-content': {
                  display: 'block',
                  width: f.calc(U).div(2).add(f.controlHeightLG).mul(2).equal(),
                  marginTop: f.marginSM,
                  textAlign: 'center',
                },
                '&-icon': {
                  display: 'inline-block',
                  marginInlineStart: f.controlHeightLG,
                },
                '&-title': {
                  paddingInlineEnd: 0,
                  paddingInlineStart: 0,
                  '&::after': { display: 'none' },
                },
                '&-subtitle': {
                  display: 'block',
                  marginBottom: f.marginXXS,
                  marginInlineStart: 0,
                  lineHeight: te,
                },
              },
              [`&${I}-small:not(${I}-dot)`]: {
                [`${I}-item`]: {
                  '&-icon': {
                    marginInlineStart: f
                      .calc(U)
                      .sub(De)
                      .div(2)
                      .add(f.controlHeightLG)
                      .equal(),
                  },
                },
              },
            },
          };
        },
        Gr = (f) => {
          const {
            componentCls: I,
            navContentMaxWidth: U,
            navArrowColor: te,
            stepsNavActiveColor: De,
            motionDurationSlow: et,
          } = f;
          return {
            [`&${I}-navigation`]: {
              paddingTop: f.paddingSM,
              [`&${I}-small`]: {
                [`${I}-item`]: {
                  '&-container': {
                    marginInlineStart: f.calc(f.marginSM).mul(-1).equal(),
                  },
                },
              },
              [`${I}-item`]: {
                overflow: 'visible',
                textAlign: 'center',
                '&-container': {
                  display: 'inline-block',
                  height: '100%',
                  marginInlineStart: f.calc(f.margin).mul(-1).equal(),
                  paddingBottom: f.paddingSM,
                  textAlign: 'start',
                  transition: `opacity ${et}`,
                  [`${I}-item-content`]: { maxWidth: U },
                  [`${I}-item-title`]: Object.assign(
                    Object.assign(
                      { maxWidth: '100%', paddingInlineEnd: 0 },
                      pr.vS,
                    ),
                    { '&::after': { display: 'none' } },
                  ),
                },
                [`&:not(${I}-item-active)`]: {
                  [`${I}-item-container[role='button']`]: {
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.85 },
                  },
                },
                '&:last-child': { flex: 1, '&::after': { display: 'none' } },
                '&::after': {
                  position: 'absolute',
                  top: `calc(50% - ${(0, Zt.bf)(
                    f.calc(f.paddingSM).div(2).equal(),
                  )})`,
                  insetInlineStart: '100%',
                  display: 'inline-block',
                  width: f.fontSizeIcon,
                  height: f.fontSizeIcon,
                  borderTop: `${(0, Zt.bf)(f.lineWidth)} ${f.lineType} ${te}`,
                  borderBottom: 'none',
                  borderInlineStart: 'none',
                  borderInlineEnd: `${(0, Zt.bf)(f.lineWidth)} ${
                    f.lineType
                  } ${te}`,
                  transform: 'translateY(-50%) translateX(-50%) rotate(45deg)',
                  content: '""',
                },
                '&::before': {
                  position: 'absolute',
                  bottom: 0,
                  insetInlineStart: '50%',
                  display: 'inline-block',
                  width: 0,
                  height: f.lineWidthBold,
                  backgroundColor: De,
                  transition: `width ${et}, inset-inline-start ${et}`,
                  transitionTimingFunction: 'ease-out',
                  content: '""',
                },
              },
              [`${I}-item${I}-item-active::before`]: {
                insetInlineStart: 0,
                width: '100%',
              },
            },
            [`&${I}-navigation${I}-vertical`]: {
              [`> ${I}-item`]: {
                marginInlineEnd: 0,
                '&::before': { display: 'none' },
                [`&${I}-item-active::before`]: {
                  top: 0,
                  insetInlineEnd: 0,
                  insetInlineStart: 'unset',
                  display: 'block',
                  width: f.calc(f.lineWidth).mul(3).equal(),
                  height: `calc(100% - ${(0, Zt.bf)(f.marginLG)})`,
                },
                '&::after': {
                  position: 'relative',
                  insetInlineStart: '50%',
                  display: 'block',
                  width: f.calc(f.controlHeight).mul(0.25).equal(),
                  height: f.calc(f.controlHeight).mul(0.25).equal(),
                  marginBottom: f.marginXS,
                  textAlign: 'center',
                  transform: 'translateY(-50%) translateX(-50%) rotate(135deg)',
                },
                '&:last-child': { '&::after': { display: 'none' } },
                [`> ${I}-item-container > ${I}-item-tail`]: {
                  visibility: 'hidden',
                },
              },
            },
            [`&${I}-navigation${I}-horizontal`]: {
              [`> ${I}-item > ${I}-item-container > ${I}-item-tail`]: {
                visibility: 'hidden',
              },
            },
          };
        },
        En = (f) => {
          const {
              antCls: I,
              componentCls: U,
              iconSize: te,
              iconSizeSM: De,
              processIconColor: et,
              marginXXS: Te,
              lineWidthBold: me,
              lineWidth: he,
              paddingXXS: re,
            } = f,
            Se = f.calc(te).add(f.calc(me).mul(4).equal()).equal(),
            P = f.calc(De).add(f.calc(f.lineWidth).mul(4).equal()).equal();
          return {
            [`&${U}-with-progress`]: {
              [`${U}-item`]: {
                paddingTop: re,
                [`&-process ${U}-item-container ${U}-item-icon ${U}-icon`]: {
                  color: et,
                },
              },
              [`&${U}-vertical > ${U}-item `]: {
                paddingInlineStart: re,
                [`> ${U}-item-container > ${U}-item-tail`]: {
                  top: Te,
                  insetInlineStart: f.calc(te).div(2).sub(he).add(re).equal(),
                },
              },
              [`&, &${U}-small`]: {
                [`&${U}-horizontal ${U}-item:first-child`]: {
                  paddingBottom: re,
                  paddingInlineStart: re,
                },
              },
              [`&${U}-small${U}-vertical > ${U}-item > ${U}-item-container > ${U}-item-tail`]:
                { insetInlineStart: f.calc(De).div(2).sub(he).add(re).equal() },
              [`&${U}-label-vertical ${U}-item ${U}-item-tail`]: {
                top: f.calc(te).div(2).add(re).equal(),
              },
              [`${U}-item-icon`]: {
                position: 'relative',
                [`${I}-progress`]: {
                  position: 'absolute',
                  insetInlineStart: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  '&-inner': {
                    width: `${(0, Zt.bf)(Se)} !important`,
                    height: `${(0, Zt.bf)(Se)} !important`,
                  },
                },
              },
              [`&${U}-small`]: {
                [`&${U}-label-vertical ${U}-item ${U}-item-tail`]: {
                  top: f.calc(De).div(2).add(re).equal(),
                },
                [`${U}-item-icon ${I}-progress-inner`]: {
                  width: `${(0, Zt.bf)(P)} !important`,
                  height: `${(0, Zt.bf)(P)} !important`,
                },
              },
            },
          };
        },
        Yr = (f) => {
          const {
            componentCls: I,
            descriptionMaxWidth: U,
            lineHeight: te,
            dotCurrentSize: De,
            dotSize: et,
            motionDurationSlow: Te,
          } = f;
          return {
            [`&${I}-dot, &${I}-dot${I}-small`]: {
              [`${I}-item`]: {
                '&-title': { lineHeight: te },
                '&-tail': {
                  top: f
                    .calc(f.dotSize)
                    .sub(f.calc(f.lineWidth).mul(3).equal())
                    .div(2)
                    .equal(),
                  width: '100%',
                  marginTop: 0,
                  marginBottom: 0,
                  marginInline: `${(0, Zt.bf)(f.calc(U).div(2).equal())} 0`,
                  padding: 0,
                  '&::after': {
                    width: `calc(100% - ${(0, Zt.bf)(
                      f.calc(f.marginSM).mul(2).equal(),
                    )})`,
                    height: f.calc(f.lineWidth).mul(3).equal(),
                    marginInlineStart: f.marginSM,
                  },
                },
                '&-icon': {
                  width: et,
                  height: et,
                  marginInlineStart: f
                    .calc(f.descriptionMaxWidth)
                    .sub(et)
                    .div(2)
                    .equal(),
                  paddingInlineEnd: 0,
                  lineHeight: (0, Zt.bf)(et),
                  background: 'transparent',
                  border: 0,
                  [`${I}-icon-dot`]: {
                    position: 'relative',
                    float: 'left',
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                    transition: `all ${Te}`,
                    '&::after': {
                      position: 'absolute',
                      top: f.calc(f.marginSM).mul(-1).equal(),
                      insetInlineStart: f
                        .calc(et)
                        .sub(f.calc(f.controlHeightLG).mul(1.5).equal())
                        .div(2)
                        .equal(),
                      width: f.calc(f.controlHeightLG).mul(1.5).equal(),
                      height: f.controlHeight,
                      background: 'transparent',
                      content: '""',
                    },
                  },
                },
                '&-content': { width: U },
                [`&-process ${I}-item-icon`]: {
                  position: 'relative',
                  top: f.calc(et).sub(De).div(2).equal(),
                  width: De,
                  height: De,
                  lineHeight: (0, Zt.bf)(De),
                  background: 'none',
                  marginInlineStart: f
                    .calc(f.descriptionMaxWidth)
                    .sub(De)
                    .div(2)
                    .equal(),
                },
                [`&-process ${I}-icon`]: {
                  [`&:first-child ${I}-icon-dot`]: { insetInlineStart: 0 },
                },
              },
            },
            [`&${I}-vertical${I}-dot`]: {
              [`${I}-item-icon`]: {
                marginTop: f.calc(f.controlHeight).sub(et).div(2).equal(),
                marginInlineStart: 0,
                background: 'none',
              },
              [`${I}-item-process ${I}-item-icon`]: {
                marginTop: f.calc(f.controlHeight).sub(De).div(2).equal(),
                top: 0,
                insetInlineStart: f.calc(et).sub(De).div(2).equal(),
                marginInlineStart: 0,
              },
              [`${I}-item > ${I}-item-container > ${I}-item-tail`]: {
                top: f.calc(f.controlHeight).sub(et).div(2).equal(),
                insetInlineStart: 0,
                margin: 0,
                padding: `${(0, Zt.bf)(
                  f.calc(et).add(f.paddingXS).equal(),
                )} 0 ${(0, Zt.bf)(f.paddingXS)}`,
                '&::after': {
                  marginInlineStart: f.calc(et).sub(f.lineWidth).div(2).equal(),
                },
              },
              [`&${I}-small`]: {
                [`${I}-item-icon`]: {
                  marginTop: f.calc(f.controlHeightSM).sub(et).div(2).equal(),
                },
                [`${I}-item-process ${I}-item-icon`]: {
                  marginTop: f.calc(f.controlHeightSM).sub(De).div(2).equal(),
                },
                [`${I}-item > ${I}-item-container > ${I}-item-tail`]: {
                  top: f.calc(f.controlHeightSM).sub(et).div(2).equal(),
                },
              },
              [`${I}-item:first-child ${I}-icon-dot`]: { insetInlineStart: 0 },
              [`${I}-item-content`]: { width: 'inherit' },
            },
          };
        },
        Pr = (f) => {
          const { componentCls: I } = f;
          return {
            [`&${I}-rtl`]: {
              direction: 'rtl',
              [`${I}-item`]: { '&-subtitle': { float: 'left' } },
              [`&${I}-navigation`]: {
                [`${I}-item::after`]: { transform: 'rotate(-45deg)' },
              },
              [`&${I}-vertical`]: {
                [`> ${I}-item`]: {
                  '&::after': { transform: 'rotate(225deg)' },
                  [`${I}-item-icon`]: { float: 'right' },
                },
              },
              [`&${I}-dot`]: {
                [`${I}-item-icon ${I}-icon-dot, &${I}-small ${I}-item-icon ${I}-icon-dot`]:
                  { float: 'right' },
              },
            },
          };
        },
        _n = (f) => {
          const {
            componentCls: I,
            iconSizeSM: U,
            fontSizeSM: te,
            fontSize: De,
            colorTextDescription: et,
          } = f;
          return {
            [`&${I}-small`]: {
              [`&${I}-horizontal:not(${I}-label-vertical) ${I}-item`]: {
                paddingInlineStart: f.paddingSM,
                '&:first-child': { paddingInlineStart: 0 },
              },
              [`${I}-item-icon`]: {
                width: U,
                height: U,
                marginTop: 0,
                marginBottom: 0,
                marginInline: `0 ${(0, Zt.bf)(f.marginXS)}`,
                fontSize: te,
                lineHeight: (0, Zt.bf)(U),
                textAlign: 'center',
                borderRadius: U,
              },
              [`${I}-item-title`]: {
                paddingInlineEnd: f.paddingSM,
                fontSize: De,
                lineHeight: (0, Zt.bf)(U),
                '&::after': { top: f.calc(U).div(2).equal() },
              },
              [`${I}-item-description`]: { color: et, fontSize: De },
              [`${I}-item-tail`]: {
                top: f.calc(U).div(2).sub(f.paddingXXS).equal(),
              },
              [`${I}-item-custom ${I}-item-icon`]: {
                width: 'inherit',
                height: 'inherit',
                lineHeight: 'inherit',
                background: 'none',
                border: 0,
                borderRadius: 0,
                [`> ${I}-icon`]: {
                  fontSize: U,
                  lineHeight: (0, Zt.bf)(U),
                  transform: 'none',
                },
              },
            },
          };
        },
        Br = (f) => {
          const { componentCls: I, iconSizeSM: U, iconSize: te } = f;
          return {
            [`&${I}-vertical`]: {
              display: 'flex',
              flexDirection: 'column',
              [`> ${I}-item`]: {
                display: 'block',
                flex: '1 0 auto',
                paddingInlineStart: 0,
                overflow: 'visible',
                [`${I}-item-icon`]: {
                  float: 'left',
                  marginInlineEnd: f.margin,
                },
                [`${I}-item-content`]: {
                  display: 'block',
                  minHeight: f.calc(f.controlHeight).mul(1.5).equal(),
                  overflow: 'hidden',
                },
                [`${I}-item-title`]: { lineHeight: (0, Zt.bf)(te) },
                [`${I}-item-description`]: { paddingBottom: f.paddingSM },
              },
              [`> ${I}-item > ${I}-item-container > ${I}-item-tail`]: {
                position: 'absolute',
                top: 0,
                insetInlineStart: f.calc(te).div(2).sub(f.lineWidth).equal(),
                width: f.lineWidth,
                height: '100%',
                padding: `${(0, Zt.bf)(
                  f.calc(f.marginXXS).mul(1.5).add(te).equal(),
                )} 0 ${(0, Zt.bf)(f.calc(f.marginXXS).mul(1.5).equal())}`,
                '&::after': { width: f.lineWidth, height: '100%' },
              },
              [`> ${I}-item:not(:last-child) > ${I}-item-container > ${I}-item-tail`]:
                { display: 'block' },
              [` > ${I}-item > ${I}-item-container > ${I}-item-content > ${I}-item-title`]:
                { '&::after': { display: 'none' } },
              [`&${I}-small ${I}-item-container`]: {
                [`${I}-item-tail`]: {
                  position: 'absolute',
                  top: 0,
                  insetInlineStart: f.calc(U).div(2).sub(f.lineWidth).equal(),
                  padding: `${(0, Zt.bf)(
                    f.calc(f.marginXXS).mul(1.5).add(U).equal(),
                  )} 0 ${(0, Zt.bf)(f.calc(f.marginXXS).mul(1.5).equal())}`,
                },
                [`${I}-item-title`]: { lineHeight: (0, Zt.bf)(U) },
              },
            },
          };
        };
      const Lr = 'wait',
        Dr = 'process',
        gn = 'finish',
        k = 'error',
        ye = (f, I) => {
          const U = `${I.componentCls}-item`,
            te = `${f}IconColor`,
            De = `${f}TitleColor`,
            et = `${f}DescriptionColor`,
            Te = `${f}TailColor`,
            me = `${f}IconBgColor`,
            he = `${f}IconBorderColor`,
            re = `${f}DotColor`;
          return {
            [`${U}-${f} ${U}-icon`]: {
              backgroundColor: I[me],
              borderColor: I[he],
              [`> ${I.componentCls}-icon`]: {
                color: I[te],
                [`${I.componentCls}-icon-dot`]: { background: I[re] },
              },
            },
            [`${U}-${f}${U}-custom ${U}-icon`]: {
              [`> ${I.componentCls}-icon`]: { color: I[re] },
            },
            [`${U}-${f} > ${U}-container > ${U}-content > ${U}-title`]: {
              color: I[De],
              '&::after': { backgroundColor: I[Te] },
            },
            [`${U}-${f} > ${U}-container > ${U}-content > ${U}-description`]: {
              color: I[et],
            },
            [`${U}-${f} > ${U}-container > ${U}-tail::after`]: {
              backgroundColor: I[Te],
            },
          };
        },
        tt = (f) => {
          const { componentCls: I, motionDurationSlow: U } = f,
            te = `${I}-item`,
            De = `${te}-icon`;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {
                        [te]: {
                          position: 'relative',
                          display: 'inline-block',
                          flex: 1,
                          overflow: 'hidden',
                          verticalAlign: 'top',
                          '&:last-child': {
                            flex: 'none',
                            [`> ${te}-container > ${te}-tail, > ${te}-container >  ${te}-content > ${te}-title::after`]:
                              { display: 'none' },
                          },
                        },
                        [`${te}-container`]: {
                          outline: 'none',
                          '&:focus-visible': {
                            [De]: Object.assign({}, (0, pr.oN)(f)),
                          },
                        },
                        [`${De}, ${te}-content`]: {
                          display: 'inline-block',
                          verticalAlign: 'top',
                        },
                        [De]: {
                          width: f.iconSize,
                          height: f.iconSize,
                          marginTop: 0,
                          marginBottom: 0,
                          marginInlineStart: 0,
                          marginInlineEnd: f.marginXS,
                          fontSize: f.iconFontSize,
                          fontFamily: f.fontFamily,
                          lineHeight: (0, Zt.bf)(f.iconSize),
                          textAlign: 'center',
                          borderRadius: f.iconSize,
                          border: `${(0, Zt.bf)(f.lineWidth)} ${
                            f.lineType
                          } transparent`,
                          transition: `background-color ${U}, border-color ${U}`,
                          [`${I}-icon`]: {
                            position: 'relative',
                            top: f.iconTop,
                            color: f.colorPrimary,
                            lineHeight: 1,
                          },
                        },
                        [`${te}-tail`]: {
                          position: 'absolute',
                          top: f.calc(f.iconSize).div(2).equal(),
                          insetInlineStart: 0,
                          width: '100%',
                          '&::after': {
                            display: 'inline-block',
                            width: '100%',
                            height: f.lineWidth,
                            background: f.colorSplit,
                            borderRadius: f.lineWidth,
                            transition: `background ${U}`,
                            content: '""',
                          },
                        },
                        [`${te}-title`]: {
                          position: 'relative',
                          display: 'inline-block',
                          paddingInlineEnd: f.padding,
                          color: f.colorText,
                          fontSize: f.fontSizeLG,
                          lineHeight: (0, Zt.bf)(f.titleLineHeight),
                          '&::after': {
                            position: 'absolute',
                            top: f.calc(f.titleLineHeight).div(2).equal(),
                            insetInlineStart: '100%',
                            display: 'block',
                            width: 9999,
                            height: f.lineWidth,
                            background: f.processTailColor,
                            content: '""',
                          },
                        },
                        [`${te}-subtitle`]: {
                          display: 'inline',
                          marginInlineStart: f.marginXS,
                          color: f.colorTextDescription,
                          fontWeight: 'normal',
                          fontSize: f.fontSize,
                        },
                        [`${te}-description`]: {
                          color: f.colorTextDescription,
                          fontSize: f.fontSize,
                        },
                      },
                      ye(Lr, f),
                    ),
                    ye(Dr, f),
                  ),
                  {
                    [`${te}-process > ${te}-container > ${te}-title`]: {
                      fontWeight: f.fontWeightStrong,
                    },
                  },
                ),
                ye(gn, f),
              ),
              ye(k, f),
            ),
            {
              [`${te}${I}-next-error > ${I}-item-title::after`]: {
                background: f.colorError,
              },
              [`${te}-disabled`]: { cursor: 'not-allowed' },
            },
          );
        },
        Je = (f) => {
          const { componentCls: I, motionDurationSlow: U } = f;
          return {
            [`& ${I}-item`]: {
              [`&:not(${I}-item-active)`]: {
                [`& > ${I}-item-container[role='button']`]: {
                  cursor: 'pointer',
                  [`${I}-item`]: {
                    [`&-title, &-subtitle, &-description, &-icon ${I}-icon`]: {
                      transition: `color ${U}`,
                    },
                  },
                  '&:hover': {
                    [`${I}-item`]: {
                      '&-title, &-subtitle, &-description': {
                        color: f.colorPrimary,
                      },
                    },
                  },
                },
                [`&:not(${I}-item-process)`]: {
                  [`& > ${I}-item-container[role='button']:hover`]: {
                    [`${I}-item`]: {
                      '&-icon': {
                        borderColor: f.colorPrimary,
                        [`${I}-icon`]: { color: f.colorPrimary },
                      },
                    },
                  },
                },
              },
            },
            [`&${I}-horizontal:not(${I}-label-vertical)`]: {
              [`${I}-item`]: {
                paddingInlineStart: f.padding,
                whiteSpace: 'nowrap',
                '&:first-child': { paddingInlineStart: 0 },
                [`&:last-child ${I}-item-title`]: { paddingInlineEnd: 0 },
                '&-tail': { display: 'none' },
                '&-description': {
                  maxWidth: f.descriptionMaxWidth,
                  whiteSpace: 'normal',
                },
              },
            },
          };
        },
        Rt = (f) => {
          const { componentCls: I } = f;
          return {
            [I]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign(
                                      Object.assign({}, (0, pr.Wf)(f)),
                                      {
                                        display: 'flex',
                                        width: '100%',
                                        fontSize: 0,
                                        textAlign: 'initial',
                                      },
                                    ),
                                    tt(f),
                                  ),
                                  Je(f),
                                ),
                                Sr(f),
                              ),
                              _n(f),
                            ),
                            Br(f),
                          ),
                          tr(f),
                        ),
                        Fr(f),
                      ),
                      Yr(f),
                    ),
                    Gr(f),
                  ),
                  Pr(f),
                ),
                En(f),
              ),
              $n(f),
            ),
          };
        },
        It = (f) => ({
          titleLineHeight: f.controlHeight,
          customIconSize: f.controlHeight,
          customIconTop: 0,
          customIconFontSize: f.controlHeightSM,
          iconSize: f.controlHeight,
          iconTop: -0.5,
          iconFontSize: f.fontSize,
          iconSizeSM: f.fontSizeHeading3,
          dotSize: f.controlHeight / 4,
          dotCurrentSize: f.controlHeightLG / 4,
          navArrowColor: f.colorTextDisabled,
          navContentMaxWidth: 'auto',
          descriptionMaxWidth: 140,
          waitIconColor: f.wireframe ? f.colorTextDisabled : f.colorTextLabel,
          waitIconBgColor: f.wireframe
            ? f.colorBgContainer
            : f.colorFillContent,
          waitIconBorderColor: f.wireframe
            ? f.colorTextDisabled
            : 'transparent',
          finishIconBgColor: f.wireframe
            ? f.colorBgContainer
            : f.controlItemBgActive,
          finishIconBorderColor: f.wireframe
            ? f.colorPrimary
            : f.controlItemBgActive,
        });
      var kt = (0, Or.I$)(
          'Steps',
          (f) => {
            const {
                colorTextDisabled: I,
                controlHeightLG: U,
                colorTextLightSolid: te,
                colorText: De,
                colorPrimary: et,
                colorTextDescription: Te,
                colorTextQuaternary: me,
                colorError: he,
                colorBorderSecondary: re,
                colorSplit: Se,
              } = f,
              P = (0, fr.IX)(f, {
                processIconColor: te,
                processTitleColor: De,
                processDescriptionColor: De,
                processIconBgColor: et,
                processIconBorderColor: et,
                processDotColor: et,
                processTailColor: Se,
                waitTitleColor: Te,
                waitDescriptionColor: Te,
                waitTailColor: Se,
                waitDotColor: I,
                finishIconColor: et,
                finishTitleColor: De,
                finishDescriptionColor: Te,
                finishTailColor: et,
                finishDotColor: et,
                errorIconColor: te,
                errorTitleColor: he,
                errorDescriptionColor: he,
                errorTailColor: Se,
                errorIconBgColor: he,
                errorIconBorderColor: he,
                errorDotColor: he,
                stepsNavActiveColor: et,
                stepsProgressSize: U,
                inlineDotSize: 6,
                inlineTitleColor: me,
                inlineTailColor: re,
              });
            return [Rt(P)];
          },
          It,
        ),
        Dt = m(96865);
      function rn(f) {
        return f.filter((I) => I);
      }
      function Tt(f, I) {
        if (f) return f;
        const U = (0, Dt.Z)(I).map((te) => {
          if (ve.isValidElement(te)) {
            const { props: De } = te;
            return Object.assign({}, De);
          }
          return null;
        });
        return rn(U);
      }
      var zt = function (f, I) {
        var U = {};
        for (var te in f)
          Object.prototype.hasOwnProperty.call(f, te) &&
            I.indexOf(te) < 0 &&
            (U[te] = f[te]);
        if (f != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var De = 0, te = Object.getOwnPropertySymbols(f);
            De < te.length;
            De++
          )
            I.indexOf(te[De]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(f, te[De]) &&
              (U[te[De]] = f[te[De]]);
        return U;
      };
      const Yt = (f) => {
        const {
            percent: I,
            size: U,
            className: te,
            rootClassName: De,
            direction: et,
            items: Te,
            responsive: me = !0,
            current: he = 0,
            children: re,
            style: Se,
          } = f,
          P = zt(f, [
            'percent',
            'size',
            'className',
            'rootClassName',
            'direction',
            'items',
            'responsive',
            'current',
            'children',
            'style',
          ]),
          { xs: w } = (0, sr.Z)(me),
          { getPrefixCls: B, direction: A, steps: G } = ve.useContext(Kn.E_),
          be = ve.useMemo(() => (me && w ? 'vertical' : et), [w, et]),
          ce = (0, On.Z)(U),
          Be = B('steps', f.prefixCls),
          [at, Ke, ze] = kt(Be),
          lt = f.type === 'inline',
          wt = B('', f.iconPrefix),
          Nt = Tt(Te, re),
          Jt = lt ? void 0 : I,
          ot = Object.assign(
            Object.assign({}, G == null ? void 0 : G.style),
            Se,
          ),
          Lt = Rn()(
            G == null ? void 0 : G.className,
            {
              [`${Be}-rtl`]: A === 'rtl',
              [`${Be}-with-progress`]: Jt !== void 0,
            },
            te,
            De,
            Ke,
            ze,
          ),
          ln = {
            finish: ve.createElement(J.Z, { className: `${Be}-finish-icon` }),
            error: ve.createElement(l.Z, { className: `${Be}-error-icon` }),
          },
          st = (qe) => {
            let { node: Ve, status: St } = qe;
            if (St === 'process' && Jt !== void 0) {
              const an = ce === 'small' ? 32 : 40;
              return ve.createElement(
                'div',
                { className: `${Be}-progress-icon` },
                ve.createElement(cr.Z, {
                  type: 'circle',
                  percent: Jt,
                  size: an,
                  strokeWidth: 4,
                  format: () => null,
                }),
                Ve,
              );
            }
            return Ve;
          },
          nt = (qe, Ve) =>
            qe.description
              ? ve.createElement(er.Z, { title: qe.description }, Ve)
              : Ve;
        return at(
          ve.createElement(
            Nn,
            Object.assign({ icons: ln }, P, {
              style: ot,
              current: he,
              size: ce,
              items: Nt,
              itemRender: lt ? nt : void 0,
              stepIcon: st,
              direction: be,
              prefixCls: Be,
              iconPrefix: wt,
              className: Lt,
            }),
          ),
        );
      };
      Yt.Step = Nn.Step;
      var Pt = Yt,
        Qe = m(72223),
        Kt = m(73042),
        Ut = m(36948),
        ut = m(69164),
        ft = m(91105),
        $t = m(89071),
        Ye = m(60459),
        We = m(97616),
        Tn = ['onFinish', 'step', 'formRef', 'title', 'stepProps'];
      function dn(f) {
        var I = (0, ve.useRef)(),
          U = (0, ve.useContext)(nr),
          te = (0, ve.useContext)(rr),
          De = (0, oe.Z)((0, oe.Z)({}, f), te),
          et = De.onFinish,
          Te = De.step,
          me = De.formRef,
          he = De.title,
          re = De.stepProps,
          Se = (0, u.Z)(De, Tn);
        return (
          (0, $t.ET)(
            !Se.submitter,
            'StepForm \u4E0D\u5305\u542B\u63D0\u4EA4\u6309\u94AE\uFF0C\u8BF7\u5728 StepsForm \u4E0A',
          ),
          (0, ve.useImperativeHandle)(
            me,
            function () {
              return I.current;
            },
            [me == null ? void 0 : me.current],
          ),
          (0, ve.useEffect)(function () {
            if (De.name || De.step) {
              var P = (De.name || De.step).toString();
              return (
                U == null || U.regForm(P, De),
                function () {
                  U == null || U.unRegForm(P);
                }
              );
            }
          }, []),
          U &&
            U !== null &&
            U !== void 0 &&
            U.formArrayRef &&
            (U.formArrayRef.current[Te || 0] = I),
          (0, We.jsx)(
            Ye.I,
            (0, oe.Z)(
              {
                formRef: I,
                onFinish: (function () {
                  var P = (0, de.Z)(
                    (0, it.Z)().mark(function w(B) {
                      var A;
                      return (0, it.Z)().wrap(function (be) {
                        for (;;)
                          switch ((be.prev = be.next)) {
                            case 0:
                              if (
                                (Se.name &&
                                  (U == null || U.onFormFinish(Se.name, B)),
                                !et)
                              ) {
                                be.next = 9;
                                break;
                              }
                              return (
                                U == null || U.setLoading(!0),
                                (be.next = 5),
                                et == null ? void 0 : et(B)
                              );
                            case 5:
                              return (
                                (A = be.sent),
                                A && (U == null || U.next()),
                                U == null || U.setLoading(!1),
                                be.abrupt('return')
                              );
                            case 9:
                              (U != null && U.lastStep) ||
                                U == null ||
                                U.next();
                            case 10:
                            case 'end':
                              return be.stop();
                          }
                      }, w);
                    }),
                  );
                  return function (w) {
                    return P.apply(this, arguments);
                  };
                })(),
                onInit: function (w, B) {
                  var A;
                  (I.current = B),
                    U &&
                      U !== null &&
                      U !== void 0 &&
                      U.formArrayRef &&
                      (U.formArrayRef.current[Te || 0] = I),
                    Se == null ||
                      (A = Se.onInit) === null ||
                      A === void 0 ||
                      A.call(Se, w, B);
                },
                layout: 'vertical',
              },
              (0, ft.Z)(Se, ['layoutType', 'columns']),
            ),
          )
        );
      }
      var An = dn,
        xn = m(93112),
        At = function (I) {
          return (0, Ee.Z)({}, I.componentCls, {
            '&-container': {
              width: 'max-content',
              minWidth: '420px',
              maxWidth: '100%',
              margin: 'auto',
            },
            '&-steps-container': (0, Ee.Z)(
              { maxWidth: '1160px', margin: 'auto' },
              ''.concat(I.antCls, '-steps-vertical'),
              { height: '100%' },
            ),
            '&-step': {
              display: 'none',
              marginBlockStart: '32px',
              '&-active': { display: 'block' },
              '> form': { maxWidth: '100%' },
            },
          });
        };
      function hn(f) {
        return (0, xn.Xj)('StepsForm', function (I) {
          var U = (0, oe.Z)(
            (0, oe.Z)({}, I),
            {},
            { componentCls: '.'.concat(f) },
          );
          return [At(U)];
        });
      }
      var Cn = [
          'current',
          'onCurrentChange',
          'submitter',
          'stepsFormRender',
          'stepsRender',
          'stepFormRender',
          'stepsProps',
          'onFinish',
          'formProps',
          'containerStyle',
          'formRef',
          'formMapRef',
          'layoutRender',
        ],
        nr = ve.createContext(void 0),
        Zr = {
          horizontal: function (I) {
            var U = I.stepsDom,
              te = I.formDom;
            return (0, We.jsxs)(We.Fragment, {
              children: [
                (0, We.jsx)(Ge.Z, {
                  gutter: { xs: 8, sm: 16, md: 24 },
                  children: (0, We.jsx)(Et.Z, { span: 24, children: U }),
                }),
                (0, We.jsx)(Ge.Z, {
                  gutter: { xs: 8, sm: 16, md: 24 },
                  children: (0, We.jsx)(Et.Z, { span: 24, children: te }),
                }),
              ],
            });
          },
          vertical: function (I) {
            var U = I.stepsDom,
              te = I.formDom;
            return (0, We.jsxs)(Ge.Z, {
              align: 'stretch',
              wrap: !0,
              gutter: { xs: 8, sm: 16, md: 24 },
              children: [
                (0, We.jsx)(Et.Z, {
                  xxl: 4,
                  xl: 6,
                  lg: 7,
                  md: 8,
                  sm: 10,
                  xs: 12,
                  children: ve.cloneElement(U, { style: { height: '100%' } }),
                }),
                (0, We.jsx)(Et.Z, {
                  children: (0, We.jsx)('div', {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    },
                    children: te,
                  }),
                }),
              ],
            });
          },
        },
        rr = ve.createContext(null);
      function Jr(f) {
        var I = (0, ve.useContext)(ke.ZP.ConfigContext),
          U = I.getPrefixCls,
          te = U('pro-steps-form'),
          De = hn(te),
          et = De.wrapSSR,
          Te = De.hashId,
          me = f.current,
          he = f.onCurrentChange,
          re = f.submitter,
          Se = f.stepsFormRender,
          P = f.stepsRender,
          w = f.stepFormRender,
          B = f.stepsProps,
          A = f.onFinish,
          G = f.formProps,
          be = f.containerStyle,
          ce = f.formRef,
          Be = f.formMapRef,
          at = f.layoutRender,
          Ke = (0, u.Z)(f, Cn),
          ze = (0, ve.useRef)(new Map()),
          lt = (0, ve.useRef)(new Map()),
          wt = (0, ve.useRef)([]),
          Nt = (0, ve.useState)([]),
          Jt = (0, He.Z)(Nt, 2),
          ot = Jt[0],
          Lt = Jt[1],
          ln = (0, ve.useState)(!1),
          st = (0, He.Z)(ln, 2),
          nt = st[0],
          qe = st[1],
          Ve = (0, Ie.YB)(),
          St = (0, ut.Z)(0, { value: f.current, onChange: f.onCurrentChange }),
          an = (0, He.Z)(St, 2),
          vt = an[0],
          pt = an[1],
          gt = (0, ve.useMemo)(
            function () {
              return Zr[(B == null ? void 0 : B.direction) || 'horizontal'];
            },
            [B == null ? void 0 : B.direction],
          ),
          Ft = (0, ve.useMemo)(
            function () {
              return vt === ot.length - 1;
            },
            [ot.length, vt],
          ),
          Yn = (0, ve.useCallback)(function (bt, Ht) {
            lt.current.has(bt) ||
              Lt(function (jn) {
                return [].concat((0, S.Z)(jn), [bt]);
              }),
              lt.current.set(bt, Ht);
          }, []),
          Hn = (0, ve.useCallback)(function (bt) {
            Lt(function (Ht) {
              return Ht.filter(function (jn) {
                return jn !== bt;
              });
            }),
              lt.current.delete(bt),
              ze.current.delete(bt);
          }, []);
        (0, ve.useImperativeHandle)(
          Be,
          function () {
            return wt.current;
          },
          [wt.current],
        ),
          (0, ve.useImperativeHandle)(
            ce,
            function () {
              var bt;
              return (bt = wt.current[vt || 0]) === null || bt === void 0
                ? void 0
                : bt.current;
            },
            [vt, wt.current],
          );
        var yt = (0, ve.useCallback)(
            (function () {
              var bt = (0, de.Z)(
                (0, it.Z)().mark(function Ht(jn, In) {
                  var Qr, Kr;
                  return (0, it.Z)().wrap(
                    function (Bn) {
                      for (;;)
                        switch ((Bn.prev = Bn.next)) {
                          case 0:
                            if ((ze.current.set(jn, In), !(!Ft || !A))) {
                              Bn.next = 3;
                              break;
                            }
                            return Bn.abrupt('return');
                          case 3:
                            return (
                              qe(!0),
                              (Qr = Ct.T.apply(
                                void 0,
                                [{}].concat(
                                  (0, S.Z)(Array.from(ze.current.values())),
                                ),
                              )),
                              (Bn.prev = 5),
                              (Bn.next = 8),
                              A(Qr)
                            );
                          case 8:
                            (Kr = Bn.sent),
                              Kr &&
                                (pt(0),
                                wt.current.forEach(function (Wa) {
                                  var fa;
                                  return (fa = Wa.current) === null ||
                                    fa === void 0
                                    ? void 0
                                    : fa.resetFields();
                                })),
                              (Bn.next = 15);
                            break;
                          case 12:
                            (Bn.prev = 12),
                              (Bn.t0 = Bn.catch(5)),
                              console.log(Bn.t0);
                          case 15:
                            return (Bn.prev = 15), qe(!1), Bn.finish(15);
                          case 18:
                          case 'end':
                            return Bn.stop();
                        }
                    },
                    Ht,
                    null,
                    [[5, 12, 15, 18]],
                  );
                }),
              );
              return function (Ht, jn) {
                return bt.apply(this, arguments);
              };
            })(),
            [Ft, A, qe, pt],
          ),
          jt = (0, ve.useMemo)(
            function () {
              var bt = (0, Bt.n)(fe.Z, '4.24.0') > -1,
                Ht = bt
                  ? {
                      items: ot.map(function (jn) {
                        var In = lt.current.get(jn);
                        return (0,
                        oe.Z)({ key: jn, title: In == null ? void 0 : In.title }, In == null ? void 0 : In.stepProps);
                      }),
                    }
                  : {};
              return (0, We.jsx)('div', {
                className: ''.concat(te, '-steps-container ').concat(Te).trim(),
                style: { maxWidth: Math.min(ot.length * 320, 1160) },
                children: (0, We.jsx)(
                  Pt,
                  (0, oe.Z)(
                    (0, oe.Z)((0, oe.Z)({}, B), Ht),
                    {},
                    {
                      current: vt,
                      onChange: void 0,
                      children:
                        !bt &&
                        ot.map(function (jn) {
                          var In = lt.current.get(jn);
                          return (0,
                          We.jsx)(Pt.Step, (0, oe.Z)({ title: In == null ? void 0 : In.title }, In == null ? void 0 : In.stepProps), jn);
                        }),
                    },
                  ),
                ),
              });
            },
            [ot, Te, te, vt, B],
          ),
          Un = (0, $e.J)(function () {
            var bt,
              Ht = wt.current[vt];
            (bt = Ht.current) === null || bt === void 0 || bt.submit();
          }),
          Zn = (0, $e.J)(function () {
            vt < 1 || pt(vt - 1);
          }),
          Wn = (0, ve.useMemo)(
            function () {
              return (
                re !== !1 &&
                (0, We.jsx)(
                  Qe.ZP,
                  (0, oe.Z)(
                    (0, oe.Z)(
                      { type: 'primary', loading: nt },
                      re == null ? void 0 : re.submitButtonProps,
                    ),
                    {},
                    {
                      onClick: function () {
                        var Ht;
                        re == null ||
                          (Ht = re.onSubmit) === null ||
                          Ht === void 0 ||
                          Ht.call(re),
                          Un();
                      },
                      children: Ve.getMessage(
                        'stepsForm.next',
                        '\u4E0B\u4E00\u6B65',
                      ),
                    },
                  ),
                  'next',
                )
              );
            },
            [Ve, nt, Un, re],
          ),
          vr = (0, ve.useMemo)(
            function () {
              return (
                re !== !1 &&
                (0, We.jsx)(
                  Qe.ZP,
                  (0, oe.Z)(
                    (0, oe.Z)({}, re == null ? void 0 : re.resetButtonProps),
                    {},
                    {
                      onClick: function () {
                        var Ht;
                        Zn(),
                          re == null ||
                            (Ht = re.onReset) === null ||
                            Ht === void 0 ||
                            Ht.call(re);
                      },
                      children: Ve.getMessage(
                        'stepsForm.prev',
                        '\u4E0A\u4E00\u6B65',
                      ),
                    },
                  ),
                  'pre',
                )
              );
            },
            [Ve, Zn, re],
          ),
          $r = (0, ve.useMemo)(
            function () {
              return (
                re !== !1 &&
                (0, We.jsx)(
                  Qe.ZP,
                  (0, oe.Z)(
                    (0, oe.Z)(
                      { type: 'primary', loading: nt },
                      re == null ? void 0 : re.submitButtonProps,
                    ),
                    {},
                    {
                      onClick: function () {
                        var Ht;
                        re == null ||
                          (Ht = re.onSubmit) === null ||
                          Ht === void 0 ||
                          Ht.call(re),
                          Un();
                      },
                      children: Ve.getMessage(
                        'stepsForm.submit',
                        '\u63D0\u4EA4',
                      ),
                    },
                  ),
                  'submit',
                )
              );
            },
            [Ve, nt, Un, re],
          ),
          ua = (0, $e.J)(function () {
            vt > ot.length - 2 || pt(vt + 1);
          }),
          zr = (0, ve.useMemo)(
            function () {
              var bt = [],
                Ht = vt || 0;
              if (
                (Ht < 1
                  ? ot.length === 1
                    ? bt.push($r)
                    : bt.push(Wn)
                  : Ht + 1 === ot.length
                  ? bt.push(vr, $r)
                  : bt.push(vr, Wn),
                (bt = bt.filter(ve.isValidElement)),
                re && re.render)
              ) {
                var jn,
                  In = {
                    form:
                      (jn = wt.current[vt]) === null || jn === void 0
                        ? void 0
                        : jn.current,
                    onSubmit: Un,
                    step: vt,
                    onPre: Zn,
                  };
                return re.render(In, bt);
              }
              return re && (re == null ? void 0 : re.render) === !1 ? null : bt;
            },
            [ot.length, Wn, Un, vr, Zn, vt, $r, re],
          ),
          ba = (0, ve.useMemo)(
            function () {
              return (0, Dt.Z)(f.children).map(function (bt, Ht) {
                var jn = bt.props,
                  In = jn.name || ''.concat(Ht),
                  Qr = vt === Ht,
                  Kr = Qr ? { contentRender: w, submitter: !1 } : {};
                return (0,
                We.jsx)('div', { className: Rn()(''.concat(te, '-step'), Te, (0, Ee.Z)({}, ''.concat(te, '-step-active'), Qr)), children: (0, We.jsx)(rr.Provider, { value: (0, oe.Z)((0, oe.Z)((0, oe.Z)((0, oe.Z)({}, Kr), G), jn), {}, { name: In, step: Ht }), children: bt }) }, In);
              });
            },
            [G, Te, te, f.children, vt, w],
          ),
          Sa = (0, ve.useMemo)(
            function () {
              return P
                ? P(
                    ot.map(function (bt) {
                      var Ht;
                      return {
                        key: bt,
                        title:
                          (Ht = lt.current.get(bt)) === null || Ht === void 0
                            ? void 0
                            : Ht.title,
                      };
                    }),
                    jt,
                  )
                : jt;
            },
            [ot, jt, P],
          ),
          xa = (0, ve.useMemo)(
            function () {
              return (0, We.jsxs)('div', {
                className: ''.concat(te, '-container ').concat(Te).trim(),
                style: be,
                children: [ba, Se ? null : (0, We.jsx)(Kt.Z, { children: zr })],
              });
            },
            [be, ba, Te, te, Se, zr],
          ),
          Aa = (0, ve.useMemo)(
            function () {
              var bt = { stepsDom: Sa, formDom: xa };
              return Se ? Se(at ? at(bt) : gt(bt), zr) : at ? at(bt) : gt(bt);
            },
            [Sa, xa, gt, Se, zr, at],
          );
        return et(
          (0, We.jsx)('div', {
            className: Rn()(te, Te),
            children: (0, We.jsx)(
              Ut.Z.Provider,
              (0, oe.Z)(
                (0, oe.Z)({}, Ke),
                {},
                {
                  children: (0, We.jsx)(nr.Provider, {
                    value: {
                      loading: nt,
                      setLoading: qe,
                      regForm: Yn,
                      keyArray: ot,
                      next: ua,
                      formArrayRef: wt,
                      formMapRef: lt,
                      lastStep: Ft,
                      unRegForm: Hn,
                      onFormFinish: yt,
                    },
                    children: Aa,
                  }),
                },
              ),
            ),
          }),
        );
      }
      function wr(f) {
        return (0, We.jsx)(Ie._Y, {
          needDeps: !0,
          children: (0, We.jsx)(Jr, (0, oe.Z)({}, f)),
        });
      }
      (wr.StepForm = An), (wr.useForm = Ut.Z.useForm);
    },
    91446: function (ur, pn, m) {
      m.d(pn, {
        Z: function () {
          return tv;
        },
      });
      var Ee = m(62812),
        oe = m(47768),
        it = m(22361),
        de = m(72561),
        S = m(73990),
        He = m(80104),
        u = m(83525),
        Ie = m(41670),
        Ct = m(22290),
        Bt = m(33888),
        $e = m(57285),
        Ge = m(5960),
        Et = m(30086),
        ke = m(91150),
        fe = m.n(ke),
        ve = m(91105),
        J = m(69164),
        l = m(82702),
        Gt = m(93112),
        Rn = function (e) {
          var n = e.componentCls,
            r = e.antCls;
          return (0, S.Z)(
            {},
            ''.concat(n, '-actions'),
            (0, S.Z)(
              (0, S.Z)(
                {
                  marginBlock: 0,
                  marginInline: 0,
                  paddingBlock: 0,
                  paddingInline: 0,
                  listStyle: 'none',
                  display: 'flex',
                  gap: e.marginXS,
                  background: e.colorBgContainer,
                  borderBlockStart: ''
                    .concat(e.lineWidth, 'px ')
                    .concat(e.lineType, ' ')
                    .concat(e.colorSplit),
                  minHeight: 42,
                },
                '& > *',
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  display: 'flex',
                  cursor: 'pointer',
                  color: e.colorTextSecondary,
                  transition: 'color 0.3s',
                  '&:hover': { color: e.colorPrimaryHover },
                },
              ),
              '& > li > div',
              {
                flex: 1,
                width: '100%',
                marginBlock: e.marginSM,
                marginInline: 0,
                color: e.colorTextSecondary,
                textAlign: 'center',
                a: {
                  color: e.colorTextSecondary,
                  transition: 'color 0.3s',
                  '&:hover': { color: e.colorPrimaryHover },
                },
                div: (0, S.Z)(
                  (0, S.Z)(
                    {
                      position: 'relative',
                      display: 'block',
                      minWidth: 32,
                      fontSize: e.fontSize,
                      lineHeight: e.lineHeight,
                      cursor: 'pointer',
                      '&:hover': {
                        color: e.colorPrimaryHover,
                        transition: 'color 0.3s',
                      },
                    },
                    'a:not('.concat(
                      r,
                      `-btn),
            > .anticon`,
                    ),
                    {
                      display: 'inline-block',
                      width: '100%',
                      color: e.colorTextSecondary,
                      lineHeight: '22px',
                      transition: 'color 0.3s',
                      '&:hover': { color: e.colorPrimaryHover },
                    },
                  ),
                  '.anticon',
                  { fontSize: e.cardActionIconSize, lineHeight: '22px' },
                ),
                '&:not(:last-child)': {
                  borderInlineEnd: ''
                    .concat(e.lineWidth, 'px ')
                    .concat(e.lineType, ' ')
                    .concat(e.colorSplit),
                },
              },
            ),
          );
        };
      function zn(t) {
        return (0, Gt.Xj)('ProCardActions', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t), cardActionIconSize: 16 },
          );
          return [Rn(n)];
        });
      }
      var x = m(97616),
        ht = function (e) {
          var n = e.actions,
            r = e.prefixCls,
            a = zn(r),
            o = a.wrapSSR,
            i = a.hashId;
          return Array.isArray(n) && n !== null && n !== void 0 && n.length
            ? o(
                (0, x.jsx)('ul', {
                  className: fe()(''.concat(r, '-actions'), i),
                  children: n.map(function (s, c) {
                    return (0,
                    x.jsx)('li', { style: { width: ''.concat(100 / n.length, '%'), padding: 0, margin: 0 }, className: fe()(''.concat(r, '-actions-item'), i), children: s }, 'action-'.concat(c));
                  }),
                }),
              )
            : o(
                (0, x.jsx)('ul', {
                  className: fe()(''.concat(r, '-actions'), i),
                  children: n,
                }),
              );
        },
        cn = ht,
        fn = m(56511),
        Vt = m(33404),
        Me = m(78456),
        en = new Me.E4('card-loading', {
          '0%': { backgroundPosition: '0 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' },
        }),
        qn = function (e) {
          return (0, S.Z)(
            {},
            e.componentCls,
            (0, S.Z)(
              (0, S.Z)(
                {
                  '&-loading': { overflow: 'hidden' },
                  '&-loading &-body': { userSelect: 'none' },
                },
                ''.concat(e.componentCls, '-loading-content'),
                { width: '100%', p: { marginBlock: 0, marginInline: 0 } },
              ),
              ''.concat(e.componentCls, '-loading-block'),
              {
                height: '14px',
                marginBlock: '4px',
                background:
                  'linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))',
                backgroundSize: '600% 600%',
                borderRadius: e.borderRadius,
                animationName: en,
                animationDuration: '1.4s',
                animationTimingFunction: 'ease',
                animationIterationCount: 'infinite',
              },
            ),
          );
        };
      function Nn(t) {
        return (0, Gt.Xj)('ProCardLoading', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [qn(n)];
        });
      }
      var Kn = function (e) {
          var n = e.style,
            r = e.prefix,
            a = Nn(r || 'ant-pro-card'),
            o = a.wrapSSR;
          return o(
            (0, x.jsxs)('div', {
              className: ''.concat(r, '-loading-content'),
              style: n,
              children: [
                (0, x.jsx)(fn.Z, {
                  gutter: 8,
                  children: (0, x.jsx)(Vt.Z, {
                    span: 22,
                    children: (0, x.jsx)('div', {
                      className: ''.concat(r, '-loading-block'),
                    }),
                  }),
                }),
                (0, x.jsxs)(fn.Z, {
                  gutter: 8,
                  children: [
                    (0, x.jsx)(Vt.Z, {
                      span: 8,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                    (0, x.jsx)(Vt.Z, {
                      span: 15,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                  ],
                }),
                (0, x.jsxs)(fn.Z, {
                  gutter: 8,
                  children: [
                    (0, x.jsx)(Vt.Z, {
                      span: 6,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                    (0, x.jsx)(Vt.Z, {
                      span: 18,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                  ],
                }),
                (0, x.jsxs)(fn.Z, {
                  gutter: 8,
                  children: [
                    (0, x.jsx)(Vt.Z, {
                      span: 13,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                    (0, x.jsx)(Vt.Z, {
                      span: 9,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                  ],
                }),
                (0, x.jsxs)(fn.Z, {
                  gutter: 8,
                  children: [
                    (0, x.jsx)(Vt.Z, {
                      span: 4,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                    (0, x.jsx)(Vt.Z, {
                      span: 3,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                    (0, x.jsx)(Vt.Z, {
                      span: 16,
                      children: (0, x.jsx)('div', {
                        className: ''.concat(r, '-loading-block'),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          );
        },
        On = Kn,
        sr = m(68200),
        cr = m(96865),
        er = m(89071),
        Zt = m(84425),
        pr = ['tab', 'children'],
        Or = [
          'key',
          'tab',
          'tabKey',
          'disabled',
          'destroyInactiveTabPane',
          'children',
          'className',
          'style',
          'cardProps',
        ];
      function fr(t) {
        return t.filter(function (e) {
          return e;
        });
      }
      function gr(t, e, n) {
        if (t)
          return t.map(function (a) {
            return (0,
            u.Z)((0, u.Z)({}, a), {}, { children: (0, x.jsx)(En, (0, u.Z)((0, u.Z)({}, n == null ? void 0 : n.cardProps), {}, { children: a.children })) });
          });
        (0, er.ET)(
          !n,
          'Tabs.TabPane is deprecated. Please use `items` directly.',
        );
        var r = (0, cr.Z)(e).map(function (a) {
          if (l.isValidElement(a)) {
            var o = a.key,
              i = a.props,
              s = i || {},
              c = s.tab,
              d = s.children,
              h = (0, Ie.Z)(s, pr),
              p = (0, u.Z)(
                (0, u.Z)({ key: String(o) }, h),
                {},
                {
                  children: (0, x.jsx)(
                    En,
                    (0, u.Z)(
                      (0, u.Z)({}, n == null ? void 0 : n.cardProps),
                      {},
                      { children: d },
                    ),
                  ),
                  label: c,
                },
              );
            return p;
          }
          return null;
        });
        return fr(r);
      }
      var Sr = function (e) {
          var n = (0, l.useContext)($e.ZP.ConfigContext),
            r = n.getPrefixCls;
          if (sr.Z.startsWith('5')) return (0, x.jsx)(x.Fragment, {});
          var a = e.key,
            o = e.tab,
            i = e.tabKey,
            s = e.disabled,
            c = e.destroyInactiveTabPane,
            d = e.children,
            h = e.className,
            p = e.style,
            v = e.cardProps,
            y = (0, Ie.Z)(e, Or),
            g = r('pro-card-tabpane'),
            Z = fe()(g, h);
          return (0, x.jsx)(
            Ge.Z.TabPane,
            (0, u.Z)(
              (0, u.Z)(
                {
                  tabKey: i,
                  tab: o,
                  className: Z,
                  style: p,
                  disabled: s,
                  destroyInactiveTabPane: c,
                },
                y,
              ),
              {},
              {
                children: (0, x.jsx)(
                  En,
                  (0, u.Z)((0, u.Z)({}, v), {}, { children: d }),
                ),
              },
            ),
            a,
          );
        },
        hr = Sr,
        tr = function (e) {
          return {
            backgroundColor: e.controlItemBgActive,
            borderColor: e.controlOutline,
          };
        },
        xr = function (e) {
          var n = e.componentCls;
          return (0, S.Z)(
            (0, S.Z)(
              (0, S.Z)(
                {},
                n,
                (0, u.Z)(
                  (0, u.Z)(
                    {
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box',
                      width: '100%',
                      marginBlock: 0,
                      marginInline: 0,
                      paddingBlock: 0,
                      paddingInline: 0,
                      backgroundColor: e.colorBgContainer,
                      borderRadius: e.borderRadius,
                      transition: 'all 0.3s',
                    },
                    Gt.Wf === null || Gt.Wf === void 0 ? void 0 : (0, Gt.Wf)(e),
                  ),
                  {},
                  (0, S.Z)(
                    (0, S.Z)(
                      (0, S.Z)(
                        (0, S.Z)(
                          (0, S.Z)(
                            (0, S.Z)(
                              (0, S.Z)(
                                (0, S.Z)(
                                  (0, S.Z)(
                                    (0, S.Z)(
                                      {
                                        '&-box-shadow': {
                                          boxShadow:
                                            '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
                                          borderColor: 'transparent',
                                        },
                                        '&-col': { width: '100%' },
                                        '&-border': {
                                          border: ''
                                            .concat(e.lineWidth, 'px ')
                                            .concat(e.lineType, ' ')
                                            .concat(e.colorSplit),
                                        },
                                        '&-hoverable': (0, S.Z)(
                                          {
                                            cursor: 'pointer',
                                            transition:
                                              'box-shadow 0.3s, border-color 0.3s',
                                            '&:hover': {
                                              borderColor: 'transparent',
                                              boxShadow:
                                                '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
                                            },
                                          },
                                          '&'.concat(n, '-checked:hover'),
                                          { borderColor: e.controlOutline },
                                        ),
                                        '&-checked': (0, u.Z)(
                                          (0, u.Z)({}, tr(e)),
                                          {},
                                          {
                                            '&::after': {
                                              visibility: 'visible',
                                              position: 'absolute',
                                              insetBlockStart: 2,
                                              insetInlineEnd: 2,
                                              opacity: 1,
                                              width: 0,
                                              height: 0,
                                              border: '6px solid '.concat(
                                                e.colorPrimary,
                                              ),
                                              borderBlockEnd:
                                                '6px solid transparent',
                                              borderInlineStart:
                                                '6px solid transparent',
                                              borderStartEndRadius: 2,
                                              content: '""',
                                            },
                                          },
                                        ),
                                        '&:focus': (0, u.Z)({}, tr(e)),
                                        '&&-ghost': (0, S.Z)(
                                          { backgroundColor: 'transparent' },
                                          '> '.concat(n),
                                          {
                                            '&-header': {
                                              paddingInlineEnd: 0,
                                              paddingBlockEnd: e.padding,
                                              paddingInlineStart: 0,
                                            },
                                            '&-body': {
                                              paddingBlock: 0,
                                              paddingInline: 0,
                                              backgroundColor: 'transparent',
                                            },
                                          },
                                        ),
                                        '&&-split > &-body': {
                                          paddingBlock: 0,
                                          paddingInline: 0,
                                        },
                                        '&&-contain-card > &-body': {
                                          display: 'flex',
                                        },
                                      },
                                      ''.concat(n, '-body-direction-column'),
                                      { flexDirection: 'column' },
                                    ),
                                    ''.concat(n, '-body-wrap'),
                                    { flexWrap: 'wrap' },
                                  ),
                                  '&&-collapse',
                                  (0, S.Z)({}, '> '.concat(n), {
                                    '&-header': {
                                      paddingBlockEnd: e.padding,
                                      borderBlockEnd: 0,
                                    },
                                    '&-body': { display: 'none' },
                                  }),
                                ),
                                ''.concat(n, '-header'),
                                {
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  paddingInline: e.paddingLG,
                                  paddingBlock: e.padding,
                                  paddingBlockEnd: 0,
                                  '&-border': {
                                    '&': { paddingBlockEnd: e.padding },
                                    borderBlockEnd: ''
                                      .concat(e.lineWidth, 'px ')
                                      .concat(e.lineType, ' ')
                                      .concat(e.colorSplit),
                                  },
                                  '&-collapsible': { cursor: 'pointer' },
                                },
                              ),
                              ''.concat(n, '-title'),
                              {
                                color: e.colorText,
                                fontWeight: 500,
                                fontSize: e.fontSizeLG,
                                lineHeight: e.lineHeight,
                              },
                            ),
                            ''.concat(n, '-extra'),
                            { color: e.colorText },
                          ),
                          ''.concat(n, '-type-inner'),
                          (0, S.Z)({}, ''.concat(n, '-header'), {
                            backgroundColor: e.colorFillAlter,
                          }),
                        ),
                        ''.concat(n, '-collapsible-icon'),
                        {
                          marginInlineEnd: e.marginXS,
                          color: e.colorIconHover,
                          ':hover': { color: e.colorPrimaryHover },
                          '& svg': {
                            transition: 'transform '.concat(
                              e.motionDurationMid,
                            ),
                          },
                        },
                      ),
                      ''.concat(n, '-body'),
                      {
                        display: 'block',
                        boxSizing: 'border-box',
                        height: '100%',
                        paddingInline: e.paddingLG,
                        paddingBlock: e.padding,
                        '&-center': {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      },
                    ),
                    '&&-size-small',
                    (0, S.Z)(
                      (0, S.Z)({}, n, {
                        '&-header': {
                          paddingInline: e.paddingSM,
                          paddingBlock: e.paddingXS,
                          paddingBlockEnd: 0,
                          '&-border': { paddingBlockEnd: e.paddingXS },
                        },
                        '&-title': { fontSize: e.fontSize },
                        '&-body': {
                          paddingInline: e.paddingSM,
                          paddingBlock: e.paddingSM,
                        },
                      }),
                      ''.concat(n, '-header').concat(n, '-header-collapsible'),
                      { paddingBlock: e.paddingXS },
                    ),
                  ),
                ),
              ),
              ''.concat(n, '-col'),
              (0, S.Z)(
                (0, S.Z)({}, '&'.concat(n, '-split-vertical'), {
                  borderInlineEnd: ''
                    .concat(e.lineWidth, 'px ')
                    .concat(e.lineType, ' ')
                    .concat(e.colorSplit),
                }),
                '&'.concat(n, '-split-horizontal'),
                {
                  borderBlockEnd: ''
                    .concat(e.lineWidth, 'px ')
                    .concat(e.lineType, ' ')
                    .concat(e.colorSplit),
                },
              ),
            ),
            ''.concat(n, '-tabs'),
            (0, S.Z)(
              (0, S.Z)(
                (0, S.Z)(
                  (0, S.Z)(
                    (0, S.Z)(
                      (0, S.Z)(
                        {},
                        ''
                          .concat(e.antCls, '-tabs-top > ')
                          .concat(e.antCls, '-tabs-nav'),
                        (0, S.Z)(
                          { marginBlockEnd: 0 },
                          ''.concat(e.antCls, '-tabs-nav-list'),
                          {
                            marginBlockStart: e.marginXS,
                            paddingInlineStart: e.padding,
                          },
                        ),
                      ),
                      ''
                        .concat(e.antCls, '-tabs-bottom > ')
                        .concat(e.antCls, '-tabs-nav'),
                      (0, S.Z)(
                        { marginBlockEnd: 0 },
                        ''.concat(e.antCls, '-tabs-nav-list'),
                        { paddingInlineStart: e.padding },
                      ),
                    ),
                    ''.concat(e.antCls, '-tabs-left'),
                    (0, S.Z)(
                      {},
                      ''.concat(e.antCls, '-tabs-content-holder'),
                      (0, S.Z)(
                        {},
                        ''.concat(e.antCls, '-tabs-content'),
                        (0, S.Z)({}, ''.concat(e.antCls, '-tabs-tabpane'), {
                          paddingInlineStart: 0,
                        }),
                      ),
                    ),
                  ),
                  ''
                    .concat(e.antCls, '-tabs-left > ')
                    .concat(e.antCls, '-tabs-nav'),
                  (0, S.Z)(
                    { marginInlineEnd: 0 },
                    ''.concat(e.antCls, '-tabs-nav-list'),
                    { paddingBlockStart: e.padding },
                  ),
                ),
                ''.concat(e.antCls, '-tabs-right'),
                (0, S.Z)(
                  {},
                  ''.concat(e.antCls, '-tabs-content-holder'),
                  (0, S.Z)(
                    {},
                    ''.concat(e.antCls, '-tabs-content'),
                    (0, S.Z)({}, ''.concat(e.antCls, '-tabs-tabpane'), {
                      paddingInlineStart: 0,
                    }),
                  ),
                ),
              ),
              ''
                .concat(e.antCls, '-tabs-right > ')
                .concat(e.antCls, '-tabs-nav'),
              (0, S.Z)({}, ''.concat(e.antCls, '-tabs-nav-list'), {
                paddingBlockStart: e.padding,
              }),
            ),
          );
        },
        $n = 24,
        yr = function (e, n) {
          var r = n.componentCls;
          return e === 0
            ? (0, S.Z)({}, ''.concat(r, '-col-0'), { display: 'none' })
            : (0, S.Z)({}, ''.concat(r, '-col-').concat(e), {
                flexShrink: 0,
                width: ''.concat((e / $n) * 100, '%'),
              });
        },
        Fr = function (e) {
          return Array($n + 1)
            .fill(1)
            .map(function (n, r) {
              return yr(r, e);
            });
        };
      function Xr(t) {
        return (0, Gt.Xj)('ProCard', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [xr(n), Fr(n)];
        });
      }
      var Gr = [
          'className',
          'style',
          'bodyStyle',
          'headStyle',
          'title',
          'subTitle',
          'extra',
          'wrap',
          'layout',
          'loading',
          'gutter',
          'tooltip',
          'split',
          'headerBordered',
          'bordered',
          'boxShadow',
          'children',
          'size',
          'actions',
          'ghost',
          'hoverable',
          'direction',
          'collapsed',
          'collapsible',
          'collapsibleIconRender',
          'colStyle',
          'defaultCollapsed',
          'onCollapse',
          'checked',
          'onChecked',
          'tabs',
          'type',
        ],
        Mr = l.forwardRef(function (t, e) {
          var n,
            r = t.className,
            a = t.style,
            o = t.bodyStyle,
            i = t.headStyle,
            s = t.title,
            c = t.subTitle,
            d = t.extra,
            h = t.wrap,
            p = h === void 0 ? !1 : h,
            v = t.layout,
            y = t.loading,
            g = t.gutter,
            Z = g === void 0 ? 0 : g,
            b = t.tooltip,
            C = t.split,
            R = t.headerBordered,
            L = R === void 0 ? !1 : R,
            O = t.bordered,
            K = O === void 0 ? !1 : O,
            q = t.boxShadow,
            T = q === void 0 ? !1 : q,
            X = t.children,
            z = t.size,
            M = t.actions,
            $ = t.ghost,
            j = $ === void 0 ? !1 : $,
            W = t.hoverable,
            N = W === void 0 ? !1 : W,
            E = t.direction,
            D = t.collapsed,
            F = t.collapsible,
            Y = F === void 0 ? !1 : F,
            H = t.collapsibleIconRender,
            V = t.colStyle,
            Q = t.defaultCollapsed,
            ie = Q === void 0 ? !1 : Q,
            pe = t.onCollapse,
            Ce = t.checked,
            ae = t.onChecked,
            xe = t.tabs,
            ne = t.type,
            se = (0, Ie.Z)(t, Gr),
            Ze = (0, l.useContext)($e.ZP.ConfigContext),
            Ue = Ze.getPrefixCls,
            ue = (0, Et.Z)() || {
              lg: !0,
              md: !0,
              sm: !0,
              xl: !1,
              xs: !1,
              xxl: !1,
            },
            Ne = (0, J.Z)(ie, { value: D, onChange: pe }),
            we = (0, de.Z)(Ne, 2),
            ee = we[0],
            Fe = we[1],
            rt = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
            Pe = gr(xe == null ? void 0 : xe.items, X, xe),
            _ = function (Xe) {
              var Ot = [0, 0],
                ct = Array.isArray(Xe) ? Xe : [Xe, 0];
              return (
                ct.forEach(function (Mn, Pn) {
                  if ((0, it.Z)(Mn) === 'object')
                    for (var Xt = 0; Xt < rt.length; Xt += 1) {
                      var wn = rt[Xt];
                      if (ue[wn] && Mn[wn] !== void 0) {
                        Ot[Pn] = Mn[wn];
                        break;
                      }
                    }
                  else Ot[Pn] = Mn || 0;
                }),
                Ot
              );
            },
            ge = function (Xe, Ot) {
              return Xe ? Ot : {};
            },
            Ae = function (Xe) {
              var Ot = Xe;
              if ((0, it.Z)(Xe) === 'object')
                for (var ct = 0; ct < rt.length; ct += 1) {
                  var Mn = rt[ct];
                  if (
                    ue != null &&
                    ue[Mn] &&
                    (Xe == null ? void 0 : Xe[Mn]) !== void 0
                  ) {
                    Ot = Xe[Mn];
                    break;
                  }
                }
              var Pn = ge(typeof Ot == 'string' && /\d%|\dpx/i.test(Ot), {
                width: Ot,
                flexShrink: 0,
              });
              return { span: Ot, colSpanStyle: Pn };
            },
            je = Ue('pro-card'),
            dt = Xr(je),
            Re = dt.wrapSSR,
            xt = dt.hashId,
            on = _(Z),
            yn = (0, de.Z)(on, 2),
            bn = yn[0],
            Ln = yn[1],
            lr = !1,
            _e = l.Children.toArray(X),
            Wt = _e.map(function (tn, Xe) {
              var Ot;
              if (
                tn != null &&
                (Ot = tn.type) !== null &&
                Ot !== void 0 &&
                Ot.isProCard
              ) {
                lr = !0;
                var ct = tn.props.colSpan,
                  Mn = Ae(ct),
                  Pn = Mn.span,
                  Xt = Mn.colSpanStyle,
                  wn = fe()(
                    [''.concat(je, '-col')],
                    xt,
                    (0, S.Z)(
                      (0, S.Z)(
                        (0, S.Z)(
                          {},
                          ''.concat(je, '-split-vertical'),
                          C === 'vertical' && Xe !== _e.length - 1,
                        ),
                        ''.concat(je, '-split-horizontal'),
                        C === 'horizontal' && Xe !== _e.length - 1,
                      ),
                      ''.concat(je, '-col-').concat(Pn),
                      typeof Pn == 'number' && Pn >= 0 && Pn <= 24,
                    ),
                  ),
                  Dn = Re(
                    (0, x.jsx)('div', {
                      style: (0, u.Z)(
                        (0, u.Z)(
                          (0, u.Z)(
                            (0, u.Z)({}, Xt),
                            ge(bn > 0, {
                              paddingInlineEnd: bn / 2,
                              paddingInlineStart: bn / 2,
                            }),
                          ),
                          ge(Ln > 0, {
                            paddingBlockStart: Ln / 2,
                            paddingBlockEnd: Ln / 2,
                          }),
                        ),
                        V,
                      ),
                      className: wn,
                      children: l.cloneElement(tn),
                    }),
                  );
                return l.cloneElement(Dn, {
                  key: 'pro-card-col-'.concat(
                    (tn == null ? void 0 : tn.key) || Xe,
                  ),
                });
              }
              return tn;
            }),
            Qt = fe()(
              ''.concat(je),
              r,
              xt,
              ((n = {}),
              (0, S.Z)(
                (0, S.Z)(
                  (0, S.Z)(
                    (0, S.Z)(
                      (0, S.Z)(
                        (0, S.Z)(
                          (0, S.Z)(
                            (0, S.Z)(
                              (0, S.Z)(
                                (0, S.Z)(n, ''.concat(je, '-border'), K),
                                ''.concat(je, '-box-shadow'),
                                T,
                              ),
                              ''.concat(je, '-contain-card'),
                              lr,
                            ),
                            ''.concat(je, '-loading'),
                            y,
                          ),
                          ''.concat(je, '-split'),
                          C === 'vertical' || C === 'horizontal',
                        ),
                        ''.concat(je, '-ghost'),
                        j,
                      ),
                      ''.concat(je, '-hoverable'),
                      N,
                    ),
                    ''.concat(je, '-size-').concat(z),
                    z,
                  ),
                  ''.concat(je, '-type-').concat(ne),
                  ne,
                ),
                ''.concat(je, '-collapse'),
                ee,
              ),
              (0, S.Z)(n, ''.concat(je, '-checked'), Ce)),
            ),
            Sn = fe()(
              ''.concat(je, '-body'),
              xt,
              (0, S.Z)(
                (0, S.Z)(
                  (0, S.Z)({}, ''.concat(je, '-body-center'), v === 'center'),
                  ''.concat(je, '-body-direction-column'),
                  C === 'horizontal' || E === 'column',
                ),
                ''.concat(je, '-body-wrap'),
                p && lr,
              ),
            ),
            sn = o,
            qt = l.isValidElement(y)
              ? y
              : (0, x.jsx)(On, {
                  prefix: je,
                  style:
                    (o == null ? void 0 : o.padding) === 0 ||
                    (o == null ? void 0 : o.padding) === '0px'
                      ? { padding: 24 }
                      : void 0,
                }),
            un =
              Y &&
              D === void 0 &&
              (H
                ? H({ collapsed: ee })
                : (0, x.jsx)(Ct.Z, {
                    rotate: ee ? void 0 : 90,
                    className: ''
                      .concat(je, '-collapsible-icon ')
                      .concat(xt)
                      .trim(),
                  }));
          return Re(
            (0, x.jsxs)(
              'div',
              (0, u.Z)(
                (0, u.Z)(
                  {
                    className: Qt,
                    style: a,
                    ref: e,
                    onClick: function (Xe) {
                      var Ot;
                      ae == null || ae(Xe),
                        se == null ||
                          (Ot = se.onClick) === null ||
                          Ot === void 0 ||
                          Ot.call(se, Xe);
                    },
                  },
                  (0, ve.Z)(se, ['prefixCls', 'colSpan']),
                ),
                {},
                {
                  children: [
                    (s || d || un) &&
                      (0, x.jsxs)('div', {
                        className: fe()(
                          ''.concat(je, '-header'),
                          xt,
                          (0, S.Z)(
                            (0, S.Z)(
                              {},
                              ''.concat(je, '-header-border'),
                              L || ne === 'inner',
                            ),
                            ''.concat(je, '-header-collapsible'),
                            un,
                          ),
                        ),
                        style: i,
                        onClick: function () {
                          un && Fe(!ee);
                        },
                        children: [
                          (0, x.jsxs)('div', {
                            className: ''
                              .concat(je, '-title ')
                              .concat(xt)
                              .trim(),
                            children: [
                              un,
                              (0, x.jsx)(Bt.G, {
                                label: s,
                                tooltip: b,
                                subTitle: c,
                              }),
                            ],
                          }),
                          d &&
                            (0, x.jsx)('div', {
                              className: ''
                                .concat(je, '-extra ')
                                .concat(xt)
                                .trim(),
                              onClick: function (Xe) {
                                return Xe.stopPropagation();
                              },
                              children: d,
                            }),
                        ],
                      }),
                    xe
                      ? (0, x.jsx)('div', {
                          className: ''.concat(je, '-tabs ').concat(xt).trim(),
                          children: (0, x.jsx)(
                            Ge.Z,
                            (0, u.Z)(
                              (0, u.Z)(
                                { onChange: xe.onChange },
                                (0, ve.Z)(xe, ['cardProps']),
                              ),
                              {},
                              { items: Pe, children: y ? qt : X },
                            ),
                          ),
                        })
                      : (0, x.jsx)('div', {
                          className: Sn,
                          style: sn,
                          children: y ? qt : Wt,
                        }),
                    M ? (0, x.jsx)(cn, { actions: M, prefixCls: je }) : null,
                  ],
                },
              ),
            ),
          );
        }),
        En = Mr,
        ea = function (e) {
          var n = e.componentCls;
          return (0, S.Z)({}, n, {
            '&-divider': {
              flex: 'none',
              width: e.lineWidth,
              marginInline: e.marginXS,
              marginBlock: e.marginLG,
              backgroundColor: e.colorSplit,
              '&-horizontal': {
                width: 'initial',
                height: e.lineWidth,
                marginInline: e.marginLG,
                marginBlock: e.marginXS,
              },
            },
            '&&-size-small &-divider': {
              marginBlock: e.marginLG,
              marginInline: e.marginXS,
              '&-horizontal': {
                marginBlock: e.marginXS,
                marginInline: e.marginLG,
              },
            },
          });
        };
      function Yr(t) {
        return (0, Gt.Xj)('ProCardDivider', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [ea(n)];
        });
      }
      var ta = function (e) {
          var n = (0, l.useContext)($e.ZP.ConfigContext),
            r = n.getPrefixCls,
            a = r('pro-card'),
            o = ''.concat(a, '-divider'),
            i = Yr(a),
            s = i.wrapSSR,
            c = i.hashId,
            d = e.className,
            h = e.style,
            p = h === void 0 ? {} : h,
            v = e.type,
            y = fe()(o, d, c, (0, S.Z)({}, ''.concat(o, '-').concat(v), v));
          return s((0, x.jsx)('div', { className: y, style: p }));
        },
        Pr = ta,
        Fn = function (e) {
          return (0, x.jsx)(En, (0, u.Z)({ bodyStyle: { padding: 0 } }, e));
        },
        _n = En;
      (_n.isProCard = !0),
        (_n.Divider = Pr),
        (_n.TabPane = hr),
        (_n.Group = Fn);
      var Cr = _n,
        Br = Cr,
        Lr = m(79341),
        Dr = m(10244),
        gn = m(91496),
        k = m(63546),
        ye = m(28520),
        tt = m(88387),
        Je = m(88815),
        Rt = m(69124),
        It = {},
        kt = 'rc-table-internal-hook',
        Dt = m(33052),
        rn = m(82105),
        Tt = m(23636),
        zt = m(41654);
      function Yt(t) {
        var e = l.createContext(void 0),
          n = function (a) {
            var o = a.value,
              i = a.children,
              s = l.useRef(o);
            s.current = o;
            var c = l.useState(function () {
                return {
                  getValue: function () {
                    return s.current;
                  },
                  listeners: new Set(),
                };
              }),
              d = (0, de.Z)(c, 1),
              h = d[0];
            return (
              (0, rn.Z)(
                function () {
                  (0, zt.unstable_batchedUpdates)(function () {
                    h.listeners.forEach(function (p) {
                      p(o);
                    });
                  });
                },
                [o],
              ),
              l.createElement(e.Provider, { value: h }, i)
            );
          };
        return { Context: e, Provider: n, defaultValue: t };
      }
      function Pt(t, e) {
        var n = (0, Dt.Z)(
            typeof e == 'function'
              ? e
              : function (p) {
                  if (e === void 0) return p;
                  if (!Array.isArray(e)) return p[e];
                  var v = {};
                  return (
                    e.forEach(function (y) {
                      v[y] = p[y];
                    }),
                    v
                  );
                },
          ),
          r = l.useContext(t == null ? void 0 : t.Context),
          a = r || {},
          o = a.listeners,
          i = a.getValue,
          s = l.useRef();
        s.current = n(r ? i() : t == null ? void 0 : t.defaultValue);
        var c = l.useState({}),
          d = (0, de.Z)(c, 2),
          h = d[1];
        return (
          (0, rn.Z)(
            function () {
              if (!r) return;
              function p(v) {
                var y = n(v);
                (0, Tt.Z)(s.current, y, !0) || h({});
              }
              return (
                o.add(p),
                function () {
                  o.delete(p);
                }
              );
            },
            [r],
          ),
          s.current
        );
      }
      var Qe = m(8429),
        Kt = m(64785);
      function Ut() {
        var t = l.createContext(null);
        function e() {
          return l.useContext(t);
        }
        function n(a, o) {
          var i = (0, Kt.Yr)(a),
            s = function (d, h) {
              var p = i ? { ref: h } : {},
                v = l.useRef(0),
                y = l.useRef(d),
                g = e();
              return g !== null
                ? l.createElement(a, (0, Qe.Z)({}, d, p))
                : ((!o || o(y.current, d)) && (v.current += 1),
                  (y.current = d),
                  l.createElement(
                    t.Provider,
                    { value: v.current },
                    l.createElement(a, (0, Qe.Z)({}, d, p)),
                  ));
            };
          return i ? l.forwardRef(s) : s;
        }
        function r(a, o) {
          var i = (0, Kt.Yr)(a),
            s = function (d, h) {
              var p = i ? { ref: h } : {};
              return e(), l.createElement(a, (0, Qe.Z)({}, d, p));
            };
          return i ? l.memo(l.forwardRef(s), o) : l.memo(s, o);
        }
        return { makeImmutable: n, responseImmutable: r, useImmutableMark: e };
      }
      var ut = Ut(),
        ft = ut.makeImmutable,
        $t = ut.responseImmutable,
        Ye = ut.useImmutableMark,
        We = Ut(),
        Tn = We.makeImmutable,
        dn = We.responseImmutable,
        An = We.useImmutableMark,
        xn = Yt(),
        At = xn;
      function hn(t, e) {
        var n = React.useRef(0);
        n.current += 1;
        var r = React.useRef(t),
          a = [];
        Object.keys(t || {}).map(function (i) {
          var s;
          (t == null ? void 0 : t[i]) !==
            ((s = r.current) === null || s === void 0 ? void 0 : s[i]) &&
            a.push(i);
        }),
          (r.current = t);
        var o = React.useRef([]);
        return (
          a.length && (o.current = a),
          React.useDebugValue(n.current),
          React.useDebugValue(o.current.join(', ')),
          e && console.log(''.concat(e, ':'), n.current, o.current),
          n.current
        );
      }
      var Cn = null,
        nr = null,
        Zr = m(54768),
        rr = m(82063),
        Jr = l.createContext({ renderWithProps: !1 }),
        wr = Jr,
        f = 'RC_TABLE_KEY';
      function I(t) {
        return t == null ? [] : Array.isArray(t) ? t : [t];
      }
      function U(t) {
        var e = [],
          n = {};
        return (
          t.forEach(function (r) {
            for (
              var a = r || {},
                o = a.key,
                i = a.dataIndex,
                s = o || I(i).join('-') || f;
              n[s];

            )
              s = ''.concat(s, '_next');
            (n[s] = !0), e.push(s);
          }),
          e
        );
      }
      function te(t) {
        return t != null;
      }
      function De(t) {
        return (
          t &&
          (0, it.Z)(t) === 'object' &&
          !Array.isArray(t) &&
          !l.isValidElement(t)
        );
      }
      function et(t, e, n, r, a, o) {
        var i = l.useContext(wr),
          s = An(),
          c = (0, Zr.Z)(
            function () {
              if (te(r)) return [r];
              var d = e == null || e === '' ? [] : Array.isArray(e) ? e : [e],
                h = (0, rr.Z)(t, d),
                p = h,
                v = void 0;
              if (a) {
                var y = a(h, t, n);
                De(y)
                  ? ((p = y.children), (v = y.props), (i.renderWithProps = !0))
                  : (p = y);
              }
              return [p, v];
            },
            [s, t, r, e, a, n],
            function (d, h) {
              if (o) {
                var p = (0, de.Z)(d, 2),
                  v = p[1],
                  y = (0, de.Z)(h, 2),
                  g = y[1];
                return o(g, v);
              }
              return i.renderWithProps ? !0 : !(0, Tt.Z)(d, h, !0);
            },
          );
        return c;
      }
      function Te(t, e, n, r) {
        var a = t + e - 1;
        return t <= r && a >= n;
      }
      function me(t, e) {
        return Pt(At, function (n) {
          var r = Te(t, e || 1, n.hoverStartRow, n.hoverEndRow);
          return [r, n.onHover];
        });
      }
      var he = m(81523),
        re = function (e) {
          var n = e.ellipsis,
            r = e.rowType,
            a = e.children,
            o,
            i = n === !0 ? { showTitle: !0 } : n;
          return (
            i &&
              (i.showTitle || r === 'header') &&
              (typeof a == 'string' || typeof a == 'number'
                ? (o = a.toString())
                : l.isValidElement(a) &&
                  typeof a.props.children == 'string' &&
                  (o = a.props.children)),
            o
          );
        };
      function Se(t) {
        var e,
          n,
          r,
          a,
          o,
          i,
          s,
          c,
          d = t.component,
          h = t.children,
          p = t.ellipsis,
          v = t.scope,
          y = t.prefixCls,
          g = t.className,
          Z = t.align,
          b = t.record,
          C = t.render,
          R = t.dataIndex,
          L = t.renderIndex,
          O = t.shouldCellUpdate,
          K = t.index,
          q = t.rowType,
          T = t.colSpan,
          X = t.rowSpan,
          z = t.fixLeft,
          M = t.fixRight,
          $ = t.firstFixLeft,
          j = t.lastFixLeft,
          W = t.firstFixRight,
          N = t.lastFixRight,
          E = t.appendNode,
          D = t.additionalProps,
          F = D === void 0 ? {} : D,
          Y = t.isSticky,
          H = ''.concat(y, '-cell'),
          V = Pt(At, ['supportSticky', 'allColumnsFixedLeft', 'rowHoverable']),
          Q = V.supportSticky,
          ie = V.allColumnsFixedLeft,
          pe = V.rowHoverable,
          Ce = et(b, R, L, h, C, O),
          ae = (0, de.Z)(Ce, 2),
          xe = ae[0],
          ne = ae[1],
          se = {},
          Ze = typeof z == 'number' && Q,
          Ue = typeof M == 'number' && Q;
        Ze && ((se.position = 'sticky'), (se.left = z)),
          Ue && ((se.position = 'sticky'), (se.right = M));
        var ue =
            (e =
              (n =
                (r = ne == null ? void 0 : ne.colSpan) !== null && r !== void 0
                  ? r
                  : F.colSpan) !== null && n !== void 0
                ? n
                : T) !== null && e !== void 0
              ? e
              : 1,
          Ne =
            (a =
              (o =
                (i = ne == null ? void 0 : ne.rowSpan) !== null && i !== void 0
                  ? i
                  : F.rowSpan) !== null && o !== void 0
                ? o
                : X) !== null && a !== void 0
              ? a
              : 1,
          we = me(K, Ne),
          ee = (0, de.Z)(we, 2),
          Fe = ee[0],
          rt = ee[1],
          Pe = (0, he.zX)(function (xt) {
            var on;
            b && rt(K, K + Ne - 1),
              F == null ||
                (on = F.onMouseEnter) === null ||
                on === void 0 ||
                on.call(F, xt);
          }),
          _ = (0, he.zX)(function (xt) {
            var on;
            b && rt(-1, -1),
              F == null ||
                (on = F.onMouseLeave) === null ||
                on === void 0 ||
                on.call(F, xt);
          });
        if (ue === 0 || Ne === 0) return null;
        var ge =
            (s = F.title) !== null && s !== void 0
              ? s
              : re({ rowType: q, ellipsis: p, children: xe }),
          Ae = fe()(
            H,
            g,
            ((c = {}),
            (0, S.Z)(c, ''.concat(H, '-fix-left'), Ze && Q),
            (0, S.Z)(c, ''.concat(H, '-fix-left-first'), $ && Q),
            (0, S.Z)(c, ''.concat(H, '-fix-left-last'), j && Q),
            (0, S.Z)(c, ''.concat(H, '-fix-left-all'), j && ie && Q),
            (0, S.Z)(c, ''.concat(H, '-fix-right'), Ue && Q),
            (0, S.Z)(c, ''.concat(H, '-fix-right-first'), W && Q),
            (0, S.Z)(c, ''.concat(H, '-fix-right-last'), N && Q),
            (0, S.Z)(c, ''.concat(H, '-ellipsis'), p),
            (0, S.Z)(c, ''.concat(H, '-with-append'), E),
            (0, S.Z)(c, ''.concat(H, '-fix-sticky'), (Ze || Ue) && Y && Q),
            (0, S.Z)(c, ''.concat(H, '-row-hover'), !ne && Fe),
            c),
            F.className,
            ne == null ? void 0 : ne.className,
          ),
          je = {};
        Z && (je.textAlign = Z);
        var dt = (0, u.Z)(
            (0, u.Z)((0, u.Z)((0, u.Z)({}, se), F.style), je),
            ne == null ? void 0 : ne.style,
          ),
          Re = xe;
        return (
          (0, it.Z)(Re) === 'object' &&
            !Array.isArray(Re) &&
            !l.isValidElement(Re) &&
            (Re = null),
          p &&
            (j || W) &&
            (Re = l.createElement(
              'span',
              { className: ''.concat(H, '-content') },
              Re,
            )),
          l.createElement(
            d,
            (0, Qe.Z)({}, ne, F, {
              className: Ae,
              style: dt,
              title: ge,
              scope: v,
              onMouseEnter: pe ? Pe : void 0,
              onMouseLeave: pe ? _ : void 0,
              colSpan: ue !== 1 ? ue : null,
              rowSpan: Ne !== 1 ? Ne : null,
            }),
            E,
            Re,
          )
        );
      }
      var P = l.memo(Se);
      function w(t, e, n, r, a) {
        var o = n[t] || {},
          i = n[e] || {},
          s,
          c;
        o.fixed === 'left'
          ? (s = r.left[a === 'rtl' ? e : t])
          : i.fixed === 'right' && (c = r.right[a === 'rtl' ? t : e]);
        var d = !1,
          h = !1,
          p = !1,
          v = !1,
          y = n[e + 1],
          g = n[t - 1],
          Z =
            (y && !y.fixed) ||
            (g && !g.fixed) ||
            n.every(function (O) {
              return O.fixed === 'left';
            });
        if (a === 'rtl') {
          if (s !== void 0) {
            var b = g && g.fixed === 'left';
            v = !b && Z;
          } else if (c !== void 0) {
            var C = y && y.fixed === 'right';
            p = !C && Z;
          }
        } else if (s !== void 0) {
          var R = y && y.fixed === 'left';
          d = !R && Z;
        } else if (c !== void 0) {
          var L = g && g.fixed === 'right';
          h = !L && Z;
        }
        return {
          fixLeft: s,
          fixRight: c,
          lastFixLeft: d,
          firstFixRight: h,
          lastFixRight: p,
          firstFixLeft: v,
          isSticky: r.isSticky,
        };
      }
      var B = l.createContext({}),
        A = B;
      function G(t) {
        var e = t.className,
          n = t.index,
          r = t.children,
          a = t.colSpan,
          o = a === void 0 ? 1 : a,
          i = t.rowSpan,
          s = t.align,
          c = Pt(At, ['prefixCls', 'direction']),
          d = c.prefixCls,
          h = c.direction,
          p = l.useContext(A),
          v = p.scrollColumnIndex,
          y = p.stickyOffsets,
          g = p.flattenColumns,
          Z = n + o - 1,
          b = Z + 1 === v ? o + 1 : o,
          C = w(n, n + b - 1, g, y, h);
        return l.createElement(
          P,
          (0, Qe.Z)(
            {
              className: e,
              index: n,
              component: 'td',
              prefixCls: d,
              record: null,
              dataIndex: null,
              align: s,
              colSpan: b,
              rowSpan: i,
              render: function () {
                return r;
              },
            },
            C,
          ),
        );
      }
      var be = ['children'];
      function ce(t) {
        var e = t.children,
          n = (0, Ie.Z)(t, be);
        return l.createElement('tr', n, e);
      }
      function Be(t) {
        var e = t.children;
        return e;
      }
      (Be.Row = ce), (Be.Cell = G);
      var at = Be;
      function Ke(t) {
        var e = t.children,
          n = t.stickyOffsets,
          r = t.flattenColumns,
          a = Pt(At, 'prefixCls'),
          o = r.length - 1,
          i = r[o],
          s = l.useMemo(
            function () {
              return {
                stickyOffsets: n,
                flattenColumns: r,
                scrollColumnIndex: i != null && i.scrollbar ? o : null,
              };
            },
            [i, r, o, n],
          );
        return l.createElement(
          A.Provider,
          { value: s },
          l.createElement('tfoot', { className: ''.concat(a, '-summary') }, e),
        );
      }
      var ze = dn(Ke),
        lt = at,
        wt = m(31774),
        Nt = m(77622),
        Jt = m(44858),
        ot = m(58905),
        Lt = m(87569);
      function ln(t, e, n, r, a, o, i) {
        t.push({ record: e, indent: n, index: i });
        var s = o(e),
          c = a == null ? void 0 : a.has(s);
        if (e && Array.isArray(e[r]) && c)
          for (var d = 0; d < e[r].length; d += 1)
            ln(t, e[r][d], n + 1, r, a, o, d);
      }
      function st(t, e, n, r) {
        var a = l.useMemo(
          function () {
            if (n != null && n.size) {
              for (
                var o = [], i = 0;
                i < (t == null ? void 0 : t.length);
                i += 1
              ) {
                var s = t[i];
                ln(o, s, 0, e, n, r, i);
              }
              return o;
            }
            return t == null
              ? void 0
              : t.map(function (c, d) {
                  return { record: c, indent: 0, index: d };
                });
          },
          [t, e, n, r],
        );
        return a;
      }
      function nt(t, e, n, r) {
        var a = Pt(At, [
            'prefixCls',
            'fixedInfoList',
            'flattenColumns',
            'expandableType',
            'expandRowByClick',
            'onTriggerExpand',
            'rowClassName',
            'expandedRowClassName',
            'indentSize',
            'expandIcon',
            'expandedRowRender',
            'expandIconColumnIndex',
            'expandedKeys',
            'childrenColumnName',
            'rowExpandable',
            'onRow',
          ]),
          o = a.flattenColumns,
          i = a.expandableType,
          s = a.expandedKeys,
          c = a.childrenColumnName,
          d = a.onTriggerExpand,
          h = a.rowExpandable,
          p = a.onRow,
          v = a.expandRowByClick,
          y = a.rowClassName,
          g = i === 'nest',
          Z = i === 'row' && (!h || h(t)),
          b = Z || g,
          C = s && s.has(e),
          R = c && t && t[c],
          L = (0, he.zX)(d),
          O = p == null ? void 0 : p(t, n),
          K = O == null ? void 0 : O.onClick,
          q = function (M) {
            v && b && d(t, M);
            for (
              var $ = arguments.length, j = new Array($ > 1 ? $ - 1 : 0), W = 1;
              W < $;
              W++
            )
              j[W - 1] = arguments[W];
            K == null || K.apply(void 0, [M].concat(j));
          },
          T;
        typeof y == 'string'
          ? (T = y)
          : typeof y == 'function' && (T = y(t, n, r));
        var X = U(o);
        return (0, u.Z)(
          (0, u.Z)({}, a),
          {},
          {
            columnsKey: X,
            nestExpandable: g,
            expanded: C,
            hasNestChildren: R,
            record: t,
            onTriggerExpand: L,
            rowSupportExpand: Z,
            expandable: b,
            rowProps: (0, u.Z)(
              (0, u.Z)({}, O),
              {},
              {
                className: fe()(T, O == null ? void 0 : O.className),
                onClick: q,
              },
            ),
          },
        );
      }
      function qe(t) {
        var e = t.prefixCls,
          n = t.children,
          r = t.component,
          a = t.cellComponent,
          o = t.className,
          i = t.expanded,
          s = t.colSpan,
          c = t.isEmpty,
          d = Pt(At, [
            'scrollbarSize',
            'fixHeader',
            'fixColumn',
            'componentWidth',
            'horizonScroll',
          ]),
          h = d.scrollbarSize,
          p = d.fixHeader,
          v = d.fixColumn,
          y = d.componentWidth,
          g = d.horizonScroll,
          Z = n;
        return (
          (c ? g && y : v) &&
            (Z = l.createElement(
              'div',
              {
                style: {
                  width: y - (p ? h : 0),
                  position: 'sticky',
                  left: 0,
                  overflow: 'hidden',
                },
                className: ''.concat(e, '-expanded-row-fixed'),
              },
              Z,
            )),
          l.createElement(
            r,
            { className: o, style: { display: i ? null : 'none' } },
            l.createElement(P, { component: a, prefixCls: e, colSpan: s }, Z),
          )
        );
      }
      var Ve = qe;
      function St(t, e, n, r, a) {
        var o = t.record,
          i = t.prefixCls,
          s = t.columnsKey,
          c = t.fixedInfoList,
          d = t.expandIconColumnIndex,
          h = t.nestExpandable,
          p = t.indentSize,
          v = t.expandIcon,
          y = t.expanded,
          g = t.hasNestChildren,
          Z = t.onTriggerExpand,
          b = s[n],
          C = c[n],
          R;
        n === (d || 0) &&
          h &&
          (R = l.createElement(
            l.Fragment,
            null,
            l.createElement('span', {
              style: { paddingLeft: ''.concat(p * r, 'px') },
              className: ''.concat(i, '-row-indent indent-level-').concat(r),
            }),
            v({
              prefixCls: i,
              expanded: y,
              expandable: g,
              record: o,
              onExpand: Z,
            }),
          ));
        var L;
        return (
          e.onCell && (L = e.onCell(o, a)),
          {
            key: b,
            fixedInfo: C,
            appendCellNode: R,
            additionalCellProps: L || {},
          }
        );
      }
      function an(t) {
        var e = t.className,
          n = t.style,
          r = t.record,
          a = t.index,
          o = t.renderIndex,
          i = t.rowKey,
          s = t.indent,
          c = s === void 0 ? 0 : s,
          d = t.rowComponent,
          h = t.cellComponent,
          p = t.scopeCellComponent,
          v = nt(r, i, a, c),
          y = v.prefixCls,
          g = v.flattenColumns,
          Z = v.expandedRowClassName,
          b = v.expandedRowRender,
          C = v.rowProps,
          R = v.expanded,
          L = v.rowSupportExpand,
          O = l.useRef(!1);
        O.current || (O.current = R);
        var K = Z && Z(r, a, c),
          q = l.createElement(
            d,
            (0, Qe.Z)({}, C, {
              'data-row-key': i,
              className: fe()(
                e,
                ''.concat(y, '-row'),
                ''.concat(y, '-row-level-').concat(c),
                C == null ? void 0 : C.className,
                c >= 1 ? K : '',
              ),
              style: (0, u.Z)((0, u.Z)({}, n), C == null ? void 0 : C.style),
            }),
            g.map(function (z, M) {
              var $ = z.render,
                j = z.dataIndex,
                W = z.className,
                N = St(v, z, M, c, a),
                E = N.key,
                D = N.fixedInfo,
                F = N.appendCellNode,
                Y = N.additionalCellProps;
              return l.createElement(
                P,
                (0, Qe.Z)(
                  {
                    className: W,
                    ellipsis: z.ellipsis,
                    align: z.align,
                    scope: z.rowScope,
                    component: z.rowScope ? p : h,
                    prefixCls: y,
                    key: E,
                    record: r,
                    index: a,
                    renderIndex: o,
                    dataIndex: j,
                    render: $,
                    shouldCellUpdate: z.shouldCellUpdate,
                  },
                  D,
                  { appendNode: F, additionalProps: Y },
                ),
              );
            }),
          ),
          T;
        if (L && (O.current || R)) {
          var X = b(r, a, c + 1, R);
          T = l.createElement(
            Ve,
            {
              expanded: R,
              className: fe()(
                ''.concat(y, '-expanded-row'),
                ''.concat(y, '-expanded-row-level-').concat(c + 1),
                K,
              ),
              prefixCls: y,
              component: d,
              cellComponent: h,
              colSpan: g.length,
              isEmpty: !1,
            },
            X,
          );
        }
        return l.createElement(l.Fragment, null, q, T);
      }
      var vt = dn(an);
      function pt(t) {
        var e = t.columnKey,
          n = t.onColumnResize,
          r = l.useRef();
        return (
          l.useEffect(function () {
            r.current && n(e, r.current.offsetWidth);
          }, []),
          l.createElement(
            wt.Z,
            { data: e },
            l.createElement(
              'td',
              { ref: r, style: { padding: 0, border: 0, height: 0 } },
              l.createElement(
                'div',
                { style: { height: 0, overflow: 'hidden' } },
                '\xA0',
              ),
            ),
          )
        );
      }
      function gt(t) {
        var e = t.prefixCls,
          n = t.columnsKey,
          r = t.onColumnResize;
        return l.createElement(
          'tr',
          {
            'aria-hidden': 'true',
            className: ''.concat(e, '-measure-row'),
            style: { height: 0, fontSize: 0 },
          },
          l.createElement(
            wt.Z.Collection,
            {
              onBatchResize: function (o) {
                o.forEach(function (i) {
                  var s = i.data,
                    c = i.size;
                  r(s, c.offsetWidth);
                });
              },
            },
            n.map(function (a) {
              return l.createElement(pt, {
                key: a,
                columnKey: a,
                onColumnResize: r,
              });
            }),
          ),
        );
      }
      function Ft(t) {
        var e = t.data,
          n = t.measureColumnWidth,
          r = Pt(At, [
            'prefixCls',
            'getComponent',
            'onColumnResize',
            'flattenColumns',
            'getRowKey',
            'expandedKeys',
            'childrenColumnName',
            'emptyNode',
          ]),
          a = r.prefixCls,
          o = r.getComponent,
          i = r.onColumnResize,
          s = r.flattenColumns,
          c = r.getRowKey,
          d = r.expandedKeys,
          h = r.childrenColumnName,
          p = r.emptyNode,
          v = st(e, h, d, c),
          y = l.useRef({ renderWithProps: !1 }),
          g = o(['body', 'wrapper'], 'tbody'),
          Z = o(['body', 'row'], 'tr'),
          b = o(['body', 'cell'], 'td'),
          C = o(['body', 'cell'], 'th'),
          R;
        e.length
          ? (R = v.map(function (O, K) {
              var q = O.record,
                T = O.indent,
                X = O.index,
                z = c(q, K);
              return l.createElement(vt, {
                key: z,
                rowKey: z,
                record: q,
                index: K,
                renderIndex: X,
                rowComponent: Z,
                cellComponent: b,
                scopeCellComponent: C,
                getRowKey: c,
                indent: T,
              });
            }))
          : (R = l.createElement(
              Ve,
              {
                expanded: !0,
                className: ''.concat(a, '-placeholder'),
                prefixCls: a,
                component: Z,
                cellComponent: b,
                colSpan: s.length,
                isEmpty: !0,
              },
              p,
            ));
        var L = U(s);
        return l.createElement(
          wr.Provider,
          { value: y.current },
          l.createElement(
            g,
            { className: ''.concat(a, '-tbody') },
            n &&
              l.createElement(gt, {
                prefixCls: a,
                columnsKey: L,
                onColumnResize: i,
              }),
            R,
          ),
        );
      }
      var Yn = dn(Ft),
        Hn = ['expandable'],
        yt = 'RC_TABLE_INTERNAL_COL_DEFINE';
      function jt(t) {
        var e = t.expandable,
          n = (0, Ie.Z)(t, Hn),
          r;
        return (
          'expandable' in t ? (r = (0, u.Z)((0, u.Z)({}, n), e)) : (r = n),
          r.showExpandColumn === !1 && (r.expandIconColumnIndex = -1),
          r
        );
      }
      var Un = ['columnType'];
      function Zn(t) {
        for (
          var e = t.colWidths,
            n = t.columns,
            r = t.columCount,
            a = [],
            o = r || n.length,
            i = !1,
            s = o - 1;
          s >= 0;
          s -= 1
        ) {
          var c = e[s],
            d = n && n[s],
            h = d && d[yt];
          if (c || h || i) {
            var p = h || {},
              v = p.columnType,
              y = (0, Ie.Z)(p, Un);
            a.unshift(
              l.createElement(
                'col',
                (0, Qe.Z)({ key: s, style: { width: c } }, y),
              ),
            ),
              (i = !0);
          }
        }
        return l.createElement('colgroup', null, a);
      }
      var Wn = Zn,
        vr = [
          'className',
          'noData',
          'columns',
          'flattenColumns',
          'colWidths',
          'columCount',
          'stickyOffsets',
          'direction',
          'fixHeader',
          'stickyTopOffset',
          'stickyBottomOffset',
          'stickyClassName',
          'onScroll',
          'maxContentScroll',
          'children',
        ];
      function $r(t, e) {
        return (0, l.useMemo)(
          function () {
            for (var n = [], r = 0; r < e; r += 1) {
              var a = t[r];
              if (a !== void 0) n[r] = a;
              else return null;
            }
            return n;
          },
          [t.join('_'), e],
        );
      }
      var ua = l.forwardRef(function (t, e) {
          var n = t.className,
            r = t.noData,
            a = t.columns,
            o = t.flattenColumns,
            i = t.colWidths,
            s = t.columCount,
            c = t.stickyOffsets,
            d = t.direction,
            h = t.fixHeader,
            p = t.stickyTopOffset,
            v = t.stickyBottomOffset,
            y = t.stickyClassName,
            g = t.onScroll,
            Z = t.maxContentScroll,
            b = t.children,
            C = (0, Ie.Z)(t, vr),
            R = Pt(At, [
              'prefixCls',
              'scrollbarSize',
              'isSticky',
              'getComponent',
            ]),
            L = R.prefixCls,
            O = R.scrollbarSize,
            K = R.isSticky,
            q = R.getComponent,
            T = q(['header', 'table'], 'table'),
            X = K && !h ? 0 : O,
            z = l.useRef(null),
            M = l.useCallback(function (Y) {
              (0, Kt.mH)(e, Y), (0, Kt.mH)(z, Y);
            }, []);
          l.useEffect(function () {
            var Y;
            function H(V) {
              var Q = V,
                ie = Q.currentTarget,
                pe = Q.deltaX;
              pe &&
                (g({ currentTarget: ie, scrollLeft: ie.scrollLeft + pe }),
                V.preventDefault());
            }
            return (
              (Y = z.current) === null ||
                Y === void 0 ||
                Y.addEventListener('wheel', H, { passive: !1 }),
              function () {
                var V;
                (V = z.current) === null ||
                  V === void 0 ||
                  V.removeEventListener('wheel', H);
              }
            );
          }, []);
          var $ = l.useMemo(
              function () {
                return o.every(function (Y) {
                  return Y.width;
                });
              },
              [o],
            ),
            j = o[o.length - 1],
            W = {
              fixed: j ? j.fixed : null,
              scrollbar: !0,
              onHeaderCell: function () {
                return { className: ''.concat(L, '-cell-scrollbar') };
              },
            },
            N = (0, l.useMemo)(
              function () {
                return X ? [].concat((0, He.Z)(a), [W]) : a;
              },
              [X, a],
            ),
            E = (0, l.useMemo)(
              function () {
                return X ? [].concat((0, He.Z)(o), [W]) : o;
              },
              [X, o],
            ),
            D = (0, l.useMemo)(
              function () {
                var Y = c.right,
                  H = c.left;
                return (0, u.Z)(
                  (0, u.Z)({}, c),
                  {},
                  {
                    left:
                      d === 'rtl'
                        ? [].concat(
                            (0, He.Z)(
                              H.map(function (V) {
                                return V + X;
                              }),
                            ),
                            [0],
                          )
                        : H,
                    right:
                      d === 'rtl'
                        ? Y
                        : [].concat(
                            (0, He.Z)(
                              Y.map(function (V) {
                                return V + X;
                              }),
                            ),
                            [0],
                          ),
                    isSticky: K,
                  },
                );
              },
              [X, c, K],
            ),
            F = $r(i, s);
          return l.createElement(
            'div',
            {
              style: (0, u.Z)(
                { overflow: 'hidden' },
                K ? { top: p, bottom: v } : {},
              ),
              ref: M,
              className: fe()(n, (0, S.Z)({}, y, !!y)),
            },
            l.createElement(
              T,
              {
                style: {
                  tableLayout: 'fixed',
                  visibility: r || F ? null : 'hidden',
                },
              },
              (!r || !Z || $) &&
                l.createElement(Wn, {
                  colWidths: F ? [].concat((0, He.Z)(F), [X]) : [],
                  columCount: s + 1,
                  columns: E,
                }),
              b(
                (0, u.Z)(
                  (0, u.Z)({}, C),
                  {},
                  { stickyOffsets: D, columns: N, flattenColumns: E },
                ),
              ),
            ),
          );
        }),
        zr = l.memo(ua),
        ba = function (e) {
          var n = e.cells,
            r = e.stickyOffsets,
            a = e.flattenColumns,
            o = e.rowComponent,
            i = e.cellComponent,
            s = e.onHeaderRow,
            c = e.index,
            d = Pt(At, ['prefixCls', 'direction']),
            h = d.prefixCls,
            p = d.direction,
            v;
          s &&
            (v = s(
              n.map(function (g) {
                return g.column;
              }),
              c,
            ));
          var y = U(
            n.map(function (g) {
              return g.column;
            }),
          );
          return l.createElement(
            o,
            v,
            n.map(function (g, Z) {
              var b = g.column,
                C = w(g.colStart, g.colEnd, a, r, p),
                R;
              return (
                b && b.onHeaderCell && (R = g.column.onHeaderCell(b)),
                l.createElement(
                  P,
                  (0, Qe.Z)(
                    {},
                    g,
                    {
                      scope: b.title
                        ? g.colSpan > 1
                          ? 'colgroup'
                          : 'col'
                        : null,
                      ellipsis: b.ellipsis,
                      align: b.align,
                      component: i,
                      prefixCls: h,
                      key: y[Z],
                    },
                    C,
                    { additionalProps: R, rowType: 'header' },
                  ),
                )
              );
            }),
          );
        },
        Sa = ba;
      function xa(t) {
        var e = [];
        function n(i, s) {
          var c =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          e[c] = e[c] || [];
          var d = s,
            h = i.filter(Boolean).map(function (p) {
              var v = {
                  key: p.key,
                  className: p.className || '',
                  children: p.title,
                  column: p,
                  colStart: d,
                },
                y = 1,
                g = p.children;
              return (
                g &&
                  g.length > 0 &&
                  ((y = n(g, d, c + 1).reduce(function (Z, b) {
                    return Z + b;
                  }, 0)),
                  (v.hasSubColumns = !0)),
                'colSpan' in p && (y = p.colSpan),
                'rowSpan' in p && (v.rowSpan = p.rowSpan),
                (v.colSpan = y),
                (v.colEnd = v.colStart + y - 1),
                e[c].push(v),
                (d += y),
                y
              );
            });
          return h;
        }
        n(t, 0);
        for (
          var r = e.length,
            a = function (s) {
              e[s].forEach(function (c) {
                !('rowSpan' in c) && !c.hasSubColumns && (c.rowSpan = r - s);
              });
            },
            o = 0;
          o < r;
          o += 1
        )
          a(o);
        return e;
      }
      var Aa = function (e) {
          var n = e.stickyOffsets,
            r = e.columns,
            a = e.flattenColumns,
            o = e.onHeaderRow,
            i = Pt(At, ['prefixCls', 'getComponent']),
            s = i.prefixCls,
            c = i.getComponent,
            d = l.useMemo(
              function () {
                return xa(r);
              },
              [r],
            ),
            h = c(['header', 'wrapper'], 'thead'),
            p = c(['header', 'row'], 'tr'),
            v = c(['header', 'cell'], 'th');
          return l.createElement(
            h,
            { className: ''.concat(s, '-thead') },
            d.map(function (y, g) {
              var Z = l.createElement(Sa, {
                key: g,
                flattenColumns: a,
                cells: y,
                stickyOffsets: n,
                rowComponent: p,
                cellComponent: v,
                onHeaderRow: o,
                index: g,
              });
              return Z;
            }),
          );
        },
        bt = dn(Aa);
      function Ht(t) {
        var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
        return typeof e == 'number'
          ? e
          : e.endsWith('%')
          ? (t * parseFloat(e)) / 100
          : null;
      }
      function jn(t, e, n) {
        return l.useMemo(
          function () {
            if (e && e > 0) {
              var r = 0,
                a = 0;
              t.forEach(function (v) {
                var y = Ht(e, v.width);
                y ? (r += y) : (a += 1);
              });
              var o = Math.max(e, n),
                i = Math.max(o - r, a),
                s = a,
                c = i / a,
                d = 0,
                h = t.map(function (v) {
                  var y = (0, u.Z)({}, v),
                    g = Ht(e, y.width);
                  if (g) y.width = g;
                  else {
                    var Z = Math.floor(c);
                    (y.width = s === 1 ? i : Z), (i -= Z), (s -= 1);
                  }
                  return (d += y.width), y;
                });
              if (d < o) {
                var p = o / d;
                (i = o),
                  h.forEach(function (v, y) {
                    var g = Math.floor(v.width * p);
                    (v.width = y === h.length - 1 ? i : g), (i -= g);
                  });
              }
              return [h, Math.max(d, o)];
            }
            return [t, e];
          },
          [t, e, n],
        );
      }
      var In = ['children'],
        Qr = ['fixed'];
      function Kr(t) {
        return (0, cr.Z)(t)
          .filter(function (e) {
            return l.isValidElement(e);
          })
          .map(function (e) {
            var n = e.key,
              r = e.props,
              a = r.children,
              o = (0, Ie.Z)(r, In),
              i = (0, u.Z)({ key: n }, o);
            return a && (i.children = Kr(a)), i;
          });
      }
      function Ha(t) {
        return t
          .filter(function (e) {
            return e && (0, it.Z)(e) === 'object' && !e.hidden;
          })
          .map(function (e) {
            var n = e.children;
            return n && n.length > 0
              ? (0, u.Z)((0, u.Z)({}, e), {}, { children: Ha(n) })
              : e;
          });
      }
      function Bn(t) {
        var e =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'key';
        return t
          .filter(function (n) {
            return n && (0, it.Z)(n) === 'object';
          })
          .reduce(function (n, r, a) {
            var o = r.fixed,
              i = o === !0 ? 'left' : o,
              s = ''.concat(e, '-').concat(a),
              c = r.children;
            return c && c.length > 0
              ? [].concat(
                  (0, He.Z)(n),
                  (0, He.Z)(
                    Bn(c, s).map(function (d) {
                      return (0, u.Z)({ fixed: i }, d);
                    }),
                  ),
                )
              : [].concat((0, He.Z)(n), [
                  (0, u.Z)((0, u.Z)({ key: s }, r), {}, { fixed: i }),
                ]);
          }, []);
      }
      function Wa(t) {
        return t.map(function (e) {
          var n = e.fixed,
            r = (0, Ie.Z)(e, Qr),
            a = n;
          return (
            n === 'left' ? (a = 'right') : n === 'right' && (a = 'left'),
            (0, u.Z)({ fixed: a }, r)
          );
        });
      }
      function fa(t, e) {
        var n = t.prefixCls,
          r = t.columns,
          a = t.children,
          o = t.expandable,
          i = t.expandedKeys,
          s = t.columnTitle,
          c = t.getRowKey,
          d = t.onTriggerExpand,
          h = t.expandIcon,
          p = t.rowExpandable,
          v = t.expandIconColumnIndex,
          y = t.direction,
          g = t.expandRowByClick,
          Z = t.columnWidth,
          b = t.fixed,
          C = t.scrollWidth,
          R = t.clientWidth,
          L = l.useMemo(
            function () {
              var j = r || Kr(a) || [];
              return Ha(j.slice());
            },
            [r, a],
          ),
          O = l.useMemo(
            function () {
              if (o) {
                var j,
                  W = L.slice();
                if (!W.includes(It)) {
                  var N = v || 0;
                  N >= 0 && W.splice(N, 0, It);
                }
                var E = W.indexOf(It);
                W = W.filter(function (H, V) {
                  return H !== It || V === E;
                });
                var D = L[E],
                  F;
                (b === 'left' || b) && !v
                  ? (F = 'left')
                  : (b === 'right' || b) && v === L.length
                  ? (F = 'right')
                  : (F = D ? D.fixed : null);
                var Y =
                  ((j = {}),
                  (0, S.Z)(j, yt, {
                    className: ''.concat(n, '-expand-icon-col'),
                    columnType: 'EXPAND_COLUMN',
                  }),
                  (0, S.Z)(j, 'title', s),
                  (0, S.Z)(j, 'fixed', F),
                  (0, S.Z)(
                    j,
                    'className',
                    ''.concat(n, '-row-expand-icon-cell'),
                  ),
                  (0, S.Z)(j, 'width', Z),
                  (0, S.Z)(j, 'render', function (V, Q, ie) {
                    var pe = c(Q, ie),
                      Ce = i.has(pe),
                      ae = p ? p(Q) : !0,
                      xe = h({
                        prefixCls: n,
                        expanded: Ce,
                        expandable: ae,
                        record: Q,
                        onExpand: d,
                      });
                    return g
                      ? l.createElement(
                          'span',
                          {
                            onClick: function (se) {
                              return se.stopPropagation();
                            },
                          },
                          xe,
                        )
                      : xe;
                  }),
                  j);
                return W.map(function (H) {
                  return H === It ? Y : H;
                });
              }
              return L.filter(function (H) {
                return H !== It;
              });
            },
            [o, L, c, i, h, y],
          ),
          K = l.useMemo(
            function () {
              var j = O;
              return (
                e && (j = e(j)),
                j.length ||
                  (j = [
                    {
                      render: function () {
                        return null;
                      },
                    },
                  ]),
                j
              );
            },
            [e, O, y],
          ),
          q = l.useMemo(
            function () {
              return y === 'rtl' ? Wa(Bn(K)) : Bn(K);
            },
            [K, y, C],
          ),
          T = l.useMemo(
            function () {
              for (var j = -1, W = q.length - 1; W >= 0; W -= 1) {
                var N = q[W].fixed;
                if (N === 'left' || N === !0) {
                  j = W;
                  break;
                }
              }
              if (j >= 0)
                for (var E = 0; E <= j; E += 1) {
                  var D = q[E].fixed;
                  if (D !== 'left' && D !== !0) return !0;
                }
              var F = q.findIndex(function (V) {
                var Q = V.fixed;
                return Q === 'right';
              });
              if (F >= 0)
                for (var Y = F; Y < q.length; Y += 1) {
                  var H = q[Y].fixed;
                  if (H !== 'right') return !0;
                }
              return !1;
            },
            [q],
          ),
          X = jn(q, C, R),
          z = (0, de.Z)(X, 2),
          M = z[0],
          $ = z[1];
        return [K, M, $, T];
      }
      var li = fa;
      function oi(t) {
        var e,
          n = t.prefixCls,
          r = t.record,
          a = t.onExpand,
          o = t.expanded,
          i = t.expandable,
          s = ''.concat(n, '-row-expand-icon');
        if (!i)
          return l.createElement('span', {
            className: fe()(s, ''.concat(n, '-row-spaced')),
          });
        var c = function (h) {
          a(r, h), h.stopPropagation();
        };
        return l.createElement('span', {
          className: fe()(
            s,
            ((e = {}),
            (0, S.Z)(e, ''.concat(n, '-row-expanded'), o),
            (0, S.Z)(e, ''.concat(n, '-row-collapsed'), !o),
            e),
          ),
          onClick: c,
        });
      }
      function ii(t, e, n) {
        var r = [];
        function a(o) {
          (o || []).forEach(function (i, s) {
            r.push(e(i, s)), a(i[n]);
          });
        }
        return a(t), r;
      }
      function si(t, e, n) {
        var r = jt(t),
          a = r.expandIcon,
          o = r.expandedRowKeys,
          i = r.defaultExpandedRowKeys,
          s = r.defaultExpandAllRows,
          c = r.expandedRowRender,
          d = r.onExpand,
          h = r.onExpandedRowsChange,
          p = r.childrenColumnName,
          v = a || oi,
          y = p || 'children',
          g = l.useMemo(
            function () {
              return c
                ? 'row'
                : (t.expandable &&
                    t.internalHooks === kt &&
                    t.expandable.__PARENT_RENDER_ICON__) ||
                  e.some(function (K) {
                    return K && (0, it.Z)(K) === 'object' && K[y];
                  })
                ? 'nest'
                : !1;
            },
            [!!c, e],
          ),
          Z = l.useState(function () {
            return i || (s ? ii(e, n, y) : []);
          }),
          b = (0, de.Z)(Z, 2),
          C = b[0],
          R = b[1],
          L = l.useMemo(
            function () {
              return new Set(o || C || []);
            },
            [o, C],
          ),
          O = l.useCallback(
            function (K) {
              var q = n(K, e.indexOf(K)),
                T,
                X = L.has(q);
              X
                ? (L.delete(q), (T = (0, He.Z)(L)))
                : (T = [].concat((0, He.Z)(L), [q])),
                R(T),
                d && d(!X, K),
                h && h(T);
            },
            [n, L, e, d, h],
          );
        return [r, g, L, v, y, O];
      }
      function ci(t, e, n) {
        var r = t.map(function (a, o) {
          return w(o, o, t, e, n);
        });
        return (0, Zr.Z)(
          function () {
            return r;
          },
          [r],
          function (a, o) {
            return !(0, Tt.Z)(a, o);
          },
        );
      }
      function El(t) {
        var e = (0, l.useRef)(t),
          n = (0, l.useState)({}),
          r = (0, de.Z)(n, 2),
          a = r[1],
          o = (0, l.useRef)(null),
          i = (0, l.useRef)([]);
        function s(c) {
          i.current.push(c);
          var d = Promise.resolve();
          (o.current = d),
            d.then(function () {
              if (o.current === d) {
                var h = i.current,
                  p = e.current;
                (i.current = []),
                  h.forEach(function (v) {
                    e.current = v(e.current);
                  }),
                  (o.current = null),
                  p !== e.current && a({});
              }
            });
        }
        return (
          (0, l.useEffect)(function () {
            return function () {
              o.current = null;
            };
          }, []),
          [e.current, s]
        );
      }
      function di(t) {
        var e = (0, l.useRef)(t || null),
          n = (0, l.useRef)();
        function r() {
          window.clearTimeout(n.current);
        }
        function a(i) {
          (e.current = i),
            r(),
            (n.current = window.setTimeout(function () {
              (e.current = null), (n.current = void 0);
            }, 100));
        }
        function o() {
          return e.current;
        }
        return (
          (0, l.useEffect)(function () {
            return r;
          }, []),
          [a, o]
        );
      }
      function ui() {
        var t = l.useState(-1),
          e = (0, de.Z)(t, 2),
          n = e[0],
          r = e[1],
          a = l.useState(-1),
          o = (0, de.Z)(a, 2),
          i = o[0],
          s = o[1],
          c = l.useCallback(function (d, h) {
            r(d), s(h);
          }, []);
        return [n, i, c];
      }
      var fi = m(5801),
        Il = (0, fi.Z)() ? window : null;
      function vi(t, e) {
        var n = (0, it.Z)(t) === 'object' ? t : {},
          r = n.offsetHeader,
          a = r === void 0 ? 0 : r,
          o = n.offsetSummary,
          i = o === void 0 ? 0 : o,
          s = n.offsetScroll,
          c = s === void 0 ? 0 : s,
          d = n.getContainer,
          h =
            d === void 0
              ? function () {
                  return Il;
                }
              : d,
          p = h() || Il;
        return l.useMemo(
          function () {
            var v = !!t;
            return {
              isSticky: v,
              stickyClassName: v ? ''.concat(e, '-sticky-holder') : '',
              offsetHeader: a,
              offsetSummary: i,
              offsetScroll: c,
              container: p,
            };
          },
          [c, a, i, e, p],
        );
      }
      function mi(t, e, n) {
        var r = (0, l.useMemo)(
          function () {
            var a = e.length,
              o = function (d, h, p) {
                for (var v = [], y = 0, g = d; g !== h; g += p)
                  v.push(y), e[g].fixed && (y += t[g] || 0);
                return v;
              },
              i = o(0, a, 1),
              s = o(a - 1, -1, -1).reverse();
            return n === 'rtl' ? { left: s, right: i } : { left: i, right: s };
          },
          [t, e, n],
        );
        return r;
      }
      var pi = mi;
      function gi(t) {
        var e = t.className,
          n = t.children;
        return l.createElement('div', { className: e }, n);
      }
      var Pl = gi,
        Ca = m(41206),
        $l = m(54976),
        Za = m(23766),
        hi = function (e, n) {
          var r,
            a,
            o = e.scrollBodyRef,
            i = e.onScroll,
            s = e.offsetScroll,
            c = e.container,
            d = Pt(At, 'prefixCls'),
            h =
              ((r = o.current) === null || r === void 0
                ? void 0
                : r.scrollWidth) || 0,
            p =
              ((a = o.current) === null || a === void 0
                ? void 0
                : a.clientWidth) || 0,
            v = h && p * (p / h),
            y = l.useRef(),
            g = El({ scrollLeft: 0, isHiddenScrollBar: !1 }),
            Z = (0, de.Z)(g, 2),
            b = Z[0],
            C = Z[1],
            R = l.useRef({ delta: 0, x: 0 }),
            L = l.useState(!1),
            O = (0, de.Z)(L, 2),
            K = O[0],
            q = O[1],
            T = l.useRef(null);
          l.useEffect(function () {
            return function () {
              Za.Z.cancel(T.current);
            };
          }, []);
          var X = function () {
              q(!1);
            },
            z = function (N) {
              N.persist(),
                (R.current.delta = N.pageX - b.scrollLeft),
                (R.current.x = 0),
                q(!0),
                N.preventDefault();
            },
            M = function (N) {
              var E,
                D =
                  N ||
                  ((E = window) === null || E === void 0 ? void 0 : E.event),
                F = D.buttons;
              if (!K || F === 0) {
                K && q(!1);
                return;
              }
              var Y = R.current.x + N.pageX - R.current.x - R.current.delta;
              Y <= 0 && (Y = 0),
                Y + v >= p && (Y = p - v),
                i({ scrollLeft: (Y / p) * (h + 2) }),
                (R.current.x = N.pageX);
            },
            $ = function () {
              T.current = (0, Za.Z)(function () {
                if (o.current) {
                  var N = (0, $l.os)(o.current).top,
                    E = N + o.current.offsetHeight,
                    D =
                      c === window
                        ? document.documentElement.scrollTop +
                          window.innerHeight
                        : (0, $l.os)(c).top + c.clientHeight;
                  E - (0, ot.Z)() <= D || N >= D - s
                    ? C(function (F) {
                        return (0,
                        u.Z)((0, u.Z)({}, F), {}, { isHiddenScrollBar: !0 });
                      })
                    : C(function (F) {
                        return (0,
                        u.Z)((0, u.Z)({}, F), {}, { isHiddenScrollBar: !1 });
                      });
                }
              });
            },
            j = function (N) {
              C(function (E) {
                return (0,
                u.Z)((0, u.Z)({}, E), {}, { scrollLeft: (N / h) * p || 0 });
              });
            };
          return (
            l.useImperativeHandle(n, function () {
              return { setScrollLeft: j, checkScrollBarVisible: $ };
            }),
            l.useEffect(
              function () {
                var W = (0, Ca.Z)(document.body, 'mouseup', X, !1),
                  N = (0, Ca.Z)(document.body, 'mousemove', M, !1);
                return (
                  $(),
                  function () {
                    W.remove(), N.remove();
                  }
                );
              },
              [v, K],
            ),
            l.useEffect(
              function () {
                var W = (0, Ca.Z)(c, 'scroll', $, !1),
                  N = (0, Ca.Z)(window, 'resize', $, !1);
                return function () {
                  W.remove(), N.remove();
                };
              },
              [c],
            ),
            l.useEffect(
              function () {
                b.isHiddenScrollBar ||
                  C(function (W) {
                    var N = o.current;
                    return N
                      ? (0, u.Z)(
                          (0, u.Z)({}, W),
                          {},
                          {
                            scrollLeft:
                              (N.scrollLeft / N.scrollWidth) * N.clientWidth,
                          },
                        )
                      : W;
                  });
              },
              [b.isHiddenScrollBar],
            ),
            h <= p || !v || b.isHiddenScrollBar
              ? null
              : l.createElement(
                  'div',
                  {
                    style: { height: (0, ot.Z)(), width: p, bottom: s },
                    className: ''.concat(d, '-sticky-scroll'),
                  },
                  l.createElement('div', {
                    onMouseDown: z,
                    ref: y,
                    className: fe()(
                      ''.concat(d, '-sticky-scroll-bar'),
                      (0, S.Z)(
                        {},
                        ''.concat(d, '-sticky-scroll-bar-active'),
                        K,
                      ),
                    ),
                    style: {
                      width: ''.concat(v, 'px'),
                      transform: 'translate3d('.concat(
                        b.scrollLeft,
                        'px, 0, 0)',
                      ),
                    },
                  }),
                )
          );
        },
        yi = l.forwardRef(hi);
      function bi(t) {
        return null;
      }
      var Si = bi;
      function xi(t) {
        return null;
      }
      var Ci = xi,
        Tl = 'rc-table',
        Zi = [],
        wi = {};
      function Ri() {
        return 'No Data';
      }
      function Ei(t, e) {
        var n,
          r = (0, u.Z)({ rowKey: 'key', prefixCls: Tl, emptyText: Ri }, t),
          a = r.prefixCls,
          o = r.className,
          i = r.rowClassName,
          s = r.style,
          c = r.data,
          d = r.rowKey,
          h = r.scroll,
          p = r.tableLayout,
          v = r.direction,
          y = r.title,
          g = r.footer,
          Z = r.summary,
          b = r.caption,
          C = r.id,
          R = r.showHeader,
          L = r.components,
          O = r.emptyText,
          K = r.onRow,
          q = r.onHeaderRow,
          T = r.onScroll,
          X = r.internalHooks,
          z = r.transformColumns,
          M = r.internalRefs,
          $ = r.tailor,
          j = r.getContainerWidth,
          W = r.sticky,
          N = r.rowHoverable,
          E = N === void 0 ? !0 : N,
          D = c || Zi,
          F = !!D.length,
          Y = X === kt,
          H = l.useCallback(
            function (Mt, _t) {
              return (0, rr.Z)(L, Mt) || _t;
            },
            [L],
          ),
          V = l.useMemo(
            function () {
              return typeof d == 'function'
                ? d
                : function (Mt) {
                    var _t = Mt && Mt[d];
                    return _t;
                  };
            },
            [d],
          ),
          Q = H(['body']),
          ie = ui(),
          pe = (0, de.Z)(ie, 3),
          Ce = pe[0],
          ae = pe[1],
          xe = pe[2],
          ne = si(r, D, V),
          se = (0, de.Z)(ne, 6),
          Ze = se[0],
          Ue = se[1],
          ue = se[2],
          Ne = se[3],
          we = se[4],
          ee = se[5],
          Fe = h == null ? void 0 : h.x,
          rt = l.useState(0),
          Pe = (0, de.Z)(rt, 2),
          _ = Pe[0],
          ge = Pe[1],
          Ae = li(
            (0, u.Z)(
              (0, u.Z)((0, u.Z)({}, r), Ze),
              {},
              {
                expandable: !!Ze.expandedRowRender,
                columnTitle: Ze.columnTitle,
                expandedKeys: ue,
                getRowKey: V,
                onTriggerExpand: ee,
                expandIcon: Ne,
                expandIconColumnIndex: Ze.expandIconColumnIndex,
                direction: v,
                scrollWidth: Y && $ && typeof Fe == 'number' ? Fe : null,
                clientWidth: _,
              },
            ),
            Y ? z : null,
          ),
          je = (0, de.Z)(Ae, 4),
          dt = je[0],
          Re = je[1],
          xt = je[2],
          on = je[3],
          yn = xt != null ? xt : Fe,
          bn = l.useMemo(
            function () {
              return { columns: dt, flattenColumns: Re };
            },
            [dt, Re],
          ),
          Ln = l.useRef(),
          lr = l.useRef(),
          _e = l.useRef(),
          Wt = l.useRef();
        l.useImperativeHandle(e, function () {
          return {
            nativeElement: Ln.current,
            scrollTo: function (_t) {
              var Xn;
              if (_e.current instanceof HTMLElement) {
                var mr = _t.index,
                  Gn = _t.top,
                  da = _t.key;
                if (Gn) {
                  var qr;
                  (qr = _e.current) === null ||
                    qr === void 0 ||
                    qr.scrollTo({ top: Gn });
                } else {
                  var _r,
                    ya = da != null ? da : V(D[mr]);
                  (_r = _e.current.querySelector(
                    '[data-row-key="'.concat(ya, '"]'),
                  )) === null ||
                    _r === void 0 ||
                    _r.scrollIntoView();
                }
              } else
                (Xn = _e.current) !== null &&
                  Xn !== void 0 &&
                  Xn.scrollTo &&
                  _e.current.scrollTo(_t);
            },
          };
        });
        var Qt = l.useRef(),
          Sn = l.useState(!1),
          sn = (0, de.Z)(Sn, 2),
          qt = sn[0],
          un = sn[1],
          tn = l.useState(!1),
          Xe = (0, de.Z)(tn, 2),
          Ot = Xe[0],
          ct = Xe[1],
          Mn = El(new Map()),
          Pn = (0, de.Z)(Mn, 2),
          Xt = Pn[0],
          wn = Pn[1],
          Dn = U(Re),
          or = Dn.map(function (Mt) {
            return Xt.get(Mt);
          }),
          kr = l.useMemo(
            function () {
              return or;
            },
            [or.join('_')],
          ),
          Jn = pi(kr, Re, v),
          Vn = h && te(h.y),
          kn = (h && te(yn)) || !!Ze.fixed,
          ir =
            kn &&
            Re.some(function (Mt) {
              var _t = Mt.fixed;
              return _t;
            }),
          Ir = l.useRef(),
          br = vi(W, a),
          dr = br.isSticky,
          ia = br.offsetHeader,
          ha = br.offsetSummary,
          sa = br.offsetScroll,
          Le = br.stickyClassName,
          le = br.container,
          Oe = l.useMemo(
            function () {
              return Z == null ? void 0 : Z(D);
            },
            [Z, D],
          ),
          mt =
            (Vn || dr) &&
            l.isValidElement(Oe) &&
            Oe.type === at &&
            Oe.props.fixed,
          nn,
          mn,
          vn;
        Vn && (mn = { overflowY: 'scroll', maxHeight: h.y }),
          kn &&
            ((nn = { overflowX: 'auto' }),
            Vn || (mn = { overflowY: 'hidden' }),
            (vn = { width: yn === !0 ? 'auto' : yn, minWidth: '100%' }));
        var Ur = l.useCallback(function (Mt, _t) {
            (0, Nt.Z)(Ln.current) &&
              wn(function (Xn) {
                if (Xn.get(Mt) !== _t) {
                  var mr = new Map(Xn);
                  return mr.set(Mt, _t), mr;
                }
                return Xn;
              });
          }, []),
          Qn = di(null),
          Wo = (0, de.Z)(Qn, 2),
          nv = Wo[0],
          Vo = Wo[1];
        function Da(Mt, _t) {
          _t &&
            (typeof _t == 'function'
              ? _t(Mt)
              : _t.scrollLeft !== Mt &&
                ((_t.scrollLeft = Mt),
                _t.scrollLeft !== Mt &&
                  setTimeout(function () {
                    _t.scrollLeft = Mt;
                  }, 0)));
        }
        var ca = (0, Dt.Z)(function (Mt) {
            var _t = Mt.currentTarget,
              Xn = Mt.scrollLeft,
              mr = v === 'rtl',
              Gn = typeof Xn == 'number' ? Xn : _t.scrollLeft,
              da = _t || wi;
            if (!Vo() || Vo() === da) {
              var qr;
              nv(da),
                Da(Gn, lr.current),
                Da(Gn, _e.current),
                Da(Gn, Qt.current),
                Da(
                  Gn,
                  (qr = Ir.current) === null || qr === void 0
                    ? void 0
                    : qr.setScrollLeft,
                );
            }
            var _r = _t || lr.current;
            if (_r) {
              var ya = _r.scrollWidth,
                Rl = _r.clientWidth;
              if (ya === Rl) {
                un(!1), ct(!1);
                return;
              }
              mr
                ? (un(-Gn < ya - Rl), ct(-Gn > 0))
                : (un(Gn > 0), ct(Gn < ya - Rl));
            }
          }),
          rv = (0, Dt.Z)(function (Mt) {
            ca(Mt), T == null || T(Mt);
          }),
          ko = function () {
            kn && _e.current
              ? ca({ currentTarget: _e.current })
              : (un(!1), ct(!1));
          },
          av = function (_t) {
            var Xn,
              mr = _t.width;
            (Xn = Ir.current) === null ||
              Xn === void 0 ||
              Xn.checkScrollBarVisible();
            var Gn = Ln.current ? Ln.current.offsetWidth : mr;
            Y && j && Ln.current && (Gn = j(Ln.current, Gn) || Gn),
              Gn !== _ && (ko(), ge(Gn));
          },
          Uo = l.useRef(!1);
        l.useEffect(
          function () {
            Uo.current && ko();
          },
          [kn, c, dt.length],
        ),
          l.useEffect(function () {
            Uo.current = !0;
          }, []);
        var lv = l.useState(0),
          Xo = (0, de.Z)(lv, 2),
          za = Xo[0],
          Go = Xo[1],
          ov = l.useState(!0),
          Yo = (0, de.Z)(ov, 2),
          Jo = Yo[0],
          iv = Yo[1];
        l.useEffect(function () {
          (!$ || !Y) &&
            (_e.current instanceof Element
              ? Go((0, ot.o)(_e.current).width)
              : Go((0, ot.o)(Wt.current).width)),
            iv((0, Jt.G)('position', 'sticky'));
        }, []),
          l.useEffect(function () {
            Y && M && (M.body.current = _e.current);
          });
        var sv = l.useCallback(
            function (Mt) {
              return l.createElement(
                l.Fragment,
                null,
                l.createElement(bt, Mt),
                mt === 'top' && l.createElement(ze, Mt, Oe),
              );
            },
            [mt, Oe],
          ),
          cv = l.useCallback(
            function (Mt) {
              return l.createElement(ze, Mt, Oe);
            },
            [Oe],
          ),
          Qo = H(['table'], 'table'),
          Ka = l.useMemo(
            function () {
              return (
                p ||
                (ir
                  ? yn === 'max-content'
                    ? 'auto'
                    : 'fixed'
                  : Vn ||
                    dr ||
                    Re.some(function (Mt) {
                      var _t = Mt.ellipsis;
                      return _t;
                    })
                  ? 'fixed'
                  : 'auto')
              );
            },
            [Vn, ir, Re, p, dr],
          ),
          xl,
          Cl = {
            colWidths: kr,
            columCount: Re.length,
            stickyOffsets: Jn,
            onHeaderRow: q,
            fixHeader: Vn,
            scroll: h,
          },
          qo = l.useMemo(
            function () {
              return F ? null : typeof O == 'function' ? O() : O;
            },
            [F, O],
          ),
          _o = l.createElement(Yn, {
            data: D,
            measureColumnWidth: Vn || kn || dr,
          }),
          ei = l.createElement(Wn, {
            colWidths: Re.map(function (Mt) {
              var _t = Mt.width;
              return _t;
            }),
            columns: Re,
          }),
          ti =
            b != null
              ? l.createElement(
                  'caption',
                  { className: ''.concat(a, '-caption') },
                  b,
                )
              : void 0,
          dv = (0, Lt.Z)(r, { data: !0 }),
          ni = (0, Lt.Z)(r, { aria: !0 });
        if (Vn || dr) {
          var Zl;
          typeof Q == 'function'
            ? ((Zl = Q(D, { scrollbarSize: za, ref: _e, onScroll: ca })),
              (Cl.colWidths = Re.map(function (Mt, _t) {
                var Xn = Mt.width,
                  mr = _t === Re.length - 1 ? Xn - za : Xn;
                return typeof mr == 'number' && !Number.isNaN(mr) ? mr : 0;
              })))
            : (Zl = l.createElement(
                'div',
                {
                  style: (0, u.Z)((0, u.Z)({}, nn), mn),
                  onScroll: rv,
                  ref: _e,
                  className: fe()(''.concat(a, '-body')),
                },
                l.createElement(
                  Qo,
                  (0, Qe.Z)(
                    {
                      style: (0, u.Z)(
                        (0, u.Z)({}, vn),
                        {},
                        { tableLayout: Ka },
                      ),
                    },
                    ni,
                  ),
                  ti,
                  ei,
                  _o,
                  !mt &&
                    Oe &&
                    l.createElement(
                      ze,
                      { stickyOffsets: Jn, flattenColumns: Re },
                      Oe,
                    ),
                ),
              ));
          var ri = (0, u.Z)(
            (0, u.Z)(
              (0, u.Z)(
                {
                  noData: !D.length,
                  maxContentScroll: kn && yn === 'max-content',
                },
                Cl,
              ),
              bn,
            ),
            {},
            { direction: v, stickyClassName: Le, onScroll: ca },
          );
          xl = l.createElement(
            l.Fragment,
            null,
            R !== !1 &&
              l.createElement(
                zr,
                (0, Qe.Z)({}, ri, {
                  stickyTopOffset: ia,
                  className: ''.concat(a, '-header'),
                  ref: lr,
                }),
                sv,
              ),
            Zl,
            mt &&
              mt !== 'top' &&
              l.createElement(
                zr,
                (0, Qe.Z)({}, ri, {
                  stickyBottomOffset: ha,
                  className: ''.concat(a, '-summary'),
                  ref: Qt,
                }),
                cv,
              ),
            dr &&
              _e.current &&
              _e.current instanceof Element &&
              l.createElement(yi, {
                ref: Ir,
                offsetScroll: sa,
                scrollBodyRef: _e,
                onScroll: ca,
                container: le,
              }),
          );
        } else
          xl = l.createElement(
            'div',
            {
              style: (0, u.Z)((0, u.Z)({}, nn), mn),
              className: fe()(''.concat(a, '-content')),
              onScroll: ca,
              ref: _e,
            },
            l.createElement(
              Qo,
              (0, Qe.Z)(
                { style: (0, u.Z)((0, u.Z)({}, vn), {}, { tableLayout: Ka }) },
                ni,
              ),
              ti,
              ei,
              R !== !1 && l.createElement(bt, (0, Qe.Z)({}, Cl, bn)),
              _o,
              Oe &&
                l.createElement(
                  ze,
                  { stickyOffsets: Jn, flattenColumns: Re },
                  Oe,
                ),
            ),
          );
        var wl = l.createElement(
          'div',
          (0, Qe.Z)(
            {
              className: fe()(
                a,
                o,
                ((n = {}),
                (0, S.Z)(n, ''.concat(a, '-rtl'), v === 'rtl'),
                (0, S.Z)(n, ''.concat(a, '-ping-left'), qt),
                (0, S.Z)(n, ''.concat(a, '-ping-right'), Ot),
                (0, S.Z)(n, ''.concat(a, '-layout-fixed'), p === 'fixed'),
                (0, S.Z)(n, ''.concat(a, '-fixed-header'), Vn),
                (0, S.Z)(n, ''.concat(a, '-fixed-column'), ir),
                (0, S.Z)(n, ''.concat(a, '-fixed-column-gapped'), ir && on),
                (0, S.Z)(n, ''.concat(a, '-scroll-horizontal'), kn),
                (0, S.Z)(
                  n,
                  ''.concat(a, '-has-fix-left'),
                  Re[0] && Re[0].fixed,
                ),
                (0, S.Z)(
                  n,
                  ''.concat(a, '-has-fix-right'),
                  Re[Re.length - 1] && Re[Re.length - 1].fixed === 'right',
                ),
                n),
              ),
              style: s,
              id: C,
              ref: Ln,
            },
            dv,
          ),
          y && l.createElement(Pl, { className: ''.concat(a, '-title') }, y(D)),
          l.createElement(
            'div',
            { ref: Wt, className: ''.concat(a, '-container') },
            xl,
          ),
          g &&
            l.createElement(Pl, { className: ''.concat(a, '-footer') }, g(D)),
        );
        kn && (wl = l.createElement(wt.Z, { onResize: av }, wl));
        var ai = ci(Re, Jn, v),
          uv = l.useMemo(
            function () {
              return {
                scrollX: yn,
                prefixCls: a,
                getComponent: H,
                scrollbarSize: za,
                direction: v,
                fixedInfoList: ai,
                isSticky: dr,
                supportSticky: Jo,
                componentWidth: _,
                fixHeader: Vn,
                fixColumn: ir,
                horizonScroll: kn,
                tableLayout: Ka,
                rowClassName: i,
                expandedRowClassName: Ze.expandedRowClassName,
                expandIcon: Ne,
                expandableType: Ue,
                expandRowByClick: Ze.expandRowByClick,
                expandedRowRender: Ze.expandedRowRender,
                onTriggerExpand: ee,
                expandIconColumnIndex: Ze.expandIconColumnIndex,
                indentSize: Ze.indentSize,
                allColumnsFixedLeft: Re.every(function (Mt) {
                  return Mt.fixed === 'left';
                }),
                emptyNode: qo,
                columns: dt,
                flattenColumns: Re,
                onColumnResize: Ur,
                hoverStartRow: Ce,
                hoverEndRow: ae,
                onHover: xe,
                rowExpandable: Ze.rowExpandable,
                onRow: K,
                getRowKey: V,
                expandedKeys: ue,
                childrenColumnName: we,
                rowHoverable: E,
              };
            },
            [
              yn,
              a,
              H,
              za,
              v,
              ai,
              dr,
              Jo,
              _,
              Vn,
              ir,
              kn,
              Ka,
              i,
              Ze.expandedRowClassName,
              Ne,
              Ue,
              Ze.expandRowByClick,
              Ze.expandedRowRender,
              ee,
              Ze.expandIconColumnIndex,
              Ze.indentSize,
              qo,
              dt,
              Re,
              Ur,
              Ce,
              ae,
              xe,
              Ze.rowExpandable,
              K,
              V,
              ue,
              we,
              E,
            ],
          );
        return l.createElement(At.Provider, { value: uv }, wl);
      }
      var Ii = l.forwardRef(Ei);
      function jl(t) {
        return Tn(Ii, t);
      }
      var na = jl();
      (na.EXPAND_COLUMN = It),
        (na.INTERNAL_HOOKS = kt),
        (na.Column = Si),
        (na.ColumnGroup = Ci),
        (na.Summary = lt);
      var Pi = na,
        $i = m(46529),
        Va = Yt(null),
        Nl = Yt(null);
      function Ti(t, e, n) {
        var r = e || 1;
        return n[t + r] - (n[t] || 0);
      }
      function ji(t) {
        var e = t.rowInfo,
          n = t.column,
          r = t.colIndex,
          a = t.indent,
          o = t.index,
          i = t.component,
          s = t.renderIndex,
          c = t.record,
          d = t.style,
          h = t.className,
          p = t.inverse,
          v = t.getHeight,
          y = n.render,
          g = n.dataIndex,
          Z = n.className,
          b = n.width,
          C = Pt(Nl, ['columnsOffset']),
          R = C.columnsOffset,
          L = St(e, n, r, a, o),
          O = L.key,
          K = L.fixedInfo,
          q = L.appendCellNode,
          T = L.additionalCellProps,
          X = T.style,
          z = T.colSpan,
          M = z === void 0 ? 1 : z,
          $ = T.rowSpan,
          j = $ === void 0 ? 1 : $,
          W = r - 1,
          N = Ti(W, M, R),
          E = M > 1 ? b - N : 0,
          D = (0, u.Z)(
            (0, u.Z)((0, u.Z)({}, X), d),
            {},
            {
              flex: '0 0 '.concat(N, 'px'),
              width: ''.concat(N, 'px'),
              marginRight: E,
              pointerEvents: 'auto',
            },
          ),
          F = l.useMemo(
            function () {
              return p ? j <= 1 : M === 0 || j === 0 || j > 1;
            },
            [j, M, p],
          );
        F
          ? (D.visibility = 'hidden')
          : p && (D.height = v == null ? void 0 : v(j));
        var Y = F
            ? function () {
                return null;
              }
            : y,
          H = {};
        return (
          (j === 0 || M === 0) && ((H.rowSpan = 1), (H.colSpan = 1)),
          l.createElement(
            P,
            (0, Qe.Z)(
              {
                className: fe()(Z, h),
                ellipsis: n.ellipsis,
                align: n.align,
                scope: n.rowScope,
                component: i,
                prefixCls: e.prefixCls,
                key: O,
                record: c,
                index: o,
                renderIndex: s,
                dataIndex: g,
                render: Y,
                shouldCellUpdate: n.shouldCellUpdate,
              },
              K,
              {
                appendNode: q,
                additionalProps: (0, u.Z)((0, u.Z)({}, T), {}, { style: D }, H),
              },
            ),
          )
        );
      }
      var Ni = ji,
        Oi = [
          'data',
          'index',
          'className',
          'rowKey',
          'style',
          'extra',
          'getHeight',
        ],
        Fi = l.forwardRef(function (t, e) {
          var n = t.data,
            r = t.index,
            a = t.className,
            o = t.rowKey,
            i = t.style,
            s = t.extra,
            c = t.getHeight,
            d = (0, Ie.Z)(t, Oi),
            h = n.record,
            p = n.indent,
            v = n.index,
            y = Pt(At, [
              'prefixCls',
              'flattenColumns',
              'fixColumn',
              'componentWidth',
              'scrollX',
            ]),
            g = y.scrollX,
            Z = y.flattenColumns,
            b = y.prefixCls,
            C = y.fixColumn,
            R = y.componentWidth,
            L = Pt(Va, ['getComponent']),
            O = L.getComponent,
            K = nt(h, o, r, p),
            q = O(['body', 'row'], 'div'),
            T = O(['body', 'cell'], 'div'),
            X = K.rowSupportExpand,
            z = K.expanded,
            M = K.rowProps,
            $ = K.expandedRowRender,
            j = K.expandedRowClassName,
            W;
          if (X && z) {
            var N = $(h, r, p + 1, z),
              E = j == null ? void 0 : j(h, r, p),
              D = {};
            C &&
              (D = {
                style: (0, S.Z)({}, '--virtual-width', ''.concat(R, 'px')),
              });
            var F = ''.concat(b, '-expanded-row-cell');
            W = l.createElement(
              q,
              {
                className: fe()(
                  ''.concat(b, '-expanded-row'),
                  ''.concat(b, '-expanded-row-level-').concat(p + 1),
                  E,
                ),
              },
              l.createElement(
                P,
                {
                  component: T,
                  prefixCls: b,
                  className: fe()(F, (0, S.Z)({}, ''.concat(F, '-fixed'), C)),
                  additionalProps: D,
                },
                N,
              ),
            );
          }
          var Y = (0, u.Z)((0, u.Z)({}, i), {}, { width: g });
          s && ((Y.position = 'absolute'), (Y.pointerEvents = 'none'));
          var H = l.createElement(
            q,
            (0, Qe.Z)({}, M, d, {
              'data-row-key': o,
              ref: X ? null : e,
              className: fe()(
                a,
                ''.concat(b, '-row'),
                M == null ? void 0 : M.className,
                (0, S.Z)({}, ''.concat(b, '-row-extra'), s),
              ),
              style: (0, u.Z)((0, u.Z)({}, Y), M == null ? void 0 : M.style),
            }),
            Z.map(function (V, Q) {
              return l.createElement(Ni, {
                key: Q,
                component: T,
                rowInfo: K,
                column: V,
                colIndex: Q,
                indent: p,
                index: r,
                renderIndex: v,
                record: h,
                inverse: s,
                getHeight: c,
              });
            }),
          );
          return X ? l.createElement('div', { ref: e }, H, W) : H;
        }),
        Mi = dn(Fi),
        Ol = Mi,
        Bi = l.forwardRef(function (t, e) {
          var n = t.data,
            r = t.onScroll,
            a = Pt(At, [
              'flattenColumns',
              'onColumnResize',
              'getRowKey',
              'prefixCls',
              'expandedKeys',
              'childrenColumnName',
              'emptyNode',
              'scrollX',
            ]),
            o = a.flattenColumns,
            i = a.onColumnResize,
            s = a.getRowKey,
            c = a.expandedKeys,
            d = a.prefixCls,
            h = a.childrenColumnName,
            p = a.emptyNode,
            v = a.scrollX,
            y = Pt(Va),
            g = y.sticky,
            Z = y.scrollY,
            b = y.listItemHeight,
            C = y.getComponent,
            R = y.onScroll,
            L = l.useRef(),
            O = st(n, h, c, s),
            K = l.useMemo(
              function () {
                var D = 0;
                return o.map(function (F) {
                  var Y = F.width,
                    H = F.key;
                  return (D += Y), [H, Y, D];
                });
              },
              [o],
            ),
            q = l.useMemo(
              function () {
                return K.map(function (D) {
                  return D[2];
                });
              },
              [K],
            );
          l.useEffect(
            function () {
              K.forEach(function (D) {
                var F = (0, de.Z)(D, 2),
                  Y = F[0],
                  H = F[1];
                i(Y, H);
              });
            },
            [K],
          ),
            l.useImperativeHandle(e, function () {
              var D = {
                scrollTo: function (Y) {
                  var H;
                  (H = L.current) === null || H === void 0 || H.scrollTo(Y);
                },
              };
              return (
                Object.defineProperty(D, 'scrollLeft', {
                  get: function () {
                    var Y;
                    return (
                      ((Y = L.current) === null || Y === void 0
                        ? void 0
                        : Y.getScrollInfo().x) || 0
                    );
                  },
                  set: function (Y) {
                    var H;
                    (H = L.current) === null ||
                      H === void 0 ||
                      H.scrollTo({ left: Y });
                  },
                }),
                D
              );
            });
          var T = function (F, Y) {
              var H,
                V = (H = O[Y]) === null || H === void 0 ? void 0 : H.record,
                Q = F.onCell;
              if (Q) {
                var ie,
                  pe = Q(V, Y);
                return (ie = pe == null ? void 0 : pe.rowSpan) !== null &&
                  ie !== void 0
                  ? ie
                  : 1;
              }
              return 1;
            },
            X = function (F) {
              var Y = F.start,
                H = F.end,
                V = F.getSize,
                Q = F.offsetY;
              if (H < 0) return null;
              for (
                var ie = o.filter(function (ee) {
                    return T(ee, Y) === 0;
                  }),
                  pe = Y,
                  Ce = function (Fe) {
                    if (
                      ((ie = ie.filter(function (rt) {
                        return T(rt, Fe) === 0;
                      })),
                      !ie.length)
                    )
                      return (pe = Fe), 1;
                  },
                  ae = Y;
                ae >= 0 && !Ce(ae);
                ae -= 1
              );
              for (
                var xe = o.filter(function (ee) {
                    return T(ee, H) !== 1;
                  }),
                  ne = H,
                  se = function (Fe) {
                    if (
                      ((xe = xe.filter(function (rt) {
                        return T(rt, Fe) !== 1;
                      })),
                      !xe.length)
                    )
                      return (ne = Math.max(Fe - 1, H)), 1;
                  },
                  Ze = H;
                Ze < O.length && !se(Ze);
                Ze += 1
              );
              for (
                var Ue = [],
                  ue = function (Fe) {
                    var rt = O[Fe];
                    if (!rt) return 1;
                    o.some(function (Pe) {
                      return T(Pe, Fe) > 1;
                    }) && Ue.push(Fe);
                  },
                  Ne = pe;
                Ne <= ne;
                Ne += 1
              )
                ue(Ne);
              var we = Ue.map(function (ee) {
                var Fe = O[ee],
                  rt = s(Fe.record, ee),
                  Pe = function (Ae) {
                    var je = ee + Ae - 1,
                      dt = s(O[je].record, je),
                      Re = V(rt, dt);
                    return Re.bottom - Re.top;
                  },
                  _ = V(rt);
                return l.createElement(Ol, {
                  key: ee,
                  data: Fe,
                  rowKey: rt,
                  index: ee,
                  style: { top: -Q + _.top },
                  extra: !0,
                  getHeight: Pe,
                });
              });
              return we;
            },
            z = l.useMemo(
              function () {
                return { columnsOffset: q };
              },
              [q],
            ),
            M = ''.concat(d, '-tbody'),
            $ = C(['body', 'wrapper']),
            j = C(['body', 'row'], 'div'),
            W = C(['body', 'cell'], 'div'),
            N;
          if (O.length) {
            var E = {};
            g &&
              ((E.position = 'sticky'),
              (E.bottom = 0),
              (0, it.Z)(g) === 'object' &&
                g.offsetScroll &&
                (E.bottom = g.offsetScroll)),
              (N = l.createElement(
                $i.Z,
                {
                  fullHeight: !1,
                  ref: L,
                  prefixCls: ''.concat(M, '-virtual'),
                  styles: { horizontalScrollBar: E },
                  className: M,
                  height: Z,
                  itemHeight: b || 24,
                  data: O,
                  itemKey: function (F) {
                    return s(F.record);
                  },
                  component: $,
                  scrollWidth: v,
                  onVirtualScroll: function (F) {
                    var Y = F.x;
                    r({ scrollLeft: Y });
                  },
                  onScroll: R,
                  extraRender: X,
                },
                function (D, F, Y) {
                  var H = s(D.record, F);
                  return l.createElement(Ol, {
                    data: D,
                    rowKey: H,
                    index: F,
                    style: Y.style,
                  });
                },
              ));
          } else N = l.createElement(j, { className: fe()(''.concat(d, '-placeholder')) }, l.createElement(P, { component: W, prefixCls: d }, p));
          return l.createElement(Nl.Provider, { value: z }, N);
        }),
        Li = dn(Bi),
        Di = Li,
        zi = function (e, n) {
          var r = n.ref,
            a = n.onScroll;
          return l.createElement(Di, { ref: r, data: e, onScroll: a });
        };
      function Ki(t, e) {
        var n = t.columns,
          r = t.scroll,
          a = t.sticky,
          o = t.prefixCls,
          i = o === void 0 ? Tl : o,
          s = t.className,
          c = t.listItemHeight,
          d = t.components,
          h = t.onScroll,
          p = r || {},
          v = p.x,
          y = p.y;
        typeof v != 'number' && (v = 1), typeof y != 'number' && (y = 500);
        var g = (0, he.zX)(function (C, R) {
            return (0, rr.Z)(d, C) || R;
          }),
          Z = (0, he.zX)(h),
          b = l.useMemo(
            function () {
              return {
                sticky: a,
                scrollY: y,
                listItemHeight: c,
                getComponent: g,
                onScroll: Z,
              };
            },
            [a, y, c, g, Z],
          );
        return l.createElement(
          Va.Provider,
          { value: b },
          l.createElement(
            Pi,
            (0, Qe.Z)({}, t, {
              className: fe()(s, ''.concat(i, '-virtual')),
              scroll: (0, u.Z)((0, u.Z)({}, r), {}, { x: v }),
              components: (0, u.Z)((0, u.Z)({}, d), {}, { body: zi }),
              columns: n,
              internalHooks: kt,
              tailor: !0,
              ref: e,
            }),
          ),
        );
      }
      var Ai = l.forwardRef(Ki);
      function Fl(t) {
        return Tn(Ai, t);
      }
      var fv = Fl(),
        vv = null,
        Hi = (t) => null,
        Wi = (t) => null,
        wa = m(72356),
        ka = m(44061),
        Ua = m(63909),
        va = m(39519);
      function Vi(t) {
        const [e, n] = (0, l.useState)(null);
        return [
          (0, l.useCallback)(
            (o, i, s) => {
              const c = e != null ? e : o,
                d = Math.min(c || 0, o),
                h = Math.max(c || 0, o),
                p = i.slice(d, h + 1).map((g) => t(g)),
                v = p.some((g) => !s.has(g)),
                y = [];
              return (
                p.forEach((g) => {
                  v
                    ? (s.has(g) || y.push(g), s.add(g))
                    : (s.delete(g), y.push(g));
                }),
                n(v ? h : null),
                y
              );
            },
            [e],
          ),
          (o) => {
            n(o);
          },
        ];
      }
      var Xa = m(75757),
        ma = m(63096),
        Ra = m(26347),
        Ml = m(70063);
      const Ar = {},
        Ga = 'SELECT_ALL',
        Ya = 'SELECT_INVERT',
        Ja = 'SELECT_NONE',
        Bl = [],
        Ll = (t, e) => {
          let n = [];
          return (
            (e || []).forEach((r) => {
              n.push(r),
                r &&
                  typeof r == 'object' &&
                  t in r &&
                  (n = [].concat((0, He.Z)(n), (0, He.Z)(Ll(t, r[t]))));
            }),
            n
          );
        };
      var ki = (t, e) => {
          const {
              preserveSelectedRowKeys: n,
              selectedRowKeys: r,
              defaultSelectedRowKeys: a,
              getCheckboxProps: o,
              onChange: i,
              onSelect: s,
              onSelectAll: c,
              onSelectInvert: d,
              onSelectNone: h,
              onSelectMultiple: p,
              columnWidth: v,
              type: y,
              selections: g,
              fixed: Z,
              renderCell: b,
              hideSelectAll: C,
              checkStrictly: R = !0,
            } = e || {},
            {
              prefixCls: L,
              data: O,
              pageData: K,
              getRecordByKey: q,
              getRowKey: T,
              expandType: X,
              childrenColumnName: z,
              locale: M,
              getPopupContainer: $,
            } = t,
            j = (0, Xa.ln)('Table'),
            [W, N] = Vi((ue) => ue),
            [E, D] = (0, J.Z)(r || a || Bl, { value: r }),
            F = l.useRef(new Map()),
            Y = (0, l.useCallback)(
              (ue) => {
                if (n) {
                  const Ne = new Map();
                  ue.forEach((we) => {
                    let ee = q(we);
                    !ee && F.current.has(we) && (ee = F.current.get(we)),
                      Ne.set(we, ee);
                  }),
                    (F.current = Ne);
                }
              },
              [q, n],
            );
          l.useEffect(() => {
            Y(E);
          }, [E]);
          const { keyEntities: H } = (0, l.useMemo)(() => {
              if (R) return { keyEntities: null };
              let ue = O;
              if (n) {
                const Ne = new Set(O.map((ee, Fe) => T(ee, Fe))),
                  we = Array.from(F.current).reduce((ee, Fe) => {
                    let [rt, Pe] = Fe;
                    return Ne.has(rt) ? ee : ee.concat(Pe);
                  }, []);
                ue = [].concat((0, He.Z)(ue), (0, He.Z)(we));
              }
              return (0, va.I8)(ue, { externalGetKey: T, childrenPropName: z });
            }, [O, T, R, z, n]),
            V = (0, l.useMemo)(() => Ll(z, K), [z, K]),
            Q = (0, l.useMemo)(() => {
              const ue = new Map();
              return (
                V.forEach((Ne, we) => {
                  const ee = T(Ne, we),
                    Fe = (o ? o(Ne) : null) || {};
                  ue.set(ee, Fe);
                }),
                ue
              );
            }, [V, T, o]),
            ie = (0, l.useCallback)(
              (ue) => {
                var Ne;
                return !!(
                  !((Ne = Q.get(T(ue))) === null || Ne === void 0) &&
                  Ne.disabled
                );
              },
              [Q, T],
            ),
            [pe, Ce] = (0, l.useMemo)(() => {
              if (R) return [E || [], []];
              const { checkedKeys: ue, halfCheckedKeys: Ne } = (0, Ua.S)(
                E,
                !0,
                H,
                ie,
              );
              return [ue || [], Ne];
            }, [E, R, H, ie]),
            ae = (0, l.useMemo)(() => {
              const ue = y === 'radio' ? pe.slice(0, 1) : pe;
              return new Set(ue);
            }, [pe, y]),
            xe = (0, l.useMemo)(
              () => (y === 'radio' ? new Set() : new Set(Ce)),
              [Ce, y],
            );
          l.useEffect(() => {
            e || D(Bl);
          }, [!!e]);
          const ne = (0, l.useCallback)(
              (ue, Ne) => {
                let we, ee;
                Y(ue),
                  n
                    ? ((we = ue), (ee = ue.map((Fe) => F.current.get(Fe))))
                    : ((we = []),
                      (ee = []),
                      ue.forEach((Fe) => {
                        const rt = q(Fe);
                        rt !== void 0 && (we.push(Fe), ee.push(rt));
                      })),
                  D(we),
                  i == null || i(we, ee, { type: Ne });
              },
              [D, q, i, n],
            ),
            se = (0, l.useCallback)(
              (ue, Ne, we, ee) => {
                if (s) {
                  const Fe = we.map((rt) => q(rt));
                  s(q(ue), Ne, Fe, ee);
                }
                ne(we, 'single');
              },
              [s, q, ne],
            ),
            Ze = (0, l.useMemo)(
              () =>
                !g || C
                  ? null
                  : (g === !0 ? [Ga, Ya, Ja] : g)
                      .map((Ne) =>
                        Ne === Ga
                          ? {
                              key: 'all',
                              text: M.selectionAll,
                              onSelect() {
                                ne(
                                  O.map((we, ee) => T(we, ee)).filter((we) => {
                                    const ee = Q.get(we);
                                    return (
                                      !(ee != null && ee.disabled) || ae.has(we)
                                    );
                                  }),
                                  'all',
                                );
                              },
                            }
                          : Ne === Ya
                          ? {
                              key: 'invert',
                              text: M.selectInvert,
                              onSelect() {
                                const we = new Set(ae);
                                K.forEach((Fe, rt) => {
                                  const Pe = T(Fe, rt),
                                    _ = Q.get(Pe);
                                  (_ != null && _.disabled) ||
                                    (we.has(Pe) ? we.delete(Pe) : we.add(Pe));
                                });
                                const ee = Array.from(we);
                                d &&
                                  (j.deprecated(
                                    !1,
                                    'onSelectInvert',
                                    'onChange',
                                  ),
                                  d(ee)),
                                  ne(ee, 'invert');
                              },
                            }
                          : Ne === Ja
                          ? {
                              key: 'none',
                              text: M.selectNone,
                              onSelect() {
                                h == null || h(),
                                  ne(
                                    Array.from(ae).filter((we) => {
                                      const ee = Q.get(we);
                                      return ee == null ? void 0 : ee.disabled;
                                    }),
                                    'none',
                                  );
                              },
                            }
                          : Ne,
                      )
                      .map((Ne) =>
                        Object.assign(Object.assign({}, Ne), {
                          onSelect: function () {
                            for (
                              var we,
                                ee,
                                Fe = arguments.length,
                                rt = new Array(Fe),
                                Pe = 0;
                              Pe < Fe;
                              Pe++
                            )
                              rt[Pe] = arguments[Pe];
                            (ee = Ne.onSelect) === null ||
                              ee === void 0 ||
                              (we = ee).call.apply(we, [Ne].concat(rt)),
                              N(null);
                          },
                        }),
                      ),
              [g, ae, K, T, d, ne],
            );
          return [
            (0, l.useCallback)(
              (ue) => {
                var Ne;
                if (!e) return ue.filter((_e) => _e !== Ar);
                let we = (0, He.Z)(ue);
                const ee = new Set(ae),
                  Fe = V.map(T).filter((_e) => !Q.get(_e).disabled),
                  rt = Fe.every((_e) => ee.has(_e)),
                  Pe = Fe.some((_e) => ee.has(_e)),
                  _ = () => {
                    const _e = [];
                    rt
                      ? Fe.forEach((Qt) => {
                          ee.delete(Qt), _e.push(Qt);
                        })
                      : Fe.forEach((Qt) => {
                          ee.has(Qt) || (ee.add(Qt), _e.push(Qt));
                        });
                    const Wt = Array.from(ee);
                    c == null ||
                      c(
                        !rt,
                        Wt.map((Qt) => q(Qt)),
                        _e.map((Qt) => q(Qt)),
                      ),
                      ne(Wt, 'all'),
                      N(null);
                  };
                let ge, Ae;
                if (y !== 'radio') {
                  let _e;
                  if (Ze) {
                    const qt = {
                      getPopupContainer: $,
                      items: Ze.map((un, tn) => {
                        const { key: Xe, text: Ot, onSelect: ct } = un;
                        return {
                          key: Xe != null ? Xe : tn,
                          onClick: () => {
                            ct == null || ct(Fe);
                          },
                          label: Ot,
                        };
                      }),
                    };
                    _e = l.createElement(
                      'div',
                      { className: `${L}-selection-extra` },
                      l.createElement(
                        Ra.Z,
                        { menu: qt, getPopupContainer: $ },
                        l.createElement(
                          'span',
                          null,
                          l.createElement(wa.Z, null),
                        ),
                      ),
                    );
                  }
                  const Wt = V.map((qt, un) => {
                      const tn = T(qt, un),
                        Xe = Q.get(tn) || {};
                      return Object.assign({ checked: ee.has(tn) }, Xe);
                    }).filter((qt) => {
                      let { disabled: un } = qt;
                      return un;
                    }),
                    Qt = !!Wt.length && Wt.length === V.length,
                    Sn =
                      Qt &&
                      Wt.every((qt) => {
                        let { checked: un } = qt;
                        return un;
                      }),
                    sn =
                      Qt &&
                      Wt.some((qt) => {
                        let { checked: un } = qt;
                        return un;
                      });
                  (Ae = l.createElement(ma.Z, {
                    checked: Qt ? Sn : !!V.length && rt,
                    indeterminate: Qt ? !Sn && sn : !rt && Pe,
                    onChange: _,
                    disabled: V.length === 0 || Qt,
                    'aria-label': _e ? 'Custom selection' : 'Select all',
                    skipGroup: !0,
                  })),
                    (ge =
                      !C &&
                      l.createElement(
                        'div',
                        { className: `${L}-selection` },
                        Ae,
                        _e,
                      ));
                }
                let je;
                y === 'radio'
                  ? (je = (_e, Wt, Qt) => {
                      const Sn = T(Wt, Qt),
                        sn = ee.has(Sn);
                      return {
                        node: l.createElement(
                          Ml.ZP,
                          Object.assign({}, Q.get(Sn), {
                            checked: sn,
                            onClick: (qt) => qt.stopPropagation(),
                            onChange: (qt) => {
                              ee.has(Sn) || se(Sn, !0, [Sn], qt.nativeEvent);
                            },
                          }),
                        ),
                        checked: sn,
                      };
                    })
                  : (je = (_e, Wt, Qt) => {
                      var Sn;
                      const sn = T(Wt, Qt),
                        qt = ee.has(sn),
                        un = xe.has(sn),
                        tn = Q.get(sn);
                      let Xe;
                      return (
                        X === 'nest'
                          ? (Xe = un)
                          : (Xe =
                              (Sn = tn == null ? void 0 : tn.indeterminate) !==
                                null && Sn !== void 0
                                ? Sn
                                : un),
                        {
                          node: l.createElement(
                            ma.Z,
                            Object.assign({}, tn, {
                              indeterminate: Xe,
                              checked: qt,
                              skipGroup: !0,
                              onClick: (Ot) => Ot.stopPropagation(),
                              onChange: (Ot) => {
                                let { nativeEvent: ct } = Ot;
                                const { shiftKey: Mn } = ct,
                                  Pn = Fe.findIndex((wn) => wn === sn),
                                  Xt = pe.some((wn) => Fe.includes(wn));
                                if (Mn && R && Xt) {
                                  const wn = W(Pn, Fe, ee),
                                    Dn = Array.from(ee);
                                  p == null ||
                                    p(
                                      !qt,
                                      Dn.map((or) => q(or)),
                                      wn.map((or) => q(or)),
                                    ),
                                    ne(Dn, 'multiple');
                                } else {
                                  const wn = pe;
                                  if (R) {
                                    const Dn = qt
                                      ? (0, ka._5)(wn, sn)
                                      : (0, ka.L0)(wn, sn);
                                    se(sn, !qt, Dn, ct);
                                  } else {
                                    const Dn = (0, Ua.S)(
                                        [].concat((0, He.Z)(wn), [sn]),
                                        !0,
                                        H,
                                        ie,
                                      ),
                                      { checkedKeys: or, halfCheckedKeys: kr } =
                                        Dn;
                                    let Jn = or;
                                    if (qt) {
                                      const Vn = new Set(or);
                                      Vn.delete(sn),
                                        (Jn = (0, Ua.S)(
                                          Array.from(Vn),
                                          { checked: !1, halfCheckedKeys: kr },
                                          H,
                                          ie,
                                        ).checkedKeys);
                                    }
                                    se(sn, !qt, Jn, ct);
                                  }
                                }
                                N(qt ? null : Pn);
                              },
                            }),
                          ),
                          checked: qt,
                        }
                      );
                    });
                const dt = (_e, Wt, Qt) => {
                  const { node: Sn, checked: sn } = je(_e, Wt, Qt);
                  return b ? b(sn, Wt, Qt, Sn) : Sn;
                };
                if (!we.includes(Ar))
                  if (
                    we.findIndex((_e) => {
                      var Wt;
                      return (
                        ((Wt = _e[yt]) === null || Wt === void 0
                          ? void 0
                          : Wt.columnType) === 'EXPAND_COLUMN'
                      );
                    }) === 0
                  ) {
                    const [_e, ...Wt] = we;
                    we = [_e, Ar].concat((0, He.Z)(Wt));
                  } else we = [Ar].concat((0, He.Z)(we));
                const Re = we.indexOf(Ar);
                we = we.filter((_e, Wt) => _e !== Ar || Wt === Re);
                const xt = we[Re - 1],
                  on = we[Re + 1];
                let yn = Z;
                yn === void 0 &&
                  ((on == null ? void 0 : on.fixed) !== void 0
                    ? (yn = on.fixed)
                    : (xt == null ? void 0 : xt.fixed) !== void 0 &&
                      (yn = xt.fixed)),
                  yn &&
                    xt &&
                    ((Ne = xt[yt]) === null || Ne === void 0
                      ? void 0
                      : Ne.columnType) === 'EXPAND_COLUMN' &&
                    xt.fixed === void 0 &&
                    (xt.fixed = yn);
                const bn = fe()(`${L}-selection-col`, {
                    [`${L}-selection-col-with-dropdown`]: g && y === 'checkbox',
                  }),
                  Ln = () =>
                    e != null && e.columnTitle
                      ? typeof e.columnTitle == 'function'
                        ? e.columnTitle(Ae)
                        : e.columnTitle
                      : ge,
                  lr = {
                    fixed: yn,
                    width: v,
                    className: `${L}-selection-column`,
                    title: Ln(),
                    render: dt,
                    onCell: e.onCell,
                    [yt]: { className: bn },
                  };
                return we.map((_e) => (_e === Ar ? lr : _e));
              },
              [T, V, e, pe, ae, xe, v, Ze, X, Q, p, se, ie],
            ),
            ae,
          ];
        },
        Ui = m(53172);
      function Xi(t, e) {
        return (
          (t._antProxy = t._antProxy || {}),
          Object.keys(e).forEach((n) => {
            if (!(n in t._antProxy)) {
              const r = t[n];
              (t._antProxy[n] = r), (t[n] = e[n]);
            }
          }),
          t
        );
      }
      function Gi(t, e) {
        return (0, l.useImperativeHandle)(t, () => {
          const n = e(),
            { nativeElement: r } = n;
          return typeof Proxy != 'undefined'
            ? new Proxy(r, {
                get(a, o) {
                  return n[o] ? n[o] : Reflect.get(a, o);
                },
              })
            : Xi(r, n);
        });
      }
      function Yi(t, e, n, r) {
        const a = n - e;
        return (
          (t /= r / 2),
          t < 1 ? (a / 2) * t * t * t + e : (a / 2) * ((t -= 2) * t * t + 2) + e
        );
      }
      function Qa(t) {
        return t != null && t === t.window;
      }
      var Ji = (t) => {
        var e, n;
        if (typeof window == 'undefined') return 0;
        let r = 0;
        return (
          Qa(t)
            ? (r = t.pageYOffset)
            : t instanceof Document
            ? (r = t.documentElement.scrollTop)
            : (t instanceof HTMLElement || t) && (r = t.scrollTop),
          t &&
            !Qa(t) &&
            typeof r != 'number' &&
            (r =
              (n = ((e = t.ownerDocument) !== null && e !== void 0 ? e : t)
                .documentElement) === null || n === void 0
                ? void 0
                : n.scrollTop),
          r
        );
      };
      function Qi(t) {
        let e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
            getContainer: n = () => window,
            callback: r,
            duration: a = 450,
          } = e,
          o = n(),
          i = Ji(o),
          s = Date.now(),
          c = () => {
            const h = Date.now() - s,
              p = Yi(h > a ? a : h, i, t, a);
            Qa(o)
              ? o.scrollTo(window.pageXOffset, p)
              : o instanceof Document || o.constructor.name === 'HTMLDocument'
              ? (o.documentElement.scrollTop = p)
              : (o.scrollTop = p),
              h < a ? (0, Za.Z)(c) : typeof r == 'function' && r();
          };
        (0, Za.Z)(c);
      }
      var Ea = m(64775),
        qi = m(92228),
        _i = m(72578),
        es = m(34256),
        ts = m(8598),
        ns = m(74785),
        rs = m(92894),
        Dl = m(30026);
      function as(t) {
        return (e) => {
          const {
              prefixCls: n,
              onExpand: r,
              record: a,
              expanded: o,
              expandable: i,
            } = e,
            s = `${n}-row-expand-icon`;
          return l.createElement('button', {
            type: 'button',
            onClick: (c) => {
              r(a, c), c.stopPropagation();
            },
            className: fe()(s, {
              [`${s}-spaced`]: !i,
              [`${s}-expanded`]: i && o,
              [`${s}-collapsed`]: i && !o,
            }),
            'aria-label': o ? t.collapse : t.expand,
            'aria-expanded': o,
          });
        };
      }
      var ls = as;
      function os(t) {
        return (n, r) => {
          const a = n.querySelector(`.${t}-container`);
          let o = r;
          if (a) {
            const i = getComputedStyle(a),
              s = parseInt(i.borderLeftWidth, 10),
              c = parseInt(i.borderRightWidth, 10);
            o = r - s - c;
          }
          return o;
        };
      }
      const Hr = (t, e) =>
        'key' in t && t.key !== void 0 && t.key !== null
          ? t.key
          : t.dataIndex
          ? Array.isArray(t.dataIndex)
            ? t.dataIndex.join('.')
            : t.dataIndex
          : e;
      function ra(t, e) {
        return e ? `${e}-${t}` : `${t}`;
      }
      const Ia = (t, e) => (typeof t == 'function' ? t(e) : t),
        is = (t, e) => {
          const n = Ia(t, e);
          return Object.prototype.toString.call(n) === '[object Object]'
            ? ''
            : n;
        };
      var ss = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z',
                },
              },
            ],
          },
          name: 'filter',
          theme: 'filled',
        },
        cs = ss,
        ar = m(12242),
        ds = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: cs }));
        },
        us = l.forwardRef(ds),
        fs = us,
        vs = m(40854);
      function ms(t) {
        const e = l.useRef(t),
          n = (0, vs.Z)();
        return [
          () => e.current,
          (r) => {
            (e.current = r), n();
          },
        ];
      }
      var zl = m(72223),
        Kl = m(67429),
        Al = m(17011),
        ps = m(40850),
        Hl = m(84873),
        gs = m(69768),
        hs = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z',
                },
              },
            ],
          },
          name: 'folder-open',
          theme: 'outlined',
        },
        ys = hs,
        bs = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: ys }));
        },
        Ss = l.forwardRef(bs),
        xs = Ss,
        Cs = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z',
                },
              },
            ],
          },
          name: 'folder',
          theme: 'outlined',
        },
        Zs = Cs,
        ws = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: Zs }));
        },
        Rs = l.forwardRef(ws),
        Es = Rs,
        Is = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z',
                },
              },
            ],
          },
          name: 'holder',
          theme: 'outlined',
        },
        Ps = Is,
        $s = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: Ps }));
        },
        Ts = l.forwardRef($s),
        js = Ts,
        Ns = m(39010),
        Os = m(1258);
      const Wl = 4;
      function Fs(t) {
        const {
            dropPosition: e,
            dropLevelOffset: n,
            prefixCls: r,
            indent: a,
            direction: o = 'ltr',
          } = t,
          i = o === 'ltr' ? 'left' : 'right',
          s = o === 'ltr' ? 'right' : 'left',
          c = { [i]: -n * a + Wl, [s]: 0 };
        switch (e) {
          case -1:
            c.top = -3;
            break;
          case 1:
            c.bottom = -3;
            break;
          default:
            (c.bottom = -3), (c[i] = a + Wl);
            break;
        }
        return l.createElement('div', {
          style: c,
          className: `${r}-drop-indicator`,
        });
      }
      var Ms = Fs,
        Bs = m(89716),
        Vl = l.forwardRef((t, e) => {
          var n;
          const {
              getPrefixCls: r,
              direction: a,
              virtual: o,
              tree: i,
            } = l.useContext(Ea.E_),
            {
              prefixCls: s,
              className: c,
              showIcon: d = !1,
              showLine: h,
              switcherIcon: p,
              switcherLoadingIcon: v,
              blockNode: y = !1,
              children: g,
              checkable: Z = !1,
              selectable: b = !0,
              draggable: C,
              motion: R,
              style: L,
            } = t,
            O = r('tree', s),
            K = r(),
            q =
              R != null
                ? R
                : Object.assign(Object.assign({}, (0, Ns.Z)(K)), {
                    motionAppear: !1,
                  }),
            T = Object.assign(Object.assign({}, t), {
              checkable: Z,
              selectable: b,
              showIcon: d,
              motion: q,
              blockNode: y,
              showLine: !!h,
              dropIndicatorRender: Ms,
            }),
            [X, z, M] = (0, Os.ZP)(O),
            [, $] = (0, Dl.ZP)(),
            j =
              $.paddingXS / 2 +
              (((n = $.Tree) === null || n === void 0
                ? void 0
                : n.titleHeight) || $.controlHeightSM),
            W = l.useMemo(() => {
              if (!C) return !1;
              let E = {};
              switch (typeof C) {
                case 'function':
                  E.nodeDraggable = C;
                  break;
                case 'object':
                  E = Object.assign({}, C);
                  break;
                default:
                  break;
              }
              return (
                E.icon !== !1 && (E.icon = E.icon || l.createElement(js, null)),
                E
              );
            }, [C]),
            N = (E) =>
              l.createElement(Bs.Z, {
                prefixCls: O,
                switcherIcon: p,
                switcherLoadingIcon: v,
                treeNodeProps: E,
                showLine: h,
              });
          return X(
            l.createElement(
              Hl.Z,
              Object.assign({ itemHeight: j, ref: e, virtual: o }, T, {
                style: Object.assign(
                  Object.assign({}, i == null ? void 0 : i.style),
                  L,
                ),
                prefixCls: O,
                className: fe()(
                  {
                    [`${O}-icon-hide`]: !d,
                    [`${O}-block-node`]: y,
                    [`${O}-unselectable`]: !b,
                    [`${O}-rtl`]: a === 'rtl',
                  },
                  i == null ? void 0 : i.className,
                  c,
                  z,
                  M,
                ),
                direction: a,
                checkable:
                  Z &&
                  l.createElement('span', { className: `${O}-checkbox-inner` }),
                selectable: b,
                switcherIcon: N,
                draggable: W,
              }),
              g,
            ),
          );
        });
      const kl = 0,
        qa = 1,
        Ul = 2;
      function _a(t, e, n) {
        const { key: r, children: a } = n;
        function o(i) {
          const s = i[r],
            c = i[a];
          e(s, i) !== !1 && _a(c || [], e, n);
        }
        t.forEach(o);
      }
      function Ls(t) {
        let {
          treeData: e,
          expandedKeys: n,
          startKey: r,
          endKey: a,
          fieldNames: o,
        } = t;
        const i = [];
        let s = kl;
        if (r && r === a) return [r];
        if (!r || !a) return [];
        function c(d) {
          return d === r || d === a;
        }
        return (
          _a(
            e,
            (d) => {
              if (s === Ul) return !1;
              if (c(d)) {
                if ((i.push(d), s === kl)) s = qa;
                else if (s === qa) return (s = Ul), !1;
              } else s === qa && i.push(d);
              return n.includes(d);
            },
            (0, va.w$)(o),
          ),
          i
        );
      }
      function el(t, e, n) {
        const r = (0, He.Z)(e),
          a = [];
        return (
          _a(
            t,
            (o, i) => {
              const s = r.indexOf(o);
              return s !== -1 && (a.push(i), r.splice(s, 1)), !!r.length;
            },
            (0, va.w$)(n),
          ),
          a
        );
      }
      var Xl = function (t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var a = 0, r = Object.getOwnPropertySymbols(t);
            a < r.length;
            a++
          )
            e.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
              (n[r[a]] = t[r[a]]);
        return n;
      };
      function Ds(t) {
        const { isLeaf: e, expanded: n } = t;
        return e
          ? l.createElement(gs.Z, null)
          : n
          ? l.createElement(xs, null)
          : l.createElement(Es, null);
      }
      function Gl(t) {
        let { treeData: e, children: n } = t;
        return e || (0, va.zn)(n);
      }
      const zs = (t, e) => {
        var {
            defaultExpandAll: n,
            defaultExpandParent: r,
            defaultExpandedKeys: a,
          } = t,
          o = Xl(t, [
            'defaultExpandAll',
            'defaultExpandParent',
            'defaultExpandedKeys',
          ]);
        const i = l.useRef(),
          s = l.useRef(),
          c = () => {
            const { keyEntities: X } = (0, va.I8)(Gl(o));
            let z;
            return (
              n
                ? (z = Object.keys(X))
                : r
                ? (z = (0, ka.r7)(o.expandedKeys || a || [], X))
                : (z = o.expandedKeys || a || []),
              z
            );
          },
          [d, h] = l.useState(o.selectedKeys || o.defaultSelectedKeys || []),
          [p, v] = l.useState(() => c());
        l.useEffect(() => {
          'selectedKeys' in o && h(o.selectedKeys);
        }, [o.selectedKeys]),
          l.useEffect(() => {
            'expandedKeys' in o && v(o.expandedKeys);
          }, [o.expandedKeys]);
        const y = (X, z) => {
            var M;
            return (
              'expandedKeys' in o || v(X),
              (M = o.onExpand) === null || M === void 0
                ? void 0
                : M.call(o, X, z)
            );
          },
          g = (X, z) => {
            var M;
            const { multiple: $, fieldNames: j } = o,
              { node: W, nativeEvent: N } = z,
              { key: E = '' } = W,
              D = Gl(o),
              F = Object.assign(Object.assign({}, z), { selected: !0 }),
              Y =
                (N == null ? void 0 : N.ctrlKey) ||
                (N == null ? void 0 : N.metaKey),
              H = N == null ? void 0 : N.shiftKey;
            let V;
            $ && Y
              ? ((V = X),
                (i.current = E),
                (s.current = V),
                (F.selectedNodes = el(D, V, j)))
              : $ && H
              ? ((V = Array.from(
                  new Set(
                    [].concat(
                      (0, He.Z)(s.current || []),
                      (0, He.Z)(
                        Ls({
                          treeData: D,
                          expandedKeys: p,
                          startKey: E,
                          endKey: i.current,
                          fieldNames: j,
                        }),
                      ),
                    ),
                  ),
                )),
                (F.selectedNodes = el(D, V, j)))
              : ((V = [E]),
                (i.current = E),
                (s.current = V),
                (F.selectedNodes = el(D, V, j))),
              (M = o.onSelect) === null || M === void 0 || M.call(o, V, F),
              'selectedKeys' in o || h(V);
          },
          { getPrefixCls: Z, direction: b } = l.useContext(Ea.E_),
          {
            prefixCls: C,
            className: R,
            showIcon: L = !0,
            expandAction: O = 'click',
          } = o,
          K = Xl(o, ['prefixCls', 'className', 'showIcon', 'expandAction']),
          q = Z('tree', C),
          T = fe()(
            `${q}-directory`,
            { [`${q}-directory-rtl`]: b === 'rtl' },
            R,
          );
        return l.createElement(
          Vl,
          Object.assign({ icon: Ds, ref: e, blockNode: !0 }, K, {
            showIcon: L,
            expandAction: O,
            prefixCls: q,
            className: T,
            expandedKeys: p,
            selectedKeys: d,
            onSelect: g,
            onExpand: y,
          }),
        );
      };
      var Ks = l.forwardRef(zs);
      const tl = Vl;
      (tl.DirectoryTree = Ks), (tl.TreeNode = Hl.O);
      var Yl = tl,
        As = m(31881),
        nl = m(5472),
        Jl = (t) => {
          const {
            value: e,
            filterSearch: n,
            tablePrefixCls: r,
            locale: a,
            onChange: o,
          } = t;
          return n
            ? l.createElement(
                'div',
                { className: `${r}-filter-dropdown-search` },
                l.createElement(nl.Z, {
                  prefix: l.createElement(As.Z, null),
                  placeholder: a.filterSearchPlaceholder,
                  onChange: o,
                  value: e,
                  htmlSize: 1,
                  className: `${r}-filter-dropdown-search-input`,
                }),
              )
            : null;
        },
        Ql = m(94478);
      const Hs = (t) => {
        const { keyCode: e } = t;
        e === Ql.Z.ENTER && t.stopPropagation();
      };
      var Ws = l.forwardRef((t, e) =>
        l.createElement(
          'div',
          {
            className: t.className,
            onClick: (n) => n.stopPropagation(),
            onKeyDown: Hs,
            ref: e,
          },
          t.children,
        ),
      );
      function aa(t) {
        let e = [];
        return (
          (t || []).forEach((n) => {
            let { value: r, children: a } = n;
            e.push(r), a && (e = [].concat((0, He.Z)(e), (0, He.Z)(aa(a))));
          }),
          e
        );
      }
      function Vs(t) {
        return t.some((e) => {
          let { children: n } = e;
          return n;
        });
      }
      function ql(t, e) {
        return typeof e == 'string' || typeof e == 'number'
          ? e == null
            ? void 0
            : e.toString().toLowerCase().includes(t.trim().toLowerCase())
          : !1;
      }
      function _l(t) {
        let {
          filters: e,
          prefixCls: n,
          filteredKeys: r,
          filterMultiple: a,
          searchValue: o,
          filterSearch: i,
        } = t;
        return e.map((s, c) => {
          const d = String(s.value);
          if (s.children)
            return {
              key: d || c,
              label: s.text,
              popupClassName: `${n}-dropdown-submenu`,
              children: _l({
                filters: s.children,
                prefixCls: n,
                filteredKeys: r,
                filterMultiple: a,
                searchValue: o,
                filterSearch: i,
              }),
            };
          const h = a ? ma.Z : Ml.ZP,
            p = {
              key: s.value !== void 0 ? d : c,
              label: l.createElement(
                l.Fragment,
                null,
                l.createElement(h, { checked: r.includes(d) }),
                l.createElement('span', null, s.text),
              ),
            };
          return o.trim()
            ? typeof i == 'function'
              ? i(o, s)
                ? p
                : null
              : ql(o, s.text)
              ? p
              : null
            : p;
        });
      }
      function rl(t) {
        return t || [];
      }
      var ks = (t) => {
        var e, n;
        const {
            tablePrefixCls: r,
            prefixCls: a,
            column: o,
            dropdownPrefixCls: i,
            columnKey: s,
            filterOnClose: c,
            filterMultiple: d,
            filterMode: h = 'menu',
            filterSearch: p = !1,
            filterState: v,
            triggerFilter: y,
            locale: g,
            children: Z,
            getPopupContainer: b,
            rootClassName: C,
          } = t,
          {
            filterDropdownOpen: R,
            onFilterDropdownOpenChange: L,
            filterResetToDefaultFilteredValue: O,
            defaultFilteredValue: K,
            filterDropdownVisible: q,
            onFilterDropdownVisibleChange: T,
          } = o,
          [X, z] = l.useState(!1),
          M = !!(
            v &&
            ((!((e = v.filteredKeys) === null || e === void 0) && e.length) ||
              v.forceFiltered)
          ),
          $ = (_) => {
            z(_), L == null || L(_), T == null || T(_);
          },
          j = (n = R != null ? R : q) !== null && n !== void 0 ? n : X,
          W = v == null ? void 0 : v.filteredKeys,
          [N, E] = ms(rl(W)),
          D = (_) => {
            let { selectedKeys: ge } = _;
            E(ge);
          },
          F = (_, ge) => {
            let { node: Ae, checked: je } = ge;
            D(
              d
                ? { selectedKeys: _ }
                : { selectedKeys: je && Ae.key ? [Ae.key] : [] },
            );
          };
        l.useEffect(() => {
          X && D({ selectedKeys: rl(W) });
        }, [W]);
        const [Y, H] = l.useState([]),
          V = (_) => {
            H(_);
          },
          [Q, ie] = l.useState(''),
          pe = (_) => {
            const { value: ge } = _.target;
            ie(ge);
          };
        l.useEffect(() => {
          X || ie('');
        }, [X]);
        const Ce = (_) => {
            const ge = _ != null && _.length ? _ : null;
            if (
              (ge === null && (!v || !v.filteredKeys)) ||
              (0, Tt.Z)(ge, v == null ? void 0 : v.filteredKeys, !0)
            )
              return null;
            y({ column: o, key: s, filteredKeys: ge });
          },
          ae = () => {
            $(!1), Ce(N());
          },
          xe = function () {
            let { confirm: _, closeDropdown: ge } =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : { confirm: !1, closeDropdown: !1 };
            _ && Ce([]),
              ge && $(!1),
              ie(''),
              E(O ? (K || []).map((Ae) => String(Ae)) : []);
          },
          ne = function () {
            let { closeDropdown: _ } =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : { closeDropdown: !0 };
            _ && $(!1), Ce(N());
          },
          se = (_, ge) => {
            ge.source === 'trigger' &&
              (_ && W !== void 0 && E(rl(W)),
              $(_),
              !_ && !o.filterDropdown && c && ae());
          },
          Ze = fe()({ [`${i}-menu-without-submenu`]: !Vs(o.filters || []) }),
          Ue = (_) => {
            if (_.target.checked) {
              const ge = aa(o == null ? void 0 : o.filters).map((Ae) =>
                String(Ae),
              );
              E(ge);
            } else E([]);
          },
          ue = (_) => {
            let { filters: ge } = _;
            return (ge || []).map((Ae, je) => {
              const dt = String(Ae.value),
                Re = {
                  title: Ae.text,
                  key: Ae.value !== void 0 ? dt : String(je),
                };
              return (
                Ae.children && (Re.children = ue({ filters: Ae.children })), Re
              );
            });
          },
          Ne = (_) => {
            var ge;
            return Object.assign(Object.assign({}, _), {
              text: _.title,
              value: _.key,
              children:
                ((ge = _.children) === null || ge === void 0
                  ? void 0
                  : ge.map((Ae) => Ne(Ae))) || [],
            });
          };
        let we;
        const { direction: ee, renderEmpty: Fe } = l.useContext(Ea.E_);
        if (typeof o.filterDropdown == 'function')
          we = o.filterDropdown({
            prefixCls: `${i}-custom`,
            setSelectedKeys: (_) => D({ selectedKeys: _ }),
            selectedKeys: N(),
            confirm: ne,
            clearFilters: xe,
            filters: o.filters,
            visible: j,
            close: () => {
              $(!1);
            },
          });
        else if (o.filterDropdown) we = o.filterDropdown;
        else {
          const _ = N() || [],
            ge = () => {
              var je;
              const dt =
                (je = Fe == null ? void 0 : Fe('Table.filter')) !== null &&
                je !== void 0
                  ? je
                  : l.createElement(Kl.Z, {
                      image: Kl.Z.PRESENTED_IMAGE_SIMPLE,
                      description: g.filterEmptyText,
                      imageStyle: { height: 24 },
                      style: { margin: 0, padding: '16px 0' },
                    });
              if ((o.filters || []).length === 0) return dt;
              if (h === 'tree')
                return l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(Jl, {
                    filterSearch: p,
                    value: Q,
                    onChange: pe,
                    tablePrefixCls: r,
                    locale: g,
                  }),
                  l.createElement(
                    'div',
                    { className: `${r}-filter-dropdown-tree` },
                    d
                      ? l.createElement(
                          ma.Z,
                          {
                            checked: _.length === aa(o.filters).length,
                            indeterminate:
                              _.length > 0 && _.length < aa(o.filters).length,
                            className: `${r}-filter-dropdown-checkall`,
                            onChange: Ue,
                          },
                          g.filterCheckall,
                        )
                      : null,
                    l.createElement(Yl, {
                      checkable: !0,
                      selectable: !1,
                      blockNode: !0,
                      multiple: d,
                      checkStrictly: !d,
                      className: `${i}-menu`,
                      onCheck: F,
                      checkedKeys: _,
                      selectedKeys: _,
                      showIcon: !1,
                      treeData: ue({ filters: o.filters }),
                      autoExpandParent: !0,
                      defaultExpandAll: !0,
                      filterTreeNode: Q.trim()
                        ? (on) =>
                            typeof p == 'function'
                              ? p(Q, Ne(on))
                              : ql(Q, on.title)
                        : void 0,
                    }),
                  ),
                );
              const Re = _l({
                  filters: o.filters || [],
                  filterSearch: p,
                  prefixCls: a,
                  filteredKeys: N(),
                  filterMultiple: d,
                  searchValue: Q,
                }),
                xt = Re.every((on) => on === null);
              return l.createElement(
                l.Fragment,
                null,
                l.createElement(Jl, {
                  filterSearch: p,
                  value: Q,
                  onChange: pe,
                  tablePrefixCls: r,
                  locale: g,
                }),
                xt
                  ? dt
                  : l.createElement(Al.Z, {
                      selectable: !0,
                      multiple: d,
                      prefixCls: `${i}-menu`,
                      className: Ze,
                      onSelect: D,
                      onDeselect: D,
                      selectedKeys: _,
                      getPopupContainer: b,
                      openKeys: Y,
                      onOpenChange: V,
                      items: Re,
                    }),
              );
            },
            Ae = () =>
              O
                ? (0, Tt.Z)(
                    (K || []).map((je) => String(je)),
                    _,
                    !0,
                  )
                : _.length === 0;
          we = l.createElement(
            l.Fragment,
            null,
            ge(),
            l.createElement(
              'div',
              { className: `${a}-dropdown-btns` },
              l.createElement(
                zl.ZP,
                {
                  type: 'link',
                  size: 'small',
                  disabled: Ae(),
                  onClick: () => xe(),
                },
                g.filterReset,
              ),
              l.createElement(
                zl.ZP,
                { type: 'primary', size: 'small', onClick: ae },
                g.filterConfirm,
              ),
            ),
          );
        }
        o.filterDropdown &&
          (we = l.createElement(ps.J, { selectable: void 0 }, we));
        const rt = () =>
          l.createElement(Ws, { className: `${a}-dropdown` }, we);
        let Pe;
        return (
          typeof o.filterIcon == 'function'
            ? (Pe = o.filterIcon(M))
            : o.filterIcon
            ? (Pe = o.filterIcon)
            : (Pe = l.createElement(fs, null)),
          l.createElement(
            'div',
            { className: `${a}-column` },
            l.createElement('span', { className: `${r}-column-title` }, Z),
            l.createElement(
              Ra.Z,
              {
                dropdownRender: rt,
                trigger: ['click'],
                open: j,
                onOpenChange: se,
                getPopupContainer: b,
                placement: ee === 'rtl' ? 'bottomLeft' : 'bottomRight',
                rootClassName: C,
              },
              l.createElement(
                'span',
                {
                  role: 'button',
                  tabIndex: -1,
                  className: fe()(`${a}-trigger`, { active: M }),
                  onClick: (_) => {
                    _.stopPropagation();
                  },
                },
                Pe,
              ),
            ),
          )
        );
      };
      const al = (t, e, n) => {
        let r = [];
        return (
          (t || []).forEach((a, o) => {
            var i;
            const s = ra(o, n);
            if (a.filters || 'filterDropdown' in a || 'onFilter' in a)
              if ('filteredValue' in a) {
                let c = a.filteredValue;
                'filterDropdown' in a ||
                  (c =
                    (i = c == null ? void 0 : c.map(String)) !== null &&
                    i !== void 0
                      ? i
                      : c),
                  r.push({
                    column: a,
                    key: Hr(a, s),
                    filteredKeys: c,
                    forceFiltered: a.filtered,
                  });
              } else
                r.push({
                  column: a,
                  key: Hr(a, s),
                  filteredKeys:
                    e && a.defaultFilteredValue
                      ? a.defaultFilteredValue
                      : void 0,
                  forceFiltered: a.filtered,
                });
            'children' in a &&
              (r = [].concat((0, He.Z)(r), (0, He.Z)(al(a.children, e, s))));
          }),
          r
        );
      };
      function eo(t, e, n, r, a, o, i, s, c) {
        return n.map((d, h) => {
          const p = ra(h, s),
            {
              filterOnClose: v = !0,
              filterMultiple: y = !0,
              filterMode: g,
              filterSearch: Z,
            } = d;
          let b = d;
          if (b.filters || b.filterDropdown) {
            const C = Hr(b, p),
              R = r.find((L) => {
                let { key: O } = L;
                return C === O;
              });
            b = Object.assign(Object.assign({}, b), {
              title: (L) =>
                l.createElement(
                  ks,
                  {
                    tablePrefixCls: t,
                    prefixCls: `${t}-filter`,
                    dropdownPrefixCls: e,
                    column: b,
                    columnKey: C,
                    filterState: R,
                    filterOnClose: v,
                    filterMultiple: y,
                    filterMode: g,
                    filterSearch: Z,
                    triggerFilter: o,
                    locale: a,
                    getPopupContainer: i,
                    rootClassName: c,
                  },
                  Ia(d.title, L),
                ),
            });
          }
          return (
            'children' in b &&
              (b = Object.assign(Object.assign({}, b), {
                children: eo(t, e, b.children, r, a, o, i, p, c),
              })),
            b
          );
        });
      }
      const to = (t) => {
          const e = {};
          return (
            t.forEach((n) => {
              let { key: r, filteredKeys: a, column: o } = n;
              const i = r,
                { filters: s, filterDropdown: c } = o;
              if (c) e[i] = a || null;
              else if (Array.isArray(a)) {
                const d = aa(s);
                e[i] = d.filter((h) => a.includes(String(h)));
              } else e[i] = null;
            }),
            e
          );
        },
        ll = (t, e, n) =>
          e.reduce((a, o) => {
            const {
              column: { onFilter: i, filters: s },
              filteredKeys: c,
            } = o;
            return i && c && c.length
              ? a
                  .map((d) => Object.assign({}, d))
                  .filter((d) =>
                    c.some((h) => {
                      const p = aa(s),
                        v = p.findIndex((g) => String(g) === String(h)),
                        y = v !== -1 ? p[v] : h;
                      return d[n] && (d[n] = ll(d[n], e, n)), i(y, d);
                    }),
                  )
              : a;
          }, t),
        no = (t) =>
          t.flatMap((e) =>
            'children' in e ? [e].concat((0, He.Z)(no(e.children || []))) : [e],
          );
      var Us = (t) => {
          const {
              prefixCls: e,
              dropdownPrefixCls: n,
              mergedColumns: r,
              onFilterChange: a,
              getPopupContainer: o,
              locale: i,
              rootClassName: s,
            } = t,
            c = (0, Xa.ln)('Table'),
            d = l.useMemo(() => no(r || []), [r]),
            [h, p] = l.useState(() => al(d, !0)),
            v = l.useMemo(() => {
              const b = al(d, !1);
              if (b.length === 0) return b;
              let C = !0,
                R = !0;
              if (
                (b.forEach((L) => {
                  let { filteredKeys: O } = L;
                  O !== void 0 ? (C = !1) : (R = !1);
                }),
                C)
              ) {
                const L = (d || []).map((O, K) => Hr(O, ra(K)));
                return h
                  .filter((O) => {
                    let { key: K } = O;
                    return L.includes(K);
                  })
                  .map((O) => {
                    const K = d[L.findIndex((q) => q === O.key)];
                    return Object.assign(Object.assign({}, O), {
                      column: Object.assign(Object.assign({}, O.column), K),
                      forceFiltered: K.filtered,
                    });
                  });
              }
              return b;
            }, [d, h]),
            y = l.useMemo(() => to(v), [v]),
            g = (b) => {
              const C = v.filter((R) => {
                let { key: L } = R;
                return L !== b.key;
              });
              C.push(b), p(C), a(to(C), C);
            };
          return [(b) => eo(e, n, b, v, i, g, o, void 0, s), v, y];
        },
        Xs = m(85916),
        Gs = m(3649),
        Ys = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var a = 0, r = Object.getOwnPropertySymbols(t);
              a < r.length;
              a++
            )
              e.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
                (n[r[a]] = t[r[a]]);
          return n;
        };
      const ro = 10;
      function Js(t, e) {
        const n = { current: t.current, pageSize: t.pageSize };
        return (
          Object.keys(e && typeof e == 'object' ? e : {}).forEach((a) => {
            const o = t[a];
            typeof o != 'function' && (n[a] = o);
          }),
          n
        );
      }
      function Qs(t, e, n) {
        const r = n && typeof n == 'object' ? n : {},
          { total: a = 0 } = r,
          o = Ys(r, ['total']),
          [i, s] = (0, l.useState)(() => ({
            current: 'defaultCurrent' in o ? o.defaultCurrent : 1,
            pageSize: 'defaultPageSize' in o ? o.defaultPageSize : ro,
          })),
          c = (0, Gs.Z)(i, o, { total: a > 0 ? a : t }),
          d = Math.ceil((a || t) / c.pageSize);
        c.current > d && (c.current = d || 1);
        const h = (v, y) => {
            s({ current: v != null ? v : 1, pageSize: y || c.pageSize });
          },
          p = (v, y) => {
            var g;
            n && ((g = n.onChange) === null || g === void 0 || g.call(n, v, y)),
              h(v, y),
              e(v, y || (c == null ? void 0 : c.pageSize));
          };
        return n === !1
          ? [{}, () => {}]
          : [Object.assign(Object.assign({}, c), { onChange: p }), h];
      }
      var qs = Qs,
        _s = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
                },
              },
            ],
          },
          name: 'caret-down',
          theme: 'outlined',
        },
        ec = _s,
        tc = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: ec }));
        },
        nc = l.forwardRef(tc),
        rc = nc,
        ac = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
                },
              },
            ],
          },
          name: 'caret-up',
          theme: 'outlined',
        },
        lc = ac,
        oc = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: lc }));
        },
        ic = l.forwardRef(oc),
        sc = ic,
        Tr = m(10536);
      const Pa = 'ascend',
        ol = 'descend',
        $a = (t) =>
          typeof t.sorter == 'object' && typeof t.sorter.multiple == 'number'
            ? t.sorter.multiple
            : !1,
        ao = (t) =>
          typeof t == 'function'
            ? t
            : t && typeof t == 'object' && t.compare
            ? t.compare
            : !1,
        cc = (t, e) => (e ? t[t.indexOf(e) + 1] : t[0]),
        il = (t, e, n) => {
          let r = [];
          const a = (o, i) => {
            r.push({
              column: o,
              key: Hr(o, i),
              multiplePriority: $a(o),
              sortOrder: o.sortOrder,
            });
          };
          return (
            (t || []).forEach((o, i) => {
              const s = ra(i, n);
              o.children
                ? ('sortOrder' in o && a(o, s),
                  (r = [].concat(
                    (0, He.Z)(r),
                    (0, He.Z)(il(o.children, e, s)),
                  )))
                : o.sorter &&
                  ('sortOrder' in o
                    ? a(o, s)
                    : e &&
                      o.defaultSortOrder &&
                      r.push({
                        column: o,
                        key: Hr(o, s),
                        multiplePriority: $a(o),
                        sortOrder: o.defaultSortOrder,
                      }));
            }),
            r
          );
        },
        lo = (t, e, n, r, a, o, i, s) =>
          (e || []).map((d, h) => {
            const p = ra(h, s);
            let v = d;
            if (v.sorter) {
              const y = v.sortDirections || a,
                g = v.showSorterTooltip === void 0 ? i : v.showSorterTooltip,
                Z = Hr(v, p),
                b = n.find((z) => {
                  let { key: M } = z;
                  return M === Z;
                }),
                C = b ? b.sortOrder : null,
                R = cc(y, C);
              let L;
              if (d.sortIcon) L = d.sortIcon({ sortOrder: C });
              else {
                const z =
                    y.includes(Pa) &&
                    l.createElement(sc, {
                      className: fe()(`${t}-column-sorter-up`, {
                        active: C === Pa,
                      }),
                    }),
                  M =
                    y.includes(ol) &&
                    l.createElement(rc, {
                      className: fe()(`${t}-column-sorter-down`, {
                        active: C === ol,
                      }),
                    });
                L = l.createElement(
                  'span',
                  {
                    className: fe()(`${t}-column-sorter`, {
                      [`${t}-column-sorter-full`]: !!(z && M),
                    }),
                  },
                  l.createElement(
                    'span',
                    {
                      className: `${t}-column-sorter-inner`,
                      'aria-hidden': 'true',
                    },
                    z,
                    M,
                  ),
                );
              }
              const { cancelSort: O, triggerAsc: K, triggerDesc: q } = o || {};
              let T = O;
              R === ol ? (T = q) : R === Pa && (T = K);
              const X =
                typeof g == 'object'
                  ? Object.assign({ title: T }, g)
                  : { title: T };
              v = Object.assign(Object.assign({}, v), {
                className: fe()(v.className, { [`${t}-column-sort`]: C }),
                title: (z) => {
                  const M = `${t}-column-sorters`,
                    $ = l.createElement(
                      'span',
                      { className: `${t}-column-title` },
                      Ia(d.title, z),
                    ),
                    j = l.createElement('div', { className: M }, $, L);
                  return g
                    ? typeof g != 'boolean' &&
                      (g == null ? void 0 : g.target) === 'sorter-icon'
                      ? l.createElement(
                          'div',
                          {
                            className: `${M} ${t}-column-sorters-tooltip-target-sorter`,
                          },
                          $,
                          l.createElement(Tr.Z, Object.assign({}, X), L),
                        )
                      : l.createElement(Tr.Z, Object.assign({}, X), j)
                    : j;
                },
                onHeaderCell: (z) => {
                  var M;
                  const $ =
                      ((M = d.onHeaderCell) === null || M === void 0
                        ? void 0
                        : M.call(d, z)) || {},
                    j = $.onClick,
                    W = $.onKeyDown;
                  ($.onClick = (D) => {
                    r({
                      column: d,
                      key: Z,
                      sortOrder: R,
                      multiplePriority: $a(d),
                    }),
                      j == null || j(D);
                  }),
                    ($.onKeyDown = (D) => {
                      D.keyCode === Ql.Z.ENTER &&
                        (r({
                          column: d,
                          key: Z,
                          sortOrder: R,
                          multiplePriority: $a(d),
                        }),
                        W == null || W(D));
                    });
                  const N = is(d.title, {}),
                    E = N == null ? void 0 : N.toString();
                  return (
                    C
                      ? ($['aria-sort'] =
                          C === 'ascend' ? 'ascending' : 'descending')
                      : ($['aria-label'] = E || ''),
                    ($.className = fe()(
                      $.className,
                      `${t}-column-has-sorters`,
                    )),
                    ($.tabIndex = 0),
                    d.ellipsis && ($.title = (N != null ? N : '').toString()),
                    $
                  );
                },
              });
            }
            return (
              'children' in v &&
                (v = Object.assign(Object.assign({}, v), {
                  children: lo(t, v.children, n, r, a, o, i, p),
                })),
              v
            );
          }),
        oo = (t) => {
          const { column: e, sortOrder: n } = t;
          return { column: e, order: n, field: e.dataIndex, columnKey: e.key };
        },
        io = (t) => {
          const e = t
            .filter((n) => {
              let { sortOrder: r } = n;
              return r;
            })
            .map(oo);
          if (e.length === 0 && t.length) {
            const n = t.length - 1;
            return Object.assign(Object.assign({}, oo(t[n])), {
              column: void 0,
            });
          }
          return e.length <= 1 ? e[0] || {} : e;
        },
        sl = (t, e, n) => {
          const r = e
              .slice()
              .sort((i, s) => s.multiplePriority - i.multiplePriority),
            a = t.slice(),
            o = r.filter((i) => {
              let {
                column: { sorter: s },
                sortOrder: c,
              } = i;
              return ao(s) && c;
            });
          return o.length
            ? a
                .sort((i, s) => {
                  for (let c = 0; c < o.length; c += 1) {
                    const d = o[c],
                      {
                        column: { sorter: h },
                        sortOrder: p,
                      } = d,
                      v = ao(h);
                    if (v && p) {
                      const y = v(i, s, p);
                      if (y !== 0) return p === Pa ? y : -y;
                    }
                  }
                  return 0;
                })
                .map((i) => {
                  const s = i[n];
                  return s
                    ? Object.assign(Object.assign({}, i), { [n]: sl(s, e, n) })
                    : i;
                })
            : a;
        };
      var dc = (t) => {
        const {
            prefixCls: e,
            mergedColumns: n,
            sortDirections: r,
            tableLocale: a,
            showSorterTooltip: o,
            onSorterChange: i,
          } = t,
          [s, c] = l.useState(il(n, !0)),
          d = (Z, b) => {
            const C = [];
            return (
              Z.forEach((R, L) => {
                const O = ra(L, b);
                if ((C.push(Hr(R, O)), Array.isArray(R.children))) {
                  const K = d(R.children, O);
                  C.push.apply(C, (0, He.Z)(K));
                }
              }),
              C
            );
          },
          h = l.useMemo(() => {
            let Z = !0;
            const b = il(n, !1);
            if (!b.length) {
              const O = d(n);
              return s.filter((K) => {
                let { key: q } = K;
                return O.includes(q);
              });
            }
            const C = [];
            function R(O) {
              Z
                ? C.push(O)
                : C.push(
                    Object.assign(Object.assign({}, O), { sortOrder: null }),
                  );
            }
            let L = null;
            return (
              b.forEach((O) => {
                L === null
                  ? (R(O),
                    O.sortOrder &&
                      (O.multiplePriority === !1 ? (Z = !1) : (L = !0)))
                  : ((L && O.multiplePriority !== !1) || (Z = !1), R(O));
              }),
              C
            );
          }, [n, s]),
          p = l.useMemo(() => {
            var Z, b;
            const C = h.map((R) => {
              let { column: L, sortOrder: O } = R;
              return { column: L, order: O };
            });
            return {
              sortColumns: C,
              sortColumn:
                (Z = C[0]) === null || Z === void 0 ? void 0 : Z.column,
              sortOrder: (b = C[0]) === null || b === void 0 ? void 0 : b.order,
            };
          }, [h]),
          v = (Z) => {
            let b;
            Z.multiplePriority === !1 ||
            !h.length ||
            h[0].multiplePriority === !1
              ? (b = [Z])
              : (b = [].concat(
                  (0, He.Z)(
                    h.filter((C) => {
                      let { key: R } = C;
                      return R !== Z.key;
                    }),
                  ),
                  [Z],
                )),
              c(b),
              i(io(b), b);
          };
        return [(Z) => lo(e, Z, h, v, r, a, o), h, p, () => io(h)];
      };
      const so = (t, e) =>
        t.map((r) => {
          const a = Object.assign({}, r);
          return (
            (a.title = Ia(r.title, e)),
            'children' in a && (a.children = so(a.children, e)),
            a
          );
        });
      var uc = (t) => [l.useCallback((n) => so(n, t), [t])],
        fc = jl((t, e) => {
          const { _renderTimes: n } = t,
            { _renderTimes: r } = e;
          return n !== r;
        }),
        vc = Fl((t, e) => {
          const { _renderTimes: n } = t,
            { _renderTimes: r } = e;
          return n !== r;
        }),
        pa = m(1359),
        Ta = m(96867),
        mc = m(86029),
        pc = m(77179),
        gc = (t) => {
          const {
              componentCls: e,
              lineWidth: n,
              lineType: r,
              tableBorderColor: a,
              tableHeaderBg: o,
              tablePaddingVertical: i,
              tablePaddingHorizontal: s,
              calc: c,
            } = t,
            d = `${(0, Me.bf)(n)} ${r} ${a}`,
            h = (p, v, y) => ({
              [`&${e}-${p}`]: {
                [`> ${e}-container`]: {
                  [`> ${e}-content, > ${e}-body`]: {
                    '\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ':
                      {
                        [`> ${e}-expanded-row-fixed`]: {
                          margin: `${(0, Me.bf)(c(v).mul(-1).equal())}
              ${(0, Me.bf)(c(c(y).add(n)).mul(-1).equal())}`,
                        },
                      },
                  },
                },
              },
            });
          return {
            [`${e}-wrapper`]: {
              [`${e}${e}-bordered`]: Object.assign(
                Object.assign(
                  Object.assign(
                    {
                      [`> ${e}-title`]: { border: d, borderBottom: 0 },
                      [`> ${e}-container`]: {
                        borderInlineStart: d,
                        borderTop: d,
                        [`
            > ${e}-content,
            > ${e}-header,
            > ${e}-body,
            > ${e}-summary
          `]: {
                          '> table': {
                            '\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ':
                              { borderInlineEnd: d },
                            '> thead': {
                              '> tr:not(:last-child) > th': { borderBottom: d },
                              '> tr > th::before': {
                                backgroundColor: 'transparent !important',
                              },
                            },
                            '\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ':
                              {
                                [`> ${e}-cell-fix-right-first::after`]: {
                                  borderInlineEnd: d,
                                },
                              },
                            '\n                > tbody > tr > th,\n                > tbody > tr > td\n              ':
                              {
                                [`> ${e}-expanded-row-fixed`]: {
                                  margin: `${(0, Me.bf)(
                                    c(i).mul(-1).equal(),
                                  )} ${(0, Me.bf)(
                                    c(c(s).add(n)).mul(-1).equal(),
                                  )}`,
                                  '&::after': {
                                    position: 'absolute',
                                    top: 0,
                                    insetInlineEnd: n,
                                    bottom: 0,
                                    borderInlineEnd: d,
                                    content: '""',
                                  },
                                },
                              },
                          },
                        },
                      },
                      [`&${e}-scroll-horizontal`]: {
                        [`> ${e}-container > ${e}-body`]: {
                          '> table > tbody': {
                            [`
                > tr${e}-expanded-row,
                > tr${e}-placeholder
              `]: { '> th, > td': { borderInlineEnd: 0 } },
                          },
                        },
                      },
                    },
                    h(
                      'middle',
                      t.tablePaddingVerticalMiddle,
                      t.tablePaddingHorizontalMiddle,
                    ),
                  ),
                  h(
                    'small',
                    t.tablePaddingVerticalSmall,
                    t.tablePaddingHorizontalSmall,
                  ),
                ),
                { [`> ${e}-footer`]: { border: d, borderTop: 0 } },
              ),
              [`${e}-cell`]: {
                [`${e}-container:first-child`]: { borderTop: 0 },
                '&-scrollbar:not([rowspan])': {
                  boxShadow: `0 ${(0, Me.bf)(n)} 0 ${(0, Me.bf)(n)} ${o}`,
                },
              },
              [`${e}-bordered ${e}-cell-scrollbar`]: { borderInlineEnd: d },
            },
          };
        },
        hc = (t) => {
          const { componentCls: e } = t;
          return {
            [`${e}-wrapper`]: {
              [`${e}-cell-ellipsis`]: Object.assign(Object.assign({}, Ta.vS), {
                wordBreak: 'keep-all',
                [`
          &${e}-cell-fix-left-last,
          &${e}-cell-fix-right-first
        `]: {
                  overflow: 'visible',
                  [`${e}-cell-content`]: {
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                },
                [`${e}-column-title`]: {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  wordBreak: 'keep-all',
                },
              }),
            },
          };
        },
        yc = (t) => {
          const { componentCls: e } = t;
          return {
            [`${e}-wrapper`]: {
              [`${e}-tbody > tr${e}-placeholder`]: {
                textAlign: 'center',
                color: t.colorTextDisabled,
                '\n          &:hover > th,\n          &:hover > td,\n        ':
                  { background: t.colorBgContainer },
              },
            },
          };
        },
        bc = m(86552),
        Sc = (t) => {
          const {
              componentCls: e,
              antCls: n,
              motionDurationSlow: r,
              lineWidth: a,
              paddingXS: o,
              lineType: i,
              tableBorderColor: s,
              tableExpandIconBg: c,
              tableExpandColumnWidth: d,
              borderRadius: h,
              tablePaddingVertical: p,
              tablePaddingHorizontal: v,
              tableExpandedRowBg: y,
              paddingXXS: g,
              expandIconMarginTop: Z,
              expandIconSize: b,
              expandIconHalfInner: C,
              expandIconScale: R,
              calc: L,
            } = t,
            O = `${(0, Me.bf)(a)} ${i} ${s}`,
            K = L(g).sub(a).equal();
          return {
            [`${e}-wrapper`]: {
              [`${e}-expand-icon-col`]: { width: d },
              [`${e}-row-expand-icon-cell`]: {
                textAlign: 'center',
                [`${e}-row-expand-icon`]: {
                  display: 'inline-flex',
                  float: 'none',
                  verticalAlign: 'sub',
                },
              },
              [`${e}-row-indent`]: { height: 1, float: 'left' },
              [`${e}-row-expand-icon`]: Object.assign(
                Object.assign({}, (0, bc.N)(t)),
                {
                  position: 'relative',
                  float: 'left',
                  boxSizing: 'border-box',
                  width: b,
                  height: b,
                  padding: 0,
                  color: 'inherit',
                  lineHeight: (0, Me.bf)(b),
                  background: c,
                  border: O,
                  borderRadius: h,
                  transform: `scale(${R})`,
                  transition: `all ${r}`,
                  userSelect: 'none',
                  '&:focus, &:hover, &:active': { borderColor: 'currentcolor' },
                  '&::before, &::after': {
                    position: 'absolute',
                    background: 'currentcolor',
                    transition: `transform ${r} ease-out`,
                    content: '""',
                  },
                  '&::before': {
                    top: C,
                    insetInlineEnd: K,
                    insetInlineStart: K,
                    height: a,
                  },
                  '&::after': {
                    top: K,
                    bottom: K,
                    insetInlineStart: C,
                    width: a,
                    transform: 'rotate(90deg)',
                  },
                  '&-collapsed::before': { transform: 'rotate(-180deg)' },
                  '&-collapsed::after': { transform: 'rotate(0deg)' },
                  '&-spaced': {
                    '&::before, &::after': { display: 'none', content: 'none' },
                    background: 'transparent',
                    border: 0,
                    visibility: 'hidden',
                  },
                },
              ),
              [`${e}-row-indent + ${e}-row-expand-icon`]: {
                marginTop: Z,
                marginInlineEnd: o,
              },
              [`tr${e}-expanded-row`]: {
                '&, &:hover': { '> th, > td': { background: y } },
                [`${n}-descriptions-view`]: {
                  display: 'flex',
                  table: { flex: 'auto', width: '100%' },
                },
              },
              [`${e}-expanded-row-fixed`]: {
                position: 'relative',
                margin: `${(0, Me.bf)(L(p).mul(-1).equal())} ${(0, Me.bf)(
                  L(v).mul(-1).equal(),
                )}`,
                padding: `${(0, Me.bf)(p)} ${(0, Me.bf)(v)}`,
              },
            },
          };
        },
        xc = (t) => {
          const {
              componentCls: e,
              antCls: n,
              iconCls: r,
              tableFilterDropdownWidth: a,
              tableFilterDropdownSearchWidth: o,
              paddingXXS: i,
              paddingXS: s,
              colorText: c,
              lineWidth: d,
              lineType: h,
              tableBorderColor: p,
              headerIconColor: v,
              fontSizeSM: y,
              tablePaddingHorizontal: g,
              borderRadius: Z,
              motionDurationSlow: b,
              colorTextDescription: C,
              colorPrimary: R,
              tableHeaderFilterActiveBg: L,
              colorTextDisabled: O,
              tableFilterDropdownBg: K,
              tableFilterDropdownHeight: q,
              controlItemBgHover: T,
              controlItemBgActive: X,
              boxShadowSecondary: z,
              filterDropdownMenuBg: M,
              calc: $,
            } = t,
            j = `${n}-dropdown`,
            W = `${e}-filter-dropdown`,
            N = `${n}-tree`,
            E = `${(0, Me.bf)(d)} ${h} ${p}`;
          return [
            {
              [`${e}-wrapper`]: {
                [`${e}-filter-column`]: {
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                [`${e}-filter-trigger`]: {
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  marginBlock: $(i).mul(-1).equal(),
                  marginInline: `${(0, Me.bf)(i)} ${(0, Me.bf)(
                    $(g).div(2).mul(-1).equal(),
                  )}`,
                  padding: `0 ${(0, Me.bf)(i)}`,
                  color: v,
                  fontSize: y,
                  borderRadius: Z,
                  cursor: 'pointer',
                  transition: `all ${b}`,
                  '&:hover': { color: C, background: L },
                  '&.active': { color: R },
                },
              },
            },
            {
              [`${n}-dropdown`]: {
                [W]: Object.assign(Object.assign({}, (0, Ta.Wf)(t)), {
                  minWidth: a,
                  backgroundColor: K,
                  borderRadius: Z,
                  boxShadow: z,
                  overflow: 'hidden',
                  [`${j}-menu`]: {
                    maxHeight: q,
                    overflowX: 'hidden',
                    border: 0,
                    boxShadow: 'none',
                    borderRadius: 'unset',
                    backgroundColor: M,
                    '&:empty::after': {
                      display: 'block',
                      padding: `${(0, Me.bf)(s)} 0`,
                      color: O,
                      fontSize: y,
                      textAlign: 'center',
                      content: '"Not Found"',
                    },
                  },
                  [`${W}-tree`]: {
                    paddingBlock: `${(0, Me.bf)(s)} 0`,
                    paddingInline: s,
                    [N]: { padding: 0 },
                    [`${N}-treenode ${N}-node-content-wrapper:hover`]: {
                      backgroundColor: T,
                    },
                    [`${N}-treenode-checkbox-checked ${N}-node-content-wrapper`]:
                      { '&, &:hover': { backgroundColor: X } },
                  },
                  [`${W}-search`]: {
                    padding: s,
                    borderBottom: E,
                    '&-input': { input: { minWidth: o }, [r]: { color: O } },
                  },
                  [`${W}-checkall`]: {
                    width: '100%',
                    marginBottom: i,
                    marginInlineStart: i,
                  },
                  [`${W}-btns`]: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: `${(0, Me.bf)($(s).sub(d).equal())} ${(0, Me.bf)(
                      s,
                    )}`,
                    overflow: 'hidden',
                    borderTop: E,
                  },
                }),
              },
            },
            {
              [`${n}-dropdown ${W}, ${W}-submenu`]: {
                [`${n}-checkbox-wrapper + span`]: {
                  paddingInlineStart: s,
                  color: c,
                },
                '> ul': {
                  maxHeight: 'calc(100vh - 130px)',
                  overflowX: 'hidden',
                  overflowY: 'auto',
                },
              },
            },
          ];
        },
        Cc = (t) => {
          const {
              componentCls: e,
              lineWidth: n,
              colorSplit: r,
              motionDurationSlow: a,
              zIndexTableFixed: o,
              tableBg: i,
              zIndexTableSticky: s,
              calc: c,
            } = t,
            d = r;
          return {
            [`${e}-wrapper`]: {
              [`
        ${e}-cell-fix-left,
        ${e}-cell-fix-right
      `]: { position: 'sticky !important', zIndex: o, background: i },
              [`
        ${e}-cell-fix-left-first::after,
        ${e}-cell-fix-left-last::after
      `]: {
                position: 'absolute',
                top: 0,
                right: { _skip_check_: !0, value: 0 },
                bottom: c(n).mul(-1).equal(),
                width: 30,
                transform: 'translateX(100%)',
                transition: `box-shadow ${a}`,
                content: '""',
                pointerEvents: 'none',
              },
              [`${e}-cell-fix-left-all::after`]: { display: 'none' },
              [`
        ${e}-cell-fix-right-first::after,
        ${e}-cell-fix-right-last::after
      `]: {
                position: 'absolute',
                top: 0,
                bottom: c(n).mul(-1).equal(),
                left: { _skip_check_: !0, value: 0 },
                width: 30,
                transform: 'translateX(-100%)',
                transition: `box-shadow ${a}`,
                content: '""',
                pointerEvents: 'none',
              },
              [`${e}-container`]: {
                position: 'relative',
                '&::before, &::after': {
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  zIndex: c(s).add(1).equal({ unit: !1 }),
                  width: 30,
                  transition: `box-shadow ${a}`,
                  content: '""',
                  pointerEvents: 'none',
                },
                '&::before': { insetInlineStart: 0 },
                '&::after': { insetInlineEnd: 0 },
              },
              [`${e}-ping-left`]: {
                [`&:not(${e}-has-fix-left) ${e}-container::before`]: {
                  boxShadow: `inset 10px 0 8px -8px ${d}`,
                },
                [`
          ${e}-cell-fix-left-first::after,
          ${e}-cell-fix-left-last::after
        `]: { boxShadow: `inset 10px 0 8px -8px ${d}` },
                [`${e}-cell-fix-left-last::before`]: {
                  backgroundColor: 'transparent !important',
                },
              },
              [`${e}-ping-right`]: {
                [`&:not(${e}-has-fix-right) ${e}-container::after`]: {
                  boxShadow: `inset -10px 0 8px -8px ${d}`,
                },
                [`
          ${e}-cell-fix-right-first::after,
          ${e}-cell-fix-right-last::after
        `]: { boxShadow: `inset -10px 0 8px -8px ${d}` },
              },
              [`${e}-fixed-column-gapped`]: {
                [`
        ${e}-cell-fix-left-first::after,
        ${e}-cell-fix-left-last::after,
        ${e}-cell-fix-right-first::after,
        ${e}-cell-fix-right-last::after
      `]: { boxShadow: 'none' },
              },
            },
          };
        },
        Zc = (t) => {
          const { componentCls: e, antCls: n, margin: r } = t;
          return {
            [`${e}-wrapper`]: {
              [`${e}-pagination${n}-pagination`]: {
                margin: `${(0, Me.bf)(r)} 0`,
              },
              [`${e}-pagination`]: {
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: t.paddingXS,
                '> *': { flex: 'none' },
                '&-left': { justifyContent: 'flex-start' },
                '&-center': { justifyContent: 'center' },
                '&-right': { justifyContent: 'flex-end' },
              },
            },
          };
        },
        wc = (t) => {
          const { componentCls: e, tableRadius: n } = t;
          return {
            [`${e}-wrapper`]: {
              [e]: {
                [`${e}-title, ${e}-header`]: {
                  borderRadius: `${(0, Me.bf)(n)} ${(0, Me.bf)(n)} 0 0`,
                },
                [`${e}-title + ${e}-container`]: {
                  borderStartStartRadius: 0,
                  borderStartEndRadius: 0,
                  [`${e}-header, table`]: { borderRadius: 0 },
                  'table > thead > tr:first-child': {
                    'th:first-child, th:last-child, td:first-child, td:last-child':
                      { borderRadius: 0 },
                  },
                },
                '&-container': {
                  borderStartStartRadius: n,
                  borderStartEndRadius: n,
                  'table > thead > tr:first-child': {
                    '> *:first-child': { borderStartStartRadius: n },
                    '> *:last-child': { borderStartEndRadius: n },
                  },
                },
                '&-footer': {
                  borderRadius: `0 0 ${(0, Me.bf)(n)} ${(0, Me.bf)(n)}`,
                },
              },
            },
          };
        },
        Rc = (t) => {
          const { componentCls: e } = t;
          return {
            [`${e}-wrapper-rtl`]: {
              direction: 'rtl',
              table: { direction: 'rtl' },
              [`${e}-pagination-left`]: { justifyContent: 'flex-end' },
              [`${e}-pagination-right`]: { justifyContent: 'flex-start' },
              [`${e}-row-expand-icon`]: {
                float: 'right',
                '&::after': { transform: 'rotate(-90deg)' },
                '&-collapsed::before': { transform: 'rotate(180deg)' },
                '&-collapsed::after': { transform: 'rotate(0deg)' },
              },
              [`${e}-container`]: {
                '&::before': { insetInlineStart: 'unset', insetInlineEnd: 0 },
                '&::after': { insetInlineStart: 0, insetInlineEnd: 'unset' },
                [`${e}-row-indent`]: { float: 'right' },
              },
            },
          };
        },
        Ec = (t) => {
          const {
            componentCls: e,
            antCls: n,
            iconCls: r,
            fontSizeIcon: a,
            padding: o,
            paddingXS: i,
            headerIconColor: s,
            headerIconHoverColor: c,
            tableSelectionColumnWidth: d,
            tableSelectedRowBg: h,
            tableSelectedRowHoverBg: p,
            tableRowHoverBg: v,
            tablePaddingHorizontal: y,
            calc: g,
          } = t;
          return {
            [`${e}-wrapper`]: {
              [`${e}-selection-col`]: {
                width: d,
                [`&${e}-selection-col-with-dropdown`]: {
                  width: g(d).add(a).add(g(o).div(4)).equal(),
                },
              },
              [`${e}-bordered ${e}-selection-col`]: {
                width: g(d).add(g(i).mul(2)).equal(),
                [`&${e}-selection-col-with-dropdown`]: {
                  width: g(d).add(a).add(g(o).div(4)).add(g(i).mul(2)).equal(),
                },
              },
              [`
        table tr th${e}-selection-column,
        table tr td${e}-selection-column,
        ${e}-selection-column
      `]: {
                paddingInlineEnd: t.paddingXS,
                paddingInlineStart: t.paddingXS,
                textAlign: 'center',
                [`${n}-radio-wrapper`]: { marginInlineEnd: 0 },
              },
              [`table tr th${e}-selection-column${e}-cell-fix-left`]: {
                zIndex: g(t.zIndexTableFixed).add(1).equal({ unit: !1 }),
              },
              [`table tr th${e}-selection-column::after`]: {
                backgroundColor: 'transparent !important',
              },
              [`${e}-selection`]: {
                position: 'relative',
                display: 'inline-flex',
                flexDirection: 'column',
              },
              [`${e}-selection-extra`]: {
                position: 'absolute',
                top: 0,
                zIndex: 1,
                cursor: 'pointer',
                transition: `all ${t.motionDurationSlow}`,
                marginInlineStart: '100%',
                paddingInlineStart: (0, Me.bf)(g(y).div(4).equal()),
                [r]: {
                  color: s,
                  fontSize: a,
                  verticalAlign: 'baseline',
                  '&:hover': { color: c },
                },
              },
              [`${e}-tbody`]: {
                [`${e}-row`]: {
                  [`&${e}-row-selected`]: {
                    [`> ${e}-cell`]: {
                      background: h,
                      '&-row-hover': { background: p },
                    },
                  },
                  [`> ${e}-cell-row-hover`]: { background: v },
                },
              },
            },
          };
        },
        Ic = (t) => {
          const { componentCls: e, tableExpandColumnWidth: n, calc: r } = t,
            a = (o, i, s, c) => ({
              [`${e}${e}-${o}`]: {
                fontSize: c,
                [`
        ${e}-title,
        ${e}-footer,
        ${e}-cell,
        ${e}-thead > tr > th,
        ${e}-tbody > tr > th,
        ${e}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${(0, Me.bf)(i)} ${(0, Me.bf)(s)}` },
                [`${e}-filter-trigger`]: {
                  marginInlineEnd: (0, Me.bf)(r(s).div(2).mul(-1).equal()),
                },
                [`${e}-expanded-row-fixed`]: {
                  margin: `${(0, Me.bf)(r(i).mul(-1).equal())} ${(0, Me.bf)(
                    r(s).mul(-1).equal(),
                  )}`,
                },
                [`${e}-tbody`]: {
                  [`${e}-wrapper:only-child ${e}`]: {
                    marginBlock: (0, Me.bf)(r(i).mul(-1).equal()),
                    marginInline: `${(0, Me.bf)(r(n).sub(s).equal())} ${(0,
                    Me.bf)(r(s).mul(-1).equal())}`,
                  },
                },
                [`${e}-selection-extra`]: {
                  paddingInlineStart: (0, Me.bf)(r(s).div(4).equal()),
                },
              },
            });
          return {
            [`${e}-wrapper`]: Object.assign(
              Object.assign(
                {},
                a(
                  'middle',
                  t.tablePaddingVerticalMiddle,
                  t.tablePaddingHorizontalMiddle,
                  t.tableFontSizeMiddle,
                ),
              ),
              a(
                'small',
                t.tablePaddingVerticalSmall,
                t.tablePaddingHorizontalSmall,
                t.tableFontSizeSmall,
              ),
            ),
          };
        },
        Pc = (t) => {
          const {
            componentCls: e,
            marginXXS: n,
            fontSizeIcon: r,
            headerIconColor: a,
            headerIconHoverColor: o,
          } = t;
          return {
            [`${e}-wrapper`]: {
              [`${e}-thead th${e}-column-has-sorters`]: {
                outline: 'none',
                cursor: 'pointer',
                transition: `all ${t.motionDurationSlow}, left 0s`,
                '&:hover': {
                  background: t.tableHeaderSortHoverBg,
                  '&::before': { backgroundColor: 'transparent !important' },
                },
                '&:focus-visible': { color: t.colorPrimary },
                [`
          &${e}-cell-fix-left:hover,
          &${e}-cell-fix-right:hover
        `]: { background: t.tableFixedHeaderSortActiveBg },
              },
              [`${e}-thead th${e}-column-sort`]: {
                background: t.tableHeaderSortBg,
                '&::before': { backgroundColor: 'transparent !important' },
              },
              [`td${e}-column-sort`]: { background: t.tableBodySortBg },
              [`${e}-column-title`]: {
                position: 'relative',
                zIndex: 1,
                flex: 1,
              },
              [`${e}-column-sorters`]: {
                display: 'flex',
                flex: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&::after': {
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  content: '""',
                },
              },
              [`${e}-column-sorters-tooltip-target-sorter`]: {
                '&::after': { content: 'none' },
              },
              [`${e}-column-sorter`]: {
                marginInlineStart: n,
                color: a,
                fontSize: 0,
                transition: `color ${t.motionDurationSlow}`,
                '&-inner': {
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
                '&-up, &-down': {
                  fontSize: r,
                  '&.active': { color: t.colorPrimary },
                },
                [`${e}-column-sorter-up + ${e}-column-sorter-down`]: {
                  marginTop: '-0.3em',
                },
              },
              [`${e}-column-sorters:hover ${e}-column-sorter`]: { color: o },
            },
          };
        },
        $c = (t) => {
          const {
              componentCls: e,
              opacityLoading: n,
              tableScrollThumbBg: r,
              tableScrollThumbBgHover: a,
              tableScrollThumbSize: o,
              tableScrollBg: i,
              zIndexTableSticky: s,
              stickyScrollBarBorderRadius: c,
              lineWidth: d,
              lineType: h,
              tableBorderColor: p,
            } = t,
            v = `${(0, Me.bf)(d)} ${h} ${p}`;
          return {
            [`${e}-wrapper`]: {
              [`${e}-sticky`]: {
                '&-holder': {
                  position: 'sticky',
                  zIndex: s,
                  background: t.colorBgContainer,
                },
                '&-scroll': {
                  position: 'sticky',
                  bottom: 0,
                  height: `${(0, Me.bf)(o)} !important`,
                  zIndex: s,
                  display: 'flex',
                  alignItems: 'center',
                  background: i,
                  borderTop: v,
                  opacity: n,
                  '&:hover': { transformOrigin: 'center bottom' },
                  '&-bar': {
                    height: o,
                    backgroundColor: r,
                    borderRadius: c,
                    transition: `all ${t.motionDurationSlow}, transform none`,
                    position: 'absolute',
                    bottom: 0,
                    '&:hover, &-active': { backgroundColor: a },
                  },
                },
              },
            },
          };
        },
        co = (t) => {
          const {
              componentCls: e,
              lineWidth: n,
              tableBorderColor: r,
              calc: a,
            } = t,
            o = `${(0, Me.bf)(n)} ${t.lineType} ${r}`;
          return {
            [`${e}-wrapper`]: {
              [`${e}-summary`]: {
                position: 'relative',
                zIndex: t.zIndexTableFixed,
                background: t.tableBg,
                '> tr': { '> th, > td': { borderBottom: o } },
              },
              [`div${e}-summary`]: {
                boxShadow: `0 ${(0, Me.bf)(a(n).mul(-1).equal())} 0 ${r}`,
              },
            },
          };
        },
        Tc = (t) => {
          const {
              componentCls: e,
              motionDurationMid: n,
              lineWidth: r,
              lineType: a,
              tableBorderColor: o,
              calc: i,
            } = t,
            s = `${(0, Me.bf)(r)} ${a} ${o}`,
            c = `${e}-expanded-row-cell`;
          return {
            [`${e}-wrapper`]: {
              [`${e}-tbody-virtual`]: {
                [`${e}-tbody-virtual-holder-inner`]: {
                  [`
            & > ${e}-row, 
            & > div:not(${e}-row) > ${e}-row
          `]: { display: 'flex', boxSizing: 'border-box', width: '100%' },
                },
                [`${e}-cell`]: {
                  borderBottom: s,
                  transition: `background ${n}`,
                },
                [`${e}-expanded-row`]: {
                  [`${c}${c}-fixed`]: {
                    position: 'sticky',
                    insetInlineStart: 0,
                    overflow: 'hidden',
                    width: `calc(var(--virtual-width) - ${(0, Me.bf)(r)})`,
                    borderInlineEnd: 'none',
                  },
                },
              },
              [`${e}-bordered`]: {
                [`${e}-tbody-virtual`]: {
                  '&:after': {
                    content: '""',
                    insetInline: 0,
                    bottom: 0,
                    borderBottom: s,
                    position: 'absolute',
                  },
                  [`${e}-cell`]: {
                    borderInlineEnd: s,
                    [`&${e}-cell-fix-right-first:before`]: {
                      content: '""',
                      position: 'absolute',
                      insetBlock: 0,
                      insetInlineStart: i(r).mul(-1).equal(),
                      borderInlineStart: s,
                    },
                  },
                },
                [`&${e}-virtual`]: {
                  [`${e}-placeholder ${e}-cell`]: {
                    borderInlineEnd: s,
                    borderBottom: s,
                  },
                },
              },
            },
          };
        };
      const jc = (t) => {
          const {
              componentCls: e,
              fontWeightStrong: n,
              tablePaddingVertical: r,
              tablePaddingHorizontal: a,
              tableExpandColumnWidth: o,
              lineWidth: i,
              lineType: s,
              tableBorderColor: c,
              tableFontSize: d,
              tableBg: h,
              tableRadius: p,
              tableHeaderTextColor: v,
              motionDurationMid: y,
              tableHeaderBg: g,
              tableHeaderCellSplitColor: Z,
              tableFooterTextColor: b,
              tableFooterBg: C,
              calc: R,
            } = t,
            L = `${(0, Me.bf)(i)} ${s} ${c}`;
          return {
            [`${e}-wrapper`]: Object.assign(
              Object.assign({ clear: 'both', maxWidth: '100%' }, (0, Ta.dF)()),
              {
                [e]: Object.assign(Object.assign({}, (0, Ta.Wf)(t)), {
                  fontSize: d,
                  background: h,
                  borderRadius: `${(0, Me.bf)(p)} ${(0, Me.bf)(p)} 0 0`,
                  scrollbarColor: `${t.tableScrollThumbBg} ${t.tableScrollBg}`,
                }),
                table: {
                  width: '100%',
                  textAlign: 'start',
                  borderRadius: `${(0, Me.bf)(p)} ${(0, Me.bf)(p)} 0 0`,
                  borderCollapse: 'separate',
                  borderSpacing: 0,
                },
                [`
          ${e}-cell,
          ${e}-thead > tr > th,
          ${e}-tbody > tr > th,
          ${e}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
                  position: 'relative',
                  padding: `${(0, Me.bf)(r)} ${(0, Me.bf)(a)}`,
                  overflowWrap: 'break-word',
                },
                [`${e}-title`]: {
                  padding: `${(0, Me.bf)(r)} ${(0, Me.bf)(a)}`,
                },
                [`${e}-thead`]: {
                  '\n          > tr > th,\n          > tr > td\n        ': {
                    position: 'relative',
                    color: v,
                    fontWeight: n,
                    textAlign: 'start',
                    background: g,
                    borderBottom: L,
                    transition: `background ${y} ease`,
                    "&[colspan]:not([colspan='1'])": { textAlign: 'center' },
                    [`&:not(:last-child):not(${e}-selection-column):not(${e}-row-expand-icon-cell):not([colspan])::before`]:
                      {
                        position: 'absolute',
                        top: '50%',
                        insetInlineEnd: 0,
                        width: 1,
                        height: '1.6em',
                        backgroundColor: Z,
                        transform: 'translateY(-50%)',
                        transition: `background-color ${y}`,
                        content: '""',
                      },
                  },
                  '> tr:not(:last-child) > th[colspan]': { borderBottom: 0 },
                },
                [`${e}-tbody`]: {
                  '> tr': {
                    '> th, > td': {
                      transition: `background ${y}, border-color ${y}`,
                      borderBottom: L,
                      [`
              > ${e}-wrapper:only-child,
              > ${e}-expanded-row-fixed > ${e}-wrapper:only-child
            `]: {
                        [e]: {
                          marginBlock: (0, Me.bf)(R(r).mul(-1).equal()),
                          marginInline: `${(0, Me.bf)(R(o).sub(a).equal())}
                ${(0, Me.bf)(R(a).mul(-1).equal())}`,
                          [`${e}-tbody > tr:last-child > td`]: {
                            borderBottom: 0,
                            '&:first-child, &:last-child': { borderRadius: 0 },
                          },
                        },
                      },
                    },
                    '> th': {
                      position: 'relative',
                      color: v,
                      fontWeight: n,
                      textAlign: 'start',
                      background: g,
                      borderBottom: L,
                      transition: `background ${y} ease`,
                    },
                  },
                },
                [`${e}-footer`]: {
                  padding: `${(0, Me.bf)(r)} ${(0, Me.bf)(a)}`,
                  color: b,
                  background: C,
                },
              },
            ),
          };
        },
        Nc = (t) => {
          const {
              colorFillAlter: e,
              colorBgContainer: n,
              colorTextHeading: r,
              colorFillSecondary: a,
              colorFillContent: o,
              controlItemBgActive: i,
              controlItemBgActiveHover: s,
              padding: c,
              paddingSM: d,
              paddingXS: h,
              colorBorderSecondary: p,
              borderRadiusLG: v,
              controlHeight: y,
              colorTextPlaceholder: g,
              fontSize: Z,
              fontSizeSM: b,
              lineHeight: C,
              lineWidth: R,
              colorIcon: L,
              colorIconHover: O,
              opacityLoading: K,
              controlInteractiveSize: q,
            } = t,
            T = new pa.C(a).onBackground(n).toHexShortString(),
            X = new pa.C(o).onBackground(n).toHexShortString(),
            z = new pa.C(e).onBackground(n).toHexShortString(),
            M = new pa.C(L),
            $ = new pa.C(O),
            j = q / 2 - R,
            W = j * 2 + R * 3;
          return {
            headerBg: z,
            headerColor: r,
            headerSortActiveBg: T,
            headerSortHoverBg: X,
            bodySortBg: z,
            rowHoverBg: z,
            rowSelectedBg: i,
            rowSelectedHoverBg: s,
            rowExpandedBg: e,
            cellPaddingBlock: c,
            cellPaddingInline: c,
            cellPaddingBlockMD: d,
            cellPaddingInlineMD: h,
            cellPaddingBlockSM: h,
            cellPaddingInlineSM: h,
            borderColor: p,
            headerBorderRadius: v,
            footerBg: z,
            footerColor: r,
            cellFontSize: Z,
            cellFontSizeMD: Z,
            cellFontSizeSM: Z,
            headerSplitColor: p,
            fixedHeaderSortActiveBg: T,
            headerFilterHoverBg: o,
            filterDropdownMenuBg: n,
            filterDropdownBg: n,
            expandIconBg: n,
            selectionColumnWidth: y,
            stickyScrollBarBg: g,
            stickyScrollBarBorderRadius: 100,
            expandIconMarginTop:
              (Z * C - R * 3) / 2 - Math.ceil((b * 1.4 - R * 3) / 2),
            headerIconColor: M.clone()
              .setAlpha(M.getAlpha() * K)
              .toRgbString(),
            headerIconHoverColor: $.clone()
              .setAlpha($.getAlpha() * K)
              .toRgbString(),
            expandIconHalfInner: j,
            expandIconSize: W,
            expandIconScale: q / W,
          };
        },
        uo = 2;
      var Oc = (0, mc.I$)(
        'Table',
        (t) => {
          const {
              colorTextHeading: e,
              colorSplit: n,
              colorBgContainer: r,
              controlInteractiveSize: a,
              headerBg: o,
              headerColor: i,
              headerSortActiveBg: s,
              headerSortHoverBg: c,
              bodySortBg: d,
              rowHoverBg: h,
              rowSelectedBg: p,
              rowSelectedHoverBg: v,
              rowExpandedBg: y,
              cellPaddingBlock: g,
              cellPaddingInline: Z,
              cellPaddingBlockMD: b,
              cellPaddingInlineMD: C,
              cellPaddingBlockSM: R,
              cellPaddingInlineSM: L,
              borderColor: O,
              footerBg: K,
              footerColor: q,
              headerBorderRadius: T,
              cellFontSize: X,
              cellFontSizeMD: z,
              cellFontSizeSM: M,
              headerSplitColor: $,
              fixedHeaderSortActiveBg: j,
              headerFilterHoverBg: W,
              filterDropdownBg: N,
              expandIconBg: E,
              selectionColumnWidth: D,
              stickyScrollBarBg: F,
              calc: Y,
            } = t,
            H = (0, pc.IX)(t, {
              tableFontSize: X,
              tableBg: r,
              tableRadius: T,
              tablePaddingVertical: g,
              tablePaddingHorizontal: Z,
              tablePaddingVerticalMiddle: b,
              tablePaddingHorizontalMiddle: C,
              tablePaddingVerticalSmall: R,
              tablePaddingHorizontalSmall: L,
              tableBorderColor: O,
              tableHeaderTextColor: i,
              tableHeaderBg: o,
              tableFooterTextColor: q,
              tableFooterBg: K,
              tableHeaderCellSplitColor: $,
              tableHeaderSortBg: s,
              tableHeaderSortHoverBg: c,
              tableBodySortBg: d,
              tableFixedHeaderSortActiveBg: j,
              tableHeaderFilterActiveBg: W,
              tableFilterDropdownBg: N,
              tableRowHoverBg: h,
              tableSelectedRowBg: p,
              tableSelectedRowHoverBg: v,
              zIndexTableFixed: uo,
              zIndexTableSticky: Y(uo).add(1).equal({ unit: !1 }),
              tableFontSizeMiddle: z,
              tableFontSizeSmall: M,
              tableSelectionColumnWidth: D,
              tableExpandIconBg: E,
              tableExpandColumnWidth: Y(a).add(Y(t.padding).mul(2)).equal(),
              tableExpandedRowBg: y,
              tableFilterDropdownWidth: 120,
              tableFilterDropdownHeight: 264,
              tableFilterDropdownSearchWidth: 140,
              tableScrollThumbSize: 8,
              tableScrollThumbBg: F,
              tableScrollThumbBgHover: e,
              tableScrollBg: n,
            });
          return [
            jc(H),
            Zc(H),
            co(H),
            Pc(H),
            xc(H),
            gc(H),
            wc(H),
            Sc(H),
            co(H),
            yc(H),
            Ec(H),
            Cc(H),
            $c(H),
            hc(H),
            Ic(H),
            Rc(H),
            Tc(H),
          ];
        },
        Nc,
        { unitless: { expandIconScale: !0 } },
      );
      const Fc = [],
        Mc = (t, e) => {
          var n, r;
          const {
              prefixCls: a,
              className: o,
              rootClassName: i,
              style: s,
              size: c,
              bordered: d,
              dropdownPrefixCls: h,
              dataSource: p,
              pagination: v,
              rowSelection: y,
              rowKey: g = 'key',
              rowClassName: Z,
              columns: b,
              children: C,
              childrenColumnName: R,
              onChange: L,
              getPopupContainer: O,
              loading: K,
              expandIcon: q,
              expandable: T,
              expandedRowRender: X,
              expandIconColumnIndex: z,
              indentSize: M,
              scroll: $,
              sortDirections: j,
              locale: W,
              showSorterTooltip: N = { target: 'full-header' },
              virtual: E,
            } = t,
            D = (0, Xa.ln)('Table'),
            F = l.useMemo(() => b || Kr(C), [b, C]),
            Y = l.useMemo(() => F.some((le) => le.responsive), [F]),
            H = (0, Et.Z)(Y),
            V = l.useMemo(() => {
              const le = new Set(Object.keys(H).filter((Oe) => H[Oe]));
              return F.filter(
                (Oe) =>
                  !Oe.responsive || Oe.responsive.some((mt) => le.has(mt)),
              );
            }, [F, H]),
            Q = (0, Ui.Z)(t, ['className', 'style', 'columns']),
            {
              locale: ie = ts.Z,
              direction: pe,
              table: Ce,
              renderEmpty: ae,
              getPrefixCls: xe,
              getPopupContainer: ne,
            } = l.useContext(Ea.E_),
            se = (0, es.Z)(c),
            Ze = Object.assign(Object.assign({}, ie.Table), W),
            Ue = p || Fc,
            ue = xe('table', a),
            Ne = xe('dropdown', h),
            [, we] = (0, Dl.ZP)(),
            ee = (0, _i.Z)(ue),
            [Fe, rt, Pe] = Oc(ue, ee),
            _ = Object.assign(
              Object.assign(
                { childrenColumnName: R, expandIconColumnIndex: z },
                T,
              ),
              {
                expandIcon:
                  (n = T == null ? void 0 : T.expandIcon) !== null &&
                  n !== void 0
                    ? n
                    : (r = Ce == null ? void 0 : Ce.expandable) === null ||
                      r === void 0
                    ? void 0
                    : r.expandIcon,
              },
            ),
            { childrenColumnName: ge = 'children' } = _,
            Ae = l.useMemo(
              () =>
                Ue.some((le) => (le == null ? void 0 : le[ge]))
                  ? 'nest'
                  : X || (T != null && T.expandedRowRender)
                  ? 'row'
                  : null,
              [Ue],
            ),
            je = { body: l.useRef() },
            dt = os(ue),
            Re = l.useRef(null),
            xt = l.useRef(null);
          Gi(e, () =>
            Object.assign(Object.assign({}, xt.current), {
              nativeElement: Re.current,
            }),
          );
          const on = l.useMemo(
              () =>
                typeof g == 'function'
                  ? g
                  : (le) => (le == null ? void 0 : le[g]),
              [g],
            ),
            [yn] = (0, Xs.Z)(Ue, ge, on),
            bn = {},
            Ln = function (le, Oe) {
              let mt =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1;
              var nn, mn, vn, Ur;
              const Qn = Object.assign(Object.assign({}, bn), le);
              mt &&
                ((nn = bn.resetPagination) === null ||
                  nn === void 0 ||
                  nn.call(bn),
                !((mn = Qn.pagination) === null || mn === void 0) &&
                  mn.current &&
                  (Qn.pagination.current = 1),
                v &&
                  ((vn = v.onChange) === null ||
                    vn === void 0 ||
                    vn.call(
                      v,
                      1,
                      (Ur = Qn.pagination) === null || Ur === void 0
                        ? void 0
                        : Ur.pageSize,
                    ))),
                $ &&
                  $.scrollToFirstRowOnChange !== !1 &&
                  je.body.current &&
                  Qi(0, { getContainer: () => je.body.current }),
                L == null ||
                  L(Qn.pagination, Qn.filters, Qn.sorter, {
                    currentDataSource: ll(
                      sl(Ue, Qn.sorterStates, ge),
                      Qn.filterStates,
                      ge,
                    ),
                    action: Oe,
                  });
            },
            lr = (le, Oe) => {
              Ln({ sorter: le, sorterStates: Oe }, 'sort', !1);
            },
            [_e, Wt, Qt, Sn] = dc({
              prefixCls: ue,
              mergedColumns: V,
              onSorterChange: lr,
              sortDirections: j || ['ascend', 'descend'],
              tableLocale: Ze,
              showSorterTooltip: N,
            }),
            sn = l.useMemo(() => sl(Ue, Wt, ge), [Ue, Wt]);
          (bn.sorter = Sn()), (bn.sorterStates = Wt);
          const qt = (le, Oe) => {
              Ln({ filters: le, filterStates: Oe }, 'filter', !0);
            },
            [un, tn, Xe] = Us({
              prefixCls: ue,
              locale: Ze,
              dropdownPrefixCls: Ne,
              mergedColumns: V,
              onFilterChange: qt,
              getPopupContainer: O || ne,
              rootClassName: fe()(i, ee),
            }),
            Ot = ll(sn, tn, ge);
          (bn.filters = Xe), (bn.filterStates = tn);
          const ct = l.useMemo(() => {
              const le = {};
              return (
                Object.keys(Xe).forEach((Oe) => {
                  Xe[Oe] !== null && (le[Oe] = Xe[Oe]);
                }),
                Object.assign(Object.assign({}, Qt), { filters: le })
              );
            }, [Qt, Xe]),
            [Mn] = uc(ct),
            Pn = (le, Oe) => {
              Ln(
                {
                  pagination: Object.assign(Object.assign({}, bn.pagination), {
                    current: le,
                    pageSize: Oe,
                  }),
                },
                'paginate',
              );
            },
            [Xt, wn] = qs(Ot.length, Pn, v);
          (bn.pagination = v === !1 ? {} : Js(Xt, v)),
            (bn.resetPagination = wn);
          const Dn = l.useMemo(() => {
              if (v === !1 || !Xt.pageSize) return Ot;
              const { current: le = 1, total: Oe, pageSize: mt = ro } = Xt;
              return Ot.length < Oe
                ? Ot.length > mt
                  ? Ot.slice((le - 1) * mt, le * mt)
                  : Ot
                : Ot.slice((le - 1) * mt, le * mt);
            }, [
              !!v,
              Ot,
              Xt == null ? void 0 : Xt.current,
              Xt == null ? void 0 : Xt.pageSize,
              Xt == null ? void 0 : Xt.total,
            ]),
            [or, kr] = ki(
              {
                prefixCls: ue,
                data: Ot,
                pageData: Dn,
                getRowKey: on,
                getRecordByKey: yn,
                expandType: Ae,
                childrenColumnName: ge,
                locale: Ze,
                getPopupContainer: O || ne,
              },
              y,
            ),
            Jn = (le, Oe, mt) => {
              let nn;
              return (
                typeof Z == 'function'
                  ? (nn = fe()(Z(le, Oe, mt)))
                  : (nn = fe()(Z)),
                fe()({ [`${ue}-row-selected`]: kr.has(on(le, Oe)) }, nn)
              );
            };
          (_.__PARENT_RENDER_ICON__ = _.expandIcon),
            (_.expandIcon = _.expandIcon || q || ls(Ze)),
            Ae === 'nest' && _.expandIconColumnIndex === void 0
              ? (_.expandIconColumnIndex = y ? 1 : 0)
              : _.expandIconColumnIndex > 0 &&
                y &&
                (_.expandIconColumnIndex -= 1),
            typeof _.indentSize != 'number' &&
              (_.indentSize = typeof M == 'number' ? M : 15);
          const Vn = l.useCallback((le) => Mn(or(un(_e(le)))), [_e, un, or]);
          let kn, ir;
          if (v !== !1 && Xt != null && Xt.total) {
            let le;
            Xt.size
              ? (le = Xt.size)
              : (le = se === 'small' || se === 'middle' ? 'small' : void 0);
            const Oe = (mn) =>
                l.createElement(
                  ns.Z,
                  Object.assign({}, Xt, {
                    className: fe()(
                      `${ue}-pagination ${ue}-pagination-${mn}`,
                      Xt.className,
                    ),
                    size: le,
                  }),
                ),
              mt = pe === 'rtl' ? 'left' : 'right',
              { position: nn } = Xt;
            if (nn !== null && Array.isArray(nn)) {
              const mn = nn.find((Qn) => Qn.includes('top')),
                vn = nn.find((Qn) => Qn.includes('bottom')),
                Ur = nn.every((Qn) => `${Qn}` == 'none');
              !mn && !vn && !Ur && (ir = Oe(mt)),
                mn && (kn = Oe(mn.toLowerCase().replace('top', ''))),
                vn && (ir = Oe(vn.toLowerCase().replace('bottom', '')));
            } else ir = Oe(mt);
          }
          let Ir;
          typeof K == 'boolean'
            ? (Ir = { spinning: K })
            : typeof K == 'object' && (Ir = Object.assign({ spinning: !0 }, K));
          const br = fe()(
              Pe,
              ee,
              `${ue}-wrapper`,
              Ce == null ? void 0 : Ce.className,
              { [`${ue}-wrapper-rtl`]: pe === 'rtl' },
              o,
              i,
              rt,
            ),
            dr = Object.assign(
              Object.assign({}, Ce == null ? void 0 : Ce.style),
              s,
            ),
            ia =
              typeof (W == null ? void 0 : W.emptyText) != 'undefined'
                ? W.emptyText
                : (ae == null ? void 0 : ae('Table')) ||
                  l.createElement(qi.Z, { componentName: 'Table' }),
            ha = E ? vc : fc,
            sa = {},
            Le = l.useMemo(() => {
              const {
                  fontSize: le,
                  lineHeight: Oe,
                  padding: mt,
                  paddingXS: nn,
                  paddingSM: mn,
                } = we,
                vn = Math.floor(le * Oe);
              switch (se) {
                case 'large':
                  return mt * 2 + vn;
                case 'small':
                  return nn * 2 + vn;
                default:
                  return mn * 2 + vn;
              }
            }, [we, se]);
          return (
            E && (sa.listItemHeight = Le),
            Fe(
              l.createElement(
                'div',
                { ref: Re, className: br, style: dr },
                l.createElement(
                  rs.Z,
                  Object.assign({ spinning: !1 }, Ir),
                  kn,
                  l.createElement(
                    ha,
                    Object.assign({}, sa, Q, {
                      ref: xt,
                      columns: V,
                      direction: pe,
                      expandable: _,
                      prefixCls: ue,
                      className: fe()(
                        {
                          [`${ue}-middle`]: se === 'middle',
                          [`${ue}-small`]: se === 'small',
                          [`${ue}-bordered`]: d,
                          [`${ue}-empty`]: Ue.length === 0,
                        },
                        Pe,
                        ee,
                        rt,
                      ),
                      data: Dn,
                      rowKey: on,
                      rowClassName: Jn,
                      emptyText: ia,
                      internalHooks: kt,
                      internalRefs: je,
                      transformColumns: Vn,
                      getContainerWidth: dt,
                    }),
                  ),
                  ir,
                ),
              ),
            )
          );
        };
      var Bc = l.forwardRef(Mc);
      const Lc = (t, e) => {
          const n = l.useRef(0);
          return (
            (n.current += 1),
            l.createElement(
              Bc,
              Object.assign({}, t, { ref: e, _renderTimes: n.current }),
            )
          );
        },
        jr = l.forwardRef(Lc);
      (jr.SELECTION_COLUMN = Ar),
        (jr.EXPAND_COLUMN = It),
        (jr.SELECTION_ALL = Ga),
        (jr.SELECTION_INVERT = Ya),
        (jr.SELECTION_NONE = Ja),
        (jr.Column = Hi),
        (jr.ColumnGroup = Wi),
        (jr.Summary = lt);
      var Dc = jr,
        Wr = Dc,
        zc = m(8789),
        cl = m(55323),
        Kc = m(5733),
        dl = m(9643),
        Ac = m(96788),
        ul = m(10578),
        Hc = m(42642),
        fo = m(43472),
        Wc = '[object Map]',
        Vc = '[object Set]',
        kc = Object.prototype,
        Uc = kc.hasOwnProperty;
      function Xc(t) {
        if (t == null) return !0;
        if (
          (0, Ac.Z)(t) &&
          ((0, dl.Z)(t) ||
            typeof t == 'string' ||
            typeof t.splice == 'function' ||
            (0, ul.Z)(t) ||
            (0, fo.Z)(t) ||
            (0, Kc.Z)(t))
        )
          return !t.length;
        var e = (0, cl.Z)(t);
        if (e == Wc || e == Vc) return !t.size;
        if ((0, Hc.Z)(t)) return !(0, zc.Z)(t).length;
        for (var n in t) if (Uc.call(t, n)) return !1;
        return !0;
      }
      var Gc = Xc,
        fl = m(7865),
        Yc = m(8743),
        Jc = '__lodash_hash_undefined__';
      function Qc(t) {
        return this.__data__.set(t, Jc), this;
      }
      var qc = Qc;
      function _c(t) {
        return this.__data__.has(t);
      }
      var ed = _c;
      function ja(t) {
        var e = -1,
          n = t == null ? 0 : t.length;
        for (this.__data__ = new Yc.Z(); ++e < n; ) this.add(t[e]);
      }
      (ja.prototype.add = ja.prototype.push = qc), (ja.prototype.has = ed);
      var td = ja;
      function nd(t, e) {
        for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      }
      var rd = nd;
      function ad(t, e) {
        return t.has(e);
      }
      var ld = ad,
        od = 1,
        id = 2;
      function sd(t, e, n, r, a, o) {
        var i = n & od,
          s = t.length,
          c = e.length;
        if (s != c && !(i && c > s)) return !1;
        var d = o.get(t),
          h = o.get(e);
        if (d && h) return d == e && h == t;
        var p = -1,
          v = !0,
          y = n & id ? new td() : void 0;
        for (o.set(t, e), o.set(e, t); ++p < s; ) {
          var g = t[p],
            Z = e[p];
          if (r) var b = i ? r(Z, g, p, e, t, o) : r(g, Z, p, t, e, o);
          if (b !== void 0) {
            if (b) continue;
            v = !1;
            break;
          }
          if (y) {
            if (
              !rd(e, function (C, R) {
                if (!ld(y, R) && (g === C || a(g, C, n, r, o)))
                  return y.push(R);
              })
            ) {
              v = !1;
              break;
            }
          } else if (!(g === Z || a(g, Z, n, r, o))) {
            v = !1;
            break;
          }
        }
        return o.delete(t), o.delete(e), v;
      }
      var vo = sd,
        mo = m(80401),
        po = m(48032),
        cd = m(48043);
      function dd(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (r, a) {
            n[++e] = [a, r];
          }),
          n
        );
      }
      var ud = dd;
      function fd(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (r) {
            n[++e] = r;
          }),
          n
        );
      }
      var vd = fd,
        md = 1,
        pd = 2,
        gd = '[object Boolean]',
        hd = '[object Date]',
        yd = '[object Error]',
        bd = '[object Map]',
        Sd = '[object Number]',
        xd = '[object RegExp]',
        Cd = '[object Set]',
        Zd = '[object String]',
        wd = '[object Symbol]',
        Rd = '[object ArrayBuffer]',
        Ed = '[object DataView]',
        go = mo.Z ? mo.Z.prototype : void 0,
        vl = go ? go.valueOf : void 0;
      function Id(t, e, n, r, a, o, i) {
        switch (n) {
          case Ed:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case Rd:
            return !(
              t.byteLength != e.byteLength || !o(new po.Z(t), new po.Z(e))
            );
          case gd:
          case hd:
          case Sd:
            return (0, cd.Z)(+t, +e);
          case yd:
            return t.name == e.name && t.message == e.message;
          case xd:
          case Zd:
            return t == e + '';
          case bd:
            var s = ud;
          case Cd:
            var c = r & md;
            if ((s || (s = vd), t.size != e.size && !c)) return !1;
            var d = i.get(t);
            if (d) return d == e;
            (r |= pd), i.set(t, e);
            var h = vo(s(t), s(e), r, a, o, i);
            return i.delete(t), h;
          case wd:
            if (vl) return vl.call(t) == vl.call(e);
        }
        return !1;
      }
      var Pd = Id,
        ho = m(76781),
        $d = 1,
        Td = Object.prototype,
        jd = Td.hasOwnProperty;
      function Nd(t, e, n, r, a, o) {
        var i = n & $d,
          s = (0, ho.Z)(t),
          c = s.length,
          d = (0, ho.Z)(e),
          h = d.length;
        if (c != h && !i) return !1;
        for (var p = c; p--; ) {
          var v = s[p];
          if (!(i ? v in e : jd.call(e, v))) return !1;
        }
        var y = o.get(t),
          g = o.get(e);
        if (y && g) return y == e && g == t;
        var Z = !0;
        o.set(t, e), o.set(e, t);
        for (var b = i; ++p < c; ) {
          v = s[p];
          var C = t[v],
            R = e[v];
          if (r) var L = i ? r(R, C, v, e, t, o) : r(C, R, v, t, e, o);
          if (!(L === void 0 ? C === R || a(C, R, n, r, o) : L)) {
            Z = !1;
            break;
          }
          b || (b = v == 'constructor');
        }
        if (Z && !b) {
          var O = t.constructor,
            K = e.constructor;
          O != K &&
            'constructor' in t &&
            'constructor' in e &&
            !(
              typeof O == 'function' &&
              O instanceof O &&
              typeof K == 'function' &&
              K instanceof K
            ) &&
            (Z = !1);
        }
        return o.delete(t), o.delete(e), Z;
      }
      var Od = Nd,
        Fd = 1,
        yo = '[object Arguments]',
        bo = '[object Array]',
        Na = '[object Object]',
        Md = Object.prototype,
        So = Md.hasOwnProperty;
      function Bd(t, e, n, r, a, o) {
        var i = (0, dl.Z)(t),
          s = (0, dl.Z)(e),
          c = i ? bo : (0, cl.Z)(t),
          d = s ? bo : (0, cl.Z)(e);
        (c = c == yo ? Na : c), (d = d == yo ? Na : d);
        var h = c == Na,
          p = d == Na,
          v = c == d;
        if (v && (0, ul.Z)(t)) {
          if (!(0, ul.Z)(e)) return !1;
          (i = !0), (h = !1);
        }
        if (v && !h)
          return (
            o || (o = new fl.Z()),
            i || (0, fo.Z)(t) ? vo(t, e, n, r, a, o) : Pd(t, e, c, n, r, a, o)
          );
        if (!(n & Fd)) {
          var y = h && So.call(t, '__wrapped__'),
            g = p && So.call(e, '__wrapped__');
          if (y || g) {
            var Z = y ? t.value() : t,
              b = g ? e.value() : e;
            return o || (o = new fl.Z()), a(Z, b, n, r, o);
          }
        }
        return v ? (o || (o = new fl.Z()), Od(t, e, n, r, a, o)) : !1;
      }
      var Ld = Bd,
        xo = m(85198);
      function Co(t, e, n, r, a) {
        return t === e
          ? !0
          : t == null || e == null || (!(0, xo.Z)(t) && !(0, xo.Z)(e))
          ? t !== t && e !== e
          : Ld(t, e, n, r, Co, a);
      }
      var Dd = Co;
      function zd(t, e) {
        return Dd(t, e);
      }
      var Kd = zd,
        Oa = m(20235),
        Wv = function (e) {
          return e != null;
        };
      function Ad(t, e, n) {
        var r, a;
        if (t === !1) return !1;
        var o = e.total,
          i = e.current,
          s = e.pageSize,
          c = e.setPageInfo,
          d = (0, it.Z)(t) === 'object' ? t : {};
        return (0, u.Z)(
          (0, u.Z)(
            {
              showTotal: function (p, v) {
                return ''
                  .concat(n.getMessage('pagination.total.range', '\u7B2C'), ' ')
                  .concat(v[0], '-')
                  .concat(v[1], ' ')
                  .concat(
                    n.getMessage(
                      'pagination.total.total',
                      '\u6761/\u603B\u5171',
                    ),
                    ' ',
                  )
                  .concat(p, ' ')
                  .concat(n.getMessage('pagination.total.item', '\u6761'));
              },
              total: o,
            },
            d,
          ),
          {},
          {
            current:
              t !== !0 && t && (r = t.current) !== null && r !== void 0 ? r : i,
            pageSize:
              t !== !0 && t && (a = t.pageSize) !== null && a !== void 0
                ? a
                : s,
            onChange: function (p, v) {
              var y = t,
                g = y.onChange;
              g == null || g(p, v || 20),
                (v !== s || i !== p) && c({ pageSize: v, current: p });
            },
          },
        );
      }
      function Hd(t, e, n) {
        var r = (0, u.Z)(
          (0, u.Z)({}, n.editableUtils),
          {},
          {
            pageInfo: e.pageInfo,
            reload: (function () {
              var a = (0, oe.Z)(
                (0, Ee.Z)().mark(function i(s) {
                  return (0, Ee.Z)().wrap(function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          if (!s) {
                            d.next = 3;
                            break;
                          }
                          return (d.next = 3), e.setPageInfo({ current: 1 });
                        case 3:
                          return (d.next = 5), e == null ? void 0 : e.reload();
                        case 5:
                        case 'end':
                          return d.stop();
                      }
                  }, i);
                }),
              );
              function o(i) {
                return a.apply(this, arguments);
              }
              return o;
            })(),
            reloadAndRest: (function () {
              var a = (0, oe.Z)(
                (0, Ee.Z)().mark(function i() {
                  return (0, Ee.Z)().wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            n.onCleanSelected(),
                            (c.next = 3),
                            e.setPageInfo({ current: 1 })
                          );
                        case 3:
                          return (c.next = 5), e == null ? void 0 : e.reload();
                        case 5:
                        case 'end':
                          return c.stop();
                      }
                  }, i);
                }),
              );
              function o() {
                return a.apply(this, arguments);
              }
              return o;
            })(),
            reset: (function () {
              var a = (0, oe.Z)(
                (0, Ee.Z)().mark(function i() {
                  var s;
                  return (0, Ee.Z)().wrap(function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          return (d.next = 2), n.resetAll();
                        case 2:
                          return (
                            (d.next = 4),
                            e == null || (s = e.reset) === null || s === void 0
                              ? void 0
                              : s.call(e)
                          );
                        case 4:
                          return (d.next = 6), e == null ? void 0 : e.reload();
                        case 6:
                        case 'end':
                          return d.stop();
                      }
                  }, i);
                }),
              );
              function o() {
                return a.apply(this, arguments);
              }
              return o;
            })(),
            fullScreen: function () {
              return n.fullScreen();
            },
            clearSelected: function () {
              return n.onCleanSelected();
            },
            setPageInfo: function (o) {
              return e.setPageInfo(o);
            },
          },
        );
        t.current = r;
      }
      function Wd(t, e) {
        return e.filter(function (n) {
          return n;
        }).length < 1
          ? t
          : e.reduce(function (n, r) {
              return r(n);
            }, t);
      }
      var Zo = function (e, n) {
          return n === void 0 ? !1 : typeof n == 'boolean' ? n : n[e];
        },
        Vd = function (e) {
          var n;
          return (
            e &&
            (0, it.Z)(e) === 'object' &&
            (e == null || (n = e.props) === null || n === void 0
              ? void 0
              : n.colSpan)
          );
        },
        la = function (e, n) {
          return e
            ? Array.isArray(e)
              ? e.join('-')
              : e.toString()
            : ''.concat(n);
        };
      function kd(t) {
        return Array.isArray(t)
          ? t.join(',')
          : t == null
          ? void 0
          : t.toString();
      }
      function Ud(t) {
        var e = {},
          n = {};
        return (
          t.forEach(function (r) {
            var a = kd(r.dataIndex);
            if (a) {
              if (r.filters) {
                var o = r.defaultFilteredValue;
                o === void 0 ? (e[a] = null) : (e[a] = r.defaultFilteredValue);
              }
              r.sorter && r.defaultSortOrder && (n[a] = r.defaultSortOrder);
            }
          }),
          { sort: n, filter: e }
        );
      }
      function Xd() {
        var t,
          e,
          n,
          r,
          a,
          o,
          i =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          s = (0, l.useRef)(),
          c = (0, l.useRef)(null),
          d = (0, l.useRef)(),
          h = (0, l.useRef)(),
          p = (0, l.useState)(''),
          v = (0, de.Z)(p, 2),
          y = v[0],
          g = v[1],
          Z = (0, l.useRef)([]),
          b = (0, J.Z)(
            function () {
              return i.size || i.defaultSize || 'middle';
            },
            { value: i.size, onChange: i.onSizeChange },
          ),
          C = (0, de.Z)(b, 2),
          R = C[0],
          L = C[1],
          O = (0, l.useMemo)(
            function () {
              var $, j;
              if (
                i != null &&
                ($ = i.columnsState) !== null &&
                $ !== void 0 &&
                $.defaultValue
              )
                return i.columnsState.defaultValue;
              var W = {};
              return (
                (j = i.columns) === null ||
                  j === void 0 ||
                  j.forEach(function (N, E) {
                    var D = N.key,
                      F = N.dataIndex,
                      Y = N.fixed,
                      H = N.disable,
                      V = la(D != null ? D : F, E);
                    V && (W[V] = { show: !0, fixed: Y, disable: H });
                  }),
                W
              );
            },
            [i.columns],
          ),
          K = (0, J.Z)(
            function () {
              var $,
                j,
                W = i.columnsState || {},
                N = W.persistenceType,
                E = W.persistenceKey;
              if (E && N && typeof window != 'undefined') {
                var D = window[N];
                try {
                  var F = D == null ? void 0 : D.getItem(E);
                  if (F) {
                    var Y;
                    if (
                      i != null &&
                      (Y = i.columnsState) !== null &&
                      Y !== void 0 &&
                      Y.defaultValue
                    ) {
                      var H;
                      return (0, Oa.Z)(
                        {},
                        i == null ||
                          (H = i.columnsState) === null ||
                          H === void 0
                          ? void 0
                          : H.defaultValue,
                        JSON.parse(F),
                      );
                    }
                    return JSON.parse(F);
                  }
                } catch (V) {
                  console.warn(V);
                }
              }
              return (
                i.columnsStateMap ||
                (($ = i.columnsState) === null || $ === void 0
                  ? void 0
                  : $.value) ||
                ((j = i.columnsState) === null || j === void 0
                  ? void 0
                  : j.defaultValue) ||
                O
              );
            },
            {
              value:
                ((t = i.columnsState) === null || t === void 0
                  ? void 0
                  : t.value) || i.columnsStateMap,
              onChange:
                ((e = i.columnsState) === null || e === void 0
                  ? void 0
                  : e.onChange) || i.onColumnsStateChange,
            },
          ),
          q = (0, de.Z)(K, 2),
          T = q[0],
          X = q[1];
        (0, l.useEffect)(
          function () {
            var $ = i.columnsState || {},
              j = $.persistenceType,
              W = $.persistenceKey;
            if (W && j && typeof window != 'undefined') {
              var N = window[j];
              try {
                var E = N == null ? void 0 : N.getItem(W);
                if (E) {
                  var D;
                  if (
                    i != null &&
                    (D = i.columnsState) !== null &&
                    D !== void 0 &&
                    D.defaultValue
                  ) {
                    var F;
                    X(
                      (0, Oa.Z)(
                        {},
                        i == null ||
                          (F = i.columnsState) === null ||
                          F === void 0
                          ? void 0
                          : F.defaultValue,
                        JSON.parse(E),
                      ),
                    );
                  } else X(JSON.parse(E));
                } else X(O);
              } catch (Y) {
                console.warn(Y);
              }
            }
          },
          [
            (n = i.columnsState) === null || n === void 0
              ? void 0
              : n.persistenceKey,
            (r = i.columnsState) === null || r === void 0
              ? void 0
              : r.persistenceType,
            O,
          ],
        ),
          (0, er.ET)(
            !i.columnsStateMap,
            'columnsStateMap\u5DF2\u7ECF\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 columnsState.value \u66FF\u6362',
          ),
          (0, er.ET)(
            !i.columnsStateMap,
            'columnsStateMap has been discarded, please use columnsState.value replacement',
          );
        var z = (0, l.useCallback)(
          function () {
            var $ = i.columnsState || {},
              j = $.persistenceType,
              W = $.persistenceKey;
            if (!(!W || !j || typeof window == 'undefined')) {
              var N = window[j];
              try {
                N == null || N.removeItem(W);
              } catch (E) {
                console.warn(E);
              }
            }
          },
          [i.columnsState],
        );
        (0, l.useEffect)(
          function () {
            var $, j;
            if (
              !(
                !(
                  ($ = i.columnsState) !== null &&
                  $ !== void 0 &&
                  $.persistenceKey
                ) ||
                !(
                  (j = i.columnsState) !== null &&
                  j !== void 0 &&
                  j.persistenceType
                )
              ) &&
              typeof window != 'undefined'
            ) {
              var W = i.columnsState,
                N = W.persistenceType,
                E = W.persistenceKey,
                D = window[N];
              try {
                D == null || D.setItem(E, JSON.stringify(T));
              } catch (F) {
                console.warn(F), z();
              }
            }
          },
          [
            (a = i.columnsState) === null || a === void 0
              ? void 0
              : a.persistenceKey,
            T,
            (o = i.columnsState) === null || o === void 0
              ? void 0
              : o.persistenceType,
          ],
        );
        var M = {
          action: s.current,
          setAction: function (j) {
            s.current = j;
          },
          sortKeyColumns: Z.current,
          setSortKeyColumns: function (j) {
            Z.current = j;
          },
          propsRef: h,
          columnsMap: T,
          keyWords: y,
          setKeyWords: function (j) {
            return g(j);
          },
          setTableSize: L,
          tableSize: R,
          prefixName: d.current,
          setPrefixName: function (j) {
            d.current = j;
          },
          setColumnsMap: X,
          columns: i.columns,
          rootDomRef: c,
          clearPersistenceStorage: z,
          defaultColumnKeyMap: O,
        };
        return (
          Object.defineProperty(M, 'prefixName', {
            get: function () {
              return d.current;
            },
          }),
          Object.defineProperty(M, 'sortKeyColumns', {
            get: function () {
              return Z.current;
            },
          }),
          Object.defineProperty(M, 'action', {
            get: function () {
              return s.current;
            },
          }),
          M
        );
      }
      var Vr = (0, l.createContext)({}),
        Gd = function (e) {
          var n = Xd(e.initValue);
          return (0, x.jsx)(Vr.Provider, { value: n, children: e.children });
        },
        ga = m(73042),
        Yd = function (e) {
          return (0, S.Z)({}, e.componentCls, {
            marginBlockEnd: 16,
            backgroundColor: (0, Gt.uK)(e.colorTextBase, 0.02),
            borderRadius: e.borderRadius,
            border: 'none',
            '&-container': {
              paddingBlock: e.paddingSM,
              paddingInline: e.paddingLG,
            },
            '&-info': {
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s',
              color: e.colorTextTertiary,
              '&-content': { flex: 1 },
              '&-option': { minWidth: 48, paddingInlineStart: 16 },
            },
          });
        };
      function Jd(t) {
        return (0, Gt.Xj)('ProTableAlert', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [Yd(n)];
        });
      }
      var Qd = function (e) {
        var n = e.intl,
          r = e.onCleanSelected;
        return [
          (0, x.jsx)(
            'a',
            {
              onClick: r,
              children: n.getMessage('alert.clear', '\u6E05\u7A7A'),
            },
            '0',
          ),
        ];
      };
      function qd(t) {
        var e = t.selectedRowKeys,
          n = e === void 0 ? [] : e,
          r = t.onCleanSelected,
          a = t.alwaysShowAlert,
          o = t.selectedRows,
          i = t.alertInfoRender,
          s =
            i === void 0
              ? function (L) {
                  var O = L.intl;
                  return (0, x.jsxs)(ga.Z, {
                    children: [
                      O.getMessage('alert.selected', '\u5DF2\u9009\u62E9'),
                      n.length,
                      O.getMessage('alert.item', '\u9879'),
                      '\xA0\xA0',
                    ],
                  });
                }
              : i,
          c = t.alertOptionRender,
          d = c === void 0 ? Qd : c,
          h = (0, gn.YB)(),
          p =
            d &&
            d({
              onCleanSelected: r,
              selectedRowKeys: n,
              selectedRows: o,
              intl: h,
            }),
          v = (0, l.useContext)($e.ZP.ConfigContext),
          y = v.getPrefixCls,
          g = y('pro-table-alert'),
          Z = Jd(g),
          b = Z.wrapSSR,
          C = Z.hashId;
        if (s === !1) return null;
        var R = s({
          intl: h,
          selectedRowKeys: n,
          selectedRows: o,
          onCleanSelected: r,
        });
        return R === !1 || (n.length < 1 && !a)
          ? null
          : b(
              (0, x.jsx)('div', {
                className: ''.concat(g, ' ').concat(C).trim(),
                children: (0, x.jsx)('div', {
                  className: ''.concat(g, '-container ').concat(C).trim(),
                  children: (0, x.jsxs)('div', {
                    className: ''.concat(g, '-info ').concat(C).trim(),
                    children: [
                      (0, x.jsx)('div', {
                        className: ''
                          .concat(g, '-info-content ')
                          .concat(C)
                          .trim(),
                        children: R,
                      }),
                      p
                        ? (0, x.jsx)('div', {
                            className: ''
                              .concat(g, '-info-option ')
                              .concat(C)
                              .trim(),
                            children: p,
                          })
                        : null,
                    ],
                  }),
                }),
              }),
            );
      }
      var _d = qd,
        wo = m(29749),
        Ro = m(51222),
        Nr = m(58318),
        Eo = m(20110),
        Io = m(77783),
        Po = m(42823);
      function eu() {
        var t = (0, l.useState)(!0),
          e = (0, de.Z)(t, 2),
          n = e[1],
          r = (0, l.useCallback)(function () {
            return n(function (a) {
              return !a;
            });
          }, []);
        return r;
      }
      function tu(t, e) {
        var n = (0, l.useMemo)(function () {
          var r = { current: e };
          return new Proxy(r, {
            set: function (o, i, s) {
              return Object.is(o[i], s) || ((o[i] = s), t(n)), !0;
            },
          });
        }, []);
        return n;
      }
      function nu(t) {
        var e = eu(),
          n = tu(e, t);
        return n;
      }
      var $o = m(52975),
        Rr = m(47174),
        Er = m(3138),
        To = m(42413),
        Fa = m(36948),
        ml = m(76894),
        pl = m(7666),
        ru = m(41003),
        Ma = m(60459),
        au = function (e) {
          return (0, S.Z)({}, e.componentCls, {
            '&-sidebar-dragger': {
              width: '5px',
              cursor: 'ew-resize',
              padding: '4px 0 0',
              borderTop: '1px solid transparent',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: 100,
              backgroundColor: 'transparent',
              '&-min-disabled': { cursor: 'w-resize' },
              '&-max-disabled': { cursor: 'e-resize' },
            },
          });
        };
      function lu(t) {
        return (0, Gt.Xj)('DrawerForm', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [au(n)];
        });
      }
      var ou = [
        'children',
        'trigger',
        'onVisibleChange',
        'drawerProps',
        'onFinish',
        'submitTimeout',
        'title',
        'width',
        'resize',
        'onOpenChange',
        'visible',
        'open',
      ];
      function iu(t) {
        var e,
          n,
          r = t.children,
          a = t.trigger,
          o = t.onVisibleChange,
          i = t.drawerProps,
          s = t.onFinish,
          c = t.submitTimeout,
          d = t.title,
          h = t.width,
          p = t.resize,
          v = t.onOpenChange,
          y = t.visible,
          g = t.open,
          Z = (0, Ie.Z)(t, ou);
        (0, er.ET)(
          !Z.footer || !(i != null && i.footer),
          'DrawerForm \u662F\u4E00\u4E2A ProForm \u7684\u7279\u6B8A\u5E03\u5C40\uFF0C\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0C\u8BF7\u4F7F\u7528 submit.render \u81EA\u5B9A\u4E49\u3002',
        );
        var b = l.useMemo(
            function () {
              var Pe,
                _,
                ge,
                Ae = {
                  onResize: function () {},
                  maxWidth: (0, ml.j)() ? window.innerWidth * 0.8 : void 0,
                  minWidth: 300,
                };
              return typeof p == 'boolean'
                ? p
                  ? Ae
                  : {}
                : (0, ye.Y)({
                    onResize:
                      (Pe = p == null ? void 0 : p.onResize) !== null &&
                      Pe !== void 0
                        ? Pe
                        : Ae.onResize,
                    maxWidth:
                      (_ = p == null ? void 0 : p.maxWidth) !== null &&
                      _ !== void 0
                        ? _
                        : Ae.maxWidth,
                    minWidth:
                      (ge = p == null ? void 0 : p.minWidth) !== null &&
                      ge !== void 0
                        ? ge
                        : Ae.minWidth,
                  });
            },
            [p],
          ),
          C = (0, l.useContext)($e.ZP.ConfigContext),
          R = C.getPrefixCls('pro-form-drawer'),
          L = lu(R),
          O = L.wrapSSR,
          K = L.hashId,
          q = function (_) {
            return ''.concat(R, '-').concat(_, ' ').concat(K);
          },
          T = (0, l.useState)([]),
          X = (0, de.Z)(T, 2),
          z = X[1],
          M = (0, l.useState)(!1),
          $ = (0, de.Z)(M, 2),
          j = $[0],
          W = $[1],
          N = (0, l.useState)(!1),
          E = (0, de.Z)(N, 2),
          D = E[0],
          F = E[1],
          Y = (0, l.useState)(
            h || (p ? (b == null ? void 0 : b.minWidth) : 800),
          ),
          H = (0, de.Z)(Y, 2),
          V = H[0],
          Q = H[1],
          ie = (0, J.Z)(!!y, { value: g || y, onChange: v || o }),
          pe = (0, de.Z)(ie, 2),
          Ce = pe[0],
          ae = pe[1],
          xe = (0, l.useRef)(null),
          ne = (0, l.useCallback)(function (Pe) {
            xe.current === null && Pe && z([]), (xe.current = Pe);
          }, []),
          se = (0, l.useRef)(),
          Ze = (0, l.useCallback)(
            function () {
              var Pe,
                _,
                ge,
                Ae =
                  (Pe =
                    (_ =
                      (ge = Z.formRef) === null || ge === void 0
                        ? void 0
                        : ge.current) !== null && _ !== void 0
                      ? _
                      : Z.form) !== null && Pe !== void 0
                    ? Pe
                    : se.current;
              Ae &&
                i !== null &&
                i !== void 0 &&
                i.destroyOnClose &&
                Ae.resetFields();
            },
            [i == null ? void 0 : i.destroyOnClose, Z.form, Z.formRef],
          );
        (0, l.useEffect)(
          function () {
            Ce && (g || y) && (v == null || v(!0), o == null || o(!0)),
              D && Q(b == null ? void 0 : b.minWidth);
          },
          [y, Ce, D],
        ),
          (0, l.useImperativeHandle)(
            Z.formRef,
            function () {
              return se.current;
            },
            [se.current],
          );
        var Ue = (0, l.useMemo)(
            function () {
              return a
                ? l.cloneElement(
                    a,
                    (0, u.Z)(
                      (0, u.Z)({ key: 'trigger' }, a.props),
                      {},
                      {
                        onClick: (function () {
                          var Pe = (0, oe.Z)(
                            (0, Ee.Z)().mark(function ge(Ae) {
                              var je, dt;
                              return (0, Ee.Z)().wrap(function (xt) {
                                for (;;)
                                  switch ((xt.prev = xt.next)) {
                                    case 0:
                                      ae(!Ce),
                                        F(!Object.keys(b)),
                                        (je = a.props) === null ||
                                          je === void 0 ||
                                          (dt = je.onClick) === null ||
                                          dt === void 0 ||
                                          dt.call(je, Ae);
                                    case 3:
                                    case 'end':
                                      return xt.stop();
                                  }
                              }, ge);
                            }),
                          );
                          function _(ge) {
                            return Pe.apply(this, arguments);
                          }
                          return _;
                        })(),
                      },
                    ),
                  )
                : null;
            },
            [ae, a, Ce, F, D],
          ),
          ue = (0, l.useMemo)(
            function () {
              var Pe, _, ge, Ae;
              return Z.submitter === !1
                ? !1
                : (0, Oa.Z)(
                    {
                      searchConfig: {
                        submitText:
                          (Pe =
                            (_ = C.locale) === null ||
                            _ === void 0 ||
                            (_ = _.Modal) === null ||
                            _ === void 0
                              ? void 0
                              : _.okText) !== null && Pe !== void 0
                            ? Pe
                            : '\u786E\u8BA4',
                        resetText:
                          (ge =
                            (Ae = C.locale) === null ||
                            Ae === void 0 ||
                            (Ae = Ae.Modal) === null ||
                            Ae === void 0
                              ? void 0
                              : Ae.cancelText) !== null && ge !== void 0
                            ? ge
                            : '\u53D6\u6D88',
                      },
                      resetButtonProps: {
                        preventDefault: !0,
                        disabled: c ? j : void 0,
                        onClick: function (dt) {
                          var Re;
                          ae(!1),
                            i == null ||
                              (Re = i.onClose) === null ||
                              Re === void 0 ||
                              Re.call(i, dt);
                        },
                      },
                    },
                    Z.submitter,
                  );
            },
            [
              Z.submitter,
              (e = C.locale) === null ||
              e === void 0 ||
              (e = e.Modal) === null ||
              e === void 0
                ? void 0
                : e.okText,
              (n = C.locale) === null ||
              n === void 0 ||
              (n = n.Modal) === null ||
              n === void 0
                ? void 0
                : n.cancelText,
              c,
              j,
              ae,
              i,
            ],
          ),
          Ne = (0, l.useCallback)(function (Pe, _) {
            return (0,
            x.jsxs)(x.Fragment, { children: [Pe, xe.current && _ ? (0, x.jsx)(l.Fragment, { children: (0, zt.createPortal)(_, xe.current) }, 'submitter') : _] });
          }, []),
          we = (0, Rr.J)(
            (function () {
              var Pe = (0, oe.Z)(
                (0, Ee.Z)().mark(function _(ge) {
                  var Ae, je, dt;
                  return (0, Ee.Z)().wrap(function (xt) {
                    for (;;)
                      switch ((xt.prev = xt.next)) {
                        case 0:
                          return (
                            (Ae = s == null ? void 0 : s(ge)),
                            c &&
                              Ae instanceof Promise &&
                              (W(!0),
                              (je = setTimeout(function () {
                                return W(!1);
                              }, c)),
                              Ae.finally(function () {
                                clearTimeout(je), W(!1);
                              })),
                            (xt.next = 4),
                            Ae
                          );
                        case 4:
                          return (
                            (dt = xt.sent),
                            dt && ae(!1),
                            xt.abrupt('return', dt)
                          );
                        case 7:
                        case 'end':
                          return xt.stop();
                      }
                  }, _);
                }),
              );
              return function (_) {
                return Pe.apply(this, arguments);
              };
            })(),
          ),
          ee = (0, pl.X)(Ce, o),
          Fe = (0, l.useCallback)(
            function (Pe) {
              var _,
                ge,
                Ae =
                  (document.body.offsetWidth || 1e3) -
                  (Pe.clientX - document.body.offsetLeft),
                je =
                  (_ = b == null ? void 0 : b.minWidth) !== null && _ !== void 0
                    ? _
                    : h || 800,
                dt =
                  (ge = b == null ? void 0 : b.maxWidth) !== null &&
                  ge !== void 0
                    ? ge
                    : window.innerWidth * 0.8;
              if (Ae < je) {
                Q(je);
                return;
              }
              if (Ae > dt) {
                Q(dt);
                return;
              }
              Q(Ae);
            },
            [
              b == null ? void 0 : b.maxWidth,
              b == null ? void 0 : b.minWidth,
              h,
            ],
          ),
          rt = (0, l.useCallback)(
            function () {
              document.removeEventListener('mousemove', Fe),
                document.removeEventListener('mouseup', rt);
            },
            [Fe],
          );
        return O(
          (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsxs)(
                ru.Z,
                (0, u.Z)(
                  (0, u.Z)((0, u.Z)({ title: d, width: V }, i), ee),
                  {},
                  {
                    afterOpenChange: function (_) {
                      var ge;
                      _ || Ze(),
                        i == null ||
                          (ge = i.afterOpenChange) === null ||
                          ge === void 0 ||
                          ge.call(i, _);
                    },
                    onClose: function (_) {
                      var ge;
                      (c && j) ||
                        (ae(!1),
                        i == null ||
                          (ge = i.onClose) === null ||
                          ge === void 0 ||
                          ge.call(i, _));
                    },
                    footer:
                      Z.submitter !== !1 &&
                      (0, x.jsx)('div', {
                        ref: ne,
                        style: { display: 'flex', justifyContent: 'flex-end' },
                      }),
                    children: [
                      p
                        ? (0, x.jsx)('div', {
                            className: fe()(
                              q('sidebar-dragger'),
                              K,
                              (0, S.Z)(
                                (0, S.Z)(
                                  {},
                                  q('sidebar-dragger-min-disabled'),
                                  V === (b == null ? void 0 : b.minWidth),
                                ),
                                q('sidebar-dragger-max-disabled'),
                                V === (b == null ? void 0 : b.maxWidth),
                              ),
                            ),
                            onMouseDown: function (_) {
                              var ge;
                              b == null ||
                                (ge = b.onResize) === null ||
                                ge === void 0 ||
                                ge.call(b),
                                _.stopPropagation(),
                                _.preventDefault(),
                                document.addEventListener('mousemove', Fe),
                                document.addEventListener('mouseup', rt),
                                F(!0);
                            },
                          })
                        : null,
                      (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)(
                          Ma.I,
                          (0, u.Z)(
                            (0, u.Z)(
                              {
                                formComponentType: 'DrawerForm',
                                layout: 'vertical',
                              },
                              Z,
                            ),
                            {},
                            {
                              formRef: se,
                              onInit: function (_, ge) {
                                var Ae;
                                Z.formRef && (Z.formRef.current = ge),
                                  Z == null ||
                                    (Ae = Z.onInit) === null ||
                                    Ae === void 0 ||
                                    Ae.call(Z, _, ge),
                                  (se.current = ge);
                              },
                              submitter: ue,
                              onFinish: (function () {
                                var Pe = (0, oe.Z)(
                                  (0, Ee.Z)().mark(function _(ge) {
                                    var Ae;
                                    return (0, Ee.Z)().wrap(function (dt) {
                                      for (;;)
                                        switch ((dt.prev = dt.next)) {
                                          case 0:
                                            return (dt.next = 2), we(ge);
                                          case 2:
                                            return (
                                              (Ae = dt.sent),
                                              dt.abrupt('return', Ae)
                                            );
                                          case 4:
                                          case 'end':
                                            return dt.stop();
                                        }
                                    }, _);
                                  }),
                                );
                                return function (_) {
                                  return Pe.apply(this, arguments);
                                };
                              })(),
                              contentRender: Ne,
                              children: r,
                            },
                          ),
                        ),
                      }),
                    ],
                  },
                ),
              ),
              Ue,
            ],
          }),
        );
      }
      var su = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z',
                },
              },
            ],
          },
          name: 'filter',
          theme: 'outlined',
        },
        cu = su,
        du = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: cu }));
        },
        uu = l.forwardRef(du),
        fu = uu,
        vu = m(68975),
        mu = m(87154),
        pu = function (e) {
          return (0, S.Z)({}, e.componentCls, {
            lineHeight: '30px',
            '&::before': {
              display: 'block',
              height: 0,
              visibility: 'hidden',
              content: "'.'",
            },
            '&-small': { lineHeight: e.lineHeight },
            '&-container': {
              display: 'flex',
              flexWrap: 'wrap',
              gap: e.marginXS,
            },
            '&-item': (0, S.Z)(
              { whiteSpace: 'nowrap' },
              ''.concat(e.antCls, '-form-item'),
              { marginBlock: 0 },
            ),
            '&-line': { minWidth: '198px' },
            '&-line:not(:first-child)': {
              marginBlockStart: '16px',
              marginBlockEnd: 8,
            },
            '&-collapse-icon': {
              width: e.controlHeight,
              height: e.controlHeight,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '&-effective': (0, S.Z)(
              {},
              ''.concat(e.componentCls, '-collapse-icon'),
              { backgroundColor: e.colorBgTextHover },
            ),
          });
        };
      function gu(t) {
        return (0, Gt.Xj)('LightFilter', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [pu(n)];
        });
      }
      var hu = [
          'size',
          'collapse',
          'collapseLabel',
          'initialValues',
          'onValuesChange',
          'form',
          'placement',
          'formRef',
          'bordered',
          'ignoreRules',
          'footerRender',
        ],
        yu = function (e) {
          var n = e.items,
            r = e.prefixCls,
            a = e.size,
            o = a === void 0 ? 'middle' : a,
            i = e.collapse,
            s = e.collapseLabel,
            c = e.onValuesChange,
            d = e.bordered,
            h = e.values,
            p = e.footerRender,
            v = e.placement,
            y = (0, gn.YB)(),
            g = ''.concat(r, '-light-filter'),
            Z = gu(g),
            b = Z.wrapSSR,
            C = Z.hashId,
            R = (0, l.useState)(!1),
            L = (0, de.Z)(R, 2),
            O = L[0],
            K = L[1],
            q = (0, l.useState)(function () {
              return (0, u.Z)({}, h);
            }),
            T = (0, de.Z)(q, 2),
            X = T[0],
            z = T[1];
          (0, l.useEffect)(
            function () {
              z((0, u.Z)({}, h));
            },
            [h],
          );
          var M = (0, l.useMemo)(
              function () {
                var N = [],
                  E = [];
                return (
                  n.forEach(function (D) {
                    var F = D.props || {},
                      Y = F.secondary;
                    Y || i ? N.push(D) : E.push(D);
                  }),
                  { collapseItems: N, outsideItems: E }
                );
              },
              [e.items],
            ),
            $ = M.collapseItems,
            j = M.outsideItems,
            W = function () {
              return (
                s ||
                (i
                  ? (0, x.jsx)(fu, {
                      className: ''
                        .concat(g, '-collapse-icon ')
                        .concat(C)
                        .trim(),
                    })
                  : (0, x.jsx)(vu.Q, {
                      size: o,
                      label: y.getMessage(
                        'form.lightFilter.more',
                        '\u66F4\u591A\u7B5B\u9009',
                      ),
                    }))
              );
            };
          return b(
            (0, x.jsx)('div', {
              className: fe()(
                g,
                C,
                ''.concat(g, '-').concat(o),
                (0, S.Z)(
                  {},
                  ''.concat(g, '-effective'),
                  Object.keys(h).some(function (N) {
                    return Array.isArray(h[N]) ? h[N].length > 0 : h[N];
                  }),
                ),
              ),
              children: (0, x.jsxs)('div', {
                className: ''.concat(g, '-container ').concat(C).trim(),
                children: [
                  j.map(function (N, E) {
                    var D = N.key,
                      F = N.props.fieldProps,
                      Y =
                        F != null && F.placement
                          ? F == null
                            ? void 0
                            : F.placement
                          : v;
                    return (0,
                    x.jsx)('div', { className: ''.concat(g, '-item ').concat(C).trim(), children: l.cloneElement(N, { fieldProps: (0, u.Z)((0, u.Z)({}, N.props.fieldProps), {}, { placement: Y }), proFieldProps: (0, u.Z)((0, u.Z)({}, N.props.proFieldProps), {}, { light: !0, label: N.props.label, bordered: d }), bordered: d }) }, D || E);
                  }),
                  $.length
                    ? (0, x.jsx)(
                        'div',
                        {
                          className: ''.concat(g, '-item ').concat(C).trim(),
                          children: (0, x.jsx)(mu.M, {
                            padding: 24,
                            open: O,
                            onOpenChange: function (E) {
                              K(E);
                            },
                            placement: v,
                            label: W(),
                            footerRender: p,
                            footer: {
                              onConfirm: function () {
                                c((0, u.Z)({}, X)), K(!1);
                              },
                              onClear: function () {
                                var E = {};
                                $.forEach(function (D) {
                                  var F = D.props.name;
                                  E[F] = void 0;
                                }),
                                  c(E);
                              },
                            },
                            children: $.map(function (N) {
                              var E = N.key,
                                D = N.props,
                                F = D.name,
                                Y = D.fieldProps,
                                H = (0, u.Z)(
                                  (0, u.Z)({}, Y),
                                  {},
                                  {
                                    onChange: function (ie) {
                                      return (
                                        z(
                                          (0, u.Z)(
                                            (0, u.Z)({}, X),
                                            {},
                                            (0, S.Z)(
                                              {},
                                              F,
                                              ie != null && ie.target
                                                ? ie.target.value
                                                : ie,
                                            ),
                                          ),
                                        ),
                                        !1
                                      );
                                    },
                                  },
                                );
                              X.hasOwnProperty(F) &&
                                (H[N.props.valuePropName || 'value'] = X[F]);
                              var V =
                                Y != null && Y.placement
                                  ? Y == null
                                    ? void 0
                                    : Y.placement
                                  : v;
                              return (0,
                              x.jsx)('div', { className: ''.concat(g, '-line ').concat(C).trim(), children: l.cloneElement(N, { fieldProps: (0, u.Z)((0, u.Z)({}, H), {}, { placement: V }) }) }, E);
                            }),
                          }),
                        },
                        'more',
                      )
                    : null,
                ],
              }),
            }),
          );
        };
      function bu(t) {
        var e = t.size,
          n = t.collapse,
          r = t.collapseLabel,
          a = t.initialValues,
          o = t.onValuesChange,
          i = t.form,
          s = t.placement,
          c = t.formRef,
          d = t.bordered,
          h = t.ignoreRules,
          p = t.footerRender,
          v = (0, Ie.Z)(t, hu),
          y = (0, l.useContext)($e.ZP.ConfigContext),
          g = y.getPrefixCls,
          Z = g('pro-form'),
          b = (0, l.useState)(function () {
            return (0, u.Z)({}, a);
          }),
          C = (0, de.Z)(b, 2),
          R = C[0],
          L = C[1],
          O = (0, l.useRef)();
        return (
          (0, l.useImperativeHandle)(
            c,
            function () {
              return O.current;
            },
            [O.current],
          ),
          (0, x.jsx)(
            Ma.I,
            (0, u.Z)(
              (0, u.Z)(
                {
                  size: e,
                  initialValues: a,
                  form: i,
                  contentRender: function (q) {
                    return (0, x.jsx)(yu, {
                      prefixCls: Z,
                      items:
                        q == null
                          ? void 0
                          : q.flatMap(function (T) {
                              return (T == null
                                ? void 0
                                : T.type.displayName) === 'ProForm-Group'
                                ? T.props.children
                                : T;
                            }),
                      size: e,
                      bordered: d,
                      collapse: n,
                      collapseLabel: r,
                      placement: s,
                      values: R || {},
                      footerRender: p,
                      onValuesChange: function (X) {
                        var z,
                          M,
                          $ = (0, u.Z)((0, u.Z)({}, R), X);
                        L($),
                          (z = O.current) === null ||
                            z === void 0 ||
                            z.setFieldsValue($),
                          (M = O.current) === null ||
                            M === void 0 ||
                            M.submit(),
                          o && o(X, $);
                      },
                    });
                  },
                  formRef: O,
                  formItemProps: { colon: !1, labelAlign: 'left' },
                  fieldProps: { style: { width: void 0 } },
                },
                (0, ve.Z)(v, ['labelWidth']),
              ),
              {},
              {
                onValuesChange: function (q, T) {
                  var X;
                  L(T),
                    o == null || o(q, T),
                    (X = O.current) === null || X === void 0 || X.submit();
                },
              },
            ),
          )
        );
      }
      var Su = m(64401),
        xu = [
          'children',
          'trigger',
          'onVisibleChange',
          'onOpenChange',
          'modalProps',
          'onFinish',
          'submitTimeout',
          'title',
          'width',
          'visible',
          'open',
        ];
      function Cu(t) {
        var e,
          n,
          r = t.children,
          a = t.trigger,
          o = t.onVisibleChange,
          i = t.onOpenChange,
          s = t.modalProps,
          c = t.onFinish,
          d = t.submitTimeout,
          h = t.title,
          p = t.width,
          v = t.visible,
          y = t.open,
          g = (0, Ie.Z)(t, xu);
        (0, er.ET)(
          !g.footer || !(s != null && s.footer),
          'ModalForm \u662F\u4E00\u4E2A ProForm \u7684\u7279\u6B8A\u5E03\u5C40\uFF0C\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0C\u8BF7\u4F7F\u7528 submit.render \u81EA\u5B9A\u4E49\u3002',
        );
        var Z = (0, l.useContext)($e.ZP.ConfigContext),
          b = (0, l.useState)([]),
          C = (0, de.Z)(b, 2),
          R = C[1],
          L = (0, l.useState)(!1),
          O = (0, de.Z)(L, 2),
          K = O[0],
          q = O[1],
          T = (0, J.Z)(!!v, { value: y || v, onChange: i || o }),
          X = (0, de.Z)(T, 2),
          z = X[0],
          M = X[1],
          $ = (0, l.useRef)(null),
          j = (0, l.useCallback)(function (V) {
            $.current === null && V && R([]), ($.current = V);
          }, []),
          W = (0, l.useRef)(),
          N = (0, l.useCallback)(
            function () {
              var V,
                Q,
                ie,
                pe =
                  (V =
                    (Q = g.form) !== null && Q !== void 0
                      ? Q
                      : (ie = g.formRef) === null || ie === void 0
                      ? void 0
                      : ie.current) !== null && V !== void 0
                    ? V
                    : W.current;
              pe &&
                s !== null &&
                s !== void 0 &&
                s.destroyOnClose &&
                pe.resetFields();
            },
            [s == null ? void 0 : s.destroyOnClose, g.form, g.formRef],
          );
        (0, l.useImperativeHandle)(
          g.formRef,
          function () {
            return W.current;
          },
          [W.current],
        ),
          (0, l.useEffect)(
            function () {
              (y || v) && (i == null || i(!0), o == null || o(!0));
            },
            [v, y],
          );
        var E = (0, l.useMemo)(
            function () {
              return a
                ? l.cloneElement(
                    a,
                    (0, u.Z)(
                      (0, u.Z)({ key: 'trigger' }, a.props),
                      {},
                      {
                        onClick: (function () {
                          var V = (0, oe.Z)(
                            (0, Ee.Z)().mark(function ie(pe) {
                              var Ce, ae;
                              return (0, Ee.Z)().wrap(function (ne) {
                                for (;;)
                                  switch ((ne.prev = ne.next)) {
                                    case 0:
                                      M(!z),
                                        (Ce = a.props) === null ||
                                          Ce === void 0 ||
                                          (ae = Ce.onClick) === null ||
                                          ae === void 0 ||
                                          ae.call(Ce, pe);
                                    case 2:
                                    case 'end':
                                      return ne.stop();
                                  }
                              }, ie);
                            }),
                          );
                          function Q(ie) {
                            return V.apply(this, arguments);
                          }
                          return Q;
                        })(),
                      },
                    ),
                  )
                : null;
            },
            [M, a, z],
          ),
          D = (0, l.useMemo)(
            function () {
              var V, Q, ie, pe, Ce, ae;
              return g.submitter === !1
                ? !1
                : (0, Oa.Z)(
                    {
                      searchConfig: {
                        submitText:
                          (V =
                            (Q = s == null ? void 0 : s.okText) !== null &&
                            Q !== void 0
                              ? Q
                              : (ie = Z.locale) === null ||
                                ie === void 0 ||
                                (ie = ie.Modal) === null ||
                                ie === void 0
                              ? void 0
                              : ie.okText) !== null && V !== void 0
                            ? V
                            : '\u786E\u8BA4',
                        resetText:
                          (pe =
                            (Ce = s == null ? void 0 : s.cancelText) !== null &&
                            Ce !== void 0
                              ? Ce
                              : (ae = Z.locale) === null ||
                                ae === void 0 ||
                                (ae = ae.Modal) === null ||
                                ae === void 0
                              ? void 0
                              : ae.cancelText) !== null && pe !== void 0
                            ? pe
                            : '\u53D6\u6D88',
                      },
                      resetButtonProps: {
                        preventDefault: !0,
                        disabled: d ? K : void 0,
                        onClick: function (ne) {
                          var se;
                          M(!1),
                            s == null ||
                              (se = s.onCancel) === null ||
                              se === void 0 ||
                              se.call(s, ne);
                        },
                      },
                    },
                    g.submitter,
                  );
            },
            [
              (e = Z.locale) === null ||
              e === void 0 ||
              (e = e.Modal) === null ||
              e === void 0
                ? void 0
                : e.cancelText,
              (n = Z.locale) === null ||
              n === void 0 ||
              (n = n.Modal) === null ||
              n === void 0
                ? void 0
                : n.okText,
              s,
              g.submitter,
              M,
              K,
              d,
            ],
          ),
          F = (0, l.useCallback)(function (V, Q) {
            return (0,
            x.jsxs)(x.Fragment, { children: [V, $.current && Q ? (0, x.jsx)(l.Fragment, { children: (0, zt.createPortal)(Q, $.current) }, 'submitter') : Q] });
          }, []),
          Y = (0, l.useCallback)(
            (function () {
              var V = (0, oe.Z)(
                (0, Ee.Z)().mark(function Q(ie) {
                  var pe, Ce, ae;
                  return (0, Ee.Z)().wrap(function (ne) {
                    for (;;)
                      switch ((ne.prev = ne.next)) {
                        case 0:
                          return (
                            (pe = c == null ? void 0 : c(ie)),
                            d &&
                              pe instanceof Promise &&
                              (q(!0),
                              (Ce = setTimeout(function () {
                                return q(!1);
                              }, d)),
                              pe.finally(function () {
                                clearTimeout(Ce), q(!1);
                              })),
                            (ne.next = 4),
                            pe
                          );
                        case 4:
                          return (
                            (ae = ne.sent), ae && M(!1), ne.abrupt('return', ae)
                          );
                        case 7:
                        case 'end':
                          return ne.stop();
                      }
                  }, Q);
                }),
              );
              return function (Q) {
                return V.apply(this, arguments);
              };
            })(),
            [c, M, d],
          ),
          H = (0, pl.X)(z);
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)(
              Su.Z,
              (0, u.Z)(
                (0, u.Z)((0, u.Z)({ title: h, width: p || 800 }, s), H),
                {},
                {
                  onCancel: function (Q) {
                    var ie;
                    (d && K) ||
                      (M(!1),
                      s == null ||
                        (ie = s.onCancel) === null ||
                        ie === void 0 ||
                        ie.call(s, Q));
                  },
                  afterClose: function () {
                    var Q;
                    N(),
                      z && M(!1),
                      s == null ||
                        (Q = s.afterClose) === null ||
                        Q === void 0 ||
                        Q.call(s);
                  },
                  footer:
                    g.submitter !== !1
                      ? (0, x.jsx)('div', {
                          ref: j,
                          style: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                          },
                        })
                      : null,
                  children: (0, x.jsx)(
                    Ma.I,
                    (0, u.Z)(
                      (0, u.Z)(
                        { formComponentType: 'ModalForm', layout: 'vertical' },
                        g,
                      ),
                      {},
                      {
                        onInit: function (Q, ie) {
                          var pe;
                          g.formRef && (g.formRef.current = ie),
                            g == null ||
                              (pe = g.onInit) === null ||
                              pe === void 0 ||
                              pe.call(g, Q, ie),
                            (W.current = ie);
                        },
                        formRef: W,
                        submitter: D,
                        onFinish: (function () {
                          var V = (0, oe.Z)(
                            (0, Ee.Z)().mark(function Q(ie) {
                              var pe;
                              return (0, Ee.Z)().wrap(function (ae) {
                                for (;;)
                                  switch ((ae.prev = ae.next)) {
                                    case 0:
                                      return (ae.next = 2), Y(ie);
                                    case 2:
                                      return (
                                        (pe = ae.sent), ae.abrupt('return', pe)
                                      );
                                    case 4:
                                    case 'end':
                                      return ae.stop();
                                  }
                              }, Q);
                            }),
                          );
                          return function (Q) {
                            return V.apply(this, arguments);
                          };
                        })(),
                        contentRender: F,
                        children: r,
                      },
                    ),
                  ),
                },
              ),
            ),
            E,
          ],
        });
      }
      var Ba = m(18563),
        jo = function (e) {
          if (e && e !== !0) return e;
        },
        Zu = function (e, n, r, a) {
          return e
            ? (0, x.jsxs)(x.Fragment, {
                children: [
                  r.getMessage('tableForm.collapsed', '\u5C55\u5F00'),
                  a && '('.concat(a, ')'),
                  (0, x.jsx)(wa.Z, {
                    style: {
                      marginInlineStart: '0.5em',
                      transition: '0.3s all',
                      transform: 'rotate('.concat(e ? 0 : 0.5, 'turn)'),
                    },
                  }),
                ],
              })
            : (0, x.jsxs)(x.Fragment, {
                children: [
                  r.getMessage('tableForm.expand', '\u6536\u8D77'),
                  (0, x.jsx)(wa.Z, {
                    style: {
                      marginInlineStart: '0.5em',
                      transition: '0.3s all',
                      transform: 'rotate('.concat(e ? 0 : 0.5, 'turn)'),
                    },
                  }),
                ],
              });
        },
        wu = function (e) {
          var n = e.setCollapsed,
            r = e.collapsed,
            a = r === void 0 ? !1 : r,
            o = e.submitter,
            i = e.style,
            s = e.hiddenNum,
            c = (0, l.useContext)($e.ZP.ConfigContext),
            d = c.getPrefixCls,
            h = (0, gn.YB)(),
            p = (0, l.useContext)(gn.L_),
            v = p.hashId,
            y = jo(e.collapseRender) || Zu;
          return (0, x.jsxs)(ga.Z, {
            style: i,
            size: 16,
            children: [
              o,
              e.collapseRender !== !1 &&
                (0, x.jsx)('a', {
                  className: ''
                    .concat(d('pro-query-filter-collapse-button'), ' ')
                    .concat(v)
                    .trim(),
                  onClick: function () {
                    return n(!a);
                  },
                  children: y == null ? void 0 : y(a, e, h, s),
                }),
            ],
          });
        },
        Ru = wu,
        Eu = function (e) {
          return (0, S.Z)(
            {},
            e.componentCls,
            (0, S.Z)(
              (0, S.Z)(
                (0, S.Z)(
                  (0, S.Z)(
                    { '&&': { padding: 24 } },
                    ''.concat(e.antCls, '-form-item'),
                    { marginBlock: 0 },
                  ),
                  ''.concat(e.proComponentsCls, '-form-group-title'),
                  { marginBlock: 0 },
                ),
                '&-row',
                {
                  rowGap: 24,
                  '&-split': (0, S.Z)(
                    (0, S.Z)({}, ''.concat(e.proComponentsCls, '-form-group'), {
                      display: 'flex',
                      alignItems: 'center',
                      gap: e.marginXS,
                    }),
                    '&:last-child',
                    { marginBlockEnd: 12 },
                  ),
                  '&-split-line': {
                    '&:after': {
                      position: 'absolute',
                      width: '100%',
                      content: '""',
                      height: 1,
                      insetBlockEnd: -12,
                      borderBlockEnd: '1px dashed '.concat(e.colorSplit),
                    },
                  },
                },
              ),
              '&-collapse-button',
              { display: 'flex', alignItems: 'center', color: e.colorPrimary },
            ),
          );
        };
      function Iu(t) {
        return (0, Gt.Xj)('QueryFilter', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [Eu(n)];
        });
      }
      var Pu = [
          'collapsed',
          'layout',
          'defaultCollapsed',
          'defaultColsNumber',
          'span',
          'searchGutter',
          'searchText',
          'resetText',
          'optionRender',
          'collapseRender',
          'onReset',
          'onCollapse',
          'labelWidth',
          'style',
          'split',
          'preserve',
          'ignoreRules',
          'showHiddenNum',
          'submitterColSpanProps',
        ],
        oa,
        $u = { xs: 513, sm: 513, md: 785, lg: 992, xl: 1057, xxl: 1 / 0 },
        No = {
          vertical: [
            [513, 1, 'vertical'],
            [785, 2, 'vertical'],
            [1057, 3, 'vertical'],
            [1 / 0, 4, 'vertical'],
          ],
          default: [
            [513, 1, 'vertical'],
            [701, 2, 'vertical'],
            [1062, 3, 'horizontal'],
            [1352, 3, 'horizontal'],
            [1 / 0, 4, 'horizontal'],
          ],
        },
        Tu = function (e, n, r) {
          if (r && typeof r == 'number') return { span: r, layout: e };
          var a = r
              ? ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(function (i) {
                  return [$u[i], 24 / r[i], 'horizontal'];
                })
              : No[e || 'default'],
            o = (a || No.default).find(function (i) {
              return n < i[0] + 16;
            });
          return o
            ? { span: 24 / o[1], layout: o == null ? void 0 : o[2] }
            : { span: 8, layout: 'horizontal' };
        },
        ju = function (e, n) {
          return e == null
            ? void 0
            : e.flatMap(function (r) {
                var a;
                if (
                  (r == null ? void 0 : r.type.displayName) ===
                    'ProForm-Group' &&
                  !((a = r.props) !== null && a !== void 0 && a.title)
                )
                  return r.props.children;
                if (n && l.isValidElement(r)) {
                  var o;
                  return l.cloneElement(
                    r,
                    (0, u.Z)(
                      (0, u.Z)({}, r.props),
                      {},
                      {
                        formItemProps: (0, u.Z)(
                          (0, u.Z)(
                            {},
                            (o = r.props) === null || o === void 0
                              ? void 0
                              : o.formItemProps,
                          ),
                          {},
                          { rules: [] },
                        ),
                      },
                    ),
                  );
                }
                return r;
              });
        },
        Nu = function (e) {
          var n,
            r,
            a,
            o,
            i = (0, gn.YB)(),
            s = (0, l.useContext)(gn.L_),
            c = s.hashId,
            d = e.resetText || i.getMessage('tableForm.reset', '\u91CD\u7F6E'),
            h =
              e.searchText || i.getMessage('tableForm.search', '\u641C\u7D22'),
            p = (0, J.Z)(
              function () {
                return e.defaultCollapsed && !!e.submitter;
              },
              { value: e.collapsed, onChange: e.onCollapse },
            ),
            v = (0, de.Z)(p, 2),
            y = v[0],
            g = v[1],
            Z = e.optionRender,
            b = e.collapseRender,
            C = e.split,
            R = e.items,
            L = e.spanSize,
            O = e.showLength,
            K = e.searchGutter,
            q = e.showHiddenNum,
            T = (0, l.useMemo)(
              function () {
                return !e.submitter || Z === !1
                  ? null
                  : l.cloneElement(
                      e.submitter,
                      (0, u.Z)(
                        {
                          searchConfig: { resetText: d, submitText: h },
                          render:
                            Z &&
                            function (V, Q) {
                              return Z(
                                (0, u.Z)(
                                  (0, u.Z)({}, e),
                                  {},
                                  { resetText: d, searchText: h },
                                ),
                                e,
                                Q,
                              );
                            },
                        },
                        e.submitter.props,
                      ),
                    );
              },
              [e, d, h, Z],
            ),
            X = 0,
            z = 0,
            M = !1,
            $ = 0,
            j = 0,
            W = ju(R, e.ignoreRules).map(function (V, Q) {
              var ie,
                pe,
                Ce,
                ae,
                xe =
                  l.isValidElement(V) &&
                  (ie =
                    V == null || (pe = V.props) === null || pe === void 0
                      ? void 0
                      : pe.colSize) !== null &&
                  ie !== void 0
                    ? ie
                    : 1,
                ne = Math.min(L.span * (xe || 1), 24);
              if (((X += ne), ($ += xe), Q === 0)) {
                var se;
                M =
                  ne === 24 &&
                  !(
                    V != null &&
                    (se = V.props) !== null &&
                    se !== void 0 &&
                    se.hidden
                  );
              }
              var Ze =
                (V == null || (Ce = V.props) === null || Ce === void 0
                  ? void 0
                  : Ce.hidden) ||
                (y && (M || $ > O - 1) && !!Q && X >= 24);
              z += 1;
              var Ue =
                (l.isValidElement(V) &&
                  (V.key ||
                    ''.concat(
                      (ae = V.props) === null || ae === void 0
                        ? void 0
                        : ae.name,
                    ))) ||
                Q;
              return l.isValidElement(V) && Ze
                ? e.preserve
                  ? {
                      itemDom: l.cloneElement(V, { hidden: !0, key: Ue || Q }),
                      hidden: !0,
                      colSpan: ne,
                    }
                  : { itemDom: null, colSpan: 0, hidden: !0 }
                : { itemDom: V, colSpan: ne, hidden: !1 };
            }),
            N = W.map(function (V, Q) {
              var ie,
                pe,
                Ce = V.itemDom,
                ae = V.colSpan,
                xe =
                  Ce == null || (ie = Ce.props) === null || ie === void 0
                    ? void 0
                    : ie.hidden;
              if (xe) return Ce;
              var ne =
                (l.isValidElement(Ce) &&
                  (Ce.key ||
                    ''.concat(
                      (pe = Ce.props) === null || pe === void 0
                        ? void 0
                        : pe.name,
                    ))) ||
                Q;
              return (
                24 - (j % 24) < ae &&
                  ((X += 24 - (j % 24)), (j += 24 - (j % 24))),
                (j += ae),
                C && j % 24 === 0 && Q < z - 1
                  ? (0, x.jsx)(
                      Vt.Z,
                      {
                        span: ae,
                        className: ''
                          .concat(e.baseClassName, '-row-split-line ')
                          .concat(e.baseClassName, '-row-split ')
                          .concat(c)
                          .trim(),
                        children: Ce,
                      },
                      ne,
                    )
                  : (0, x.jsx)(
                      Vt.Z,
                      {
                        className: ''
                          .concat(e.baseClassName, '-row-split ')
                          .concat(c)
                          .trim(),
                        span: ae,
                        children: Ce,
                      },
                      ne,
                    )
              );
            }),
            E =
              q &&
              W.filter(function (V) {
                return V.hidden;
              }).length,
            D = (0, l.useMemo)(
              function () {
                return !(X < 24 || $ <= O);
              },
              [$, O, X],
            ),
            F = (0, l.useMemo)(
              function () {
                var V,
                  Q,
                  ie =
                    (j % 24) +
                    ((V =
                      (Q = e.submitterColSpanProps) === null || Q === void 0
                        ? void 0
                        : Q.span) !== null && V !== void 0
                      ? V
                      : L.span);
                if (ie > 24) {
                  var pe, Ce;
                  return (
                    24 -
                    ((pe =
                      (Ce = e.submitterColSpanProps) === null || Ce === void 0
                        ? void 0
                        : Ce.span) !== null && pe !== void 0
                      ? pe
                      : L.span)
                  );
                }
                return 24 - ie;
              },
              [
                j,
                (j % 24) +
                  ((n =
                    (r = e.submitterColSpanProps) === null || r === void 0
                      ? void 0
                      : r.span) !== null && n !== void 0
                    ? n
                    : L.span),
                (a = e.submitterColSpanProps) === null || a === void 0
                  ? void 0
                  : a.span,
              ],
            ),
            Y = (0, l.useContext)($e.ZP.ConfigContext),
            H = Y.getPrefixCls('pro-query-filter');
          return (0, x.jsxs)(
            fn.Z,
            {
              gutter: K,
              justify: 'start',
              className: fe()(''.concat(H, '-row'), c),
              children: [
                N,
                T &&
                  (0, x.jsx)(
                    Vt.Z,
                    (0, u.Z)(
                      (0, u.Z)(
                        {
                          span: L.span,
                          offset: F,
                          className: fe()(
                            (o = e.submitterColSpanProps) === null ||
                              o === void 0
                              ? void 0
                              : o.className,
                          ),
                        },
                        e.submitterColSpanProps,
                      ),
                      {},
                      {
                        style: { textAlign: 'end' },
                        children: (0, x.jsx)(Fa.Z.Item, {
                          label: ' ',
                          colon: !1,
                          shouldUpdate: !1,
                          className: ''.concat(H, '-actions ').concat(c).trim(),
                          children: (0, x.jsx)(
                            Ru,
                            {
                              hiddenNum: E,
                              collapsed: y,
                              collapseRender: D ? b : !1,
                              submitter: T,
                              setCollapsed: g,
                            },
                            'pro-form-query-filter-actions',
                          ),
                        }),
                      },
                    ),
                    'submitter',
                  ),
              ],
            },
            'resize-observer-row',
          );
        },
        Ou = (0, ml.j)()
          ? (oa = document) === null ||
            oa === void 0 ||
            (oa = oa.body) === null ||
            oa === void 0
            ? void 0
            : oa.clientWidth
          : 1024;
      function Fu(t) {
        var e = t.collapsed,
          n = t.layout,
          r = t.defaultCollapsed,
          a = r === void 0 ? !0 : r,
          o = t.defaultColsNumber,
          i = t.span,
          s = t.searchGutter,
          c = s === void 0 ? 24 : s,
          d = t.searchText,
          h = t.resetText,
          p = t.optionRender,
          v = t.collapseRender,
          y = t.onReset,
          g = t.onCollapse,
          Z = t.labelWidth,
          b = Z === void 0 ? '80' : Z,
          C = t.style,
          R = t.split,
          L = t.preserve,
          O = L === void 0 ? !0 : L,
          K = t.ignoreRules,
          q = t.showHiddenNum,
          T = q === void 0 ? !1 : q,
          X = t.submitterColSpanProps,
          z = (0, Ie.Z)(t, Pu),
          M = (0, l.useContext)($e.ZP.ConfigContext),
          $ = M.getPrefixCls('pro-query-filter'),
          j = Iu($),
          W = j.wrapSSR,
          N = j.hashId,
          E = (0, J.Z)(function () {
            return typeof (C == null ? void 0 : C.width) == 'number'
              ? C == null
                ? void 0
                : C.width
              : Ou;
          }),
          D = (0, de.Z)(E, 2),
          F = D[0],
          Y = D[1],
          H = (0, l.useMemo)(
            function () {
              return Tu(n, F + 16, i);
            },
            [n, F, i],
          ),
          V = (0, l.useMemo)(
            function () {
              return o !== void 0 ? o - 1 : Math.max(1, 24 / H.span - 1);
            },
            [o, H.span],
          ),
          Q = (0, l.useMemo)(
            function () {
              if (b && H.layout !== 'vertical' && b !== 'auto')
                return {
                  labelCol: { flex: '0 0 '.concat(b, 'px') },
                  wrapperCol: {
                    style: { maxWidth: 'calc(100% - '.concat(b, 'px)') },
                  },
                  style: { flexWrap: 'nowrap' },
                };
            },
            [H.layout, b],
          );
        return W(
          (0, x.jsx)(
            wt.Z,
            {
              onResize: function (pe) {
                F !== pe.width && pe.width > 17 && Y(pe.width);
              },
              children: (0, x.jsx)(
                Ma.I,
                (0, u.Z)(
                  (0, u.Z)({ isKeyPressSubmit: !0, preserve: O }, z),
                  {},
                  {
                    className: fe()($, N, z.className),
                    onReset: y,
                    style: C,
                    layout: H.layout,
                    fieldProps: { style: { width: '100%' } },
                    formItemProps: Q,
                    groupProps: {
                      titleStyle: {
                        display: 'inline-block',
                        marginInlineEnd: 16,
                      },
                    },
                    contentRender: function (pe, Ce, ae) {
                      return (0, x.jsx)(Nu, {
                        spanSize: H,
                        collapsed: e,
                        form: ae,
                        submitterColSpanProps: X,
                        collapseRender: v,
                        defaultCollapsed: a,
                        onCollapse: g,
                        optionRender: p,
                        submitter: Ce,
                        items: pe,
                        split: R,
                        baseClassName: $,
                        resetText: t.resetText,
                        searchText: t.searchText,
                        searchGutter: c,
                        preserve: O,
                        ignoreRules: K,
                        showLength: V,
                        showHiddenNum: T,
                      });
                    },
                  },
                ),
              ),
            },
            'resize-observer',
          ),
        );
      }
      var Oo = m(94883),
        Mu = ['steps', 'columns', 'forceUpdate', 'grid'],
        Bu = function (e) {
          var n = e.steps,
            r = e.columns,
            a = e.forceUpdate,
            o = e.grid,
            i = (0, Ie.Z)(e, Mu),
            s = (0, $o.d)(i),
            c = (0, l.useCallback)(
              function (h) {
                var p, v;
                (p = (v = s.current).onCurrentChange) === null ||
                  p === void 0 ||
                  p.call(v, h),
                  a([]);
              },
              [a, s],
            ),
            d = (0, l.useMemo)(
              function () {
                return n == null
                  ? void 0
                  : n.map(function (h, p) {
                      return (0,
                      l.createElement)(Bo, (0, u.Z)((0, u.Z)({ grid: o }, h), {}, { key: p, layoutType: 'StepForm', columns: r[p] }));
                    });
              },
              [r, o, n],
            );
          return (0, x.jsx)(
            Oo.L0,
            (0, u.Z)((0, u.Z)({}, i), {}, { onCurrentChange: c, children: d }),
          );
        },
        Lu = Bu,
        Du = function (e) {
          var n = e.children;
          return (0, x.jsx)(x.Fragment, { children: n });
        },
        zu = Du,
        Fo = m(25437),
        Ku = function (e, n) {
          if (e.valueType === 'dependency') {
            var r,
              a,
              o,
              i =
                (r = e.getFieldProps) === null || r === void 0
                  ? void 0
                  : r.call(e);
            return (
              (0, er.ET)(
                Array.isArray(
                  (a = e.name) !== null && a !== void 0
                    ? a
                    : i == null
                    ? void 0
                    : i.name,
                ),
                'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"',
              ),
              (0, er.ET)(
                typeof e.columns == 'function',
                'SchemaForm: columns should be a function when valueType is "dependency"',
              ),
              Array.isArray(
                (o = e.name) !== null && o !== void 0
                  ? o
                  : i == null
                  ? void 0
                  : i.name,
              )
                ? (0, l.createElement)(
                    Fo.Z,
                    (0, u.Z)((0, u.Z)({ name: e.name }, i), {}, { key: e.key }),
                    function (s) {
                      return !e.columns || typeof e.columns != 'function'
                        ? null
                        : n.genItems(e.columns(s));
                    },
                  )
                : null
            );
          }
          return !0;
        },
        Au = m(36704),
        Hu = function (e) {
          if (e.valueType === 'divider') {
            var n;
            return (0, l.createElement)(
              Au.Z,
              (0, u.Z)(
                (0, u.Z)(
                  {},
                  (n = e.getFieldProps) === null || n === void 0
                    ? void 0
                    : n.call(e),
                ),
                {},
                { key: e.key },
              ),
            );
          }
          return !0;
        },
        La = m(1177),
        Wu = function (e, n) {
          var r = n.action,
            a = n.formRef,
            o = n.type,
            i = n.originItem,
            s = (0, u.Z)(
              (0, u.Z)(
                {},
                (0, ve.Z)(e, [
                  'dataIndex',
                  'width',
                  'render',
                  'renderFormItem',
                  'renderText',
                  'title',
                ]),
              ),
              {},
              {
                name: e.name || e.key || e.dataIndex,
                width: e.width,
                render:
                  e != null && e.render
                    ? function (p, v, y) {
                        var g, Z, b, C;
                        return e == null ||
                          (g = e.render) === null ||
                          g === void 0
                          ? void 0
                          : g.call(
                              e,
                              p,
                              v,
                              y,
                              r == null ? void 0 : r.current,
                              (0, u.Z)(
                                (0, u.Z)({ type: o }, e),
                                {},
                                {
                                  key:
                                    (Z = e.key) === null || Z === void 0
                                      ? void 0
                                      : Z.toString(),
                                  formItemProps:
                                    (b = e.getFormItemProps) === null ||
                                    b === void 0
                                      ? void 0
                                      : b.call(e),
                                  fieldProps:
                                    (C = e.getFieldProps) === null ||
                                    C === void 0
                                      ? void 0
                                      : C.call(e),
                                },
                              ),
                            );
                      }
                    : void 0,
              },
            ),
            c = function () {
              return (0, x.jsx)(
                La.Z,
                (0, u.Z)((0, u.Z)({}, s), {}, { ignoreFormItem: !0 }),
              );
            },
            d =
              e != null && e.renderFormItem
                ? function (p, v) {
                    var y,
                      g,
                      Z,
                      b,
                      C = (0, ye.Y)(
                        (0, u.Z)((0, u.Z)({}, v), {}, { onChange: void 0 }),
                      );
                    return e == null ||
                      (y = e.renderFormItem) === null ||
                      y === void 0
                      ? void 0
                      : y.call(
                          e,
                          (0, u.Z)(
                            (0, u.Z)({ type: o }, e),
                            {},
                            {
                              key:
                                (g = e.key) === null || g === void 0
                                  ? void 0
                                  : g.toString(),
                              formItemProps:
                                (Z = e.getFormItemProps) === null ||
                                Z === void 0
                                  ? void 0
                                  : Z.call(e),
                              fieldProps:
                                (b = e.getFieldProps) === null || b === void 0
                                  ? void 0
                                  : b.call(e),
                              originProps: i,
                            },
                          ),
                          (0, u.Z)(
                            (0, u.Z)({}, C),
                            {},
                            { defaultRender: c, type: o },
                          ),
                          a.current,
                        );
                  }
                : void 0,
            h = function () {
              if (e != null && e.renderFormItem) {
                var v = d == null ? void 0 : d(null, {});
                if (!v || e.ignoreFormItem) return v;
              }
              return (0, l.createElement)(
                La.Z,
                (0, u.Z)(
                  (0, u.Z)({}, s),
                  {},
                  { key: [e.key, e.index || 0].join('-'), renderFormItem: d },
                ),
              );
            };
          return e.dependencies
            ? (0, x.jsx)(
                Fo.Z,
                { name: e.dependencies || [], children: h },
                e.key,
              )
            : h();
        },
        Vu = m(64450),
        ku = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'formList' && e.dataIndex) {
            var a, o;
            return !e.columns || !Array.isArray(e.columns)
              ? null
              : (0, l.createElement)(
                  Vu.u,
                  (0, u.Z)(
                    (0, u.Z)(
                      {},
                      (a = e.getFormItemProps) === null || a === void 0
                        ? void 0
                        : a.call(e),
                    ),
                    {},
                    {
                      key: e.key,
                      name: e.dataIndex,
                      label: e.label,
                      initialValue: e.initialValue,
                      colProps: e.colProps,
                      rowProps: e.rowProps,
                    },
                    (o = e.getFieldProps) === null || o === void 0
                      ? void 0
                      : o.call(e),
                  ),
                  r(e.columns),
                );
          }
          return !0;
        },
        Uu = m(81705),
        Xu = [
          'children',
          'value',
          'valuePropName',
          'onChange',
          'fieldProps',
          'space',
          'type',
          'transform',
          'convertValue',
          'lightProps',
        ],
        Gu = ['children', 'space', 'valuePropName'],
        Yu = { space: ga.Z, group: nl.Z.Group };
      function Ju(t) {
        var e = arguments.length <= 1 ? void 0 : arguments[1];
        return e && e.target && t in e.target ? e.target[t] : e;
      }
      var Qu = function (e) {
          var n = e.children,
            r = e.value,
            a = r === void 0 ? [] : r,
            o = e.valuePropName,
            i = e.onChange,
            s = e.fieldProps,
            c = e.space,
            d = e.type,
            h = d === void 0 ? 'space' : d,
            p = e.transform,
            v = e.convertValue,
            y = e.lightProps,
            g = (0, Ie.Z)(e, Xu),
            Z = (0, Rr.J)(function (T, X) {
              var z,
                M = (0, He.Z)(a);
              (M[X] = Ju(o || 'value', T)),
                i == null || i(M),
                s == null ||
                  (z = s.onChange) === null ||
                  z === void 0 ||
                  z.call(s, M);
            }),
            b = -1,
            C = (0, cr.Z)((0, Er.h)(n, a, e)).map(function (T) {
              if (l.isValidElement(T)) {
                var X, z, M;
                b += 1;
                var $ = b,
                  j =
                    (T == null || (X = T.type) === null || X === void 0
                      ? void 0
                      : X.displayName) === 'ProFormComponent' ||
                    (T == null || (z = T.props) === null || z === void 0
                      ? void 0
                      : z.readonly),
                  W = j
                    ? (0, u.Z)(
                        (0, u.Z)({ key: $, ignoreFormItem: !0 }, T.props || {}),
                        {},
                        {
                          fieldProps: (0, u.Z)(
                            (0, u.Z)(
                              {},
                              T == null ||
                                (M = T.props) === null ||
                                M === void 0
                                ? void 0
                                : M.fieldProps,
                            ),
                            {},
                            {
                              onChange: function () {
                                Z(
                                  arguments.length <= 0 ? void 0 : arguments[0],
                                  $,
                                );
                              },
                            },
                          ),
                          value: a == null ? void 0 : a[$],
                          onChange: void 0,
                        },
                      )
                    : (0, u.Z)(
                        (0, u.Z)({ key: $ }, T.props || {}),
                        {},
                        {
                          value: a == null ? void 0 : a[$],
                          onChange: function (E) {
                            var D, F;
                            Z(E, $),
                              (D = (F = T.props).onChange) === null ||
                                D === void 0 ||
                                D.call(F, E);
                          },
                        },
                      );
                return l.cloneElement(T, W);
              }
              return T;
            }),
            R = Yu[h],
            L = (0, Lr.zx)(g),
            O = L.RowWrapper,
            K = (0, l.useMemo)(
              function () {
                return (0, u.Z)({}, h === 'group' ? { compact: !0 } : {});
              },
              [h],
            ),
            q = (0, l.useCallback)(
              function (T) {
                var X = T.children;
                return (0, x.jsx)(
                  R,
                  (0, u.Z)(
                    (0, u.Z)((0, u.Z)({}, K), c),
                    {},
                    { align: 'start', wrap: !0, children: X },
                  ),
                );
              },
              [R, c, K],
            );
          return (0, x.jsx)(O, { Wrapper: q, children: C });
        },
        qu = l.forwardRef(function (t, e) {
          var n = t.children,
            r = t.space,
            a = t.valuePropName,
            o = (0, Ie.Z)(t, Gu);
          return (
            (0, l.useImperativeHandle)(e, function () {
              return {};
            }),
            (0, x.jsx)(
              Qu,
              (0, u.Z)(
                (0, u.Z)(
                  (0, u.Z)({ space: r, valuePropName: a }, o.fieldProps),
                  {},
                  { onChange: void 0 },
                  o,
                ),
                {},
                { children: n },
              ),
            )
          );
        }),
        _u = (0, Uu.G)(qu),
        ef = _u,
        tf = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'formSet' && e.dataIndex) {
            var a, o;
            return !e.columns || !Array.isArray(e.columns)
              ? null
              : (0, l.createElement)(
                  ef,
                  (0, u.Z)(
                    (0, u.Z)(
                      {},
                      (a = e.getFormItemProps) === null || a === void 0
                        ? void 0
                        : a.call(e),
                    ),
                    {},
                    {
                      key: e.key,
                      initialValue: e.initialValue,
                      name: e.dataIndex,
                      label: e.label,
                      colProps: e.colProps,
                      rowProps: e.rowProps,
                    },
                    (o = e.getFieldProps) === null || o === void 0
                      ? void 0
                      : o.call(e),
                  ),
                  r(e.columns),
                );
          }
          return !0;
        },
        nf = Ba.A.Group,
        rf = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'group') {
            var a;
            return !e.columns || !Array.isArray(e.columns)
              ? null
              : (0, x.jsx)(
                  nf,
                  (0, u.Z)(
                    (0, u.Z)(
                      {
                        label: e.label,
                        colProps: e.colProps,
                        rowProps: e.rowProps,
                      },
                      (a = e.getFieldProps) === null || a === void 0
                        ? void 0
                        : a.call(e),
                    ),
                    {},
                    { children: r(e.columns) },
                  ),
                  e.key,
                );
          }
          return !0;
        },
        af = function (e) {
          return e.valueType &&
            typeof e.valueType == 'string' &&
            ['index', 'indexBorder', 'option'].includes(
              e == null ? void 0 : e.valueType,
            )
            ? null
            : !0;
        },
        Mo = [af, rf, ku, tf, Hu, Ku],
        lf = function (e, n) {
          for (var r = 0; r < Mo.length; r++) {
            var a = Mo[r],
              o = a(e, n);
            if (o !== !0) return o;
          }
          return Wu(e, n);
        },
        of = [
          'columns',
          'layoutType',
          'type',
          'action',
          'shouldUpdate',
          'formRef',
        ],
        sf = {
          DrawerForm: iu,
          QueryFilter: Fu,
          LightFilter: bu,
          StepForm: Oo.L0.StepForm,
          StepsForm: Lu,
          ModalForm: Cu,
          Embed: zu,
          Form: Ba.A,
        };
      function cf(t) {
        var e = t.columns,
          n = t.layoutType,
          r = n === void 0 ? 'Form' : n,
          a = t.type,
          o = a === void 0 ? 'form' : a,
          i = t.action,
          s = t.shouldUpdate,
          c =
            s === void 0
              ? function (N, E) {
                  return (0, tt.ZP)(N) !== (0, tt.ZP)(E);
                }
              : s,
          d = t.formRef,
          h = (0, Ie.Z)(t, of),
          p = sf[r] || Ba.A,
          v = Fa.Z.useForm(),
          y = (0, de.Z)(v, 1),
          g = y[0],
          Z = Fa.Z.useFormInstance(),
          b = (0, l.useState)([]),
          C = (0, de.Z)(b, 2),
          R = C[1],
          L = (0, l.useState)(function () {
            return [];
          }),
          O = (0, de.Z)(L, 2),
          K = O[0],
          q = O[1],
          T = nu(t.form || Z || g),
          X = (0, l.useRef)(),
          z = (0, $o.d)(t),
          M = (0, Rr.J)(function (N) {
            return N.filter(function (E) {
              return !(E.hideInForm && o === 'form');
            })
              .sort(function (E, D) {
                return D.order || E.order
                  ? (D.order || 0) - (E.order || 0)
                  : (D.index || 0) - (E.index || 0);
              })
              .map(function (E, D) {
                var F = (0, Er.h)(
                    E.title,
                    E,
                    'form',
                    (0, x.jsx)(Bt.G, {
                      label: E.title,
                      tooltip: E.tooltip || E.tip,
                    }),
                  ),
                  Y = (0, ye.Y)({
                    title: F,
                    label: F,
                    name: E.name,
                    valueType: (0, Er.h)(E.valueType, {}),
                    key: E.key || E.dataIndex || D,
                    columns: E.columns,
                    valueEnum: E.valueEnum,
                    dataIndex: E.dataIndex || E.key,
                    initialValue: E.initialValue,
                    width: E.width,
                    index: E.index,
                    readonly: E.readonly,
                    colSize: E.colSize,
                    colProps: E.colProps,
                    rowProps: E.rowProps,
                    className: E.className,
                    tooltip: E.tooltip || E.tip,
                    dependencies: E.dependencies,
                    proFieldProps: E.proFieldProps,
                    ignoreFormItem: E.ignoreFormItem,
                    getFieldProps: E.fieldProps
                      ? function () {
                          return (0, Er.h)(E.fieldProps, T.current, E);
                        }
                      : void 0,
                    getFormItemProps: E.formItemProps
                      ? function () {
                          return (0, Er.h)(E.formItemProps, T.current, E);
                        }
                      : void 0,
                    render: E.render,
                    renderFormItem: E.renderFormItem,
                    renderText: E.renderText,
                    request: E.request,
                    params: E.params,
                    transform: E.transform,
                    convertValue: E.convertValue,
                    debounceTime: E.debounceTime,
                    defaultKeyWords: E.defaultKeyWords,
                  });
                return lf(Y, {
                  action: i,
                  type: o,
                  originItem: E,
                  formRef: T,
                  genItems: M,
                });
              })
              .filter(function (E) {
                return !!E;
              });
          }),
          $ = (0, l.useCallback)(
            function (N, E) {
              var D = z.current.onValuesChange;
              (c === !0 || (typeof c == 'function' && c(E, X.current))) &&
                q([]),
                (X.current = E),
                D == null || D(N, E);
            },
            [z, c],
          ),
          j = (0, To.Z)(
            function () {
              if (T.current && !(e.length && Array.isArray(e[0]))) return M(e);
            },
            [e, h == null ? void 0 : h.open, i, o, K, !!T.current],
          ),
          W = (0, To.Z)(
            function () {
              return r === 'StepsForm' ? { forceUpdate: R, columns: e } : {};
            },
            [e, r],
          );
        return (
          (0, l.useImperativeHandle)(
            d,
            function () {
              return T.current;
            },
            [T.current],
          ),
          (0, x.jsx)(
            p,
            (0, u.Z)(
              (0, u.Z)((0, u.Z)({}, W), h),
              {},
              {
                onInit: function (E, D) {
                  var F;
                  d && (d.current = D),
                    h == null ||
                      (F = h.onInit) === null ||
                      F === void 0 ||
                      F.call(h, E, D),
                    (T.current = D);
                },
                form: t.form || g,
                formRef: T,
                onValuesChange: $,
                children: j,
              },
            ),
          )
        );
      }
      var Bo = cf;
      function df(t) {
        var e = t.replace(/[A-Z]/g, function (n) {
          return '-'.concat(n.toLowerCase());
        });
        return e.startsWith('-') && (e = e.slice(1)), e;
      }
      var uf = function (e, n) {
          return !e && n !== !1
            ? (n == null ? void 0 : n.filterType) === 'light'
              ? 'LightFilter'
              : 'QueryFilter'
            : 'Form';
        },
        ff = function (e, n, r) {
          return !e && r === 'LightFilter'
            ? (0, ve.Z)((0, u.Z)({}, n), [
                'labelWidth',
                'defaultCollapsed',
                'filterType',
              ])
            : e
            ? {}
            : (0, ve.Z)(
                (0, u.Z)(
                  {
                    labelWidth: n
                      ? n == null
                        ? void 0
                        : n.labelWidth
                      : void 0,
                    defaultCollapsed: !0,
                  },
                  n,
                ),
                ['filterType'],
              );
        },
        vf = function (e, n) {
          return e
            ? (0, ve.Z)(n, ['ignoreRules'])
            : (0, u.Z)({ ignoreRules: !0 }, n);
        },
        mf = function (e) {
          var n = e.onSubmit,
            r = e.formRef,
            a = e.dateFormatter,
            o = a === void 0 ? 'string' : a,
            i = e.type,
            s = e.columns,
            c = e.action,
            d = e.ghost,
            h = e.manualRequest,
            p = e.onReset,
            v = e.submitButtonLoading,
            y = e.search,
            g = e.form,
            Z = e.bordered,
            b = (0, l.useContext)(gn.L_),
            C = b.hashId,
            R = i === 'form',
            L = (function () {
              var $ = (0, oe.Z)(
                (0, Ee.Z)().mark(function j(W, N) {
                  return (0, Ee.Z)().wrap(function (D) {
                    for (;;)
                      switch ((D.prev = D.next)) {
                        case 0:
                          n && n(W, N);
                        case 1:
                        case 'end':
                          return D.stop();
                      }
                  }, j);
                }),
              );
              return function (W, N) {
                return $.apply(this, arguments);
              };
            })(),
            O = (0, l.useContext)($e.ZP.ConfigContext),
            K = O.getPrefixCls,
            q = (0, l.useMemo)(
              function () {
                return s
                  .filter(function ($) {
                    return !(
                      $ === Wr.EXPAND_COLUMN ||
                      $ === Wr.SELECTION_COLUMN ||
                      (($.hideInSearch || $.search === !1) && i !== 'form') ||
                      (i === 'form' && $.hideInForm)
                    );
                  })
                  .map(function ($) {
                    var j,
                      W =
                        !$.valueType ||
                        (['textarea', 'jsonCode', 'code'].includes(
                          $ == null ? void 0 : $.valueType,
                        ) &&
                          i === 'table')
                          ? 'text'
                          : $ == null
                          ? void 0
                          : $.valueType,
                      N =
                        ($ == null ? void 0 : $.key) ||
                        ($ == null || (j = $.dataIndex) === null || j === void 0
                          ? void 0
                          : j.toString());
                    return (0,
                    u.Z)((0, u.Z)((0, u.Z)({}, $), {}, { width: void 0 }, $.search && (0, it.Z)($.search) === 'object' ? $.search : {}), {}, { valueType: W, proFieldProps: (0, u.Z)((0, u.Z)({}, $.proFieldProps), {}, { proFieldKey: N ? 'table-field-'.concat(N) : void 0 }) });
                  });
              },
              [s, i],
            ),
            T = K('pro-table-search'),
            X = K('pro-table-form'),
            z = (0, l.useMemo)(
              function () {
                return uf(R, y);
              },
              [y, R],
            ),
            M = (0, l.useMemo)(
              function () {
                return { submitter: { submitButtonProps: { loading: v } } };
              },
              [v],
            );
          return (0, x.jsx)('div', {
            className: fe()(
              C,
              (0, S.Z)(
                (0, S.Z)(
                  (0, S.Z)(
                    (0, S.Z)(
                      (0, S.Z)(
                        (0, S.Z)(
                          (0, S.Z)(
                            (0, S.Z)(
                              (0, S.Z)({}, K('pro-card'), !0),
                              ''.concat(K('pro-card'), '-border'),
                              !!Z,
                            ),
                            ''.concat(K('pro-card'), '-bordered'),
                            !!Z,
                          ),
                          ''.concat(K('pro-card'), '-ghost'),
                          !!d,
                        ),
                        T,
                        !0,
                      ),
                      X,
                      R,
                    ),
                    K('pro-table-search-'.concat(df(z))),
                    !0,
                  ),
                  ''.concat(T, '-ghost'),
                  d,
                ),
                y == null ? void 0 : y.className,
                y !== !1 && (y == null ? void 0 : y.className),
              ),
            ),
            children: (0, x.jsx)(
              Bo,
              (0, u.Z)(
                (0, u.Z)(
                  (0, u.Z)(
                    (0, u.Z)({ layoutType: z, columns: q, type: i }, M),
                    ff(R, y, z),
                  ),
                  vf(R, g || {}),
                ),
                {},
                {
                  formRef: r,
                  action: c,
                  dateFormatter: o,
                  onInit: function (j, W) {
                    if (((r.current = W), i !== 'form')) {
                      var N,
                        E,
                        D,
                        F =
                          (N = c.current) === null || N === void 0
                            ? void 0
                            : N.pageInfo,
                        Y = j,
                        H = Y.current,
                        V = H === void 0 ? (F == null ? void 0 : F.current) : H,
                        Q = Y.pageSize,
                        ie =
                          Q === void 0 ? (F == null ? void 0 : F.pageSize) : Q;
                      if (
                        ((E = c.current) === null ||
                          E === void 0 ||
                          (D = E.setPageInfo) === null ||
                          D === void 0 ||
                          D.call(
                            E,
                            (0, u.Z)(
                              (0, u.Z)({}, F),
                              {},
                              {
                                current: parseInt(V, 10),
                                pageSize: parseInt(ie, 10),
                              },
                            ),
                          ),
                        h)
                      )
                        return;
                      L(j, !0);
                    }
                  },
                  onReset: function (j) {
                    p == null || p(j);
                  },
                  onFinish: function (j) {
                    L(j, !1);
                  },
                  initialValues: g == null ? void 0 : g.initialValues,
                },
              ),
            ),
          });
        },
        pf = mf,
        gf = (function (t) {
          (0, Eo.Z)(n, t);
          var e = (0, Io.Z)(n);
          function n() {
            var r;
            (0, Ro.Z)(this, n);
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (r = e.call.apply(e, [this].concat(o))),
              (0, S.Z)((0, Nr.Z)(r), 'onSubmit', function (s, c) {
                var d = r.props,
                  h = d.pagination,
                  p = d.beforeSearchSubmit,
                  v =
                    p === void 0
                      ? function (K) {
                          return K;
                        }
                      : p,
                  y = d.action,
                  g = d.onSubmit,
                  Z = d.onFormSearchSubmit,
                  b = h
                    ? (0, ye.Y)({ current: h.current, pageSize: h.pageSize })
                    : {},
                  C = (0, u.Z)(
                    (0, u.Z)({}, s),
                    {},
                    { _timestamp: Date.now() },
                    b,
                  ),
                  R = (0, ve.Z)(v(C), Object.keys(b));
                if ((Z(R), !c)) {
                  var L, O;
                  (L = y.current) === null ||
                    L === void 0 ||
                    (O = L.setPageInfo) === null ||
                    O === void 0 ||
                    O.call(L, { current: 1 });
                }
                g && !c && (g == null || g(s));
              }),
              (0, S.Z)((0, Nr.Z)(r), 'onReset', function (s) {
                var c,
                  d,
                  h = r.props,
                  p = h.pagination,
                  v = h.beforeSearchSubmit,
                  y =
                    v === void 0
                      ? function (L) {
                          return L;
                        }
                      : v,
                  g = h.action,
                  Z = h.onFormSearchSubmit,
                  b = h.onReset,
                  C = p
                    ? (0, ye.Y)({ current: p.current, pageSize: p.pageSize })
                    : {},
                  R = (0, ve.Z)(
                    y((0, u.Z)((0, u.Z)({}, s), C)),
                    Object.keys(C),
                  );
                Z(R),
                  (c = g.current) === null ||
                    c === void 0 ||
                    (d = c.setPageInfo) === null ||
                    d === void 0 ||
                    d.call(c, { current: 1 }),
                  b == null || b();
              }),
              (0, S.Z)((0, Nr.Z)(r), 'isEqual', function (s) {
                var c = r.props,
                  d = c.columns,
                  h = c.loading,
                  p = c.formRef,
                  v = c.type,
                  y = c.cardBordered,
                  g = c.dateFormatter,
                  Z = c.form,
                  b = c.search,
                  C = c.manualRequest,
                  R = {
                    columns: d,
                    loading: h,
                    formRef: p,
                    type: v,
                    cardBordered: y,
                    dateFormatter: g,
                    form: Z,
                    search: b,
                    manualRequest: C,
                  };
                return !(0,
                Po.A)(R, { columns: s.columns, formRef: s.formRef, loading: s.loading, type: s.type, cardBordered: s.cardBordered, dateFormatter: s.dateFormatter, form: s.form, search: s.search, manualRequest: s.manualRequest });
              }),
              (0, S.Z)((0, Nr.Z)(r), 'shouldComponentUpdate', function (s) {
                return r.isEqual(s);
              }),
              (0, S.Z)((0, Nr.Z)(r), 'render', function () {
                var s = r.props,
                  c = s.columns,
                  d = s.loading,
                  h = s.formRef,
                  p = s.type,
                  v = s.action,
                  y = s.cardBordered,
                  g = s.dateFormatter,
                  Z = s.form,
                  b = s.search,
                  C = s.pagination,
                  R = s.ghost,
                  L = s.manualRequest,
                  O = C
                    ? (0, ye.Y)({ current: C.current, pageSize: C.pageSize })
                    : {};
                return (0,
                x.jsx)(pf, { submitButtonLoading: d, columns: c, type: p, ghost: R, formRef: h, onSubmit: r.onSubmit, manualRequest: L, onReset: r.onReset, dateFormatter: g, search: b, form: (0, u.Z)((0, u.Z)({ autoFocusFirstInput: !1 }, Z), {}, { extraUrlParams: (0, u.Z)((0, u.Z)({}, O), Z == null ? void 0 : Z.extraUrlParams) }), action: v, bordered: Zo('search', y) });
              }),
              r
            );
          }
          return (0, wo.Z)(n);
        })(l.Component),
        hf = gf,
        yf = m(46996),
        bf = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z',
                },
              },
            ],
          },
          name: 'vertical-align-top',
          theme: 'outlined',
        },
        Sf = bf,
        xf = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: Sf }));
        },
        Cf = l.forwardRef(xf),
        Zf = Cf,
        wf = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zm-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zm11.4 225.4a7.14 7.14 0 00-11.3 0L405.6 752.3a7.23 7.23 0 005.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z',
                },
              },
            ],
          },
          name: 'vertical-align-middle',
          theme: 'outlined',
        },
        Rf = wf,
        Ef = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: Rf }));
        },
        If = l.forwardRef(Ef),
        Pf = If,
        $f = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z',
                },
              },
            ],
          },
          name: 'vertical-align-bottom',
          theme: 'outlined',
        },
        Tf = $f,
        jf = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: Tf }));
        },
        Nf = l.forwardRef(jf),
        Of = Nf,
        Ff = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z',
                },
              },
            ],
          },
          name: 'setting',
          theme: 'outlined',
        },
        Mf = Ff,
        Bf = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: Mf }));
        },
        Lf = l.forwardRef(Bf),
        Df = Lf,
        zf = m(40672),
        Kf = m(46750),
        Af = function (e) {
          return (0, S.Z)(
            (0, S.Z)(
              (0, S.Z)({}, e.componentCls, {
                width: 'auto',
                '&-title': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '32px',
                },
                '&-overlay': (0, S.Z)(
                  (0, S.Z)(
                    (0, S.Z)(
                      (0, S.Z)(
                        {},
                        ''.concat(e.antCls, '-popover-inner-content'),
                        {
                          width: '200px',
                          paddingBlock: 0,
                          paddingInline: 0,
                          paddingBlockEnd: 8,
                        },
                      ),
                      ''.concat(e.antCls, '-tree-node-content-wrapper:hover'),
                      { backgroundColor: 'transparent' },
                    ),
                    ''.concat(e.antCls, '-tree-draggable-icon'),
                    { cursor: 'grab' },
                  ),
                  ''.concat(e.antCls, '-tree-treenode'),
                  (0, S.Z)(
                    (0, S.Z)(
                      {
                        alignItems: 'center',
                        '&:hover': (0, S.Z)(
                          {},
                          ''.concat(e.componentCls, '-list-item-option'),
                          { display: 'block' },
                        ),
                      },
                      ''.concat(e.antCls, '-tree-checkbox'),
                      { marginInlineEnd: '4px' },
                    ),
                    ''.concat(e.antCls, '-tree-title'),
                    { width: '100%' },
                  ),
                ),
              }),
              ''.concat(e.componentCls, '-action-rest-button'),
              { color: e.colorPrimary },
            ),
            ''.concat(e.componentCls, '-list'),
            (0, S.Z)(
              (0, S.Z)(
                (0, S.Z)(
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    paddingBlockStart: 8,
                  },
                  '&'.concat(e.componentCls, '-list-group'),
                  { paddingBlockStart: 0 },
                ),
                '&-title',
                {
                  marginBlockStart: '6px',
                  marginBlockEnd: '6px',
                  paddingInlineStart: '24px',
                  color: e.colorTextSecondary,
                  fontSize: '12px',
                },
              ),
              '&-item',
              {
                display: 'flex',
                alignItems: 'center',
                maxHeight: 24,
                justifyContent: 'space-between',
                '&-title': {
                  flex: 1,
                  maxWidth: 80,
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  wordBreak: 'break-all',
                  whiteSpace: 'nowrap',
                },
                '&-option': {
                  display: 'none',
                  float: 'right',
                  cursor: 'pointer',
                  '> span': { '> span.anticon': { color: e.colorPrimary } },
                  '> span + span': { marginInlineStart: 4 },
                },
              },
            ),
          );
        };
      function Hf(t) {
        return (0, Gt.Xj)('ColumnSetting', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [Af(n)];
        });
      }
      var Wf = ['key', 'dataIndex', 'children'],
        Vf = ['disabled'],
        gl = function (e) {
          var n = e.title,
            r = e.show,
            a = e.children,
            o = e.columnKey,
            i = e.fixed,
            s = (0, l.useContext)(Vr),
            c = s.columnsMap,
            d = s.setColumnsMap;
          return r
            ? (0, x.jsx)(Tr.Z, {
                title: n,
                children: (0, x.jsx)('span', {
                  onClick: function (p) {
                    p.stopPropagation(), p.preventDefault();
                    var v = c[o] || {},
                      y = (0, u.Z)(
                        (0, u.Z)({}, c),
                        {},
                        (0, S.Z)(
                          {},
                          o,
                          (0, u.Z)((0, u.Z)({}, v), {}, { fixed: i }),
                        ),
                      );
                    d(y);
                  },
                  children: a,
                }),
              })
            : null;
        },
        kf = function (e) {
          var n = e.columnKey,
            r = e.isLeaf,
            a = e.title,
            o = e.className,
            i = e.fixed,
            s = e.showListItemOption,
            c = (0, gn.YB)(),
            d = (0, l.useContext)(gn.L_),
            h = d.hashId,
            p = (0, x.jsxs)('span', {
              className: ''.concat(o, '-list-item-option ').concat(h).trim(),
              children: [
                (0, x.jsx)(gl, {
                  columnKey: n,
                  fixed: 'left',
                  title: c.getMessage(
                    'tableToolBar.leftPin',
                    '\u56FA\u5B9A\u5728\u5217\u9996',
                  ),
                  show: i !== 'left',
                  children: (0, x.jsx)(Zf, {}),
                }),
                (0, x.jsx)(gl, {
                  columnKey: n,
                  fixed: void 0,
                  title: c.getMessage(
                    'tableToolBar.noPin',
                    '\u4E0D\u56FA\u5B9A',
                  ),
                  show: !!i,
                  children: (0, x.jsx)(Pf, {}),
                }),
                (0, x.jsx)(gl, {
                  columnKey: n,
                  fixed: 'right',
                  title: c.getMessage(
                    'tableToolBar.rightPin',
                    '\u56FA\u5B9A\u5728\u5217\u5C3E',
                  ),
                  show: i !== 'right',
                  children: (0, x.jsx)(Of, {}),
                }),
              ],
            });
          return (0, x.jsxs)(
            'span',
            {
              className: ''.concat(o, '-list-item ').concat(h).trim(),
              children: [
                (0, x.jsx)('div', {
                  className: ''.concat(o, '-list-item-title ').concat(h).trim(),
                  children: a,
                }),
                s && !r ? p : null,
              ],
            },
            n,
          );
        },
        hl = function (e) {
          var n,
            r,
            a,
            o = e.list,
            i = e.draggable,
            s = e.checkable,
            c = e.showListItemOption,
            d = e.className,
            h = e.showTitle,
            p = h === void 0 ? !0 : h,
            v = e.title,
            y = e.listHeight,
            g = y === void 0 ? 280 : y,
            Z = (0, l.useContext)(gn.L_),
            b = Z.hashId,
            C = (0, l.useContext)(Vr),
            R = C.columnsMap,
            L = C.setColumnsMap,
            O = C.sortKeyColumns,
            K = C.setSortKeyColumns,
            q = o && o.length > 0,
            T = (0, l.useMemo)(
              function () {
                if (!q) return {};
                var $ = [],
                  j = new Map(),
                  W = function N(E, D) {
                    return E.map(function (F) {
                      var Y,
                        H = F.key,
                        V = F.dataIndex,
                        Q = F.children,
                        ie = (0, Ie.Z)(F, Wf),
                        pe = la(
                          H,
                          [D == null ? void 0 : D.columnKey, ie.index]
                            .filter(Boolean)
                            .join('-'),
                        ),
                        Ce = R[pe || 'null'] || { show: !0 };
                      Ce.show !== !1 && !Q && $.push(pe);
                      var ae = (0, u.Z)(
                        (0, u.Z)({ key: pe }, (0, ve.Z)(ie, ['className'])),
                        {},
                        {
                          selectable: !1,
                          disabled: Ce.disable === !0,
                          disableCheckbox:
                            typeof Ce.disable == 'boolean'
                              ? Ce.disable
                              : (Y = Ce.disable) === null || Y === void 0
                              ? void 0
                              : Y.checkbox,
                          isLeaf: D ? !0 : void 0,
                        },
                      );
                      if (Q) {
                        var xe;
                        (ae.children = N(
                          Q,
                          (0, u.Z)((0, u.Z)({}, Ce), {}, { columnKey: pe }),
                        )),
                          (xe = ae.children) !== null &&
                            xe !== void 0 &&
                            xe.every(function (ne) {
                              return $ == null ? void 0 : $.includes(ne.key);
                            }) &&
                            $.push(pe);
                      }
                      return j.set(H, ae), ae;
                    });
                  };
                return { list: W(o), keys: $, map: j };
              },
              [R, o, q],
            ),
            X = (0, Rr.J)(function ($, j, W) {
              var N = (0, u.Z)({}, R),
                E = (0, He.Z)(O),
                D = E.findIndex(function (V) {
                  return V === $;
                }),
                F = E.findIndex(function (V) {
                  return V === j;
                }),
                Y = W >= D;
              if (!(D < 0)) {
                var H = E[D];
                E.splice(D, 1),
                  W === 0 ? E.unshift(H) : E.splice(Y ? F : F + 1, 0, H),
                  E.forEach(function (V, Q) {
                    N[V] = (0, u.Z)((0, u.Z)({}, N[V] || {}), {}, { order: Q });
                  }),
                  L(N),
                  K(E);
              }
            }),
            z = (0, Rr.J)(function ($) {
              var j = (0, u.Z)({}, R),
                W = function N(E) {
                  var D,
                    F = (0, u.Z)({}, j[E]);
                  if (
                    ((F.show = $.checked),
                    (D = T.map) !== null &&
                      D !== void 0 &&
                      (D = D.get(E)) !== null &&
                      D !== void 0 &&
                      D.children)
                  ) {
                    var Y;
                    (Y = T.map.get(E)) === null ||
                      Y === void 0 ||
                      (Y = Y.children) === null ||
                      Y === void 0 ||
                      Y.forEach(function (H) {
                        return N(H.key);
                      });
                  }
                  j[E] = F;
                };
              W($.node.key), L((0, u.Z)({}, j));
            });
          if (!q) return null;
          var M = (0, x.jsx)(Yl, {
            itemHeight: 24,
            draggable:
              i &&
              !!((n = T.list) !== null && n !== void 0 && n.length) &&
              ((r = T.list) === null || r === void 0 ? void 0 : r.length) > 1,
            checkable: s,
            onDrop: function (j) {
              var W = j.node.key,
                N = j.dragNode.key,
                E = j.dropPosition,
                D = j.dropToGap,
                F = E === -1 || !D ? E + 1 : E;
              X(N, W, F);
            },
            blockNode: !0,
            onCheck: function (j, W) {
              return z(W);
            },
            checkedKeys: T.keys,
            showLine: !1,
            titleRender: function (j) {
              var W = (0, u.Z)((0, u.Z)({}, j), {}, { children: void 0 });
              if (!W.title) return null;
              var N = (0, Er.h)(W.title, W),
                E = (0, x.jsx)(zf.Z.Text, {
                  style: { width: 80 },
                  ellipsis: { tooltip: N },
                  children: N,
                });
              return (0, x.jsx)(
                kf,
                (0, u.Z)(
                  (0, u.Z)({ className: d }, (0, ve.Z)(W, ['key'])),
                  {},
                  { showListItemOption: c, title: E, columnKey: W.key },
                ),
              );
            },
            height: g,
            treeData:
              (a = T.list) === null || a === void 0
                ? void 0
                : a.map(function ($) {
                    var j = $.disabled,
                      W = (0, Ie.Z)($, Vf);
                    return W;
                  }),
          });
          return (0, x.jsxs)(x.Fragment, {
            children: [
              p &&
                (0, x.jsx)('span', {
                  className: ''.concat(d, '-list-title ').concat(b).trim(),
                  children: v,
                }),
              M,
            ],
          });
        },
        Uf = function (e) {
          var n = e.localColumns,
            r = e.className,
            a = e.draggable,
            o = e.checkable,
            i = e.showListItemOption,
            s = e.listsHeight,
            c = (0, l.useContext)(gn.L_),
            d = c.hashId,
            h = [],
            p = [],
            v = [],
            y = (0, gn.YB)();
          n.forEach(function (b) {
            if (!b.hideInSetting) {
              var C = b.fixed;
              if (C === 'left') {
                p.push(b);
                return;
              }
              if (C === 'right') {
                h.push(b);
                return;
              }
              v.push(b);
            }
          });
          var g = h && h.length > 0,
            Z = p && p.length > 0;
          return (0, x.jsxs)('div', {
            className: fe()(
              ''.concat(r, '-list'),
              d,
              (0, S.Z)({}, ''.concat(r, '-list-group'), g || Z),
            ),
            children: [
              (0, x.jsx)(hl, {
                title: y.getMessage(
                  'tableToolBar.leftFixedTitle',
                  '\u56FA\u5B9A\u5728\u5DE6\u4FA7',
                ),
                list: p,
                draggable: a,
                checkable: o,
                showListItemOption: i,
                className: r,
                listHeight: s,
              }),
              (0, x.jsx)(hl, {
                list: v,
                draggable: a,
                checkable: o,
                showListItemOption: i,
                title: y.getMessage(
                  'tableToolBar.noFixedTitle',
                  '\u4E0D\u56FA\u5B9A',
                ),
                showTitle: Z || g,
                className: r,
                listHeight: s,
              }),
              (0, x.jsx)(hl, {
                title: y.getMessage(
                  'tableToolBar.rightFixedTitle',
                  '\u56FA\u5B9A\u5728\u53F3\u4FA7',
                ),
                list: h,
                draggable: a,
                checkable: o,
                showListItemOption: i,
                className: r,
                listHeight: s,
              }),
            ],
          });
        };
      function Xf(t) {
        var e,
          n,
          r,
          a,
          o = (0, l.useRef)(null),
          i = (0, l.useContext)(Vr),
          s = t.columns,
          c = t.checkedReset,
          d = c === void 0 ? !0 : c,
          h = i.columnsMap,
          p = i.setColumnsMap,
          v = i.clearPersistenceStorage;
        (0, l.useEffect)(function () {
          var z;
          if (
            (z = i.propsRef.current) !== null &&
            z !== void 0 &&
            (z = z.columnsState) !== null &&
            z !== void 0 &&
            z.value
          ) {
            var M;
            o.current = JSON.parse(
              JSON.stringify(
                ((M = i.propsRef.current) === null ||
                M === void 0 ||
                (M = M.columnsState) === null ||
                M === void 0
                  ? void 0
                  : M.value) || {},
              ),
            );
          }
        }, []);
        var y = (0, Rr.J)(function () {
            var z =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !0,
              M = {},
              $ = function j(W) {
                W.forEach(function (N) {
                  var E = N.key,
                    D = N.fixed,
                    F = N.index,
                    Y = N.children,
                    H = N.disable,
                    V = la(E, F);
                  if (V) {
                    var Q, ie;
                    M[V] = {
                      show: H
                        ? (Q = h[V]) === null || Q === void 0
                          ? void 0
                          : Q.show
                        : z,
                      fixed: D,
                      disable: H,
                      order:
                        (ie = h[V]) === null || ie === void 0
                          ? void 0
                          : ie.order,
                    };
                  }
                  Y && j(Y);
                });
              };
            $(s), p(M);
          }),
          g = (0, Rr.J)(function (z) {
            z.target.checked ? y() : y(!1);
          }),
          Z = (0, Rr.J)(function () {
            var z;
            v == null || v(),
              p(
                ((z = i.propsRef.current) === null ||
                z === void 0 ||
                (z = z.columnsState) === null ||
                z === void 0
                  ? void 0
                  : z.defaultValue) ||
                  o.current ||
                  i.defaultColumnKeyMap,
              );
          }),
          b = Object.values(h).filter(function (z) {
            return !z || z.show === !1;
          }),
          C = b.length > 0 && b.length !== s.length,
          R = (0, gn.YB)(),
          L = (0, l.useContext)($e.ZP.ConfigContext),
          O = L.getPrefixCls,
          K = O('pro-table-column-setting'),
          q = Hf(K),
          T = q.wrapSSR,
          X = q.hashId;
        return T(
          (0, x.jsx)(Kf.Z, {
            arrow: !1,
            title: (0, x.jsxs)('div', {
              className: ''.concat(K, '-title ').concat(X).trim(),
              children: [
                t.checkable === !1
                  ? (0, x.jsx)('div', {})
                  : (0, x.jsx)(ma.Z, {
                      indeterminate: C,
                      checked: b.length === 0 && b.length !== s.length,
                      onChange: function (M) {
                        g(M);
                      },
                      children: R.getMessage(
                        'tableToolBar.columnDisplay',
                        '\u5217\u5C55\u793A',
                      ),
                    }),
                d
                  ? (0, x.jsx)('a', {
                      onClick: Z,
                      className: ''
                        .concat(K, '-action-rest-button ')
                        .concat(X)
                        .trim(),
                      children: R.getMessage(
                        'tableToolBar.reset',
                        '\u91CD\u7F6E',
                      ),
                    })
                  : null,
                t != null && t.extra
                  ? (0, x.jsx)(ga.Z, {
                      size: 12,
                      align: 'center',
                      children: t.extra,
                    })
                  : null,
              ],
            }),
            overlayClassName: ''.concat(K, '-overlay ').concat(X).trim(),
            trigger: 'click',
            placement: 'bottomRight',
            content: (0, x.jsx)(Uf, {
              checkable: (e = t.checkable) !== null && e !== void 0 ? e : !0,
              draggable: (n = t.draggable) !== null && n !== void 0 ? n : !0,
              showListItemOption:
                (r = t.showListItemOption) !== null && r !== void 0 ? r : !0,
              className: K,
              localColumns: s,
              listsHeight: t.listsHeight,
            }),
            children:
              t.children ||
              (0, x.jsx)(Tr.Z, {
                title: R.getMessage(
                  'tableToolBar.columnSetting',
                  '\u5217\u8BBE\u7F6E',
                ),
                children:
                  (a = t.settingIcon) !== null && a !== void 0
                    ? a
                    : (0, x.jsx)(Df, {}),
              }),
          }),
        );
      }
      var Gf = Xf,
        yl = m(28847),
        Lo = function (e) {
          var n =
            (0, yl.n)((0, pl.b)(), '4.24.0') > -1
              ? { menu: e }
              : { overlay: (0, x.jsx)(Al.Z, (0, u.Z)({}, e)) };
          return (0, ye.Y)(n);
        },
        Yf = function (e) {
          var n = (0, l.useContext)(gn.L_),
            r = n.hashId,
            a = e.items,
            o = a === void 0 ? [] : a,
            i = e.type,
            s = i === void 0 ? 'inline' : i,
            c = e.prefixCls,
            d = e.activeKey,
            h = e.defaultActiveKey,
            p = (0, J.Z)(d || h, { value: d, onChange: e.onChange }),
            v = (0, de.Z)(p, 2),
            y = v[0],
            g = v[1];
          if (o.length < 1) return null;
          var Z =
            o.find(function (C) {
              return C.key === y;
            }) || o[0];
          if (s === 'inline')
            return (0, x.jsx)('div', {
              className: fe()(
                ''.concat(c, '-menu'),
                ''.concat(c, '-inline-menu'),
                r,
              ),
              children: o.map(function (C, R) {
                return (0, x.jsx)(
                  'div',
                  {
                    onClick: function () {
                      g(C.key);
                    },
                    className: fe()(
                      ''.concat(c, '-inline-menu-item'),
                      Z.key === C.key
                        ? ''.concat(c, '-inline-menu-item-active')
                        : void 0,
                      r,
                    ),
                    children: C.label,
                  },
                  C.key || R,
                );
              }),
            });
          if (s === 'tab')
            return (0, x.jsx)(Ge.Z, {
              items: o.map(function (C) {
                var R;
                return (0,
                u.Z)((0, u.Z)({}, C), {}, { key: (R = C.key) === null || R === void 0 ? void 0 : R.toString() });
              }),
              activeKey: Z.key,
              onTabClick: function (R) {
                return g(R);
              },
              children:
                (0, yl.n)(sr.Z, '4.23.0') < 0
                  ? o == null
                    ? void 0
                    : o.map(function (C, R) {
                        return (0,
                        l.createElement)(Ge.Z.TabPane, (0, u.Z)((0, u.Z)({}, C), {}, { key: C.key || R, tab: C.label }));
                      })
                  : null,
            });
          var b = Lo({
            selectedKeys: [Z.key],
            onClick: function (R) {
              g(R.key);
            },
            items: o.map(function (C, R) {
              return { key: C.key || R, disabled: C.disabled, label: C.label };
            }),
          });
          return (0, x.jsx)('div', {
            className: fe()(
              ''.concat(c, '-menu'),
              ''.concat(c, '-dropdownmenu'),
            ),
            children: (0, x.jsx)(
              Ra.Z,
              (0, u.Z)(
                (0, u.Z)({ trigger: ['click'] }, b),
                {},
                {
                  children: (0, x.jsxs)(ga.Z, {
                    className: ''.concat(c, '-dropdownmenu-label'),
                    children: [Z.label, (0, x.jsx)(wa.Z, {})],
                  }),
                },
              ),
            ),
          });
        },
        Jf = Yf,
        Qf = function (e) {
          return (0, S.Z)(
            {},
            e.componentCls,
            (0, S.Z)(
              (0, S.Z)(
                (0, S.Z)(
                  {
                    lineHeight: '1',
                    '&-container': {
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBlock: e.padding,
                      paddingInline: 0,
                      '&-mobile': { flexDirection: 'column' },
                    },
                    '&-title': {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      color: e.colorTextHeading,
                      fontWeight: '500',
                      fontSize: e.fontSizeLG,
                    },
                    '&-search:not(:last-child)': {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    },
                    '&-setting-item': {
                      marginBlock: 0,
                      marginInline: 4,
                      color: e.colorIconHover,
                      fontSize: e.fontSizeLG,
                      cursor: 'pointer',
                      '> span': {
                        display: 'block',
                        width: '100%',
                        height: '100%',
                      },
                      '&:hover': { color: e.colorPrimary },
                    },
                    '&-left': (0, S.Z)(
                      (0, S.Z)(
                        {
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: e.marginXS,
                          justifyContent: 'flex-start',
                          maxWidth: 'calc(100% - 200px)',
                        },
                        ''.concat(e.antCls, '-tabs'),
                        { width: '100%' },
                      ),
                      '&-has-tabs',
                      { overflow: 'hidden' },
                    ),
                    '&-right': {
                      flex: 1,
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'flex-end',
                      gap: e.marginXS,
                    },
                    '&-extra-line': { marginBlockEnd: e.margin },
                    '&-setting-items': {
                      display: 'flex',
                      gap: e.marginXS,
                      lineHeight: '32px',
                      alignItems: 'center',
                    },
                    '&-filter': (0, S.Z)(
                      {
                        '&:not(:last-child)': { marginInlineEnd: e.margin },
                        display: 'flex',
                        alignItems: 'center',
                      },
                      'div$'.concat(e.antCls, '-pro-table-search'),
                      {
                        marginBlock: 0,
                        marginInline: 0,
                        paddingBlock: 0,
                        paddingInline: 0,
                      },
                    ),
                    '&-inline-menu-item': {
                      display: 'inline-block',
                      marginInlineEnd: e.marginLG,
                      cursor: 'pointer',
                      opacity: '0.75',
                      '&-active': { fontWeight: 'bold', opacity: '1' },
                    },
                  },
                  ''
                    .concat(e.antCls, '-tabs-top > ')
                    .concat(e.antCls, '-tabs-nav'),
                  (0, S.Z)(
                    { marginBlockEnd: 0, '&::before': { borderBlockEnd: 0 } },
                    ''.concat(e.antCls, '-tabs-nav-list'),
                    {
                      marginBlockStart: 0,
                      '${token.antCls}-tabs-tab': { paddingBlockStart: 0 },
                    },
                  ),
                ),
                '&-dropdownmenu-label',
                {
                  fontWeight: 'bold',
                  fontSize: e.fontSizeIcon,
                  textAlign: 'center',
                  cursor: 'pointer',
                },
              ),
              '@media (max-width: 768px)',
              (0, S.Z)({}, e.componentCls, {
                '&-container': {
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'column',
                },
                '&-left': { marginBlockEnd: '16px', maxWidth: '100%' },
              }),
            ),
          );
        };
      function qf(t) {
        return (0, Gt.Xj)('ProTableListToolBar', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [Qf(n)];
        });
      }
      function _f(t) {
        if (l.isValidElement(t)) return t;
        if (t) {
          var e = t,
            n = e.icon,
            r = e.tooltip,
            a = e.onClick,
            o = e.key;
          return n && r
            ? (0, x.jsx)(Tr.Z, {
                title: r,
                children: (0, x.jsx)(
                  'span',
                  {
                    onClick: function () {
                      a && a(o);
                    },
                    children: n,
                  },
                  o,
                ),
              })
            : (0, x.jsx)(
                'span',
                {
                  onClick: function () {
                    a && a(o);
                  },
                  children: n,
                },
                o,
              );
        }
        return null;
      }
      var e0 = function (e) {
          var n,
            r = e.prefixCls,
            a = e.tabs,
            o = e.multipleLine,
            i = e.filtersNode;
          return o
            ? (0, x.jsx)('div', {
                className: ''.concat(r, '-extra-line'),
                children:
                  a != null &&
                  a.items &&
                  a !== null &&
                  a !== void 0 &&
                  a.items.length
                    ? (0, x.jsx)(Ge.Z, {
                        style: { width: '100%' },
                        defaultActiveKey: a.defaultActiveKey,
                        activeKey: a.activeKey,
                        items: a.items.map(function (s, c) {
                          var d;
                          return (0,
                          u.Z)((0, u.Z)({ label: s.tab }, s), {}, { key: ((d = s.key) === null || d === void 0 ? void 0 : d.toString()) || (c == null ? void 0 : c.toString()) });
                        }),
                        onChange: a.onChange,
                        tabBarExtraContent: i,
                        children:
                          (n = a.items) === null || n === void 0
                            ? void 0
                            : n.map(function (s, c) {
                                return (0, yl.n)(sr.Z, '4.23.0') < 0
                                  ? (0, l.createElement)(
                                      Ge.Z.TabPane,
                                      (0, u.Z)(
                                        (0, u.Z)({}, s),
                                        {},
                                        { key: s.key || c, tab: s.tab },
                                      ),
                                    )
                                  : null;
                              }),
                      })
                    : i,
              })
            : null;
        },
        t0 = function (e) {
          var n = e.prefixCls,
            r = e.title,
            a = e.subTitle,
            o = e.tooltip,
            i = e.className,
            s = e.style,
            c = e.search,
            d = e.onSearch,
            h = e.multipleLine,
            p = h === void 0 ? !1 : h,
            v = e.filter,
            y = e.actions,
            g = y === void 0 ? [] : y,
            Z = e.settings,
            b = Z === void 0 ? [] : Z,
            C = e.tabs,
            R = e.menu,
            L = (0, l.useContext)($e.ZP.ConfigContext),
            O = L.getPrefixCls,
            K = Gt.Ow.useToken(),
            q = K.token,
            T = O('pro-table-list-toolbar', n),
            X = qf(T),
            z = X.wrapSSR,
            M = X.hashId,
            $ = (0, gn.YB)(),
            j = (0, l.useState)(!1),
            W = (0, de.Z)(j, 2),
            N = W[0],
            E = W[1],
            D = $.getMessage(
              'tableForm.inputPlaceholder',
              '\u8BF7\u8F93\u5165',
            ),
            F = (0, l.useMemo)(
              function () {
                return c
                  ? l.isValidElement(c)
                    ? c
                    : (0, x.jsx)(
                        nl.Z.Search,
                        (0, u.Z)(
                          (0, u.Z)(
                            { style: { width: 200 }, placeholder: D },
                            c,
                          ),
                          {},
                          {
                            onSearch: (0, oe.Z)(
                              (0, Ee.Z)().mark(function xe() {
                                var ne,
                                  se,
                                  Ze,
                                  Ue,
                                  ue,
                                  Ne,
                                  we = arguments;
                                return (0, Ee.Z)().wrap(function (Fe) {
                                  for (;;)
                                    switch ((Fe.prev = Fe.next)) {
                                      case 0:
                                        for (
                                          Ze = we.length,
                                            Ue = new Array(Ze),
                                            ue = 0;
                                          ue < Ze;
                                          ue++
                                        )
                                          Ue[ue] = we[ue];
                                        return (
                                          (Fe.next = 3),
                                          (ne = (se = c).onSearch) === null ||
                                          ne === void 0
                                            ? void 0
                                            : ne.call.apply(ne, [se].concat(Ue))
                                        );
                                      case 3:
                                        (Ne = Fe.sent),
                                          Ne !== !1 &&
                                            (d == null ||
                                              d(Ue == null ? void 0 : Ue[0]));
                                      case 5:
                                      case 'end':
                                        return Fe.stop();
                                    }
                                }, xe);
                              }),
                            ),
                          },
                        ),
                      )
                  : null;
              },
              [D, d, c],
            ),
            Y = (0, l.useMemo)(
              function () {
                return v
                  ? (0, x.jsx)('div', {
                      className: ''.concat(T, '-filter ').concat(M).trim(),
                      children: v,
                    })
                  : null;
              },
              [v, M, T],
            ),
            H = (0, l.useMemo)(
              function () {
                return R || r || a || o;
              },
              [R, a, r, o],
            ),
            V = (0, l.useMemo)(
              function () {
                return Array.isArray(g)
                  ? g.length < 1
                    ? null
                    : (0, x.jsx)('div', {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: q.marginXS,
                        },
                        children: g.map(function (xe, ne) {
                          return l.isValidElement(xe)
                            ? l.cloneElement(
                                xe,
                                (0, u.Z)(
                                  { key: ne },
                                  xe == null ? void 0 : xe.props,
                                ),
                              )
                            : (0, x.jsx)(l.Fragment, { children: xe }, ne);
                        }),
                      })
                  : g;
              },
              [g],
            ),
            Q = (0, l.useMemo)(
              function () {
                return !!(
                  (H && F) ||
                  (!p && Y) ||
                  V ||
                  (b != null && b.length)
                );
              },
              [V, Y, H, p, F, b == null ? void 0 : b.length],
            ),
            ie = (0, l.useMemo)(
              function () {
                return o || r || a || R || (!H && F);
              },
              [H, R, F, a, r, o],
            ),
            pe = (0, l.useMemo)(
              function () {
                return !ie && Q
                  ? (0, x.jsx)('div', {
                      className: ''.concat(T, '-left ').concat(M).trim(),
                    })
                  : !R && (H || !F)
                  ? (0, x.jsx)('div', {
                      className: ''.concat(T, '-left ').concat(M).trim(),
                      children: (0, x.jsx)('div', {
                        className: ''.concat(T, '-title ').concat(M).trim(),
                        children: (0, x.jsx)(Bt.G, {
                          tooltip: o,
                          label: r,
                          subTitle: a,
                        }),
                      }),
                    })
                  : (0, x.jsxs)('div', {
                      className: fe()(
                        ''.concat(T, '-left'),
                        M,
                        (0, S.Z)(
                          (0, S.Z)(
                            (0, S.Z)(
                              {},
                              ''.concat(T, '-left-has-tabs'),
                              (R == null ? void 0 : R.type) === 'tab',
                            ),
                            ''.concat(T, '-left-has-dropdown'),
                            (R == null ? void 0 : R.type) === 'dropdown',
                          ),
                          ''.concat(T, '-left-has-inline-menu'),
                          (R == null ? void 0 : R.type) === 'inline',
                        ),
                      ),
                      children: [
                        H &&
                          !R &&
                          (0, x.jsx)('div', {
                            className: ''.concat(T, '-title ').concat(M).trim(),
                            children: (0, x.jsx)(Bt.G, {
                              tooltip: o,
                              label: r,
                              subTitle: a,
                            }),
                          }),
                        R &&
                          (0, x.jsx)(
                            Jf,
                            (0, u.Z)((0, u.Z)({}, R), {}, { prefixCls: T }),
                          ),
                        !H && F
                          ? (0, x.jsx)('div', {
                              className: ''
                                .concat(T, '-search ')
                                .concat(M)
                                .trim(),
                              children: F,
                            })
                          : null,
                      ],
                    });
              },
              [ie, Q, H, M, R, T, F, a, r, o],
            ),
            Ce = (0, l.useMemo)(
              function () {
                return Q
                  ? (0, x.jsxs)('div', {
                      className: ''.concat(T, '-right ').concat(M).trim(),
                      style: N ? {} : { alignItems: 'center' },
                      children: [
                        p ? null : Y,
                        H && F
                          ? (0, x.jsx)('div', {
                              className: ''
                                .concat(T, '-search ')
                                .concat(M)
                                .trim(),
                              children: F,
                            })
                          : null,
                        V,
                        b != null && b.length
                          ? (0, x.jsx)('div', {
                              className: ''
                                .concat(T, '-setting-items ')
                                .concat(M)
                                .trim(),
                              children: b.map(function (xe, ne) {
                                var se = _f(xe);
                                return (0,
                                x.jsx)('div', { className: ''.concat(T, '-setting-item ').concat(M).trim(), children: se }, ne);
                              }),
                            })
                          : null,
                      ],
                    })
                  : null;
              },
              [Q, T, M, N, H, F, p, Y, V, b],
            ),
            ae = (0, l.useMemo)(
              function () {
                if (!Q && !ie) return null;
                var xe = fe()(
                  ''.concat(T, '-container'),
                  M,
                  (0, S.Z)({}, ''.concat(T, '-container-mobile'), N),
                );
                return (0, x.jsxs)('div', {
                  className: xe,
                  children: [pe, Ce],
                });
              },
              [ie, Q, M, N, pe, T, Ce],
            );
          return z(
            (0, x.jsx)(wt.Z, {
              onResize: function (ne) {
                ne.width < 375 !== N && E(ne.width < 375);
              },
              children: (0, x.jsxs)('div', {
                style: s,
                className: fe()(T, M, i),
                children: [
                  ae,
                  (0, x.jsx)(e0, {
                    filtersNode: Y,
                    prefixCls: T,
                    tabs: C,
                    multipleLine: p,
                  }),
                ],
              }),
            }),
          );
        },
        n0 = t0,
        r0 = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z',
                },
              },
            ],
          },
          name: 'column-height',
          theme: 'outlined',
        },
        a0 = r0,
        l0 = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: a0 }));
        },
        o0 = l.forwardRef(l0),
        i0 = o0,
        s0 = function (e) {
          var n = e.icon,
            r = n === void 0 ? (0, x.jsx)(i0, {}) : n,
            a = (0, l.useContext)(Vr),
            o = (0, gn.YB)(),
            i = Lo({
              selectedKeys: [a.tableSize],
              onClick: function (c) {
                var d,
                  h = c.key;
                (d = a.setTableSize) === null || d === void 0 || d.call(a, h);
              },
              style: { width: 80 },
              items: [
                {
                  key: 'large',
                  label: o.getMessage(
                    'tableToolBar.densityLarger',
                    '\u5BBD\u677E',
                  ),
                },
                {
                  key: 'middle',
                  label: o.getMessage(
                    'tableToolBar.densityMiddle',
                    '\u4E2D\u7B49',
                  ),
                },
                {
                  key: 'small',
                  label: o.getMessage(
                    'tableToolBar.densitySmall',
                    '\u7D27\u51D1',
                  ),
                },
              ],
            });
          return (0, x.jsx)(
            Ra.Z,
            (0, u.Z)(
              (0, u.Z)({}, i),
              {},
              {
                trigger: ['click'],
                children: (0, x.jsx)(Tr.Z, {
                  title: o.getMessage(
                    'tableToolBar.density',
                    '\u8868\u683C\u5BC6\u5EA6',
                  ),
                  children: r,
                }),
              },
            ),
          );
        },
        c0 = l.memo(s0),
        d0 = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z',
                },
              },
            ],
          },
          name: 'fullscreen-exit',
          theme: 'outlined',
        },
        u0 = d0,
        f0 = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: u0 }));
        },
        v0 = l.forwardRef(f0),
        m0 = v0,
        p0 = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z',
                },
              },
            ],
          },
          name: 'fullscreen',
          theme: 'outlined',
        },
        g0 = p0,
        h0 = function (e, n) {
          return l.createElement(ar.Z, (0, Qe.Z)({}, e, { ref: n, icon: g0 }));
        },
        y0 = l.forwardRef(h0),
        b0 = y0,
        S0 = function () {
          var e = (0, gn.YB)(),
            n = (0, l.useState)(!1),
            r = (0, de.Z)(n, 2),
            a = r[0],
            o = r[1];
          return (
            (0, l.useEffect)(function () {
              (0, ml.j)() &&
                (document.onfullscreenchange = function () {
                  o(!!document.fullscreenElement);
                });
            }, []),
            a
              ? (0, x.jsx)(Tr.Z, {
                  title: e.getMessage(
                    'tableToolBar.exitFullScreen',
                    '\u5168\u5C4F',
                  ),
                  children: (0, x.jsx)(m0, {}),
                })
              : (0, x.jsx)(Tr.Z, {
                  title: e.getMessage(
                    'tableToolBar.fullScreen',
                    '\u5168\u5C4F',
                  ),
                  children: (0, x.jsx)(b0, {}),
                })
          );
        },
        Do = l.memo(S0),
        x0 = [
          'headerTitle',
          'tooltip',
          'toolBarRender',
          'action',
          'options',
          'selectedRowKeys',
          'selectedRows',
          'toolbar',
          'onSearch',
          'columns',
          'optionsRender',
        ];
      function C0(t, e) {
        var n,
          r = t.intl;
        return {
          reload: {
            text: r.getMessage('tableToolBar.reload', '\u5237\u65B0'),
            icon:
              (n = e.reloadIcon) !== null && n !== void 0
                ? n
                : (0, x.jsx)(yf.Z, {}),
          },
          density: {
            text: r.getMessage(
              'tableToolBar.density',
              '\u8868\u683C\u5BC6\u5EA6',
            ),
            icon: (0, x.jsx)(c0, { icon: e.densityIcon }),
          },
          fullScreen: {
            text: r.getMessage('tableToolBar.fullScreen', '\u5168\u5C4F'),
            icon: (0, x.jsx)(Do, {}),
          },
        };
      }
      function Z0(t, e, n, r) {
        return Object.keys(t)
          .filter(function (a) {
            return a;
          })
          .map(function (a) {
            var o = t[a];
            if (!o) return null;
            var i =
              o === !0
                ? e[a]
                : function (c) {
                    o == null || o(c, n.current);
                  };
            if (
              (typeof i != 'function' && (i = function () {}), a === 'setting')
            )
              return (0, l.createElement)(
                Gf,
                (0, u.Z)((0, u.Z)({}, t[a]), {}, { columns: r, key: a }),
              );
            if (a === 'fullScreen')
              return (0, x.jsx)(
                'span',
                { onClick: i, children: (0, x.jsx)(Do, {}) },
                a,
              );
            var s = C0(e, t)[a];
            return s
              ? (0, x.jsx)(
                  'span',
                  {
                    onClick: i,
                    children: (0, x.jsx)(Tr.Z, {
                      title: s.text,
                      children: s.icon,
                    }),
                  },
                  a,
                )
              : null;
          })
          .filter(function (a) {
            return a;
          });
      }
      function w0(t) {
        var e = t.headerTitle,
          n = t.tooltip,
          r = t.toolBarRender,
          a = t.action,
          o = t.options,
          i = t.selectedRowKeys,
          s = t.selectedRows,
          c = t.toolbar,
          d = t.onSearch,
          h = t.columns,
          p = t.optionsRender,
          v = (0, Ie.Z)(t, x0),
          y = (0, l.useContext)(Vr),
          g = (0, gn.YB)(),
          Z = (0, l.useMemo)(
            function () {
              var R = {
                reload: function () {
                  var q;
                  return a == null || (q = a.current) === null || q === void 0
                    ? void 0
                    : q.reload();
                },
                density: !0,
                setting: !0,
                search: !1,
                fullScreen: function () {
                  var q, T;
                  return a == null ||
                    (q = a.current) === null ||
                    q === void 0 ||
                    (T = q.fullScreen) === null ||
                    T === void 0
                    ? void 0
                    : T.call(q);
                },
              };
              if (o === !1) return [];
              var L = (0, u.Z)((0, u.Z)({}, R), {}, { fullScreen: !1 }, o),
                O = Z0(L, (0, u.Z)((0, u.Z)({}, R), {}, { intl: g }), a, h);
              return p
                ? p(
                    (0, u.Z)(
                      {
                        headerTitle: e,
                        tooltip: n,
                        toolBarRender: r,
                        action: a,
                        options: o,
                        selectedRowKeys: i,
                        selectedRows: s,
                        toolbar: c,
                        onSearch: d,
                        columns: h,
                        optionsRender: p,
                      },
                      v,
                    ),
                    O,
                  )
                : O;
            },
            [a, h, e, g, d, p, o, v, i, s, r, c, n],
          ),
          b = r
            ? r(a == null ? void 0 : a.current, {
                selectedRowKeys: i,
                selectedRows: s,
              })
            : [],
          C = (0, l.useMemo)(
            function () {
              if (!o || !o.search) return !1;
              var R = {
                value: y.keyWords,
                onChange: function (O) {
                  return y.setKeyWords(O.target.value);
                },
              };
              return o.search === !0 ? R : (0, u.Z)((0, u.Z)({}, R), o.search);
            },
            [y, o],
          );
        return (
          (0, l.useEffect)(
            function () {
              y.keyWords === void 0 && (d == null || d(''));
            },
            [y.keyWords, d],
          ),
          (0, x.jsx)(
            n0,
            (0, u.Z)(
              {
                title: e,
                tooltip: n || v.tip,
                search: C,
                onSearch: d,
                actions: b,
                settings: Z,
              },
              c,
            ),
          )
        );
      }
      var R0 = (function (t) {
          (0, Eo.Z)(n, t);
          var e = (0, Io.Z)(n);
          function n() {
            var r;
            (0, Ro.Z)(this, n);
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (r = e.call.apply(e, [this].concat(o))),
              (0, S.Z)((0, Nr.Z)(r), 'onSearch', function (s) {
                var c,
                  d,
                  h,
                  p,
                  v = r.props,
                  y = v.options,
                  g = v.onFormSearchSubmit,
                  Z = v.actionRef;
                if (!(!y || !y.search)) {
                  var b = y.search === !0 ? {} : y.search,
                    C = b.name,
                    R = C === void 0 ? 'keyword' : C,
                    L =
                      (c = y.search) === null ||
                      c === void 0 ||
                      (d = c.onSearch) === null ||
                      d === void 0
                        ? void 0
                        : d.call(c, s);
                  L !== !1 &&
                    (Z == null ||
                      (h = Z.current) === null ||
                      h === void 0 ||
                      (p = h.setPageInfo) === null ||
                      p === void 0 ||
                      p.call(h, { current: 1 }),
                    g((0, ye.Y)((0, S.Z)({ _timestamp: Date.now() }, R, s))));
                }
              }),
              (0, S.Z)((0, Nr.Z)(r), 'isEquals', function (s) {
                var c = r.props,
                  d = c.hideToolbar,
                  h = c.tableColumn,
                  p = c.options,
                  v = c.tooltip,
                  y = c.toolbar,
                  g = c.selectedRows,
                  Z = c.selectedRowKeys,
                  b = c.headerTitle,
                  C = c.actionRef,
                  R = c.toolBarRender;
                return (0,
                Po.A)({ hideToolbar: d, tableColumn: h, options: p, tooltip: v, toolbar: y, selectedRows: g, selectedRowKeys: Z, headerTitle: b, actionRef: C, toolBarRender: R }, { hideToolbar: s.hideToolbar, tableColumn: s.tableColumn, options: s.options, tooltip: s.tooltip, toolbar: s.toolbar, selectedRows: s.selectedRows, selectedRowKeys: s.selectedRowKeys, headerTitle: s.headerTitle, actionRef: s.actionRef, toolBarRender: s.toolBarRender }, ['render', 'renderFormItem']);
              }),
              (0, S.Z)((0, Nr.Z)(r), 'shouldComponentUpdate', function (s) {
                return s.searchNode ? !0 : !r.isEquals(s);
              }),
              (0, S.Z)((0, Nr.Z)(r), 'render', function () {
                var s = r.props,
                  c = s.hideToolbar,
                  d = s.tableColumn,
                  h = s.options,
                  p = s.searchNode,
                  v = s.tooltip,
                  y = s.toolbar,
                  g = s.selectedRows,
                  Z = s.selectedRowKeys,
                  b = s.headerTitle,
                  C = s.actionRef,
                  R = s.toolBarRender,
                  L = s.optionsRender;
                return c
                  ? null
                  : (0, x.jsx)(w0, {
                      tooltip: v,
                      columns: d,
                      options: h,
                      headerTitle: b,
                      action: C,
                      onSearch: r.onSearch,
                      selectedRows: g,
                      selectedRowKeys: Z,
                      toolBarRender: R,
                      toolbar: (0, u.Z)({ filter: p }, y),
                      optionsRender: L,
                    });
              }),
              r
            );
          }
          return (0, wo.Z)(n);
        })(l.Component),
        E0 = R0,
        I0 = new Me.E4('turn', {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }),
        P0 = function (e) {
          return (0, S.Z)(
            (0, S.Z)(
              (0, S.Z)(
                {},
                e.componentCls,
                (0, S.Z)(
                  (0, S.Z)(
                    (0, S.Z)(
                      (0, S.Z)(
                        (0, S.Z)(
                          (0, S.Z)(
                            (0, S.Z)(
                              (0, S.Z)(
                                (0, S.Z)(
                                  { zIndex: 1 },
                                  ''
                                    .concat(e.antCls, '-table-wrapper ')
                                    .concat(e.antCls, '-table-pagination')
                                    .concat(e.antCls, '-pagination'),
                                  { marginBlockEnd: 0 },
                                ),
                                '&:not(:root):fullscreen',
                                {
                                  minHeight: '100vh',
                                  overflow: 'auto',
                                  background: e.colorBgContainer,
                                },
                              ),
                              '&-extra',
                              { marginBlockEnd: 16 },
                            ),
                            '&-polling',
                            (0, S.Z)(
                              {},
                              ''.concat(
                                e.componentCls,
                                '-list-toolbar-setting-item',
                              ),
                              {
                                '.anticon.anticon-reload': {
                                  transform: 'rotate(0deg)',
                                  animationName: I0,
                                  animationDuration: '1s',
                                  animationTimingFunction: 'linear',
                                  animationIterationCount: 'infinite',
                                },
                              },
                            ),
                          ),
                          'td'.concat(e.antCls, '-table-cell'),
                          { '>a': { fontSize: e.fontSize } },
                        ),
                        ''
                          .concat(e.antCls, '-table')
                          .concat(e.antCls, '-table-tbody')
                          .concat(e.antCls, '-table-wrapper:only-child')
                          .concat(e.antCls, '-table'),
                        { marginBlock: 0, marginInline: 0 },
                      ),
                      ''
                        .concat(e.antCls, '-table')
                        .concat(e.antCls, '-table-middle ')
                        .concat(e.componentCls),
                      (0, S.Z)(
                        { marginBlock: 0, marginInline: -8 },
                        ''.concat(e.proComponentsCls, '-card'),
                        { backgroundColor: 'initial' },
                      ),
                    ),
                    '& &-search',
                    (0, S.Z)(
                      (0, S.Z)(
                        (0, S.Z)(
                          (0, S.Z)(
                            {
                              marginBlockEnd: '16px',
                              background: e.colorBgContainer,
                              '&-ghost': { background: 'transparent' },
                            },
                            '&'.concat(e.componentCls, '-form'),
                            {
                              marginBlock: 0,
                              marginInline: 0,
                              paddingBlock: 0,
                              paddingInline: 16,
                              overflow: 'unset',
                            },
                          ),
                          '&-light-filter',
                          {
                            marginBlockEnd: 0,
                            paddingBlock: 0,
                            paddingInline: 0,
                          },
                        ),
                        '&-form-option',
                        (0, S.Z)(
                          (0, S.Z)(
                            (0, S.Z)({}, ''.concat(e.antCls, '-form-item'), {}),
                            ''.concat(e.antCls, '-form-item-label'),
                            {},
                          ),
                          ''.concat(e.antCls, '-form-item-control-input'),
                          {},
                        ),
                      ),
                      '@media (max-width: 575px)',
                      (0, S.Z)(
                        {},
                        e.componentCls,
                        (0, S.Z)(
                          {
                            height: 'auto !important',
                            paddingBlockEnd: '24px',
                          },
                          ''.concat(e.antCls, '-form-item-label'),
                          { minWidth: '80px', textAlign: 'start' },
                        ),
                      ),
                    ),
                  ),
                  '&-toolbar',
                  {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px',
                    paddingInline: 24,
                    paddingBlock: 0,
                    '&-option': {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    },
                    '&-title': {
                      flex: '1',
                      color: e.colorTextLabel,
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '24px',
                      opacity: '0.85',
                    },
                  },
                ),
              ),
              '@media (max-width: '.concat(e.screenXS, ')px'),
              (0, S.Z)(
                {},
                e.componentCls,
                (0, S.Z)({}, ''.concat(e.antCls, '-table'), {
                  width: '100%',
                  overflowX: 'auto',
                  '&-thead > tr,&-tbody > tr': {
                    '> th,> td': {
                      whiteSpace: 'pre',
                      '>span': { display: 'block' },
                    },
                  },
                }),
              ),
            ),
            '@media (max-width: 575px)',
            (0, S.Z)({}, ''.concat(e.componentCls, '-toolbar'), {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              height: 'auto',
              marginBlockEnd: '16px',
              marginInlineStart: '16px',
              paddingBlock: 8,
              paddingInline: 8,
              paddingBlockStart: '16px',
              lineHeight: 'normal',
              '&-title': { marginBlockEnd: 16 },
              '&-option': {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              },
              '&-default-option': {
                display: 'flex',
                flex: '1',
                alignItems: 'center',
                justifyContent: 'flex-end',
              },
            }),
          );
        };
      function $0(t) {
        return (0, Gt.Xj)('ProTable', function (e) {
          var n = (0, u.Z)(
            (0, u.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [P0(n)];
        });
      }
      var bl = m(39584),
        T0 = m(97384),
        j0 = ['data', 'success', 'total'],
        N0 = function (e) {
          var n = e.pageInfo;
          if (n) {
            var r = n.current,
              a = n.defaultCurrent,
              o = n.pageSize,
              i = n.defaultPageSize;
            return { current: r || a || 1, total: 0, pageSize: o || i || 20 };
          }
          return { current: 1, total: 0, pageSize: 20 };
        },
        O0 = function (e, n, r) {
          var a,
            o = (0, l.useRef)(!1),
            i = (0, l.useRef)(null),
            s = r || {},
            c = s.onLoad,
            d = s.manual,
            h = s.polling,
            p = s.onRequestError,
            v = s.debounceTime,
            y = v === void 0 ? 20 : v,
            g = s.effects,
            Z = g === void 0 ? [] : g,
            b = (0, l.useRef)(d),
            C = (0, l.useRef)(),
            R = (0, J.Z)(n, {
              value: r == null ? void 0 : r.dataSource,
              onChange: r == null ? void 0 : r.onDataSourceChange,
            }),
            L = (0, de.Z)(R, 2),
            O = L[0],
            K = L[1],
            q = (0, J.Z)(!1, {
              value:
                (0, it.Z)(r == null ? void 0 : r.loading) === 'object'
                  ? r == null || (a = r.loading) === null || a === void 0
                    ? void 0
                    : a.spinning
                  : r == null
                  ? void 0
                  : r.loading,
              onChange: r == null ? void 0 : r.onLoadingChange,
            }),
            T = (0, de.Z)(q, 2),
            X = T[0],
            z = T[1],
            M = (0, J.Z)(
              function () {
                return N0(r);
              },
              { onChange: r == null ? void 0 : r.onPageInfoChange },
            ),
            $ = (0, de.Z)(M, 2),
            j = $[0],
            W = $[1],
            N = (0, Rr.J)(function (ne) {
              (ne.current !== j.current ||
                ne.pageSize !== j.pageSize ||
                ne.total !== j.total) &&
                W(ne);
            }),
            E = (0, J.Z)(!1),
            D = (0, de.Z)(E, 2),
            F = D[0],
            Y = D[1],
            H = function (se, Ze) {
              (0, zt.unstable_batchedUpdates)(function () {
                K(se),
                  (j == null ? void 0 : j.total) !== Ze &&
                    N(
                      (0, u.Z)((0, u.Z)({}, j), {}, { total: Ze || se.length }),
                    );
              });
            },
            V = (0, bl.D)(j == null ? void 0 : j.current),
            Q = (0, bl.D)(j == null ? void 0 : j.pageSize),
            ie = (0, bl.D)(h),
            pe = (0, Rr.J)(function () {
              (0, zt.unstable_batchedUpdates)(function () {
                z(!1), Y(!1);
              });
            }),
            Ce = (function () {
              var ne = (0, oe.Z)(
                (0, Ee.Z)().mark(function se(Ze) {
                  var Ue, ue, Ne, we, ee, Fe, rt, Pe, _, ge, Ae, je;
                  return (0, Ee.Z)().wrap(
                    function (Re) {
                      for (;;)
                        switch ((Re.prev = Re.next)) {
                          case 0:
                            if (!b.current) {
                              Re.next = 3;
                              break;
                            }
                            return (b.current = !1), Re.abrupt('return');
                          case 3:
                            return (
                              Ze ? Y(!0) : z(!0),
                              (Ue = j || {}),
                              (ue = Ue.pageSize),
                              (Ne = Ue.current),
                              (Re.prev = 5),
                              (we =
                                (r == null ? void 0 : r.pageInfo) !== !1
                                  ? { current: Ne, pageSize: ue }
                                  : void 0),
                              (Re.next = 9),
                              e == null ? void 0 : e(we)
                            );
                          case 9:
                            if (((Re.t0 = Re.sent), Re.t0)) {
                              Re.next = 12;
                              break;
                            }
                            Re.t0 = {};
                          case 12:
                            if (
                              ((ee = Re.t0),
                              (Fe = ee.data),
                              (rt = Fe === void 0 ? [] : Fe),
                              (Pe = ee.success),
                              (_ = ee.total),
                              (ge = _ === void 0 ? 0 : _),
                              (Ae = (0, Ie.Z)(ee, j0)),
                              Pe !== !1)
                            ) {
                              Re.next = 21;
                              break;
                            }
                            return Re.abrupt('return', []);
                          case 21:
                            return (
                              (je = Wd(
                                rt,
                                [r.postData].filter(function (xt) {
                                  return xt;
                                }),
                              )),
                              H(je, ge),
                              c == null || c(je, Ae),
                              Re.abrupt('return', je)
                            );
                          case 27:
                            if (
                              ((Re.prev = 27),
                              (Re.t1 = Re.catch(5)),
                              p !== void 0)
                            ) {
                              Re.next = 31;
                              break;
                            }
                            throw new Error(Re.t1);
                          case 31:
                            O === void 0 && K([]), p(Re.t1);
                          case 33:
                            return (Re.prev = 33), pe(), Re.finish(33);
                          case 36:
                            return Re.abrupt('return', []);
                          case 37:
                          case 'end':
                            return Re.stop();
                        }
                    },
                    se,
                    null,
                    [[5, 27, 33, 36]],
                  );
                }),
              );
              return function (Ze) {
                return ne.apply(this, arguments);
              };
            })(),
            ae = (0, T0.D)(
              (function () {
                var ne = (0, oe.Z)(
                  (0, Ee.Z)().mark(function se(Ze) {
                    var Ue, ue, Ne;
                    return (0, Ee.Z)().wrap(
                      function (ee) {
                        for (;;)
                          switch ((ee.prev = ee.next)) {
                            case 0:
                              if ((C.current && clearTimeout(C.current), e)) {
                                ee.next = 3;
                                break;
                              }
                              return ee.abrupt('return');
                            case 3:
                              return (
                                (Ue = new AbortController()),
                                (i.current = Ue),
                                (ee.prev = 5),
                                (ee.next = 8),
                                Promise.race([
                                  Ce(Ze),
                                  new Promise(function (Fe, rt) {
                                    var Pe, _;
                                    (Pe = i.current) === null ||
                                      Pe === void 0 ||
                                      (Pe = Pe.signal) === null ||
                                      Pe === void 0 ||
                                      (_ = Pe.addEventListener) === null ||
                                      _ === void 0 ||
                                      _.call(Pe, 'abort', function () {
                                        rt('aborted'), ae.cancel(), pe();
                                      });
                                  }),
                                ])
                              );
                            case 8:
                              if (((ue = ee.sent), !Ue.signal.aborted)) {
                                ee.next = 11;
                                break;
                              }
                              return ee.abrupt('return');
                            case 11:
                              return (
                                (Ne = (0, Er.h)(h, ue)),
                                Ne &&
                                  !o.current &&
                                  (C.current = setTimeout(function () {
                                    ae.run(Ne);
                                  }, Math.max(Ne, 2e3))),
                                ee.abrupt('return', ue)
                              );
                            case 16:
                              if (
                                ((ee.prev = 16),
                                (ee.t0 = ee.catch(5)),
                                ee.t0 !== 'aborted')
                              ) {
                                ee.next = 20;
                                break;
                              }
                              return ee.abrupt('return');
                            case 20:
                              throw ee.t0;
                            case 21:
                            case 'end':
                              return ee.stop();
                          }
                      },
                      se,
                      null,
                      [[5, 16]],
                    );
                  }),
                );
                return function (se) {
                  return ne.apply(this, arguments);
                };
              })(),
              y || 30,
            ),
            xe = function () {
              var se;
              (se = i.current) === null || se === void 0 || se.abort(),
                ae.cancel(),
                pe();
            };
          return (
            (0, l.useEffect)(
              function () {
                return (
                  h || clearTimeout(C.current),
                  !ie && h && ae.run(!0),
                  function () {
                    clearTimeout(C.current);
                  }
                );
              },
              [h],
            ),
            (0, l.useEffect)(function () {
              return (
                (o.current = !1),
                function () {
                  o.current = !0;
                }
              );
            }, []),
            (0, l.useEffect)(
              function () {
                var ne = j || {},
                  se = ne.current,
                  Ze = ne.pageSize;
                ((!V || V === se) && (!Q || Q === Ze)) ||
                  (r.pageInfo && O && (O == null ? void 0 : O.length) > Ze) ||
                  (se !== void 0 && O && O.length <= Ze && (xe(), ae.run(!1)));
              },
              [j == null ? void 0 : j.current],
            ),
            (0, l.useEffect)(
              function () {
                Q && (xe(), ae.run(!1));
              },
              [j == null ? void 0 : j.pageSize],
            ),
            (0, Je.KW)(function () {
              return (
                xe(),
                ae.run(!1),
                d || (b.current = !1),
                function () {
                  xe();
                }
              );
            }, [].concat((0, He.Z)(Z), [d])),
            {
              dataSource: O,
              setDataSource: K,
              loading:
                (0, it.Z)(r == null ? void 0 : r.loading) === 'object'
                  ? (0, u.Z)(
                      (0, u.Z)({}, r == null ? void 0 : r.loading),
                      {},
                      { spinning: X },
                    )
                  : X,
              reload: (function () {
                var ne = (0, oe.Z)(
                  (0, Ee.Z)().mark(function Ze() {
                    return (0, Ee.Z)().wrap(function (ue) {
                      for (;;)
                        switch ((ue.prev = ue.next)) {
                          case 0:
                            return xe(), ue.abrupt('return', ae.run(!1));
                          case 2:
                          case 'end':
                            return ue.stop();
                        }
                    }, Ze);
                  }),
                );
                function se() {
                  return ne.apply(this, arguments);
                }
                return se;
              })(),
              pageInfo: j,
              pollingLoading: F,
              reset: (function () {
                var ne = (0, oe.Z)(
                  (0, Ee.Z)().mark(function Ze() {
                    var Ue, ue, Ne, we, ee, Fe, rt, Pe;
                    return (0, Ee.Z)().wrap(function (ge) {
                      for (;;)
                        switch ((ge.prev = ge.next)) {
                          case 0:
                            (Ue = r || {}),
                              (ue = Ue.pageInfo),
                              (Ne = ue || {}),
                              (we = Ne.defaultCurrent),
                              (ee = we === void 0 ? 1 : we),
                              (Fe = Ne.defaultPageSize),
                              (rt = Fe === void 0 ? 20 : Fe),
                              (Pe = { current: ee, total: 0, pageSize: rt }),
                              N(Pe);
                          case 4:
                          case 'end':
                            return ge.stop();
                        }
                    }, Ze);
                  }),
                );
                function se() {
                  return ne.apply(this, arguments);
                }
                return se;
              })(),
              setPageInfo: (function () {
                var ne = (0, oe.Z)(
                  (0, Ee.Z)().mark(function Ze(Ue) {
                    return (0, Ee.Z)().wrap(function (Ne) {
                      for (;;)
                        switch ((Ne.prev = Ne.next)) {
                          case 0:
                            N((0, u.Z)((0, u.Z)({}, j), Ue));
                          case 1:
                          case 'end':
                            return Ne.stop();
                        }
                    }, Ze);
                  }),
                );
                function se(Ze) {
                  return ne.apply(this, arguments);
                }
                return se;
              })(),
            }
          );
        },
        F0 = O0,
        M0 = function (e) {
          return function (n, r) {
            var a,
              o,
              i = n.fixed,
              s = n.index,
              c = r.fixed,
              d = r.index;
            if (
              (i === 'left' && c !== 'left') ||
              (c === 'right' && i !== 'right')
            )
              return -2;
            if (
              (c === 'left' && i !== 'left') ||
              (i === 'right' && c !== 'right')
            )
              return 2;
            var h = n.key || ''.concat(s),
              p = r.key || ''.concat(d);
            if (
              ((a = e[h]) !== null && a !== void 0 && a.order) ||
              ((o = e[p]) !== null && o !== void 0 && o.order)
            ) {
              var v, y;
              return (
                (((v = e[h]) === null || v === void 0 ? void 0 : v.order) ||
                  0) -
                (((y = e[p]) === null || y === void 0 ? void 0 : y.order) || 0)
              );
            }
            return (n.index || 0) - (r.index || 0);
          };
        },
        B0 = m(21580),
        L0 = function (e) {
          var n = {};
          return (
            Object.keys(e || {}).forEach(function (r) {
              var a;
              (Array.isArray(e[r]) &&
                ((a = e[r]) === null || a === void 0 ? void 0 : a.length) ===
                  0) ||
                (e[r] !== void 0 && (n[r] = e[r]));
            }),
            n
          );
        },
        D0 = m(41816),
        z0 = m(90243),
        K0 = m(11451),
        A0 = m(2300),
        Sl = m(67994),
        H0 = ['children'],
        W0 = ['', null, void 0],
        zo = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return n
            .filter(function (a) {
              return a !== void 0;
            })
            .map(function (a) {
              return typeof a == 'number' ? a.toString() : a;
            })
            .flat(1);
        },
        V0 = function (e) {
          var n = (0, l.useContext)(K0.z),
            r = e.columnProps,
            a = e.prefixName,
            o = e.text,
            i = e.counter,
            s = e.rowData,
            c = e.index,
            d = e.recordKey,
            h = e.subName,
            p = e.proFieldProps,
            v = e.editableUtils,
            y = Ba.A.useFormInstance(),
            g = d || c,
            Z = (0, l.useMemo)(
              function () {
                var X, z;
                return (X =
                  v == null || (z = v.getRealIndex) === null || z === void 0
                    ? void 0
                    : z.call(v, s)) !== null && X !== void 0
                  ? X
                  : c;
              },
              [v, c, s],
            ),
            b = (0, l.useState)(function () {
              var X, z;
              return zo(
                a,
                a ? h : [],
                a ? Z : g,
                (X =
                  (z = r == null ? void 0 : r.key) !== null && z !== void 0
                    ? z
                    : r == null
                    ? void 0
                    : r.dataIndex) !== null && X !== void 0
                  ? X
                  : c,
              );
            }),
            C = (0, de.Z)(b, 2),
            R = C[0],
            L = C[1],
            O = (0, l.useMemo)(
              function () {
                return R.slice(0, -1);
              },
              [R],
            );
          (0, l.useEffect)(
            function () {
              var X,
                z,
                M = zo(
                  a,
                  a ? h : [],
                  a ? Z : g,
                  (X =
                    (z = r == null ? void 0 : r.key) !== null && z !== void 0
                      ? z
                      : r == null
                      ? void 0
                      : r.dataIndex) !== null && X !== void 0
                    ? X
                    : c,
                );
              M.join('-') !== R.join('-') && L(M);
            },
            [
              r == null ? void 0 : r.dataIndex,
              r == null ? void 0 : r.key,
              c,
              d,
              a,
              g,
              h,
              R,
              Z,
            ],
          );
          var K = (0, l.useMemo)(
              function () {
                return [
                  y,
                  (0, u.Z)(
                    (0, u.Z)({}, r),
                    {},
                    { rowKey: O, rowIndex: c, isEditable: !0 },
                  ),
                ];
              },
              [r, y, c, O],
            ),
            q = (0, l.useCallback)(
              function (X) {
                var z = X.children,
                  M = (0, Ie.Z)(X, H0);
                return (0, x.jsx)(
                  A0.U,
                  (0, u.Z)(
                    (0, u.Z)(
                      {
                        popoverProps: {
                          getPopupContainer:
                            n.getPopupContainer ||
                            function () {
                              return i.rootDomRef.current || document.body;
                            },
                        },
                        errorType: 'popover',
                        name: R,
                      },
                      M,
                    ),
                    {},
                    { children: z },
                  ),
                  g,
                );
              },
              [g, R],
            ),
            T = (0, l.useCallback)(
              function () {
                var X,
                  z,
                  M = (0, u.Z)(
                    {},
                    Sl.w.apply(
                      void 0,
                      [r == null ? void 0 : r.formItemProps].concat(
                        (0, He.Z)(K),
                      ),
                    ),
                  );
                (M.messageVariables = (0, u.Z)(
                  {
                    label: (r == null ? void 0 : r.title) || '\u6B64\u9879',
                    type: (r == null ? void 0 : r.valueType) || '\u6587\u672C',
                  },
                  M == null ? void 0 : M.messageVariables,
                )),
                  (M.initialValue =
                    (X =
                      (z = a ? null : o) !== null && z !== void 0
                        ? z
                        : M == null
                        ? void 0
                        : M.initialValue) !== null && X !== void 0
                      ? X
                      : r == null
                      ? void 0
                      : r.initialValue);
                var $ = (0, x.jsx)(
                  La.Z,
                  (0, u.Z)(
                    {
                      cacheForSwr: !0,
                      name: R,
                      proFormFieldKey: g,
                      ignoreFormItem: !0,
                      fieldProps: Sl.w.apply(
                        void 0,
                        [r == null ? void 0 : r.fieldProps].concat(
                          (0, He.Z)(K),
                        ),
                      ),
                    },
                    p,
                  ),
                  R.join('-'),
                );
                return r != null &&
                  r.renderFormItem &&
                  (($ = r.renderFormItem(
                    (0, u.Z)(
                      (0, u.Z)({}, r),
                      {},
                      { index: c, isEditable: !0, type: 'table' },
                    ),
                    {
                      defaultRender: function () {
                        return (0, x.jsx)(x.Fragment, { children: $ });
                      },
                      type: 'form',
                      recordKey: d,
                      record: (0, u.Z)(
                        (0, u.Z)({}, s),
                        y == null ? void 0 : y.getFieldValue([g]),
                      ),
                      isEditable: !0,
                    },
                    y,
                    e.editableUtils,
                  )),
                  r.ignoreFormItem)
                  ? (0, x.jsx)(x.Fragment, { children: $ })
                  : (0, x.jsx)(
                      q,
                      (0, u.Z)((0, u.Z)({}, M), {}, { children: $ }),
                      R.join('-'),
                    );
              },
              [r, K, a, o, g, R, p, q, c, d, s, y, e.editableUtils],
            );
          return R.length === 0
            ? null
            : typeof (r == null ? void 0 : r.renderFormItem) == 'function' ||
              typeof (r == null ? void 0 : r.fieldProps) == 'function' ||
              typeof (r == null ? void 0 : r.formItemProps) == 'function'
            ? (0, x.jsx)(Fa.Z.Item, {
                noStyle: !0,
                shouldUpdate: function (z, M) {
                  if (z === M) return !1;
                  var $ = [O].flat(1);
                  try {
                    return (
                      JSON.stringify((0, rr.Z)(z, $)) !==
                      JSON.stringify((0, rr.Z)(M, $))
                    );
                  } catch (j) {
                    return !0;
                  }
                },
                children: function () {
                  return T();
                },
              })
            : T();
        };
      function Ko(t) {
        var e,
          n,
          r = t.text,
          a = t.valueType,
          o = t.rowData,
          i = t.columnProps,
          s = t.index;
        if (
          (!a || ['textarea', 'text'].includes(a.toString())) &&
          !(i != null && i.valueEnum) &&
          t.mode === 'read'
        )
          return W0.includes(r) ? t.columnEmptyText : r;
        if (typeof a == 'function' && o)
          return Ko(
            (0, u.Z)(
              (0, u.Z)({}, t),
              {},
              { valueType: a(o, t.type) || 'text' },
            ),
          );
        var c =
            (i == null ? void 0 : i.key) ||
            (i == null || (e = i.dataIndex) === null || e === void 0
              ? void 0
              : e.toString()),
          d =
            i != null && i.dependencies
              ? [
                  t.prefixName,
                  t.prefixName
                    ? s == null
                      ? void 0
                      : s.toString()
                    : (n = t.recordKey) === null || n === void 0
                    ? void 0
                    : n.toString(),
                  i == null ? void 0 : i.dependencies,
                ]
                  .filter(Boolean)
                  .flat(1)
              : [],
          h = {
            valueEnum: (0, Er.h)(i == null ? void 0 : i.valueEnum, o),
            request: i == null ? void 0 : i.request,
            dependencies: i != null && i.dependencies ? [d] : void 0,
            originDependencies:
              i != null && i.dependencies
                ? [i == null ? void 0 : i.dependencies]
                : void 0,
            params: (0, Er.h)(i == null ? void 0 : i.params, o, i),
            readonly: i == null ? void 0 : i.readonly,
            text: a === 'index' || a === 'indexBorder' ? t.index : r,
            mode: t.mode,
            renderFormItem: void 0,
            valueType: a,
            record: o,
            proFieldProps: {
              emptyText: t.columnEmptyText,
              proFieldKey: c ? 'table-field-'.concat(c) : void 0,
            },
          };
        return t.mode !== 'edit'
          ? (0, x.jsx)(
              La.Z,
              (0, u.Z)(
                {
                  mode: 'read',
                  ignoreFormItem: !0,
                  fieldProps: (0, Sl.w)(
                    i == null ? void 0 : i.fieldProps,
                    null,
                    i,
                  ),
                },
                h,
              ),
            )
          : (0, x.jsx)(
              V0,
              (0, u.Z)((0, u.Z)({}, t), {}, { proFieldProps: h }),
              t.recordKey,
            );
      }
      var k0 = Ko,
        U0 = function (e) {
          var n,
            r = e.title,
            a =
              typeof (e == null ? void 0 : e.ellipsis) == 'boolean'
                ? e == null
                  ? void 0
                  : e.ellipsis
                : e == null || (n = e.ellipsis) === null || n === void 0
                ? void 0
                : n.showTitle;
          return r && typeof r == 'function'
            ? r(
                e,
                'table',
                (0, x.jsx)(Bt.G, { label: null, tooltip: e.tooltip || e.tip }),
              )
            : (0, x.jsx)(Bt.G, {
                label: r,
                tooltip: e.tooltip || e.tip,
                ellipsis: a,
              });
        };
      function X0(t, e, n, r) {
        return typeof r == 'boolean'
          ? r === !1
          : (r == null ? void 0 : r(t, e, n)) === !1;
      }
      var G0 = function (e, n, r) {
        var a = Array.isArray(r) ? (0, rr.Z)(n, r) : n[r],
          o = String(a);
        return String(o) === String(e);
      };
      function Y0(t) {
        var e = t.columnProps,
          n = t.text,
          r = t.rowData,
          a = t.index,
          o = t.columnEmptyText,
          i = t.counter,
          s = t.type,
          c = t.subName,
          d = t.marginSM,
          h = t.editableUtils,
          p = i.action,
          v = i.prefixName,
          y = h.isEditable((0, u.Z)((0, u.Z)({}, r), {}, { index: a })),
          g = y.isEditable,
          Z = y.recordKey,
          b = e.renderText,
          C =
            b === void 0
              ? function (X) {
                  return X;
                }
              : b,
          R = C(n, r, a, p),
          L =
            g && !X0(n, r, a, e == null ? void 0 : e.editable)
              ? 'edit'
              : 'read',
          O = k0({
            text: R,
            valueType: e.valueType || 'text',
            index: a,
            rowData: r,
            subName: c,
            columnProps: (0, u.Z)((0, u.Z)({}, e), {}, { entry: r, entity: r }),
            counter: i,
            columnEmptyText: o,
            type: s,
            recordKey: Z,
            mode: L,
            prefixName: v,
            editableUtils: h,
          }),
          K = L === 'edit' ? O : (0, D0.X)(O, e, R);
        if (L === 'edit')
          return e.valueType === 'option'
            ? (0, x.jsx)('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: d,
                  justifyContent:
                    e.align === 'center' ? 'center' : 'flex-start',
                },
                children: h.actionRender(
                  (0, u.Z)((0, u.Z)({}, r), {}, { index: e.index || a }),
                ),
              })
            : K;
        if (!e.render) {
          var q =
            l.isValidElement(K) || ['string', 'number'].includes((0, it.Z)(K));
          return !(0, z0.k)(K) && q ? K : null;
        }
        var T = e.render(
          K,
          r,
          a,
          (0, u.Z)((0, u.Z)({}, p), h),
          (0, u.Z)((0, u.Z)({}, e), {}, { isEditable: g, type: 'table' }),
        );
        return Vd(T)
          ? T
          : T && e.valueType === 'option' && Array.isArray(T)
          ? (0, x.jsx)('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8,
              },
              children: T,
            })
          : T;
      }
      function Ao(t, e) {
        var n,
          r = t.columns,
          a = t.counter,
          o = t.columnEmptyText,
          i = t.type,
          s = t.editableUtils,
          c = t.marginSM,
          d = t.rowKey,
          h = d === void 0 ? 'id' : d,
          p = t.childrenColumnName,
          v = p === void 0 ? 'children' : p,
          y = new Map();
        return r == null ||
          (n = r.map(function (g, Z) {
            if (g === Wr.EXPAND_COLUMN || g === Wr.SELECTION_COLUMN) return g;
            var b = g,
              C = b.key,
              R = b.dataIndex,
              L = b.valueEnum,
              O = b.valueType,
              K = O === void 0 ? 'text' : O,
              q = b.children,
              T = b.onFilter,
              X = b.filters,
              z = X === void 0 ? [] : X,
              M = la(
                C || (R == null ? void 0 : R.toString()),
                [e == null ? void 0 : e.key, Z].filter(Boolean).join('-'),
              ),
              $ = !L && !K && !q;
            if ($) return (0, u.Z)({ index: Z }, g);
            var j = g === Wr.EXPAND_COLUMN || g === Wr.SELECTION_COLUMN;
            if (j)
              return {
                index: Z,
                isExtraColumns: !0,
                hideInSearch: !0,
                hideInTable: !1,
                hideInForm: !0,
                hideInSetting: !0,
                extraColumn: g,
              };
            var W = a.columnsMap[M] || { fixed: g.fixed },
              N = function () {
                return T === !0
                  ? function (Y, H) {
                      return G0(Y, H, R);
                    }
                  : jo(T);
              },
              E = h,
              D = (0, u.Z)(
                (0, u.Z)({ index: Z, key: M }, g),
                {},
                {
                  title: U0(g),
                  valueEnum: L,
                  filters:
                    z === !0
                      ? (0, B0.NA)((0, Er.h)(L, void 0)).filter(function (F) {
                          return F && F.value !== 'all';
                        })
                      : z,
                  onFilter: N(),
                  fixed: W.fixed,
                  width: g.width || (g.fixed ? 200 : void 0),
                  children: g.children
                    ? Ao(
                        (0, u.Z)(
                          (0, u.Z)({}, t),
                          {},
                          { columns: (g == null ? void 0 : g.children) || [] },
                        ),
                        (0, u.Z)((0, u.Z)({}, g), {}, { key: M }),
                      )
                    : void 0,
                  render: function (Y, H, V) {
                    typeof h == 'function' && (E = h(H, V));
                    var Q;
                    if (
                      (0, it.Z)(H) === 'object' &&
                      H !== null &&
                      Reflect.has(H, E)
                    ) {
                      var ie;
                      Q = H[E];
                      var pe = y.get(Q) || [];
                      (ie = H[v]) === null ||
                        ie === void 0 ||
                        ie.forEach(function (ae) {
                          var xe = ae[E];
                          y.has(xe) || y.set(xe, pe.concat([V, v]));
                        });
                    }
                    var Ce = {
                      columnProps: g,
                      text: Y,
                      rowData: H,
                      index: V,
                      columnEmptyText: o,
                      counter: a,
                      type: i,
                      marginSM: c,
                      subName: y.get(Q),
                      editableUtils: s,
                    };
                    return Y0(Ce);
                  },
                },
              );
            return L0(D);
          })) === null ||
          n === void 0
          ? void 0
          : n.filter(function (g) {
              return !g.hideInTable;
            });
      }
      var J0 = [
          'rowKey',
          'tableClassName',
          'defaultClassName',
          'action',
          'tableColumn',
          'type',
          'pagination',
          'rowSelection',
          'size',
          'defaultSize',
          'tableStyle',
          'toolbarDom',
          'hideToolbar',
          'searchNode',
          'style',
          'cardProps',
          'alertDom',
          'name',
          'onSortChange',
          'onFilterChange',
          'options',
          'isLightFilter',
          'className',
          'cardBordered',
          'editableUtils',
          'getRowKey',
        ],
        Q0 = [
          'cardBordered',
          'request',
          'className',
          'params',
          'defaultData',
          'headerTitle',
          'postData',
          'ghost',
          'pagination',
          'actionRef',
          'columns',
          'toolBarRender',
          'optionsRender',
          'onLoad',
          'onRequestError',
          'style',
          'cardProps',
          'tableStyle',
          'tableClassName',
          'columnsStateMap',
          'onColumnsStateChange',
          'options',
          'search',
          'name',
          'onLoadingChange',
          'rowSelection',
          'beforeSearchSubmit',
          'tableAlertRender',
          'defaultClassName',
          'formRef',
          'type',
          'columnEmptyText',
          'toolbar',
          'rowKey',
          'manualRequest',
          'polling',
          'tooltip',
          'revalidateOnFocus',
          'searchFormRender',
        ];
      function q0(t) {
        var e = t.rowKey,
          n = t.tableClassName,
          r = t.defaultClassName,
          a = t.action,
          o = t.tableColumn,
          i = t.type,
          s = t.pagination,
          c = t.rowSelection,
          d = t.size,
          h = t.defaultSize,
          p = t.tableStyle,
          v = t.toolbarDom,
          y = t.hideToolbar,
          g = t.searchNode,
          Z = t.style,
          b = t.cardProps,
          C = t.alertDom,
          R = t.name,
          L = t.onSortChange,
          O = t.onFilterChange,
          K = t.options,
          q = t.isLightFilter,
          T = t.className,
          X = t.cardBordered,
          z = t.editableUtils,
          M = t.getRowKey,
          $ = (0, Ie.Z)(t, J0),
          j = (0, l.useContext)(Vr),
          W = (0, l.useMemo)(
            function () {
              var ae = function xe(ne) {
                return ne
                  .map(function (se) {
                    var Ze = la(se.key, se.index),
                      Ue = j.columnsMap[Ze];
                    return Ue && Ue.show === !1
                      ? !1
                      : se.children
                      ? (0, u.Z)(
                          (0, u.Z)({}, se),
                          {},
                          { children: xe(se.children) },
                        )
                      : se;
                  })
                  .filter(Boolean);
              };
              return ae(o);
            },
            [j.columnsMap, o],
          ),
          N = (0, l.useMemo)(
            function () {
              var ae = [],
                xe = function ne(se) {
                  for (var Ze = 0; Ze < se.length; Ze++) {
                    var Ue = se[Ze];
                    Ue.children ? ne(Ue.children) : ae.push(Ue);
                  }
                };
              return (
                xe(W),
                ae == null
                  ? void 0
                  : ae.every(function (ne) {
                      return (
                        (!!ne.filters && !!ne.onFilter) ||
                        (ne.filters === void 0 && ne.onFilter === void 0)
                      );
                    })
              );
            },
            [W],
          ),
          E = function (xe) {
            var ne = z.newLineRecord || {},
              se = ne.options,
              Ze = ne.defaultValue,
              Ue = (se == null ? void 0 : se.position) === 'top';
            if (se != null && se.parentKey) {
              var ue,
                Ne,
                we = {
                  data: xe,
                  getRowKey: M,
                  row: (0, u.Z)(
                    (0, u.Z)({}, Ze),
                    {},
                    {
                      map_row_parentKey:
                        (ue = (0, k.sN)(se.parentKey)) === null || ue === void 0
                          ? void 0
                          : ue.toString(),
                    },
                  ),
                  key: se == null ? void 0 : se.recordKey,
                  childrenColumnName:
                    ((Ne = t.expandable) === null || Ne === void 0
                      ? void 0
                      : Ne.childrenColumnName) || 'children',
                };
              return (0, k.cx)(we, Ue ? 'top' : 'update');
            }
            if (Ue) return [Ze].concat((0, He.Z)(a.dataSource));
            if (
              s &&
              s !== null &&
              s !== void 0 &&
              s.current &&
              s !== null &&
              s !== void 0 &&
              s.pageSize
            ) {
              var ee = (0, He.Z)(a.dataSource);
              return (s == null ? void 0 : s.pageSize) > ee.length
                ? (ee.push(Ze), ee)
                : (ee.splice(
                    (s == null ? void 0 : s.current) *
                      (s == null ? void 0 : s.pageSize) -
                      1,
                    0,
                    Ze,
                  ),
                  ee);
            }
            return [].concat((0, He.Z)(a.dataSource), [Ze]);
          },
          D = function () {
            return (0, u.Z)(
              (0, u.Z)({}, $),
              {},
              {
                size: d,
                rowSelection: c === !1 ? void 0 : c,
                className: n,
                style: p,
                columns: W.map(function (xe) {
                  return xe.isExtraColumns ? xe.extraColumn : xe;
                }),
                loading: a.loading,
                dataSource: z.newLineRecord ? E(a.dataSource) : a.dataSource,
                pagination: s,
                onChange: function (ne, se, Ze, Ue) {
                  var ue;
                  if (
                    ((ue = $.onChange) === null ||
                      ue === void 0 ||
                      ue.call($, ne, se, Ze, Ue),
                    N || O((0, ye.Y)(se)),
                    Array.isArray(Ze))
                  ) {
                    var Ne = Ze.reduce(function (rt, Pe) {
                      return (0,
                      u.Z)((0, u.Z)({}, rt), {}, (0, S.Z)({}, ''.concat(Pe.field), Pe.order));
                    }, {});
                    L((0, ye.Y)(Ne));
                  } else {
                    var we,
                      ee =
                        (we = Ze.column) === null || we === void 0
                          ? void 0
                          : we.sorter,
                      Fe = (ee == null ? void 0 : ee.toString()) === ee;
                    L(
                      (0, ye.Y)(
                        (0, S.Z)({}, ''.concat(Fe ? ee : Ze.field), Ze.order),
                      ),
                    );
                  }
                },
              },
            );
          },
          F = (0, l.useMemo)(function () {
            return t.search === !1 && !t.headerTitle && t.toolBarRender === !1;
          }, []),
          Y = (0, x.jsx)(Lr._p.Provider, {
            value: { grid: !1, colProps: void 0, rowProps: void 0 },
            children: (0, x.jsx)(
              Wr,
              (0, u.Z)((0, u.Z)({}, D()), {}, { rowKey: e }),
            ),
          }),
          H = t.tableViewRender
            ? t.tableViewRender(
                (0, u.Z)(
                  (0, u.Z)({}, D()),
                  {},
                  { rowSelection: c !== !1 ? c : void 0 },
                ),
                Y,
              )
            : Y,
          V = (0, l.useMemo)(
            function () {
              if (t.editable && !t.name) {
                var ae, xe, ne;
                return (0, x.jsxs)(x.Fragment, {
                  children: [
                    v,
                    C,
                    (0, l.createElement)(
                      Dr.ZP,
                      (0, u.Z)(
                        (0, u.Z)(
                          {},
                          (ae = t.editable) === null || ae === void 0
                            ? void 0
                            : ae.formProps,
                        ),
                        {},
                        {
                          formRef:
                            (xe = t.editable) === null ||
                            xe === void 0 ||
                            (xe = xe.formProps) === null ||
                            xe === void 0
                              ? void 0
                              : xe.formRef,
                          component: !1,
                          form:
                            (ne = t.editable) === null || ne === void 0
                              ? void 0
                              : ne.form,
                          onValuesChange: z.onValuesChange,
                          key: 'table',
                          submitter: !1,
                          omitNil: !1,
                          dateFormatter: t.dateFormatter,
                        },
                      ),
                      H,
                    ),
                  ],
                });
              }
              return (0, x.jsxs)(x.Fragment, { children: [v, C, H] });
            },
            [C, t.loading, !!t.editable, H, v],
          ),
          Q = (0, l.useMemo)(
            function () {
              return b === !1 || F === !0 || t.name
                ? {}
                : y
                ? { padding: 0 }
                : v
                ? { paddingBlockStart: 0 }
                : v && s === !1
                ? { paddingBlockStart: 0 }
                : { padding: 0 };
            },
            [F, s, t.name, b, v, y],
          ),
          ie =
            b === !1 || F === !0 || t.name
              ? V
              : (0, x.jsx)(
                  Br,
                  (0, u.Z)(
                    (0, u.Z)(
                      {
                        ghost: t.ghost,
                        bordered: Zo('table', X),
                        bodyStyle: Q,
                      },
                      b,
                    ),
                    {},
                    { children: V },
                  ),
                ),
          pe = function () {
            return t.tableRender
              ? t.tableRender(t, ie, {
                  toolbar: v || void 0,
                  alert: C || void 0,
                  table: H || void 0,
                })
              : ie;
          },
          Ce = (0, x.jsxs)('div', {
            className: fe()(
              T,
              (0, S.Z)({}, ''.concat(r, '-polling'), a.pollingLoading),
            ),
            style: Z,
            ref: j.rootDomRef,
            children: [
              q ? null : g,
              i !== 'form' &&
                t.tableExtraRender &&
                (0, x.jsx)('div', {
                  className: fe()(T, ''.concat(r, '-extra')),
                  children: t.tableExtraRender(t, a.dataSource || []),
                }),
              i !== 'form' && pe(),
            ],
          });
        return !K || !(K != null && K.fullScreen)
          ? Ce
          : (0, x.jsx)($e.ZP, {
              getPopupContainer: function () {
                return j.rootDomRef.current || document.body;
              },
              children: Ce,
            });
      }
      var _0 = {},
        ev = function (e) {
          var n,
            r = e.cardBordered,
            a = e.request,
            o = e.className,
            i = e.params,
            s = i === void 0 ? _0 : i,
            c = e.defaultData,
            d = e.headerTitle,
            h = e.postData,
            p = e.ghost,
            v = e.pagination,
            y = e.actionRef,
            g = e.columns,
            Z = g === void 0 ? [] : g,
            b = e.toolBarRender,
            C = e.optionsRender,
            R = e.onLoad,
            L = e.onRequestError,
            O = e.style,
            K = e.cardProps,
            q = e.tableStyle,
            T = e.tableClassName,
            X = e.columnsStateMap,
            z = e.onColumnsStateChange,
            M = e.options,
            $ = e.search,
            j = e.name,
            W = e.onLoadingChange,
            N = e.rowSelection,
            E = N === void 0 ? !1 : N,
            D = e.beforeSearchSubmit,
            F = e.tableAlertRender,
            Y = e.defaultClassName,
            H = e.formRef,
            V = e.type,
            Q = V === void 0 ? 'table' : V,
            ie = e.columnEmptyText,
            pe = ie === void 0 ? '-' : ie,
            Ce = e.toolbar,
            ae = e.rowKey,
            xe = e.manualRequest,
            ne = e.polling,
            se = e.tooltip,
            Ze = e.revalidateOnFocus,
            Ue = Ze === void 0 ? !1 : Ze,
            ue = e.searchFormRender,
            Ne = (0, Ie.Z)(e, Q0),
            we = $0(e.defaultClassName),
            ee = we.wrapSSR,
            Fe = we.hashId,
            rt = fe()(Y, o, Fe),
            Pe = (0, l.useRef)(),
            _ = (0, l.useRef)(),
            ge = H || _;
          (0, l.useImperativeHandle)(y, function () {
            return Pe.current;
          });
          var Ae = (0, J.Z)(
              E
                ? (E == null ? void 0 : E.defaultSelectedRowKeys) || []
                : void 0,
              { value: E ? E.selectedRowKeys : void 0 },
            ),
            je = (0, de.Z)(Ae, 2),
            dt = je[0],
            Re = je[1],
            xt = (0, J.Z)(function () {
              if (!(xe || $ !== !1)) return {};
            }),
            on = (0, de.Z)(xt, 2),
            yn = on[0],
            bn = on[1],
            Ln = (0, J.Z)({}),
            lr = (0, de.Z)(Ln, 2),
            _e = lr[0],
            Wt = lr[1],
            Qt = (0, J.Z)({}),
            Sn = (0, de.Z)(Qt, 2),
            sn = Sn[0],
            qt = Sn[1];
          (0, l.useEffect)(function () {
            var Le = Ud(Z),
              le = Le.sort,
              Oe = Le.filter;
            Wt(Oe), qt(le);
          }, []);
          var un = (0, gn.YB)(),
            tn =
              (0, it.Z)(v) === 'object'
                ? v
                : {
                    defaultCurrent: 1,
                    defaultPageSize: 20,
                    pageSize: 20,
                    current: 1,
                  },
            Xe = (0, l.useContext)(Vr),
            Ot = (0, l.useMemo)(
              function () {
                if (a)
                  return (function () {
                    var Le = (0, oe.Z)(
                      (0, Ee.Z)().mark(function le(Oe) {
                        var mt, nn;
                        return (0, Ee.Z)().wrap(function (vn) {
                          for (;;)
                            switch ((vn.prev = vn.next)) {
                              case 0:
                                return (
                                  (mt = (0, u.Z)(
                                    (0, u.Z)((0, u.Z)({}, Oe || {}), yn),
                                    s,
                                  )),
                                  delete mt._timestamp,
                                  (vn.next = 4),
                                  a(mt, sn, _e)
                                );
                              case 4:
                                return (nn = vn.sent), vn.abrupt('return', nn);
                              case 6:
                              case 'end':
                                return vn.stop();
                            }
                        }, le);
                      }),
                    );
                    return function (le) {
                      return Le.apply(this, arguments);
                    };
                  })();
              },
              [yn, s, _e, sn, a],
            ),
            ct = F0(Ot, c, {
              pageInfo: v === !1 ? !1 : tn,
              loading: e.loading,
              dataSource: e.dataSource,
              onDataSourceChange: e.onDataSourceChange,
              onLoad: R,
              onLoadingChange: W,
              onRequestError: L,
              postData: h,
              revalidateOnFocus: Ue,
              manual: yn === void 0,
              polling: ne,
              effects: [
                (0, tt.ZP)(s),
                (0, tt.ZP)(yn),
                (0, tt.ZP)(_e),
                (0, tt.ZP)(sn),
              ],
              debounceTime: e.debounceTime,
              onPageInfoChange: function (le) {
                var Oe, mt;
                !v ||
                  !Ot ||
                  (v == null ||
                    (Oe = v.onChange) === null ||
                    Oe === void 0 ||
                    Oe.call(v, le.current, le.pageSize),
                  v == null ||
                    (mt = v.onShowSizeChange) === null ||
                    mt === void 0 ||
                    mt.call(v, le.current, le.pageSize));
              },
            });
          (0, l.useEffect)(function () {
            var Le;
            if (
              !(
                e.manualRequest ||
                !e.request ||
                !Ue ||
                ((Le = e.form) !== null && Le !== void 0 && Le.ignoreRules)
              )
            ) {
              var le = function () {
                document.visibilityState === 'visible' && ct.reload();
              };
              return (
                document.addEventListener('visibilitychange', le),
                function () {
                  return document.removeEventListener('visibilitychange', le);
                }
              );
            }
          }, []);
          var Mn = l.useRef(new Map()),
            Pn = l.useMemo(
              function () {
                return typeof ae == 'function'
                  ? ae
                  : function (Le, le) {
                      var Oe;
                      return le === -1
                        ? Le == null
                          ? void 0
                          : Le[ae]
                        : e.name
                        ? le == null
                          ? void 0
                          : le.toString()
                        : (Oe = Le == null ? void 0 : Le[ae]) !== null &&
                          Oe !== void 0
                        ? Oe
                        : le == null
                        ? void 0
                        : le.toString();
                    };
              },
              [e.name, ae],
            );
          (0, l.useMemo)(
            function () {
              var Le;
              if ((Le = ct.dataSource) !== null && Le !== void 0 && Le.length) {
                var le = ct.dataSource.map(function (Oe) {
                  var mt = Pn(Oe, -1);
                  return Mn.current.set(mt, Oe), mt;
                });
                return le;
              }
              return [];
            },
            [ct.dataSource, Pn],
          );
          var Xt = (0, l.useMemo)(
            function () {
              var Le = v === !1 ? !1 : (0, u.Z)({}, v),
                le = (0, u.Z)(
                  (0, u.Z)({}, ct.pageInfo),
                  {},
                  {
                    setPageInfo: function (mt) {
                      var nn = mt.pageSize,
                        mn = mt.current,
                        vn = ct.pageInfo;
                      if (nn === vn.pageSize || vn.current === 1) {
                        ct.setPageInfo({ pageSize: nn, current: mn });
                        return;
                      }
                      a && ct.setDataSource([]),
                        ct.setPageInfo({
                          pageSize: nn,
                          current: Q === 'list' ? mn : 1,
                        });
                    },
                  },
                );
              return (
                a && Le && (delete Le.onChange, delete Le.onShowSizeChange),
                Ad(Le, le, un)
              );
            },
            [v, ct, un],
          );
          (0, Je.KW)(
            function () {
              var Le;
              e.request &&
                !Gc(s) &&
                ct.dataSource &&
                !Kd(ct.dataSource, c) &&
                (ct == null || (Le = ct.pageInfo) === null || Le === void 0
                  ? void 0
                  : Le.current) !== 1 &&
                ct.setPageInfo({ current: 1 });
            },
            [s],
          ),
            Xe.setPrefixName(e.name);
          var wn = (0, l.useCallback)(
            function () {
              E && E.onChange && E.onChange([], [], { type: 'none' }), Re([]);
            },
            [E, Re],
          );
          Xe.propsRef.current = e;
          var Dn = (0, k.CB)(
              (0, u.Z)(
                (0, u.Z)({}, e.editable),
                {},
                {
                  tableName: e.name,
                  getRowKey: Pn,
                  childrenColumnName:
                    ((n = e.expandable) === null || n === void 0
                      ? void 0
                      : n.childrenColumnName) || 'children',
                  dataSource: ct.dataSource || [],
                  setDataSource: function (le) {
                    var Oe, mt;
                    (Oe = e.editable) === null ||
                      Oe === void 0 ||
                      (mt = Oe.onValuesChange) === null ||
                      mt === void 0 ||
                      mt.call(Oe, void 0, le),
                      ct.setDataSource(le);
                  },
                },
              ),
            ),
            or = Gt.Ow === null || Gt.Ow === void 0 ? void 0 : Gt.Ow.useToken(),
            kr = or.token;
          Hd(Pe, ct, {
            fullScreen: function () {
              var le;
              if (
                !(
                  !(
                    (le = Xe.rootDomRef) !== null &&
                    le !== void 0 &&
                    le.current
                  ) || !document.fullscreenEnabled
                )
              )
                if (document.fullscreenElement) document.exitFullscreen();
                else {
                  var Oe;
                  (Oe = Xe.rootDomRef) === null ||
                    Oe === void 0 ||
                    Oe.current.requestFullscreen();
                }
            },
            onCleanSelected: function () {
              wn();
            },
            resetAll: function () {
              var le;
              wn(),
                Wt({}),
                qt({}),
                Xe.setKeyWords(void 0),
                ct.setPageInfo({ current: 1 }),
                ge == null ||
                  (le = ge.current) === null ||
                  le === void 0 ||
                  le.resetFields(),
                bn({});
            },
            editableUtils: Dn,
          }),
            Xe.setAction(Pe.current);
          var Jn = (0, l.useMemo)(
            function () {
              var Le;
              return Ao({
                columns: Z,
                counter: Xe,
                columnEmptyText: pe,
                type: Q,
                marginSM: kr.marginSM,
                editableUtils: Dn,
                rowKey: ae,
                childrenColumnName:
                  (Le = e.expandable) === null || Le === void 0
                    ? void 0
                    : Le.childrenColumnName,
              }).sort(M0(Xe.columnsMap));
            },
            [
              Z,
              Xe == null ? void 0 : Xe.sortKeyColumns,
              Xe == null ? void 0 : Xe.columnsMap,
              pe,
              Q,
              Dn.editableKeys && Dn.editableKeys.join(','),
            ],
          );
          (0, Je.Au)(
            function () {
              if (Jn && Jn.length > 0) {
                var Le = Jn.map(function (le) {
                  return la(le.key, le.index);
                });
                Xe.setSortKeyColumns(Le);
              }
            },
            [Jn],
            ['render', 'renderFormItem'],
            100,
          ),
            (0, Je.KW)(
              function () {
                var Le = ct.pageInfo,
                  le = v || {},
                  Oe = le.current,
                  mt = Oe === void 0 ? (Le == null ? void 0 : Le.current) : Oe,
                  nn = le.pageSize,
                  mn = nn === void 0 ? (Le == null ? void 0 : Le.pageSize) : nn;
                v &&
                  (mt || mn) &&
                  (mn !== (Le == null ? void 0 : Le.pageSize) ||
                    mt !== (Le == null ? void 0 : Le.current)) &&
                  ct.setPageInfo({
                    pageSize: mn || Le.pageSize,
                    current: mt || Le.current,
                  });
              },
              [v && v.pageSize, v && v.current],
            );
          var Vn = (0, u.Z)(
              (0, u.Z)({ selectedRowKeys: dt }, E),
              {},
              {
                onChange: function (le, Oe, mt) {
                  E && E.onChange && E.onChange(le, Oe, mt), Re(le);
                },
              },
            ),
            kn = $ !== !1 && ($ == null ? void 0 : $.filterType) === 'light',
            ir = (0, l.useCallback)(
              function (Le) {
                if (M && M.search) {
                  var le,
                    Oe,
                    mt = M.search === !0 ? {} : M.search,
                    nn = mt.name,
                    mn = nn === void 0 ? 'keyword' : nn,
                    vn =
                      (le = M.search) === null ||
                      le === void 0 ||
                      (Oe = le.onSearch) === null ||
                      Oe === void 0
                        ? void 0
                        : Oe.call(le, Xe.keyWords);
                  if (vn !== !1) {
                    bn(
                      (0, u.Z)(
                        (0, u.Z)({}, Le),
                        {},
                        (0, S.Z)({}, mn, Xe.keyWords),
                      ),
                    );
                    return;
                  }
                }
                bn(Le);
              },
              [Xe.keyWords, M, bn],
            ),
            Ir = (0, l.useMemo)(
              function () {
                if ((0, it.Z)(ct.loading) === 'object') {
                  var Le;
                  return (
                    ((Le = ct.loading) === null || Le === void 0
                      ? void 0
                      : Le.spinning) || !1
                  );
                }
                return ct.loading;
              },
              [ct.loading],
            ),
            br = (0, l.useMemo)(
              function () {
                var Le =
                  $ === !1 && Q !== 'form'
                    ? null
                    : (0, x.jsx)(hf, {
                        pagination: Xt,
                        beforeSearchSubmit: D,
                        action: Pe,
                        columns: Z,
                        onFormSearchSubmit: function (Oe) {
                          ir(Oe);
                        },
                        ghost: p,
                        onReset: e.onReset,
                        onSubmit: e.onSubmit,
                        loading: !!Ir,
                        manualRequest: xe,
                        search: $,
                        form: e.form,
                        formRef: ge,
                        type: e.type || 'table',
                        cardBordered: e.cardBordered,
                        dateFormatter: e.dateFormatter,
                      });
                return ue && Le
                  ? (0, x.jsx)(x.Fragment, { children: ue(e, Le) })
                  : Le;
              },
              [D, ge, p, Ir, xe, ir, Xt, e, Z, $, ue, Q],
            ),
            dr = (0, l.useMemo)(
              function () {
                return dt == null
                  ? void 0
                  : dt.map(function (Le) {
                      var le;
                      return (le = Mn.current) === null || le === void 0
                        ? void 0
                        : le.get(Le);
                    });
              },
              [ct.dataSource, dt],
            ),
            ia = (0, l.useMemo)(
              function () {
                return M === !1 && !d && !b && !Ce && !kn;
              },
              [M, d, b, Ce, kn],
            ),
            ha =
              b === !1
                ? null
                : (0, x.jsx)(E0, {
                    headerTitle: d,
                    hideToolbar: ia,
                    selectedRows: dr,
                    selectedRowKeys: dt,
                    tableColumn: Jn,
                    tooltip: se,
                    toolbar: Ce,
                    onFormSearchSubmit: function (le) {
                      bn((0, u.Z)((0, u.Z)({}, yn), le));
                    },
                    searchNode: kn ? br : null,
                    options: M,
                    optionsRender: C,
                    actionRef: Pe,
                    toolBarRender: b,
                  }),
            sa =
              E !== !1
                ? (0, x.jsx)(_d, {
                    selectedRowKeys: dt,
                    selectedRows: dr,
                    onCleanSelected: wn,
                    alertOptionRender: Ne.tableAlertOptionRender,
                    alertInfoRender: F,
                    alwaysShowAlert: E == null ? void 0 : E.alwaysShowAlert,
                  })
                : null;
          return ee(
            (0, x.jsx)(
              q0,
              (0, u.Z)(
                (0, u.Z)({}, e),
                {},
                {
                  name: j,
                  defaultClassName: Y,
                  size: Xe.tableSize,
                  onSizeChange: Xe.setTableSize,
                  pagination: Xt,
                  searchNode: br,
                  rowSelection: E !== !1 ? Vn : void 0,
                  className: rt,
                  tableColumn: Jn,
                  isLightFilter: kn,
                  action: ct,
                  alertDom: sa,
                  toolbarDom: ha,
                  hideToolbar: ia,
                  onSortChange: function (le) {
                    sn !== le && qt(le != null ? le : {});
                  },
                  onFilterChange: function (le) {
                    le !== _e && Wt(le);
                  },
                  editableUtils: Dn,
                  getRowKey: Pn,
                },
              ),
            ),
          );
        },
        Ho = function (e) {
          var n = (0, l.useContext)($e.ZP.ConfigContext),
            r = n.getPrefixCls,
            a = e.ErrorBoundary === !1 ? l.Fragment : e.ErrorBoundary || Rt.S;
          return (0, x.jsx)(Gd, {
            initValue: e,
            children: (0, x.jsx)(gn._Y, {
              needDeps: !0,
              children: (0, x.jsx)(a, {
                children: (0, x.jsx)(
                  ev,
                  (0, u.Z)({ defaultClassName: ''.concat(r('pro-table')) }, e),
                ),
              }),
            }),
          });
        };
      Ho.Summary = Wr.Summary;
      var tv = Ho;
    },
    2300: function (ur, pn, m) {
      m.d(pn, {
        U: function () {
          return zn;
        },
      });
      var Ee = m(41670),
        oe = m(83525),
        it = m(72561),
        de = m(5849),
        S = m(93112),
        He = m(57285),
        u = m(46750),
        Ie = m(36948),
        Ct = m(82063),
        Bt = m(82702),
        $e = m(7666),
        Ge = m(73990),
        Et = function (ht) {
          var cn = ''.concat(ht.antCls, '-progress-bg');
          return (0, Ge.Z)({}, ht.componentCls, {
            '&-multiple': {
              paddingBlockStart: 6,
              paddingBlockEnd: 12,
              paddingInline: 8,
            },
            '&-progress': {
              '&-success': (0, Ge.Z)({}, cn, {
                backgroundColor: ht.colorSuccess,
              }),
              '&-error': (0, Ge.Z)({}, cn, { backgroundColor: ht.colorError }),
              '&-warning': (0, Ge.Z)({}, cn, {
                backgroundColor: ht.colorWarning,
              }),
            },
            '&-rule': {
              display: 'flex',
              alignItems: 'center',
              '&-icon': {
                '&-default': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '14px',
                  height: '22px',
                  '&-circle': {
                    width: '6px',
                    height: '6px',
                    backgroundColor: ht.colorTextSecondary,
                    borderRadius: '4px',
                  },
                },
                '&-loading': { color: ht.colorPrimary },
                '&-error': { color: ht.colorError },
                '&-success': { color: ht.colorSuccess },
              },
              '&-text': { color: ht.colorText },
            },
          });
        };
      function ke(x) {
        return (0, S.Xj)('InlineErrorFormItem', function (ht) {
          var cn = (0, oe.Z)(
            (0, oe.Z)({}, ht),
            {},
            { componentCls: '.'.concat(x) },
          );
          return [Et(cn)];
        });
      }
      var fe = m(97616),
        ve = ['rules', 'name', 'children', 'popoverProps'],
        J = ['errorType', 'rules', 'name', 'popoverProps', 'children'],
        l = {
          marginBlockStart: -5,
          marginBlockEnd: -5,
          marginInlineStart: 0,
          marginInlineEnd: 0,
        },
        Gt = function (ht) {
          var cn = ht.inputProps,
            fn = ht.input,
            Vt = ht.extra,
            Me = ht.errorList,
            en = ht.popoverProps,
            qn = (0, Bt.useState)(!1),
            Nn = (0, it.Z)(qn, 2),
            Kn = Nn[0],
            On = Nn[1],
            sr = (0, Bt.useState)([]),
            cr = (0, it.Z)(sr, 2),
            er = cr[0],
            Zt = cr[1],
            pr = (0, Bt.useContext)(He.ZP.ConfigContext),
            Or = pr.getPrefixCls,
            fr = Or(),
            gr = (0, S.dQ)(),
            Sr = ke(''.concat(fr, '-form-item-with-help')),
            hr = Sr.wrapSSR,
            tr = Sr.hashId;
          (0, Bt.useEffect)(
            function () {
              cn.validateStatus !== 'validating' && Zt(cn.errors);
            },
            [cn.errors, cn.validateStatus],
          );
          var xr = (0, $e.X)(er.length < 1 ? !1 : Kn, function (yr) {
              yr !== Kn && On(yr);
            }),
            $n = cn.validateStatus === 'validating';
          return (0, fe.jsx)(
            u.Z,
            (0, oe.Z)(
              (0, oe.Z)(
                (0, oe.Z)(
                  {
                    trigger: (en == null ? void 0 : en.trigger) || ['click'],
                    placement:
                      (en == null ? void 0 : en.placement) || 'topLeft',
                  },
                  xr,
                ),
                {},
                {
                  getPopupContainer: en == null ? void 0 : en.getPopupContainer,
                  getTooltipContainer:
                    en == null ? void 0 : en.getTooltipContainer,
                  content: hr(
                    (0, fe.jsx)('div', {
                      className: ''
                        .concat(fr, '-form-item ')
                        .concat(tr, ' ')
                        .concat(gr.hashId)
                        .trim(),
                      style: { margin: 0, padding: 0 },
                      children: (0, fe.jsxs)('div', {
                        className: ''
                          .concat(fr, '-form-item-with-help ')
                          .concat(tr, ' ')
                          .concat(gr.hashId)
                          .trim(),
                        children: [$n ? (0, fe.jsx)(de.Z, {}) : null, Me],
                      }),
                    }),
                  ),
                },
                en,
              ),
              {},
              { children: (0, fe.jsxs)(fe.Fragment, { children: [fn, Vt] }) },
            ),
            'popover',
          );
        },
        Rn = function (ht) {
          var cn = ht.rules,
            fn = ht.name,
            Vt = ht.children,
            Me = ht.popoverProps,
            en = (0, Ee.Z)(ht, ve);
          return (0, fe.jsx)(
            Ie.Z.Item,
            (0, oe.Z)(
              (0, oe.Z)(
                {
                  name: fn,
                  rules: cn,
                  hasFeedback: !1,
                  shouldUpdate: function (Nn, Kn) {
                    if (Nn === Kn) return !1;
                    var On = [fn].flat(1);
                    On.length > 1 && On.pop();
                    try {
                      return (
                        JSON.stringify((0, Ct.Z)(Nn, On)) !==
                        JSON.stringify((0, Ct.Z)(Kn, On))
                      );
                    } catch (sr) {
                      return !0;
                    }
                  },
                  _internalItemRender: {
                    mark: 'pro_table_render',
                    render: function (Nn, Kn) {
                      return (0, fe.jsx)(
                        Gt,
                        (0, oe.Z)({ inputProps: Nn, popoverProps: Me }, Kn),
                      );
                    },
                  },
                },
                en,
              ),
              {},
              {
                style: (0, oe.Z)(
                  (0, oe.Z)({}, l),
                  en == null ? void 0 : en.style,
                ),
                children: Vt,
              },
            ),
          );
        },
        zn = function (ht) {
          var cn = ht.errorType,
            fn = ht.rules,
            Vt = ht.name,
            Me = ht.popoverProps,
            en = ht.children,
            qn = (0, Ee.Z)(ht, J);
          return Vt &&
            fn !== null &&
            fn !== void 0 &&
            fn.length &&
            cn === 'popover'
            ? (0, fe.jsx)(
                Rn,
                (0, oe.Z)(
                  (0, oe.Z)({ name: Vt, rules: fn, popoverProps: Me }, qn),
                  {},
                  { children: en },
                ),
              )
            : (0, fe.jsx)(
                Ie.Z.Item,
                (0, oe.Z)(
                  (0, oe.Z)(
                    {
                      rules: fn,
                      shouldUpdate: Vt
                        ? function (Nn, Kn) {
                            if (Nn === Kn) return !1;
                            var On = [Vt].flat(1);
                            On.length > 1 && On.pop();
                            try {
                              return (
                                JSON.stringify((0, Ct.Z)(Nn, On)) !==
                                JSON.stringify((0, Ct.Z)(Kn, On))
                              );
                            } catch (sr) {
                              return !0;
                            }
                          }
                        : void 0,
                    },
                    qn,
                  ),
                  {},
                  {
                    style: (0, oe.Z)((0, oe.Z)({}, l), qn.style),
                    name: Vt,
                    children: en,
                  },
                ),
              );
        };
    },
    41816: function (ur, pn, m) {
      m.d(pn, {
        X: function () {
          return He;
        },
      });
      var Ee = m(40672),
        oe = m(82702),
        it = m(97616),
        de = function (Ie) {
          var Ct;
          return !!(
            (Ie != null &&
              (Ct = Ie.valueType) !== null &&
              Ct !== void 0 &&
              Ct.toString().startsWith('date')) ||
            (Ie == null ? void 0 : Ie.valueType) === 'select' ||
            (Ie != null && Ie.valueEnum)
          );
        },
        S = function (Ie) {
          var Ct;
          return ((Ct = Ie.ellipsis) === null || Ct === void 0
            ? void 0
            : Ct.showTitle) === !1
            ? !1
            : Ie.ellipsis;
        },
        He = function (Ie, Ct, Bt) {
          if (Ct.copyable || Ct.ellipsis) {
            var $e =
                Ct.copyable && Bt ? { text: Bt, tooltips: ['', ''] } : void 0,
              Ge = de(Ct),
              Et =
                S(Ct) && Bt
                  ? {
                      tooltip:
                        (Ct == null ? void 0 : Ct.tooltip) !== !1 && Ge
                          ? (0, it.jsx)('div', {
                              className: 'pro-table-tooltip-text',
                              children: Ie,
                            })
                          : Bt,
                    }
                  : !1;
            return (0, it.jsx)(Ee.Z.Text, {
              style: { width: '100%', margin: 0, padding: 0 },
              title: '',
              copyable: $e,
              ellipsis: Et,
              children: Ie,
            });
          }
          return Ie;
        };
    },
    67994: function (ur, pn, m) {
      m.d(pn, {
        w: function () {
          return oe;
        },
      });
      var Ee = m(3138),
        oe = function (de, S, He) {
          return S === void 0 ? de : (0, Ee.h)(de, S, He);
        };
    },
    63546: function (ur, pn, m) {
      m.d(pn, {
        aX: function () {
          return Dr;
        },
        cx: function () {
          return _n;
        },
        sN: function () {
          return Fn;
        },
        CB: function () {
          return gn;
        },
      });
      var Ee = m(80104),
        oe = m(62812),
        it = m(2953),
        de = m(47768),
        S = m(72561),
        He = m(73990),
        u = m(41670),
        Ie = m(83525),
        Ct = m(22361),
        Bt = m(5849),
        $e = m(91496),
        Ge = m(28941),
        Et = m(36948),
        ke = m(82702),
        fe = m(5222),
        ve = m(91150),
        J = m.n(ve),
        l = m(69164),
        Gt = m(53172),
        Rn = m(64775),
        zn = m(46750),
        x = m(16662),
        ht = m(59630),
        cn = m(72223),
        fn = m(8961),
        Vt = m(2128),
        Me = m(8598),
        en = m(65430),
        qn = m(86029);
      const Nn = (k) => {
          const {
            componentCls: ye,
            iconCls: tt,
            antCls: Je,
            zIndexPopup: Rt,
            colorText: It,
            colorWarning: kt,
            marginXXS: Dt,
            marginXS: rn,
            fontSize: Tt,
            fontWeightStrong: zt,
            colorTextHeading: Yt,
          } = k;
          return {
            [ye]: {
              zIndex: Rt,
              [`&${Je}-popover`]: { fontSize: Tt },
              [`${ye}-message`]: {
                marginBottom: rn,
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'start',
                [`> ${ye}-message-icon ${tt}`]: {
                  color: kt,
                  fontSize: Tt,
                  lineHeight: 1,
                  marginInlineEnd: rn,
                },
                [`${ye}-title`]: {
                  fontWeight: zt,
                  color: Yt,
                  '&:only-child': { fontWeight: 'normal' },
                },
                [`${ye}-description`]: { marginTop: Dt, color: It },
              },
              [`${ye}-buttons`]: {
                textAlign: 'end',
                whiteSpace: 'nowrap',
                button: { marginInlineStart: rn },
              },
            },
          };
        },
        Kn = (k) => {
          const { zIndexPopupBase: ye } = k;
          return { zIndexPopup: ye + 60 };
        };
      var On = (0, qn.I$)('Popconfirm', (k) => Nn(k), Kn, { resetStyle: !1 }),
        sr = function (k, ye) {
          var tt = {};
          for (var Je in k)
            Object.prototype.hasOwnProperty.call(k, Je) &&
              ye.indexOf(Je) < 0 &&
              (tt[Je] = k[Je]);
          if (k != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var Rt = 0, Je = Object.getOwnPropertySymbols(k);
              Rt < Je.length;
              Rt++
            )
              ye.indexOf(Je[Rt]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(k, Je[Rt]) &&
                (tt[Je[Rt]] = k[Je[Rt]]);
          return tt;
        };
      const cr = (k) => {
        const {
            prefixCls: ye,
            okButtonProps: tt,
            cancelButtonProps: Je,
            title: Rt,
            description: It,
            cancelText: kt,
            okText: Dt,
            okType: rn = 'primary',
            icon: Tt = ke.createElement(fe.Z, null),
            showCancel: zt = !0,
            close: Yt,
            onConfirm: Pt,
            onCancel: Qe,
            onPopupClick: Kt,
          } = k,
          { getPrefixCls: Ut } = ke.useContext(Rn.E_),
          [ut] = (0, Vt.Z)('Popconfirm', Me.Z.Popconfirm),
          ft = (0, ht.Z)(Rt),
          $t = (0, ht.Z)(It);
        return ke.createElement(
          'div',
          { className: `${ye}-inner-content`, onClick: Kt },
          ke.createElement(
            'div',
            { className: `${ye}-message` },
            Tt &&
              ke.createElement('span', { className: `${ye}-message-icon` }, Tt),
            ke.createElement(
              'div',
              { className: `${ye}-message-text` },
              ft && ke.createElement('div', { className: `${ye}-title` }, ft),
              $t &&
                ke.createElement('div', { className: `${ye}-description` }, $t),
            ),
          ),
          ke.createElement(
            'div',
            { className: `${ye}-buttons` },
            zt &&
              ke.createElement(
                cn.ZP,
                Object.assign({ onClick: Qe, size: 'small' }, Je),
                kt || (ut == null ? void 0 : ut.cancelText),
              ),
            ke.createElement(
              x.Z,
              {
                buttonProps: Object.assign(
                  Object.assign({ size: 'small' }, (0, fn.nx)(rn)),
                  tt,
                ),
                actionFn: Pt,
                close: Yt,
                prefixCls: Ut('btn'),
                quitOnNullishReturnValue: !0,
                emitEvent: !0,
              },
              Dt || (ut == null ? void 0 : ut.okText),
            ),
          ),
        );
      };
      var Zt = (k) => {
          const { prefixCls: ye, placement: tt, className: Je, style: Rt } = k,
            It = sr(k, ['prefixCls', 'placement', 'className', 'style']),
            { getPrefixCls: kt } = ke.useContext(Rn.E_),
            Dt = kt('popconfirm', ye),
            [rn] = On(Dt);
          return rn(
            ke.createElement(en.ZP, {
              placement: tt,
              className: J()(Dt, Je),
              style: Rt,
              content: ke.createElement(
                cr,
                Object.assign({ prefixCls: Dt }, It),
              ),
            }),
          );
        },
        pr = function (k, ye) {
          var tt = {};
          for (var Je in k)
            Object.prototype.hasOwnProperty.call(k, Je) &&
              ye.indexOf(Je) < 0 &&
              (tt[Je] = k[Je]);
          if (k != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var Rt = 0, Je = Object.getOwnPropertySymbols(k);
              Rt < Je.length;
              Rt++
            )
              ye.indexOf(Je[Rt]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(k, Je[Rt]) &&
                (tt[Je[Rt]] = k[Je[Rt]]);
          return tt;
        };
      const fr = ke.forwardRef((k, ye) => {
        var tt, Je;
        const {
            prefixCls: Rt,
            placement: It = 'top',
            trigger: kt = 'click',
            okType: Dt = 'primary',
            icon: rn = ke.createElement(fe.Z, null),
            children: Tt,
            overlayClassName: zt,
            onOpenChange: Yt,
            onVisibleChange: Pt,
          } = k,
          Qe = pr(k, [
            'prefixCls',
            'placement',
            'trigger',
            'okType',
            'icon',
            'children',
            'overlayClassName',
            'onOpenChange',
            'onVisibleChange',
          ]),
          { getPrefixCls: Kt } = ke.useContext(Rn.E_),
          [Ut, ut] = (0, l.Z)(!1, {
            value: (tt = k.open) !== null && tt !== void 0 ? tt : k.visible,
            defaultValue:
              (Je = k.defaultOpen) !== null && Je !== void 0
                ? Je
                : k.defaultVisible,
          }),
          ft = (At, hn) => {
            ut(At, !0), Pt == null || Pt(At), Yt == null || Yt(At, hn);
          },
          $t = (At) => {
            ft(!1, At);
          },
          Ye = (At) => {
            var hn;
            return (hn = k.onConfirm) === null || hn === void 0
              ? void 0
              : hn.call(void 0, At);
          },
          We = (At) => {
            var hn;
            ft(!1, At),
              (hn = k.onCancel) === null ||
                hn === void 0 ||
                hn.call(void 0, At);
          },
          Tn = (At, hn) => {
            const { disabled: Cn = !1 } = k;
            Cn || ft(At, hn);
          },
          dn = Kt('popconfirm', Rt),
          An = J()(dn, zt),
          [xn] = On(dn);
        return xn(
          ke.createElement(
            zn.Z,
            Object.assign({}, (0, Gt.Z)(Qe, ['title']), {
              trigger: kt,
              placement: It,
              onOpenChange: Tn,
              open: Ut,
              ref: ye,
              overlayClassName: An,
              content: ke.createElement(
                cr,
                Object.assign({ okType: Dt, icon: rn }, k, {
                  prefixCls: dn,
                  close: $t,
                  onConfirm: Ye,
                  onCancel: We,
                }),
              ),
              'data-popover-inject': !0,
            }),
            Tt,
          ),
        );
      });
      fr._InternalPanelDoNotUseOrYouWillBeFired = Zt;
      var gr = fr,
        Sr = m(85916),
        hr = m(82063),
        tr = m(60964),
        xr = m(89071),
        $n = m(47174),
        yr = m(97384),
        Fr = m(21681),
        Xr = m(88815),
        Gr = m(39584),
        Mr = m(69631),
        En = m(97616),
        ea = ['map_row_parentKey'],
        Yr = ['map_row_parentKey', 'map_row_key'],
        ta = ['map_row_key'],
        Pr = function (ye) {
          return (Ge.ZP.warn || Ge.ZP.warning)(ye);
        },
        Fn = function (ye) {
          return Array.isArray(ye) ? ye.join(',') : ye;
        };
      function _n(k, ye) {
        var tt,
          Je = k.getRowKey,
          Rt = k.row,
          It = k.data,
          kt = k.childrenColumnName,
          Dt = kt === void 0 ? 'children' : kt,
          rn =
            (tt = Fn(k.key)) === null || tt === void 0 ? void 0 : tt.toString(),
          Tt = new Map();
        function zt(Pt, Qe, Kt) {
          Pt.forEach(function (Ut, ut) {
            var ft = (Kt || 0) * 10 + ut,
              $t = Je(Ut, ft).toString();
            Ut &&
              (0, Ct.Z)(Ut) === 'object' &&
              Dt in Ut &&
              zt(Ut[Dt] || [], $t, ft);
            var Ye = (0, Ie.Z)(
              (0, Ie.Z)({}, Ut),
              {},
              { map_row_key: $t, children: void 0, map_row_parentKey: Qe },
            );
            delete Ye.children,
              Qe || delete Ye.map_row_parentKey,
              Tt.set($t, Ye);
          });
        }
        ye === 'top' && Tt.set(rn, (0, Ie.Z)((0, Ie.Z)({}, Tt.get(rn)), Rt)),
          zt(It),
          ye === 'update' &&
            Tt.set(rn, (0, Ie.Z)((0, Ie.Z)({}, Tt.get(rn)), Rt)),
          ye === 'delete' && Tt.delete(rn);
        var Yt = function (Qe) {
          var Kt = new Map(),
            Ut = [],
            ut = function () {
              var $t =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1;
              Qe.forEach(function (Ye) {
                if (Ye.map_row_parentKey && !Ye.map_row_key) {
                  var We = Ye.map_row_parentKey,
                    Tn = (0, u.Z)(Ye, ea);
                  if ((Kt.has(We) || Kt.set(We, []), $t)) {
                    var dn;
                    (dn = Kt.get(We)) === null || dn === void 0 || dn.push(Tn);
                  }
                }
              });
            };
          return (
            ut(ye === 'top'),
            Qe.forEach(function (ft) {
              if (ft.map_row_parentKey && ft.map_row_key) {
                var $t,
                  Ye = ft.map_row_parentKey,
                  We = ft.map_row_key,
                  Tn = (0, u.Z)(ft, Yr);
                Kt.has(We) && (Tn[Dt] = Kt.get(We)),
                  Kt.has(Ye) || Kt.set(Ye, []),
                  ($t = Kt.get(Ye)) === null || $t === void 0 || $t.push(Tn);
              }
            }),
            ut(ye === 'update'),
            Qe.forEach(function (ft) {
              if (!ft.map_row_parentKey) {
                var $t = ft.map_row_key,
                  Ye = (0, u.Z)(ft, ta);
                if ($t && Kt.has($t)) {
                  var We = (0, Ie.Z)(
                    (0, Ie.Z)({}, Ye),
                    {},
                    (0, He.Z)({}, Dt, Kt.get($t)),
                  );
                  Ut.push(We);
                  return;
                }
                Ut.push(Ye);
              }
            }),
            Ut
          );
        };
        return Yt(Tt);
      }
      function Cr(k, ye) {
        var tt = k.recordKey,
          Je = k.onSave,
          Rt = k.row,
          It = k.children,
          kt = k.newLineConfig,
          Dt = k.editorType,
          rn = k.tableName,
          Tt = (0, ke.useContext)(Fr.J),
          zt = Et.Z.useFormInstance(),
          Yt = (0, l.Z)(!1),
          Pt = (0, S.Z)(Yt, 2),
          Qe = Pt[0],
          Kt = Pt[1],
          Ut = (0, $n.J)(
            (0, de.Z)(
              (0, oe.Z)().mark(function ut() {
                var ft, $t, Ye, We, Tn, dn, An, xn, At;
                return (0, oe.Z)().wrap(
                  function (Cn) {
                    for (;;)
                      switch ((Cn.prev = Cn.next)) {
                        case 0:
                          return (
                            (Cn.prev = 0),
                            ($t = Dt === 'Map'),
                            (Ye = [rn, Array.isArray(tt) ? tt[0] : tt]
                              .map(function (nr) {
                                return nr == null ? void 0 : nr.toString();
                              })
                              .flat(1)
                              .filter(Boolean)),
                            Kt(!0),
                            (Cn.next = 6),
                            zt.validateFields(Ye, { recursive: !0 })
                          );
                        case 6:
                          return (
                            (We =
                              (Tt == null ||
                              (ft = Tt.getFieldFormatValue) === null ||
                              ft === void 0
                                ? void 0
                                : ft.call(Tt, Ye)) || zt.getFieldValue(Ye)),
                            Array.isArray(tt) &&
                              tt.length > 1 &&
                              ((Tn = (0, it.Z)(tt)),
                              (dn = Tn.slice(1)),
                              (An = (0, hr.Z)(We, dn)),
                              (0, tr.Z)(We, dn, An)),
                            (xn = $t ? (0, tr.Z)({}, Ye, We) : We),
                            (Cn.next = 11),
                            Je == null
                              ? void 0
                              : Je(tt, (0, Mr.T)({}, Rt, xn), Rt, kt)
                          );
                        case 11:
                          return (
                            (At = Cn.sent), Kt(!1), Cn.abrupt('return', At)
                          );
                        case 16:
                          throw (
                            ((Cn.prev = 16),
                            (Cn.t0 = Cn.catch(0)),
                            console.log(Cn.t0),
                            Kt(!1),
                            Cn.t0)
                          );
                        case 21:
                        case 'end':
                          return Cn.stop();
                      }
                  },
                  ut,
                  null,
                  [[0, 16]],
                );
              }),
            ),
          );
        return (
          (0, ke.useImperativeHandle)(
            ye,
            function () {
              return { save: Ut };
            },
            [Ut],
          ),
          (0, En.jsxs)(
            'a',
            {
              onClick: (function () {
                var ut = (0, de.Z)(
                  (0, oe.Z)().mark(function ft($t) {
                    return (0, oe.Z)().wrap(
                      function (We) {
                        for (;;)
                          switch ((We.prev = We.next)) {
                            case 0:
                              return (
                                $t.stopPropagation(),
                                $t.preventDefault(),
                                (We.prev = 2),
                                (We.next = 5),
                                Ut()
                              );
                            case 5:
                              We.next = 9;
                              break;
                            case 7:
                              (We.prev = 7), (We.t0 = We.catch(2));
                            case 9:
                            case 'end':
                              return We.stop();
                          }
                      },
                      ft,
                      null,
                      [[2, 7]],
                    );
                  }),
                );
                return function (ft) {
                  return ut.apply(this, arguments);
                };
              })(),
              children: [
                Qe
                  ? (0, En.jsx)(Bt.Z, { style: { marginInlineEnd: 8 } })
                  : null,
                It || '\u4FDD\u5B58',
              ],
            },
            'save',
          )
        );
      }
      var Br = function (ye) {
          var tt = ye.recordKey,
            Je = ye.onDelete,
            Rt = ye.preEditRowRef,
            It = ye.row,
            kt = ye.children,
            Dt = ye.deletePopconfirmMessage,
            rn = (0, l.Z)(function () {
              return !1;
            }),
            Tt = (0, S.Z)(rn, 2),
            zt = Tt[0],
            Yt = Tt[1],
            Pt = (0, $n.J)(
              (0, de.Z)(
                (0, oe.Z)().mark(function Qe() {
                  var Kt;
                  return (0, oe.Z)().wrap(
                    function (ut) {
                      for (;;)
                        switch ((ut.prev = ut.next)) {
                          case 0:
                            return (
                              (ut.prev = 0),
                              Yt(!0),
                              (ut.next = 4),
                              Je == null ? void 0 : Je(tt, It)
                            );
                          case 4:
                            return (
                              (Kt = ut.sent), Yt(!1), ut.abrupt('return', Kt)
                            );
                          case 9:
                            return (
                              (ut.prev = 9),
                              (ut.t0 = ut.catch(0)),
                              console.log(ut.t0),
                              Yt(!1),
                              ut.abrupt('return', null)
                            );
                          case 14:
                            return (
                              (ut.prev = 14),
                              Rt && (Rt.current = null),
                              ut.finish(14)
                            );
                          case 17:
                          case 'end':
                            return ut.stop();
                        }
                    },
                    Qe,
                    null,
                    [[0, 9, 14, 17]],
                  );
                }),
              ),
            );
          return kt !== !1
            ? (0, En.jsx)(
                gr,
                {
                  title: Dt,
                  onConfirm: function () {
                    return Pt();
                  },
                  children: (0, En.jsxs)('a', {
                    children: [
                      zt
                        ? (0, En.jsx)(Bt.Z, { style: { marginInlineEnd: 8 } })
                        : null,
                      kt || '\u5220\u9664',
                    ],
                  }),
                },
                'delete',
              )
            : null;
        },
        Lr = function (ye) {
          var tt = ye.recordKey,
            Je = ye.tableName,
            Rt = ye.newLineConfig,
            It = ye.editorType,
            kt = ye.onCancel,
            Dt = ye.cancelEditable,
            rn = ye.row,
            Tt = ye.cancelText,
            zt = ye.preEditRowRef,
            Yt = (0, ke.useContext)(Fr.J),
            Pt = Et.Z.useFormInstance();
          return (0, En.jsx)(
            'a',
            {
              onClick: (function () {
                var Qe = (0, de.Z)(
                  (0, oe.Z)().mark(function Kt(Ut) {
                    var ut, ft, $t, Ye, We, Tn, dn;
                    return (0, oe.Z)().wrap(function (xn) {
                      for (;;)
                        switch ((xn.prev = xn.next)) {
                          case 0:
                            return (
                              Ut.stopPropagation(),
                              Ut.preventDefault(),
                              (ft = It === 'Map'),
                              ($t = [Je, tt].flat(1).filter(Boolean)),
                              (Ye =
                                (Yt == null ||
                                (ut = Yt.getFieldFormatValue) === null ||
                                ut === void 0
                                  ? void 0
                                  : ut.call(Yt, $t)) ||
                                (Pt == null ? void 0 : Pt.getFieldValue($t))),
                              (We = ft ? (0, tr.Z)({}, $t, Ye) : Ye),
                              (xn.next = 8),
                              kt == null ? void 0 : kt(tt, We, rn, Rt)
                            );
                          case 8:
                            return (Tn = xn.sent), (xn.next = 11), Dt(tt);
                          case 11:
                            if ((zt == null ? void 0 : zt.current) === null) {
                              xn.next = 15;
                              break;
                            }
                            Pt.setFieldsValue(
                              (0, tr.Z)(
                                {},
                                $t,
                                zt == null ? void 0 : zt.current,
                              ),
                            ),
                              (xn.next = 17);
                            break;
                          case 15:
                            return (
                              (xn.next = 17),
                              (dn = ye.onDelete) === null || dn === void 0
                                ? void 0
                                : dn.call(ye, tt, rn)
                            );
                          case 17:
                            return (
                              zt && (zt.current = null), xn.abrupt('return', Tn)
                            );
                          case 19:
                          case 'end':
                            return xn.stop();
                        }
                    }, Kt);
                  }),
                );
                return function (Kt) {
                  return Qe.apply(this, arguments);
                };
              })(),
              children: Tt || '\u53D6\u6D88',
            },
            'cancel',
          );
        };
      function Dr(k, ye) {
        var tt = ye.recordKey,
          Je = ye.newLineConfig,
          Rt = ye.saveText,
          It = ye.deleteText,
          kt = (0, ke.forwardRef)(Cr),
          Dt = (0, ke.createRef)();
        return {
          save: (0, En.jsx)(
            kt,
            (0, Ie.Z)((0, Ie.Z)({}, ye), {}, { row: k, ref: Dt, children: Rt }),
            'save' + tt,
          ),
          saveRef: Dt,
          delete:
            (Je == null ? void 0 : Je.options.recordKey) !== tt
              ? (0, En.jsx)(
                  Br,
                  (0, Ie.Z)((0, Ie.Z)({}, ye), {}, { row: k, children: It }),
                  'delete' + tt,
                )
              : void 0,
          cancel: (0, En.jsx)(
            Lr,
            (0, Ie.Z)((0, Ie.Z)({}, ye), {}, { row: k }),
            'cancel' + tt,
          ),
        };
      }
      function gn(k) {
        var ye = (0, $e.YB)(),
          tt = (0, ke.useRef)(null),
          Je = (0, ke.useState)(void 0),
          Rt = (0, S.Z)(Je, 2),
          It = Rt[0],
          kt = Rt[1],
          Dt = function () {
            var me = new Map(),
              he = function re(Se, P) {
                Se == null ||
                  Se.forEach(function (w, B) {
                    var A,
                      G = P == null ? B.toString() : P + '_' + B.toString();
                    me.set(G, Fn(k.getRowKey(w, -1))),
                      me.set(
                        (A = Fn(k.getRowKey(w, -1))) === null || A === void 0
                          ? void 0
                          : A.toString(),
                        G,
                      ),
                      k.childrenColumnName &&
                        w !== null &&
                        w !== void 0 &&
                        w[k.childrenColumnName] &&
                        re(w[k.childrenColumnName], G);
                  });
              };
            return he(k.dataSource), me;
          },
          rn = (0, ke.useMemo)(function () {
            return Dt();
          }, []),
          Tt = (0, ke.useRef)(rn),
          zt = (0, ke.useRef)(void 0);
        (0, Xr.Au)(
          function () {
            Tt.current = Dt();
          },
          [k.dataSource],
        ),
          (zt.current = It);
        var Yt = k.type || 'single',
          Pt = (0, Sr.Z)(k.dataSource, 'children', k.getRowKey),
          Qe = (0, S.Z)(Pt, 1),
          Kt = Qe[0],
          Ut = (0, l.Z)([], {
            value: k.editableKeys,
            onChange: k.onChange
              ? function (Te) {
                  var me, he, re;
                  k == null ||
                    (me = k.onChange) === null ||
                    me === void 0 ||
                    me.call(
                      k,
                      (he =
                        Te == null
                          ? void 0
                          : Te.filter(function (Se) {
                              return Se !== void 0;
                            })) !== null && he !== void 0
                        ? he
                        : [],
                      (re =
                        Te == null
                          ? void 0
                          : Te.map(function (Se) {
                              return Kt(Se);
                            }).filter(function (Se) {
                              return Se !== void 0;
                            })) !== null && re !== void 0
                        ? re
                        : [],
                    );
                }
              : void 0,
          }),
          ut = (0, S.Z)(Ut, 2),
          ft = ut[0],
          $t = ut[1],
          Ye = (0, ke.useMemo)(
            function () {
              var Te =
                Yt === 'single' ? (ft == null ? void 0 : ft.slice(0, 1)) : ft;
              return new Set(Te);
            },
            [(ft || []).join(','), Yt],
          ),
          We = (0, Gr.D)(ft),
          Tn = (0, $n.J)(function (Te) {
            var me,
              he,
              re,
              Se,
              P =
                (me = k.getRowKey(Te, Te.index)) === null ||
                me === void 0 ||
                (he = me.toString) === null ||
                he === void 0
                  ? void 0
                  : he.call(me),
              w =
                (re = k.getRowKey(Te, -1)) === null ||
                re === void 0 ||
                (Se = re.toString) === null ||
                Se === void 0
                  ? void 0
                  : Se.call(re),
              B =
                ft == null
                  ? void 0
                  : ft.map(function (be) {
                      return be == null ? void 0 : be.toString();
                    }),
              A =
                (We == null
                  ? void 0
                  : We.map(function (be) {
                      return be == null ? void 0 : be.toString();
                    })) || [],
              G =
                (k.tableName && !!(A != null && A.includes(w))) ||
                !!(A != null && A.includes(P));
            return {
              recordKey: w,
              isEditable:
                (k.tableName && (B == null ? void 0 : B.includes(w))) ||
                (B == null ? void 0 : B.includes(P)),
              preIsEditable: G,
            };
          }),
          dn = (0, $n.J)(function (Te, me) {
            var he, re;
            return Ye.size > 0 &&
              Yt === 'single' &&
              k.onlyOneLineEditorAlertMessage !== !1
              ? (Pr(
                  k.onlyOneLineEditorAlertMessage ||
                    ye.getMessage(
                      'editableTable.onlyOneLineEditor',
                      '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                    ),
                ),
                !1)
              : (Ye.add(Te),
                $t(Array.from(Ye)),
                (tt.current =
                  (he =
                    me != null
                      ? me
                      : (re = k.dataSource) === null || re === void 0
                      ? void 0
                      : re.find(function (Se, P) {
                          return k.getRowKey(Se, P) === Te;
                        })) !== null && he !== void 0
                    ? he
                    : null),
                !0);
          }),
          An = (0, $n.J)(
            (function () {
              var Te = (0, de.Z)(
                (0, oe.Z)().mark(function me(he, re) {
                  var Se, P;
                  return (0, oe.Z)().wrap(function (B) {
                    for (;;)
                      switch ((B.prev = B.next)) {
                        case 0:
                          if (
                            ((Se = Fn(he).toString()),
                            (P = Tt.current.get(Se)),
                            !(
                              !Ye.has(Se) &&
                              P &&
                              (re == null || re) &&
                              k.tableName
                            ))
                          ) {
                            B.next = 5;
                            break;
                          }
                          return An(P, !1), B.abrupt('return');
                        case 5:
                          return (
                            It && It.options.recordKey === he && kt(void 0),
                            Ye.delete(Se),
                            Ye.delete(Fn(he)),
                            $t(Array.from(Ye)),
                            B.abrupt('return', !0)
                          );
                        case 10:
                        case 'end':
                          return B.stop();
                      }
                  }, me);
                }),
              );
              return function (me, he) {
                return Te.apply(this, arguments);
              };
            })(),
          ),
          xn = (0, yr.D)(
            (0, de.Z)(
              (0, oe.Z)().mark(function Te() {
                var me,
                  he,
                  re,
                  Se,
                  P = arguments;
                return (0, oe.Z)().wrap(function (B) {
                  for (;;)
                    switch ((B.prev = B.next)) {
                      case 0:
                        for (
                          he = P.length, re = new Array(he), Se = 0;
                          Se < he;
                          Se++
                        )
                          re[Se] = P[Se];
                        (me = k.onValuesChange) === null ||
                          me === void 0 ||
                          me.call.apply(me, [k].concat(re));
                      case 2:
                      case 'end':
                        return B.stop();
                    }
                }, Te);
              }),
            ),
            64,
          ),
          At = (0, $n.J)(function (Te, me) {
            var he;
            if (k.onValuesChange) {
              var re = k.dataSource;
              ft == null ||
                ft.forEach(function (A) {
                  if ((It == null ? void 0 : It.options.recordKey) !== A) {
                    var G = A.toString(),
                      be = (0, hr.Z)(
                        me,
                        [k.tableName || '', G].flat(1).filter(function (ce) {
                          return ce || ce === 0;
                        }),
                      );
                    be &&
                      (re = _n(
                        {
                          data: re,
                          getRowKey: k.getRowKey,
                          row: be,
                          key: G,
                          childrenColumnName:
                            k.childrenColumnName || 'children',
                        },
                        'update',
                      ));
                  }
                });
              var Se = Te,
                P =
                  (he = Object.keys(Se || {}).pop()) === null || he === void 0
                    ? void 0
                    : he.toString(),
                w = (0, Ie.Z)(
                  (0, Ie.Z)({}, It == null ? void 0 : It.defaultValue),
                  (0, hr.Z)(
                    me,
                    [k.tableName || '', P.toString()]
                      .flat(1)
                      .filter(function (A) {
                        return A || A === 0;
                      }),
                  ),
                ),
                B = Tt.current.has(Fn(P))
                  ? re.find(function (A, G) {
                      var be,
                        ce =
                          (be = k.getRowKey(A, G)) === null || be === void 0
                            ? void 0
                            : be.toString();
                      return ce === P;
                    })
                  : w;
              xn.run(B || w, re);
            }
          }),
          hn = (0, ke.useRef)(new Map());
        (0, ke.useEffect)(
          function () {
            hn.current.forEach(function (Te, me) {
              Ye.has(me) || hn.current.delete(me);
            });
          },
          [hn, Ye],
        );
        var Cn = (0, $n.J)(
            (function () {
              var Te = (0, de.Z)(
                (0, oe.Z)().mark(function me(he, re) {
                  var Se, P, w, B;
                  return (0, oe.Z)().wrap(
                    function (G) {
                      for (;;)
                        switch ((G.prev = G.next)) {
                          case 0:
                            if (
                              ((Se = Fn(he)),
                              (P = Tt.current.get(he.toString())),
                              !(
                                !Ye.has(Se) &&
                                P &&
                                (re == null || re) &&
                                k.tableName
                              ))
                            ) {
                              G.next = 6;
                              break;
                            }
                            return (G.next = 5), Cn(P, !1);
                          case 5:
                            return G.abrupt('return', G.sent);
                          case 6:
                            return (
                              (w =
                                hn.current.get(Se) ||
                                hn.current.get(Se.toString())),
                              (G.prev = 7),
                              (G.next = 10),
                              w == null ||
                              (B = w.current) === null ||
                              B === void 0
                                ? void 0
                                : B.save()
                            );
                          case 10:
                            G.next = 15;
                            break;
                          case 12:
                            return (
                              (G.prev = 12),
                              (G.t0 = G.catch(7)),
                              G.abrupt('return', !1)
                            );
                          case 15:
                            return (
                              Ye.delete(Se),
                              Ye.delete(Se.toString()),
                              $t(Array.from(Ye)),
                              G.abrupt('return', !0)
                            );
                          case 19:
                          case 'end':
                            return G.stop();
                        }
                    },
                    me,
                    null,
                    [[7, 12]],
                  );
                }),
              );
              return function (me, he) {
                return Te.apply(this, arguments);
              };
            })(),
          ),
          nr = (0, $n.J)(function (Te, me) {
            if (
              me != null &&
              me.parentKey &&
              !Tt.current.has(Fn(me == null ? void 0 : me.parentKey).toString())
            )
              return (
                console.warn(
                  "can't find record by key",
                  me == null ? void 0 : me.parentKey,
                ),
                !1
              );
            if (zt.current && k.onlyAddOneLineAlertMessage !== !1)
              return (
                Pr(
                  k.onlyAddOneLineAlertMessage ||
                    ye.getMessage(
                      'editableTable.onlyAddOneLine',
                      '\u53EA\u80FD\u65B0\u589E\u4E00\u884C',
                    ),
                ),
                !1
              );
            if (
              Ye.size > 0 &&
              Yt === 'single' &&
              k.onlyOneLineEditorAlertMessage !== !1
            )
              return (
                Pr(
                  k.onlyOneLineEditorAlertMessage ||
                    ye.getMessage(
                      'editableTable.onlyOneLineEditor',
                      '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                    ),
                ),
                !1
              );
            var he = k.getRowKey(Te, -1);
            if (!he && he !== 0)
              throw (
                ((0, xr.ET)(
                  !!he,
                  `\u8BF7\u8BBE\u7F6E recordCreatorProps.record \u5E76\u8FD4\u56DE\u4E00\u4E2A\u552F\u4E00\u7684key  
  https://procomponents.ant.design/components/editable-table#editable-%E6%96%B0%E5%BB%BA%E8%A1%8C`,
                ),
                new Error(
                  '\u8BF7\u8BBE\u7F6E recordCreatorProps.record \u5E76\u8FD4\u56DE\u4E00\u4E2A\u552F\u4E00\u7684key',
                ))
              );
            if (
              (Ye.add(he),
              $t(Array.from(Ye)),
              (me == null ? void 0 : me.newRecordType) === 'dataSource' ||
                k.tableName)
            ) {
              var re,
                Se = {
                  data: k.dataSource,
                  getRowKey: k.getRowKey,
                  row: (0, Ie.Z)(
                    (0, Ie.Z)({}, Te),
                    {},
                    {
                      map_row_parentKey:
                        me != null && me.parentKey
                          ? (re = Fn(me == null ? void 0 : me.parentKey)) ===
                              null || re === void 0
                            ? void 0
                            : re.toString()
                          : void 0,
                    },
                  ),
                  key: he,
                  childrenColumnName: k.childrenColumnName || 'children',
                };
              k.setDataSource(
                _n(
                  Se,
                  (me == null ? void 0 : me.position) === 'top'
                    ? 'top'
                    : 'update',
                ),
              );
            } else kt({ defaultValue: Te, options: (0, Ie.Z)((0, Ie.Z)({}, me), {}, { recordKey: he }) });
            return !0;
          }),
          Zr =
            (k == null ? void 0 : k.saveText) ||
            ye.getMessage('editableTable.action.save', '\u4FDD\u5B58'),
          rr =
            (k == null ? void 0 : k.deleteText) ||
            ye.getMessage('editableTable.action.delete', '\u5220\u9664'),
          Jr =
            (k == null ? void 0 : k.cancelText) ||
            ye.getMessage('editableTable.action.cancel', '\u53D6\u6D88'),
          wr = (0, $n.J)(
            (function () {
              var Te = (0, de.Z)(
                (0, oe.Z)().mark(function me(he, re, Se, P) {
                  var w, B, A, G, be, ce, Be;
                  return (0, oe.Z)().wrap(function (Ke) {
                    for (;;)
                      switch ((Ke.prev = Ke.next)) {
                        case 0:
                          return (
                            (Ke.next = 2),
                            k == null || (w = k.onSave) === null || w === void 0
                              ? void 0
                              : w.call(k, he, re, Se, P)
                          );
                        case 2:
                          return (G = Ke.sent), (Ke.next = 5), An(he);
                        case 5:
                          if (
                            ((be = P || zt.current || {}),
                            (ce = be.options),
                            !(
                              !(ce != null && ce.parentKey) &&
                              (ce == null ? void 0 : ce.recordKey) === he
                            ))
                          ) {
                            Ke.next = 9;
                            break;
                          }
                          return (
                            (ce == null ? void 0 : ce.position) === 'top'
                              ? k.setDataSource(
                                  [re].concat((0, Ee.Z)(k.dataSource)),
                                )
                              : k.setDataSource(
                                  [].concat((0, Ee.Z)(k.dataSource), [re]),
                                ),
                            Ke.abrupt('return', G)
                          );
                        case 9:
                          return (
                            (Be = {
                              data: k.dataSource,
                              getRowKey: k.getRowKey,
                              row: ce
                                ? (0, Ie.Z)(
                                    (0, Ie.Z)({}, re),
                                    {},
                                    {
                                      map_row_parentKey:
                                        (B = Fn(
                                          (A =
                                            ce == null
                                              ? void 0
                                              : ce.parentKey) !== null &&
                                            A !== void 0
                                            ? A
                                            : '',
                                        )) === null || B === void 0
                                          ? void 0
                                          : B.toString(),
                                    },
                                  )
                                : re,
                              key: he,
                              childrenColumnName:
                                k.childrenColumnName || 'children',
                            }),
                            k.setDataSource(
                              _n(
                                Be,
                                (ce == null ? void 0 : ce.position) === 'top'
                                  ? 'top'
                                  : 'update',
                              ),
                            ),
                            (Ke.next = 13),
                            An(he)
                          );
                        case 13:
                          return Ke.abrupt('return', G);
                        case 14:
                        case 'end':
                          return Ke.stop();
                      }
                  }, me);
                }),
              );
              return function (me, he, re, Se) {
                return Te.apply(this, arguments);
              };
            })(),
          ),
          f = (0, $n.J)(
            (function () {
              var Te = (0, de.Z)(
                (0, oe.Z)().mark(function me(he, re) {
                  var Se, P, w;
                  return (0, oe.Z)().wrap(function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (
                            (P = {
                              data: k.dataSource,
                              getRowKey: k.getRowKey,
                              row: re,
                              key: he,
                              childrenColumnName:
                                k.childrenColumnName || 'children',
                            }),
                            (A.next = 3),
                            k == null ||
                            (Se = k.onDelete) === null ||
                            Se === void 0
                              ? void 0
                              : Se.call(k, he, re)
                          );
                        case 3:
                          return (w = A.sent), (A.next = 6), An(he, !1);
                        case 6:
                          return (
                            k.setDataSource(_n(P, 'delete')),
                            A.abrupt('return', w)
                          );
                        case 8:
                        case 'end':
                          return A.stop();
                      }
                  }, me);
                }),
              );
              return function (me, he) {
                return Te.apply(this, arguments);
              };
            })(),
          ),
          I = (0, $n.J)(
            (function () {
              var Te = (0, de.Z)(
                (0, oe.Z)().mark(function me(he, re, Se, P) {
                  var w, B;
                  return (0, oe.Z)().wrap(function (G) {
                    for (;;)
                      switch ((G.prev = G.next)) {
                        case 0:
                          return (
                            (G.next = 2),
                            k == null ||
                            (w = k.onCancel) === null ||
                            w === void 0
                              ? void 0
                              : w.call(k, he, re, Se, P)
                          );
                        case 2:
                          return (B = G.sent), G.abrupt('return', B);
                        case 4:
                        case 'end':
                          return G.stop();
                      }
                  }, me);
                }),
              );
              return function (me, he, re, Se) {
                return Te.apply(this, arguments);
              };
            })(),
          ),
          U = k.actionRender && typeof k.actionRender == 'function',
          te = U ? k.actionRender : function () {},
          De = (0, $n.J)(te),
          et = function (me) {
            var he = k.getRowKey(me, me.index),
              re = {
                saveText: Zr,
                cancelText: Jr,
                deleteText: rr,
                addEditRecord: nr,
                recordKey: he,
                cancelEditable: An,
                index: me.index,
                tableName: k.tableName,
                newLineConfig: It,
                onCancel: I,
                onDelete: f,
                onSave: wr,
                editableKeys: ft,
                setEditableRowKeys: $t,
                preEditRowRef: tt,
                deletePopconfirmMessage:
                  k.deletePopconfirmMessage ||
                  ''.concat(
                    ye.getMessage('deleteThisLine', '\u5220\u9664\u6B64\u9879'),
                    '?',
                  ),
              },
              Se = Dr(me, re);
            return (
              k.tableName
                ? hn.current.set(Tt.current.get(Fn(he)) || Fn(he), Se.saveRef)
                : hn.current.set(Fn(he), Se.saveRef),
              U
                ? De(me, re, {
                    save: Se.save,
                    delete: Se.delete,
                    cancel: Se.cancel,
                  })
                : [Se.save, Se.delete, Se.cancel]
            );
          };
        return {
          editableKeys: ft,
          setEditableRowKeys: $t,
          isEditable: Tn,
          actionRender: et,
          startEditable: dn,
          cancelEditable: An,
          addEditRecord: nr,
          saveEditable: Cn,
          newLineRecord: It,
          preEditableKeys: We,
          onValuesChange: At,
          getRealIndex: k.getRealIndex,
        };
      }
    },
    85916: function (ur, pn, m) {
      var Ee = m(82702);
      const oe = (it, de, S) => {
        const He = Ee.useRef({});
        function u(Ie) {
          var Ct;
          if (
            !He.current ||
            He.current.data !== it ||
            He.current.childrenColumnName !== de ||
            He.current.getRowKey !== S
          ) {
            let $e = function (Ge) {
              Ge.forEach((Et, ke) => {
                const fe = S(Et, ke);
                Bt.set(fe, Et),
                  Et && typeof Et == 'object' && de in Et && $e(Et[de] || []);
              });
            };
            const Bt = new Map();
            $e(it),
              (He.current = {
                data: it,
                childrenColumnName: de,
                kvMap: Bt,
                getRowKey: S,
              });
          }
          return (Ct = He.current.kvMap) === null || Ct === void 0
            ? void 0
            : Ct.get(Ie);
        }
        return [u];
      };
      pn.Z = oe;
    },
  },
]);
