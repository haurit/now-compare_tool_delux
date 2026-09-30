import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '089fe625d586480abdb04293c271fe78'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'eb912219d7d948e6bf4378c11cfb508d'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '026bf401917f43cdb515edcf35f5d67b'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '032f02cbc3e387106fca9bcd2b0131b9'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                            value: 'right'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '055dd911b23a4e038fd41053c7066024'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05efff519d834b4492c788d62125c70e'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '05f93458db5d0a108152d03cd3961950'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '06fcc9831bd771504422dc61ab4bcb7b'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '072f02cbc3e387106fca9bcd2b0131d6'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_format'
                            value: 'attach_csv_2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '072f02cbc3e387106fca9bcd2b0131e8'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_right'
                            value: 'latest'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '0afb41431bd771504422dc61ab4bcb2e'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '0d4ae6b91b87b9105e14b8449b4bcbb6'
                        key: {
                            ui_policy: '344ae6b91b87b9105e14b8449b4bcbb1'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '11e312751b47b9105e14b8449b4bcb92'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '132f42cbc3e387106fca9bcd2b013132'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'local_remote_one'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '13d54bf11b0bb9105e14b8449b4bcb79'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '13e922b91b87b9105e14b8449b4bcb54'
                        key: {
                            ui_policy: '88996a791b87b9105e14b8449b4bcbb6'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '15c932391bc7b9105e14b8449b4bcb81'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1668e6391b87b9105e14b8449b4bcbec'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '168cfb15319241debc4f834898cedf6e'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'record_right'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '176a541691034b96891f5a3bdc6c6dd6'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '177ddabd1b47b9105e14b8449b4bcb40'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Local (List)'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '17d2648cc34356109ebe8d8dc00131f0'
                        key: {
                            sys_ui_action: '22d2248cc34356109ebe8d8dc00131e9'
                            sys_user_role: {
                                id: 'b2d8f7130a0a0baa5bf52498ecaadeb4'
                                key: {
                                    name: 'security_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '17d54bf11b0bb9105e14b8449b4bcb7e'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18ab704e7fea48acaed6f8e60abdb1b1'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '18eaf2791bc7b9105e14b8449b4bcb84'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19be168bf47c4a2a9620007b00c86f20'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1bd54bf11b0bb9105e14b8449b4bcb6e'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1bd54bf11b0bb9105e14b8449b4bcb83'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c0197a48c6d415baa9d016158aef95b'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c6736651b4b79105e14b8449b4bcb90'
                        key: {
                            sys_security_acl: '5c6736651b4b79105e14b8449b4bcb8d'
                            sys_user_role: {
                                id: '4867fe251b4b79105e14b8449b4bcbce'
                                key: {
                                    name: 'x_snc_compare_tool.config_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1cdc09831bd771504422dc61ab4bcbb3'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f2f42cbc3e387106fca9bcd2b013137'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'remote_remote_list'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1fd54bf11b0bb9105e14b8449b4bcb14'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1fd54bf11b0bb9105e14b8449b4bcb73'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1fd54bf11b0bb9105e14b8449b4bcb88'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '20eaf2791bc7b9105e14b8449b4bcb8f'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2116cff11b0bb9105e14b8449b4bcb12'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '228266f11b87b9105e14b8449b4bcbcf'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local (History)'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '228266f11b87b9105e14b8449b4bcbdf'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24fac412787b4c4e92c877a1b3f079e6'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2516cff11b0bb9105e14b8449b4bcb17'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '25852084c38356109ebe8d8dc0013114'
                        key: {
                            id: '22d2248cc34356109ebe8d8dc00131e9'
                            table: 'sys_ui_action'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '268266f11b87b9105e14b8449b4bcbe4'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2745d2f51b47b9105e14b8449b4bcba8'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2775fe0787fd4211afd2e5602f3e9c6b'
                        key: {
                            logical_table_name: 'x_snc_compare_tool_config'
                            col_name_string: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '277ddabd1b47b9105e14b8449b4bcb46'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '290d4d831bd771504422dc61ab4bcb8f'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2968e6391b87b9105e14b8449b4bcba5'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2a8266f11b87b9105e14b8449b4bcbd4'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2ceaf2791bc7b9105e14b8449b4bcb89'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2d16cff11b0bb9105e14b8449b4bcb0c'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2e8266f11b87b9105e14b8449b4bcbd9'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2fdf821ab932410b98fc502e364dd2f9'
                        key: {
                            logical_table_name: 'x_snc_compare_tool_config'
                            col_name_string: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '344ae6b91b87b9105e14b8449b4bcbb1'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Remote (One) Key SysId'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '3974ac80c38356109ebe8d8dc0013194'
                        key: {
                            id: '1b35ddcb1bd771504422dc61ab4bcb95'
                            table: 'sys_ui_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3d27c5b491c84735a3c197dfbe30a277'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'connection_alias_right'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '3d68e6391b87b9105e14b8449b4bcbaa'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '3e5516f51b47b9105e14b8449b4bcbf1'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '3feb21d6c3a2525016a2269dc0013175'
                        key: {
                            id: '592ba156c3a2525016a2269dc0013175'
                            table: 'sys_ui_action'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '41f93458db5d0a108152d03cd3961951'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '41f93458db5d0a108152d03cd3961952'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '41f93458db5d0a108152d03cd3961953'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'record_left'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '432f02cbc3e387106fca9bcd2b0131df'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_left'
                            value: 'current'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '45f93458db5d0a108152d03cd3961951'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '45f93458db5d0a108152d03cd3961952'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '45f93458db5d0a108152d03cd3961953'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '4668e6391b87b9105e14b8449b4bcbd5'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '472f02cbc3e387106fca9bcd2b0131a8'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_type'
                            value: 'key_fields'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '472f02cbc3e387106fca9bcd2b0131c8'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                            value: 'all'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '479a8d8f1b9771504422dc61ab4bcb57'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '4867fe251b4b79105e14b8449b4bcbce'
                        key: {
                            name: 'x_snc_compare_tool.config_user'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '49c932391bc7b9105e14b8449b4bcb78'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Remote (List)'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '49f93458db5d0a108152d03cd3961951'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '49f93458db5d0a108152d03cd3961952'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '4a68e6391b87b9105e14b8449b4bcbda'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '4b0bad16c3a2525016a2269dc001318c'
                        key: {
                            id: '2fc063991bd3f9104422dc61ab4bcb71'
                            table: 'sys_ui_action'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b2f02cbc3e387106fca9bcd2b0131b7'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                            value: 'left'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b2f02cbc3e387106fca9bcd2b0131f6'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'status'
                            value: 'error'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '4ba10ffd1bc7b9105e14b8449b4bcbe5'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4df93458db5d0a108152d03cd3961951'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4df93458db5d0a108152d03cd3961952'
                        key: {
                            list_id: {
                                id: '05f93458db5d0a108152d03cd3961950'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'key_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f2f02cbc3e387106fca9bcd2b0131d4'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_format'
                            value: 'attach_csv'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '4fa10ffd1bc7b9105e14b8449b4bcbea'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '51c932391bc7b9105e14b8449b4bcba0'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '538b76b91bc7b9105e14b8449b4bcb7f'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '53a10ffd1bc7b9105e14b8449b4bcbf0'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '53a14ffd1bc7b9105e14b8449b4bcb27'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '555653b11b4bb9105e14b8449b4bcbc9'
                        key: {
                            sys_security_acl: '8d5653b11b4bb9105e14b8449b4bcbc5'
                            sys_user_role: {
                                id: '4867fe251b4b79105e14b8449b4bcbce'
                                key: {
                                    name: 'x_snc_compare_tool.config_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55dcc24ea7164988bd3d59ebb88896da'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '561413e639d340509991f0a35bd3c1bc'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '561fc28bc3e387106fca9bcd2b0131f3'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '572f42cbc3e387106fca9bcd2b013136'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'remote_remote_one'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '586736651b4b79105e14b8449b4bcb96'
                        key: {
                            sys_security_acl: '986736651b4b79105e14b8449b4bcb93'
                            sys_user_role: {
                                id: '4867fe251b4b79105e14b8449b4bcbce'
                                key: {
                                    name: 'x_snc_compare_tool.config_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '58eaf2791bc7b9105e14b8449b4bcb6d'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '59c932391bc7b9105e14b8449b4bcb95'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5a1fc28bc3e387106fca9bcd2b0131e9'
                        key: {
                            name: 'x_snc_compare_tool_config'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b2f42cbc3e387106fca9bcd2b013130'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'local_history'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5ccbbab91bc7b9105e14b8449b4bcb89'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5ceaf2791bc7b9105e14b8449b4bcb72'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5d4bfa791bc7b9105e14b8449b4bcbcd'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5dc932391bc7b9105e14b8449b4bcb9a'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '601a80167c2d4e4bb45cd7b157f9b8ac'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '615bf898db5d0a108152d03cd3961986'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '626cf0f392c043b080e1cbbfaeef196d'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_right'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '6478dd76c33a169016a2269dc00131c4'
                        key: {
                            id: 'c26617b11b4bb9105e14b8449b4bcb17'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '655bf898db5d0a108152d03cd3961985'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '677d1ebd1b47b9105e14b8449b4bcbe3'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '677ddabd1b47b9105e14b8449b4bcb43'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6879ddb4e44e40b683503b208aa64c05'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'connection_alias_left'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6916cff11b0bb9105e14b8449b4bcb2b'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '695bf898db5d0a108152d03cd3961987'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6a1f068bc3e387106fca9bcd2b01310b'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a59781a71204ec09aee94df50f25912'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'table_right'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6b7d1ebd1b47b9105e14b8449b4bcbe8'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6d16cff11b0bb9105e14b8449b4bcb30'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d5bf898db5d0a108152d03cd3961986'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6e8266f11b87b9105e14b8449b4bcbd1'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '704ae6b91b87b9105e14b8449b4bcbb4'
                        key: {
                            ui_policy: '344ae6b91b87b9105e14b8449b4bcbb1'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '70972f48c33212909ebe8d8dc00131fa'
                        key: {
                            id: 'ab60a9ed1b2339505e14b8449b4bcb7e'
                            table: 'sys_script'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '712a66b91b87b9105e14b8449b4bcb5e'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Remote (One) Key Fields'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '715bf898db5d0a108152d03cd3961989'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '715bf898db5d0a108152d03cd396198c'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '715bf898db5d0a108152d03cd396198f'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'record_left'
                            position: '26'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '715bf898db5d0a108152d03cd3961992'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'output_fields'
                            position: '34'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '72a10ffd1bc7b9105e14b8449b4bcbdb'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '735eae0cfc8e4539b0770351360d6cd3'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '737d1ebd1b47b9105e14b8449b4bcbf3'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '755bf898db5d0a108152d03cd3961988'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '755bf898db5d0a108152d03cd396198b'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'connection_alias_right'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '755bf898db5d0a108152d03cd396198e'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '24'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '755bf898db5d0a108152d03cd3961991'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'key_fields'
                            position: '32'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '755bf898db5d0a108152d03cd3961994'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '40'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '7622d2f11b47b9105e14b8449b4bcb8c'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Local (One)'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '76a10ffd1bc7b9105e14b8449b4bcbe0'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7713956f30384acf9b01fed572433f40'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_left'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '777d1ebd1b47b9105e14b8449b4bcbf8'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77fd047a5d904d11a3977f6be32d2edb'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78d77d6a16fa42d2a9fdad07455905da'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'record_left'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '792a66b91b87b9105e14b8449b4bcb63'
                        key: {
                            ui_policy: '712a66b91b87b9105e14b8449b4bcb5e'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '795bf898db5d0a108152d03cd396198a'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'connection_alias_left'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '795bf898db5d0a108152d03cd396198d'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'table_right'
                            position: '22'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '795bf898db5d0a108152d03cd3961990'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'filter_condition'
                            position: '30'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '795bf898db5d0a108152d03cd3961993'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '38'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '7a8266f11b87b9105e14b8449b4bcbf8'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '7d00a8401be375504422dc61ab4bcb87'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Table History Show Count'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d5bf898db5d0a108152d03cd3961989'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d5bf898db5d0a108152d03cd396198c'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'key_type'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d5bf898db5d0a108152d03cd396198f'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'record_right'
                            position: '28'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d5bf898db5d0a108152d03cd3961992'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '36'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '7dbc85831bd771504422dc61ab4bcb68'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '7f7d1ebd1b47b9105e14b8449b4bcbed'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '832f02cbc3e387106fca9bcd2b0131b6'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                            value: 'diff'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '832f02cbc3e387106fca9bcd2b0131f5'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '832f42cbc3e387106fca9bcd2b01312f'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'local_local_list'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '849ab8ee19f74be58128c10964fbe3ae'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '86e29ef11b47b9105e14b8449b4bcb97'
                        key: {
                            category: 'x_snc_compare_tool_config'
                            prefix: 'CMPCFG'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '872f02cbc3e387106fca9bcd2b0131d3'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_format'
                            value: 'screen'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '88996a791b87b9105e14b8449b4bcbb6'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Remote (One) Key Type Filter'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '89c932391bc7b9105e14b8449b4bcb7e'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '8a68e6391b87b9105e14b8449b4bcbe9'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ceae931313a4648971f5d76ae1e2cc2'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'record_right'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f2f02cbc3e387106fca9bcd2b0131a6'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_type'
                            value: 'filter_condition'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '909c81831bd771504422dc61ab4bcba9'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '90eaf2791bc7b9105e14b8449b4bcb87'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91aa8d70363f4d448d22f8ececc6275e'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '93d54bf11b0bb9105e14b8449b4bcb71'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '93d54bf11b0bb9105e14b8449b4bcb86'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '94eab2791bc7b9105e14b8449b4bcbc6'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Remote (Count)'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '9568eef51b87b9105e14b8449b4bcbca'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Local to Remote (One)'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '96db8d031bd771504422dc61ab4bcb68'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '97d54bf11b0bb9105e14b8449b4bcb76'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '98de4283c37ade909ebe8d8dc0013185'
                        key: {
                            id: '1b5fcb6a1bdffd104422dc61ab4bcb9b'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '9916cff11b0bb9105e14b8449b4bcb04'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Remote to Remote (Count)'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9a1fc28bc3e387106fca9bcd2b0131f0'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ac7dcdd43454c01aab18a009a11f26e'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9bd54bf11b0bb9105e14b8449b4bcb7b'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c81b61546484043a352bb454554b0eb'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9ceaf2791bc7b9105e14b8449b4bcb6a'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9dba01cf1b9771504422dc61ab4bcbe3'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9dc932391bc7b9105e14b8449b4bcb83'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ed9e12b31d84a7d849bdb5a9e8dd145'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9f2f42cbc3e387106fca9bcd2b013134'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'local_remote_count'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9f6b45031bd771504422dc61ab4bcb32'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9fd54bf11b0bb9105e14b8449b4bcb80'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9ff962b91b87b9105e14b8449b4bcbf2'
                        key: {
                            ui_policy: '88996a791b87b9105e14b8449b4bcbb6'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a116cff11b0bb9105e14b8449b4bcb0a'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a22c85431bd771504422dc61ab4bcb6c'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a28266f11b87b9105e14b8449b4bcbd7'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a46736651b4b79105e14b8449b4bcb9c'
                        key: {
                            sys_security_acl: 'd46736651b4b79105e14b8449b4bcb99'
                            sys_user_role: {
                                id: '4867fe251b4b79105e14b8449b4bcbce'
                                key: {
                                    name: 'x_snc_compare_tool.config_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a4eaf2791bc7b9105e14b8449b4bcb8c'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a516cff11b0bb9105e14b8449b4bcb0f'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a68266f11b87b9105e14b8449b4bcbdc'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a85c89431bd771504422dc61ab4bcb2e'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a8eaf2791bc7b9105e14b8449b4bcb91'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a916cff11b0bb9105e14b8449b4bcb14'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'aa1f068bc3e387106fca9bcd2b013108'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'aa2b8dcf1b9771504422dc61ab4bcb59'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'aa8266f11b87b9105e14b8449b4bcbe1'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'abf316751b47b9105e14b8449b4bcbd7'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ad16cff11b0bb9105e14b8449b4bcb19'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ad68e6391b87b9105e14b8449b4bcba2'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ae1f068bc3e387106fca9bcd2b013105'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Remote to Remote (One)'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aeaa3e2b77ce4755949ffb8488d2cb9d'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'table_history_show_count'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b12be156c3a2525016a2269dc001316e'
                        key: {
                            sys_ui_action: '592ba156c3a2525016a2269dc0013175'
                            sys_user_role: {
                                id: 'b2d8f7130a0a0baa5bf52498ecaadeb4'
                                key: {
                                    name: 'security_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b168e6391b87b9105e14b8449b4bcba8'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b330ac401be375504422dc61ab4bcbec'
                        key: {
                            ui_policy: '7d00a8401be375504422dc61ab4bcb87'
                            field: 'table_history_show_count'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'b37ac28bc33ade909ebe8d8dc001314b'
                        key: {
                            id: 'd00513711b4bb9105e14b8449b4bcb69'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_ui_policy_rl_action'
                        id: 'b467a5a51b6339505e14b8449b4bcb04'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            list: 'REL:1d03bace1b07f9105e14b8449b4bcb3d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b49a040eff7a4e888c1fb01ebfcd1fc0'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b6a10ffd1bc7b9105e14b8449b4bcbd8'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba4f0a7cc618404a8414fe9bf85dc6d1'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'bceae516c3a2525016a2269dc00131e4'
                        key: {
                            sys_ui_action: '2fc063991bd3f9104422dc61ab4bcb71'
                            sys_user_role: {
                                id: 'b2d8f7130a0a0baa5bf52498ecaadeb4'
                                key: {
                                    name: 'security_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'bd2a66b91b87b9105e14b8449b4bcb60'
                        key: {
                            ui_policy: '712a66b91b87b9105e14b8449b4bcb5e'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'bdabf6b91bc7b9105e14b8449b4bcb7b'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'be8266f11b87b9105e14b8449b4bcbe6'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'bf0cc1431bd771504422dc61ab4bcb75'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf17535081894e0b967406d4239dac22'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf3502cc37f449f297a0dd1f11663ebc'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'filter_condition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf636dad43c745e3b99acf59b9dc487d'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf79ac5e64cc43eb9d7f0f3a25a89e2b'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'c108ab88c33212909ebe8d8dc0013109'
                        key: {
                            id: '9551e5211b6339505e14b8449b4bcba4'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c3a10ffd1bc7b9105e14b8449b4bcbe8'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c4341e751b47b9105e14b8449b4bcb46'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c4d31e351b47b9105e14b8449b4bcbb6'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c5ac05831bd771504422dc61ab4bcba1'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c727d3f5583645a288017c80a8ca0661'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'table_history_show_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c72f02cbc3e387106fca9bcd2b0131a4'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_type'
                            value: 'sys_id'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c72f02cbc3e387106fca9bcd2b0131ba'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_filter'
                            value: 'diffonly'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'c81ad24bc3bade909ebe8d8dc0013153'
                        key: {
                            id: '2f0c002e1bc73d105e14b8449b4bcb15'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c8449e751b47b9105e14b8449b4bcbf9'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c84b01031bd771504422dc61ab4bcb32'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c92512f51b47b9105e14b8449b4bcb1a'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c9c63e251b4b79105e14b8449b4bcb0d'
                        key: {
                            name: 'x_snc_compare_tool_config'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c9c932391bc7b9105e14b8449b4bcb7b'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'record_left'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb2f02cbc3e387106fca9bcd2b0131f3'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'status'
                            value: 'running'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb2f42cbc3e387106fca9bcd2b01312d'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'local_local_one'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'cc8bf2b91bc7b9105e14b8449b4bcbd0'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'cc931a351b47b9105e14b8449b4bcb65'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd256a127b3b419594f192cd1e1cbf2e'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ce1bc9cf1b9771504422dc61ab4bcbf3'
                        key: {
                            ui_policy: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                            field: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ce68e6391b87b9105e14b8449b4bcbd7'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'cfa10ffd1bc7b9105e14b8449b4bcbe2'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'cfd54bf11b0bb9105e14b8449b4bcb11'
                        key: {
                            table: 'x_snc_compare_tool_config'
                            short_description: 'Remote to Remote (List)'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0050a8b01f1473ab39818a4b0c2da64'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd06736651b4b79105e14b8449b4bcb8a'
                        key: {
                            sys_security_acl: '1c6736651b4b79105e14b8449b4bcb85'
                            sys_user_role: {
                                id: '4867fe251b4b79105e14b8449b4bcbce'
                                key: {
                                    name: 'x_snc_compare_tool.config_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd0eaf2791bc7b9105e14b8449b4bcb70'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'd1b7e388c33212909ebe8d8dc00131c0'
                        key: {
                            id: '3897ef48c33212909ebe8d8dc0013170'
                            table: 'sys_script'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd1c932391bc7b9105e14b8449b4bcb98'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'output_fields'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd32f42cbc3e387106fca9bcd2b013139'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'remote_remote_count'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd4eaf2791bc7b9105e14b8449b4bcb75'
                        key: {
                            ui_policy: '94eab2791bc7b9105e14b8449b4bcbc6'
                            field: 'record_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd50b49cf1b9771504422dc61ab4bcbf4'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'snapshot_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd516cff11b0bb9105e14b8449b4bcb07'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd5c932391bc7b9105e14b8449b4bcb9d'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd72f42cbc3e387106fca9bcd2b013133'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                            value: 'local_remote_list'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd7a10ffd1bc7b9105e14b8449b4bcbed'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd7a14ffd1bc7b9105e14b8449b4bcb24'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd9c932391bc7b9105e14b8449b4bcba2'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'dc29ed8359dc41ada61248c59d60670d'
                        key: {
                            logical_table_name: 'x_snc_compare_tool_config'
                            col_name_string: 'record_left'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ddc932391bc7b9105e14b8449b4bcb92'
                        key: {
                            ui_policy: '49c932391bc7b9105e14b8449b4bcb78'
                            field: 'connection_alias_left'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df968db8494a4ec388f0f4012bf03983'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'key_type'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'e0b951643f5641e9a942ea57bb69e06d'
                        key: {
                            logical_table_name: 'x_snc_compare_tool_config'
                            col_name_string: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0bd97fd2cde4ef9a54674bb76dc9c69'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'table_left'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e116cff11b0bb9105e14b8449b4bcb2e'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e15bf898db5d0a108152d03cd3961987'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'type'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e21f068bc3e387106fca9bcd2b013107'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'snapshot_right'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e55bf898db5d0a108152d03cd3961986'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e61f068bc3e387106fca9bcd2b013103'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e95bf898db5d0a108152d03cd3961985'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'eb6b32b91bc7b9105e14b8449b4bcba9'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'table_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ed16cff11b0bb9105e14b8449b4bcb28'
                        key: {
                            ui_policy: '9916cff11b0bb9105e14b8449b4bcb04'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed5bf898db5d0a108152d03cd3961987'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ed68e6391b87b9105e14b8449b4bcb9f'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'key_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ef7d1ebd1b47b9105e14b8449b4bcbe5'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'filter_condition'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f15bf898db5d0a108152d03cd396198a'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f15bf898db5d0a108152d03cd396198d'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f15bf898db5d0a108152d03cd3961990'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '29'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f15bf898db5d0a108152d03cd3961993'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'snapshot_left'
                            position: '37'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f37d1ebd1b47b9105e14b8449b4bcbeb'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f55bf898db5d0a108152d03cd3961989'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'output_filter'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f55bf898db5d0a108152d03cd396198c'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'table_left'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f55bf898db5d0a108152d03cd396198f'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '27'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f55bf898db5d0a108152d03cd3961992'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '35'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f6ffb9727c81473da12cef11c2abe31c'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'output_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f71957f32e794f6b9fec004525a8c82e'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'record_left'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f77d1ebd1b47b9105e14b8449b4bcbf0'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f886d6391b47b9105e14b8449b4bcb2e'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f95bf898db5d0a108152d03cd3961988'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'output_format'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f95bf898db5d0a108152d03cd396198b'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f95bf898db5d0a108152d03cd396198e'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '25'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f95bf898db5d0a108152d03cd3961991'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '33'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f968e6391b87b9105e14b8449b4bcbd2'
                        key: {
                            ui_policy: '9568eef51b87b9105e14b8449b4bcbca'
                            field: 'connection_alias_right'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'fa9496b51b47b9105e14b8449b4bcbd2'
                        key: {
                            ui_policy: '7622d2f11b47b9105e14b8449b4bcb8c'
                            field: 'output_filter'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'faa10ffd1bc7b9105e14b8449b4bcbdd'
                        key: {
                            ui_policy: 'aea1cbfd1bc7b9105e14b8449b4bcb3a'
                            field: 'key_fields'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'fb7d1ebd1b47b9105e14b8449b4bcbf5'
                        key: {
                            ui_policy: '177ddabd1b47b9105e14b8449b4bcb40'
                            field: 'output_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc0f630378594a89bc70022e268af9b1'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_rl_action'
                        id: 'fc7a99691b2339505e14b8449b4bcb6a'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            list: 'REL:1d03bace1b07f9105e14b8449b4bcb3d'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd5bf898db5d0a108152d03cd396198a'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd5bf898db5d0a108152d03cd396198d'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'table_history_show_count'
                            position: '23'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd5bf898db5d0a108152d03cd3961990'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '31'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd5bf898db5d0a108152d03cd3961993'
                        key: {
                            sys_ui_section: {
                                id: 'dc305a7d1b07b9105e14b8449b4bcb13'
                                key: {
                                    name: 'x_snc_compare_tool_config'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'snapshot_right'
                            position: '39'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'fe8266f11b87b9105e14b8449b4bcbf5'
                        key: {
                            ui_policy: '228266f11b87b9105e14b8449b4bcbcf'
                            field: 'table_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'feb8539c76484b9881a1dcd3f3daa1a8'
                        key: {
                            name: 'x_snc_compare_tool_config'
                            element: 'status'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
