from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import Employee
from .serializers import EmployeeSerializer


class EmployeeListCreateView(APIView):

    # GET API
    def get(self, request):

        employees = Employee.objects.filter(
            is_deleted=False
        )
        

        serializer = EmployeeSerializer(
            employees,
            many=True
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )

    # POST API

    def post(self, request):

        serializer = EmployeeSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

 # GET SINGLE EMPLOYEE
    def get(self, request, pk):

        try:

            employee = Employee.objects.get(
                pk=pk,
                is_deleted=False
            )

            serializer = EmployeeSerializer(employee)

            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )

        except Employee.DoesNotExist:

            return Response(
                {
                    "message": "Employee not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )

    # UPDATE EMPLOYEE

    def put(self, request, pk):

        try:

            employee = Employee.objects.get(
                pk=pk,
                is_deleted=False
            )

        except Employee.DoesNotExist:

            return Response(
                {
                    "message": "Employee not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = EmployeeSerializer(
            employee,
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # DELETE EMPLOYEE (SOFT DELETE)

    def delete(self, request, pk):

        try:

            employee = Employee.objects.get(
                pk=pk,
                is_deleted=False
            )

            employee.is_deleted = True

            employee.save()

            return Response(
                {
                    "message": "Employee deleted successfully"
                },
                status=status.HTTP_200_OK
            )

        except Employee.DoesNotExist:

            return Response(
                {
                    "message": "Employee not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
