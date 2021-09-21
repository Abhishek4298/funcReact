import { useFormik } from "formik";

const Useformik = () => {
  const initialValues = {
    name: "",
    email: "",
    age: "",
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const validate = (values) => {
    console.log("~ values", values);
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
      console.log("no name ");
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.age) {
      errors.age = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("~ visite", formik.touched);

  return (
    <>
      <h1>Form useformik</h1>
      <form onSubmit={formik.handleSubmit} className="box-wrapper">
        <div className="container">
          <div className="row">
            {/* <div className="form-control"> */}
            <label>Name</label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
            <br />
            <label>Email</label>
            <input
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <br />
            <label>Age</label>
            <input
              name="age"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.age}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="error">{formik.errors.age}</div>
            ) : null}
            <br />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* </div> */}
      </form>
    </>
  );
};

export default Useformik;
