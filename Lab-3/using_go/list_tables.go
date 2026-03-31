package main

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

func main() {
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("ap-southeast-2"))
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	svc := dynamodb.NewFromConfig(cfg)

	resp, err := svc.ListTables(context.TODO(), &dynamodb.ListTablesInput{})
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	fmt.Println("Tables found:")
	for _, tableName := range resp.TableNames {
		fmt.Println(tableName)
	}
}
