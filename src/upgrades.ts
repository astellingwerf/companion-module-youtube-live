import {
	CompanionStaticUpgradeProps,
	CompanionStaticUpgradeResult,
	CompanionStaticUpgradeScript,
	CompanionUpgradeContext,
} from '@companion-module/base';
import { ActionId } from './actions';
import { YoutubeConfig } from './config';

function add_default_for_ensure_presence_of_all_zeroes_timestamp(
	_context: CompanionUpgradeContext<YoutubeConfig>,
	props: CompanionStaticUpgradeProps<YoutubeConfig>
): CompanionStaticUpgradeResult<YoutubeConfig> {
	const result: CompanionStaticUpgradeResult<YoutubeConfig> = {
		updatedConfig: null,
		updatedActions: [],
		updatedFeedbacks: [],
	};

	props.actions
		.filter((v) => v.actionId === ActionId.AddChapterToDescription && !('ensure_presence_of_all_zeroes_timestamp' in v.options))
		.forEach((v) => {
			v.options.ensure_presence_of_all_zeroes_timestamp = true;
			result.updatedActions.push(v);
		});

	return result;
}

export const UpgradeScripts: CompanionStaticUpgradeScript<YoutubeConfig>[] = [
	add_default_for_ensure_presence_of_all_zeroes_timestamp,
];
