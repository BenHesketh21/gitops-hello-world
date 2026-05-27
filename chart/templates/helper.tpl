{{ define "chart.fullname" -}}
{{- printf "%s-%s" .Values.serviceName .Values.environment | trunc 63 | trimSuffix "-" -}}
{{- end }}