# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('statistics', '0005_contentpoint_point_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='session_statistics',
            field=models.CharField(default=b'JF', max_length=3, choices=[(b'S', b'Statistics Only'), (b'C', b'Point Content Only'), (b'JF', b'Single Form Statistics'), (b'SF', b'Split Form Statistics'), (b'N/A', b'No Statistics (Only Voting)')]),
        ),
    ]
