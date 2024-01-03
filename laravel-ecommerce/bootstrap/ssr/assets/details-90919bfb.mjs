import { resolveComponent, resolveDirective, withCtx, createVNode, createTextVNode, mergeProps, withDirectives, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _export_sfc } from "../app2.mjs";
import "axios";
import "quasar";
import "vue-router";
const _sfc_main = {
  name: "details.vue",
  data() {
    return {
      slide: 1,
      tab: "Specifications",
      rating_point: 4.3,
      rat_5: 5,
      rat_4: 4,
      rat_3: 3,
      rat_2: 2,
      rat_1: 1
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
  const _component_q_carousel = resolveComponent("q-carousel");
  const _component_q_carousel_slide = resolveComponent("q-carousel-slide");
  const _component_q_chip = resolveComponent("q-chip");
  const _component_q_btn = resolveComponent("q-btn");
  const _component_q_rating = resolveComponent("q-rating");
  const _component_q_list = resolveComponent("q-list");
  const _component_q_item = resolveComponent("q-item");
  const _component_q_icon = resolveComponent("q-icon");
  const _component_q_linear_progress = resolveComponent("q-linear-progress");
  const _component_q_tabs = resolveComponent("q-tabs");
  const _component_q_tab = resolveComponent("q-tab");
  const _component_q_tab_panels = resolveComponent("q-tab-panels");
  const _component_q_tab_panel = resolveComponent("q-tab-panel");
  const _component_q_item_label = resolveComponent("q-item-label");
  const _component_q_item_section = resolveComponent("q-item-section");
  const _component_q_avatar = resolveComponent("q-avatar");
  const _component_q_separator = resolveComponent("q-separator");
  const _directive_ripple = resolveDirective("ripple");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row bg-white q-mt-sm"><div class="col-lg-5 col-md-5 col-sm-12 col-xs-12"><div class="q-pa-md">`);
  _push(ssrRenderComponent(_component_q_carousel, {
    swipeable: "",
    animated: "",
    modelValue: $data.slide,
    "onUpdate:modelValue": ($event) => $data.slide = $event,
    thumbnails: "",
    infinite: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_carousel_slide, {
          name: 1,
          "img-src": "https://cdn.quasar.dev/img/mountains.jpg"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_carousel_slide, {
          name: 2,
          "img-src": "https://cdn.quasar.dev/img/parallax1.jpg"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_carousel_slide, {
          name: 3,
          "img-src": "https://cdn.quasar.dev/img/parallax2.jpg"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_carousel_slide, {
          name: 4,
          "img-src": "https://cdn.quasar.dev/img/quasar.jpg"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_carousel_slide, {
            name: 1,
            "img-src": "https://cdn.quasar.dev/img/mountains.jpg"
          }),
          createVNode(_component_q_carousel_slide, {
            name: 2,
            "img-src": "https://cdn.quasar.dev/img/parallax1.jpg"
          }),
          createVNode(_component_q_carousel_slide, {
            name: 3,
            "img-src": "https://cdn.quasar.dev/img/parallax2.jpg"
          }),
          createVNode(_component_q_carousel_slide, {
            name: 4,
            "img-src": "https://cdn.quasar.dev/img/quasar.jpg"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-7 col-md-7 col-sm-12 col-xs-12"><div class="row"><div class="${ssrRenderClass([_ctx.$q.platform.is.desktop ? "" : "q-px-md", "col-lg-7 col-md-7 col-sm-12 col-xs-12"])}"><div class="text-subtitle1 text-grey-10 q-mt-sm q-pt-xs"> Benling C200-BLK Smartwatch (Black Strap Free Size) </div><div>`);
  _push(ssrRenderComponent(_component_q_chip, {
    size: "10px",
    class: "text-weight-bold q-px-xs",
    square: "",
    color: "green-7",
    "text-color": "white",
    "icon-right": "star"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 4.4 `);
      } else {
        return [
          createTextVNode(" 4.4 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-caption text-weight-bold text-grey-6">6 Ratings &amp; 2 Reviews</span></div><div><div class="text-caption text-green-8 text-weight-bolder q-mt-sm"> Special Price </div><span class="text-h6">₹3,149</span><span class="q-ml-sm text-grey-6" style="${ssrRenderStyle({ "text-decoration": "line-through" })}">₹3,699</span><span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md">20% off</span></div><div class="q-mt-sm text-weight-bold"> Offers <ul class="q-pl-sm text-caption" style="${ssrRenderStyle({ "list-style-type": "none" })}"><li class="q-mt-xs"><span class="text-weight-bold">Bank Offer</span> 5% Unlimited Cashback on Axis Bank Credit Card <a class="text-primary text-weight-bolder">T&amp;C</a></li><li class="q-mt-xs"><span class="text-weight-bold">Bank Offer</span> 5% Unlimited Cashback on Axis Bank Credit Card <a class="text-primary text-weight-bolder">T&amp;C</a></li><li class="q-mt-xs"><span class="text-weight-bold">Bank Offer</span> OfferExtra 5% off* <a class="text-primary text-weight-bolder">T&amp;C</a></li></ul></div><div class="q-mt-sm"><div class="text-subtitle1 text-green-8 text-weight-bold"> In stock. </div><div class="text-caption q-mt-sm text-grey-8 text-weight-bold"> Delivery by: <span class="text-black">Tue, Mar 3</span></div><div class="text-caption text-subtitle2 text-grey-8 text-weight-bold"> Fastest delivery: <span class="text-black">Mon, Mar 2 by 9pm</span></div></div><div class="q-mt-md">`);
  _push(ssrRenderComponent(_component_q_btn, {
    class: "q-mt-md",
    color: "orange-9",
    icon: "shopping_cart",
    label: "Add to cart"
  }, null, _parent));
  _push(ssrRenderComponent(_component_q_btn, {
    class: "q-mt-md q-ml-md",
    color: "orange-8",
    icon: "shopping_cart",
    label: "Buy now"
  }, null, _parent));
  _push(`</div></div><div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-mt-md q-pt-xs q-pl-lg"><div class="text-subtitle2">Customer rating</div><div class="text-h3">4.2</div><div>`);
  _push(ssrRenderComponent(_component_q_rating, {
    modelValue: $data.rating_point,
    "onUpdate:modelValue": ($event) => $data.rating_point = $event,
    max: "5",
    size: "2em",
    color: "orange",
    icon: "star_border",
    "icon-selected": "star",
    "icon-half": "star_half",
    "no-dimming": "",
    readonly: ""
  }, null, _parent));
  _push(`</div><div class="text-subtitle2 text-grey-8"> (357 reviews) </div><div class="text-subtitle2 text-grey-10 q-mt-sm"> 93% would recommend to a friend </div>`);
  _push(ssrRenderComponent(_component_q_list, {
    dense: "",
    bordered: "",
    padding: "",
    class: "no-border q-mt-lg q-pr-xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_item, mergeProps({ style: { "padding-left": "0 !important" } }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-subtitle2 q-mr-xs"${_scopeId2}>5</span>`);
              _push3(ssrRenderComponent(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.9
              }, null, _parent3, _scopeId2));
              _push3(`<span style="${ssrRenderStyle({ "margin-top": "2px" })}" class="text-caption text-weight-bold text-grey-8"${_scopeId2}>273</span>`);
            } else {
              return [
                createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "5"),
                createVNode(_component_q_icon, {
                  name: "star",
                  size: "1.5em",
                  color: "orange"
                }),
                createVNode(_component_q_linear_progress, {
                  class: "q-ml-sm q-mr-sm",
                  style: { "margin-top": "5px" },
                  size: "13px",
                  value: 0.9
                }, null, 8, ["value"]),
                createVNode("span", {
                  style: { "margin-top": "2px" },
                  class: "text-caption text-weight-bold text-grey-8"
                }, "273")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_item, mergeProps({ style: { "padding-left": "0 !important" } }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-subtitle2 q-mr-xs"${_scopeId2}>4</span>`);
              _push3(ssrRenderComponent(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.6
              }, null, _parent3, _scopeId2));
              _push3(`<span style="${ssrRenderStyle({ "margin-top": "2px" })}" class="text-caption text-weight-bold text-grey-8"${_scopeId2}>  69</span>`);
            } else {
              return [
                createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "4"),
                createVNode(_component_q_icon, {
                  name: "star",
                  size: "1.5em",
                  color: "orange"
                }),
                createVNode(_component_q_linear_progress, {
                  class: "q-ml-sm q-mr-sm",
                  style: { "margin-top": "5px" },
                  size: "13px",
                  value: 0.6
                }, null, 8, ["value"]),
                createVNode("span", {
                  style: { "margin-top": "2px" },
                  class: "text-caption text-weight-bold text-grey-8"
                }, "  69")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_item, mergeProps({ style: { "padding-left": "0 !important" } }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-subtitle2 q-mr-xs"${_scopeId2}>3</span>`);
              _push3(ssrRenderComponent(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.1
              }, null, _parent3, _scopeId2));
              _push3(`<span style="${ssrRenderStyle({ "margin-top": "2px" })}" class="text-caption text-weight-bold text-grey-8"${_scopeId2}>     6</span>`);
            } else {
              return [
                createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "3"),
                createVNode(_component_q_icon, {
                  name: "star",
                  size: "1.5em",
                  color: "orange"
                }),
                createVNode(_component_q_linear_progress, {
                  class: "q-ml-sm q-mr-sm",
                  style: { "margin-top": "5px" },
                  size: "13px",
                  value: 0.1
                }, null, 8, ["value"]),
                createVNode("span", {
                  style: { "margin-top": "2px" },
                  class: "text-caption text-weight-bold text-grey-8"
                }, "     6")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_item, mergeProps({ style: { "padding-left": "0 !important" } }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-subtitle2 q-mr-xs"${_scopeId2}>2</span>`);
              _push3(ssrRenderComponent(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.1
              }, null, _parent3, _scopeId2));
              _push3(`<span style="${ssrRenderStyle({ "margin-top": "2px" })}" class="text-caption text-weight-bold text-grey-8"${_scopeId2}>     3</span>`);
            } else {
              return [
                createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "2"),
                createVNode(_component_q_icon, {
                  name: "star",
                  size: "1.5em",
                  color: "orange"
                }),
                createVNode(_component_q_linear_progress, {
                  class: "q-ml-sm q-mr-sm",
                  style: { "margin-top": "5px" },
                  size: "13px",
                  value: 0.1
                }, null, 8, ["value"]),
                createVNode("span", {
                  style: { "margin-top": "2px" },
                  class: "text-caption text-weight-bold text-grey-8"
                }, "     3")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_item, mergeProps({ style: { "padding-left": "0 !important" } }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-subtitle2 q-mr-xs"${_scopeId2}>1</span>`);
              _push3(ssrRenderComponent(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.1
              }, null, _parent3, _scopeId2));
              _push3(`<span style="${ssrRenderStyle({ "margin-top": "2px" })}" class="text-caption text-weight-bold text-grey-8"${_scopeId2}>     6</span>`);
            } else {
              return [
                createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "1"),
                createVNode(_component_q_icon, {
                  name: "star",
                  size: "1.5em",
                  color: "orange"
                }),
                createVNode(_component_q_linear_progress, {
                  class: "q-ml-sm q-mr-sm",
                  style: { "margin-top": "5px" },
                  size: "13px",
                  value: 0.1
                }, null, 8, ["value"]),
                createVNode("span", {
                  style: { "margin-top": "2px" },
                  class: "text-caption text-weight-bold text-grey-8"
                }, "     6")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          withDirectives((openBlock(), createBlock(_component_q_item, { style: { "padding-left": "0 !important" } }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "5"),
              createVNode(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }),
              createVNode(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.9
              }, null, 8, ["value"]),
              createVNode("span", {
                style: { "margin-top": "2px" },
                class: "text-caption text-weight-bold text-grey-8"
              }, "273")
            ]),
            _: 1
          })), [
            [_directive_ripple]
          ]),
          withDirectives((openBlock(), createBlock(_component_q_item, { style: { "padding-left": "0 !important" } }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "4"),
              createVNode(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }),
              createVNode(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.6
              }, null, 8, ["value"]),
              createVNode("span", {
                style: { "margin-top": "2px" },
                class: "text-caption text-weight-bold text-grey-8"
              }, "  69")
            ]),
            _: 1
          })), [
            [_directive_ripple]
          ]),
          withDirectives((openBlock(), createBlock(_component_q_item, { style: { "padding-left": "0 !important" } }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "3"),
              createVNode(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }),
              createVNode(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.1
              }, null, 8, ["value"]),
              createVNode("span", {
                style: { "margin-top": "2px" },
                class: "text-caption text-weight-bold text-grey-8"
              }, "     6")
            ]),
            _: 1
          })), [
            [_directive_ripple]
          ]),
          withDirectives((openBlock(), createBlock(_component_q_item, { style: { "padding-left": "0 !important" } }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "2"),
              createVNode(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }),
              createVNode(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.1
              }, null, 8, ["value"]),
              createVNode("span", {
                style: { "margin-top": "2px" },
                class: "text-caption text-weight-bold text-grey-8"
              }, "     3")
            ]),
            _: 1
          })), [
            [_directive_ripple]
          ]),
          withDirectives((openBlock(), createBlock(_component_q_item, { style: { "padding-left": "0 !important" } }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-subtitle2 q-mr-xs" }, "1"),
              createVNode(_component_q_icon, {
                name: "star",
                size: "1.5em",
                color: "orange"
              }),
              createVNode(_component_q_linear_progress, {
                class: "q-ml-sm q-mr-sm",
                style: { "margin-top": "5px" },
                size: "13px",
                value: 0.1
              }, null, 8, ["value"]),
              createVNode("span", {
                style: { "margin-top": "2px" },
                class: "text-caption text-weight-bold text-grey-8"
              }, "     6")
            ]),
            _: 1
          })), [
            [_directive_ripple]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="row q-mt-sm"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">`);
  _push(ssrRenderComponent(_component_q_tabs, {
    modelValue: $data.tab,
    "onUpdate:modelValue": ($event) => $data.tab = $event,
    dense: "",
    align: "left",
    class: "bg-primary text-white shadow-2",
    breakpoint: 0
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_tab, {
          name: "Specifications",
          label: "Specifications"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_tab, {
          name: "Ratings & Reviews",
          label: "Ratings & Reviews"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_tab, {
          name: "Similar products",
          label: "Similar products"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_tab, {
          name: "Bought together",
          label: "Bought together"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_tab, {
          name: "Recently Viewed",
          label: "Recently Viewed"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_tab, {
            name: "Specifications",
            label: "Specifications"
          }),
          createVNode(_component_q_tab, {
            name: "Ratings & Reviews",
            label: "Ratings & Reviews"
          }),
          createVNode(_component_q_tab, {
            name: "Similar products",
            label: "Similar products"
          }),
          createVNode(_component_q_tab, {
            name: "Bought together",
            label: "Bought together"
          }),
          createVNode(_component_q_tab, {
            name: "Recently Viewed",
            label: "Recently Viewed"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_q_tab_panels, {
    style: { "border": "1px solid lightgrey" },
    modelValue: $data.tab,
    "onUpdate:modelValue": ($event) => $data.tab = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_tab_panel, { name: "Specifications" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="row"${_scopeId2}><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_q_list, {
                bordered: "",
                class: "rounded-borders",
                style: {}
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      class: "text-weight-bolder",
                      header: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`General`);
                        } else {
                          return [
                            createTextVNode("General")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Dial Color</span><span${_scopeId5}>Black</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                  createVNode("span", null, "Black")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Strap Material</span><span${_scopeId5}>Silicone</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                  createVNode("span", null, "Silicone")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                createVNode("span", null, "Black")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                createVNode("span", null, "Silicone")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Usage</span><span${_scopeId5}>Fitness &amp; Outdoor, Health &amp; Medical, Notifier, Safety &amp; Security, Watchphone</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Usage"),
                                  createVNode("span", null, "Fitness & Outdoor, Health & Medical, Notifier, Safety & Security, Watchphone")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Usage"),
                                createVNode("span", null, "Fitness & Outdoor, Health & Medical, Notifier, Safety & Security, Watchphone")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("General")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                              createVNode("span", null, "Black")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                              createVNode("span", null, "Silicone")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Usage"),
                              createVNode("span", null, "Fitness & Outdoor, Health & Medical, Notifier, Safety & Security, Watchphone")
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
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_q_list, {
                bordered: "",
                class: "rounded-borders",
                style: {}
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      class: "text-weight-bolder",
                      header: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Product Details`);
                        } else {
                          return [
                            createTextVNode("Product Details")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Dial Color</span><span${_scopeId5}>Black</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                  createVNode("span", null, "Black")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Strap Material</span><span${_scopeId5}>Silicone</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                  createVNode("span", null, "Silicone")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                createVNode("span", null, "Black")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                createVNode("span", null, "Silicone")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Product Details")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                              createVNode("span", null, "Black")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                              createVNode("span", null, "Silicone")
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
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_q_list, {
                bordered: "",
                class: "rounded-borders",
                style: {}
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      class: "text-weight-bolder",
                      header: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Camera And Display Features`);
                        } else {
                          return [
                            createTextVNode("Camera And Display Features")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Dial Color</span><span${_scopeId5}>Black</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                  createVNode("span", null, "Black")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-caption text-grey"${_scopeId5}>Strap Material</span><span${_scopeId5}>Silicone</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                  createVNode("span", null, "Silicone")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                createVNode("span", null, "Black")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                createVNode("span", null, "Silicone")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Camera And Display Features")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                              createVNode("span", null, "Black")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                              createVNode("span", null, "Silicone")
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
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
                    createVNode(_component_q_list, {
                      bordered: "",
                      class: "rounded-borders",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-weight-bolder",
                          header: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("General")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                createVNode("span", null, "Black")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                createVNode("span", null, "Silicone")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Usage"),
                                createVNode("span", null, "Fitness & Outdoor, Health & Medical, Notifier, Safety & Security, Watchphone")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
                    createVNode(_component_q_list, {
                      bordered: "",
                      class: "rounded-borders",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-weight-bolder",
                          header: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Product Details")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                createVNode("span", null, "Black")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                createVNode("span", null, "Silicone")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
                    createVNode(_component_q_list, {
                      bordered: "",
                      class: "rounded-borders",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-weight-bolder",
                          header: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Camera And Display Features")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                                createVNode("span", null, "Black")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                                createVNode("span", null, "Silicone")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_tab_panel, { name: "Ratings & Reviews" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="row"${_scopeId2}><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_q_list, {
                bordered: "",
                class: "rounded-borders",
                style: {}
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      class: "text-weight-bolder text-green-8",
                      header: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Positive Reviews`);
                        } else {
                          return [
                            createTextVNode("Positive Reviews")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar2.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Brunch this weekend?`);
                                    } else {
                                      return [
                                        createTextVNode("Brunch this weekend?")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>Janet</span> -- I&#39;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                        createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Brunch this weekend?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                      createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_separator, { inset: "item" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar4.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Linear Project`);
                                    } else {
                                      return [
                                        createTextVNode("Linear Project")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>John</span> -- Can we schedule a call for tomorrow? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "John"),
                                        createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Linear Project")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "John"),
                                      createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_separator, { inset: "item" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar2.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Brunch this weekend?`);
                                    } else {
                                      return [
                                        createTextVNode("Brunch this weekend?")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>Janet</span> -- I&#39;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                        createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Brunch this weekend?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                      createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_separator, { inset: "item" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar4.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Linear Project`);
                                    } else {
                                      return [
                                        createTextVNode("Linear Project")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>John</span> -- Can we schedule a call for tomorrow? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "John"),
                                        createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Linear Project")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "John"),
                                      createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder text-green-8",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Positive Reviews")
                        ]),
                        _: 1
                      }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_q_list, {
                bordered: "",
                class: "rounded-borders",
                style: {}
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      class: "text-weight-bolder text-red-8",
                      header: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Negative Reviews`);
                        } else {
                          return [
                            createTextVNode("Negative Reviews")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar2.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Brunch this weekend?`);
                                    } else {
                                      return [
                                        createTextVNode("Brunch this weekend?")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>Janet</span> -- I&#39;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                        createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Brunch this weekend?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                      createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_separator, { inset: "item" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar4.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Linear Project`);
                                    } else {
                                      return [
                                        createTextVNode("Linear Project")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>John</span> -- Can we schedule a call for tomorrow? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "John"),
                                        createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Linear Project")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "John"),
                                      createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_separator, { inset: "item" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar2.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Brunch this weekend?`);
                                    } else {
                                      return [
                                        createTextVNode("Brunch this weekend?")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>Janet</span> -- I&#39;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                        createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Brunch this weekend?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                      createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_separator, { inset: "item" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item, ssrGetDirectiveProps(_ctx, _directive_ripple), {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_avatar, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<img src="https://cdn.quasar.dev/img/avatar4.jpg"${_scopeId6}>`);
                                    } else {
                                      return [
                                        createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_avatar, null, {
                                    default: withCtx(() => [
                                      createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Linear Project`);
                                    } else {
                                      return [
                                        createTextVNode("Linear Project")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-weight-bold"${_scopeId6}>John</span> -- Can we schedule a call for tomorrow? `);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-weight-bold" }, "John"),
                                        createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_label, { lines: "1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Linear Project")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_item_label, {
                                    caption: "",
                                    lines: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-weight-bold" }, "John"),
                                      createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 1 min ago `);
                              } else {
                                return [
                                  createTextVNode(" 1 min ago ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder text-red-8",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Negative Reviews")
                        ]),
                        _: 1
                      }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
                    createVNode(_component_q_list, {
                      bordered: "",
                      class: "rounded-borders",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-weight-bolder text-green-8",
                          header: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Positive Reviews")
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ]),
                        createVNode(_component_q_separator, { inset: "item" }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ]),
                        createVNode(_component_q_separator, { inset: "item" }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ]),
                        createVNode(_component_q_separator, { inset: "item" }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
                    createVNode(_component_q_list, {
                      bordered: "",
                      class: "rounded-borders",
                      style: {}
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-weight-bolder text-red-8",
                          header: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Negative Reviews")
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ]),
                        createVNode(_component_q_separator, { inset: "item" }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ]),
                        createVNode(_component_q_separator, { inset: "item" }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Brunch this weekend?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                    createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ]),
                        createVNode(_component_q_separator, { inset: "item" }),
                        withDirectives((openBlock(), createBlock(_component_q_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_avatar, null, {
                                  default: withCtx(() => [
                                    createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_label, { lines: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Linear Project")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_label, {
                                  caption: "",
                                  lines: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-weight-bold" }, "John"),
                                    createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, {
                              side: "",
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 1 min ago ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_tab_panel, { name: "Specifications" }, {
            default: withCtx(() => [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
                  createVNode(_component_q_list, {
                    bordered: "",
                    class: "rounded-borders",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("General")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                              createVNode("span", null, "Black")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                              createVNode("span", null, "Silicone")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Usage"),
                              createVNode("span", null, "Fitness & Outdoor, Health & Medical, Notifier, Safety & Security, Watchphone")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
                  createVNode(_component_q_list, {
                    bordered: "",
                    class: "rounded-borders",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Product Details")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                              createVNode("span", null, "Black")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                              createVNode("span", null, "Silicone")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
                  createVNode(_component_q_list, {
                    bordered: "",
                    class: "rounded-borders",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Camera And Display Features")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Dial Color"),
                              createVNode("span", null, "Black")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption text-grey" }, "Strap Material"),
                              createVNode("span", null, "Silicone")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_q_tab_panel, { name: "Ratings & Reviews" }, {
            default: withCtx(() => [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
                  createVNode(_component_q_list, {
                    bordered: "",
                    class: "rounded-borders",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder text-green-8",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Positive Reviews")
                        ]),
                        _: 1
                      }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
                  createVNode(_component_q_list, {
                    bordered: "",
                    class: "rounded-borders",
                    style: {}
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-weight-bolder text-red-8",
                        header: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Negative Reviews")
                        ]),
                        _: 1
                      }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar2.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Brunch this weekend?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "Janet"),
                                  createTextVNode(" -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ]),
                      createVNode(_component_q_separator, { inset: "item" }),
                      withDirectives((openBlock(), createBlock(_component_q_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_avatar, null, {
                                default: withCtx(() => [
                                  createVNode("img", { src: "https://cdn.quasar.dev/img/avatar4.jpg" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_label, { lines: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Linear Project")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_label, {
                                caption: "",
                                lines: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-weight-bold" }, "John"),
                                  createTextVNode(" -- Can we schedule a call for tomorrow? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1 min ago ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/page/details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const details = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  details as default
};
