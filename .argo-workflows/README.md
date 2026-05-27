# Argo Workflows Documentation

This directory contains the Argo workflows for deploying the Hello World application services, including both the frontend and API components.

## Overview

Argo Workflows is an open-source container-native workflow engine for Kubernetes. It allows you to define workflows as a series of steps that can be executed in a Kubernetes cluster.

## Workflows

### Deploy Frontend

The `deploy-frontend.yaml` file defines the workflow for deploying the frontend service. It includes steps for building the frontend application and deploying it to the specified environment.

### Deploy API

The `deploy-api.yaml` file defines the workflow for deploying the API service. It includes steps for building the API application and deploying it to the specified environment.

## Usage

To execute a workflow, you can use the Argo CLI or the Argo UI. Ensure that your Kubernetes cluster is set up and that Argo Workflows is installed.

1. **Install Argo CLI**: Follow the [installation instructions](https://argoproj.github.io/argo-workflows/quick-start/) for the Argo CLI.
2. **Submit a Workflow**: Use the following command to submit a workflow:
   ```
   argo submit <workflow-file>
   ```
3. **Check Workflow Status**: You can check the status of your workflows using:
   ```
   argo get <workflow-name>
   ```

For more detailed information on how to manage workflows, refer to the [Argo Workflows documentation](https://argoproj.github.io/argo-workflows/).