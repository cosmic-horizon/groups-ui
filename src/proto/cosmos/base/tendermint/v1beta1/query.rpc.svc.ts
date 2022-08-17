import { PageRequest, PageResponse } from '../../query/v1beta1/pagination'
import { Any } from '../../../../google/protobuf/any'
import { BlockID } from '../../../../tendermint/types/types'
import { Block as Block1 } from '../../../../tendermint/types/block'
import { Block as Block2 } from './types'
import { DefaultNodeInfo } from '../../../../tendermint/p2p/types'
import { Rpc } from '@osmonauts/helpers'
import * as _m0 from 'protobufjs/minimal'
import {
  GetNodeInfoRequest,
  GetNodeInfoResponse,
  GetSyncingRequest,
  GetSyncingResponse,
  GetLatestBlockRequest,
  GetLatestBlockResponse,
  GetBlockByHeightRequest,
  GetBlockByHeightResponse,
  GetLatestValidatorSetRequest,
  GetLatestValidatorSetResponse,
  GetValidatorSetByHeightRequest,
  GetValidatorSetByHeightResponse,
  ABCIQueryRequest,
  ABCIQueryResponse,
} from './query'

/** Service defines the RPC service */
export interface Service {
  getNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>
  /*GetNodeInfo queries the current node info.*/

  getSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>
  /*GetSyncing queries node syncing.*/

  getLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>
  /*GetLatestBlock returns the latest block.*/

  getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>
  /*GetBlockByHeight queries block for given height.*/

  getLatestValidatorSet(
    request: GetLatestValidatorSetRequest,
  ): Promise<GetLatestValidatorSetResponse>
  /*GetLatestValidatorSet queries latest validator-set.*/

  getValidatorSetByHeight(
    request: GetValidatorSetByHeightRequest,
  ): Promise<GetValidatorSetByHeightResponse>
  /*GetValidatorSetByHeight queries validator-set at a given height.*/

  aBCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>
  /*ABCIQuery defines a query handler that supports ABCI queries directly to
  the application, bypassing Tendermint completely. The ABCI query must
  contain a valid and supported path, including app, custom, p2p, and store.
  
  Since: cosmos-sdk 0.46*/
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc

  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.getNodeInfo = this.getNodeInfo.bind(this)
    this.getSyncing = this.getSyncing.bind(this)
    this.getLatestBlock = this.getLatestBlock.bind(this)
    this.getBlockByHeight = this.getBlockByHeight.bind(this)
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this)
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this)
    this.aBCIQuery = this.aBCIQuery.bind(this)
  }

  getNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse> {
    const data = GetNodeInfoRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'GetNodeInfo',
      data,
    )
    return promise.then((data) => GetNodeInfoResponse.decode(new _m0.Reader(data)))
  }

  getSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse> {
    const data = GetSyncingRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'GetSyncing',
      data,
    )
    return promise.then((data) => GetSyncingResponse.decode(new _m0.Reader(data)))
  }

  getLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse> {
    const data = GetLatestBlockRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'GetLatestBlock',
      data,
    )
    return promise.then((data) => GetLatestBlockResponse.decode(new _m0.Reader(data)))
  }

  getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
    const data = GetBlockByHeightRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'GetBlockByHeight',
      data,
    )
    return promise.then((data) => GetBlockByHeightResponse.decode(new _m0.Reader(data)))
  }

  getLatestValidatorSet(
    request: GetLatestValidatorSetRequest,
  ): Promise<GetLatestValidatorSetResponse> {
    const data = GetLatestValidatorSetRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'GetLatestValidatorSet',
      data,
    )
    return promise.then((data) =>
      GetLatestValidatorSetResponse.decode(new _m0.Reader(data)),
    )
  }

  getValidatorSetByHeight(
    request: GetValidatorSetByHeightRequest,
  ): Promise<GetValidatorSetByHeightResponse> {
    const data = GetValidatorSetByHeightRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'GetValidatorSetByHeight',
      data,
    )
    return promise.then((data) =>
      GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)),
    )
  }

  aBCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse> {
    const data = ABCIQueryRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.base.tendermint.v1beta1.Service',
      'ABCIQuery',
      data,
    )
    return promise.then((data) => ABCIQueryResponse.decode(new _m0.Reader(data)))
  }
}
