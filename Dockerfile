# AetherPro Apriel Router
# =======================
# Production-grade container for enterprise agentic routing

FROM python:3.11-slim

LABEL maintainer="AetherPro Technologies LLC"
LABEL description="Enterprise Agentic Router for Apriel-1.5-15B-Thinker"
LABEL version="1.0.0"

# Security: Run as non-root
RUN useradd --create-home --shell /bin/bash aether
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY main.py .

# Set ownership
RUN chown -R aether:aether /app
USER aether

# Environment defaults
ENV VLLM_BASE_URL="http://localhost:8000/v1"
ENV AETHER_API_KEY="sk-aether-sovereign-master-key-2026"
ENV SEARCH_API_URL="http://localhost:8080/search"
ENV DEFAULT_MODEL="apriel-1.5-15b-thinker"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import httpx; httpx.get('http://localhost:8001/health').raise_for_status()"

# Expose port
EXPOSE 8001

# Production command with Gunicorn + Uvicorn workers
CMD ["gunicorn", "main:app", \
     "--bind", "0.0.0.0:8001", \
     "--worker-class", "uvicorn.workers.UvicornWorker", \
     "--workers", "4", \
     "--timeout", "120", \
     "--keep-alive", "5", \
     "--access-logfile", "-", \
     "--error-logfile", "-"]

