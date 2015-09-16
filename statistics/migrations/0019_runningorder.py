# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('statistics', '0018_committee_next_subtopics'),
    ]

    operations = [
        migrations.CreateModel(
            name='RunningOrder',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('position', models.PositiveSmallIntegerField()),
                ('point_type', models.CharField(default=b'P', max_length=2, choices=[(b'P', b'Point'), (b'DR', b'Direct Response')])),
                ('committee_by', models.ForeignKey(to='statistics.Committee')),
                ('session', models.ForeignKey(to='statistics.Session')),
            ],
        ),
    ]
