import logging
from labs_cli import call_remote_validation

if logging.getLogger().handlers:
    # if handlers are already configured then use 'em
    # AWS Lambda runtime preconfigures the logger.
    logging.getLogger().setLevel(logging.INFO)
else:
    logging.basicConfig(level=logging.INFO)


def handler(event, *_):
    # Change this to reflect the make command that should be run for this test. 
    logging.info(event)

    if 'endpoints' not in event['step_variables']:
        logging.info('endpoints not defined in step_variables')
        return False

    # Get the first ep with a type of: 'vcf-agent'
    endpoint = [ep for ep in event['step_variables']['endpoints'] if ep['type'] == 'vcf-agent']
    endpoint = endpoint[0]
    logging.info(f'call_remote_validation: endpoint: {endpoint}')
    
    status1, response1 = call_remote_validation(url=endpoint['url'], hostname=endpoint['ip_address'], vcf='smartcontract-one')
    status2, response2 = call_remote_validation(url=endpoint['url'], hostname=endpoint['ip_address'], vcf='smartcontract-two')
    
    hint1 = '' if status1 else  'step1 - step3 - make sure to inherit the ERC20 contract,\n'
    hint2 = '' if status2 else  'step4 - make sure to mint 1000 tokens to msg.sender,\n'
    
    status = status1 & status2
    
    return { 'result': status , 'hint_message': f'Hint: {hint1} {hint2}' }