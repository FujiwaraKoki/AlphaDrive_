from django.db import models


class ShiftType(models.Model):
    name = models.CharField(max_length=255)  # シフトの名称（例： "Aシフト"）
    start_time = models.TimeField()  # シフトの開始時間
    end_time = models.TimeField()  # シフトの終了時間
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時
    updated_at = models.DateTimeField(auto_now=True)  # 更新日時

    class Meta:
        db_table = 'shift_type'  # オプション: テーブル名を変更する場合


class GroupCompany(models.Model):
    name = models.CharField(max_length=255)  # 会社の名称
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時
    updated_at = models.DateTimeField(auto_now=True)  # 更新日時

    class Meta:
        db_table = 'group_company'  # オプション: テーブル名を変更する場合


class EmployeeShift(models.Model):
    # user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE)  # 従業員
    user = models.IntegerField()  # 従業員
    # shift_type = models.ForeignKey(ShiftType, on_delete=models.CASCADE)  # シフトタイプ
    shift_type = models.IntegerField()  # シフトタイプ
    work_day = models.DateField()  # 勤務日
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時
    updated_at = models.DateTimeField(auto_now=True)  # 更新日時

    class Meta:
        db_table = 'employee_shift'  # オプション: テーブル名を変更する場合


class MaxOfficeHour(models.Model):
    # user = models.OneToOneField('users.CustomUser', on_delete=models.CASCADE)  # 従業員
    user = models.IntegerField()  # 従業員
    max_hours = models.DecimalField(max_digits=5, decimal_places=2)  # 最大勤務時間
    year = models.IntegerField()  # 年
    month = models.IntegerField()  # 月
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時
    updated_at = models.DateTimeField(auto_now=True)  # 更新日時

    class Meta:
        db_table = 'max_office_hour'  # オプション: テーブル名を変更する場合
