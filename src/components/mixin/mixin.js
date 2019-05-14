const mixin = {
    data() {
        return {
            defaultNav: 0
        }
    },
    created() {
        this.defaultNav = this.$route.query.nav_index;
    }
}

//获取验证码倒计时
const timer = {
    data() {
        return {
            content: "获取验证码", // 按钮里显示的内容
            totalTime: 60, //记录具体倒计时时间
            canClick: true, //添加canClick
            seccode_err: false //控制验证码错误提示是否显示
        };
    },
    methods: {
        gainCodeHandler() {

            if (!this.canClick) return;
            this.seccode_err = false
            this.canClick = false;
            this.content = this.totalTime + "s";
            let clock = window.setInterval(() => {
                this.totalTime--;
                this.content = this.totalTime + "s";
                if (this.totalTime < 0) {
                    window.clearInterval(clock);
                    this.content = "获取验证码";
                    this.totalTime = 60;
                    this.canClick = true; //这里重新开启
                }
            }, 1000);
        },
        seccodeChange(e) {
            this.seccode_err = false;
        },
    }
}

//表单验证
const FormValidator = {
    data() {
        return {
            phone1_success: false, //手机号
            seccode_err: false //验证码
        }
    },
    mounted() {
        this.form.validateFields();
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.seccode_err = true;
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            });
        },
        hasErrors(fieldsError) {
            return Object.keys(fieldsError).some(field => {
                return fieldsError[field];
            });
        },
        seccodeChange(e) {
            this.seccode_err = false;
        },
        Error(field) {
            const {
                getFieldError,
                isFieldTouched,
                getFieldValue,
                setFieldsValue
            } = this.form;
            const val = getFieldValue(field);

            switch (field) {
                case "phone1":
                    this.phone1_success =
                        val && getFieldError(field) == undefined ? true : false;

                    break;
                case "phone2":
                    this.phone2_success =
                        val != "" && getFieldError(field) == undefined ? true : false;
            }
            return isFieldTouched(field) && getFieldError(field);
        }
    }
}

export {
    mixin,
    timer,
    FormValidator
}