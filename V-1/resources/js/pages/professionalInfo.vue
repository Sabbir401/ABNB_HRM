<script>
export default {
  data() {
    return {
      exams: [
        {
          exam: "SSC",
          subject: "xxxx",
          board: "xxx",
          percentage: 61,
          year: "2011/04/25",
          totalMarks: "$320,800",
          passingDate: "2011/04/25",
          result: "$320,800",
        },
        {
          exam: "SSC",
          subject: "xxxx",
          board: "xxx",
          percentage: 61,
          year: "2011/04/25",
          totalMarks: "$320,800",
          passingDate: "2011/04/25",
          result: "$320,800",
        },
        // Add more exam data objects as needed
      ],
    };
  },
};
</script>
<template>
  <div class="container mt-5">
    <div class="d-flex">
      <h2 class="fs-4 m-2">Academic Information</h2>
      <button
        type="button"
        class="btn btn-primary m-2"
        data-bs-toggle="modal"
        data-bs-target="#academic"
        data-bs-whatever="@fat"
      >
        Add New
      </button>
    </div>

    <div
      class="modal fade"
      id="academic"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Academic Information
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="" class="">Degree</label>
                  <select name="" id="" class="form-control">
                    <option value="">-select-</option>
                    <option value="">SSC</option>
                    <option value="">HSC</option>
                  </select>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Institute</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class=""
                    >Board/University</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="" class="">Scale</label>
                  <select name="" id="" class="form-control">
                    <option value="">-select-</option>
                    <option value="">4.00</option>
                    <option value="">5.00</option>
                    <option value="">Division</option>
                  </select>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Result</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class=""
                    >Year of Passing</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class="">Achievement</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class="">Remarks</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <button type="reset" class="btn btn-danger m-2">Reset</button>
              <button type="submit" class="btn btn-primary m-2">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div>
      <table
        id="dtBasicExample"
        class="table table-striped table-bordered table-sm mb-4"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th class="th-sm">Degree</th>
            <th class="th-sm">Institute</th>
            <th class="th-sm">Board/University</th>
            <th class="th-sm">Scale</th>
            <th class="th-sm">Result</th>
            <th class="th-sm">Year of Passing</th>
            <th class="th-sm">Acheivement</th>
            <th class="th-sm">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(exam, index) in exams" :key="index">
            <td>{{ exam.exam }}</td>
            <td>{{ exam.subject }}</td>
            <td>{{ exam.board }}</td>
            <td>{{ exam.percentage }}</td>
            <td>{{ exam.year }}</td>
            <td>{{ exam.totalMarks }}</td>
            <td>{{ exam.passingDate }}</td>
            <td>{{ exam.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex">
      <h2 class="fs-4 m-2">Training Information</h2>
      <button
        type="button"
        class="btn btn-primary m-2"
        data-bs-toggle="modal"
        data-bs-target="#training"
        data-bs-whatever="@fat"
      >
        Add New
      </button>
    </div>

    <div
      class="modal fade"
      id="training"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Training Information
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="" class="">Training Title</label>
                  <select name="" id="" class="form-control">
                    <option value="">-select-</option>
                    <option value="">SSC</option>
                    <option value="">HSC</option>
                  </select>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Organized By</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class=""
                    >Topics Covered</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div class="row mb-2"></div>

              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">From Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">To Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class="">Remarks</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <button type="reset" class="btn btn-danger m-2">Reset</button>
              <button type="submit" class="btn btn-primary m-2">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div>
      <table
        id="dtBasicExample"
        class="table table-striped table-bordered table-sm"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th class="th-sm">Training Title</th>
            <th class="th-sm">Organized By</th>
            <th class="th-sm">Topic Covered</th>
            <th class="th-sm">From Date</th>
            <th class="th-sm">To Date</th>
            <th class="th-sm">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SSC</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex">
      <h2 class="fs-4 m-2">Work Experience</h2>
      <button
        type="button"
        class="btn btn-primary m-2"
        data-bs-toggle="modal"
        data-bs-target="#work"
        data-bs-whatever="@fat"
      >
        Add New
      </button>
    </div>

    <div
      class="modal fade"
      id="work"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Work Experience</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Company Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class=""
                    >Company Business</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class=""
                    >Company Address</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Designation</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Job Nature</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">From Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">To Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class=""
                    >Job Responsibilities</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Last Salary</label>
                  <input
                    type="date"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <label for="exampleInputEmail1" class="">Continuing</label>
                  <input
                    type="text"
                    class="form-control"
                    id="disabledTextInput"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-12 col-sm-12">
                  <label for="exampleInputEmail1" class="">Remarks</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <button type="reset" class="btn btn-danger m-2">Reset</button>
              <button type="submit" class="btn btn-primary m-2">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div>
      <table
        id="dtBasicExample"
        class="table table-striped table-bordered table-sm mb-4"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th class="th-sm">Company Name</th>
            <th class="th-sm">Company Business</th>
            <th class="th-sm">Company Address</th>
            <th class="th-sm">Designation</th>
            <th class="th-sm">Job Nature</th>
            <th class="th-sm">From Date</th>
            <th class="th-sm">To Date</th>
            <th class="th-sm">Job Responsibility</th>
            <th class="th-sm">Last Salary</th>
            <th class="th-sm">Continuing</th>
            <th class="th-sm">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SSC</td>
            <td>xxxx</td>
            <td>xxx</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>xxxx</td>
            <td>xxx</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>xxxx</td>
            <td>xxx</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>xxxx</td>
            <td>xxx</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>$320,800</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.modal-dialog {
  max-width: 40% !important;
}

@media screen and (max-width: 480px) {
  .modal-dialog {
    max-width: 90% !important;
  }
}
</style>



