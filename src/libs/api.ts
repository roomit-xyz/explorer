import { type RequestRegistry, type Registry, adapter, withCustomAdapter } from "./registry";

export const DEFAULT: RequestRegistry = {
    auth_params: { url: "/cosmos/auth/v1beta1/params", adapter },
    auth_accounts: { url: "/cosmos/auth/v1beta1/accounts", adapter },
    auth_account_address: { url: "/cosmos/auth/v1beta1/accounts/{address}", adapter },
    bank_params: { url: "/cosmos/bank/v1beta1/params", adapter },
    bank_balances_address: { url: "/cosmos/bank/v1beta1/balances/{address}", adapter },
    bank_denoms_metadata: { url: "/cosmos/bank/v1beta1/denoms_metadata", adapter },
    bank_supply: { url: "/cosmos/bank/v1beta1/supply", adapter },
    bank_supply_by_denom: { url: "/cosmos/bank/v1beta1/supply/{denom}", adapter },
    distribution_params: { url: "/cosmos/distribution/v1beta1/params", adapter },
    distribution_validator_commission: { url: "/cosmos/distribution/v1beta1/validators/{validator_address}/commission", adapter },
    distribution_validator_outstanding_rewards: { url: "/cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards", adapter },
    distribution_validator_slashes: { url: "/cosmos/distribution/v1beta1/validators/{validator_address}/slashes", adapter },
    slashing_params: { url: "/cosmos/slashing/v1beta1/params", adapter },
    slashing_signing_info: { url: "/cosmos/slashing/v1beta1/signing_infos", adapter },
    gov_params_voting: { url: "/cosmos/gov/v1beta1/params/voting", adapter },
    gov_params_tally: { url: "/cosmos/gov/v1beta1/params/tallying", adapter },
    gov_params_deposit: { url: "/cosmos/gov/v1beta1/params/deposit", adapter },
    gov_proposals: { url: "/cosmos/gov/v1beta1/proposals", adapter },
    gov_proposals_proposal_id: {url: "/cosmos/gov/v1beta1/proposals/{proposal_id}", adapter},
    gov_proposals_deposits: { url: "/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits", adapter },
    gov_proposals_tally: { url: "/cosmos/gov/v1beta1/proposals/{proposal_id}/tally", adapter },
    gov_proposals_votes: { url: "/cosmos/gov/v1beta1/proposals/{proposal_id}/votes", adapter },
    gov_proposals_votes_voter: { url: "/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}", adapter },
    staking_deletations: { url: "/cosmos/staking/v1beta1/delegations/{delegator_addr}", adapter },
    staking_delegator_redelegations: { url: "/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations", adapter },
    staking_delegator_unbonding_delegations: { url: "/cosmos/staking/v1beta1/delegators/{delegator_addr}/unbonding_delegations", adapter },
    staking_delegator_validators: { url: "/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators", adapter },
    staking_params: { url: "/cosmos/staking/v1beta1/params", adapter },
    staking_pool: { url: "/cosmos/staking/v1beta1/pool", adapter },
    staking_validators: { url: "/cosmos/staking/v1beta1/validators", adapter },
    staking_validators_address: { url: "/cosmos/staking/v1beta1/validators/{validator_addr}", adapter },
    staking_validators_delegations: { url: "/cosmos/staking/v1beta1/validators/{validator_addr}/delegations", adapter },
    staking_validators_delegations_delegator: { url: "/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}", adapter },
    staking_validators_delegations_unbonding_delegations: { url: "/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation", adapter },
    base_tendermint_abci_query: { url: "/cosmos/base/tendermint/v1beta1/abci_query", adapter },
    base_tendermint_block_latest: { url: "/cosmos/base/tendermint/v1beta1/blocks/latest", adapter },
    base_tendermint_block_height: { url: "/cosmos/base/tendermint/v1beta1/blocks/{height}", adapter },
    base_tendermint_node_info: { url: "/cosmos/base/tendermint/v1beta1/node_info", adapter },
    base_tendermint_validatorsets_latest: { url: "/cosmos/base/tendermint/v1beta1/validatorsets/latest", adapter },
    base_tendermint_validatorsets_height: { url: "/cosmos/base/tendermint/v1beta1/validatorsets/{height}", adapter },
    tx_txs: { url: "/cosmos/tx/v1beta1/txs", adapter },
    tx_txs_block: { url: "/cosmos/tx/v1beta1/txs/block/{height}", adapter },
    tx_hash: { url: "/cosmos/tx/v1beta1/txs/{hash}", adapter },
};

export const VERSION_REGISTRY: Registry = {
    "0.46.1": DEFAULT
}

export const NAME_REGISTRY: Registry = {
    "evmos": withCustomAdapter(DEFAULT, {})
}


