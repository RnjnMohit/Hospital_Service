package Controllers

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"hospital/database"
	"hospital/model"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateDoctor(doctor models.Doctor) error {
    doctorCollection := database.GetDoctorCollection()

    // Check if doctor exists
    filter := bson.M{"email": doctor.Email}
    var existingDoctor models.Doctor

    err := doctorCollection.FindOne(context.TODO(), filter).Decode(&existingDoctor)
    if err != nil && err != mongo.ErrNoDocuments {
        return err
    }

    if existingDoctor.Email != "" {
		fmt.Println("Doctor already exists")
        return errors.New("Doctor Already exists")
    }

    // Set license expiry
    doctor.License = time.Now().AddDate(2, 3, 5)

    // Insert new doctor
    _, err = doctorCollection.InsertOne(context.TODO(), doctor)
    return err
}

func CreatePatient(patient models.Patients) error {
    patientCollection := database.GetPatientCollection()

    // Check if patient exists
    filter := bson.M{"email": patient.Email}
    var existingPatient models.Patients

    err := patientCollection.FindOne(context.TODO(), filter).Decode(&existingPatient)
    if err != nil && err != mongo.ErrNoDocuments {
        return err
    }

    if existingPatient.Email != "" {
		fmt.Println("Patient Already Exists")
        return errors.New("Patient Already exists")
    }

    // Insert new patient
    _, err = patientCollection.InsertOne(context.TODO(), patient)
    return err
}

func CreateDoctorHandler(w http.ResponseWriter, r *http.Request) {
    var doctor models.Doctor

    // Decode the JSON request body into the doctor struct
    err := json.NewDecoder(r.Body).Decode(&doctor)
    if err != nil {
        http.Error(w, "Error decoding request body", http.StatusBadRequest)
        return
    }

    // Call the controller function to create the doctor
    err = CreateDoctor(doctor)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
    w.Write([]byte("Doctor created successfully"))
}

func CreatePatientHandler(w http.ResponseWriter, r *http.Request) {
    var patient models.Patients

    // Decode the JSON request body into the patient struct
    err := json.NewDecoder(r.Body).Decode(&patient)
    if err != nil {
        http.Error(w, "Error decoding request body", http.StatusBadRequest)
        return
    }

    // Call the controller function to create the patient
    err = CreatePatient(patient)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
    w.Write([]byte("Patient created successfully"))
}

func GetAllDoctorsHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodGet{
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

    doctorCollection := database.GetDoctorCollection()

    // Retrieve all doctors from the database
    cursor, err := doctorCollection.Find(context.TODO(), bson.M{})
    if err != nil {
        http.Error(w, "Error retrieving doctors", http.StatusInternalServerError)
        return
    }
    defer cursor.Close(context.TODO())

    var doctors []models.Doctor
    // Iterate over the cursor and decode each doctor into the slice
    for cursor.Next(context.Background()) {
        var doctor models.Doctor
        if err := cursor.Decode(&doctor); err != nil {
            http.Error(w, "Error decoding doctor", http.StatusInternalServerError)
            return
        }
        doctors = append(doctors, doctor)
    }

    // Convert doctors slice to JSON
    doctorsJSON, err := json.Marshal(doctors)
    if err != nil {
        http.Error(w, "Error encoding doctors to JSON", http.StatusInternalServerError)
        return
    }

    // Send JSON response
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write(doctorsJSON)
}

func GetAllPatientsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet{
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

    patientCollection := database.GetPatientCollection()

    // Retrieve all patients from the database
    cursor, err := patientCollection.Find(context.TODO(), bson.M{})
    if err != nil {
        http.Error(w, "Error retrieving patients", http.StatusInternalServerError)
        return
    }
    defer cursor.Close(context.TODO())

    var patients []models.Patients
    // Iterate over the cursor and decode each patient into the slice
    for cursor.Next(context.Background()) {
        var patient models.Patients
        if err := cursor.Decode(&patient); err != nil {
            http.Error(w, "Error decoding patient", http.StatusInternalServerError)
            return
        }
        patients = append(patients, patient)
    }
	fmt.Println(len(patients))

    // Convert patients slice to JSON
    patientsJSON, err := json.Marshal(patients)
    if err != nil {
        http.Error(w, "Error encoding patients to JSON", http.StatusInternalServerError)
        return
    }

    // Send JSON response
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write(patientsJSON)
}

func GetDoctorByIDHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet{
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}
    // Extract doctor ID from URL parameters
    doctorID := mux.Vars(r)["id"]

    doctorCollection := database.GetDoctorCollection()

    var doctor models.Doctor
    // Retrieve doctor from the database using the provided ID
    err := doctorCollection.FindOne(context.TODO(), bson.M{"_id": doctorID}).Decode(&doctor)
    if err != nil {
        if err == mongo.ErrNoDocuments {
            http.Error(w, "Doctor not found", http.StatusNotFound)
            return
        }
        http.Error(w, "Error retrieving doctor", http.StatusInternalServerError)
        return
    }

    // Convert doctor to JSON
    doctorJSON, err := json.Marshal(doctor)
    if err != nil {
        http.Error(w, "Error encoding doctor to JSON", http.StatusInternalServerError)
        return
    }

    // Send JSON response
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write(doctorJSON)
}

func GetPatientByIDHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet{
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}
    // Extract patient ID from URL parameters
    patientID := mux.Vars(r)["id"]

    patientCollection := database.GetPatientCollection()

    var patient models.Patients
    // Retrieve patient from the database using the provided ID
    err := patientCollection.FindOne(context.TODO(), bson.M{"_id": patientID}).Decode(&patient)
    if err != nil {
        if err == mongo.ErrNoDocuments {
            http.Error(w, "Patient not found", http.StatusNotFound)
            return
        }
        http.Error(w, "Error retrieving patient", http.StatusInternalServerError)
        return
    }

    // Convert patient to JSON
    patientJSON, err := json.Marshal(patient)
    if err != nil {
        http.Error(w, "Error encoding patient to JSON", http.StatusInternalServerError)
        return
    }

    // Send JSON response
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write(patientJSON)
}
