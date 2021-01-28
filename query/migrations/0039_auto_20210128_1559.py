# Generated by Django 3.1.5 on 2021-01-28 15:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0038_events_eventdescription'),
    ]

    operations = [
        migrations.AlterField(
            model_name='links',
            name='class_day',
            field=models.DateField(default='2021-01-28'),
        ),
        migrations.CreateModel(
            name='NotificationBlog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seen', models.BooleanField(default=False)),
                ('title', models.CharField(default=None, max_length=255)),
                ('description', models.TextField(default=None)),
                ('visibility_time', models.DateTimeField(default=None)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='query.studentuser')),
            ],
        ),
    ]