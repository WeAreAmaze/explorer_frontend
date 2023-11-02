import {
  HStack,
  Box,
  Flex,
  Skeleton,
} from '@chakra-ui/react';
import React from 'react';

import type { Transaction } from 'types/api/transaction';

import config from 'configs/app';
import rightArrowIcon from 'icons/arrows/east.svg';
import getValueWithUnit from 'lib/getValueWithUnit';
import useTimeAgoIncrement from 'lib/hooks/useTimeAgoIncrement';
import { space } from 'lib/html-entities';
import Icon from 'ui/shared/chakra/Icon';
import AddressEntity from 'ui/shared/entities/address/AddressEntity';
import BlockEntity from 'ui/shared/entities/block/BlockEntity';
import TxEntity from 'ui/shared/entities/tx/TxEntity';
import InOutTag from 'ui/shared/InOutTag';
import ListItemMobile from 'ui/shared/ListItemMobile/ListItemMobile';
import TxStatus from 'ui/shared/statusTag/TxStatus';
import TxFeeStability from 'ui/shared/tx/TxFeeStability';
import TxWatchListTags from 'ui/shared/tx/TxWatchListTags';
import TxAdditionalInfo from 'ui/txs/TxAdditionalInfo';
import TxType from 'ui/txs/TxType';

type Props = {
  tx: Transaction;
  showBlockInfo: boolean;
  currentAddress?: string;
  enableTimeIncrement?: boolean;
  isLoading?: boolean;
}

const TAG_WIDTH = 48;
const ARROW_WIDTH = 24;

const TxsListItem = ({ tx, isLoading, showBlockInfo, currentAddress, enableTimeIncrement }: Props) => {
  const dataTo = tx.to ? tx.to : tx.created_contract;

  const isOut = Boolean(currentAddress && currentAddress === tx.from.hash);
  const isIn = Boolean(currentAddress && currentAddress === tx.to?.hash);

  const timeAgo = useTimeAgoIncrement(tx.timestamp, enableTimeIncrement);

  return (
    <ListItemMobile display="block" width="100%" isAnimated key={ tx.hash }>
      { tx.address_hash && (
        <Flex mt={ 3 }>
          { /* <Skeleton isLoaded={ !isLoading } display="inline-block" whiteSpace="pre">Method </Skeleton> */ }
          { /* <Skeleton isLoaded={ !isLoading } display="inline-block" whiteSpace="pre">Method </Skeleton> */ }
          <Skeleton
            isLoaded={ !isLoading }
            color="text_secondary"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            <span>{ tx.address_hash }</span>
          </Skeleton>
        </Flex>
      ) }
      <Flex mt={ 3 }>
        { /* <Skeleton isLoaded={ !isLoading } display="inline-block" whiteSpace="pre">Method </Skeleton> */ }
        { /* <Skeleton isLoaded={ !isLoading } display="inline-block" whiteSpace="pre">Method </Skeleton> */ }
        <Skeleton
          isLoaded={ !isLoading }
          color="text_secondary"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          <span>{ tx.public_key }</span>
        </Skeleton>
      </Flex>

    </ListItemMobile>
  );
};

export default React.memo(TxsListItem);
