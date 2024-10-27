resource "aws_lambda_function" "lambda" {
  filename = data.archive_file.zip.output_path
  source_code_hash = data.archive_file.zip.output_base64sha256
  function_name = "lambda"
  role = aws_iam_role.iam_for_lambda.arn
  handler = "lambda_function.lambda_handler"
  runtime = "python3.8"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "iam_for_lambda_db" {
  name = "iam_for_lambda_db"
  path = "/"
  description = "iam_for_lambda_db"
    policy = jsonencode({
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ],
          "Resource": "arn:aws:logs:*:*:*"
          "Effect": "Allow"
        },
        {
          "Effect": "Allow",
          "Action": [
            "dynamodb:GetItem",
            "dynamodb:PutItem"
          ],
          "Resource": "arn:aws:dynamodb:*:*:table/cloudresume"
        }
      ]
    })
}

resource "aws_iam_role_policy_attachment" "iam_for_lambda_db" {
  role = aws_iam_role.iam_for_lambda.name
  policy_arn = aws_iam_policy.iam_for_lambda_db.arn
}

data "archive_file" "zip" {
  type = "zip"
  source_file = "${path.module}/lambda/lambda_function.py"
  output_path = "${path.module}/lambda/lambda_function.zip"
}
 

resource "aws_lambda_function_url" "url" {
  function_name       = aws_lambda_function.lambda.function_name
  authorization_type  = "NONE"

  cors {
    allow_credentials = true
    allow_headers     = ["keep-alive", "date"]
    allow_methods     = ["*"]
    allow_origins     = ["https://victoriliya.com"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 300
  }
}
