from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'get_user_type_display', 'unique_id', 'is_staff')
    fieldsets = UserAdmin.fieldsets + (
        ('HealthVault Info', {'fields': ('user_type', 'unique_id')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('HealthVault Info', {'fields': ('user_type', 'unique_id')}),
    )

admin.site.register(User, CustomUserAdmin)