import { resolveComponent, resolveDirective, withCtx, createTextVNode, toDisplayString, mergeProps, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, TransitionGroup, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _export_sfc } from "../app2.mjs";
import "axios";
import "quasar";
import "vue-router";
const category_vue_vue_type_style_index_0_scoped_34503bb8_lang = "";
const _sfc_main = {
  name: "category.vue",
  data() {
    return {
      stars: 4,
      class_val: "shadow-1 my-card",
      filters_list: [
        {
          "label": "Discount",
          "items": [
            {
              "Product": false,
              "count": 51,
              "label": "50% or more",
              "model": "Product"
            },
            {
              "Product": false,
              "count": 3,
              "label": "40% or more",
              "model": "Product"
            },
            {
              "Product": false,
              "count": 41,
              "label": "30% or more",
              "model": "Product"
            },
            {
              "Product": false,
              "count": 16,
              "label": "20% or more",
              "model": "Product"
            },
            {
              "Product": false,
              "count": 16,
              "label": "10% or more",
              "model": "Product"
            }
          ]
        },
        {
          "label": "Sleeve",
          "items": [
            {
              "Period": false,
              "count": 51,
              "label": "3/4 Sleeve",
              "model": "Period"
            },
            {
              "Period": false,
              "count": 3,
              "label": "Full Sleeve",
              "model": "Period"
            },
            {
              "Period": false,
              "count": 23,
              "label": "Half Sleeve",
              "model": "Period"
            },
            {
              "Period": false,
              "count": 65,
              "label": "Short Sleeve",
              "model": "Period"
            }
          ]
        },
        {
          "label": "Size",
          "items": [
            {
              "AssetType": false,
              "count": 51,
              "label": "XXS",
              "model": "AssetType"
            },
            {
              "AssetType": false,
              "count": 3,
              "label": "XS",
              "model": "AssetType"
            },
            {
              "AssetType": false,
              "count": 23,
              "label": "S",
              "model": "AssetType"
            },
            {
              "AssetType": false,
              "count": 65,
              "label": "M",
              "model": "AssetType"
            },
            {
              "AssetType": false,
              "count": 35,
              "label": "L",
              "model": "AssetType"
            },
            {
              "AssetType": false,
              "count": 23,
              "label": "XL",
              "model": "AssetType"
            },
            {
              "AssetType": false,
              "count": 12,
              "label": "XXL",
              "model": "AssetType"
            }
          ]
        }
      ]
    };
  },
  computed: {
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_q_card = resolveComponent("q-card");
  const _component_q_list = resolveComponent("q-list");
  const _component_q_item_label = resolveComponent("q-item-label");
  const _component_q_item = resolveComponent("q-item");
  const _component_q_item_section = resolveComponent("q-item-section");
  const _component_q_checkbox = resolveComponent("q-checkbox");
  const _component_q_img = resolveComponent("q-img");
  const _component_q_card_section = resolveComponent("q-card-section");
  const _component_q_rating = resolveComponent("q-rating");
  const _component_q_separator = resolveComponent("q-separator");
  const _component_q_card_actions = resolveComponent("q-card-actions");
  const _component_q_btn = resolveComponent("q-btn");
  const _directive_ripple = resolveDirective("ripple");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-34503bb8><div class="row bg-white q-mt-sm" data-v-34503bb8><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="${ssrRenderStyle({ "border-right": "1px solid lightgrey" })}" data-v-34503bb8>`);
  _push(ssrRenderComponent(_component_q_card, { class: "q-mr-sm no-shadow" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.filters_list, (item) => {
          _push2(ssrRenderComponent(_component_q_list, {
            key: item.label
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_q_item_label, {
                  class: "text-weight-bolder text-grey-9 q-pt-md q-pb-sm",
                  header: ""
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(item.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`<!--[-->`);
                ssrRenderList(item.items, (it) => {
                  _push3(ssrRenderComponent(_component_q_item, mergeProps({
                    class: "q-pa-none",
                    key: it.model,
                    tag: "label",
                    dense: ""
                  }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_section, {
                          side: "",
                          class: "q-px-md text-caption"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_q_checkbox, {
                                onInput: ($event) => (_ctx.searched_results = [], _ctx.show_load_more = false, _ctx.log_offset = 0, _ctx.do_search()),
                                dense: "",
                                modelValue: it[it.model],
                                "onUpdate:modelValue": ($event) => it[it.model] = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(it.label)}(${ssrInterpolate(it.count)}) `);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(it.label) + "(" + toDisplayString(it.count) + ") ", 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_q_checkbox, {
                                  onInput: ($event) => (_ctx.searched_results = [], _ctx.show_load_more = false, _ctx.log_offset = 0, _ctx.do_search()),
                                  dense: "",
                                  modelValue: it[it.model],
                                  "onUpdate:modelValue": ($event) => it[it.model] = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(it.label) + "(" + toDisplayString(it.count) + ") ", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onInput", "modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_section, {
                            side: "",
                            class: "q-px-md text-caption"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_checkbox, {
                                onInput: ($event) => (_ctx.searched_results = [], _ctx.show_load_more = false, _ctx.log_offset = 0, _ctx.do_search()),
                                dense: "",
                                modelValue: it[it.model],
                                "onUpdate:modelValue": ($event) => it[it.model] = $event
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(it.label) + "(" + toDisplayString(it.count) + ") ", 1)
                                ]),
                                _: 2
                              }, 1032, ["onInput", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
                _push3(ssrRenderComponent(_component_q_item, {
                  class: "q-py-none text-weight-bold text-indigo text-caption cursor-pointer",
                  style: { "min-height": "10px" }
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` View All `);
                    } else {
                      return [
                        createTextVNode(" View All ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_q_item_label, {
                    class: "text-weight-bolder text-grey-9 q-pt-md q-pb-sm",
                    header: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1024),
                  (openBlock(true), createBlock(Fragment, null, renderList(item.items, (it) => {
                    return withDirectives((openBlock(), createBlock(_component_q_item, {
                      class: "q-pa-none",
                      key: it.model,
                      tag: "label",
                      dense: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_section, {
                          side: "",
                          class: "q-px-md text-caption"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_checkbox, {
                              onInput: ($event) => (_ctx.searched_results = [], _ctx.show_load_more = false, _ctx.log_offset = 0, _ctx.do_search()),
                              dense: "",
                              modelValue: it[it.model],
                              "onUpdate:modelValue": ($event) => it[it.model] = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(it.label) + "(" + toDisplayString(it.count) + ") ", 1)
                              ]),
                              _: 2
                            }, 1032, ["onInput", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)), [
                      [_directive_ripple]
                    ]);
                  }), 128)),
                  createVNode(_component_q_item, {
                    class: "q-py-none text-weight-bold text-indigo text-caption cursor-pointer",
                    style: { "min-height": "10px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" View All ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode(TransitionGroup, {
            appear: "",
            "enter-active-class": "animated fadeInLeft"
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.filters_list, (item) => {
                return openBlock(), createBlock(_component_q_list, {
                  key: item.label
                }, {
                  default: withCtx(() => [
                    createVNode(_component_q_item_label, {
                      class: "text-weight-bolder text-grey-9 q-pt-md q-pb-sm",
                      header: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1024),
                    (openBlock(true), createBlock(Fragment, null, renderList(item.items, (it) => {
                      return withDirectives((openBlock(), createBlock(_component_q_item, {
                        class: "q-pa-none",
                        key: it.model,
                        tag: "label",
                        dense: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, {
                            side: "",
                            class: "q-px-md text-caption"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_checkbox, {
                                onInput: ($event) => (_ctx.searched_results = [], _ctx.show_load_more = false, _ctx.log_offset = 0, _ctx.do_search()),
                                dense: "",
                                modelValue: it[it.model],
                                "onUpdate:modelValue": ($event) => it[it.model] = $event
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(it.label) + "(" + toDisplayString(it.count) + ") ", 1)
                                ]),
                                _: 2
                              }, 1032, ["onInput", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)), [
                        [_directive_ripple]
                      ]);
                    }), 128)),
                    createVNode(_component_q_item, {
                      class: "q-py-none text-weight-bold text-indigo text-caption cursor-pointer",
                      style: { "min-height": "10px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" View All ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-10 col-md-10 col-sm-12 col-xs-12" data-v-34503bb8><div class="q-pa-md row items-start q-gutter-md" data-v-34503bb8>`);
  _push(ssrRenderComponent(_component_q_card, {
    onClick: ($event) => _ctx.$router.push("/details"),
    class: ["cursor-pointer", $data.class_val],
    onMouseover: ($event) => $data.class_val = "my-card shadow-20",
    onMouseleave: ($event) => $data.class_val = "my-card shadow-"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_img, { src: "https://miipublications.com.my/wp-content/uploads/2019/10/shop-online-760x490.jpg" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_card_section, { class: "q-pb-xs q-pt-md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="row no-wrap items-center" data-v-34503bb8${_scopeId2}><div class="col text-subtitle2 ellipsis-2-lines text-grey-10" data-v-34503bb8${_scopeId2}> Benling C200-BLK Smartwatch (Black Strap Free Size) </div><div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center" data-v-34503bb8${_scopeId2}></div></div>`);
              _push3(ssrRenderComponent(_component_q_rating, {
                modelValue: $data.stars,
                "onUpdate:modelValue": ($event) => $data.stars = $event,
                color: "orange",
                max: 5,
                readonly: "",
                size: "17px"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("div", { class: "row no-wrap items-center" }, [
                  createVNode("div", { class: "col text-subtitle2 ellipsis-2-lines text-grey-10" }, " Benling C200-BLK Smartwatch (Black Strap Free Size) "),
                  createVNode("div", { class: "col-auto text-grey text-caption q-pt-md row no-wrap items-center" })
                ]),
                createVNode(_component_q_rating, {
                  modelValue: $data.stars,
                  "onUpdate:modelValue": ($event) => $data.stars = $event,
                  color: "orange",
                  max: 5,
                  readonly: "",
                  size: "17px"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_card_section, { class: "q-py-sm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-34503bb8${_scopeId2}><div class="text-caption text-green-8 text-weight-bolder" data-v-34503bb8${_scopeId2}>Special Price</div><span class="text-h6" data-v-34503bb8${_scopeId2}>₹3,149</span><span class="q-ml-sm text-grey-6" style="${ssrRenderStyle({ "text-decoration": "line-through" })}" data-v-34503bb8${_scopeId2}>₹3,699</span><span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md" data-v-34503bb8${_scopeId2}>20% off</span></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "text-caption text-green-8 text-weight-bolder" }, "Special Price"),
                  createVNode("span", { class: "text-h6" }, "₹3,149"),
                  createVNode("span", {
                    class: "q-ml-sm text-grey-6",
                    style: { "text-decoration": "line-through" }
                  }, "₹3,699"),
                  createVNode("span", { class: "q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md" }, "20% off")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_separator, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_card_actions, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_q_btn, {
                flat: "",
                class: "text-weight-bold text-capitalize",
                dense: "",
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` View details `);
                  } else {
                    return [
                      createTextVNode(" View details ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_q_btn, {
                  flat: "",
                  class: "text-weight-bold text-capitalize",
                  dense: "",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View details ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_img, { src: "https://miipublications.com.my/wp-content/uploads/2019/10/shop-online-760x490.jpg" }),
          createVNode(_component_q_card_section, { class: "q-pb-xs q-pt-md" }, {
            default: withCtx(() => [
              createVNode("div", { class: "row no-wrap items-center" }, [
                createVNode("div", { class: "col text-subtitle2 ellipsis-2-lines text-grey-10" }, " Benling C200-BLK Smartwatch (Black Strap Free Size) "),
                createVNode("div", { class: "col-auto text-grey text-caption q-pt-md row no-wrap items-center" })
              ]),
              createVNode(_component_q_rating, {
                modelValue: $data.stars,
                "onUpdate:modelValue": ($event) => $data.stars = $event,
                color: "orange",
                max: 5,
                readonly: "",
                size: "17px"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_q_card_section, { class: "q-py-sm" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("div", { class: "text-caption text-green-8 text-weight-bolder" }, "Special Price"),
                createVNode("span", { class: "text-h6" }, "₹3,149"),
                createVNode("span", {
                  class: "q-ml-sm text-grey-6",
                  style: { "text-decoration": "line-through" }
                }, "₹3,699"),
                createVNode("span", { class: "q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md" }, "20% off")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_q_separator),
          createVNode(_component_q_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_q_btn, {
                flat: "",
                class: "text-weight-bold text-capitalize",
                dense: "",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" View details ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/page/category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const category = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-34503bb8"]]);
export {
  category as default
};
