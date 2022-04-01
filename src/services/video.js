import request from "./request";
// import api from "constants/api";
// import method from "../constants/method";

export function videoRecommends(params) {
  return request({
    url: "/api/Course/filterCourses",
    method: "post",
    data: params,
  });
}
