'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [354],
  {
    89754: function (Oe, D, n) {
      n.r(D);
      var K = n(53939),
        f = n.n(K),
        S = n(83134),
        b = n.n(S),
        z = n(34827),
        x = n.n(z),
        G = n(50188),
        H = n.n(G),
        N = n(2329),
        p = n(49990),
        g = n(40672),
        V = n(28941),
        Y = n(83035),
        F = n(57285),
        j = n(55454),
        _ = n(56511),
        d = n(33404),
        Q = n(72447),
        M = n(73042),
        u = n(72223),
        $ = n(36704),
        J = n(30311),
        y = n(68620),
        O = n(66952),
        X = n(64401),
        k = n(27809),
        c = n(82702),
        w = n(41227),
        C = n(30989),
        q = n(6568),
        ee = n(66740),
        ne = n(54317),
        te = n(22205),
        se = n(98197),
        ie = n(52417),
        ae = n(35571),
        o = n.n(ae),
        re = n(85652),
        de = n.n(re),
        le = n(24552),
        R = n.n(le),
        oe = n(43482),
        e = n(97616),
        T,
        _e = (0, oe.kc)(function (P) {
          var v = P.prefixCls,
            h = P.css;
          return {
            gradientButton: h(
              T ||
                (T = H()([
                  `
    &.`,
                  '-btn-primary:not([disabled]):not(.',
                  `-btn-dangerous) {
      border-width: 0;
      color: white;
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #ff4d4f, #ff7875);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0.8;
      }
    }
  `,
                ])),
              v,
              v,
            ),
          };
        });
      o().extend(de());
      var A = 'D MMM YYYY, hA',
        U = g.Z.Title,
        s = g.Z.Text,
        I = g.Z.Paragraph,
        ce = function () {
          var v = (0, c.useState)(!1),
            h = x()(v, 2),
            me = h[0],
            L = h[1],
            ue = (0, c.useState)(),
            B = x()(ue, 2),
            t = B[0],
            ve = B[1],
            he = (0, c.useState)(!1),
            Z = x()(he, 2),
            Ee = Z[0],
            W = Z[1],
            m = (0, c.useRef)(null),
            E = (0, p.useParams)(),
            xe = _e(),
            ge = xe.styles;
          (0, c.useEffect)(
            function () {
              var l = (function () {
                var i = b()(
                  f()().mark(function a() {
                    return f()().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                L(!0),
                                (r.prev = 1),
                                (r.t0 = ve),
                                (r.next = 5),
                                new Promise(function (ye) {
                                  setTimeout(function () {
                                    ye({
                                      id: 1,
                                      elderlyCode: 'WL-8829',
                                      aacCode: 'AAC-123162',
                                      name: 'Goh Seok Meng',
                                      address:
                                        'Woodlands Drive 62, #02-144, S623182',
                                      contact: 81234567,
                                      nok: [
                                        {
                                          name: 'David Goh',
                                          relationship: 'Son',
                                          contact: 91234567,
                                        },
                                      ],
                                      notes:
                                        'Goh Seok Meng lives alone on weekdays, can only speak Hokkien, and has difficulty walking. She does not mind having pictures taken.',
                                      languages: ['Hokkien'],
                                      attachments: [],
                                      visits: [
                                        {
                                          datetime: '09-10-2024 20:00',
                                          visitor: {
                                            id: 99,
                                            name: 'David',
                                            role: 'public',
                                          },
                                          location: 'Home',
                                          attachments: [],
                                          notes: 'All good.',
                                        },
                                        {
                                          datetime: '09-08-2024 17:00',
                                          visitor: {
                                            id: 2,
                                            name: 'David Hiong',
                                            role: 'volunteer',
                                          },
                                          location: 'Woodlands Hawker Centre',
                                          attachments: [],
                                          notes:
                                            "Saw auntie at Woodlands Hawker Centre, she's doing well",
                                        },
                                      ],
                                    });
                                  }, 1e3);
                                })
                              );
                            case 5:
                              (r.t1 = r.sent), (0, r.t0)(r.t1), (r.next = 12);
                              break;
                            case 9:
                              (r.prev = 9),
                                (r.t2 = r.catch(1)),
                                V.ZP.error(
                                  'An error occurred when fetching resident data.',
                                );
                            case 12:
                              return (r.prev = 12), L(!1), r.finish(12);
                            case 15:
                            case 'end':
                              return r.stop();
                          }
                      },
                      a,
                      null,
                      [[1, 9, 12, 15]],
                    );
                  }),
                );
                return function () {
                  return i.apply(this, arguments);
                };
              })();
              E.id && l();
            },
            [E.id],
          );
          var je = ''.concat(window.location.origin, '/submit/').concat(E.id),
            Pe = function () {
              W(!0);
            },
            De = function () {
              W(!1);
            },
            fe = function () {
              m.current &&
                R()(m.current).then(function (i) {
                  var a = document.createElement('a');
                  (a.href = i.toDataURL('image/png')),
                    (a.download = 'qr-code.png'),
                    a.click();
                });
            },
            pe = function () {
              m.current &&
                R()(m.current).then(function (i) {
                  var a = window.open('', '_blank');
                  a == null ||
                    a.document.write(
                      '<img src="' +
                        i.toDataURL('image/png') +
                        '" style="width: 100%;"/>',
                    ),
                    a == null || a.document.close(),
                    a == null || a.print();
                });
            },
            Me = function () {
              p.history.push('/submit/'.concat(E.id));
            };
          return (0, e.jsx)(N._z, {
            style: { padding: '8px' },
            children: me
              ? (0, e.jsx)(Y.Z, {
                  active: !0,
                  title: !0,
                  paragraph: { rows: 4 },
                  avatar: !0,
                })
              : (0, e.jsxs)(F.ZP, {
                  button: { className: ge.gradientButton },
                  children: [
                    (0, e.jsxs)(j.Z, {
                      style: { marginBottom: 8 },
                      bodyStyle: { padding: '16px' },
                      children: [
                        (0, e.jsxs)(_.Z, {
                          gutter: [8, 8],
                          align: 'middle',
                          children: [
                            (0, e.jsx)(d.Z, {
                              xs: 8,
                              sm: 6,
                              children: (0, e.jsx)(Q.C, {
                                size: 96,
                                shape: 'square',
                                src:
                                  (t == null ? void 0 : t.attachments[0]) ||
                                  'https://via.placeholder.com/128',
                                alt: 'Elderly Profile Picture',
                              }),
                            }),
                            (0, e.jsx)(d.Z, {
                              xs: 16,
                              sm: 18,
                              children: (0, e.jsxs)(M.Z, {
                                direction: 'vertical',
                                size: 'small',
                                style: { width: '100%' },
                                children: [
                                  (0, e.jsx)(U, {
                                    level: 4,
                                    style: { margin: 0 },
                                    children: 'Elderly Profile',
                                  }),
                                  (0, e.jsxs)(_.Z, {
                                    justify: 'space-between',
                                    children: [
                                      (0, e.jsxs)(d.Z, {
                                        children: [
                                          (0, e.jsx)(s, {
                                            strong: !0,
                                            style: { fontSize: '14px' },
                                            children: 'Elderly Code:',
                                          }),
                                          ' ',
                                          t == null ? void 0 : t.elderlyCode,
                                        ],
                                      }),
                                      (0, e.jsx)(d.Z, {
                                        children: (0, e.jsx)(u.ZP, {
                                          type: 'text',
                                          onClick: Pe,
                                          icon: (0, e.jsx)(w.Z, {
                                            style: { fontSize: '24px' },
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)(_.Z, {
                                    children: (0, e.jsxs)(d.Z, {
                                      children: [
                                        (0, e.jsx)(s, {
                                          strong: !0,
                                          style: { fontSize: '14px' },
                                          children: 'AAC Code:',
                                        }),
                                        ' ',
                                        t == null ? void 0 : t.aacCode,
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)($.Z, { style: { margin: '16px 0' } }),
                        (0, e.jsxs)(_.Z, {
                          gutter: [4, 4],
                          children: [
                            (0, e.jsxs)(d.Z, {
                              xs: 24,
                              sm: 12,
                              children: [
                                (0, e.jsx)(s, {
                                  strong: !0,
                                  style: { fontSize: '14px' },
                                  children: 'Name:',
                                }),
                                ' ',
                                (0, e.jsx)(s, {
                                  children: t == null ? void 0 : t.name,
                                }),
                              ],
                            }),
                            (0, e.jsxs)(d.Z, {
                              xs: 24,
                              sm: 12,
                              children: [
                                (0, e.jsx)(s, {
                                  strong: !0,
                                  style: { fontSize: '14px' },
                                  children: 'Contact:',
                                }),
                                ' ',
                                (0, e.jsxs)(s, {
                                  children: [
                                    t == null ? void 0 : t.contact,
                                    ' ',
                                    (0, e.jsx)(C.Z, {}),
                                  ],
                                }),
                              ],
                            }),
                            t == null
                              ? void 0
                              : t.nok.map(function (l, i) {
                                  return (0,
                                  e.jsxs)(d.Z, { xs: 24, sm: 12, children: [(0, e.jsxs)(s, { strong: !0, style: { fontSize: '14px' }, children: ['NOK (', l.relationship, '):'] }), ' ', (0, e.jsxs)(s, { children: [l.name, ', ', l.contact, ' ', (0, e.jsx)(C.Z, {})] })] }, i);
                                }),
                            (0, e.jsxs)(d.Z, {
                              xs: 24,
                              sm: 12,
                              children: [
                                (0, e.jsx)(s, {
                                  strong: !0,
                                  style: { fontSize: '14px' },
                                  children: 'Address:',
                                }),
                                ' ',
                                (0, e.jsx)(s, {
                                  children: t == null ? void 0 : t.address,
                                }),
                              ],
                            }),
                            (0, e.jsxs)(d.Z, {
                              xs: 24,
                              sm: 12,
                              children: [
                                (0, e.jsx)(s, {
                                  strong: !0,
                                  style: { fontSize: '14px' },
                                  children: 'Notes:',
                                }),
                                ' ',
                                (0, e.jsx)(I, {
                                  ellipsis: {
                                    rows: 2,
                                    expandable: !0,
                                    symbol: 'more',
                                  },
                                  children: t == null ? void 0 : t.notes,
                                }),
                              ],
                            }),
                            (0, e.jsxs)(d.Z, {
                              xs: 24,
                              sm: 12,
                              children: [
                                (0, e.jsx)(s, {
                                  strong: !0,
                                  style: { fontSize: '14px' },
                                  children: 'Attachments:',
                                }),
                                ' ',
                                (0, e.jsx)(s, {
                                  children:
                                    (t == null
                                      ? void 0
                                      : t.attachments.length) > 0
                                      ? 'Available'
                                      : 'None',
                                }),
                              ],
                            }),
                            (0, e.jsx)(d.Z, {
                              xs: 24,
                              sm: 12,
                              children: (0, e.jsxs)(J.Z, {
                                justify: 'space-between',
                                children: [
                                  (0, e.jsxs)('div', {
                                    children: [
                                      (0, e.jsx)(s, {
                                        strong: !0,
                                        style: { fontSize: '14px' },
                                        children: 'Last Visit:',
                                      }),
                                      t != null &&
                                      t.visits &&
                                      t.visits.length > 0
                                        ? (0, e.jsxs)(e.Fragment, {
                                            children: [
                                              (0, e.jsx)('br', {}),
                                              (0, e.jsx)(s, {
                                                children: o()(
                                                  t.visits[0].datetime,
                                                ).format(A),
                                              }),
                                              ' ',
                                              (0, e.jsx)('br', {}),
                                              'By ',
                                              t.visits[0].visitor.name,
                                              ' (',
                                              (0, e.jsx)(s, {
                                                type: 'secondary',
                                                children:
                                                  t.visits[0].visitor.role,
                                              }),
                                              ') ',
                                              (0, e.jsx)('br', {}),
                                              (0, e.jsxs)(s, {
                                                style: { color: 'green' },
                                                children: [
                                                  o()().diff(
                                                    o()(t.visits[0].datetime),
                                                    'days',
                                                  ),
                                                  ' days ago',
                                                ],
                                              }),
                                            ],
                                          })
                                        : (0, e.jsx)(s, {
                                            children: 'No visits',
                                          }),
                                    ],
                                  }),
                                  (0, e.jsx)(u.ZP, {
                                    type: 'primary',
                                    icon: (0, e.jsx)(q.Z, {}),
                                    onClick: Me,
                                    style: {
                                      marginTop: '24px',
                                      paddingTop: '20px',
                                      paddingBottom: '20px',
                                    },
                                    children: 'Submit Info',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(j.Z, {
                      style: { marginTop: 8 },
                      bodyStyle: { padding: '16px' },
                      children: [
                        (0, e.jsx)(U, {
                          level: 4,
                          style: { marginBottom: 8 },
                          children: 'Recent Visits',
                        }),
                        (0, e.jsx)(y.Z, {
                          itemLayout: 'vertical',
                          dataSource: (t == null ? void 0 : t.visits) || [],
                          renderItem: function (i) {
                            return (0, e.jsx)(y.Z.Item, {
                              style: { padding: '8px' },
                              children: (0, e.jsx)(j.Z, {
                                bordered: !1,
                                style: { backgroundColor: '#f9f9f9' },
                                bodyStyle: { padding: '8px' },
                                children: (0, e.jsxs)(_.Z, {
                                  gutter: [8, 8],
                                  children: [
                                    (0, e.jsx)(d.Z, {
                                      xs: 8,
                                      sm: 6,
                                      children:
                                        i.attachments &&
                                        i.attachments.length > 0
                                          ? (0, e.jsx)(O.Z, {
                                              width: 64,
                                              height: 48,
                                              src: i.attachments[0],
                                              alt: 'Visit image',
                                              style: { borderRadius: '4px' },
                                            })
                                          : (0, e.jsx)(O.Z, {
                                              width: 64,
                                              height: 48,
                                              src: 'https://via.placeholder.com/64x48?text=No+Image',
                                              alt: 'Placeholder',
                                              style: { borderRadius: '4px' },
                                            }),
                                    }),
                                    (0, e.jsx)(d.Z, {
                                      xs: 16,
                                      sm: 18,
                                      children: (0, e.jsxs)(M.Z, {
                                        direction: 'vertical',
                                        size: 'small',
                                        children: [
                                          (0, e.jsx)(s, {
                                            style: { fontSize: '14px' },
                                            children: i.notes,
                                          }),
                                          (0, e.jsxs)(s, {
                                            style: { fontSize: '14px' },
                                            children: [
                                              (0, e.jsx)(ee.Z, {}),
                                              ' ',
                                              i.visitor.name,
                                              ', ',
                                              (0, e.jsx)(s, {
                                                type: 'secondary',
                                                children: i.visitor.role,
                                              }),
                                            ],
                                          }),
                                          (0, e.jsxs)(s, {
                                            style: { fontSize: '14px' },
                                            children: [
                                              (0, e.jsx)(ne.Z, {}),
                                              ' ',
                                              o()(i.datetime).format(A),
                                              ' (',
                                              o()().diff(
                                                o()(i.datetime),
                                                'days',
                                              ),
                                              ' days ago)',
                                            ],
                                          }),
                                          (0, e.jsxs)(s, {
                                            style: { fontSize: '14px' },
                                            children: [
                                              (0, e.jsx)(te.Z, {}),
                                              ' ',
                                              i.location,
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            });
                          },
                        }),
                      ],
                    }),
                    (0, e.jsxs)(X.Z, {
                      title: 'QR Code',
                      open: Ee,
                      onCancel: De,
                      footer: [
                        (0, e.jsx)(
                          u.ZP,
                          {
                            icon: (0, e.jsx)(se.Z, {}),
                            onClick: pe,
                            children: 'Print',
                          },
                          'print',
                        ),
                        (0, e.jsx)(
                          u.ZP,
                          {
                            type: 'primary',
                            icon: (0, e.jsx)(ie.Z, {}),
                            onClick: fe,
                            children: 'Save as Image',
                          },
                          'save',
                        ),
                      ],
                      children: [
                        (0, e.jsx)('div', {
                          ref: m,
                          style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '16px',
                          },
                          children: (0, e.jsx)(k.Z, {
                            value: je,
                            size: 180,
                            errorLevel: 'H',
                          }),
                        }),
                        (0, e.jsxs)(I, {
                          style: { textAlign: 'center' },
                          children: [
                            'Elderly Code: ',
                            t == null ? void 0 : t.elderlyCode,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          });
        };
      D.default = ce;
    },
  },
]);
