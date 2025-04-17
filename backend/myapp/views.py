from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import HealthRecord, User

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_record(request):
    if request.user.user_type != 'DOCTOR':
        return Response({"error": "Only doctors can create records"}, status=403)
    
    record = HealthRecord.objects.create(
        patient_id=request.data['patient_id'],
        doctor=request.user,
        record_type=request.data['record_type'],
        value=request.data['value']
    )
    return Response({"success": True, "record_id": str(record._id)})

@api_view(['GET'])
def get_records(request):
    if request.user.user_type == 'PATIENT':
        records = HealthRecord.objects.filter(patient=request.user)
    else:
        records = HealthRecord.objects.filter(doctor=request.user)
    return Response(records.values())