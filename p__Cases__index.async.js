'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [877],
  {
    38597: function (Re, N, a) {
      a.r(N),
        a.d(N, {
          default: function () {
            return xe;
          },
        });
      var b = {};
      a.r(b),
        a.d(b, {
          addUser: function () {
            return re;
          },
          deleteUser: function () {
            return te;
          },
          getUserDetail: function () {
            return ne;
          },
          modifyUser: function () {
            return ae;
          },
          queryUserList: function () {
            return ee;
          },
        });
      var Q = a(34827),
        S = a.n(Q),
        X = a(53939),
        l = a.n(X),
        q = a(78095),
        v = a.n(q),
        _ = a(83134),
        f = a.n(_),
        w = a(49990);
      function ee(i, e) {
        return T.apply(this, arguments);
      }
      function T() {
        return (
          (T = f()(
            l()().mark(function i(e, t) {
              return l()().wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return s.abrupt(
                        'return',
                        (0, w.request)(
                          '/api/v1/queryUserList',
                          v()({ method: 'GET', params: v()({}, e) }, t || {}),
                        ),
                      );
                    case 1:
                    case 'end':
                      return s.stop();
                  }
              }, i);
            }),
          )),
          T.apply(this, arguments)
        );
      }
      function re(i, e) {
        return B.apply(this, arguments);
      }
      function B() {
        return (
          (B = f()(
            l()().mark(function i(e, t) {
              return l()().wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return s.abrupt(
                        'return',
                        (0, w.request)(
                          '/api/v1/user',
                          v()(
                            {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              data: e,
                            },
                            t || {},
                          ),
                        ),
                      );
                    case 1:
                    case 'end':
                      return s.stop();
                  }
              }, i);
            }),
          )),
          B.apply(this, arguments)
        );
      }
      function ne(i, e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (
          (R = f()(
            l()().mark(function i(e, t) {
              var u;
              return l()().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (u = e.userId),
                        r.abrupt(
                          'return',
                          (0, w.request)(
                            '/api/v1/user/'.concat(u),
                            v()({ method: 'GET', params: v()({}, e) }, t || {}),
                          ),
                        )
                      );
                    case 2:
                    case 'end':
                      return r.stop();
                  }
              }, i);
            }),
          )),
          R.apply(this, arguments)
        );
      }
      function ae(i, e, t) {
        return $.apply(this, arguments);
      }
      function $() {
        return (
          ($ = f()(
            l()().mark(function i(e, t, u) {
              var s;
              return l()().wrap(function (d) {
                for (;;)
                  switch ((d.prev = d.next)) {
                    case 0:
                      return (
                        (s = e.userId),
                        d.abrupt(
                          'return',
                          (0, w.request)(
                            '/api/v1/user/'.concat(s),
                            v()(
                              {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                params: v()({}, e),
                                data: t,
                              },
                              u || {},
                            ),
                          ),
                        )
                      );
                    case 2:
                    case 'end':
                      return d.stop();
                  }
              }, i);
            }),
          )),
          $.apply(this, arguments)
        );
      }
      function te(i, e) {
        return P.apply(this, arguments);
      }
      function P() {
        return (
          (P = f()(
            l()().mark(function i(e, t) {
              var u;
              return l()().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (u = e.userId),
                        r.abrupt(
                          'return',
                          (0, w.request)(
                            '/api/v1/user/'.concat(u),
                            v()(
                              { method: 'DELETE', params: v()({}, e) },
                              t || {},
                            ),
                          ),
                        )
                      );
                    case 2:
                    case 'end':
                      return r.stop();
                  }
              }, i);
            }),
          )),
          P.apply(this, arguments)
        );
      }
      var ue = { UserController: b },
        se = a(2329),
        z = a(91446),
        le = a(69294),
        ie = a(45058),
        y = a(28941),
        de = a(36704),
        L = a(72223),
        oe = a(41003),
        g = a(82702),
        K = a(64401),
        n = a(97616),
        ce = function (e) {
          var t = e.modalVisible,
            u = e.onCancel;
          return (0, n.jsx)(K.Z, {
            destroyOnClose: !0,
            title: '\u65B0\u5EFA',
            width: 420,
            open: t,
            onCancel: function () {
              return u();
            },
            footer: null,
            children: e.children,
          });
        },
        me = ce,
        Z = a(94883),
        pe = a(87918),
        fe = a(97024),
        V = a(70372),
        ve = a(81898),
        he = a(64576),
        Ce = function (e) {
          return (0, n.jsxs)(Z.L0, {
            stepsProps: { size: 'small' },
            stepsFormRender: function (u, s) {
              return (0, n.jsx)(K.Z, {
                width: 640,
                bodyStyle: { padding: '32px 40px 48px' },
                destroyOnClose: !0,
                title: '\u89C4\u5219\u914D\u7F6E',
                open: e.updateModalVisible,
                footer: s,
                onCancel: function () {
                  return e.onCancel();
                },
                children: u,
              });
            },
            onFinish: e.onSubmit,
            children: [
              (0, n.jsxs)(Z.L0.StepForm, {
                initialValues: { name: e.values.name },
                title: '\u57FA\u672C\u4FE1\u606F',
                children: [
                  (0, n.jsx)(pe.Z, {
                    width: 'md',
                    name: 'name',
                    label: '\u89C4\u5219\u540D\u79F0',
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01',
                      },
                    ],
                  }),
                  (0, n.jsx)(fe.Z, {
                    name: 'desc',
                    width: 'md',
                    label: '\u89C4\u5219\u63CF\u8FF0',
                    placeholder:
                      '\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26',
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01',
                        min: 5,
                      },
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(Z.L0.StepForm, {
                initialValues: { target: '0', template: '0' },
                title: '\u914D\u7F6E\u89C4\u5219\u5C5E\u6027',
                children: [
                  (0, n.jsx)(V.Z, {
                    width: 'md',
                    name: 'target',
                    label: '\u76D1\u63A7\u5BF9\u8C61',
                    valueEnum: { 0: '\u8868\u4E00', 1: '\u8868\u4E8C' },
                  }),
                  (0, n.jsx)(V.Z, {
                    width: 'md',
                    name: 'template',
                    label: '\u89C4\u5219\u6A21\u677F',
                    valueEnum: {
                      0: '\u89C4\u5219\u6A21\u677F\u4E00',
                      1: '\u89C4\u5219\u6A21\u677F\u4E8C',
                    },
                  }),
                  (0, n.jsx)(ve.Z.Group, {
                    name: 'type',
                    width: 'md',
                    label: '\u89C4\u5219\u7C7B\u578B',
                    options: [
                      { value: '0', label: '\u5F3A' },
                      { value: '1', label: '\u5F31' },
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(Z.L0.StepForm, {
                initialValues: { type: '1', frequency: 'month' },
                title: '\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F',
                children: [
                  (0, n.jsx)(he.Z, {
                    name: 'time',
                    label: '\u5F00\u59CB\u65F6\u95F4',
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01',
                      },
                    ],
                  }),
                  (0, n.jsx)(V.Z, {
                    name: 'frequency',
                    label: '\u76D1\u63A7\u5BF9\u8C61',
                    width: 'xs',
                    valueEnum: { month: '\u6708', week: '\u5468' },
                  }),
                ],
              }),
            ],
          });
        },
        ye = Ce,
        x = ue.UserController,
        Fe = x.addUser,
        ge = x.queryUserList,
        je = x.deleteUser,
        Ue = x.modifyUser,
        Se = (function () {
          var i = f()(
            l()().mark(function e(t) {
              var u;
              return l()().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (u = y.ZP.loading('\u6B63\u5728\u6DFB\u52A0')),
                          (r.prev = 1),
                          (r.next = 4),
                          Fe(v()({}, t))
                        );
                      case 4:
                        return (
                          u(),
                          y.ZP.success('\u6DFB\u52A0\u6210\u529F'),
                          r.abrupt('return', !0)
                        );
                      case 9:
                        return (
                          (r.prev = 9),
                          (r.t0 = r.catch(1)),
                          u(),
                          y.ZP.error(
                            '\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01',
                          ),
                          r.abrupt('return', !1)
                        );
                      case 14:
                      case 'end':
                        return r.stop();
                    }
                },
                e,
                null,
                [[1, 9]],
              );
            }),
          );
          return function (t) {
            return i.apply(this, arguments);
          };
        })(),
        we = (function () {
          var i = f()(
            l()().mark(function e(t) {
              var u;
              return l()().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (u = y.ZP.loading('\u6B63\u5728\u914D\u7F6E')),
                          (r.prev = 1),
                          (r.next = 4),
                          Ue(
                            { userId: t.id || '' },
                            {
                              name: t.name || '',
                              nickName: t.nickName || '',
                              email: t.email || '',
                            },
                          )
                        );
                      case 4:
                        return (
                          u(),
                          y.ZP.success('\u914D\u7F6E\u6210\u529F'),
                          r.abrupt('return', !0)
                        );
                      case 9:
                        return (
                          (r.prev = 9),
                          (r.t0 = r.catch(1)),
                          u(),
                          y.ZP.error(
                            '\u914D\u7F6E\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01',
                          ),
                          r.abrupt('return', !1)
                        );
                      case 14:
                      case 'end':
                        return r.stop();
                    }
                },
                e,
                null,
                [[1, 9]],
              );
            }),
          );
          return function (t) {
            return i.apply(this, arguments);
          };
        })(),
        Ee = (function () {
          var i = f()(
            l()().mark(function e(t) {
              var u, s;
              return l()().wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (
                          ((u = y.ZP.loading('\u6B63\u5728\u5220\u9664')), t)
                        ) {
                          d.next = 3;
                          break;
                        }
                        return d.abrupt('return', !0);
                      case 3:
                        return (
                          (d.prev = 3),
                          (d.next = 6),
                          je({
                            userId:
                              ((s = t.find(function (D) {
                                return D.id;
                              })) === null || s === void 0
                                ? void 0
                                : s.id) || '',
                          })
                        );
                      case 6:
                        return (
                          u(),
                          y.ZP.success(
                            '\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0',
                          ),
                          d.abrupt('return', !0)
                        );
                      case 11:
                        return (
                          (d.prev = 11),
                          (d.t0 = d.catch(3)),
                          u(),
                          y.ZP.error(
                            '\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
                          ),
                          d.abrupt('return', !1)
                        );
                      case 16:
                      case 'end':
                        return d.stop();
                    }
                },
                e,
                null,
                [[3, 11]],
              );
            }),
          );
          return function (t) {
            return i.apply(this, arguments);
          };
        })(),
        Ze = function () {
          var e = (0, g.useState)(!1),
            t = S()(e, 2),
            u = t[0],
            s = t[1],
            r = (0, g.useState)(!1),
            d = S()(r, 2),
            D = d[0],
            I = d[1],
            Ae = (0, g.useState)({}),
            W = S()(Ae, 2),
            M = W[0],
            G = W[1],
            j = (0, g.useRef)(),
            be = (0, g.useState)(),
            k = S()(be, 2),
            h = k[0],
            Te = k[1],
            Be = (0, g.useState)([]),
            Y = S()(Be, 2),
            E = Y[0],
            H = Y[1],
            O = [
              {
                title: '\u540D\u79F0',
                dataIndex: 'name',
                tip: '\u540D\u79F0\u662F\u552F\u4E00\u7684 key',
                formItemProps: {
                  rules: [
                    {
                      required: !0,
                      message: '\u540D\u79F0\u4E3A\u5FC5\u586B\u9879',
                    },
                  ],
                },
              },
              {
                title: '\u6635\u79F0',
                dataIndex: 'nickName',
                valueType: 'text',
              },
              {
                title: '\u6027\u522B',
                dataIndex: 'gender',
                hideInForm: !0,
                valueEnum: {
                  0: { text: '\u7537', status: 'MALE' },
                  1: { text: '\u5973', status: 'FEMALE' },
                },
              },
              {
                title: '\u64CD\u4F5C',
                dataIndex: 'option',
                valueType: 'option',
                render: function (c, o) {
                  return (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)('a', {
                        onClick: function () {
                          I(!0), G(o);
                        },
                        children: '\u914D\u7F6E',
                      }),
                      (0, n.jsx)(de.Z, { type: 'vertical' }),
                      (0, n.jsx)('a', {
                        href: '',
                        children: '\u8BA2\u9605\u8B66\u62A5',
                      }),
                    ],
                  });
                },
              },
            ];
          return (0, n.jsxs)(se._z, {
            header: { title: 'CRUD \u793A\u4F8B' },
            children: [
              (0, n.jsx)(z.Z, {
                headerTitle: '\u67E5\u8BE2\u8868\u683C',
                actionRef: j,
                rowKey: 'id',
                search: { labelWidth: 120 },
                toolBarRender: function () {
                  return [
                    (0, n.jsx)(
                      L.ZP,
                      {
                        type: 'primary',
                        onClick: function () {
                          return s(!0);
                        },
                        children: '\u65B0\u5EFA',
                      },
                      '1',
                    ),
                  ];
                },
                request: (function () {
                  var m = f()(
                    l()().mark(function c(o, C, F) {
                      var p, A, J;
                      return l()().wrap(function (U) {
                        for (;;)
                          switch ((U.prev = U.next)) {
                            case 0:
                              return (
                                (U.next = 2),
                                ge(
                                  v()(v()({}, o), {}, { sorter: C, filter: F }),
                                )
                              );
                            case 2:
                              return (
                                (p = U.sent),
                                (A = p.data),
                                (J = p.success),
                                U.abrupt('return', {
                                  data: (A == null ? void 0 : A.list) || [],
                                  success: J,
                                })
                              );
                            case 6:
                            case 'end':
                              return U.stop();
                          }
                      }, c);
                    }),
                  );
                  return function (c, o, C) {
                    return m.apply(this, arguments);
                  };
                })(),
                columns: O,
                rowSelection: {
                  onChange: function (c, o) {
                    return H(o);
                  },
                },
              }),
              (E == null ? void 0 : E.length) > 0 &&
                (0, n.jsxs)(le.S, {
                  extra: (0, n.jsxs)('div', {
                    children: [
                      '\u5DF2\u9009\u62E9',
                      ' ',
                      (0, n.jsx)('a', {
                        style: { fontWeight: 600 },
                        children: E.length,
                      }),
                      ' ',
                      '\u9879\xA0\xA0',
                    ],
                  }),
                  children: [
                    (0, n.jsx)(L.ZP, {
                      onClick: f()(
                        l()().mark(function m() {
                          var c, o;
                          return l()().wrap(function (F) {
                            for (;;)
                              switch ((F.prev = F.next)) {
                                case 0:
                                  return (F.next = 2), Ee(E);
                                case 2:
                                  H([]),
                                    (c = j.current) === null ||
                                      c === void 0 ||
                                      (o = c.reloadAndRest) === null ||
                                      o === void 0 ||
                                      o.call(c);
                                case 4:
                                case 'end':
                                  return F.stop();
                              }
                          }, m);
                        }),
                      ),
                      children: '\u6279\u91CF\u5220\u9664',
                    }),
                    (0, n.jsx)(L.ZP, {
                      type: 'primary',
                      children: '\u6279\u91CF\u5BA1\u6279',
                    }),
                  ],
                }),
              (0, n.jsx)(me, {
                onCancel: function () {
                  return s(!1);
                },
                modalVisible: u,
                children: (0, n.jsx)(z.Z, {
                  onSubmit: (function () {
                    var m = f()(
                      l()().mark(function c(o) {
                        var C;
                        return l()().wrap(function (p) {
                          for (;;)
                            switch ((p.prev = p.next)) {
                              case 0:
                                return (p.next = 2), Se(o);
                              case 2:
                                (C = p.sent),
                                  C && (s(!1), j.current && j.current.reload());
                              case 4:
                              case 'end':
                                return p.stop();
                            }
                        }, c);
                      }),
                    );
                    return function (c) {
                      return m.apply(this, arguments);
                    };
                  })(),
                  rowKey: 'id',
                  type: 'form',
                  columns: O,
                }),
              }),
              M && Object.keys(M).length
                ? (0, n.jsx)(ye, {
                    onSubmit: (function () {
                      var m = f()(
                        l()().mark(function c(o) {
                          var C;
                          return l()().wrap(function (p) {
                            for (;;)
                              switch ((p.prev = p.next)) {
                                case 0:
                                  return (p.next = 2), we(o);
                                case 2:
                                  (C = p.sent),
                                    C &&
                                      (I(!1),
                                      G({}),
                                      j.current && j.current.reload());
                                case 4:
                                case 'end':
                                  return p.stop();
                              }
                          }, c);
                        }),
                      );
                      return function (c) {
                        return m.apply(this, arguments);
                      };
                    })(),
                    onCancel: function () {
                      I(!1), G({});
                    },
                    updateModalVisible: D,
                    values: M,
                  })
                : null,
              (0, n.jsx)(oe.Z, {
                width: 600,
                open: !!h,
                onClose: function () {
                  Te(void 0);
                },
                closable: !1,
                children:
                  (h == null ? void 0 : h.name) &&
                  (0, n.jsx)(ie.vY, {
                    column: 2,
                    title: h == null ? void 0 : h.name,
                    request: f()(
                      l()().mark(function m() {
                        return l()().wrap(function (o) {
                          for (;;)
                            switch ((o.prev = o.next)) {
                              case 0:
                                return o.abrupt('return', { data: h || {} });
                              case 1:
                              case 'end':
                                return o.stop();
                            }
                        }, m);
                      }),
                    ),
                    params: { id: h == null ? void 0 : h.name },
                    columns: O,
                  }),
              }),
            ],
          });
        },
        xe = Ze;
    },
  },
]);
