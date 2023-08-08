import http from "./http-common";


const get = () => {
  return http.get("/task-list/");
};

const add = data => {
  return http.post("/task-create", data);
};

const update = (id, data) => {
  return http.put(`/task-update/${id}`, data);
};

const remove = id => {
  return http.delete(`/task-delete/${id}`);
};

/**
 * path('', views.apiOverview, name="api-overview"),
    path('task-list/', views.taskList, name="task-list"),
    path('task-detail/<str:pk>', views.taskDetail, name="task-detail"),
    path('task-create/', views.taskCreate, name="task-create"),

	path('task-update/<str:pk>/', views.taskUpdate, name="task-update"),
	path('task-delete/<str:pk>/', views.taskDelete, name="task-delete"),
 */

export default {
  
  get,
  add,
  update,
  remove,

};