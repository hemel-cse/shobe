// getVisibleprofiles
export default (profiles, { text, sortBy }) => {
    return profiles.filter(profile => {
        const textMatch =
            profile.name.toLowerCase().includes(text.toLowerCase()) ||
            profile.company.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((prof1, prof2) => {
        if (sortBy === 'name') {
            return prof1.name.localeCompare(prof2.name);
        } else if (sortBy === 'company') {
            return prof1.company.name.localeCompare(prof2.company.name);
        }
        else return null;
    });
}