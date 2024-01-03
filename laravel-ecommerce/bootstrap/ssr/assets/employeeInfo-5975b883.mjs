import { useQuasar } from "quasar";
import { ref, resolveComponent, resolveDirective, withCtx, mergeProps, createVNode, withDirectives, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app2.mjs";
import "axios";
import "vue-router";
const _sfc_main = {
  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const age = ref(null);
    const comapny = ref(null);
    const accept = ref(false);
    return {
      name,
      age,
      comapny,
      accept,
      date: ref("2019/02/01"),
      model: ref(null),
      options: ["Married", "Unmarried"],
      text: ref(""),
      gender: ["Male", "Female"],
      religion: ["Muslim", "Hindu", "Buddhist"],
      blood: [
        "A+(ve)",
        "A-(ve)",
        "B+(ve)",
        "B-(ve)",
        "O+(ve)",
        "O-(ve)",
        "AB+(ve)",
        "AB-(ve)"
      ],
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first"
          });
        } else {
          $q.notify({
            color: "green-5",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted"
          });
        }
      },
      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_q_form = resolveComponent("q-form");
  const _component_q_input = resolveComponent("q-input");
  const _component_q_select = resolveComponent("q-select");
  const _component_q_icon = resolveComponent("q-icon");
  const _component_q_popup_proxy = resolveComponent("q-popup-proxy");
  const _component_q_date = resolveComponent("q-date");
  const _component_q_btn = resolveComponent("q-btn");
  const _component_q_toggle = resolveComponent("q-toggle");
  const _directive_close_popup = resolveDirective("close-popup");
  _push(`<!--[--><div class="container q-my-xl q-mx-xl">`);
  _push(ssrRenderComponent(_component_q_form, {
    onSubmit: $setup.onSubmit,
    onReset: $setup.onReset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row bg-white q-mt-sm"${_scopeId}><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Company Name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Employee ID"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Card No"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Full Name"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="row bg-white q-mt-sm"${_scopeId}><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Father's Name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Mother's Name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Spouse Name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_select, {
          filled: "",
          dense: "",
          options: $setup.options,
          label: "Marital Status"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="row bg-white q-mt-sm"${_scopeId}><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Place of Birth"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          filled: "",
          dense: "",
          modelValue: $setup.date,
          "onUpdate:modelValue": ($event) => $setup.date = $event,
          mask: "date",
          label: "Date of Birth",
          rules: ["date"]
        }, {
          append: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_q_icon, {
                name: "event",
                class: "cursor-pointer"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_popup_proxy, {
                      cover: "",
                      "transition-show": "scale",
                      "transition-hide": "scale"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_date, {
                            dense: "",
                            modelValue: $setup.date,
                            "onUpdate:modelValue": ($event) => $setup.date = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="row items-center justify-end"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_q_btn, mergeProps({
                                  label: "Close",
                                  color: "primary",
                                  flat: ""
                                }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "row items-center justify-end" }, [
                                    withDirectives(createVNode(_component_q_btn, {
                                      label: "Close",
                                      color: "primary",
                                      flat: ""
                                    }, null, 512), [
                                      [_directive_close_popup]
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_date, {
                              dense: "",
                              modelValue: $setup.date,
                              "onUpdate:modelValue": ($event) => $setup.date = $event
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "row items-center justify-end" }, [
                                  withDirectives(createVNode(_component_q_btn, {
                                    label: "Close",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [_directive_close_popup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_popup_proxy, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_date, {
                            dense: "",
                            modelValue: $setup.date,
                            "onUpdate:modelValue": ($event) => $setup.date = $event
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "row items-center justify-end" }, [
                                withDirectives(createVNode(_component_q_btn, {
                                  label: "Close",
                                  color: "primary",
                                  flat: ""
                                }, null, 512), [
                                  [_directive_close_popup]
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_q_icon, {
                  name: "event",
                  class: "cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_q_popup_proxy, {
                      cover: "",
                      "transition-show": "scale",
                      "transition-hide": "scale"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_date, {
                          dense: "",
                          modelValue: $setup.date,
                          "onUpdate:modelValue": ($event) => $setup.date = $event
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "row items-center justify-end" }, [
                              withDirectives(createVNode(_component_q_btn, {
                                label: "Close",
                                color: "primary",
                                flat: ""
                              }, null, 512), [
                                [_directive_close_popup]
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Official Contact"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Emergency Contact"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="row bg-white"${_scopeId}><div class="col-lg-6 col-md-6 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          modelValue: $setup.text,
          "onUpdate:modelValue": ($event) => $setup.text = $event,
          filled: "",
          dense: "",
          type: "textarea",
          label: "Permanent Address"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-6 col-md-6 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          modelValue: $setup.text,
          "onUpdate:modelValue": ($event) => $setup.text = $event,
          filled: "",
          dense: "",
          type: "textarea",
          label: "Present Address"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="row bg-white q-mt-sm"${_scopeId}><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_select, {
          filled: "",
          dense: "",
          modelValue: $setup.model,
          "onUpdate:modelValue": ($event) => $setup.model = $event,
          options: $setup.gender,
          label: "Gender"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          filled: "",
          dense: "",
          modelValue: _ctx.email,
          "onUpdate:modelValue": ($event) => _ctx.email = $event,
          type: "email",
          label: "Personal Email"
        }, {
          append: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_q_icon, { name: "mail" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_q_icon, { name: "mail" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          filled: "",
          dense: "",
          modelValue: _ctx.email,
          "onUpdate:modelValue": ($event) => _ctx.email = $event,
          type: "email",
          label: "Official Email"
        }, {
          append: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_q_icon, { name: "mail" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_q_icon, { name: "mail" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_select, {
          filled: "",
          dense: "",
          modelValue: $setup.model,
          "onUpdate:modelValue": ($event) => $setup.model = $event,
          options: $setup.religion,
          label: "Religion"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="row bg-white q-mt-sm"${_scopeId}><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_select, {
          filled: "",
          dense: "",
          modelValue: $setup.model,
          "onUpdate:modelValue": ($event) => $setup.model = $event,
          options: $setup.blood,
          label: "Blood Group"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "Nationality"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_input, {
          dense: "",
          filled: "",
          label: "NID"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row bg-white q-mt-sm" }, [
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Company Name"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Employee ID"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Card No"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Full Name"
              })
            ])
          ]),
          createVNode("div", { class: "row bg-white q-mt-sm" }, [
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Father's Name"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Mother's Name"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Spouse Name"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_select, {
                filled: "",
                dense: "",
                options: $setup.options,
                label: "Marital Status"
              }, null, 8, ["options"])
            ])
          ]),
          createVNode("div", { class: "row bg-white q-mt-sm" }, [
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Place of Birth"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode("div", null, [
                createVNode(_component_q_input, {
                  filled: "",
                  dense: "",
                  modelValue: $setup.date,
                  "onUpdate:modelValue": ($event) => $setup.date = $event,
                  mask: "date",
                  label: "Date of Birth",
                  rules: ["date"]
                }, {
                  append: withCtx(() => [
                    createVNode(_component_q_icon, {
                      name: "event",
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_popup_proxy, {
                          cover: "",
                          "transition-show": "scale",
                          "transition-hide": "scale"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_date, {
                              dense: "",
                              modelValue: $setup.date,
                              "onUpdate:modelValue": ($event) => $setup.date = $event
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "row items-center justify-end" }, [
                                  withDirectives(createVNode(_component_q_btn, {
                                    label: "Close",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [_directive_close_popup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Official Contact"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Emergency Contact"
              })
            ])
          ]),
          createVNode("div", { class: "row bg-white" }, [
            createVNode("div", { class: "col-lg-6 col-md-6 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                modelValue: $setup.text,
                "onUpdate:modelValue": ($event) => $setup.text = $event,
                filled: "",
                dense: "",
                type: "textarea",
                label: "Permanent Address"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "col-lg-6 col-md-6 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                modelValue: $setup.text,
                "onUpdate:modelValue": ($event) => $setup.text = $event,
                filled: "",
                dense: "",
                type: "textarea",
                label: "Present Address"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])
          ]),
          createVNode("div", { class: "row bg-white q-mt-sm" }, [
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_select, {
                filled: "",
                dense: "",
                modelValue: $setup.model,
                "onUpdate:modelValue": ($event) => $setup.model = $event,
                options: $setup.gender,
                label: "Gender"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                filled: "",
                dense: "",
                modelValue: _ctx.email,
                "onUpdate:modelValue": ($event) => _ctx.email = $event,
                type: "email",
                label: "Personal Email"
              }, {
                append: withCtx(() => [
                  createVNode(_component_q_icon, { name: "mail" })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                filled: "",
                dense: "",
                modelValue: _ctx.email,
                "onUpdate:modelValue": ($event) => _ctx.email = $event,
                type: "email",
                label: "Official Email"
              }, {
                append: withCtx(() => [
                  createVNode(_component_q_icon, { name: "mail" })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_select, {
                filled: "",
                dense: "",
                modelValue: $setup.model,
                "onUpdate:modelValue": ($event) => $setup.model = $event,
                options: $setup.religion,
                label: "Religion"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ])
          ]),
          createVNode("div", { class: "row bg-white q-mt-sm" }, [
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
                createVNode(_component_q_select, {
                  filled: "",
                  dense: "",
                  modelValue: $setup.model,
                  "onUpdate:modelValue": ($event) => $setup.model = $event,
                  options: $setup.blood,
                  label: "Blood Group"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "Nationality"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" }, [
              createVNode(_component_q_input, {
                dense: "",
                filled: "",
                label: "NID"
              })
            ]),
            createVNode("div", { class: "col-lg-3 col-md-4 col-sm-12 q-px-sm" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="q-pa-md" style="${ssrRenderStyle({ "max-width": "400px" })}">`);
  _push(ssrRenderComponent(_component_q_form, {
    onSubmit: $setup.onSubmit,
    onReset: $setup.onReset,
    class: "q-gutter-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_toggle, {
          class: "q-ml-xl",
          modelValue: $setup.accept,
          "onUpdate:modelValue": ($event) => $setup.accept = $event,
          label: "I accept the license and terms"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_btn, {
          label: "Submit",
          type: "submit",
          color: "info",
          class: "q-ml-xl"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_btn, {
          label: "Reset",
          type: "reset",
          color: "primary",
          class: "q-ml-md"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_q_toggle, {
            class: "q-ml-xl",
            modelValue: $setup.accept,
            "onUpdate:modelValue": ($event) => $setup.accept = $event,
            label: "I accept the license and terms"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode("div", null, [
            createVNode(_component_q_btn, {
              label: "Submit",
              type: "submit",
              color: "info",
              class: "q-ml-xl"
            }),
            createVNode(_component_q_btn, {
              label: "Reset",
              type: "reset",
              color: "primary",
              class: "q-ml-md"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/page/employeeInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const employeeInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  employeeInfo as default
};
