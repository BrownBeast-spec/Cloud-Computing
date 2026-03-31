package main

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

func main() {
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("ap-southeast-2"))
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	svc := dynamodb.NewFromConfig(cfg)

	// Scan returns all items in the table
	resp, err := svc.Scan(context.TODO(), &dynamodb.ScanInput{
		TableName: aws.String("2023BCD0038"),
	})
	if err != nil {
		log.Fatalf("Scan failed: %v", err)
	}

	fmt.Println(":Table Data")
	for _, item := range resp.Items {
		// Helper to extract values cleanly
		id := item["customerid"].(*types.AttributeValueMemberN).Value
		name := item["Name"].(*types.AttributeValueMemberS).Value
		course := item["Course"].(*types.AttributeValueMemberS).Value
		score := item["Score"].(*types.AttributeValueMemberN).Value

		fmt.Printf("ID: %s | Name: %s | Course: %s | Score: %s\n", id, name, course, score)
	}
}
