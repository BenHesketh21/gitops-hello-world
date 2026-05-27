# ArgoCD Configuration Documentation

This directory contains the configuration files for managing the deployment of the Hello World application using ArgoCD. 

## Overview

ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. It allows you to manage your applications and their deployments through Git repositories.

## Structure

- **applications/**: Contains the ArgoCD application definitions for both the frontend and API services.
  - `frontend.yaml`: Configuration for the frontend application.
  - `api.yaml`: Configuration for the API application.

## Getting Started

1. Ensure you have ArgoCD installed and configured in your Kubernetes cluster.
2. Add the Git repository containing this project to ArgoCD.
3. Create applications in ArgoCD using the YAML files in the `applications` directory.
4. Monitor and manage your applications through the ArgoCD UI or CLI.

## Additional Resources

- [ArgoCD Documentation](https://argo-cd.readthedocs.io/en/stable/)
- [GitOps Principles](https://www.gitops.tech/)