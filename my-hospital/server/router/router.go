package routes

import (
    "hospital/Controllers"
    "github.com/gorilla/mux"
)

func SetupRoutes(r *mux.Router) *mux.Router {
    r.HandleFunc("/doctors", Controllers.CreateDoctorHandler).Methods("POST")
    r.HandleFunc("/patients", Controllers.CreatePatientHandler).Methods("POST")
    r.HandleFunc("/getdoctors", Controllers.GetAllDoctorsHandler).Methods("GET")
    r.HandleFunc("/getpatients", Controllers.GetAllPatientsHandler).Methods("GET")
    r.HandleFunc("/getdoctor/{id}", Controllers.GetDoctorByIDHandler).Methods("GET")
    r.HandleFunc("/getpatient/{id}", Controllers.GetPatientByIDHandler).Methods("GET")
    r.HandleFunc("/createappointments", Controllers.CreateAppointmentHandler).Methods("POST")
    r.HandleFunc("/getappointments", Controllers.GetAppointmentHandler).Methods("GET")
    return r
}
