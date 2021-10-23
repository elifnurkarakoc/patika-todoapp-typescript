import * as yup from "yup";

const max = 50;
const min = 5;
export const validationSchema = yup.object().shape({
    title: yup.string().required("Title is the required field").min(min).max(max),
    date: yup.date().nullable().typeError('Invalid Date').required("Date is the required field").min(new Date(), "You can't choose a past date!"),//yup.date().required("Date is the required field").min(new Date(), "You can't choose a past date!"),
    tag: yup.string().required("Tag must be selected"),
    description: yup.string().required("Description is the required field"),
    important: yup.boolean(),
    completed: yup.boolean(),
    deleted: yup.boolean(),
});
