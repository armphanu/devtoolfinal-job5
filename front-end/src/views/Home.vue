<template>
  <div class="home" style="background-color: rgb(115, 187, 169)">
    <div class="container">
      <div>
        <p
          class="
            has-text-left has-text-white
            is-size-4
            has-text-weight-semibold
          "
        >
          ระบบรับสมัครนักศึกษาระดับปริญญาโท
        </p>
        <p
          class="has-text-left is-size-4 has-text-weight-semibold"
          style="
            color: #ff3c00;
            background-color: hsla(0, 0%, 100%, 0.7);
            padding: 0 10px 0 10px;
            width: 50%;
          "
        >
          สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </p>
        <button class="button is-rounded is-black">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          <span>ค้นหาหลักสูตร | ปริญญาโท</span>
        </button>
        <div style="background-color: white">
          <div class="columns">
            <div class="column is-full">ค้นหาหลักสูตรที่เปิด</div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <div class="field">
                <label class="label">ค้นหา 'คณะ'</label>
                <div class="control">
                  <div class="select">
                    <select v-model="s_f" disabled="disabled">
                      <option></option>
                      <option>อุตสาหกรรมอาหาร</option>
                      <option>ครุศาสตร์อุตสาหกรรมและเทคโนโลยี</option>
                      <option>แพทยศาสตร์</option>
                      <option>สถาปัตยกรรม ศิลปะและการออกแบบ</option>
                      <option>เทคโนโลยีการเกษตร</option>
                      <option>วิทยาศาสตร์</option>
                      <option>เทคโนโลยีสารสนเทศ</option>
                      <option>เทคโนโลยีและนวัตกรรมวัสดุ</option>
                      <option>วิทยาเขตชุมพรเขตรอุดมศักดิ์</option>
                      <option>บริหารธุรกิจ</option>
                      <option>ศิลปศาสตร์</option>
                      <option>วิศวกรรมศาสตร์</option>
                      <option>นวัตกรรมการผลิตขั้นสูง</option>
                      <option>วิศวกรรมสังคีต</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <label class="label">ค้นหา 'รอบรับสมัคร'</label>
                <div class="control">
                  <div class="select">
                    <select v-model="s_r" disabled="disabled">
                      <option></option>
                      <option>
                        ( 1/2565 ) รอบ 1 - รับสมัครประจำภาคการศึกษา
                      </option>
                      <option>
                        ( 1/2565 ) รอบ 1 -
                        รับสมัครแบบเลือกเข้าศึกษาในภาคการศึกษาที่ต้องการ
                      </option>
                      <option>
                        ( 2/2565 ) รอบ 1 - รับสมัครประจำภาคการศึกษา
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <div class="field">
                <label class="label">ค้นหา 'โครงการ'</label>
                <div class="control">
                  <div class="select">
                    <select v-model="s_p">
                      <option></option>
                      <option>
                        รับเข้าเทอม 1/2565
                        คณะเทคโนโลยีการเกษตร(โครงการแววนวัตกร)
                      </option>
                      <option>รับเข้า 2/2565 คณะเทคโนโลยีการเกษตร</option>

                      <option>
                        รับเข้าเทอม 1/2565 คณะวิทยาศาสตร์ โครงการแววนวัตกร
                      </option>
                      <option>
                        รับเข้า 1/2565 คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี
                        (โครงการแววนวัตกร)
                      </option>
                      <option>
                        Semester 2/2565 School of Industrial Education and
                        Technology
                      </option>
                      <option>
                        รับเข้าเทอม 1/2565 คณะเทคโนโลยีสารสนเทศ โครงการแววนวัตกร
                      </option>
                      <option>รับเข้าเทอม 1/2565 คณะเทคโนโลยีสารสนเทศ</option>
                      <option>
                        รับเข้าเทอม 1/2565 วิทยาลัยเทคโนโลยีและนวัตกรรมวัสดุ
                        โครงการแววนวัตกร
                      </option>
                      <option>
                        รับเข้า 1/2565 วิทยาเขตชุมพรเขตรอุดมศักดิ์
                      </option>
                      <option>
                        รับเข้า 1/2565 วิทยาเขตชุมพรเขตรอุดมศักดิ์
                        (โครงการแววนวัตกร)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <label class="label">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
                <div class="control">
                  <div class="select">
                    <select v-model="s_thoeng" disabled="disabled">
                      <option></option>
                      <option>หลักสูตรนานาชาติ</option>
                      <option>หลักสูตรไทย</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full">
              <div class="field">
                <label class="label"
                  >คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ)
                  [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label
                >
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" disabled="disabled"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button is-rounded is-black" @click="search">
          <span>ค้นหา</span>
        </button>
        <div style="background-color: white">
          <h3 class="has-text-left">ผลการค้นหา:{{ count }} รายการ</h3>
        </div>
        <div style="background-color: hsla(0, 0%, 100%, 0.67)">
          <h3 class="has-text-left">กทม.</h3>
          <p class="has-text-left has-text-danger">
            หมายเหตุ กรณีเปลี่ยนสาขาวิชาที่สมัครหรืออันดับหรือโครงการที่สมัคร
            ต้องสมัครใหม่ และชำระเงินค่าสมัครใหม่เท่านั้น โดยสถาบันฯ
            จะถือว่าการสมัครครั้งสุดท้ายที่มีการชําระเงินค่าสมัครเรียบร้อยแล้วเป็นครั้งที่ต้องการเข้าสอบ
            และครั้งที่สมัครก่อนหน้าจะถือเป็นโมฆะ
            แม้ว่าจะชําระเงินค่าสมัครแล้วก็ตาม
          </p>
          <div
            style="
              border-radius: 4px;
              background-color: #fff;
              padding: 4px !important;
              margin: 12px !important;
            "
            v-for="(value, index) in post"
            id="item"
            :key="index"
          >
            <h3 class="has-text-left">หลักสูตร : {{ value.course }}</h3>
            <h3 class="has-text-left">
              แผนการศึกษา : {{ value.plan }} | ช่วงเวลาเรียน {{ value.time }} |
              เฉพาะ :
            </h3>
            <div class="buttons are-small">
              <button class="button is-rounded">{{ value.year }}</button>
              <button class="button is-rounded">
                {{ value.round }}
              </button>
              <button class="button is-rounded">
                {{ value.program }}
              </button>
            </div>
            <h6 class="has-text-left">คณะ {{ value.faculty }}</h6>
            <p class="has-text-left">หลักสูตร : {{ value.course }}</p>
            <p class="has-text-left">วันที่เปิดรับสมัคร : {{ value.date }}</p>
            <div class="buttons are-medium">
              <button class="button is-info">สมัคร</button>
              <button class="button is-link">ประกาศรับสมัคร</button>
              <button class="button is-danger">คุณสมบัติผู้สมัคร</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      s_f: "",
      s_r: "",
      s_p: "",
      s_thoeng: "",
      post: [],
      cpy_post: [],
      count: 0,
    };
  },

  methods: {
    search() {
      this.cpy_post = this.post;
      if (this.s_p != "") {
        var program = "โครงการ "+this.s_p
        var newArray = this.post.filter(function (el) {
          if(el.program == program){
            console.log('test')
            return el;
          }
          
          
          
        });
        console.log(newArray);
        this.post = newArray
        this.count = this.post.length;
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/post")
      .then((res) => {
        this.post = res.data;
        this.count = this.post.length;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
