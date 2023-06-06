# FROM next-local
FROM 421805900968.dkr.ecr.us-east-2.amazonaws.com/cloudacademy/labs-workspace/next
# FROM ca-py-image
# FROM 421805900968.dkr.ecr.us-east-2.amazonaws.com/cloudacademy/labs-workspace/ca-theia-express-node-18v2
USER root
WORKDIR /root/lab/

# RUN npm install jest hardhat @nomicfoundation/hardhat-toolbox solc
COPY src ./src
COPY test ./test

RUN cd test && npm install


