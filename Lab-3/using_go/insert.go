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
	// 1. Configure for Sydney Region
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("ap-southeast-2"))
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	svc := dynamodb.NewFromConfig(cfg)

	// 2. Define the Item
	item := map[string]types.AttributeValue{
		"customerid": &types.AttributeValueMemberN{Value: "105"}, // Number (sent as string in Go)
		"Name":       &types.AttributeValueMemberS{Value: "Suraj Harlekar(added using Go)"},
		"Course":     &types.AttributeValueMemberS{Value: "Golang Programming"},
		"Score":      &types.AttributeValueMemberN{Value: "89"},
	}

	// 3. Put Item
	_, err = svc.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("2023BCD0038"),
		Item:      item,
	})

	if err != nil {
		log.Fatalf("Insert failed: %v", err)
	}

	fmt.Println("Successfully inserted item into 2023BCD0038")
}
