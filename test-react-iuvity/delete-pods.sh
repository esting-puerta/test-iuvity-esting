#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to display usage
show_usage() {
    echo -e "${YELLOW}Usage:${NC}"
    echo "  ./delete-pods.sh [options]"
    echo ""
    echo -e "${YELLOW}Options:${NC}"
    echo "  -a, --all           Delete all pods in the current namespace"
    echo "  -l, --label         Delete pods with specific label (format: key=value)"
    echo "  -n, --namespace     Specify namespace (default: current namespace)"
    echo "  -f, --force         Force delete pods without waiting for graceful termination"
    echo "  -h, --help          Show this help message"
    echo ""
    echo -e "${YELLOW}Examples:${NC}"
    echo "  ./delete-pods.sh --all"
    echo "  ./delete-pods.sh --label app=test-react-iuvity"
    echo "  ./delete-pods.sh --namespace my-namespace --label app=test-react-iuvity"
    echo "  ./delete-pods.sh --force --all"
}

# Default values
NAMESPACE=""
FORCE=""
LABEL=""
DELETE_ALL=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -a|--all)
            DELETE_ALL=true
            shift
            ;;
        -l|--label)
            LABEL="$2"
            shift 2
            ;;
        -n|--namespace)
            NAMESPACE="-n $2"
            shift 2
            ;;
        -f|--force)
            FORCE="--force --grace-period=0"
            shift
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            echo -e "${RED}Error: Unknown option $1${NC}"
            show_usage
            exit 1
            ;;
    esac
done

# Function to confirm deletion
confirm_deletion() {
    local message=$1
    echo -e "${YELLOW}Warning: $message${NC}"
    read -p "Are you sure you want to proceed? (y/N): " response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo -e "${GREEN}Operation cancelled${NC}"
        exit 0
    fi
}

# Function to delete pods
delete_pods() {
    local cmd=$1
    echo -e "${YELLOW}Executing: $cmd${NC}"
    eval "$cmd"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Successfully deleted pods${NC}"
    else
        echo -e "${RED}Error deleting pods${NC}"
        exit 1
    fi
}

# Main logic
if [ "$DELETE_ALL" = true ]; then
    confirm_deletion "This will delete ALL pods in the namespace!"
    delete_pods "kubectl delete pods --all $NAMESPACE $FORCE"
elif [ ! -z "$LABEL" ]; then
    confirm_deletion "This will delete pods with label: $LABEL"
    delete_pods "kubectl delete pods -l $LABEL $NAMESPACE $FORCE"
else
    echo -e "${RED}Error: No operation specified${NC}"
    show_usage
    exit 1
fi 


kubectl delete -f k8s/