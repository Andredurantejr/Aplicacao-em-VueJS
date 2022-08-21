import http from "../http-common";
class PostDataService {
  getAll() {
    return http.get("/posts");
  }
  get(id) {
    return http.get(`/posts/${id}`);
  }
  create(data) {
    return http.post("/posts?access-token=ecf9afa1116e7afb6bc18045aea73a86211c11fc06305d9216a8b4f6c3e75523", data);
  }
  update(id, data) {
    return http.put(`/posts/${id}?access-token=ecf9afa1116e7afb6bc18045aea73a86211c11fc06305d9216a8b4f6c3e75523`, data);
  }
  delete(id) {
    return http.delete(`/posts/${id}?access-token=ecf9afa1116e7afb6bc18045aea73a86211c11fc06305d9216a8b4f6c3e75523`);
  }
  deleteAll() {
    return http.delete(`/posts?access-token=ecf9afa1116e7afb6bc18045aea73a86211c11fc06305d9216a8b4f6c3e75523`);
  }
  findByNome(user_id) {
    return http.get(`/posts?user_id=${user_id}`);
  }
}
export default new PostDataService();