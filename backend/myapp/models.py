from djongo import models

class User(models.Model):
    USER_TYPES = (('DOCTOR', 'Doctor'), ('PATIENT', 'Patient'))
    username = models.CharField(max_length=100, unique=True)
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    unique_id = models.CharField(max_length=20, unique=True)

class HealthRecord(models.Model):
    _id = models.ObjectIdField()
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_records')
    record_type = models.CharField(max_length=100)  # e.g., "Blood Pressure"
    value = models.JSONField()  # {"systolic": 120, "diastolic": 80}
    date_created = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)