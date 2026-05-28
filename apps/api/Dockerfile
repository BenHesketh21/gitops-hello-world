FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
LABEL org.opencontainers.image.source=https://github.com/BenHesketh21/gitops-hello-world
COPY app.py ./
EXPOSE 5000
CMD ["python", "app.py"]
