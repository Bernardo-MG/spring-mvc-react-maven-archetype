import { defineMessages } from 'react-intl';

/**
 * Application internationalized titles.
 */
const titleMessages = defineMessages({
   about: {
      id: 'title.link.about',
      defaultMessage: 'About'
   },
   dbxPlayers: {
      id: 'title.link.dbx.list',
      defaultMessage: 'DBX Players'
   },
   dbxTeamBuilder: {
      id: 'title.link.dbx.build',
      defaultMessage: 'DBX Team Builder'
   },
   playersCodex: {
      id: 'title.header.codex.players',
      defaultMessage: 'Players List'
   },
   sponsorAffinities: {
      id: 'title.header.dbx.builder.affinities',
      defaultMessage: 'Choose Sponsor Affinities'
   },
   teamBuilder: {
      id: 'title.header.builder',
      defaultMessage: 'Team Builder'
   }
});

export default titleMessages;
