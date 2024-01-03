import axios from "axios";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext, createApp } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { Quasar, Notify, Dialog } from "quasar";
import { createRouter, createWebHistory } from "vue-router";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const _imports_0 = "/build/assets/bu_logo(64x64)-39798959.png";
const home_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  data() {
    return {
      left: false,
      menu_cat_elc: false,
      menu_cat_tvs: false,
      menu_cat_men: false,
      text: ""
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_q_layout = resolveComponent("q-layout");
  const _component_q_header = resolveComponent("q-header");
  const _component_q_toolbar = resolveComponent("q-toolbar");
  const _component_q_toolbar_title = resolveComponent("q-toolbar-title");
  const _component_q_input = resolveComponent("q-input");
  const _component_q_btn = resolveComponent("q-btn");
  const _component_q_badge = resolveComponent("q-badge");
  const _component_q_menu = resolveComponent("q-menu");
  const _component_q_list = resolveComponent("q-list");
  const _component_q_item = resolveComponent("q-item");
  const _component_q_item_section = resolveComponent("q-item-section");
  const _component_q_icon = resolveComponent("q-icon");
  const _component_q_page_container = resolveComponent("q-page-container");
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_q_layout, mergeProps({
    view: "lHh LpR lFf",
    style: { "font-family": "Lato" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_header, {
          reveal: "",
          elevated: "",
          style: { "background-color": "#1f9e3b" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.$q.platform.is.desktop) {
                _push3(ssrRenderComponent(_component_q_toolbar, { class: "q-py-sm" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img class="cursor-pointer"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "3%" })}"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_q_toolbar_title, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span class="float-left q-mt-xs text-h6 text-weight-bold" style="${ssrRenderStyle({ "font-size": "17px" })}"${_scopeId4}>Artisan HR</span>`);
                            _push5(ssrRenderComponent(_component_q_input, {
                              class: "float-left q-ml-xl",
                              style: { "width": "650px" },
                              square: "",
                              "bg-color": "white",
                              dense: "",
                              outlined: "",
                              modelValue: $data.text,
                              "onUpdate:modelValue": ($event) => $data.text = $event,
                              label: "Search for products, brands and more"
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode("span", {
                                class: "float-left q-mt-xs text-h6 text-weight-bold",
                                style: { "font-size": "17px" }
                              }, "Artisan HR"),
                              createVNode(_component_q_input, {
                                class: "float-left q-ml-xl",
                                style: { "width": "650px" },
                                square: "",
                                "bg-color": "white",
                                dense: "",
                                outlined: "",
                                modelValue: $data.text,
                                "onUpdate:modelValue": ($event) => $data.text = $event,
                                label: "Search for products, brands and more"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_q_btn, {
                        class: "q-mr-md",
                        dense: "",
                        round: "",
                        flat: "",
                        icon: "shopping_cart"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_q_badge, {
                              color: "red",
                              class: "text-bold",
                              floating: "",
                              transparent: ""
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(` 3 `);
                                } else {
                                  return [
                                    createTextVNode(" 3 ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_q_badge, {
                                color: "red",
                                class: "text-bold",
                                floating: "",
                                transparent: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 3 ")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_q_btn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "settings",
                        class: "q-mr-md"
                      }, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_q_btn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "fas fa-sign-out-alt",
                        to: "/"
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode("img", {
                          onClick: ($event) => _ctx.$router.push("/home"),
                          class: "cursor-pointer",
                          src: _imports_0,
                          style: { "width": "3%" }
                        }, null, 8, ["onClick"]),
                        createVNode(_component_q_toolbar_title, null, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "float-left q-mt-xs text-h6 text-weight-bold",
                              style: { "font-size": "17px" }
                            }, "Artisan HR"),
                            createVNode(_component_q_input, {
                              class: "float-left q-ml-xl",
                              style: { "width": "650px" },
                              square: "",
                              "bg-color": "white",
                              dense: "",
                              outlined: "",
                              modelValue: $data.text,
                              "onUpdate:modelValue": ($event) => $data.text = $event,
                              label: "Search for products, brands and more"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_btn, {
                          class: "q-mr-md",
                          dense: "",
                          round: "",
                          flat: "",
                          icon: "shopping_cart"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_badge, {
                              color: "red",
                              class: "text-bold",
                              floating: "",
                              transparent: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 3 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "settings",
                          class: "q-mr-md"
                        }),
                        createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "fas fa-sign-out-alt",
                          to: "/"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="bg-white text-grey-9 text-weight-bold shadow-transition"${_scopeId2}><div class="row text-center items-center" style="${ssrRenderStyle(_ctx.$q.platform.is.desktop ? "height: 38px" : "")}"${_scopeId2}><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"${_scopeId2}> Electronics `);
              _push3(ssrRenderComponent(_component_q_menu, {
                fit: "",
                onMouseleave: ($event) => $data.menu_cat_elc = false,
                modelValue: $data.menu_cat_elc,
                "onUpdate:modelValue": ($event) => $data.menu_cat_elc = $event,
                "transition-show": "flip-right",
                "transition-hide": "flip-left"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_list, {
                      dense: "",
                      class: "text-grey-9 text-caption"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/details"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Mobiles`);
                                    } else {
                                      return [
                                        createTextVNode("Mobiles")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Mobiles")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/employeeInfo"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Laptops`);
                                    } else {
                                      return [
                                        createTextVNode("Laptops")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Laptops")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Health Care Appliances`);
                                    } else {
                                      return [
                                        createTextVNode("Health Care Appliances")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Health Care Appliances")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Speakers`);
                                    } else {
                                      return [
                                        createTextVNode("Speakers")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Speakers")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Smart Home Automation`);
                                    } else {
                                      return [
                                        createTextVNode("Smart Home Automation")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Smart Home Automation")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/details"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Mobiles")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/employeeInfo"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Laptops")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Health Care Appliances")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Speakers")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Smart Home Automation")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_list, {
                        dense: "",
                        class: "text-grey-9 text-caption"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/details"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Mobiles")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/employeeInfo"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Laptops")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Health Care Appliances")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Speakers")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Smart Home Automation")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_icon, {
                size: "sm",
                class: "q-ml-xs text-grey-5",
                name: "keyboard_arrow_down"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"${_scopeId2}> TVs and Appliances `);
              _push3(ssrRenderComponent(_component_q_menu, {
                fit: "",
                onMouseleave: ($event) => $data.menu_cat_tvs = false,
                modelValue: $data.menu_cat_tvs,
                "onUpdate:modelValue": ($event) => $data.menu_cat_tvs = $event,
                "transition-show": "flip-right",
                "transition-hide": "flip-left"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_list, {
                      dense: "",
                      class: "text-grey-9 text-caption"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Television`);
                                    } else {
                                      return [
                                        createTextVNode("Television")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Television")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Air Conditioners`);
                                    } else {
                                      return [
                                        createTextVNode("Air Conditioners")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Air Conditioners")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Health Care Appliances`);
                                    } else {
                                      return [
                                        createTextVNode("Health Care Appliances")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Health Care Appliances")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Shop By Screen Size`);
                                    } else {
                                      return [
                                        createTextVNode("Shop By Screen Size")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Shop By Screen Size")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Smart Home Appliances`);
                                    } else {
                                      return [
                                        createTextVNode("Smart Home Appliances")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Smart Home Appliances")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Television")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Air Conditioners")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Health Care Appliances")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Shop By Screen Size")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Smart Home Appliances")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_list, {
                        dense: "",
                        class: "text-grey-9 text-caption"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Television")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Air Conditioners")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Health Care Appliances")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Shop By Screen Size")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Smart Home Appliances")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_icon, {
                size: "sm",
                class: "q-ml-xs text-grey-5",
                name: "keyboard_arrow_down"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"${_scopeId2}> Men `);
              _push3(ssrRenderComponent(_component_q_menu, {
                fit: "",
                onMouseleave: ($event) => $data.menu_cat_men = false,
                modelValue: $data.menu_cat_men,
                "onUpdate:modelValue": ($event) => $data.menu_cat_men = $event,
                "transition-show": "flip-right",
                "transition-hide": "flip-left"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_list, {
                      dense: "",
                      class: "text-grey-9 text-caption"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Footwear`);
                                    } else {
                                      return [
                                        createTextVNode("Footwear")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Footwear")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Clothing`);
                                    } else {
                                      return [
                                        createTextVNode("Clothing")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Clothing")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Sports &amp; Fitness Store`);
                                    } else {
                                      return [
                                        createTextVNode("Sports & Fitness Store")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Sports & Fitness Store")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Footwear")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Clothing")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Sports & Fitness Store")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_list, {
                        dense: "",
                        class: "text-grey-9 text-caption"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Footwear")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Clothing")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_q_item, {
                            onClick: ($event) => _ctx.$router.push("/category"),
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode("Sports & Fitness Store")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_icon, {
                size: "sm",
                class: "q-ml-xs text-grey-5",
                name: "keyboard_arrow_down"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"${_scopeId2}> Women `);
              _push3(ssrRenderComponent(_component_q_icon, {
                size: "sm",
                class: "q-ml-xs text-grey-5",
                name: "keyboard_arrow_down"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"${_scopeId2}> Home &amp; Furniture `);
              _push3(ssrRenderComponent(_component_q_icon, {
                size: "sm",
                class: "q-ml-xs text-grey-5",
                name: "keyboard_arrow_down"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"${_scopeId2}> Offers </div></div></div>`);
            } else {
              return [
                _ctx.$q.platform.is.desktop ? (openBlock(), createBlock(_component_q_toolbar, {
                  key: 0,
                  class: "q-py-sm"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      onClick: ($event) => _ctx.$router.push("/home"),
                      class: "cursor-pointer",
                      src: _imports_0,
                      style: { "width": "3%" }
                    }, null, 8, ["onClick"]),
                    createVNode(_component_q_toolbar_title, null, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "float-left q-mt-xs text-h6 text-weight-bold",
                          style: { "font-size": "17px" }
                        }, "Artisan HR"),
                        createVNode(_component_q_input, {
                          class: "float-left q-ml-xl",
                          style: { "width": "650px" },
                          square: "",
                          "bg-color": "white",
                          dense: "",
                          outlined: "",
                          modelValue: $data.text,
                          "onUpdate:modelValue": ($event) => $data.text = $event,
                          label: "Search for products, brands and more"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_btn, {
                      class: "q-mr-md",
                      dense: "",
                      round: "",
                      flat: "",
                      icon: "shopping_cart"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_badge, {
                          color: "red",
                          class: "text-bold",
                          floating: "",
                          transparent: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 3 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_btn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "settings",
                      class: "q-mr-md"
                    }),
                    createVNode(_component_q_btn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "fas fa-sign-out-alt",
                      to: "/"
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode("div", { class: "bg-white text-grey-9 text-weight-bold shadow-transition" }, [
                  createVNode("div", {
                    class: "row text-center items-center",
                    style: _ctx.$q.platform.is.desktop ? "height: 38px" : ""
                  }, [
                    createVNode("div", {
                      class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue",
                      onMouseover: ($event) => $data.menu_cat_elc = true
                    }, [
                      createTextVNode(" Electronics "),
                      createVNode(_component_q_menu, {
                        fit: "",
                        onMouseleave: ($event) => $data.menu_cat_elc = false,
                        modelValue: $data.menu_cat_elc,
                        "onUpdate:modelValue": ($event) => $data.menu_cat_elc = $event,
                        "transition-show": "flip-right",
                        "transition-hide": "flip-left"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_list, {
                            dense: "",
                            class: "text-grey-9 text-caption"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/details"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Mobiles")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/employeeInfo"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Laptops")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Health Care Appliances")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Speakers")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Smart Home Automation")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_q_icon, {
                        size: "sm",
                        class: "q-ml-xs text-grey-5",
                        name: "keyboard_arrow_down"
                      })
                    ], 40, ["onMouseover"]),
                    createVNode("div", {
                      class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue",
                      onMouseover: ($event) => $data.menu_cat_tvs = true
                    }, [
                      createTextVNode(" TVs and Appliances "),
                      createVNode(_component_q_menu, {
                        fit: "",
                        onMouseleave: ($event) => $data.menu_cat_tvs = false,
                        modelValue: $data.menu_cat_tvs,
                        "onUpdate:modelValue": ($event) => $data.menu_cat_tvs = $event,
                        "transition-show": "flip-right",
                        "transition-hide": "flip-left"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_list, {
                            dense: "",
                            class: "text-grey-9 text-caption"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Television")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Air Conditioners")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Health Care Appliances")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Shop By Screen Size")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Smart Home Appliances")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_q_icon, {
                        size: "sm",
                        class: "q-ml-xs text-grey-5",
                        name: "keyboard_arrow_down"
                      })
                    ], 40, ["onMouseover"]),
                    createVNode("div", {
                      class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue",
                      onMouseover: ($event) => $data.menu_cat_men = true
                    }, [
                      createTextVNode(" Men "),
                      createVNode(_component_q_menu, {
                        fit: "",
                        onMouseleave: ($event) => $data.menu_cat_men = false,
                        modelValue: $data.menu_cat_men,
                        "onUpdate:modelValue": ($event) => $data.menu_cat_men = $event,
                        "transition-show": "flip-right",
                        "transition-hide": "flip-left"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_list, {
                            dense: "",
                            class: "text-grey-9 text-caption"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Footwear")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Clothing")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_q_item, {
                                onClick: ($event) => _ctx.$router.push("/category"),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Sports & Fitness Store")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_q_icon, {
                        size: "sm",
                        class: "q-ml-xs text-grey-5",
                        name: "keyboard_arrow_down"
                      })
                    ], 40, ["onMouseover"]),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" }, [
                      createTextVNode(" Women "),
                      createVNode(_component_q_icon, {
                        size: "sm",
                        class: "q-ml-xs text-grey-5",
                        name: "keyboard_arrow_down"
                      })
                    ]),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" }, [
                      createTextVNode(" Home & Furniture "),
                      createVNode(_component_q_icon, {
                        size: "sm",
                        class: "q-ml-xs text-grey-5",
                        name: "keyboard_arrow_down"
                      })
                    ]),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" }, " Offers ")
                  ], 4)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_page_container, { style: { "background-color": "#ffff" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_router_view, null, null, _parent3, _scopeId2));
              _push3(`<div class="q-mt-sm"${_scopeId2}><div class="row q-pa-md bg-primary"${_scopeId2}><div class="col-lg-1 col-md-1 col-sm-12 col-xs-12"${_scopeId2}></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white"${_scopeId2}><div class="text-subtitle1 text-weight-bold"${_scopeId2}>About</div><div class="text-caption hover_underline_white q-mt-sm"${_scopeId2}> Contact us </div><div class="text-caption hover_underline_white"${_scopeId2}>About Us</div><div class="text-caption hover_underline_white"${_scopeId2}>Careers</div><div class="text-caption hover_underline_white"${_scopeId2}>Our Stories</div><div class="text-caption hover_underline_white"${_scopeId2}>Press</div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white"${_scopeId2}><div class="text-subtitle1 text-weight-bold"${_scopeId2}>Connect with Us</div><div class="text-caption hover_underline_white q-mt-sm"${_scopeId2}> Facebook </div><div class="text-caption hover_underline_white"${_scopeId2}>Instagram</div><div class="text-caption hover_underline_white"${_scopeId2}>Twitter</div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white"${_scopeId2}><div class="text-subtitle1 text-weight-bold"${_scopeId2}>Policy</div><div class="text-caption hover_underline_white q-mt-sm"${_scopeId2}> Return Policy </div><div class="text-caption hover_underline_white"${_scopeId2}>Terms Of Use</div><div class="text-caption hover_underline_white"${_scopeId2}>Security</div><div class="text-caption hover_underline_white"${_scopeId2}>Privacy</div><div class="text-caption hover_underline_white"${_scopeId2}>Sitemap</div></div><div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white"${_scopeId2}><div class="text-subtitle1 text-weight-bold"${_scopeId2}>Help</div><div class="text-caption hover_underline_white q-mt-sm"${_scopeId2}> Payments </div><div class="text-caption hover_underline_white"${_scopeId2}>Shipping</div><div class="text-caption hover_underline_white"${_scopeId2}> Cancellation &amp; Returns </div><div class="text-caption hover_underline_white"${_scopeId2}>FAQ</div></div><div class="${ssrRenderClass([_ctx.$q.platform.is.desktop ? "q-pl-xl" : "", "col-lg-3 col-md-3 col-sm-12 col-xs-12 text-white"])}" style="${ssrRenderStyle(
                _ctx.$q.platform.is.desktop ? "border-left: 1px solid grey;" : ""
              )}"${_scopeId2}><div class="text-subtitle1 text-weight-bold"${_scopeId2}> Registered Office Address: </div><div class="text-caption q-mt-sm"${_scopeId2}> 335, Gokhale Wadi, Grant Road </div><div class="text-caption"${_scopeId2}>Mumbai, Maharashtra</div><div class="text-caption"${_scopeId2}>412207</div><div class="text-caption"${_scopeId2}>India</div></div></div><div style="${ssrRenderStyle({ "background-color": "#163758" })}"${_scopeId2}><div class="q-mr-md text-right q-py-xs text-weight-bold text-grey-6" style="${ssrRenderStyle({})}"${_scopeId2}> Developed By <a target="_blank" class="text-blue-1 hover_underline_white" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://butechltd.com"${_scopeId2}>Sabbir</a>. </div></div></div>`);
            } else {
              return [
                createVNode(_component_router_view),
                createVNode("div", { class: "q-mt-sm" }, [
                  createVNode("div", { class: "row q-pa-md bg-primary" }, [
                    createVNode("div", { class: "col-lg-1 col-md-1 col-sm-12 col-xs-12" }),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                      createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "About"),
                      createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Contact us "),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "About Us"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Careers"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Our Stories"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Press")
                    ]),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                      createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Connect with Us"),
                      createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Facebook "),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Instagram"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Twitter")
                    ]),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                      createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Policy"),
                      createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Return Policy "),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Terms Of Use"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Security"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Privacy"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Sitemap")
                    ]),
                    createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                      createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Help"),
                      createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Payments "),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "Shipping"),
                      createVNode("div", { class: "text-caption hover_underline_white" }, " Cancellation & Returns "),
                      createVNode("div", { class: "text-caption hover_underline_white" }, "FAQ")
                    ]),
                    createVNode("div", {
                      class: ["col-lg-3 col-md-3 col-sm-12 col-xs-12 text-white", _ctx.$q.platform.is.desktop ? "q-pl-xl" : ""],
                      style: _ctx.$q.platform.is.desktop ? "border-left: 1px solid grey;" : ""
                    }, [
                      createVNode("div", { class: "text-subtitle1 text-weight-bold" }, " Registered Office Address: "),
                      createVNode("div", { class: "text-caption q-mt-sm" }, " 335, Gokhale Wadi, Grant Road "),
                      createVNode("div", { class: "text-caption" }, "Mumbai, Maharashtra"),
                      createVNode("div", { class: "text-caption" }, "412207"),
                      createVNode("div", { class: "text-caption" }, "India")
                    ], 6)
                  ]),
                  createVNode("div", { style: { "background-color": "#163758" } }, [
                    createVNode("div", {
                      class: "q-mr-md text-right q-py-xs text-weight-bold text-grey-6",
                      style: {}
                    }, [
                      createTextVNode(" Developed By "),
                      createVNode("a", {
                        target: "_blank",
                        class: "text-blue-1 hover_underline_white",
                        style: { "text-decoration": "none" },
                        href: "https://butechltd.com"
                      }, "Sabbir"),
                      createTextVNode(". ")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_header, {
            reveal: "",
            elevated: "",
            style: { "background-color": "#1f9e3b" }
          }, {
            default: withCtx(() => [
              _ctx.$q.platform.is.desktop ? (openBlock(), createBlock(_component_q_toolbar, {
                key: 0,
                class: "q-py-sm"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    onClick: ($event) => _ctx.$router.push("/home"),
                    class: "cursor-pointer",
                    src: _imports_0,
                    style: { "width": "3%" }
                  }, null, 8, ["onClick"]),
                  createVNode(_component_q_toolbar_title, null, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: "float-left q-mt-xs text-h6 text-weight-bold",
                        style: { "font-size": "17px" }
                      }, "Artisan HR"),
                      createVNode(_component_q_input, {
                        class: "float-left q-ml-xl",
                        style: { "width": "650px" },
                        square: "",
                        "bg-color": "white",
                        dense: "",
                        outlined: "",
                        modelValue: $data.text,
                        "onUpdate:modelValue": ($event) => $data.text = $event,
                        label: "Search for products, brands and more"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_btn, {
                    class: "q-mr-md",
                    dense: "",
                    round: "",
                    flat: "",
                    icon: "shopping_cart"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_badge, {
                        color: "red",
                        class: "text-bold",
                        floating: "",
                        transparent: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 3 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_btn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "settings",
                    class: "q-mr-md"
                  }),
                  createVNode(_component_q_btn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "fas fa-sign-out-alt",
                    to: "/"
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode("div", { class: "bg-white text-grey-9 text-weight-bold shadow-transition" }, [
                createVNode("div", {
                  class: "row text-center items-center",
                  style: _ctx.$q.platform.is.desktop ? "height: 38px" : ""
                }, [
                  createVNode("div", {
                    class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue",
                    onMouseover: ($event) => $data.menu_cat_elc = true
                  }, [
                    createTextVNode(" Electronics "),
                    createVNode(_component_q_menu, {
                      fit: "",
                      onMouseleave: ($event) => $data.menu_cat_elc = false,
                      modelValue: $data.menu_cat_elc,
                      "onUpdate:modelValue": ($event) => $data.menu_cat_elc = $event,
                      "transition-show": "flip-right",
                      "transition-hide": "flip-left"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_list, {
                          dense: "",
                          class: "text-grey-9 text-caption"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/details"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Mobiles")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/employeeInfo"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Laptops")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Health Care Appliances")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Speakers")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Smart Home Automation")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_icon, {
                      size: "sm",
                      class: "q-ml-xs text-grey-5",
                      name: "keyboard_arrow_down"
                    })
                  ], 40, ["onMouseover"]),
                  createVNode("div", {
                    class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue",
                    onMouseover: ($event) => $data.menu_cat_tvs = true
                  }, [
                    createTextVNode(" TVs and Appliances "),
                    createVNode(_component_q_menu, {
                      fit: "",
                      onMouseleave: ($event) => $data.menu_cat_tvs = false,
                      modelValue: $data.menu_cat_tvs,
                      "onUpdate:modelValue": ($event) => $data.menu_cat_tvs = $event,
                      "transition-show": "flip-right",
                      "transition-hide": "flip-left"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_list, {
                          dense: "",
                          class: "text-grey-9 text-caption"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Television")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Air Conditioners")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Health Care Appliances")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Shop By Screen Size")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Smart Home Appliances")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_icon, {
                      size: "sm",
                      class: "q-ml-xs text-grey-5",
                      name: "keyboard_arrow_down"
                    })
                  ], 40, ["onMouseover"]),
                  createVNode("div", {
                    class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue",
                    onMouseover: ($event) => $data.menu_cat_men = true
                  }, [
                    createTextVNode(" Men "),
                    createVNode(_component_q_menu, {
                      fit: "",
                      onMouseleave: ($event) => $data.menu_cat_men = false,
                      modelValue: $data.menu_cat_men,
                      "onUpdate:modelValue": ($event) => $data.menu_cat_men = $event,
                      "transition-show": "flip-right",
                      "transition-hide": "flip-left"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_list, {
                          dense: "",
                          class: "text-grey-9 text-caption"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Footwear")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Clothing")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_q_item, {
                              onClick: ($event) => _ctx.$router.push("/category"),
                              clickable: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Sports & Fitness Store")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_icon, {
                      size: "sm",
                      class: "q-ml-xs text-grey-5",
                      name: "keyboard_arrow_down"
                    })
                  ], 40, ["onMouseover"]),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" }, [
                    createTextVNode(" Women "),
                    createVNode(_component_q_icon, {
                      size: "sm",
                      class: "q-ml-xs text-grey-5",
                      name: "keyboard_arrow_down"
                    })
                  ]),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" }, [
                    createTextVNode(" Home & Furniture "),
                    createVNode(_component_q_icon, {
                      size: "sm",
                      class: "q-ml-xs text-grey-5",
                      name: "keyboard_arrow_down"
                    })
                  ]),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue" }, " Offers ")
                ], 4)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_q_page_container, { style: { "background-color": "#ffff" } }, {
            default: withCtx(() => [
              createVNode(_component_router_view),
              createVNode("div", { class: "q-mt-sm" }, [
                createVNode("div", { class: "row q-pa-md bg-primary" }, [
                  createVNode("div", { class: "col-lg-1 col-md-1 col-sm-12 col-xs-12" }),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                    createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "About"),
                    createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Contact us "),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "About Us"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Careers"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Our Stories"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Press")
                  ]),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                    createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Connect with Us"),
                    createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Facebook "),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Instagram"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Twitter")
                  ]),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                    createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Policy"),
                    createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Return Policy "),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Terms Of Use"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Security"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Privacy"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Sitemap")
                  ]),
                  createVNode("div", { class: "col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white" }, [
                    createVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Help"),
                    createVNode("div", { class: "text-caption hover_underline_white q-mt-sm" }, " Payments "),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "Shipping"),
                    createVNode("div", { class: "text-caption hover_underline_white" }, " Cancellation & Returns "),
                    createVNode("div", { class: "text-caption hover_underline_white" }, "FAQ")
                  ]),
                  createVNode("div", {
                    class: ["col-lg-3 col-md-3 col-sm-12 col-xs-12 text-white", _ctx.$q.platform.is.desktop ? "q-pl-xl" : ""],
                    style: _ctx.$q.platform.is.desktop ? "border-left: 1px solid grey;" : ""
                  }, [
                    createVNode("div", { class: "text-subtitle1 text-weight-bold" }, " Registered Office Address: "),
                    createVNode("div", { class: "text-caption q-mt-sm" }, " 335, Gokhale Wadi, Grant Road "),
                    createVNode("div", { class: "text-caption" }, "Mumbai, Maharashtra"),
                    createVNode("div", { class: "text-caption" }, "412207"),
                    createVNode("div", { class: "text-caption" }, "India")
                  ], 6)
                ]),
                createVNode("div", { style: { "background-color": "#163758" } }, [
                  createVNode("div", {
                    class: "q-mr-md text-right q-py-xs text-weight-bold text-grey-6",
                    style: {}
                  }, [
                    createTextVNode(" Developed By "),
                    createVNode("a", {
                      target: "_blank",
                      class: "text-blue-1 hover_underline_white",
                      style: { "text-decoration": "none" },
                      href: "https://butechltd.com"
                    }, "Sabbir"),
                    createTextVNode(". ")
                  ])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/layout/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const app = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const routes = [
  { path: "/", component: () => import("./assets/home-847c06e2.mjs") },
  { path: "/category", component: () => import("./assets/category-5777b1f5.mjs") },
  { path: "/details", component: () => import("./assets/details-90919bfb.mjs") },
  { path: "/employeeInfo", component: () => import("./assets/employeeInfo-5975b883.mjs") }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
createApp(app).use(router).use(Quasar, {
  plugins: {
    Notify,
    Dialog
  },
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    }
  }
}).mount("#app");
export {
  _export_sfc as _
};
